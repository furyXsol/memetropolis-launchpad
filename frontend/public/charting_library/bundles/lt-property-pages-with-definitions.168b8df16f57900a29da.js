'use strict'
;(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [8537],
  {
    86778: (e, t, i) => {
      i.d(t, { getLinesStylesPropertiesDefinitions: () => y })
      var n = i(44352),
        o = i(36298),
        r = i(2908),
        l = i(46141),
        s = i(94474)
      const a = new o.TranslatedString(
          'change {title} price label visibility',
          n.t(null, void 0, i(45936)),
        ),
        c = new o.TranslatedString(
          'change {title} extension',
          n.t(null, void 0, i(86647)),
        ),
        d = new o.TranslatedString(
          'change {title} time label visibility',
          n.t(null, void 0, i(33822)),
        ),
        p = n.t(null, void 0, i(23675)),
        u = n.t(null, void 0, i(55325)),
        h = n.t(null, void 0, i(1220))
      function y(e, t, i) {
        const n = (0, s.removeSpaces)(i.originalText()),
          o = [],
          y = (0, r.createLineStyleDefinition)(
            e,
            {
              lineColor: t.linecolor,
              lineWidth: t.linewidth,
              lineStyle: t.linestyle,
            },
            i,
            'Line',
          )
        if ((o.push(y), 'showPrice' in t)) {
          const r = (0, l.createCheckablePropertyDefinition)(
            {
              checked: (0, l.convertToDefinitionProperty)(
                e,
                t.showPrice,
                a.format({ title: i }),
              ),
            },
            { id: `${n}ShowPrice`, title: p },
          )
          o.push(r)
        }
        if ('extendLine' in t) {
          const r = (0, l.createCheckablePropertyDefinition)(
            {
              checked: (0, l.convertToDefinitionProperty)(
                e,
                t.extendLine,
                c.format({ title: i }),
              ),
            },
            { id: `${n}ExtendLine`, title: h },
          )
          o.push(r)
        }
        if ('showTime' in t) {
          const r = (0, l.createCheckablePropertyDefinition)(
            {
              checked: (0, l.convertToDefinitionProperty)(
                e,
                t.showTime,
                d.format({ title: i }),
              ),
            },
            { id: `${n}ShowTime`, title: u },
          )
          o.push(r)
        }
        return { definitions: o }
      }
    },
    43940: (e, t, i) => {
      i.r(t), i.d(t, { getSelectionStylePropertiesDefinitions: () => y })
      var n = i(44352),
        o = i(68806),
        r = i(62513),
        l = i(36298),
        s = i(46141)
      const a = new l.TranslatedString(
          'lines width',
          n.t(null, void 0, i(73043)),
        ),
        c = new l.TranslatedString('lines style', n.t(null, void 0, i(41075))),
        d = new l.TranslatedString('lines color', n.t(null, void 0, i(70607))),
        p = new l.TranslatedString(
          'backgrounds color',
          n.t(null, void 0, i(21926)),
        ),
        u = new l.TranslatedString(
          'backgrounds filled',
          n.t(null, void 0, i(52241)),
        ),
        h = new l.TranslatedString('text color', n.t(null, void 0, i(41437)))
      function y(e, t) {
        const l = []
        if ('linesWidths' in e || 'linestyle' in e || 'linesColors' in e) {
          const p = (0, s.createLinePropertyDefinition)(
            {
              width: e.linesWidths
                ? new r.CollectiblePropertyUndoWrapper(
                    new o.LineToolCollectedProperty(e.linesWidths),
                    a,
                    t,
                  )
                : void 0,
              style: e.linestyle
                ? new r.CollectiblePropertyUndoWrapper(
                    new o.LineToolCollectedProperty(e.linestyle),
                    c,
                    t,
                  )
                : void 0,
              color: e.linesColors
                ? new r.CollectiblePropertyUndoWrapper(
                    new o.LineToolCollectedProperty(e.linesColors),
                    d,
                    t,
                  )
                : void 0,
            },
            { id: 'LineStyles', title: n.t(null, void 0, i(1277)) },
          )
          l.push(p)
        }
        if ('backgroundsColors' in e) {
          const a = (0, s.createColorPropertyDefinition)(
            {
              checked: e.fillBackground
                ? new r.CollectiblePropertyUndoWrapper(
                    new o.LineToolCollectedProperty(e.fillBackground),
                    u,
                    t,
                  )
                : void 0,
              color: new r.CollectiblePropertyUndoWrapper(
                new o.LineToolCollectedProperty(e.backgroundsColors),
                p,
                t,
              ),
            },
            { id: 'BackgroundColors', title: n.t(null, void 0, i(27331)) },
          )
          l.push(a)
        }
        if ('textsColors' in e) {
          const a = (0, s.createLinePropertyDefinition)(
            {
              color: new r.CollectiblePropertyUndoWrapper(
                new o.LineToolCollectedProperty(e.textsColors),
                h,
                t,
              ),
            },
            { id: 'TextColors', title: n.t(null, void 0, i(37229)) },
          )
          l.push(a)
        }
        return { definitions: l }
      }
    },
    75611: (e, t, i) => {
      i.d(t, {
        getTrendLineToolsStylePropertiesDefinitions: () => W,
      })
      var n = i(44352),
        o = i(36298),
        r = i(2908),
        l = i(46141),
        s = i(97145),
        a = i(9155),
        c = i(94474)
      const d = new o.TranslatedString(
          'change {title} middle point visibility',
          n.t(null, void 0, i(89996)),
        ),
        p = new o.TranslatedString(
          'change {title} price labels visibility',
          n.t(null, void 0, i(88577)),
        ),
        u = new o.TranslatedString(
          'change {title} price range visibility',
          n.t(null, void 0, i(47045)),
        ),
        h = new o.TranslatedString(
          'change {title} percent change visibility',
          n.t(null, void 0, i(62243)),
        ),
        y = new o.TranslatedString(
          'change {title} change in pips visibility',
          n.t(null, void 0, i(22430)),
        ),
        f = new o.TranslatedString(
          'change {title} bars range visibility',
          n.t(null, void 0, i(42746)),
        ),
        v = new o.TranslatedString(
          'change {title} date/time range visibility',
          n.t(null, void 0, i(15485)),
        ),
        g = new o.TranslatedString(
          'change {title} distance visibility',
          n.t(null, void 0, i(91534)),
        ),
        T = new o.TranslatedString(
          'change {title} angle visibility',
          n.t(null, void 0, i(45537)),
        ),
        D = new o.TranslatedString(
          'change {title} always show stats',
          n.t(null, void 0, i(37913)),
        ),
        w = new o.TranslatedString(
          'change {title} stats position',
          n.t(null, void 0, i(588)),
        ),
        _ = [
          { value: a.StatsPosition.Left, title: n.t(null, void 0, i(19286)) },
          { value: a.StatsPosition.Center, title: n.t(null, void 0, i(72171)) },
          { value: a.StatsPosition.Right, title: n.t(null, void 0, i(21141)) },
          { value: a.StatsPosition.Auto, title: n.t(null, void 0, i(86951)) },
        ],
        P = n.t(null, void 0, i(24510)),
        S = n.t(null, void 0, i(75675)),
        m = n.t(null, void 0, i(28712)),
        b = n.t(null, void 0, i(46964)),
        C = n.t(null, void 0, i(2694)),
        L = n.t(null, void 0, i(60066)),
        x = n.t(null, void 0, i(19949)),
        k = n.t(null, void 0, i(67114)),
        A = n.t(null, void 0, i(75460)),
        V = n.t(null, void 0, i(36150)),
        $ = n.t(null, void 0, i(85160)),
        M = n.t(null, void 0, i(37249))
      function W(e, t, i, n) {
        const o = (0, c.removeSpaces)(i.originalText()),
          a = [],
          W = t,
          B = (0, r.createLineStyleDefinition)(
            e,
            {
              ...W,
              lineColor: t.linecolor,
              lineWidth: t.linewidth,
              lineStyle: t.linestyle,
            },
            i,
            'Line',
          )
        a.push(B)
        const z = (0, l.createCheckablePropertyDefinition)(
          {
            checked: (0, l.convertToDefinitionProperty)(
              e,
              t.showMiddlePoint,
              d.format({ title: i }),
            ),
          },
          { id: `${o}MiddlePoint`, title: (n && n.middlePoint) || P },
        )
        a.push(z)
        const N = (0, l.createCheckablePropertyDefinition)(
          {
            checked: (0, l.convertToDefinitionProperty)(
              e,
              t.showPriceLabels,
              p.format({ title: i }),
            ),
          },
          {
            id: `${o}ShowPriceLabels`,
            title: (n && n.showPriceLabelsTitle) || S,
          },
        )
        a.push(N)
        const R = [],
          G = (0, l.createCheckablePropertyDefinition)(
            {
              checked: (0, l.convertToDefinitionProperty)(
                e,
                t.showPriceRange,
                u.format({ title: i }),
              ),
            },
            { id: `${o}PriceRange`, title: (n && n.priceRange) || b },
          )
        R.push(G)
        const E = (0, l.createCheckablePropertyDefinition)(
          {
            checked: (0, l.convertToDefinitionProperty)(
              e,
              t.showPercentPriceRange,
              h.format({ title: i }),
            ),
          },
          { id: `${o}PercentChange`, title: (n && n.percentChange) || C },
        )
        R.push(E)
        const O = (0, l.createCheckablePropertyDefinition)(
          {
            checked: (0, l.convertToDefinitionProperty)(
              e,
              t.showPipsPriceRange,
              y.format({ title: i }),
            ),
          },
          { id: `${o}PipsChange`, title: (n && n.pipsChange) || L },
        )
        R.push(O)
        const U = (0, l.createCheckablePropertyDefinition)(
          {
            checked: (0, l.convertToDefinitionProperty)(
              e,
              t.showBarsRange,
              f.format({ title: i }),
            ),
          },
          { id: `${o}BarsRange`, title: (n && n.barRange) || x },
        )
        if ((R.push(U), 'showDateTimeRange' in t)) {
          const r = (0, l.createCheckablePropertyDefinition)(
            {
              checked: (0, l.convertToDefinitionProperty)(
                e,
                t.showDateTimeRange,
                v.format({ title: i }),
              ),
            },
            { id: `${o}DateTimeRange`, title: (n && n.dateTimeRange) || k },
          )
          R.push(r)
        }
        if ('showDistance' in t) {
          const r = (0, l.createCheckablePropertyDefinition)(
            {
              checked: (0, l.convertToDefinitionProperty)(
                e,
                t.showDistance,
                g.format({ title: i }),
              ),
            },
            { id: `${o}Distance`, title: (n && n.distance) || A },
          )
          R.push(r)
        }
        if ('showAngle' in t) {
          const r = (0, l.createCheckablePropertyDefinition)(
            {
              checked: (0, l.convertToDefinitionProperty)(
                e,
                t.showAngle,
                T.format({ title: i }),
              ),
            },
            { id: `${o}Angle`, title: (n && n.angle) || V },
          )
          R.push(r)
        }
        const F = (0, l.createCheckablePropertyDefinition)(
          {
            checked: (0, l.convertToDefinitionProperty)(
              e,
              t.alwaysShowStats,
              D.format({ title: i }),
            ),
          },
          { id: `${o}ShowStats`, title: (n && n.showStats) || $ },
        )
        R.push(F)
        const I = (0, l.createOptionsPropertyDefinition)(
          {
            option: (0, l.convertToDefinitionProperty)(
              e,
              t.statsPosition,
              w.format({ title: i }),
            ),
          },
          {
            id: `${o}StatsPosition`,
            title: (n && n.statsPosition) || m,
            options: new s.WatchedValue(_),
          },
        )
        return (
          R.push(I),
          a.push(
            (0, l.createPropertyDefinitionsGeneralGroup)(
              R,
              `${o}StatsGroup`,
              M,
            ),
          ),
          { definitions: a }
        )
      }
    },
    2908: (e, t, i) => {
      i.d(t, { createLineStyleDefinition: () => T })
      var n = i(44352),
        o = i(36298),
        r = i(46141),
        l = i(94474)
      const s = new o.TranslatedString(
          'change {toolName} line visibility',
          n.t(null, void 0, i(24272)),
        ),
        a = new o.TranslatedString(
          'change {toolName} line width',
          n.t(null, void 0, i(46404)),
        ),
        c = new o.TranslatedString(
          'change {toolName} line style',
          n.t(null, void 0, i(35422)),
        ),
        d = new o.TranslatedString(
          'change {toolName} line color',
          n.t(null, void 0, i(50265)),
        ),
        p = new o.TranslatedString(
          'change {toolName} line extending left',
          n.t(null, void 0, i(72781)),
        ),
        u = new o.TranslatedString(
          'change {toolName} line left end',
          n.t(null, void 0, i(62603)),
        ),
        h = new o.TranslatedString(
          'change {toolName} line extending right',
          n.t(null, void 0, i(84613)),
        ),
        y = new o.TranslatedString(
          'change {toolName} line right end',
          n.t(null, void 0, i(62412)),
        ),
        f = n.t(null, void 0, i(1277)),
        v = n.t(null, void 0, i(25892)),
        g = n.t(null, void 0, i(74395))
      function T(e, t, i, n, o) {
        const T = {},
          D = {
            id: `${(0, l.removeSpaces)(i.originalText())}${n}`,
            title: (o && o.line) || f,
          }
        return (
          void 0 !== t.showLine &&
            (T.checked = (0, r.convertToDefinitionProperty)(
              e,
              t.showLine,
              s.format({ toolName: i }),
            )),
          void 0 !== t.lineWidth &&
            (T.width = (0, r.convertToDefinitionProperty)(
              e,
              t.lineWidth,
              a.format({ toolName: i }),
            )),
          void 0 !== t.lineStyle &&
            (T.style = (0, r.convertToDefinitionProperty)(
              e,
              t.lineStyle,
              c.format({ toolName: i }),
            )),
          void 0 !== t.lineColor &&
            (T.color = (0, r.getColorDefinitionProperty)(
              e,
              t.lineColor,
              null,
              d.format({ toolName: i }),
            )),
          void 0 !== t.extendLeft &&
            ((T.extendLeft = (0, r.convertToDefinitionProperty)(
              e,
              t.extendLeft,
              p.format({ toolName: i }),
            )),
            (D.extendLeftTitle = (o && o.extendLeftTitle) || v)),
          void 0 !== t.leftEnd &&
            (T.leftEnd = (0, r.convertToDefinitionProperty)(
              e,
              t.leftEnd,
              u.format({ toolName: i }),
            )),
          void 0 !== t.extendRight &&
            ((T.extendRight = (0, r.convertToDefinitionProperty)(
              e,
              t.extendRight,
              h.format({ toolName: i }),
            )),
            (D.extendRightTitle = (o && o.extendRightTitle) || g)),
          void 0 !== t.rightEnd &&
            (T.rightEnd = (0, r.convertToDefinitionProperty)(
              e,
              t.rightEnd,
              y.format({ toolName: i }),
            )),
          (0, r.createLinePropertyDefinition)(T, D)
        )
      }
    },
    50653: (e, t, i) => {
      i.d(t, { createTextStyleDefinition: () => b })
      var n = i(44352),
        o = i(36298),
        r = i(46141),
        l = i(94474)
      const s = new o.TranslatedString(
          'change {toolName} text visibility',
          n.t(null, void 0, i(69871)),
        ),
        a = new o.TranslatedString(
          'change {toolName} text color',
          n.t(null, void 0, i(6500)),
        ),
        c = new o.TranslatedString(
          'change {toolName} text font size',
          n.t(null, void 0, i(48382)),
        ),
        d = new o.TranslatedString(
          'change {toolName} text font bold',
          n.t(null, void 0, i(51614)),
        ),
        p = new o.TranslatedString(
          'change {toolName} text font italic',
          n.t(null, void 0, i(18572)),
        ),
        u = new o.TranslatedString(
          'change {toolName} text',
          n.t(null, void 0, i(77690)),
        ),
        h = new o.TranslatedString(
          'change {toolName} labels alignment vertical',
          n.t(null, void 0, i(25937)),
        ),
        y = new o.TranslatedString(
          'change {toolName} labels alignment horizontal',
          n.t(null, void 0, i(46991)),
        ),
        f = new o.TranslatedString(
          'change {toolName} labels direction',
          n.t(null, void 0, i(73080)),
        ),
        v = new o.TranslatedString(
          'change {toolName} text background visibility',
          n.t(null, void 0, i(18610)),
        ),
        g = new o.TranslatedString(
          'change {toolName} text background color',
          n.t(null, void 0, i(91832)),
        ),
        T = new o.TranslatedString(
          'change {toolName} text border visibility',
          n.t(null, void 0, i(45529)),
        ),
        D = new o.TranslatedString(
          'change {toolName} text border width',
          n.t(null, void 0, i(6324)),
        ),
        w = new o.TranslatedString(
          'change {toolName} text border color',
          n.t(null, void 0, i(44755)),
        ),
        _ = new o.TranslatedString(
          'change {toolName} text wrap',
          n.t(null, void 0, i(25878)),
        ),
        P = n.t(null, void 0, i(27331)),
        S = n.t(null, void 0, i(48848)),
        m = n.t(null, void 0, i(17932))
      function b(e, t, i, n) {
        const o = {},
          b = {
            id: `${(0, l.removeSpaces)(i.originalText())}Text`,
            title: (n.customTitles && n.customTitles.text) || '',
          }
        if (
          (void 0 !== t.showText &&
            (o.checked = (0, r.convertToDefinitionProperty)(
              e,
              t.showText,
              s.format({ toolName: i }),
            )),
          void 0 !== t.textColor &&
            (o.color = (0, r.getColorDefinitionProperty)(
              e,
              t.textColor,
              t.transparency || null,
              a.format({ toolName: i }),
            )),
          void 0 !== t.fontSize &&
            (o.size = (0, r.convertToDefinitionProperty)(
              e,
              t.fontSize,
              c.format({ toolName: i }),
            )),
          void 0 !== t.bold &&
            (o.bold = (0, r.convertToDefinitionProperty)(
              e,
              t.bold,
              d.format({ toolName: i }),
            )),
          void 0 !== t.italic &&
            (o.italic = (0, r.convertToDefinitionProperty)(
              e,
              t.italic,
              p.format({ toolName: i }),
            )),
          void 0 !== t.text &&
            ((o.text = (0, r.convertToDefinitionProperty)(
              e,
              t.text,
              u.format({ toolName: i }),
            )),
            (b.isEditable = Boolean(n.isEditable)),
            (b.isMultiLine = Boolean(n.isMultiLine))),
          void 0 !== t.vertLabelsAlign &&
            ((o.alignmentVertical = (0, r.convertToDefinitionProperty)(
              e,
              t.vertLabelsAlign,
              h.format({ toolName: i }),
            )),
            (b.alignmentVerticalItems = n.alignmentVerticalItems)),
          void 0 !== t.horzLabelsAlign &&
            ((o.alignmentHorizontal = (0, r.convertToDefinitionProperty)(
              e,
              t.horzLabelsAlign,
              y.format({ toolName: i }),
            )),
            (b.alignmentHorizontalItems = n.alignmentHorizontalItems)),
          void 0 !== t.textOrientation &&
            (o.orientation = (0, r.convertToDefinitionProperty)(
              e,
              t.textOrientation,
              f.format({ toolName: i }),
            )),
          void 0 !== t.backgroundVisible &&
            (o.backgroundVisible = (0, r.convertToDefinitionProperty)(
              e,
              t.backgroundVisible,
              v.format({
                toolName: i,
              }),
            )),
          void 0 !== t.backgroundColor)
        ) {
          let n = null
          void 0 !== t.backgroundTransparency && (n = t.backgroundTransparency),
            (o.backgroundColor = (0, r.getColorDefinitionProperty)(
              e,
              t.backgroundColor,
              n,
              g.format({ toolName: i }),
            ))
        }
        return (
          (void 0 === t.backgroundVisible && void 0 === t.backgroundColor) ||
            (b.backgroundTitle =
              (n.customTitles && n.customTitles.backgroundTitle) || P),
          void 0 !== t.borderVisible &&
            (o.borderVisible = (0, r.convertToDefinitionProperty)(
              e,
              t.borderVisible,
              T.format({ toolName: i }),
            )),
          void 0 !== t.borderWidth &&
            (o.borderWidth = (0, r.convertToDefinitionProperty)(
              e,
              t.borderWidth,
              D.format({ toolName: i }),
            )),
          void 0 !== t.borderColor &&
            (o.borderColor = (0, r.getColorDefinitionProperty)(
              e,
              t.borderColor,
              null,
              w.format({ toolName: i }),
            )),
          (void 0 === t.borderVisible &&
            void 0 === t.borderColor &&
            void 0 === t.borderWidth) ||
            (b.borderTitle =
              (n.customTitles && n.customTitles.borderTitle) || S),
          void 0 !== t.wrap &&
            ((o.wrap = (0, r.convertToDefinitionProperty)(
              e,
              t.wrap,
              _.format({ toolName: i }),
            )),
            (b.wrapTitle = (n.customTitles && n.customTitles.wrapTitle) || m)),
          (0, r.createTextPropertyDefinition)(o, b)
        )
      }
    },
    73896: (e, t, i) => {
      i.r(t), i.d(t, { ArrowMarkDefinitionsViewModel: () => p })
      var n = i(44352),
        o = i(36298),
        r = i(50653),
        l = i(85766),
        s = i(46141)
      const a = new o.TranslatedString(
          'change arrow color',
          n.t(null, void 0, i(38829)),
        ),
        c = n.t(null, void 0, i(37229)),
        d = n.t(null, void 0, i(96237))
      class p extends l.LineDataSourceDefinitionsViewModel {
        _textPropertyDefinitions() {
          const e = this._source.properties().childs()
          return {
            definitions: [
              (0, r.createTextStyleDefinition)(
                this._propertyApplier,
                {
                  text: e.text,
                  showText: e.showLabel,
                  textColor: e.color,
                  fontSize: e.fontsize,
                  bold: e.bold,
                  italic: e.italic,
                },
                new o.TranslatedString(
                  this._source.name(),
                  this._source.translatedType(),
                ),
                { isEditable: !0, isMultiLine: !0, customTitles: { text: c } },
              ),
            ],
          }
        }
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs()
          return {
            definitions: [
              (0, s.createColorPropertyDefinition)(
                {
                  color: (0, s.getColorDefinitionProperty)(
                    this._propertyApplier,
                    e.arrowColor,
                    null,
                    a,
                  ),
                },
                { id: 'ArrowColor', title: d },
              ),
            ],
          }
        }
      }
    },
    57239: (e, t, i) => {
      i.r(t), i.d(t, { ArrowMarkerDefinitionsViewModel: () => u })
      var n = i(44352),
        o = i(36298),
        r = i(46141),
        l = i(85766),
        s = i(94474),
        a = i(50653)
      const c = new o.TranslatedString(
          'change {title} color',
          n.t(null, void 0, i(20216)),
        ),
        d = n.t(null, void 0, i(40054)),
        p = n.t(null, void 0, i(37229))
      class u extends l.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = new o.TranslatedString(t, this._source.translatedType())
          return {
            definitions: [
              (0, r.createColorPropertyDefinition)(
                {
                  color: (0, r.getColorDefinitionProperty)(
                    this._propertyApplier,
                    e.backgroundColor,
                    null,
                    c.format({ title: i }),
                  ),
                },
                { id: (0, s.removeSpaces)(`${t}Color`), title: d },
              ),
            ],
          }
        }
        _textPropertyDefinitions() {
          const e = this._source.properties().childs()
          return {
            definitions: [
              (0, a.createTextStyleDefinition)(
                this._propertyApplier,
                {
                  text: e.text,
                  showText: e.showLabel,
                  textColor: e.textColor,
                  fontSize: e.fontsize,
                  bold: e.bold,
                  italic: e.italic,
                },
                new o.TranslatedString(
                  this._source.name(),
                  this._source.translatedType(),
                ),
                { isEditable: !0, isMultiLine: !0, customTitles: { text: p } },
              ),
            ],
          }
        }
      }
    },
    38534: (e, t, i) => {
      i.r(t),
        i.d(t, {
          BalloonDefinitionsViewModel: () => a,
        })
      var n = i(44352),
        o = i(36298),
        r = i(50653),
        l = i(85766)
      const s = n.t(null, void 0, i(37229))
      class a extends l.LineDataSourceDefinitionsViewModel {
        _textPropertyDefinitions() {
          const e = this._source.properties().childs()
          return {
            definitions: [
              (0, r.createTextStyleDefinition)(
                this._propertyApplier,
                {
                  textColor: e.color,
                  fontSize: e.fontsize,
                  text: e.text,
                  backgroundColor: e.backgroundColor,
                  backgroundTransparency: e.transparency,
                  borderColor: e.borderColor,
                },
                new o.TranslatedString(
                  this._source.name(),
                  this._source.translatedType(),
                ),
                { isEditable: !0, isMultiLine: !0, customTitles: { text: s } },
              ),
            ],
          }
        }
      }
    },
    266: (e, t, i) => {
      i.r(t), i.d(t, { BarsPatternDefinitionsViewModel: () => w })
      var n = i(44352),
        o = i(36298),
        r = i(85766),
        l = i(46141),
        s = i(97145),
        a = i(99987),
        c = i(20345),
        d = i(94474)
      const p = new o.TranslatedString(
          'change {title} color',
          n.t(null, void 0, i(20216)),
        ),
        u = new o.TranslatedString(
          'change {title} mode',
          n.t(null, void 0, i(94441)),
        ),
        h = new o.TranslatedString(
          'change {title} mirrored',
          n.t(null, void 0, i(36618)),
        ),
        y = new o.TranslatedString(
          'change {title} flipped',
          n.t(null, void 0, i(99670)),
        ),
        f = n.t(null, void 0, i(40054)),
        v = n.t(null, void 0, i(53889)),
        g = n.t(null, void 0, i(63158)),
        T = n.t(null, void 0, i(92754)),
        D = [
          {
            value: a.LineToolBarsPatternMode.Bars,
            title: n.t(null, void 0, i(25264)),
          },
          {
            value: a.LineToolBarsPatternMode.OpenClose,
            title: n.t(null, void 0, i(66049)),
          },
          {
            value: a.LineToolBarsPatternMode.Line,
            title: n.t(null, void 0, i(47669)),
          },
          {
            value: a.LineToolBarsPatternMode.LineOpen,
            title: n.t(null, void 0, i(17676)),
          },
          {
            value: a.LineToolBarsPatternMode.LineHigh,
            title: n.t(null, void 0, i(71899)),
          },
          {
            value: a.LineToolBarsPatternMode.LineLow,
            title: n.t(null, void 0, i(83394)),
          },
          {
            value: a.LineToolBarsPatternMode.LineHL2,
            title: n.t(null, void 0, i(49286)),
          },
        ]
      class w extends r.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = new o.TranslatedString(t, this._source.translatedType()),
            n = (0, d.removeSpaces)(t)
          return {
            definitions: [
              (0, l.createColorPropertyDefinition)(
                {
                  color: (0, l.getColorDefinitionProperty)(
                    this._propertyApplier,
                    e.color,
                    null,
                    p.format({ title: i }),
                  ),
                },
                { id: `${n}Color`, title: f },
              ),
              (0, l.createOptionsPropertyDefinition)(
                {
                  option: (0, l.convertToDefinitionProperty)(
                    this._propertyApplier,
                    e.mode,
                    u.format({ title: i }),
                    [c.convertToInt],
                  ),
                },
                { id: `${n}Mode`, title: v, options: new s.WatchedValue(D) },
              ),
              (0, l.createCheckablePropertyDefinition)(
                {
                  checked: (0, l.convertToDefinitionProperty)(
                    this._propertyApplier,
                    e.mirrored,
                    h.format({ title: i }),
                  ),
                },
                { id: `${n}Mirrored`, title: g },
              ),
              (0, l.createCheckablePropertyDefinition)(
                {
                  checked: (0, l.convertToDefinitionProperty)(
                    this._propertyApplier,
                    e.flipped,
                    y.format({ title: i }),
                  ),
                },
                { id: `${n}Flipped`, title: T },
              ),
            ],
          }
        }
      }
    },
    26430: (e, t, i) => {
      i.r(t), i.d(t, { BrushDefinitionsViewModel: () => u })
      var n = i(44352),
        o = i(36298),
        r = i(2908),
        l = i(85766),
        s = i(46141),
        a = i(94474)
      const c = new o.TranslatedString(
          'change {title} background visibility',
          n.t(null, void 0, i(64548)),
        ),
        d = new o.TranslatedString(
          'change {title} background color',
          n.t(null, void 0, i(75312)),
        ),
        p = n.t(null, void 0, i(27331))
      class u extends l.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = new o.TranslatedString(t, this._source.translatedType())
          return {
            definitions: [
              (0, r.createLineStyleDefinition)(
                this._propertyApplier,
                {
                  lineColor: e.linecolor,
                  lineWidth: e.linewidth,
                  leftEnd: e.leftEnd,
                  rightEnd: e.rightEnd,
                },
                i,
                'Line',
              ),
              (0, s.createColorPropertyDefinition)(
                {
                  checked: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    e.fillBackground,
                    c.format({ title: i }),
                  ),
                  color: (0, s.getColorDefinitionProperty)(
                    this._propertyApplier,
                    e.backgroundColor,
                    e.transparency,
                    d.format({ title: i }),
                  ),
                },
                { id: (0, a.removeSpaces)(`${t}BackgroundColor`), title: p },
              ),
            ],
          }
        }
      }
    },
    2813: (e, t, i) => {
      i.r(t), i.d(t, { CalloutDefinitionsViewModel: () => l })
      var n = i(50653),
        o = i(85766),
        r = i(36298)
      class l extends o.LineDataSourceDefinitionsViewModel {
        _textPropertyDefinitions() {
          const e = this._source.properties().childs()
          return {
            definitions: [
              (0, n.createTextStyleDefinition)(
                this._propertyApplier,
                {
                  textColor: e.color,
                  fontSize: e.fontsize,
                  bold: e.bold,
                  italic: e.italic,
                  text: e.text,
                  backgroundColor: e.backgroundColor,
                  backgroundTransparency: e.transparency,
                  borderColor: e.bordercolor,
                  borderWidth: e.linewidth,
                  wrap: e.wordWrap,
                },
                new r.TranslatedString(
                  this._source.name(),
                  this._source.translatedType(),
                ),
                { isEditable: !0, isMultiLine: !0 },
              ),
            ],
          }
        }
      }
    },
    70007: (e, t, i) => {
      i.r(t), i.d(t, { CrossLineDefinitionsViewModel: () => c })
      var n = i(44352),
        o = i(36298),
        r = i(85766),
        l = i(86778),
        s = i(50653)
      const a = n.t(null, void 0, i(37229))
      class c extends r.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs()
          return (0, l.getLinesStylesPropertiesDefinitions)(
            this._propertyApplier,
            e,
            new o.TranslatedString(
              this._source.name(),
              this._source.translatedType(),
            ),
          )
        }
        _textPropertyDefinitions() {
          const e = this._source.properties().childs()
          if ('showLabel' in e) {
            return {
              definitions: [
                (0, s.createTextStyleDefinition)(
                  this._propertyApplier,
                  {
                    ...e,
                    showText: e.showLabel,
                    textColor: e.textcolor,
                    fontSize: e.fontsize,
                  },
                  new o.TranslatedString(
                    this._source.name(),
                    this._source.translatedType(),
                  ),
                  {
                    isEditable: !0,
                    isMultiLine: !0,
                    customTitles: { text: a },
                  },
                ),
              ],
            }
          }
          return null
        }
      }
    },
    15673: (e, t, i) => {
      i.r(t), i.d(t, { CyclicAndSineLinesPatternDefinitionsViewModel: () => a })
      var n = i(44352),
        o = i(36298),
        r = i(2908),
        l = i(85766)
      const s = n.t(null, void 0, i(83182))
      class a extends l.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs()
          return {
            definitions: [
              (0, r.createLineStyleDefinition)(
                this._propertyApplier,
                {
                  lineColor: e.linecolor,
                  lineWidth: e.linewidth,
                  lineStyle: e.linestyle,
                },
                new o.TranslatedString(
                  this._source.name(),
                  this._source.translatedType(),
                ),
                'Line',
                { line: s },
              ),
            ],
          }
        }
      }
    },
    92383: (e, t, i) => {
      i.r(t), i.d(t, { ElliottPatternDefinitionsViewModel: () => f })
      var n = i(44352),
        o = i(36298),
        r = i(2908),
        l = i(85766),
        s = i(46141),
        a = i(97145),
        c = i(94474)
      const d = new o.TranslatedString(
          'change {title} color',
          n.t(null, void 0, i(20216)),
        ),
        p = new o.TranslatedString(
          'change {title} degree',
          n.t(null, void 0, i(3400)),
        ),
        u = n.t(null, void 0, i(40054)),
        h = n.t(null, void 0, i(95545)),
        y = n.t(null, void 0, i(69479))
      class f extends l.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = new o.TranslatedString(t, this._source.translatedType())
          return {
            definitions: [
              (0, s.createColorPropertyDefinition)(
                {
                  color: (0, s.getColorDefinitionProperty)(
                    this._propertyApplier,
                    e.color,
                    null,
                    d.format({ title: i }),
                  ),
                },
                { id: (0, c.removeSpaces)(`${t}BackgroundColor`), title: u },
              ),
              (0, r.createLineStyleDefinition)(
                this._propertyApplier,
                { showLine: e.showWave, lineWidth: e.linewidth },
                i,
                'Line',
                { line: h },
              ),
              (0, s.createOptionsPropertyDefinition)(
                {
                  option: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    e.degree,
                    p.format({ title: i }),
                  ),
                },
                {
                  id: `${t}Degree`,
                  title: y,
                  options: new a.WatchedValue(
                    this._source.availableDegreesValues(),
                  ),
                },
              ),
            ],
          }
        }
      }
    },
    82300: (e, t, i) => {
      i.r(t), i.d(t, { EllipseCircleDefinitionsViewModel: () => a })
      var n = i(44352),
        o = i(36298),
        r = i(50653),
        l = i(20061)
      const s = n.t(null, void 0, i(37229))
      class a extends l.GeneralFiguresDefinitionsViewModelBase {
        _textPropertyDefinitions() {
          const e = this._source.properties().childs()
          return {
            definitions: [
              (0, r.createTextStyleDefinition)(
                this._propertyApplier,
                {
                  textColor: e.textColor,
                  text: e.text,
                  bold: e.bold,
                  italic: e.italic,
                  fontSize: e.fontSize,
                  showText: e.showLabel,
                },
                new o.TranslatedString(
                  this._source.name(),
                  this._source.translatedType(),
                ),
                { isEditable: !0, isMultiLine: !0, customTitles: { text: s } },
              ),
            ],
          }
        }
      }
    },
    7044: (e, t, i) => {
      i.r(t), i.d(t, { FibCirclesDefinitionsViewModel: () => b })
      var n = i(50151),
        o = i(44352),
        r = i(36298),
        l = i(2908),
        s = i(46141),
        a = i(85766),
        c = i(94474),
        d = i(69152)
      const p = new r.TranslatedString(
          'change {title} level {index} line visibility',
          o.t(null, void 0, i(45463)),
        ),
        u = new r.TranslatedString(
          'change {title} levels visibility',
          o.t(null, void 0, i(26710)),
        ),
        h = new r.TranslatedString(
          'change {title} level {index} line color',
          o.t(null, void 0, i(85551)),
        ),
        y = new r.TranslatedString(
          'change {title} level {index} line width',
          o.t(null, void 0, i(90098)),
        ),
        f = new r.TranslatedString(
          'change {title} level {index} line coeff',
          o.t(null, void 0, i(32891)),
        ),
        v = new r.TranslatedString(
          'change {title} all lines color',
          o.t(null, void 0, i(15521)),
        ),
        g = new r.TranslatedString(
          'change {title} background visibility',
          o.t(null, void 0, i(64548)),
        ),
        T = new r.TranslatedString(
          'change {title} background transparency',
          o.t(null, void 0, i(36438)),
        ),
        D = new r.TranslatedString(
          'change {title} coeffs as percents visibility',
          o.t(null, void 0, i(99128)),
        ),
        w = o.t(null, void 0, i(4372)),
        _ = o.t(null, void 0, i(12374)),
        P = o.t(null, void 0, i(27331)),
        S = o.t(null, void 0, i(79106)),
        m = o.t(null, void 0, i(43809))
      class b extends a.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = [],
            t = this._source.properties().childs(),
            i = this._source.name(),
            o = (0, c.removeSpaces)(i),
            a = new r.TranslatedString(i, this._source.translatedType()),
            b = t.trendline.childs(),
            C = (0, l.createLineStyleDefinition)(
              this._propertyApplier,
              {
                showLine: b.visible,
                lineColor: b.color,
                lineStyle: b.linestyle,
                lineWidth: b.linewidth,
              },
              a,
              'TrendLine',
              { line: w },
            )
          e.push(C)
          const L = this._source.levelsCount()
          for (let i = 1; i <= L; i++) {
            const n = t[`level${i}`].childs(),
              r = (0, s.createLeveledLinePropertyDefinition)(
                {
                  checked: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    n.visible,
                    p.format({ title: a, index: i }),
                  ),
                  color: (0, s.getColorDefinitionProperty)(
                    this._propertyApplier,
                    n.color,
                    null,
                    h.format({ title: a, index: i }),
                  ),
                  width: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    n.linewidth,
                    y.format({ title: a, index: i }),
                  ),
                  level: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    n.coeff,
                    f.format({ title: a, index: i }),
                  ),
                },
                { id: `${o}LineLevel${i}` },
              )
            e.push(r)
          }
          const x = (0, s.createColorPropertyDefinition)(
            {
              color: (0, s.getColorDefinitionProperty)(
                this._propertyApplier,
                new d.CollectibleColorPropertyUndoWrapper(
                  (0, n.ensureNotNull)(this._source.lineColorsProperty()),
                  this._propertyApplier,
                  null,
                ),
                null,
                v.format({ title: a }),
                !0,
              ),
            },
            { id: `${o}AllLineColor`, title: _ },
          )
          e.push(x)
          const k = (0, s.createTransparencyPropertyDefinition)(
            {
              checked: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                t.fillBackground,
                g.format({ title: a }),
              ),
              transparency: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                t.transparency,
                T.format({ title: a }),
              ),
            },
            { id: `${o}Background`, title: P },
          )
          e.push(k)
          const A = (0, s.createCheckablePropertyDefinition)(
            {
              checked: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                t.showCoeffs,
                u.format({ title: a }),
              ),
            },
            { id: `${o}Levels`, title: S },
          )
          e.push(A)
          const V = (0, s.createCheckablePropertyDefinition)(
            {
              checked: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                t.coeffsAsPercents,
                D.format({ title: a }),
              ),
            },
            { id: `${o}Percentage`, title: m },
          )
          return e.push(V), { definitions: e }
        }
      }
    },
    56194: (e, t, i) => {
      i.r(t), i.d(t, { FibDrawingsWith24LevelsDefinitionsViewModel: () => U })
      var n = i(50151),
        o = i(44352),
        r = i(36298),
        l = i(2908),
        s = i(46141),
        a = i(85766),
        c = i(18505),
        d = i(97145),
        p = i(94474),
        u = i(69152)
      const h = new r.TranslatedString(
          'change {title} level {index} line visibility',
          o.t(null, void 0, i(45463)),
        ),
        y = new r.TranslatedString(
          'change {title} level {index} line color',
          o.t(null, void 0, i(85551)),
        ),
        f = new r.TranslatedString(
          'change {title} level {index} line coeff',
          o.t(null, void 0, i(32891)),
        ),
        v = new r.TranslatedString(
          'change {title} all lines color',
          o.t(null, void 0, i(15521)),
        ),
        g = new r.TranslatedString(
          'change {title} background visibility',
          o.t(null, void 0, i(64548)),
        ),
        T = new r.TranslatedString(
          'change {title} background transparency',
          o.t(null, void 0, i(36438)),
        ),
        D = new r.TranslatedString(
          'change {title} reverse',
          o.t(null, void 0, i(52877)),
        ),
        w = new r.TranslatedString(
          'change {title} prices visibility',
          o.t(null, void 0, i(56175)),
        ),
        _ = new r.TranslatedString(
          'change {title} labels alignment',
          o.t(null, void 0, i(81170)),
        ),
        P = new r.TranslatedString(
          'change {title} labels font size',
          o.t(null, void 0, i(22775)),
        ),
        S = new r.TranslatedString(
          'change {title} style',
          o.t(null, void 0, i(74428)),
        ),
        m = new r.TranslatedString(
          'change {title} fib levels based on log scale',
          o.t(null, void 0, i(45739)),
        ),
        b = o.t(null, void 0, i(4372)),
        C = o.t(null, void 0, i(95610)),
        L = o.t(null, void 0, i(14025)),
        x = o.t(null, void 0, i(45809)),
        k = o.t(null, void 0, i(83095)),
        A = o.t(null, void 0, i(3304)),
        V = o.t(null, void 0, i(24186)),
        $ = o.t(null, void 0, i(29072)),
        M = o.t(null, void 0, i(79106)),
        W = o.t(null, void 0, i(94420)),
        B = o.t(null, void 0, i(17006)),
        z = o.t(null, void 0, i(12374)),
        N = o.t(null, void 0, i(27331)),
        R = o.t(null, void 0, i(39836)),
        G = [
          { id: 'values', value: !1, title: o.t(null, void 0, i(91322)) },
          { id: 'percents', value: !0, title: o.t(null, void 0, i(650)) },
        ],
        E = [
          { id: 'bottom', value: 'bottom', title: o.t(null, void 0, i(65994)) },
          { id: 'middle', value: 'middle', title: o.t(null, void 0, i(76476)) },
          { id: 'top', value: 'top', title: o.t(null, void 0, i(91757)) },
        ],
        O = [10, 11, 12, 14, 16, 20, 24].map((e) => ({
          title: String(e),
          value: e,
        }))
      class U extends a.LineDataSourceDefinitionsViewModel {
        constructor(e, t) {
          super(e, t), (this._disabledBasedOnLog = null)
          if (
            'fibLevelsBasedOnLogScale' in this._source.properties().childs()
          ) {
            const e = this._source.priceScale()
            null !== e &&
              ((this._disabledBasedOnLog = new d.WatchedValue(
                Boolean(!e.mode().log),
              )),
              this._createPropertyRages(),
              e.modeChanged().subscribe(this, (e, t) => {
                null !== this._disabledBasedOnLog &&
                  this._disabledBasedOnLog.setValue(Boolean(!t.log))
              }))
          }
        }
        destroy() {
          super.destroy()
          const e = this._source.priceScale()
          null !== e && e.modeChanged().unsubscribeAll(this)
        }
        _stylePropertyDefinitions() {
          const e = [],
            t = this._source.properties().childs(),
            i = this._source.name(),
            o = (0, p.removeSpaces)(i),
            a = new r.TranslatedString(i, this._source.translatedType())
          if ('trendline' in t) {
            const i = t.trendline.childs(),
              n = (0, l.createLineStyleDefinition)(
                this._propertyApplier,
                {
                  showLine: i.visible,
                  lineColor: i.color,
                  lineStyle: i.linestyle,
                  lineWidth: i.linewidth,
                },
                a,
                'TrendLine',
                { line: b },
              )
            e.push(n)
          }
          const U = t.levelsStyle.childs(),
            F = { lineStyle: U.linestyle, lineWidth: U.linewidth },
            I = { line: C }
          'extendLines' in t &&
            ((F.extendRight = t.extendLines), (I.extendRightTitle = k)),
            'extendLinesLeft' in t &&
              ((F.extendLeft = t.extendLinesLeft), (I.extendLeftTitle = A)),
            'extendRight' in t &&
              ((F.extendRight = t.extendRight), (I.extendRightTitle = L)),
            'extendLeft' in t &&
              ((F.extendLeft = t.extendLeft), (I.extendLeftTitle = x))
          const H = (0, l.createLineStyleDefinition)(
            this._propertyApplier,
            F,
            a,
            'LevelsStyleLine',
            I,
          )
          e.push(H)
          const j = [],
            Y = this._source.levelsCount()
          for (let e = 1; e <= Y; e++) {
            const i = t[`level${e}`].childs(),
              n = (0, s.createLeveledLinePropertyDefinition)(
                {
                  checked: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    i.visible,
                    h.format({ title: a, index: e }),
                  ),
                  color: (0, s.getColorDefinitionProperty)(
                    this._propertyApplier,
                    i.color,
                    null,
                    y.format({ title: a, index: e }),
                  ),
                  level: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    i.coeff,
                    f.format({ title: a, index: e }),
                  ),
                },
                { id: `${o}LineLevel${e}` },
              )
            j.push(n)
          }
          const X = (0, s.createPropertyDefinitionsLeveledLinesGroup)(
            j,
            `${o}LeveledLinesGroup`,
          )
          e.push((0, s.createPropertyDefinitionsGeneralGroup)([X], `${o}Group`))
          const q = (0, s.createColorPropertyDefinition)(
            {
              color: (0, s.getColorDefinitionProperty)(
                this._propertyApplier,
                new u.CollectibleColorPropertyUndoWrapper(
                  (0, n.ensureNotNull)(this._source.lineColorsProperty()),
                  this._propertyApplier,
                  null,
                ),
                null,
                v.format({ title: a }),
                !0,
              ),
            },
            { id: `${o}AllLineColor`, title: z },
          )
          e.push(q)
          const J = (0, s.createTransparencyPropertyDefinition)(
            {
              checked: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                t.fillBackground,
                g.format({ title: a }),
              ),
              transparency: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                t.transparency,
                T.format({ title: a }),
              ),
            },
            { id: `${o}Background`, title: N },
          )
          e.push(J)
          const K = t
          if ('reverse' in K) {
            const t = (0, s.createCheckablePropertyDefinition)(
              {
                checked: (0, s.convertToDefinitionProperty)(
                  this._propertyApplier,
                  K.reverse,
                  D.format({ title: a }),
                ),
              },
              { id: `${o}Reverse`, title: V },
            )
            e.push(t)
          }
          const Q = (0, s.createCheckablePropertyDefinition)(
            {
              checked: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                t.showPrices,
                w.format({ title: a }),
              ),
            },
            { id: `${o}Prices`, title: $ },
          )
          e.push(Q)
          const Z = (0, s.createOptionsPropertyDefinition)(
            {
              checked: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                t.showCoeffs,
                S.format({ title: a }),
              ),
              option: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                t.coeffsAsPercents,
                S.format({ title: a }),
              ),
            },
            { id: `${o}PitchStyle`, title: M, options: new d.WatchedValue(G) },
          )
          e.push(Z)
          const ee = (0, s.createTwoOptionsPropertyDefinition)(
            {
              option1: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                t.horzLabelsAlign,
                _.format({ title: a }),
              ),
              option2: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                t.vertLabelsAlign,
                _.format({ title: a }),
              ),
            },
            {
              id: `${o}Alignment`,
              title: W,
              optionsItems1: new d.WatchedValue(
                c.availableAlignmentHorizontalItems,
              ),
              optionsItems2: new d.WatchedValue(E),
            },
          )
          e.push(ee)
          const te = (0, s.createOptionsPropertyDefinition)(
            {
              option: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                t.labelFontSize,
                P.format({ title: a }),
              ),
            },
            { id: `${o}FontSize`, title: B, options: new d.WatchedValue(O) },
          )
          if (
            (e.push(te),
            'fibLevelsBasedOnLogScale' in t &&
              null !== this._disabledBasedOnLog)
          ) {
            const i = (0, s.createCheckablePropertyDefinition)(
              {
                disabled: (0, s.convertFromWVToDefinitionProperty)(
                  this._propertyApplier,
                  this._disabledBasedOnLog,
                  m.format({ title: a }),
                ),
                checked: (0, s.convertToDefinitionProperty)(
                  this._propertyApplier,
                  t.fibLevelsBasedOnLogScale,
                  m.format({ title: a }),
                ),
              },
              { id: `${o}BasedOnLog`, title: R },
            )
            e.push(i)
          }
          return { definitions: e }
        }
      }
    },
    13972: (e, t, i) => {
      i.r(t), i.d(t, { FibSpeedResistanceArcsDefinitionsViewModel: () => b })
      var n = i(50151),
        o = i(44352),
        r = i(36298),
        l = i(2908),
        s = i(46141),
        a = i(85766),
        c = i(94474),
        d = i(69152)
      const p = new r.TranslatedString(
          'change {title} level {index} line visibility',
          o.t(null, void 0, i(45463)),
        ),
        u = new r.TranslatedString(
          'change {title} levels visibility',
          o.t(null, void 0, i(26710)),
        ),
        h = new r.TranslatedString(
          'change {title} level {index} line color',
          o.t(null, void 0, i(85551)),
        ),
        y = new r.TranslatedString(
          'change {title} level {index} line width',
          o.t(null, void 0, i(90098)),
        ),
        f = new r.TranslatedString(
          'change {title} level {index} line coeff',
          o.t(null, void 0, i(32891)),
        ),
        v = new r.TranslatedString(
          'change {title} all lines color',
          o.t(null, void 0, i(15521)),
        ),
        g = new r.TranslatedString(
          'change {title} background visibility',
          o.t(null, void 0, i(64548)),
        ),
        T = new r.TranslatedString(
          'change {title} background transparency',
          o.t(null, void 0, i(36438)),
        ),
        D = new r.TranslatedString(
          'change {title} full circles visibility',
          o.t(null, void 0, i(35165)),
        ),
        w = o.t(null, void 0, i(4372)),
        _ = o.t(null, void 0, i(12374)),
        P = o.t(null, void 0, i(27331)),
        S = o.t(null, void 0, i(79106)),
        m = o.t(null, void 0, i(10578))
      class b extends a.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = [],
            t = this._source.properties().childs(),
            i = this._source.name(),
            o = (0, c.removeSpaces)(i),
            a = new r.TranslatedString(i, this._source.translatedType()),
            b = t.trendline.childs(),
            C = (0, l.createLineStyleDefinition)(
              this._propertyApplier,
              {
                showLine: b.visible,
                lineColor: b.color,
                lineStyle: b.linestyle,
                lineWidth: b.linewidth,
              },
              a,
              'TrendLine',
              { line: w },
            )
          e.push(C)
          const L = this._source.levelsCount()
          for (let i = 1; i <= L; i++) {
            const n = t[`level${i}`].childs(),
              r = (0, s.createLeveledLinePropertyDefinition)(
                {
                  checked: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    n.visible,
                    p.format({ title: a, index: i }),
                  ),
                  color: (0, s.getColorDefinitionProperty)(
                    this._propertyApplier,
                    n.color,
                    null,
                    h.format({ title: a, index: i }),
                  ),
                  width: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    n.linewidth,
                    y.format({ title: a, index: i }),
                  ),
                  level: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    n.coeff,
                    f.format({ title: a, index: i }),
                  ),
                },
                { id: `${o}LineLevel${i}` },
              )
            e.push(r)
          }
          const x = (0, s.createColorPropertyDefinition)(
            {
              color: (0, s.getColorDefinitionProperty)(
                this._propertyApplier,
                new d.CollectibleColorPropertyUndoWrapper(
                  (0, n.ensureNotNull)(this._source.lineColorsProperty()),
                  this._propertyApplier,
                  null,
                ),
                null,
                v.format({ title: a }),
                !0,
              ),
            },
            { id: `${o}AllLineColor`, title: _ },
          )
          e.push(x)
          const k = (0, s.createTransparencyPropertyDefinition)(
            {
              checked: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                t.fillBackground,
                g.format({ title: a }),
              ),
              transparency: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                t.transparency,
                T.format({ title: a }),
              ),
            },
            { id: `${o}Background`, title: P },
          )
          e.push(k)
          const A = (0, s.createCheckablePropertyDefinition)(
            {
              checked: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                t.showCoeffs,
                u.format({ title: a }),
              ),
            },
            { id: `${o}Levels`, title: S },
          )
          e.push(A)
          const V = (0, s.createCheckablePropertyDefinition)(
            {
              checked: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                t.fullCircles,
                D.format({ title: a }),
              ),
            },
            { id: `${o}FullCircles`, title: m },
          )
          return e.push(V), { definitions: e }
        }
      }
    },
    4841: (e, t, i) => {
      i.r(t), i.d(t, { FibSpeedResistanceFanDefinitionsViewModel: () => B })
      var n = i(50151),
        o = i(44352),
        r = i(36298),
        l = i(46141),
        s = i(85766),
        a = i(94474),
        c = i(69152)
      const d = new r.TranslatedString(
          'change {title} level {index} line visibility',
          o.t(null, void 0, i(45463)),
        ),
        p = new r.TranslatedString(
          'change {title} level {index} line color',
          o.t(null, void 0, i(85551)),
        ),
        u = new r.TranslatedString(
          'change {title} level {index} line coeff',
          o.t(null, void 0, i(32891)),
        ),
        h = new r.TranslatedString(
          'change {title} all lines color',
          o.t(null, void 0, i(15521)),
        ),
        y = new r.TranslatedString(
          'change {title} background visibility',
          o.t(null, void 0, i(64548)),
        ),
        f = new r.TranslatedString(
          'change {title} background transparency',
          o.t(null, void 0, i(36438)),
        ),
        v = new r.TranslatedString(
          'change {title} left labels visibility',
          o.t(null, void 0, i(2359)),
        ),
        g = new r.TranslatedString(
          'change {title} right labels visibility',
          o.t(null, void 0, i(16598)),
        ),
        T = new r.TranslatedString(
          'change {title} top labels visibility',
          o.t(null, void 0, i(73137)),
        ),
        D = new r.TranslatedString(
          'change {title} bottom labels visibility',
          o.t(null, void 0, i(15802)),
        ),
        w = new r.TranslatedString(
          'change {title} reverse',
          o.t(null, void 0, i(52877)),
        ),
        _ = new r.TranslatedString(
          'change {title} grid visibility',
          o.t(null, void 0, i(53770)),
        ),
        P = new r.TranslatedString(
          'change {title} grid line color',
          o.t(null, void 0, i(29145)),
        ),
        S = new r.TranslatedString(
          'change {title} grid line width',
          o.t(null, void 0, i(93548)),
        ),
        m = new r.TranslatedString(
          'change {title} grid line style',
          o.t(null, void 0, i(64949)),
        ),
        b = o.t(null, void 0, i(12374)),
        C = o.t(null, void 0, i(27331)),
        L = o.t(null, void 0, i(16103)),
        x = o.t(null, void 0, i(77838)),
        k = o.t(null, void 0, i(79307)),
        A = o.t(null, void 0, i(91367)),
        V = o.t(null, void 0, i(10209)),
        $ = o.t(null, void 0, i(17608)),
        M = o.t(null, void 0, i(81260)),
        W = o.t(null, void 0, i(24186))
      class B extends s.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = [],
            t = this._source.properties().childs(),
            i = this._source.name(),
            o = (0, a.removeSpaces)(i),
            s = new r.TranslatedString(i, this._source.translatedType()),
            B = [],
            z = this._source.hLevelsCount()
          for (let e = 1; e <= z; e++) {
            const i = t[`hlevel${e}`].childs(),
              n = (0, l.createLeveledLinePropertyDefinition)(
                {
                  checked: (0, l.convertToDefinitionProperty)(
                    this._propertyApplier,
                    i.visible,
                    d.format({ title: s, index: e }),
                  ),
                  color: (0, l.getColorDefinitionProperty)(
                    this._propertyApplier,
                    i.color,
                    null,
                    p.format({ title: s, index: e }),
                  ),
                  level: (0, l.convertToDefinitionProperty)(
                    this._propertyApplier,
                    i.coeff,
                    u.format({ title: s, index: e }),
                  ),
                },
                { id: `${o}HLineLevel${e}` },
              )
            B.push(n)
          }
          const N = (0, l.createPropertyDefinitionsLeveledLinesGroup)(
              B,
              `${o}HLeveledLinesGroup`,
            ),
            R = (0, l.createCheckablePropertyDefinition)(
              {
                checked: (0, l.convertToDefinitionProperty)(
                  this._propertyApplier,
                  t.showLeftLabels,
                  v.format({ title: s }),
                ),
              },
              { id: `${o}LeftLabels`, title: k },
            ),
            G = (0, l.createCheckablePropertyDefinition)(
              {
                checked: (0, l.convertToDefinitionProperty)(
                  this._propertyApplier,
                  t.showRightLabels,
                  g.format({ title: s }),
                ),
              },
              { id: `${o}RightLabels`, title: A },
            ),
            E = (0, l.createPropertyDefinitionsGeneralGroup)(
              [N, R, G],
              `${o}HLevelGroup`,
              L,
            )
          e.push(E)
          const O = [],
            U = this._source.vLevelsCount()
          for (let e = 1; e <= U; e++) {
            const i = t[`vlevel${e}`].childs(),
              n = (0, l.createLeveledLinePropertyDefinition)(
                {
                  checked: (0, l.convertToDefinitionProperty)(
                    this._propertyApplier,
                    i.visible,
                    d.format({ title: s, index: e }),
                  ),
                  color: (0, l.getColorDefinitionProperty)(
                    this._propertyApplier,
                    i.color,
                    null,
                    p.format({ title: s, index: e }),
                  ),
                  level: (0, l.convertToDefinitionProperty)(
                    this._propertyApplier,
                    i.coeff,
                    u.format({ title: s, index: e }),
                  ),
                },
                { id: `${o}VLineLevel${e}` },
              )
            O.push(n)
          }
          const F = (0, l.createPropertyDefinitionsLeveledLinesGroup)(
              O,
              `${o}VLeveledLinesGroup`,
            ),
            I = (0, l.createCheckablePropertyDefinition)(
              {
                checked: (0, l.convertToDefinitionProperty)(
                  this._propertyApplier,
                  t.showTopLabels,
                  T.format({ title: s }),
                ),
              },
              { id: `${o}TopLabels`, title: V },
            ),
            H = (0, l.createCheckablePropertyDefinition)(
              {
                checked: (0, l.convertToDefinitionProperty)(
                  this._propertyApplier,
                  t.showBottomLabels,
                  D.format({ title: s }),
                ),
              },
              { id: `${o}BottomLabels`, title: $ },
            ),
            j = (0, l.createPropertyDefinitionsGeneralGroup)(
              [F, I, H],
              `${o}VLevelGroup`,
              x,
            )
          e.push(j)
          const Y = (0, l.createColorPropertyDefinition)(
            {
              color: (0, l.getColorDefinitionProperty)(
                this._propertyApplier,
                new c.CollectibleColorPropertyUndoWrapper(
                  (0, n.ensureNotNull)(this._source.lineColorsProperty()),
                  this._propertyApplier,
                  null,
                ),
                null,
                h.format({ title: s }),
                !0,
              ),
            },
            { id: `${o}AllLineColor`, title: b },
          )
          e.push(Y)
          const X = (0, l.createTransparencyPropertyDefinition)(
            {
              checked: (0, l.convertToDefinitionProperty)(
                this._propertyApplier,
                t.fillBackground,
                y.format({ title: s }),
              ),
              transparency: (0, l.convertToDefinitionProperty)(
                this._propertyApplier,
                t.transparency,
                f.format({ title: s }),
              ),
            },
            { id: `${o}Background`, title: C },
          )
          e.push(X)
          const q = t.grid.childs(),
            J = (0, l.createLinePropertyDefinition)(
              {
                checked: (0, l.convertToDefinitionProperty)(
                  this._propertyApplier,
                  q.visible,
                  _.format({ title: s }),
                ),
                color: (0, l.getColorDefinitionProperty)(
                  this._propertyApplier,
                  q.color,
                  null,
                  P.format({ title: s }),
                ),
                width: (0, l.convertToDefinitionProperty)(
                  this._propertyApplier,
                  q.linewidth,
                  S.format({ title: s }),
                ),
                style: (0, l.convertToDefinitionProperty)(
                  this._propertyApplier,
                  q.linestyle,
                  m.format({ title: s }),
                ),
              },
              { id: `${o}GridLine`, title: M },
            )
          e.push(J)
          const K = (0, l.createCheckablePropertyDefinition)(
            {
              checked: (0, l.convertToDefinitionProperty)(
                this._propertyApplier,
                t.reverse,
                w.format({ title: s }),
              ),
            },
            { id: `${o}Reverse`, title: W },
          )
          return e.push(K), { definitions: e }
        }
      }
    },
    90448: (e, t, i) => {
      i.r(t), i.d(t, { FibSpiralDefinitionsViewModel: () => y })
      var n = i(44352),
        o = i(36298),
        r = i(46141),
        l = i(85766),
        s = i(94474)
      const a = new o.TranslatedString(
          'change {title} line color',
          n.t(null, void 0, i(20563)),
        ),
        c = new o.TranslatedString(
          'change {title} line width',
          n.t(null, void 0, i(44643)),
        ),
        d = new o.TranslatedString(
          'change {title} line style',
          n.t(null, void 0, i(66982)),
        ),
        p = new o.TranslatedString(
          'change {title} counterclockwise',
          n.t(null, void 0, i(31804)),
        ),
        u = n.t(null, void 0, i(1277)),
        h = n.t(null, void 0, i(89795))
      class y extends l.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = (0, s.removeSpaces)(t),
            n = new o.TranslatedString(t, this._source.translatedType())
          return {
            definitions: [
              (0, r.createLinePropertyDefinition)(
                {
                  color: (0, r.getColorDefinitionProperty)(
                    this._propertyApplier,
                    e.linecolor,
                    null,
                    a.format({ title: n }),
                  ),
                  width: (0, r.convertToDefinitionProperty)(
                    this._propertyApplier,
                    e.linewidth,
                    c.format({ title: n }),
                  ),
                  style: (0, r.convertToDefinitionProperty)(
                    this._propertyApplier,
                    e.linestyle,
                    d.format({ title: n }),
                  ),
                },
                { id: `${i}Line`, title: u },
              ),
              (0, r.createCheckablePropertyDefinition)(
                {
                  checked: (0, r.convertToDefinitionProperty)(
                    this._propertyApplier,
                    e.counterclockwise,
                    p.format({ title: n }),
                  ),
                },
                { id: `${i}Counterclockwise`, title: h },
              ),
            ],
          }
        }
      }
    },
    18505: (e, t, i) => {
      i.r(t),
        i.d(t, {
          FibTimezoneDefinitionsViewModel: () => C,
          availableAlignmentHorizontalItems: () => b,
          availableAlignmentVerticalItems: () => m,
        })
      var n = i(50151),
        o = i(44352),
        r = i(36298),
        l = i(46141),
        s = i(85766),
        a = i(97145),
        c = i(94474),
        d = i(69152)
      const p = new r.TranslatedString(
          'change {title} level {index} line visibility',
          o.t(null, void 0, i(45463)),
        ),
        u = new r.TranslatedString(
          'change {title} level {index} line color',
          o.t(null, void 0, i(85551)),
        ),
        h = new r.TranslatedString(
          'change {title} level {index} line width',
          o.t(null, void 0, i(90098)),
        ),
        y = new r.TranslatedString(
          'change {title} level {index} line style',
          o.t(null, void 0, i(47840)),
        ),
        f = new r.TranslatedString(
          'change {title} level {index} line coeff',
          o.t(null, void 0, i(32891)),
        ),
        v = new r.TranslatedString(
          'change {title} all lines color',
          o.t(null, void 0, i(15521)),
        ),
        g = new r.TranslatedString(
          'change {title} background visibility',
          o.t(null, void 0, i(64548)),
        ),
        T = new r.TranslatedString(
          'change {title} background transparency',
          o.t(null, void 0, i(36438)),
        ),
        D = new r.TranslatedString(
          'change {title} labels visibility',
          o.t(null, void 0, i(24338)),
        ),
        w = new r.TranslatedString(
          'change {title} labels alignment',
          o.t(null, void 0, i(81170)),
        ),
        _ = o.t(null, void 0, i(12374)),
        P = o.t(null, void 0, i(27331)),
        S = o.t(null, void 0, i(94420)),
        m = [
          { id: 'top', value: 'top', title: o.t(null, void 0, i(65994)) },
          { id: 'middle', value: 'middle', title: o.t(null, void 0, i(76476)) },
          { id: 'bottom', value: 'bottom', title: o.t(null, void 0, i(91757)) },
        ],
        b = [
          { id: 'left', value: 'left', title: o.t(null, void 0, i(19286)) },
          { id: 'center', value: 'center', title: o.t(null, void 0, i(72171)) },
          { id: 'right', value: 'right', title: o.t(null, void 0, i(21141)) },
        ]
      class C extends s.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = [],
            t = this._source.properties().childs(),
            i = this._source.name(),
            o = (0, c.removeSpaces)(i),
            s = new r.TranslatedString(i, this._source.translatedType()),
            C = this._source.levelsCount()
          for (let i = 1; i <= C; i++) {
            const n = t[`level${i}`].childs(),
              r = (0, l.createLeveledLinePropertyDefinition)(
                {
                  checked: (0, l.convertToDefinitionProperty)(
                    this._propertyApplier,
                    n.visible,
                    p.format({ title: s, index: i }),
                  ),
                  color: (0, l.getColorDefinitionProperty)(
                    this._propertyApplier,
                    n.color,
                    null,
                    u.format({ title: s, index: i }),
                  ),
                  width: (0, l.convertToDefinitionProperty)(
                    this._propertyApplier,
                    n.linewidth,
                    h.format({ title: s, index: i }),
                  ),
                  style: (0, l.convertToDefinitionProperty)(
                    this._propertyApplier,
                    n.linestyle,
                    y.format({ title: s, index: i }),
                  ),
                  level: (0, l.convertToDefinitionProperty)(
                    this._propertyApplier,
                    n.coeff,
                    f.format({ title: s, index: i }),
                  ),
                },
                { id: `${o}LineLevel${i}` },
              )
            e.push(r)
          }
          const L = (0, l.createColorPropertyDefinition)(
            {
              color: (0, l.getColorDefinitionProperty)(
                this._propertyApplier,
                new d.CollectibleColorPropertyUndoWrapper(
                  (0, n.ensureNotNull)(this._source.lineColorsProperty()),
                  this._propertyApplier,
                  null,
                ),
                null,
                v.format({ title: s }),
                !0,
              ),
            },
            { id: `${o}AllLineColor`, title: _ },
          )
          e.push(L)
          const x = (0, l.createTransparencyPropertyDefinition)(
            {
              checked: (0, l.convertToDefinitionProperty)(
                this._propertyApplier,
                t.fillBackground,
                g.format({ title: s }),
              ),
              transparency: (0, l.convertToDefinitionProperty)(
                this._propertyApplier,
                t.transparency,
                T.format({ title: s }),
              ),
            },
            { id: `${o}Background`, title: P },
          )
          e.push(x)
          const k = (0, l.createTwoOptionsPropertyDefinition)(
            {
              checked: (0, l.convertToDefinitionProperty)(
                this._propertyApplier,
                t.showLabels,
                D.format({ title: s }),
              ),
              option1: (0, l.convertToDefinitionProperty)(
                this._propertyApplier,
                t.horzLabelsAlign,
                w.format({ title: s }),
              ),
              option2: (0, l.convertToDefinitionProperty)(
                this._propertyApplier,
                t.vertLabelsAlign,
                w.format({ title: s }),
              ),
            },
            {
              id: `${o}Labels`,
              title: S,
              optionsItems1: new a.WatchedValue(b),
              optionsItems2: new a.WatchedValue(m),
            },
          )
          return e.push(k), { definitions: e }
        }
      }
    },
    89478: (e, t, i) => {
      i.r(t), i.d(t, { FibWedgeDefinitionsViewModel: () => S })
      var n = i(50151),
        o = i(44352),
        r = i(36298),
        l = i(2908),
        s = i(46141),
        a = i(85766),
        c = i(94474),
        d = i(69152)
      const p = new r.TranslatedString(
          'change {title} level {index} line visibility',
          o.t(null, void 0, i(45463)),
        ),
        u = new r.TranslatedString(
          'change {title} levels visibility',
          o.t(null, void 0, i(26710)),
        ),
        h = new r.TranslatedString(
          'change {title} level {index} line color',
          o.t(null, void 0, i(85551)),
        ),
        y = new r.TranslatedString(
          'change {title} level {index} line width',
          o.t(null, void 0, i(90098)),
        ),
        f = new r.TranslatedString(
          'change {title} level {index} line coeff',
          o.t(null, void 0, i(32891)),
        ),
        v = new r.TranslatedString(
          'change {title} all lines color',
          o.t(null, void 0, i(15521)),
        ),
        g = new r.TranslatedString(
          'change {title} background visibility',
          o.t(null, void 0, i(64548)),
        ),
        T = new r.TranslatedString(
          'change {title} background transparency',
          o.t(null, void 0, i(36438)),
        ),
        D = o.t(null, void 0, i(4372)),
        w = o.t(null, void 0, i(12374)),
        _ = o.t(null, void 0, i(27331)),
        P = o.t(null, void 0, i(79106))
      class S extends a.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = [],
            t = this._source.properties().childs(),
            i = this._source.name(),
            o = (0, c.removeSpaces)(i),
            a = new r.TranslatedString(i, this._source.translatedType()),
            S = t.trendline.childs(),
            m = (0, l.createLineStyleDefinition)(
              this._propertyApplier,
              {
                showLine: S.visible,
                lineColor: S.color,
                lineWidth: S.linewidth,
              },
              a,
              'TrendLine',
              { line: D },
            )
          e.push(m)
          const b = this._source.levelsCount()
          for (let i = 1; i <= b; i++) {
            const n = t[`level${i}`].childs(),
              r = (0, s.createLeveledLinePropertyDefinition)(
                {
                  checked: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    n.visible,
                    p.format({ title: a, index: i }),
                  ),
                  color: (0, s.getColorDefinitionProperty)(
                    this._propertyApplier,
                    n.color,
                    null,
                    h.format({ title: a, index: i }),
                  ),
                  width: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    n.linewidth,
                    y.format({ title: a, index: i }),
                  ),
                  level: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    n.coeff,
                    f.format({ title: a, index: i }),
                  ),
                },
                { id: `${o}LineLevel${i}` },
              )
            e.push(r)
          }
          const C = (0, s.createColorPropertyDefinition)(
            {
              color: (0, s.getColorDefinitionProperty)(
                this._propertyApplier,
                new d.CollectibleColorPropertyUndoWrapper(
                  (0, n.ensureNotNull)(this._source.lineColorsProperty()),
                  this._propertyApplier,
                  null,
                ),
                null,
                v.format({ title: a }),
                !0,
              ),
            },
            { id: `${o}AllLineColor`, title: w },
          )
          e.push(C)
          const L = (0, s.createTransparencyPropertyDefinition)(
            {
              checked: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                t.fillBackground,
                g.format({ title: a }),
              ),
              transparency: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                t.transparency,
                T.format({ title: a }),
              ),
            },
            { id: `${o}Background`, title: _ },
          )
          e.push(L)
          const x = (0, s.createCheckablePropertyDefinition)(
            {
              checked: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                t.showCoeffs,
                u.format({ title: a }),
              ),
            },
            { id: `${o}Levels`, title: P },
          )
          return e.push(x), { definitions: e }
        }
      }
    },
    42923: (e, t, i) => {
      i.r(t), i.d(t, { FlagMarkDefinitionsViewModel: () => c })
      var n = i(44352),
        o = i(36298),
        r = i(85766),
        l = i(46141)
      const s = new o.TranslatedString(
          'change flag color',
          n.t(null, void 0, i(72080)),
        ),
        a = n.t(null, void 0, i(21524))
      class c extends r.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs()
          return {
            definitions: [
              (0, l.createColorPropertyDefinition)(
                {
                  color: (0, l.getColorDefinitionProperty)(
                    this._propertyApplier,
                    e.flagColor,
                    null,
                    s,
                  ),
                },
                { id: 'FlagColor', title: a },
              ),
            ],
          }
        }
      }
    },
    85951: (e, t, i) => {
      i.r(t),
        i.d(t, {
          GannComplexAndFixedDefinitionsViewModel: () => N,
          isGannComplexLineTool: () => z,
        })
      var n = i(50151),
        o = i(44352),
        r = i(36298),
        l = i(50653),
        s = i(46141),
        a = i(85766),
        c = i(49809),
        d = i(97145),
        p = i(20345),
        u = i(94474),
        h = i(69152)
      const y = new r.TranslatedString(
          'change {title} level {index} line visibility',
          o.t(null, void 0, i(45463)),
        ),
        f = new r.TranslatedString(
          'change {title} level {index} line color',
          o.t(null, void 0, i(85551)),
        ),
        v = new r.TranslatedString(
          'change {title} level {index} line width',
          o.t(null, void 0, i(90098)),
        ),
        g = new r.TranslatedString(
          'change {title} all lines color',
          o.t(null, void 0, i(15521)),
        ),
        T = new r.TranslatedString(
          'change {title} background visibility',
          o.t(null, void 0, i(64548)),
        ),
        D = new r.TranslatedString(
          'change {title} background transparency',
          o.t(null, void 0, i(36438)),
        ),
        w = new r.TranslatedString(
          'change {title} reverse',
          o.t(null, void 0, i(52877)),
        ),
        _ = new r.TranslatedString(
          'change {title} fan {index} line visibility',
          o.t(null, void 0, i(89126)),
        ),
        P = new r.TranslatedString(
          'change {title} fan {index} line color',
          o.t(null, void 0, i(82516)),
        ),
        S = new r.TranslatedString(
          'change {title} fan {index} line width',
          o.t(null, void 0, i(30016)),
        ),
        m = new r.TranslatedString(
          'change {title} arcs {index} line visibility',
          o.t(null, void 0, i(13853)),
        ),
        b = new r.TranslatedString(
          'change {title} arcs {index} line color',
          o.t(null, void 0, i(17466)),
        ),
        C = new r.TranslatedString(
          'change {title} arcs {index} line width',
          o.t(null, void 0, i(72307)),
        ),
        L = new r.TranslatedString(
          'change top margin',
          o.t(null, void 0, i(98905)),
        ),
        x = o.t(null, void 0, i(24186)),
        k = o.t(null, void 0, i(12374)),
        A = o.t(null, void 0, i(27331)),
        V = o.t(null, void 0, i(59771)),
        $ = o.t(null, void 0, i(33886)),
        M = o.t(null, void 0, i(79106)),
        W = o.t(null, void 0, i(87931)),
        B = o.t(null, void 0, i(54189))
      function z(e) {
        return e instanceof c.LineToolGannComplex
      }
      class N extends a.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = [],
            t = this._source.properties().childs(),
            i = this._source.name(),
            o = (0, u.removeSpaces)(i),
            a = new r.TranslatedString(i, this._source.translatedType()),
            c = [],
            N = t.levels.childCount()
          for (let e = 0; e < N; e++) {
            const i = t.levels.childs()[e].childs(),
              n = (0, s.createLeveledLinePropertyDefinition)(
                {
                  checked: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    i.visible,
                    y.format({ title: a, index: e }),
                  ),
                  color: (0, s.getColorDefinitionProperty)(
                    this._propertyApplier,
                    i.color,
                    null,
                    f.format({ title: a, index: e }),
                  ),
                  width: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    i.width,
                    v.format({ title: a, index: e }),
                  ),
                },
                { id: `${o}LineLevel${e}`, title: `${e}` },
              )
            c.push(n)
          }
          const R = (0, s.createPropertyDefinitionsLeveledLinesGroup)(
            c,
            `${o}LeveledLinesGroup`,
          )
          e.push(
            (0, s.createPropertyDefinitionsGeneralGroup)(
              [R],
              `${o}LevelGroup`,
              M,
            ),
          )
          const G = [],
            E = t.fanlines.childCount()
          for (let e = 0; e < E; e++) {
            const i = t.fanlines.childs()[e].childs(),
              n = (0, s.createLeveledLinePropertyDefinition)(
                {
                  checked: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    i.visible,
                    _.format({ title: a, index: e }),
                  ),
                  color: (0, s.getColorDefinitionProperty)(
                    this._propertyApplier,
                    i.color,
                    null,
                    P.format({ title: a, index: e }),
                  ),
                  width: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    i.width,
                    S.format({ title: a, index: e }),
                  ),
                },
                {
                  id: `${o}FanLineLevel${e}`,
                  title: `${i.x.value()}x${i.y.value()}`,
                },
              )
            G.push(n)
          }
          const O = (0, s.createPropertyDefinitionsLeveledLinesGroup)(
            G,
            `${o}FanLeveledLinesGroup`,
          )
          e.push(
            (0, s.createPropertyDefinitionsGeneralGroup)(
              [O],
              `${o}FanLinesGroup`,
              W,
            ),
          )
          const U = [],
            F = t.arcs.childCount()
          for (let e = 0; e < F; e++) {
            const i = t.arcs.childs()[e].childs(),
              n = (0, s.createLeveledLinePropertyDefinition)(
                {
                  checked: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    i.visible,
                    m.format({ title: a, index: e }),
                  ),
                  color: (0, s.getColorDefinitionProperty)(
                    this._propertyApplier,
                    i.color,
                    null,
                    b.format({ title: a, index: e }),
                  ),
                  width: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    i.width,
                    C.format({ title: a, index: e }),
                  ),
                },
                {
                  id: `${o}ArcsLineLevel${e}`,
                  title: `${i.x.value()}x${i.y.value()}`,
                },
              )
            U.push(n)
          }
          const I = (0, s.createPropertyDefinitionsLeveledLinesGroup)(
            U,
            `${o}ArcsLeveledLinesGroup`,
          )
          e.push(
            (0, s.createPropertyDefinitionsGeneralGroup)(
              [I],
              `${o}ArcsLinesGroup`,
              B,
            ),
          )
          const H = (0, s.createColorPropertyDefinition)(
            {
              color: (0, s.getColorDefinitionProperty)(
                this._propertyApplier,
                new h.CollectibleColorPropertyUndoWrapper(
                  (0, n.ensureNotNull)(this._source.lineColorsProperty()),
                  this._propertyApplier,
                  g.format({ title: a }),
                ),
                null,
                null,
              ),
            },
            { id: `${o}AllLineColor`, title: k },
          )
          e.push(H)
          const j = t.arcsBackground.childs(),
            Y = (0, s.createTransparencyPropertyDefinition)(
              {
                checked: (0, s.convertToDefinitionProperty)(
                  this._propertyApplier,
                  j.fillBackground,
                  T.format({ title: a }),
                ),
                transparency: (0, s.convertToDefinitionProperty)(
                  this._propertyApplier,
                  j.transparency,
                  D.format({ title: a }),
                ),
              },
              { id: `${o}Background`, title: A },
            )
          e.push(Y)
          const X = (0, s.createCheckablePropertyDefinition)(
            {
              checked: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                t.reverse,
                w.format({ title: a }),
              ),
            },
            { id: `${o}Reverse`, title: x },
          )
          if ((e.push(X), z(this._source))) {
            const t = this._source,
              i = t.properties().childs(),
              n = (0, s.createNumberPropertyDefinition)(
                {
                  value: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    i.scaleRatio,
                    L,
                    [
                      (0, p.limitedPrecision)(7),
                      (e) =>
                        null !== e
                          ? parseFloat(
                              t.getScaleRatioFormatter().format(`${e}`),
                            )
                          : null,
                    ],
                  ),
                },
                {
                  id: 'scaleRatio',
                  title: V,
                  min: new d.WatchedValue(1e-7),
                  max: new d.WatchedValue(1e8),
                  step: new d.WatchedValue(t.getScaleRatioStep()),
                },
              )
            e.push(n)
            const o = i.labelsStyle.childs(),
              r = (0, l.createTextStyleDefinition)(
                this._propertyApplier,
                {
                  showText: i.showLabels,
                  fontSize: o.fontSize,
                  bold: o.bold,
                  italic: o.italic,
                },
                a,
                { customTitles: { text: $ } },
              )
            e.push(r)
          }
          return { definitions: e }
        }
      }
    },
    95399: (e, t, i) => {
      i.r(t), i.d(t, { GannFanDefinitionsViewModel: () => _ })
      var n = i(50151),
        o = i(44352),
        r = i(36298),
        l = i(46141),
        s = i(85766),
        a = i(94474),
        c = i(69152)
      const d = new r.TranslatedString(
          'change {title} level {index} line visibility',
          o.t(null, void 0, i(45463)),
        ),
        p = new r.TranslatedString(
          'change {title} level {index} line color',
          o.t(null, void 0, i(85551)),
        ),
        u = new r.TranslatedString(
          'change {title} level {index} line width',
          o.t(null, void 0, i(90098)),
        ),
        h = new r.TranslatedString(
          'change {title} level {index} line style',
          o.t(null, void 0, i(47840)),
        ),
        y = new r.TranslatedString(
          'change {title} all lines color',
          o.t(null, void 0, i(15521)),
        ),
        f = new r.TranslatedString(
          'change {title} background visibility',
          o.t(null, void 0, i(64548)),
        ),
        v = new r.TranslatedString(
          'change {title} background transparency',
          o.t(null, void 0, i(36438)),
        ),
        g = new r.TranslatedString(
          'change {title} labels visibility',
          o.t(null, void 0, i(24338)),
        ),
        T = o.t(null, void 0, i(12374)),
        D = o.t(null, void 0, i(27331)),
        w = o.t(null, void 0, i(94420))
      class _ extends s.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = [],
            t = this._source.properties().childs(),
            i = this._source.name(),
            o = (0, a.removeSpaces)(i),
            s = new r.TranslatedString(i, this._source.translatedType()),
            _ = this._source.levelsCount()
          for (let i = 1; i <= _; i++) {
            const n = t[`level${i}`].childs(),
              r = (0, l.createLeveledLinePropertyDefinition)(
                {
                  checked: (0, l.convertToDefinitionProperty)(
                    this._propertyApplier,
                    n.visible,
                    d.format({ title: s, index: i }),
                  ),
                  color: (0, l.getColorDefinitionProperty)(
                    this._propertyApplier,
                    n.color,
                    null,
                    p.format({ title: s, index: i }),
                  ),
                  width: (0, l.convertToDefinitionProperty)(
                    this._propertyApplier,
                    n.linewidth,
                    u.format({ title: s, index: i }),
                  ),
                  style: (0, l.convertToDefinitionProperty)(
                    this._propertyApplier,
                    n.linestyle,
                    h.format({ title: s, index: i }),
                  ),
                },
                {
                  id: `${o}LineLevel${i}`,
                  title: `${n.coeff1.value()}/${n.coeff2.value()}`,
                },
              )
            e.push(r)
          }
          const P = (0, l.createColorPropertyDefinition)(
            {
              color: (0, l.getColorDefinitionProperty)(
                this._propertyApplier,
                new c.CollectibleColorPropertyUndoWrapper(
                  (0, n.ensureNotNull)(this._source.lineColorsProperty()),
                  this._propertyApplier,
                  null,
                ),
                null,
                y.format({ title: s }),
              ),
            },
            { id: `${o}AllLineColor`, title: T },
          )
          e.push(P)
          const S = (0, l.createTransparencyPropertyDefinition)(
            {
              checked: (0, l.convertToDefinitionProperty)(
                this._propertyApplier,
                t.fillBackground,
                f.format({ title: s }),
              ),
              transparency: (0, l.convertToDefinitionProperty)(
                this._propertyApplier,
                t.transparency,
                v.format({ title: s }),
              ),
            },
            { id: `${o}Background`, title: D },
          )
          e.push(S)
          const m = (0, l.createCheckablePropertyDefinition)(
            {
              checked: (0, l.convertToDefinitionProperty)(
                this._propertyApplier,
                t.showLabels,
                g.format({ title: s }),
              ),
            },
            { id: `${o}Labels`, title: w },
          )
          return e.push(m), { definitions: e }
        }
      }
    },
    41854: (e, t, i) => {
      i.r(t), i.d(t, { GannSquareDefinitionsViewModel: () => M })
      var n = i(50151),
        o = i(44352),
        r = i(36298),
        l = i(46141),
        s = i(85766),
        a = i(94474),
        c = i(69152)
      const d = new r.TranslatedString(
          'change {title} level {index} line visibility',
          o.t(null, void 0, i(45463)),
        ),
        p = new r.TranslatedString(
          'change {title} level {index} line color',
          o.t(null, void 0, i(85551)),
        ),
        u = new r.TranslatedString(
          'change {title} level {index} line coeff',
          o.t(null, void 0, i(32891)),
        ),
        h = new r.TranslatedString(
          'change {title} all lines color',
          o.t(null, void 0, i(15521)),
        ),
        y = new r.TranslatedString(
          'change {title} background visibility',
          o.t(null, void 0, i(64548)),
        ),
        f = new r.TranslatedString(
          'change {title} background transparency',
          o.t(null, void 0, i(36438)),
        ),
        v = new r.TranslatedString(
          'change {title} reverse',
          o.t(null, void 0, i(52877)),
        ),
        g = new r.TranslatedString(
          'change {title} left labels visibility',
          o.t(null, void 0, i(2359)),
        ),
        T = new r.TranslatedString(
          'change {title} right labels visibility',
          o.t(null, void 0, i(16598)),
        ),
        D = new r.TranslatedString(
          'change {title} top labels visibility',
          o.t(null, void 0, i(73137)),
        ),
        w = new r.TranslatedString(
          'change {title} bottom labels visibility',
          o.t(null, void 0, i(15802)),
        ),
        _ = new r.TranslatedString(
          'change {title} fans visibility',
          o.t(null, void 0, i(78142)),
        ),
        P = new r.TranslatedString(
          'change {title} fans line color',
          o.t(null, void 0, i(79467)),
        ),
        S = o.t(null, void 0, i(12374)),
        m = o.t(null, void 0, i(27331)),
        b = o.t(null, void 0, i(16103)),
        C = o.t(null, void 0, i(77838)),
        L = o.t(null, void 0, i(79307)),
        x = o.t(null, void 0, i(91367)),
        k = o.t(null, void 0, i(10209)),
        A = o.t(null, void 0, i(17608)),
        V = o.t(null, void 0, i(38280)),
        $ = o.t(null, void 0, i(24186))
      class M extends s.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = [],
            t = this._source.properties().childs(),
            i = this._source.name(),
            o = (0, a.removeSpaces)(i),
            s = new r.TranslatedString(i, this._source.translatedType()),
            M = [],
            W = this._source.hLevelsCount()
          for (let e = 1; e <= W; e++) {
            const i = t[`hlevel${e}`].childs(),
              n = (0, l.createLeveledLinePropertyDefinition)(
                {
                  checked: (0, l.convertToDefinitionProperty)(
                    this._propertyApplier,
                    i.visible,
                    d.format({ title: s, index: e }),
                  ),
                  color: (0, l.getColorDefinitionProperty)(
                    this._propertyApplier,
                    i.color,
                    null,
                    p.format({ title: s, index: e }),
                  ),
                  level: (0, l.convertToDefinitionProperty)(
                    this._propertyApplier,
                    i.coeff,
                    u.format({ title: s, index: e }),
                  ),
                },
                { id: `${o}HLineLevel${e}` },
              )
            M.push(n)
          }
          const B = (0, l.createPropertyDefinitionsLeveledLinesGroup)(
              M,
              `${o}HLeveledLinesGroup`,
            ),
            z = (0, l.createCheckablePropertyDefinition)(
              {
                checked: (0, l.convertToDefinitionProperty)(
                  this._propertyApplier,
                  t.showLeftLabels,
                  g.format({ title: s }),
                ),
              },
              { id: `${o}LeftLabels`, title: L },
            ),
            N = (0, l.createCheckablePropertyDefinition)(
              {
                checked: (0, l.convertToDefinitionProperty)(
                  this._propertyApplier,
                  t.showRightLabels,
                  T.format({ title: s }),
                ),
              },
              { id: `${o}RightLabels`, title: x },
            ),
            R = (0, l.createTransparencyPropertyDefinition)(
              {
                checked: (0, l.convertToDefinitionProperty)(
                  this._propertyApplier,
                  t.fillHorzBackground,
                  y.format({ title: s }),
                ),
                transparency: (0, l.convertToDefinitionProperty)(
                  this._propertyApplier,
                  t.horzTransparency,
                  f.format({ title: s }),
                ),
              },
              { id: `${o}BackgroundH`, title: m },
            ),
            G = (0, l.createPropertyDefinitionsGeneralGroup)(
              [B, z, N, R],
              `${o}HLevelGroup`,
              b,
            )
          e.push(G)
          const E = [],
            O = this._source.vLevelsCount()
          for (let e = 1; e <= O; e++) {
            const i = t[`vlevel${e}`].childs(),
              n = (0, l.createLeveledLinePropertyDefinition)(
                {
                  checked: (0, l.convertToDefinitionProperty)(
                    this._propertyApplier,
                    i.visible,
                    d.format({ title: s, index: e }),
                  ),
                  color: (0, l.getColorDefinitionProperty)(
                    this._propertyApplier,
                    i.color,
                    null,
                    p.format({ title: s, index: e }),
                  ),
                  level: (0, l.convertToDefinitionProperty)(
                    this._propertyApplier,
                    i.coeff,
                    u.format({ title: s, index: e }),
                  ),
                },
                { id: `${o}VLineLevel${e}` },
              )
            E.push(n)
          }
          const U = (0, l.createPropertyDefinitionsLeveledLinesGroup)(
              E,
              `${o}VLeveledLinesGroup`,
            ),
            F = (0, l.createCheckablePropertyDefinition)(
              {
                checked: (0, l.convertToDefinitionProperty)(
                  this._propertyApplier,
                  t.showTopLabels,
                  D.format({ title: s }),
                ),
              },
              { id: `${o}TopLabels`, title: k },
            ),
            I = (0, l.createCheckablePropertyDefinition)(
              {
                checked: (0, l.convertToDefinitionProperty)(
                  this._propertyApplier,
                  t.showBottomLabels,
                  w.format({ title: s }),
                ),
              },
              { id: `${o}BottomLabels`, title: A },
            ),
            H = (0, l.createTransparencyPropertyDefinition)(
              {
                checked: (0, l.convertToDefinitionProperty)(
                  this._propertyApplier,
                  t.fillVertBackground,
                  y.format({ title: s }),
                ),
                transparency: (0, l.convertToDefinitionProperty)(
                  this._propertyApplier,
                  t.vertTransparency,
                  f.format({ title: s }),
                ),
              },
              { id: `${o}BackgroundV`, title: m },
            ),
            j = (0, l.createPropertyDefinitionsGeneralGroup)(
              [U, F, I, H],
              `${o}VLevelGroup`,
              C,
            )
          e.push(j)
          const Y = (0, l.createColorPropertyDefinition)(
            {
              color: (0, l.getColorDefinitionProperty)(
                this._propertyApplier,
                new c.CollectibleColorPropertyUndoWrapper(
                  (0, n.ensureNotNull)(this._source.lineColorsProperty()),
                  this._propertyApplier,
                  null,
                ),
                null,
                h.format({ title: s }),
                !0,
              ),
            },
            { id: `${o}AllLineColor`, title: S },
          )
          e.push(Y)
          const X = t.fans.childs(),
            q = (0, l.createColorPropertyDefinition)(
              {
                checked: (0, l.convertToDefinitionProperty)(
                  this._propertyApplier,
                  X.visible,
                  _.format({ title: s }),
                ),
                color: (0, l.getColorDefinitionProperty)(
                  this._propertyApplier,
                  X.color,
                  null,
                  P.format({ title: s }),
                ),
              },
              { id: `${o}FansLines`, title: V },
            )
          e.push(q)
          const J = (0, l.createCheckablePropertyDefinition)(
            {
              checked: (0, l.convertToDefinitionProperty)(
                this._propertyApplier,
                t.reverse,
                v.format({ title: s }),
              ),
            },
            { id: `${o}Reverse`, title: $ },
          )
          return e.push(J), { definitions: e }
        }
      }
    },
    84070: (e, t, i) => {
      i.r(t), i.d(t, { GeneralBezierDefinitionsViewModel: () => u })
      var n = i(44352),
        o = i(36298),
        r = i(2908),
        l = i(85766),
        s = i(46141),
        a = i(94474)
      const c = new o.TranslatedString(
          'change {title} background visibility',
          n.t(null, void 0, i(64548)),
        ),
        d = new o.TranslatedString(
          'change {title} background color',
          n.t(null, void 0, i(75312)),
        ),
        p = n.t(null, void 0, i(27331))
      class u extends l.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = new o.TranslatedString(t, this._source.translatedType())
          return {
            definitions: [
              (0, r.createLineStyleDefinition)(
                this._undoModel,
                {
                  lineColor: e.linecolor,
                  lineWidth: e.linewidth,
                  lineStyle: e.linestyle,
                  extendLeft: e.extendLeft,
                  extendRight: e.extendRight,
                  leftEnd: e.leftEnd,
                  rightEnd: e.rightEnd,
                },
                i,
                'Line',
              ),
              (0, s.createColorPropertyDefinition)(
                {
                  checked: (0, s.convertToDefinitionProperty)(
                    this._undoModel,
                    e.fillBackground,
                    c.format({ title: i }),
                  ),
                  color: (0, s.getColorDefinitionProperty)(
                    this._undoModel,
                    e.backgroundColor,
                    e.transparency,
                    d.format({ title: i }),
                  ),
                },
                { id: (0, a.removeSpaces)(`${t}BackgroundColor`), title: p },
              ),
            ],
          }
        }
      }
    },
    83115: (e, t, i) => {
      i.r(t), i.d(t, { GeneralDatePriceRangeDefinitionsViewModel: () => b })
      var n = i(44352),
        o = i(36298),
        r = i(2908),
        l = i(50653),
        s = i(85766),
        a = i(46141),
        c = i(94474)
      const d = new o.TranslatedString(
          'change {title} background visibility',
          n.t(null, void 0, i(64548)),
        ),
        p = new o.TranslatedString(
          'change {title} background color',
          n.t(null, void 0, i(75312)),
        ),
        u = new o.TranslatedString(
          'change {title} extend top',
          n.t(null, void 0, i(896)),
        ),
        h = new o.TranslatedString(
          'change {title} extend bottom',
          n.t(null, void 0, i(1447)),
        ),
        y = new o.TranslatedString(
          'change {title} extend left',
          n.t(null, void 0, i(15258)),
        ),
        f = n.t(null, void 0, i(1277)),
        v = n.t(null, void 0, i(48848)),
        g = n.t(null, void 0, i(27331)),
        T = n.t(null, void 0, i(85197)),
        D = n.t(null, void 0, i(71116)),
        w = n.t(null, void 0, i(45809)),
        _ = n.t(null, void 0, i(14025)),
        P = n.t(null, void 0, i(85206)),
        S = n.t(null, void 0, i(14773)),
        m = n.t(null, void 0, i(37229))
      class b extends s.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = [],
            t = this._source.properties().childs(),
            i = this._source.name(),
            n = (0, c.removeSpaces)(i),
            s = new o.TranslatedString(i, this._source.translatedType()),
            m = (0, r.createLineStyleDefinition)(
              this._propertyApplier,
              { lineColor: t.linecolor, lineWidth: t.linewidth },
              s,
              'Line',
              { line: f },
            )
          if ((e.push(m), t.hasOwnProperty('borderWidth'))) {
            const i = (0, r.createLineStyleDefinition)(
              this._propertyApplier,
              {
                showLine: t.drawBorder,
                lineColor: t.borderColor,
                lineWidth: t.borderWidth,
              },
              s,
              'Border',
              { line: v },
            )
            e.push(i)
          }
          const b = (0, a.createColorPropertyDefinition)(
            {
              checked: (0, a.convertToDefinitionProperty)(
                this._propertyApplier,
                t.fillBackground,
                d.format({ title: s }),
              ),
              color: (0, a.getColorDefinitionProperty)(
                this._propertyApplier,
                t.backgroundColor,
                t.backgroundTransparency,
                p.format({ title: s }),
              ),
            },
            { id: `${n}BackgroundColor`, title: g },
          )
          if (
            (e.push(b),
            (function (e) {
              return e.hasOwnProperty('extendTop')
            })(t))
          ) {
            const i = (0, a.createCheckablePropertyDefinition)(
                {
                  checked: (0, a.convertToDefinitionProperty)(
                    this._propertyApplier,
                    t.extendTop,
                    u.format({ title: s }),
                  ),
                },
                { id: `${n}ExtendTop`, title: T },
              ),
              o = (0, a.createCheckablePropertyDefinition)(
                {
                  checked: (0, a.convertToDefinitionProperty)(
                    this._propertyApplier,
                    t.extendBottom,
                    h.format({ title: s }),
                  ),
                },
                { id: `${n}ExtendBottom`, title: D },
              )
            e.push(i, o)
          }
          if (
            (function (e) {
              return e.hasOwnProperty('extendLeft')
            })(t)
          ) {
            const i = (0, a.createCheckablePropertyDefinition)(
                {
                  checked: (0, a.convertToDefinitionProperty)(
                    this._propertyApplier,
                    t.extendLeft,
                    y.format({ title: s }),
                  ),
                },
                { id: `${n}extendLeft`, title: w },
              ),
              o = (0, a.createCheckablePropertyDefinition)(
                {
                  checked: (0, a.convertToDefinitionProperty)(
                    this._propertyApplier,
                    t.extendRight,
                    h.format({ title: s }),
                  ),
                },
                { id: `${n}ExtendBottom`, title: _ },
              )
            e.push(i, o)
          }
          const C = (0, l.createTextStyleDefinition)(
            this._propertyApplier,
            {
              textColor: t.textcolor,
              backgroundColor: t.labelBackgroundColor,
              backgroundTransparency: t.backgroundTransparency,
              fontSize: t.fontsize,
              backgroundVisible: t.fillLabelBackground,
            },
            s,
            {
              isEditable: !0,
              isMultiLine: !0,
              customTitles: { text: P, backgroundTitle: S },
            },
          )
          return e.push(C), { definitions: e }
        }
        _textPropertyDefinitions() {
          const e = this._source.properties().childs().customText.childs()
          return {
            definitions: [
              (0, l.createTextStyleDefinition)(
                this._propertyApplier,
                {
                  ...e,
                  showText: e.visible,
                  textColor: e.color,
                  fontSize: e.fontsize,
                },
                new o.TranslatedString(
                  this._source.name(),
                  this._source.translatedType(),
                ),
                { isEditable: !0, isMultiLine: !0, customTitles: { text: m } },
              ),
            ],
          }
        }
      }
    },
    20061: (e, t, i) => {
      i.r(t),
        i.d(t, {
          GeneralFiguresDefinitionsViewModel: () => y,
          GeneralFiguresDefinitionsViewModelBase: () => h,
        })
      var n = i(44352),
        o = i(36298),
        r = i(2908),
        l = i(85766),
        s = i(46141),
        a = i(94474)
      const c = new o.TranslatedString(
          'change {title} background visibility',
          n.t(null, void 0, i(64548)),
        ),
        d = new o.TranslatedString(
          'change {title} background color',
          n.t(null, void 0, i(75312)),
        ),
        p = n.t(null, void 0, i(48848)),
        u = n.t(null, void 0, i(27331))
      class h extends l.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = new o.TranslatedString(t, this._source.translatedType()),
            n = (0, r.createLineStyleDefinition)(
              this._propertyApplier,
              { lineColor: e.color, lineWidth: e.linewidth },
              i,
              'Line',
              { line: p },
            ),
            l = 'transparency' in e ? e.transparency : null
          return {
            definitions: [
              n,
              (0, s.createColorPropertyDefinition)(
                {
                  checked: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    e.fillBackground,
                    c.format({ title: i }),
                  ),
                  color: (0, s.getColorDefinitionProperty)(
                    this._propertyApplier,
                    e.backgroundColor,
                    l,
                    d.format({ title: i }),
                  ),
                },
                { id: (0, a.removeSpaces)(`${t}BackgroundColor`), title: u },
              ),
            ],
          }
        }
      }
      class y extends h {}
    },
    28578: (e, t, i) => {
      i.r(t), i.d(t, { GeneralTrendFiguresDefinitionsViewModel: () => y })
      var n = i(44352),
        o = i(36298),
        r = i(2908),
        l = i(50653),
        s = i(85766),
        a = i(46141),
        c = i(94474)
      const d = new o.TranslatedString(
          'change {title} background visibility',
          n.t(null, void 0, i(64548)),
        ),
        p = new o.TranslatedString(
          'change {title} background color',
          n.t(null, void 0, i(75312)),
        ),
        u = n.t(null, void 0, i(29072)),
        h = n.t(null, void 0, i(27331))
      class y extends s.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = new o.TranslatedString(t, this._source.translatedType())
          return {
            definitions: [
              (0, r.createLineStyleDefinition)(
                this._propertyApplier,
                {
                  ...e,
                  lineColor: e.linecolor,
                  lineWidth: e.linewidth,
                  lineStyle: e.linestyle,
                },
                i,
                'Line',
              ),
              (0, l.createTextStyleDefinition)(
                this._propertyApplier,
                {
                  showText: e.showPrices,
                  textColor: e.textcolor,
                  fontSize: e.fontsize,
                  bold: e.bold,
                  italic: e.italic,
                },
                i,
                { customTitles: { text: u } },
              ),
              (0, a.createColorPropertyDefinition)(
                {
                  checked: (0, a.convertToDefinitionProperty)(
                    this._propertyApplier,
                    e.fillBackground,
                    d.format({ title: i }),
                  ),
                  color: (0, a.getColorDefinitionProperty)(
                    this._propertyApplier,
                    e.backgroundColor,
                    e.transparency,
                    p.format({ title: i }),
                  ),
                },
                { id: (0, c.removeSpaces)(`${t}Background`), title: h },
              ),
            ],
          }
        }
      }
    },
    52266: (e, t, i) => {
      i.r(t), i.d(t, { GhostFeedDefinitionsViewModel: () => b })
      var n = i(44352),
        o = i(36298),
        r = i(85766),
        l = i(46141),
        s = i(97145),
        a = i(94474)
      const c = new o.TranslatedString(
          'change {title} candle up color',
          n.t(null, void 0, i(42273)),
        ),
        d = new o.TranslatedString(
          'change {title} candle down color',
          n.t(null, void 0, i(38742)),
        ),
        p = new o.TranslatedString(
          'change {title} candle border visibility',
          n.t(null, void 0, i(28146)),
        ),
        u = new o.TranslatedString(
          'change {title} candle border up color',
          n.t(null, void 0, i(550)),
        ),
        h = new o.TranslatedString(
          'change {title} candle border down color',
          n.t(null, void 0, i(7373)),
        ),
        y = new o.TranslatedString(
          'change {title} candle wick visibility',
          n.t(null, void 0, i(27029)),
        ),
        f = new o.TranslatedString(
          'change {title} candle wick color',
          n.t(null, void 0, i(76054)),
        ),
        v = new o.TranslatedString(
          'change {title} transparency',
          n.t(null, void 0, i(84321)),
        ),
        g = new o.TranslatedString(
          'change {title} average HL value',
          n.t(null, void 0, i(78680)),
        ),
        T = new o.TranslatedString(
          'change {title} variance value',
          n.t(null, void 0, i(12355)),
        ),
        D = n.t(null, void 0, i(63528)),
        w = n.t(null, void 0, i(72269)),
        _ = n.t(null, void 0, i(26458)),
        P = n.t(null, void 0, i(2295)),
        S = n.t(null, void 0, i(34674)),
        m = n.t(null, void 0, i(25227))
      class b extends r.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = (0, a.removeSpaces)(t),
            n = new o.TranslatedString(t, this._source.translatedType()),
            r = e.candleStyle.childs()
          return {
            definitions: [
              (0, l.createTwoColorsPropertyDefinition)(
                {
                  color1: (0, l.getColorDefinitionProperty)(
                    this._propertyApplier,
                    r.upColor,
                    null,
                    c.format({ title: n }),
                  ),
                  color2: (0, l.getColorDefinitionProperty)(
                    this._propertyApplier,
                    r.downColor,
                    null,
                    d.format({ title: n }),
                  ),
                },
                { id: `${i}Candle2Colors`, title: D },
              ),
              (0, l.createTwoColorsPropertyDefinition)(
                {
                  checked: (0, l.convertToDefinitionProperty)(
                    this._propertyApplier,
                    r.drawBorder,
                    p.format({ title: n }),
                  ),
                  color1: (0, l.getColorDefinitionProperty)(
                    this._propertyApplier,
                    r.borderUpColor,
                    null,
                    u.format({ title: n }),
                  ),
                  color2: (0, l.getColorDefinitionProperty)(
                    this._propertyApplier,
                    r.borderDownColor,
                    null,
                    h.format({ title: n }),
                  ),
                },
                { id: `${i}CandleBorder2Colors`, title: w },
              ),
              (0, l.createColorPropertyDefinition)(
                {
                  checked: (0, l.convertToDefinitionProperty)(
                    this._propertyApplier,
                    r.drawWick,
                    y.format({ title: n }),
                  ),
                  color: (0, l.getColorDefinitionProperty)(
                    this._propertyApplier,
                    r.wickColor,
                    null,
                    f.format({ title: n }),
                  ),
                },
                { id: `${i}CandleWickColor`, title: _ },
              ),
              (0, l.createTransparencyPropertyDefinition)(
                {
                  transparency: (0, l.convertToDefinitionProperty)(
                    this._propertyApplier,
                    e.transparency,
                    v.format({ title: n }),
                  ),
                },
                { id: `${i}Transparency`, title: P },
              ),
            ],
          }
        }
        _inputsPropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = (0, a.removeSpaces)(t),
            n = new o.TranslatedString(t, this._source.translatedType())
          return {
            definitions: [
              (0, l.createNumberPropertyDefinition)(
                {
                  value: (0, l.convertToDefinitionProperty)(
                    this._propertyApplier,
                    e.averageHL,
                    g.format({ title: n }),
                  ),
                },
                {
                  id: `${i}AvgHL`,
                  title: S,
                  type: 0,
                  min: new s.WatchedValue(1),
                  max: new s.WatchedValue(5e4),
                  step: new s.WatchedValue(1),
                },
              ),
              (0, l.createNumberPropertyDefinition)(
                {
                  value: (0, l.convertToDefinitionProperty)(
                    this._propertyApplier,
                    e.variance,
                    T.format({ title: n }),
                  ),
                },
                {
                  id: `${i}Variance`,
                  title: m,
                  type: 0,
                  min: new s.WatchedValue(1),
                  max: new s.WatchedValue(100),
                  step: new s.WatchedValue(1),
                },
              ),
            ],
          }
        }
      }
    },
    63138: (e, t, i) => {
      i.r(t), i.d(t, { HighlighterDefinitionsViewModel: () => l })
      var n = i(2908),
        o = i(85766),
        r = i(36298)
      class l extends o.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs()
          return {
            definitions: [
              (0, n.createLineStyleDefinition)(
                this._propertyApplier,
                { lineColor: e.linecolor },
                new r.TranslatedString(
                  this._source.name(),
                  this._source.translatedType(),
                ),
                'Line',
              ),
            ],
          }
        }
      }
    },
    55252: (e, t, i) => {
      i.r(t), i.d(t, { HorizontalLineDefinitionsViewModel: () => h })
      var n = i(44352),
        o = i(36298),
        r = i(46141),
        l = i(41339),
        s = i(94474),
        a = i(85766),
        c = i(86778),
        d = i(50653)
      const p = n.t(null, void 0, i(37229)),
        u = n.t(null, { context: 'linetool point' }, i(1961))
      class h extends a.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs()
          return (0, c.getLinesStylesPropertiesDefinitions)(
            this._propertyApplier,
            e,
            new o.TranslatedString(
              this._source.name(),
              this._source.translatedType(),
            ),
          )
        }
        _coordinatesPropertyDefinitions() {
          const e = this._source.pointsProperty().childs().points[0].childs(),
            t = this._getYCoordinateStepWV(),
            i = (0, l.getCoordinateYMetaInfo)(this._propertyApplier, e, t)
          return {
            definitions: [
              (0, r.createCoordinatesPropertyDefinition)(
                { y: i.property },
                {
                  id: (0, s.removeSpaces)(`${this._source.name()}Point`),
                  title: u,
                  ...i.info,
                },
              ),
            ],
          }
        }
        _textPropertyDefinitions() {
          const e = this._source.properties().childs()
          return {
            definitions: [
              (0, d.createTextStyleDefinition)(
                this._propertyApplier,
                {
                  ...e,
                  showText: e.showLabel,
                  textColor: e.textcolor,
                  fontSize: e.fontsize,
                  textOrientation: e.textOrientation,
                },
                new o.TranslatedString(
                  this._source.name(),
                  this._source.translatedType(),
                ),
                { isEditable: !0, isMultiLine: !0, customTitles: { text: p } },
              ),
            ],
          }
        }
      }
    },
    15574: (e, t, i) => {
      i.r(t), i.d(t, { HorizontalRayDefinitionsViewModel: () => c })
      var n = i(44352),
        o = i(36298),
        r = i(85766),
        l = i(86778),
        s = i(50653)
      const a = n.t(null, void 0, i(37229))
      class c extends r.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs()
          return (0, l.getLinesStylesPropertiesDefinitions)(
            this._propertyApplier,
            e,
            new o.TranslatedString(
              this._source.name(),
              this._source.translatedType(),
            ),
          )
        }
        _textPropertyDefinitions() {
          const e = this._source.properties().childs()
          return {
            definitions: [
              (0, s.createTextStyleDefinition)(
                this._propertyApplier,
                {
                  ...e,
                  showText: e.showLabel,
                  textColor: e.textcolor,
                  fontSize: e.fontsize,
                  textOrientation: e.textOrientation,
                },
                new o.TranslatedString(
                  this._source.name(),
                  this._source.translatedType(),
                ),
                { isEditable: !0, isMultiLine: !0, customTitles: { text: a } },
              ),
            ],
          }
        }
      }
    },
    53284: (e, t, i) => {
      i.r(t), i.d(t, { IconsDefinitionsViewModel: () => d })
      var n = i(44352),
        o = i(36298),
        r = i(85766),
        l = i(46141),
        s = i(94474)
      const a = new o.TranslatedString(
          'change {title} color',
          n.t(null, void 0, i(20216)),
        ),
        c = n.t(null, void 0, i(40054))
      class d extends r.LineDataSourceDefinitionsViewModel {
        constructor(e, t) {
          super(e, t)
        }
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = new o.TranslatedString(t, this._source.translatedType())
          return {
            definitions: [
              (0, l.createColorPropertyDefinition)(
                {
                  color: (0, l.getColorDefinitionProperty)(
                    this._propertyApplier,
                    e.color,
                    null,
                    a.format({ title: i }),
                  ),
                },
                { id: (0, s.removeSpaces)(`${t}Color`), title: c },
              ),
            ],
          }
        }
      }
    },
    77420: (e, t, i) => {
      i.r(t), i.d(t, { NoteDefinitionsViewModel: () => p })
      var n = i(44352),
        o = i(36298),
        r = i(50653),
        l = i(85766),
        s = i(46141),
        a = i(94474)
      const c = new o.TranslatedString(
          'change {title} background color',
          n.t(null, void 0, i(75312)),
        ),
        d = n.t(null, void 0, i(85206))
      class p extends l.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = new o.TranslatedString(t, this._source.translatedType())
          return {
            definitions: [
              (0, s.createColorPropertyDefinition)(
                {
                  color: (0, s.getColorDefinitionProperty)(
                    this._propertyApplier,
                    e.markerColor,
                    null,
                    c.format({ title: i }),
                  ),
                },
                { id: (0, a.removeSpaces)(`${t}LabelColor`), title: d },
              ),
            ],
          }
        }
        _textPropertyDefinitions() {
          const e = this._source.properties().childs()
          return {
            definitions: [
              (0, r.createTextStyleDefinition)(
                this._propertyApplier,
                {
                  textColor: e.textColor,
                  fontSize: e.fontSize,
                  bold: e.bold,
                  italic: e.italic,
                  text: e.text,
                  backgroundColor: e.backgroundColor,
                  backgroundTransparency: e.backgroundTransparency,
                  borderColor: e.borderColor,
                },
                new o.TranslatedString(
                  this._source.name(),
                  this._source.translatedType(),
                ),
                { isEditable: !0, isMultiLine: !0 },
              ),
            ],
          }
        }
      }
    },
    21905: (e, t, i) => {
      i.r(t), i.d(t, { ParallelChannelDefinitionsViewModel: () => T })
      var n = i(44352),
        o = i(36298),
        r = i(46141),
        l = i(85766),
        s = i(2908),
        a = i(94474)
      const c = new o.TranslatedString(
          'change {title} extending left',
          n.t(null, void 0, i(3708)),
        ),
        d = new o.TranslatedString(
          'change {title} extending right',
          n.t(null, void 0, i(52889)),
        ),
        p = new o.TranslatedString(
          'change {title} background visibility',
          n.t(null, void 0, i(64548)),
        ),
        u = new o.TranslatedString(
          'change {title} background color',
          n.t(null, void 0, i(75312)),
        ),
        h = n.t(null, void 0, i(27331)),
        y = n.t(null, void 0, i(25892)),
        f = n.t(null, void 0, i(74395)),
        v = n.t(null, void 0, i(99120)),
        g = n.t(null, void 0, i(76476))
      class T extends l.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = (0, a.removeSpaces)(t),
            n = new o.TranslatedString(t, this._source.translatedType())
          return {
            definitions: [
              (0, s.createLineStyleDefinition)(
                this._propertyApplier,
                {
                  lineColor: e.linecolor,
                  lineStyle: e.linestyle,
                  lineWidth: e.linewidth,
                },
                n,
                'ChannelLine',
                { line: v },
              ),
              (0, s.createLineStyleDefinition)(
                this._propertyApplier,
                {
                  showLine: e.showMidline,
                  lineColor: e.midlinecolor,
                  lineStyle: e.midlinestyle,
                  lineWidth: e.midlinewidth,
                },
                n,
                'MiddleLine',
                { line: g },
              ),
              (0, r.createCheckablePropertyDefinition)(
                {
                  checked: (0, r.convertToDefinitionProperty)(
                    this._propertyApplier,
                    e.extendLeft,
                    c.format({ title: n }),
                  ),
                },
                { id: `${i}ExtendLeft`, title: y },
              ),
              (0, r.createCheckablePropertyDefinition)(
                {
                  checked: (0, r.convertToDefinitionProperty)(
                    this._propertyApplier,
                    e.extendRight,
                    d.format({ title: n }),
                  ),
                },
                { id: `${i}ExtendRight`, title: f },
              ),
              (0, r.createColorPropertyDefinition)(
                {
                  checked: (0, r.convertToDefinitionProperty)(
                    this._propertyApplier,
                    e.fillBackground,
                    p.format({ title: n }),
                  ),
                  color: (0, r.getColorDefinitionProperty)(
                    this._propertyApplier,
                    e.backgroundColor,
                    e.transparency,
                    u.format({ title: n }),
                  ),
                },
                { id: `${i}Background`, title: h },
              ),
            ],
          }
        }
      }
    },
    74481: (e, t, i) => {
      i.r(t), i.d(t, { PathDefinitionsViewModel: () => a })
      var n = i(44352),
        o = i(36298),
        r = i(2908),
        l = i(85766)
      const s = n.t(null, void 0, i(1277))
      class a extends l.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs()
          return {
            definitions: [
              (0, r.createLineStyleDefinition)(
                this._propertyApplier,
                {
                  lineColor: e.lineColor,
                  lineWidth: e.lineWidth,
                  lineStyle: e.lineStyle,
                  leftEnd: e.leftEnd,
                  rightEnd: e.rightEnd,
                },
                new o.TranslatedString(
                  this._source.name(),
                  this._source.translatedType(),
                ),
                'Line',
                { line: s },
              ),
            ],
          }
        }
      }
    },
    25107: (e, t, i) => {
      i.r(t), i.d(t, { PatternWithBackgroundDefinitionViewModel: () => f })
      var n = i(44352),
        o = i(36298),
        r = i(2908),
        l = i(50653),
        s = i(85766),
        a = i(46141),
        c = i(94474)
      const d = new o.TranslatedString(
          'change {title} background visibility',
          n.t(null, void 0, i(64548)),
        ),
        p = new o.TranslatedString(
          'change {title} background color',
          n.t(null, void 0, i(75312)),
        ),
        u = n.t(null, void 0, i(85206)),
        h = n.t(null, void 0, i(48848)),
        y = n.t(null, void 0, i(27331))
      class f extends s.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = new o.TranslatedString(t, this._source.translatedType())
          return {
            definitions: [
              (0, l.createTextStyleDefinition)(
                this._propertyApplier,
                {
                  textColor: e.textcolor,
                  fontSize: e.fontsize,
                  bold: e.bold,
                  italic: e.italic,
                },
                i,
                { isEditable: !0, isMultiLine: !0, customTitles: { text: u } },
              ),
              (0, r.createLineStyleDefinition)(
                this._propertyApplier,
                { lineColor: e.color, lineWidth: e.linewidth },
                i,
                'Line',
                { line: h },
              ),
              (0, a.createColorPropertyDefinition)(
                {
                  checked: (0, a.convertToDefinitionProperty)(
                    this._propertyApplier,
                    e.fillBackground,
                    d.format({ title: i }),
                  ),
                  color: (0, a.getColorDefinitionProperty)(
                    this._propertyApplier,
                    e.backgroundColor,
                    e.transparency,
                    p.format({ title: i }),
                  ),
                },
                { id: (0, c.removeSpaces)(`${t}BackgroundColor`), title: y },
              ),
            ],
          }
        }
      }
    },
    63311: (e, t, i) => {
      i.r(t), i.d(t, { PatternWithoutBackgroundDefinitionsViewModel: () => d })
      var n = i(44352),
        o = i(36298),
        r = i(2908),
        l = i(50653),
        s = i(85766)
      const a = n.t(null, void 0, i(85206)),
        c = n.t(null, void 0, i(48848))
      class d extends s.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = new o.TranslatedString(
              this._source.name(),
              this._source.translatedType(),
            )
          return {
            definitions: [
              (0, l.createTextStyleDefinition)(
                this._propertyApplier,
                {
                  textColor: e.textcolor,
                  fontSize: e.fontsize,
                  bold: e.bold,
                  italic: e.italic,
                },
                t,
                { isEditable: !0, isMultiLine: !0, customTitles: { text: a } },
              ),
              (0, r.createLineStyleDefinition)(
                this._propertyApplier,
                { lineColor: e.color, lineWidth: e.linewidth },
                t,
                'Line',
                { line: c },
              ),
            ],
          }
        }
      }
    },
    81658: (e, t, i) => {
      i.r(t), i.d(t, { PitchBaseDefinitionsViewModel: () => m })
      var n = i(50151),
        o = i(44352),
        r = i(36298),
        l = i(2908),
        s = i(85766),
        a = i(46141),
        c = i(94474),
        d = i(69152)
      const p = new r.TranslatedString(
          'change {title} extend lines',
          o.t(null, void 0, i(96902)),
        ),
        u = new r.TranslatedString(
          'change {title} level {index} line visibility',
          o.t(null, void 0, i(45463)),
        ),
        h = new r.TranslatedString(
          'change {title} level {index} line color',
          o.t(null, void 0, i(85551)),
        ),
        y = new r.TranslatedString(
          'change {title} level {index} line width',
          o.t(null, void 0, i(90098)),
        ),
        f = new r.TranslatedString(
          'change {title} level {index} line style',
          o.t(null, void 0, i(47840)),
        ),
        v = new r.TranslatedString(
          'change {title} level {index} line coeff',
          o.t(null, void 0, i(32891)),
        ),
        g = new r.TranslatedString(
          'change {title} all lines color',
          o.t(null, void 0, i(15521)),
        ),
        T = new r.TranslatedString(
          'change {title} background visibility',
          o.t(null, void 0, i(64548)),
        ),
        D = new r.TranslatedString(
          'change {title} background transparency',
          o.t(null, void 0, i(36438)),
        ),
        w = o.t(null, { context: 'study' }, i(66187)),
        _ = o.t(null, void 0, i(12374)),
        P = o.t(null, void 0, i(27331)),
        S = o.t(null, void 0, i(13611))
      class m extends s.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = [],
            t = this._source.properties(),
            i = t.childs(),
            o = this._source.name(),
            s = (0, c.removeSpaces)(o),
            m = new r.TranslatedString(o, this._source.translatedType())
          t.hasChild('extendLines') &&
            e.push(
              (0, a.createCheckablePropertyDefinition)(
                {
                  checked: (0, a.convertToDefinitionProperty)(
                    this._propertyApplier,
                    i.extendLines,
                    p.format({ title: m }),
                  ),
                },
                { id: `${s}ExtendLines`, title: S },
              ),
            )
          const b = i.median.childs(),
            C = (0, l.createLineStyleDefinition)(
              this._propertyApplier,
              {
                lineColor: b.color,
                lineStyle: b.linestyle,
                lineWidth: b.linewidth,
              },
              m,
              'Median',
              { line: w },
            )
          e.push(C)
          const L = this._source.levelsCount()
          for (let t = 0; t <= L; t++) {
            const n = i[`level${t}`].childs(),
              o = (0, a.createLeveledLinePropertyDefinition)(
                {
                  checked: (0, a.convertToDefinitionProperty)(
                    this._propertyApplier,
                    n.visible,
                    u.format({ title: m, index: t + 1 }),
                  ),
                  color: (0, a.getColorDefinitionProperty)(
                    this._propertyApplier,
                    n.color,
                    null,
                    h.format({ title: m, index: t + 1 }),
                  ),
                  width: (0, a.convertToDefinitionProperty)(
                    this._propertyApplier,
                    n.linewidth,
                    y.format({ title: m, index: t + 1 }),
                  ),
                  style: (0, a.convertToDefinitionProperty)(
                    this._propertyApplier,
                    n.linestyle,
                    f.format({ title: m, index: t + 1 }),
                  ),
                  level: (0, a.convertToDefinitionProperty)(
                    this._propertyApplier,
                    n.coeff,
                    v.format({ title: m, index: t + 1 }),
                  ),
                },
                { id: `${s}LineLevel${t + 1}` },
              )
            e.push(o)
          }
          const x = (0, a.createColorPropertyDefinition)(
            {
              color: (0, a.getColorDefinitionProperty)(
                this._propertyApplier,
                new d.CollectibleColorPropertyUndoWrapper(
                  (0, n.ensureNotNull)(this._source.lineColorsProperty()),
                  this._propertyApplier,
                  null,
                ),
                null,
                g.format({ title: m }),
                !0,
              ),
            },
            { id: `${s}AllLineColor`, title: _ },
          )
          e.push(x)
          const k = (0, a.createTransparencyPropertyDefinition)(
            {
              checked: (0, a.convertToDefinitionProperty)(
                this._propertyApplier,
                i.fillBackground,
                T.format({ title: m }),
              ),
              transparency: (0, a.convertToDefinitionProperty)(
                this._propertyApplier,
                i.transparency,
                D.format({ title: m }),
              ),
            },
            { id: `${s}Background`, title: P },
          )
          return e.push(k), { definitions: e }
        }
      }
    },
    769: (e, t, i) => {
      i.r(t), i.d(t, { PitchForkDefinitionsViewModel: () => u })
      var n = i(44352),
        o = i(36298),
        r = i(46141),
        l = i(81658),
        s = i(90095),
        a = i(97145)
      const c = new o.TranslatedString(
          'change {title} style',
          n.t(null, void 0, i(74428)),
        ),
        d = n.t(null, void 0, i(32733)),
        p = [
          {
            value: s.LineToolPitchforkStyle.Original,
            title: n.t(null, void 0, i(25595)),
          },
          {
            value: s.LineToolPitchforkStyle.Schiff2,
            title: n.t(null, void 0, i(51464)),
          },
          {
            value: s.LineToolPitchforkStyle.Schiff,
            title: n.t(null, void 0, i(66276)),
          },
          {
            value: s.LineToolPitchforkStyle.Inside,
            title: n.t(null, void 0, i(9114)),
          },
        ]
      class u extends l.PitchBaseDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = super._stylePropertyDefinitions(),
            t = this._source.properties().childs(),
            i = this._source.name(),
            n = new o.TranslatedString(i, this._source.translatedType()),
            l = (0, r.createOptionsPropertyDefinition)(
              {
                option: (0, r.convertToDefinitionProperty)(
                  this._propertyApplier,
                  t.style,
                  c.format({ title: n }),
                ),
              },
              {
                id: `${i}PitchStyle`,
                title: d,
                options: new a.WatchedValue(p),
              },
            )
          return e.definitions.push(l), e
        }
      }
    },
    62890: (e, t, i) => {
      i.r(t), i.d(t, { PolylinesDefinitionsViewModel: () => h })
      var n = i(44352),
        o = i(36298),
        r = i(2908),
        l = i(85766),
        s = i(46141),
        a = i(94474)
      const c = new o.TranslatedString(
          'change {title} background visibility',
          n.t(null, void 0, i(64548)),
        ),
        d = new o.TranslatedString(
          'change {title} background color',
          n.t(null, void 0, i(75312)),
        ),
        p = n.t(null, void 0, i(48848)),
        u = n.t(null, void 0, i(27331))
      class h extends l.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = new o.TranslatedString(t, this._source.translatedType())
          return {
            definitions: [
              (0, r.createLineStyleDefinition)(
                this._propertyApplier,
                { lineColor: e.linecolor, lineWidth: e.linewidth },
                i,
                'Line',
                { line: p },
              ),
              (0, s.createColorPropertyDefinition)(
                {
                  checked: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    e.fillBackground,
                    c.format({ title: i }),
                  ),
                  color: (0, s.getColorDefinitionProperty)(
                    this._propertyApplier,
                    e.backgroundColor,
                    e.transparency,
                    d.format({ title: i }),
                  ),
                },
                { id: (0, a.removeSpaces)(`${t}BackgroundColor`), title: u },
              ),
            ],
          }
        }
      }
    },
    54440: (e, t, i) => {
      i.r(t), i.d(t, { PredictionDefinitionsViewModel: () => k })
      var n = i(44352),
        o = i(36298),
        r = i(2908),
        l = i(85766),
        s = i(46141),
        a = i(94474)
      const c = new o.TranslatedString(
          'change {title} source text color',
          n.t(null, void 0, i(42286)),
        ),
        d = new o.TranslatedString(
          'change {title} source background color',
          n.t(null, void 0, i(18544)),
        ),
        p = new o.TranslatedString(
          'change {title} source border color',
          n.t(null, void 0, i(48035)),
        ),
        u = new o.TranslatedString(
          'change {title} target text color',
          n.t(null, void 0, i(27634)),
        ),
        h = new o.TranslatedString(
          'change {title} target background color',
          n.t(null, void 0, i(52387)),
        ),
        y = new o.TranslatedString(
          'change {title} target border color',
          n.t(null, void 0, i(6921)),
        ),
        f = new o.TranslatedString(
          'change {title} success text color',
          n.t(null, void 0, i(88383)),
        ),
        v = new o.TranslatedString(
          'change {title} success background color',
          n.t(null, void 0, i(26967)),
        ),
        g = new o.TranslatedString(
          'change {title} failure text color',
          n.t(null, void 0, i(3156)),
        ),
        T = new o.TranslatedString(
          'change {title} failure background color',
          n.t(null, void 0, i(49885)),
        ),
        D = n.t(null, void 0, i(79238)),
        w = n.t(null, void 0, i(22213)),
        _ = n.t(null, void 0, i(15500)),
        P = n.t(null, void 0, i(74289)),
        S = n.t(null, void 0, i(98001)),
        m = n.t(null, void 0, i(89258)),
        b = n.t(null, void 0, i(69835)),
        C = n.t(null, void 0, i(91141)),
        L = n.t(null, void 0, i(31343)),
        x = n.t(null, void 0, i(28565))
      class k extends l.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = (0, a.removeSpaces)(t),
            n = new o.TranslatedString(t, this._source.translatedType())
          return {
            definitions: [
              (0, r.createLineStyleDefinition)(
                this._propertyApplier,
                { lineColor: e.linecolor, lineWidth: e.linewidth },
                n,
                'Line',
              ),
              (0, s.createColorPropertyDefinition)(
                {
                  color: (0, s.getColorDefinitionProperty)(
                    this._propertyApplier,
                    e.sourceTextColor,
                    null,
                    c.format({ title: n }),
                  ),
                },
                { id: `${i}SourceTextColor`, title: D },
              ),
              (0, s.createColorPropertyDefinition)(
                {
                  color: (0, s.getColorDefinitionProperty)(
                    this._propertyApplier,
                    e.sourceBackColor,
                    e.transparency,
                    d.format({ title: n }),
                  ),
                },
                { id: `${i}SourceBackgroundColor`, title: w },
              ),
              (0, s.createColorPropertyDefinition)(
                {
                  color: (0, s.getColorDefinitionProperty)(
                    this._propertyApplier,
                    e.sourceStrokeColor,
                    null,
                    p.format({ title: n }),
                  ),
                },
                { id: `${i}SourceBorderColor`, title: _ },
              ),
              (0, s.createColorPropertyDefinition)(
                {
                  color: (0, s.getColorDefinitionProperty)(
                    this._propertyApplier,
                    e.targetTextColor,
                    null,
                    u.format({ title: n }),
                  ),
                },
                { id: `${i}TargetTextColor`, title: P },
              ),
              (0, s.createColorPropertyDefinition)(
                {
                  color: (0, s.getColorDefinitionProperty)(
                    this._propertyApplier,
                    e.targetBackColor,
                    null,
                    h.format({ title: n }),
                  ),
                },
                { id: `${i}TargetBackgroundColor`, title: S },
              ),
              (0, s.createColorPropertyDefinition)(
                {
                  color: (0, s.getColorDefinitionProperty)(
                    this._propertyApplier,
                    e.targetStrokeColor,
                    null,
                    y.format({ title: n }),
                  ),
                },
                { id: `${i}TargetBorderColor`, title: m },
              ),
              (0, s.createColorPropertyDefinition)(
                {
                  color: (0, s.getColorDefinitionProperty)(
                    this._propertyApplier,
                    e.successTextColor,
                    null,
                    f.format({ title: n }),
                  ),
                },
                { id: `${i}SuccessTextColor`, title: b },
              ),
              (0, s.createColorPropertyDefinition)(
                {
                  color: (0, s.getColorDefinitionProperty)(
                    this._propertyApplier,
                    e.successBackground,
                    null,
                    v.format({ title: n }),
                  ),
                },
                { id: `${i}SuccessBackgroundColor`, title: C },
              ),
              (0, s.createColorPropertyDefinition)(
                {
                  color: (0, s.getColorDefinitionProperty)(
                    this._propertyApplier,
                    e.failureTextColor,
                    null,
                    g.format({ title: n }),
                  ),
                },
                { id: `${i}FailureTextColor`, title: L },
              ),
              (0, s.createColorPropertyDefinition)(
                {
                  color: (0, s.getColorDefinitionProperty)(
                    this._propertyApplier,
                    e.failureBackground,
                    null,
                    T.format({ title: n }),
                  ),
                },
                { id: `${i}FailureBackgroundColor`, title: x },
              ),
            ],
          }
        }
      }
    },
    17265: (e, t, i) => {
      i.r(t), i.d(t, { PriceLabelDefinitionsViewModel: () => a })
      var n = i(44352),
        o = i(36298),
        r = i(50653),
        l = i(85766)
      const s = n.t(null, void 0, i(37229))
      class a extends l.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs()
          return {
            definitions: [
              (0, r.createTextStyleDefinition)(
                this._propertyApplier,
                {
                  textColor: e.color,
                  fontSize: e.fontsize,
                  backgroundColor: e.backgroundColor,
                  backgroundTransparency: e.transparency,
                  borderColor: e.borderColor,
                },
                new o.TranslatedString(
                  this._source.name(),
                  this._source.translatedType(),
                ),
                { customTitles: { text: s } },
              ),
            ],
          }
        }
      }
    },
    11980: (e, t, i) => {
      i.r(t), i.d(t, { PriceNoteDefinitionsViewModel: () => f })
      var n = i(44352),
        o = i(36298),
        r = i(50653),
        l = i(85766),
        s = i(46141),
        a = i(94474)
      const c = new o.TranslatedString(
          'change {title} line color',
          n.t(null, void 0, i(20563)),
        ),
        d = n.t(null, void 0, i(37126)),
        p = n.t(null, void 0, i(37229)),
        u = n.t(null, void 0, i(60489)),
        h = n.t(null, void 0, i(75332)),
        y = n.t(null, void 0, i(14773))
      class f extends l.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = (0, a.removeSpaces)(t),
            n = new o.TranslatedString(t, this._source.translatedType()),
            l = (0, s.createColorPropertyDefinition)(
              {
                color: (0, s.getColorDefinitionProperty)(
                  this._propertyApplier,
                  e.lineColor,
                  null,
                  c.format({ title: n }),
                ),
              },
              { id: `${i}LineColor`, title: u },
            )
          return {
            definitions: [
              (0, r.createTextStyleDefinition)(
                this._propertyApplier,
                {
                  textColor: e.priceLabelTextColor,
                  fontSize: e.priceLabelFontSize,
                  bold: e.priceLabelBold,
                  italic: e.priceLabelItalic,
                  backgroundColor: e.priceLabelBackgroundColor,
                  borderColor: e.priceLabelBorderColor,
                },
                n,
                {
                  isEditable: !1,
                  isMultiLine: !1,
                  customTitles: { text: d, borderTitle: h, backgroundTitle: y },
                },
              ),
              l,
            ],
          }
        }
        _textPropertyDefinitions() {
          const e = this._source.properties().childs()
          return {
            definitions: [
              (0, r.createTextStyleDefinition)(
                this._propertyApplier,
                {
                  ...e,
                  showText: e.showLabel,
                  textColor: e.textColor,
                  fontSize: e.fontSize,
                },
                new o.TranslatedString(
                  this._source.name(),
                  this._source.translatedType(),
                ),
                { isEditable: !0, isMultiLine: !0, customTitles: { text: p } },
              ),
            ],
          }
        }
      }
    },
    12501: (e, t, i) => {
      i.r(t), i.d(t, { ProjectionDefinitionsViewModel: () => h })
      var n = i(44352),
        o = i(36298),
        r = i(2908),
        l = i(85766),
        s = i(46141),
        a = i(94474)
      const c = new o.TranslatedString(
          'change {title} background color 1',
          n.t(null, void 0, i(39651)),
        ),
        d = new o.TranslatedString(
          'change {title} background color 2',
          n.t(null, void 0, i(78177)),
        ),
        p = n.t(null, void 0, i(48848)),
        u = n.t(null, void 0, i(27331))
      class h extends l.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = new o.TranslatedString(t, this._source.translatedType())
          return {
            definitions: [
              (0, s.createTwoColorsPropertyDefinition)(
                {
                  color1: (0, s.getColorDefinitionProperty)(
                    this._propertyApplier,
                    e.color1,
                    e.transparency,
                    c.format({ title: i }),
                  ),
                  color2: (0, s.getColorDefinitionProperty)(
                    this._propertyApplier,
                    e.color2,
                    e.transparency,
                    d.format({ title: i }),
                  ),
                },
                { id: (0, a.removeSpaces)(`${t}Background2Color`), title: u },
              ),
              (0, r.createLineStyleDefinition)(
                this._propertyApplier,
                {
                  lineColor: e.trendline.childs().color,
                  lineWidth: e.linewidth,
                },
                i,
                'Line',
                { line: p },
              ),
            ],
          }
        }
      }
    },
    3664: (e, t, i) => {
      i.r(t), i.d(t, { RectangleDefinitionsViewModel: () => y })
      var n = i(44352),
        o = i(36298),
        r = i(46141),
        l = i(20061),
        s = i(50653)
      const a = new o.TranslatedString(
          'change {title} extending left',
          n.t(null, void 0, i(3708)),
        ),
        c = new o.TranslatedString(
          'change {title} extending right',
          n.t(null, void 0, i(52889)),
        ),
        d = n.t(null, void 0, i(37229)),
        p = n.t(null, void 0, i(45809)),
        u = n.t(null, void 0, i(14025)),
        h = [
          { value: 'bottom', title: n.t(null, void 0, i(65994)) },
          { value: 'middle', title: n.t(null, void 0, i(9114)) },
          { value: 'top', title: n.t(null, void 0, i(91757)) },
        ]
      class y extends l.GeneralFiguresDefinitionsViewModelBase {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = new o.TranslatedString(t, this._source.translatedType()),
            n = super._stylePropertyDefinitions(),
            l = (0, r.createCheckablePropertyDefinition)(
              {
                checked: (0, r.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.extendRight,
                  c.format({ title: i }),
                ),
              },
              { id: `${t}ExtendRight`, title: u },
            )
          n.definitions.push(l)
          const s = (0, r.createCheckablePropertyDefinition)(
            {
              checked: (0, r.convertToDefinitionProperty)(
                this._propertyApplier,
                e.extendLeft,
                a.format({ title: i }),
              ),
            },
            { id: `${t}ExtendLeft`, title: p },
          )
          return n.definitions.push(s), n
        }
        _textPropertyDefinitions() {
          const e = this._source.properties().childs()
          return {
            definitions: [
              (0, s.createTextStyleDefinition)(
                this._propertyApplier,
                {
                  textColor: e.textColor,
                  text: e.text,
                  bold: e.bold,
                  italic: e.italic,
                  fontSize: e.fontSize,
                  horzLabelsAlign: e.horzLabelsAlign,
                  vertLabelsAlign: e.vertLabelsAlign,
                  showText: e.showLabel,
                },
                new o.TranslatedString(
                  this._source.name(),
                  this._source.translatedType(),
                ),
                {
                  isEditable: !0,
                  isMultiLine: !0,
                  alignmentVerticalItems: h,
                  customTitles: { text: d },
                },
              ),
            ],
          }
        }
      }
    },
    30333: (e, t, i) => {
      i.r(t), i.d(t, { RiskRewardDefinitionsViewModel: () => I })
      var n = i(44352),
        o = i(36298),
        r = i(2908),
        l = i(50653),
        s = i(85766),
        a = i(46141),
        c = i(4895),
        d = i(97145),
        p = i(94474)
      const u = new o.TranslatedString(
          'change {title} stop color',
          n.t(null, void 0, i(54659)),
        ),
        h = new o.TranslatedString(
          'change {title} target color',
          n.t(null, void 0, i(97573)),
        ),
        y = new o.TranslatedString(
          'change {title} price labels visibility',
          n.t(null, void 0, i(88577)),
        ),
        f = new o.TranslatedString(
          'change {title} compact stats mode',
          n.t(null, void 0, i(35435)),
        ),
        v = new o.TranslatedString(
          'change {title} always show stats',
          n.t(null, void 0, i(37913)),
        ),
        g = new o.TranslatedString(
          'change {title} account size',
          n.t(null, void 0, i(31775)),
        ),
        T = new o.TranslatedString(
          'change {title} lot size',
          n.t(null, void 0, i(45025)),
        ),
        D = new o.TranslatedString(
          'change {title} risk',
          n.t(null, void 0, i(31553)),
        ),
        w = new o.TranslatedString(
          'change {title} risk display mode',
          n.t(null, void 0, i(40344)),
        ),
        _ = new o.TranslatedString(
          'change {title} entry price',
          n.t(null, void 0, i(59354)),
        ),
        P = new o.TranslatedString(
          'change {title} profit level',
          n.t(null, void 0, i(44539)),
        ),
        S = new o.TranslatedString(
          'change {title} profit price',
          n.t(null, void 0, i(41646)),
        ),
        m = new o.TranslatedString(
          'change {title} stop level',
          n.t(null, void 0, i(89182)),
        ),
        b = new o.TranslatedString(
          'change {title} stop price',
          n.t(null, void 0, i(82224)),
        ),
        C = n.t(null, void 0, i(83182)),
        L = n.t(null, void 0, i(50948)),
        x = n.t(null, void 0, i(45302)),
        k = n.t(null, void 0, i(37229)),
        A = n.t(null, void 0, i(47737)),
        V = n.t(null, void 0, i(30973)),
        $ = n.t(null, void 0, i(25684)),
        M = n.t(null, void 0, i(46001)),
        W = n.t(null, void 0, i(2635)),
        B = n.t(null, void 0, i(56119)),
        z = n.t(null, void 0, i(95264)),
        N = n.t(null, void 0, i(27531)),
        R = n.t(null, void 0, i(63833)),
        G = n.t(null, void 0, i(85160)),
        E = n.t(null, void 0, i(75675)),
        O = n.t(null, void 0, i(5066)),
        U = n.t(null, void 0, i(76655))
      function F(e) {
        return [
          { value: c.RiskDisplayMode.Percentage, title: O },
          { value: c.RiskDisplayMode.Money, title: e || U },
        ]
      }
      class I extends s.LineDataSourceDefinitionsViewModel {
        constructor(e, t) {
          super(e, t)
          const i = this._source.properties().childs(),
            n = i.riskDisplayMode.value()
          ;(this._riskMaxWV = new d.WatchedValue(this._getRiskMax(n))),
            (this._riskStepWV = new d.WatchedValue(this._getRiskStep(n))),
            (this._riskPrecisionWV = new d.WatchedValue(
              this._getRiskPrecision(n),
            )),
            (this._riskUnitWV = new d.WatchedValue(this._getRiskUnit())),
            (this._riskUnitOptionsWV = new d.WatchedValue(
              this._getRiskUnitOptions(),
            )),
            (this._lotSizeStepWV = new d.WatchedValue(this._getLotSizeStep())),
            this._createPropertyRages(),
            i.riskDisplayMode.subscribe(this, (e) =>
              this._onRiskDisplayChanged(e),
            ),
            i.accountSize.subscribe(this, () => this._onAccountSizeChanged()),
            i.lotSize.subscribe(this, () => this._onLotSizeChanged()),
            this._undoModel
              .model()
              .mainSeries()
              .dataEvents()
              .symbolResolved()
              .subscribe(this, this._onSymbolInfoChanged)
        }
        destroy() {
          super.destroy()
          const e = this._source.properties().childs()
          e.riskDisplayMode.unsubscribeAll(this),
            e.accountSize.unsubscribeAll(this),
            e.lotSize.unsubscribeAll(this),
            this._undoModel
              .model()
              .mainSeries()
              .dataEvents()
              .symbolResolved()
              .unsubscribeAll(this)
        }
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = (0, p.removeSpaces)(t),
            n = new o.TranslatedString(t, this._source.translatedType())
          return {
            definitions: [
              (0, r.createLineStyleDefinition)(
                this._propertyApplier,
                { lineColor: e.linecolor, lineWidth: e.linewidth },
                n,
                'Line',
                { line: C },
              ),
              (0, a.createColorPropertyDefinition)(
                {
                  color: (0, a.getColorDefinitionProperty)(
                    this._propertyApplier,
                    e.stopBackground,
                    e.stopBackgroundTransparency,
                    u.format({ title: n }),
                  ),
                },
                { id: `${i}StopColor`, title: L },
              ),
              (0, a.createColorPropertyDefinition)(
                {
                  color: (0, a.getColorDefinitionProperty)(
                    this._propertyApplier,
                    e.profitBackground,
                    e.profitBackgroundTransparency,
                    h.format({ title: n }),
                  ),
                },
                { id: `${i}ProfitColor`, title: x },
              ),
              (0, l.createTextStyleDefinition)(
                this._propertyApplier,
                { textColor: e.textcolor, fontSize: e.fontsize },
                n,
                { isEditable: !0, isMultiLine: !0, customTitles: { text: k } },
              ),
              (0, a.createCheckablePropertyDefinition)(
                {
                  checked: (0, a.convertToDefinitionProperty)(
                    this._propertyApplier,
                    e.showPriceLabels,
                    y.format({ title: n }),
                  ),
                },
                { id: `${i}ShowPriceLabels`, title: E },
              ),
              (0, a.createCheckablePropertyDefinition)(
                {
                  checked: (0, a.convertToDefinitionProperty)(
                    this._propertyApplier,
                    e.compact,
                    f.format({ title: n }),
                  ),
                },
                { id: `${i}CompactMode`, title: A },
              ),
              (0, a.createCheckablePropertyDefinition)(
                {
                  checked: (0, a.convertToDefinitionProperty)(
                    this._propertyApplier,
                    e.alwaysShowStats,
                    v.format({ title: n }),
                  ),
                },
                { id: `${i}AlwaysShowStats`, title: G },
              ),
            ],
          }
        }
        _inputsPropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = (0, p.removeSpaces)(t),
            n = new o.TranslatedString(t, this._source.translatedType()),
            r = this._getYCoordinateStepWV(),
            l = (0, a.createNumberPropertyDefinition)(
              {
                value: (0, a.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.accountSize,
                  g.format({ title: n }),
                ),
              },
              {
                id: `${i}AccountSize`,
                title: z,
                type: 1,
                min: new d.WatchedValue(1e-9),
                max: new d.WatchedValue(1e9),
                step: new d.WatchedValue(1),
                unit: this._riskUnitWV,
              },
            ),
            s = (0, a.createNumberPropertyDefinition)(
              {
                value: (0, a.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.lotSize,
                  T.format({ title: n }),
                ),
              },
              {
                id: `${i}LotSize`,
                title: N,
                type: 1,
                min: new d.WatchedValue(1e-9),
                max: new d.WatchedValue(1e8),
                step: this._lotSizeStepWV,
              },
            ),
            c = (0, a.createNumberPropertyDefinition)(
              {
                value: (0, a.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.risk,
                  D.format({ title: n }),
                  [(e) => parseFloat(e)],
                ),
                unitOptionsValue: (0, a.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.riskDisplayMode,
                  w.format({ title: n }),
                ),
              },
              {
                id: `${i}Risk`,
                title: R,
                type: 1,
                min: new d.WatchedValue(1e-9),
                max: this._riskMaxWV,
                precision: this._riskPrecisionWV,
                step: this._riskStepWV,
                unitOptions: this._riskUnitOptionsWV,
              },
            ),
            u = (0, a.createNumberPropertyDefinition)(
              {
                value: (0, a.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.entryPrice,
                  _.format({ title: n }),
                ),
              },
              { id: `${i}EntryPrice`, title: M, type: 1, step: r },
            ),
            h = (0, a.createPropertyDefinitionsGeneralGroup)(
              [l, s, c, u],
              `${i}AccountRisk`,
            ),
            y = (0, a.createNumberPropertyDefinition)(
              {
                value: (0, a.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.profitLevel,
                  P.format({ title: n }),
                ),
              },
              {
                id: `${i}ProfitLevelTicks`,
                title: V,
                type: 0,
                min: new d.WatchedValue(0),
                max: new d.WatchedValue(1e9),
                step: new d.WatchedValue(1),
              },
            ),
            f = (0, a.createNumberPropertyDefinition)(
              {
                value: (0, a.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.targetPrice,
                  S.format({ title: n }),
                  [(e) => e, (e) => this._source.prepareProfitPrice(e)],
                ),
              },
              { id: `${i}ProfitLevelPrice`, title: $, type: 1, step: r },
            ),
            v = (0, a.createPropertyDefinitionsGeneralGroup)(
              [y, f],
              `${i}ProfitLevel`,
              W,
            ),
            C = (0, a.createNumberPropertyDefinition)(
              {
                value: (0, a.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.stopLevel,
                  m.format({ title: n }),
                ),
              },
              {
                id: `${i}StopLevelTicks`,
                title: V,
                type: 0,
                min: new d.WatchedValue(0),
                max: new d.WatchedValue(1e9),
                step: new d.WatchedValue(1),
              },
            ),
            L = (0, a.createNumberPropertyDefinition)(
              {
                value: (0, a.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.stopPrice,
                  b.format({ title: n }),
                  [(e) => e, (e) => this._source.prepareStopPrice(e)],
                ),
              },
              { id: `${i}StopLevelPrice`, title: $, type: 1, step: r },
            )
          return {
            definitions: [
              h,
              v,
              (0, a.createPropertyDefinitionsGeneralGroup)(
                [C, L],
                `${i}StopLevel`,
                B,
              ),
            ],
          }
        }
        _onRiskDisplayChanged(e) {
          const t = e.value()
          this._riskMaxWV.setValue(this._getRiskMax(t)),
            this._riskStepWV.setValue(this._getRiskStep(t)),
            this._riskPrecisionWV.setValue(this._getRiskPrecision(t))
        }
        _onAccountSizeChanged() {
          this._riskMaxWV.setValue(
            this._getRiskMax(
              this._source.properties().childs().riskDisplayMode.value(),
            ),
          )
        }
        _onLotSizeChanged() {
          this._lotSizeStepWV.setValue(this._getLotSizeStep())
        }
        _onSymbolInfoChanged() {
          this._riskUnitWV.setValue(this._getRiskUnit()),
            this._riskUnitOptionsWV.setValue(this._getRiskUnitOptions())
        }
        _getRiskMax(e) {
          return e === c.RiskDisplayMode.Percentage
            ? 100
            : this._source.properties().childs().accountSize.value()
        }
        _getRiskStep(e) {
          return e === c.RiskDisplayMode.Percentage ? 0.01 : 1
        }
        _getRiskPrecision(e) {
          if (e === c.RiskDisplayMode.Percentage) return 2
        }
        _getLotSizeStep() {
          const e = this._source.properties().childs().lotSize.value()
          if (e % 1 == 0) return 1
          const t = e.toString(),
            i = t.split('.')
          if (2 === i.length) return Number(`1e-${i[1].length}`)
          {
            const e = /\d+e-(\d+)/.exec(t)
            if (null !== e) return Number(`1e-${e[1]}`)
          }
          return this._lotSizeStepWV.value()
        }
        _getRiskUnit() {
          const e = this._undoModel.model().mainSeries().symbolInfo()
          return (null !== e && e.currency_code) || ''
        }
        _getRiskUnitOptions() {
          const e = this._undoModel.model().mainSeries().symbolInfo()
          return null !== e ? F(e.currency_code) : F()
        }
      }
    },
    18613: (e, t, i) => {
      i.r(t), i.d(t, { SignpostDefinitionsViewModel: () => g })
      var n = i(44352),
        o = i(36298),
        r = i(94474),
        l = i(97145),
        s = i(46141),
        a = i(50653),
        c = i(41339),
        d = i(85766)
      const p = new o.TranslatedString(
          'change vertical position Y coordinate',
          n.t(null, void 0, i(11049)),
        ),
        u = new o.TranslatedString(
          'change {title} emoji visibility',
          n.t(null, void 0, i(65899)),
        ),
        h = new o.TranslatedString(
          'change {title} image background color',
          n.t(null, void 0, i(48983)),
        ),
        y = new o.TranslatedString(
          'change {title} emoji',
          n.t(null, void 0, i(65056)),
        ),
        f = n.t(null, { context: 'linetool point' }, i(92195)),
        v = n.t(null, void 0, i(46211))
      class g extends d.LineDataSourceDefinitionsViewModel {
        _textPropertyDefinitions() {
          const e = this._source.properties().childs()
          return {
            definitions: [
              (0, a.createTextStyleDefinition)(
                this._propertyApplier,
                {
                  text: e.text,
                  fontSize: e.fontSize,
                  bold: e.bold,
                  italic: e.italic,
                },
                new o.TranslatedString(
                  this._source.name(),
                  this._source.translatedType(),
                ),
                { isEditable: !0, isMultiLine: !0 },
              ),
            ],
          }
        }
        _coordinatesPropertyDefinitions() {
          const e = this._source.pointsProperty().childs().points[0].childs(),
            t = this._source.name(),
            i = (0, c.getCoordinateXMetaInfo)(this._propertyApplier, e),
            n = {
              property: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                e.price,
                p,
              ),
              info: {
                typeY: 1,
                stepY: new l.WatchedValue(1),
                minY: new l.WatchedValue(-100),
                maxY: new l.WatchedValue(100),
              },
            }
          return {
            definitions: [
              (0, s.createCoordinatesPropertyDefinition)(
                { x: i.property, y: n.property },
                {
                  id: (0, r.removeSpaces)(`${t}Coordinates${f}`),
                  title: f,
                  ...i.info,
                  ...n.info,
                },
              ),
            ],
          }
        }
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = new o.TranslatedString(t, this._source.translatedType())
          return {
            definitions: [
              (0, s.createEmojiPropertyDefinition)(
                {
                  checked: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    e.showImage,
                    u.format({ title: i }),
                  ),
                  backgroundColor: (0, s.getColorDefinitionProperty)(
                    this._propertyApplier,
                    e.plateColor,
                    null,
                    h.format({ title: i }),
                  ),
                  emoji: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    e.emoji,
                    y.format({ title: i }),
                  ),
                },
                { id: (0, r.removeSpaces)(`${t}Emoji${v}`), title: v },
              ),
            ],
          }
        }
      }
    },
    94625: (e, t, i) => {
      i.r(t), i.d(t, { TextDefinitionsViewModel: () => l })
      var n = i(50653),
        o = i(85766),
        r = i(36298)
      class l extends o.LineDataSourceDefinitionsViewModel {
        _textPropertyDefinitions() {
          const e = this._source.properties().childs()
          return {
            definitions: [
              (0, n.createTextStyleDefinition)(
                this._propertyApplier,
                {
                  textColor: e.color,
                  fontSize: e.fontsize,
                  bold: e.bold,
                  italic: e.italic,
                  text: e.text,
                  backgroundVisible: e.fillBackground,
                  backgroundColor: e.backgroundColor,
                  backgroundTransparency: e.backgroundTransparency,
                  borderVisible: e.drawBorder,
                  borderColor: e.borderColor,
                  wrap: e.wordWrap,
                },
                new r.TranslatedString(
                  this._source.name(),
                  this._source.translatedType(),
                ),
                { isEditable: !0, isMultiLine: !0 },
              ),
            ],
          }
        }
      }
    },
    81888: (e, t, i) => {
      i.r(t), i.d(t, { TimeCyclesPatternDefinitionsViewModel: () => h })
      var n = i(44352),
        o = i(36298),
        r = i(2908),
        l = i(85766),
        s = i(46141),
        a = i(94474)
      const c = new o.TranslatedString(
          'change {title} background visibility',
          n.t(null, void 0, i(64548)),
        ),
        d = new o.TranslatedString(
          'change {title} background color',
          n.t(null, void 0, i(75312)),
        ),
        p = n.t(null, void 0, i(1277)),
        u = n.t(null, void 0, i(27331))
      class h extends l.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = new o.TranslatedString(t, this._source.translatedType())
          return {
            definitions: [
              (0, r.createLineStyleDefinition)(
                this._propertyApplier,
                {
                  lineColor: e.linecolor,
                  lineWidth: e.linewidth,
                  lineStyle: e.linestyle,
                },
                i,
                'Line',
                { line: p },
              ),
              (0, s.createColorPropertyDefinition)(
                {
                  checked: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    e.fillBackground,
                    c.format({ title: i }),
                  ),
                  color: (0, s.getColorDefinitionProperty)(
                    this._propertyApplier,
                    e.backgroundColor,
                    e.transparency,
                    d.format({ title: i }),
                  ),
                },
                { id: (0, a.removeSpaces)(`${t}BackgroundColor`), title: u },
              ),
            ],
          }
        }
      }
    },
    34935: (e, t, i) => {
      i.r(t), i.d(t, { TrendAngleDefinitionsViewModel: () => y })
      var n = i(44352),
        o = i(36298),
        r = i(46141),
        l = i(85766),
        s = i(97145),
        a = i(41339),
        c = i(75611)
      const d = new o.TranslatedString(
          'change angle',
          n.t(null, void 0, i(1670)),
        ),
        p = n.t(null, void 0, i(36150)),
        u = n.t(null, void 0, i(37229)),
        h = n.t(null, { context: 'linetool point' }, i(12706))
      class y extends l.LineDataSourceDefinitionsViewModel {
        _coordinatesPropertyDefinitions() {
          const e = this._source.points(),
            t = [],
            i = this._source.pointsProperty().childs().points[0].childs(),
            n = this._getYCoordinateStepWV()
          t.push(
            (0, a.getCoordinatesPropertiesDefinitions)(
              this._propertyApplier,
              i,
              e[0],
              n,
              h,
              this._source.name(),
            ),
          )
          const o = (0, r.createNumberPropertyDefinition)(
            {
              value: (0, r.convertToDefinitionProperty)(
                this._propertyApplier,
                this._source.properties().childs().angle,
                d,
              ),
            },
            {
              id: 'TrendLineAngleCoordinate',
              title: p,
              min: new s.WatchedValue(-360),
              max: new s.WatchedValue(360),
              step: new s.WatchedValue(1),
            },
          )
          return t.push(o), { definitions: t }
        }
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs()
          return (0, c.getTrendLineToolsStylePropertiesDefinitions)(
            this._propertyApplier,
            e,
            new o.TranslatedString(
              this._source.name(),
              this._source.translatedType(),
            ),
            { text: u },
          )
        }
      }
    },
    60007: (e, t, i) => {
      i.r(t), i.d(t, { TrendBasedFibTimeDefinitionsViewModel: () => L })
      var n = i(50151),
        o = i(44352),
        r = i(36298),
        l = i(2908),
        s = i(46141),
        a = i(85766),
        c = i(18505),
        d = i(97145),
        p = i(94474),
        u = i(69152)
      const h = new r.TranslatedString(
          'change {title} level {index} line visibility',
          o.t(null, void 0, i(45463)),
        ),
        y = new r.TranslatedString(
          'change {title} level {index} line color',
          o.t(null, void 0, i(85551)),
        ),
        f = new r.TranslatedString(
          'change {title} level {index} line width',
          o.t(null, void 0, i(90098)),
        ),
        v = new r.TranslatedString(
          'change {title} level {index} line style',
          o.t(null, void 0, i(47840)),
        ),
        g = new r.TranslatedString(
          'change {title} level {index} line coeff',
          o.t(null, void 0, i(32891)),
        ),
        T = new r.TranslatedString(
          'change {title} all lines color',
          o.t(null, void 0, i(15521)),
        ),
        D = new r.TranslatedString(
          'change {title} background visibility',
          o.t(null, void 0, i(64548)),
        ),
        w = new r.TranslatedString(
          'change {title} background transparency',
          o.t(null, void 0, i(36438)),
        ),
        _ = new r.TranslatedString(
          'change {title} labels visibility',
          o.t(null, void 0, i(24338)),
        ),
        P = new r.TranslatedString(
          'change {title} labels alignment',
          o.t(null, void 0, i(81170)),
        ),
        S = o.t(null, void 0, i(4372)),
        m = o.t(null, void 0, i(12374)),
        b = o.t(null, void 0, i(27331)),
        C = o.t(null, void 0, i(94420))
      class L extends a.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = [],
            t = this._source.properties(),
            i = t.childs(),
            o = this._source.name(),
            a = (0, p.removeSpaces)(o),
            L = new r.TranslatedString(o, this._source.translatedType()),
            x = i.trendline.childs(),
            k = (0, l.createLineStyleDefinition)(
              this._propertyApplier,
              {
                showLine: x.visible,
                lineColor: x.color,
                lineStyle: x.linestyle,
                lineWidth: x.linewidth,
              },
              L,
              'TrendLine',
              { line: S },
            )
          e.push(k)
          const A = this._source.levelsCount()
          for (let i = 1; i <= A; i++) {
            const o = (0, n.ensureDefined)(t.child(`level${i}`)).childs(),
              r = (0, s.createLeveledLinePropertyDefinition)(
                {
                  checked: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    o.visible,
                    h.format({ title: L, index: i }),
                  ),
                  color: (0, s.getColorDefinitionProperty)(
                    this._propertyApplier,
                    o.color,
                    null,
                    y.format({ title: L, index: i }),
                  ),
                  width: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    o.linewidth,
                    f.format({ title: L, index: i }),
                  ),
                  style: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    o.linestyle,
                    v.format({ title: L, index: i }),
                  ),
                  level: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    o.coeff,
                    g.format({ title: L, index: i }),
                  ),
                },
                { id: `${a}LineLevel${i}` },
              )
            e.push(r)
          }
          const V = (0, s.createColorPropertyDefinition)(
            {
              color: (0, s.getColorDefinitionProperty)(
                this._propertyApplier,
                new u.CollectibleColorPropertyUndoWrapper(
                  (0, n.ensureNotNull)(this._source.lineColorsProperty()),
                  this._propertyApplier,
                  null,
                ),
                null,
                T.format({ title: L }),
                !0,
              ),
            },
            { id: `${a}AllLineColor`, title: m },
          )
          e.push(V)
          const $ = (0, s.createTransparencyPropertyDefinition)(
            {
              checked: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                i.fillBackground,
                D.format({ title: L }),
              ),
              transparency: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                i.transparency,
                w.format({ title: L }),
              ),
            },
            { id: `${a}Background`, title: b },
          )
          e.push($)
          const M = (0, s.createTwoOptionsPropertyDefinition)(
            {
              checked: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                i.showCoeffs,
                _.format({ title: L }),
              ),
              option1: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                i.horzLabelsAlign,
                P.format({ title: L }),
              ),
              option2: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                i.vertLabelsAlign,
                P.format({ title: L }),
              ),
            },
            {
              id: `${a}Labels`,
              title: C,
              optionsItems1: new d.WatchedValue(
                c.availableAlignmentHorizontalItems,
              ),
              optionsItems2: new d.WatchedValue(
                c.availableAlignmentVerticalItems,
              ),
            },
          )
          return e.push(M), { definitions: e }
        }
      }
    },
    84926: (e, t, i) => {
      i.r(t), i.d(t, { TrendLineDefinitionsViewModel: () => c })
      var n = i(44352),
        o = i(36298),
        r = i(85766),
        l = i(75611),
        s = i(50653)
      const a = n.t(null, void 0, i(37229))
      class c extends r.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs()
          return (0, l.getTrendLineToolsStylePropertiesDefinitions)(
            this._propertyApplier,
            e,
            new o.TranslatedString(
              this._source.name(),
              this._source.translatedType(),
            ),
          )
        }
        _textPropertyDefinitions() {
          const e = this._source.properties().childs()
          return {
            definitions: [
              (0, s.createTextStyleDefinition)(
                this._propertyApplier,
                {
                  ...e,
                  showText: e.showLabel,
                  textColor: e.textcolor,
                  fontSize: e.fontsize,
                },
                new o.TranslatedString(
                  this._source.name(),
                  this._source.translatedType(),
                ),
                { isEditable: !0, isMultiLine: !0, customTitles: { text: a } },
              ),
            ],
          }
        }
      }
    },
    71472: (e, t, i) => {
      i.r(t), i.d(t, { VerticalLineDefinitionsViewModel: () => h })
      var n = i(44352),
        o = i(36298),
        r = i(46141),
        l = i(41339),
        s = i(86778),
        a = i(94474),
        c = i(85766),
        d = i(50653)
      const p = n.t(null, void 0, i(37229)),
        u = n.t(null, { context: 'linetool point' }, i(91282))
      class h extends c.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs()
          return (0, s.getLinesStylesPropertiesDefinitions)(
            this._propertyApplier,
            e,
            new o.TranslatedString(
              this._source.name(),
              this._source.translatedType(),
            ),
          )
        }
        _coordinatesPropertyDefinitions() {
          const e = this._source.pointsProperty().childs().points[0].childs(),
            t = (0, l.getCoordinateXMetaInfo)(this._propertyApplier, e)
          return {
            definitions: [
              (0, r.createCoordinatesPropertyDefinition)(
                { x: t.property },
                {
                  id: (0, a.removeSpaces)(`${this._source.name()}Point1`),
                  title: u,
                  ...t.info,
                },
              ),
            ],
          }
        }
        _textPropertyDefinitions() {
          const e = this._source.properties().childs()
          return {
            definitions: [
              (0, d.createTextStyleDefinition)(
                this._propertyApplier,
                {
                  ...e,
                  showText: e.showLabel,
                  textColor: e.textcolor,
                  fontSize: e.fontsize,
                  textOrientation: e.textOrientation,
                },
                new o.TranslatedString(
                  this._source.name(),
                  this._source.translatedType(),
                ),
                { isEditable: !0, isMultiLine: !0, customTitles: { text: p } },
              ),
            ],
          }
        }
      }
    },
    59973: (e, t, i) => {
      i.r(t), i.d(t, { AnchoredVWAPDefinitionsViewModel: () => U })
      var n = i(44352),
        o = i(36298),
        r = (i(42053), i(46141)),
        l = i(56059),
        s = i(94474),
        a = i(99970)
      const c = new o.TranslatedString(
          'change {title} VWAP line color',
          n.t(null, void 0, i(98057)),
        ),
        d = new o.TranslatedString(
          'change {title} VWAP line width',
          n.t(null, void 0, i(55218)),
        ),
        p = new o.TranslatedString(
          'change {title} lower band #1 line visibility',
          n.t(null, void 0, i(78425)),
        ),
        u = new o.TranslatedString(
          'change {title} lower band #1 line color',
          n.t(null, void 0, i(13901)),
        ),
        h = new o.TranslatedString(
          'change {title} lower band #1 line width',
          n.t(null, void 0, i(99491)),
        ),
        y = new o.TranslatedString(
          'change {title} upper band #1 line visibility',
          n.t(null, void 0, i(58722)),
        ),
        f = new o.TranslatedString(
          'change {title} upper band #1 line color',
          n.t(null, void 0, i(10417)),
        ),
        v = new o.TranslatedString(
          'change {title} upper band #1 line width',
          n.t(null, void 0, i(13633)),
        ),
        g = new o.TranslatedString(
          'change {title} lower band #2 line visibility',
          n.t(null, void 0, i(76157)),
        ),
        T = new o.TranslatedString(
          'change {title} lower band #2 line color',
          n.t(null, void 0, i(55469)),
        ),
        D = new o.TranslatedString(
          'change {title} lower band #2 line width',
          n.t(null, void 0, i(8081)),
        ),
        w = new o.TranslatedString(
          'change {title} upper band #2 line visibility',
          n.t(null, void 0, i(97847)),
        ),
        _ = new o.TranslatedString(
          'change {title} upper band #2 line color',
          n.t(null, void 0, i(64709)),
        ),
        P = new o.TranslatedString(
          'change {title} upper band #2 line width',
          n.t(null, void 0, i(62921)),
        ),
        S = new o.TranslatedString(
          'change {title} lower band #3 line visibility',
          n.t(null, void 0, i(84928)),
        ),
        m = new o.TranslatedString(
          'change {title} lower band #3 line color',
          n.t(null, void 0, i(95016)),
        ),
        b = new o.TranslatedString(
          'change {title} lower band #3 line width',
          n.t(null, void 0, i(44693)),
        ),
        C = new o.TranslatedString(
          'change {title} upper band #3 line visibility',
          n.t(null, void 0, i(19835)),
        ),
        L = new o.TranslatedString(
          'change {title} upper band #3 line color',
          n.t(null, void 0, i(94153)),
        ),
        x = new o.TranslatedString(
          'change {title} upper band #3 line width',
          n.t(null, void 0, i(68310)),
        ),
        k = new o.TranslatedString(
          'change {title} background visibility',
          n.t(null, void 0, i(64548)),
        ),
        A = new o.TranslatedString(
          'change {title} background color',
          n.t(null, void 0, i(75312)),
        ),
        V = new o.TranslatedString(
          'change {title} price visibility',
          n.t(null, void 0, i(94028)),
        ),
        $ = n.t(null, void 0, i(53473)),
        M = n.t(null, void 0, i(99180)),
        W = n.t(null, void 0, i(26775)),
        B = n.t(null, void 0, i(53861)),
        z = n.t(null, void 0, i(21774)),
        N = n.t(null, void 0, i(44775)),
        R = n.t(null, void 0, i(21076)),
        G = n.t(null, void 0, i(66282)),
        E = n.t(null, void 0, i(23675))
      function O(e, t, i, n, o, l, s, c, d) {
        return (0, r.createLinePropertyDefinition)(
          {
            checked: (0, r.convertToDefinitionProperty)(
              e,
              new a.StudyPlotVisibleProperty(t.display),
              i.format({ title: d }),
            ),
            color: (0, r.getColorDefinitionProperty)(
              e,
              t.color,
              t.transparency,
              n.format({ title: d }),
            ),
            width: (0, r.convertToDefinitionProperty)(
              e,
              t.linewidth,
              o.format({ title: d }),
            ),
          },
          { id: `${c}${s}`, title: l },
        )
      }
      class U extends l.StudyLineDataSourceDefinitionsViewModel {
        constructor(e, t) {
          super(e, t)
        }
        _stylePropertyDefinitions() {
          var e, t, i, n, l, a
          const U = this._source.properties().childs(),
            F = this._source.name(),
            I = (0, s.removeSpaces)(F),
            H = new o.TranslatedString(F, this._source.translatedType()),
            j = U.styles.childs().VWAP.childs(),
            Y = [
              (0, r.createLinePropertyDefinition)(
                {
                  color: (0, r.getColorDefinitionProperty)(
                    this._propertyApplier,
                    j.color,
                    j.transparency,
                    c.format({ title: H }),
                  ),
                  width: (0, r.convertToDefinitionProperty)(
                    this._propertyApplier,
                    j.linewidth,
                    d.format({ title: H }),
                  ),
                },
                { id: `${I}VWAPLine`, title: $ },
              ),
            ],
            X = this._source.metaInfo()
          if (
            (null === (e = X.styles) || void 0 === e ? void 0 : e.UpperBand) &&
            (null === (t = X.styles) || void 0 === t ? void 0 : t.LowerBand)
          ) {
            const e = U.styles.childs().LowerBand.childs(),
              t = O(
                this._propertyApplier,
                e,
                p,
                u,
                h,
                M,
                'LowerBandLine',
                I,
                H,
              ),
              i = U.styles.childs().UpperBand.childs(),
              n = O(this._propertyApplier, i, y, f, v, W, 'UpperBandLine', I, H)
            Y.push(t, n)
          }
          if (null == X ? void 0 : X.area) {
            const e = U.areaBackground.childs(),
              t = (0, r.createLinePropertyDefinition)(
                {
                  checked: (0, r.convertToDefinitionProperty)(
                    this._propertyApplier,
                    e.fillBackground,
                    k.format({ title: H }),
                  ),
                  color: (0, r.getColorDefinitionProperty)(
                    this._propertyApplier,
                    e.backgroundColor,
                    e.transparency,
                    A.format({ title: H }),
                  ),
                },
                { id: `${I}Background`, title: G },
              )
            Y.push(t)
          }
          if (
            (null === (i = X.styles) || void 0 === i
              ? void 0
              : i.UpperBand_2) &&
            (null === (n = X.styles) || void 0 === n
              ? void 0
              : n.LowerBand_2) &&
            (null === (l = X.styles) || void 0 === l
              ? void 0
              : l.UpperBand_3) &&
            (null === (a = X.styles) || void 0 === a ? void 0 : a.LowerBand_3)
          ) {
            const e = U.styles.childs().LowerBand_2.childs(),
              t = O(
                this._propertyApplier,
                e,
                g,
                T,
                D,
                B,
                'LowerBand2Line',
                I,
                H,
              ),
              i = U.styles.childs().UpperBand_2.childs(),
              n = O(
                this._propertyApplier,
                i,
                w,
                _,
                P,
                z,
                'UpperBand2Line',
                I,
                H,
              ),
              o = U.styles.childs().LowerBand_3.childs(),
              r = O(
                this._propertyApplier,
                o,
                S,
                m,
                b,
                N,
                'LowerBand3Line',
                I,
                H,
              ),
              l = U.styles.childs().UpperBand_3.childs(),
              s = O(
                this._propertyApplier,
                l,
                C,
                L,
                x,
                R,
                'UpperBand3Line',
                I,
                H,
              )
            Y.push(t, n, r, s)
          }
          const q = (0, r.createCheckablePropertyDefinition)(
            {
              checked: (0, r.convertToDefinitionProperty)(
                this._propertyApplier,
                U.axisLabelVisible,
                V.format({ title: H }),
              ),
            },
            { id: `${I}ShowPrice`, title: E },
          )
          return Y.push(q), { definitions: Y }
        }
        _coordinatesPropertyDefinitions() {
          return null
        }
      }
    },
    69152: (e, t, i) => {
      i.d(t, {
        CollectibleColorPropertyDirectWrapper: () => a,
        CollectibleColorPropertyUndoWrapper: () => s,
      })
      var n = i(50151),
        o = i(59452),
        r = i.n(o)
      class l extends r() {
        constructor(e) {
          super(),
            (this._listenersMappers = []),
            (this._isProcess = !1),
            (this._baseProperty = e)
        }
        destroy() {
          this._baseProperty.destroy(), super.destroy()
        }
        value() {
          const e = this._baseProperty.value()
          return 'mixed' === e ? '' : e
        }
        visible() {
          return this._baseProperty.visible()
        }
        setValue(e) {
          ;(this._isProcess = !0),
            this._baseProperty.setValue('' === e ? 'mixed' : e, void 0, {
              applyValue: this._applyValue.bind(this),
            }),
            (this._isProcess = !1),
            this._listenersMappers.forEach((e) => {
              e.method.call(e.obj, this)
            })
        }
        subscribe(e, t) {
          const i = (i) => {
              this._isProcess || t.call(e, this)
            },
            n = { obj: e, method: t, callback: i }
          this._listenersMappers.push(n), this._baseProperty.subscribe(e, i)
        }
        unsubscribe(e, t) {
          var i
          const o = (0, n.ensureDefined)(
            null ===
              (i = this._listenersMappers.find(
                (i) => i.obj === e && i.method === t,
              )) || void 0 === i
              ? void 0
              : i.callback,
          )
          this._baseProperty.unsubscribe(e, o)
        }
        unsubscribeAll(e) {
          this._baseProperty.unsubscribeAll(e)
        }
      }
      class s extends l {
        constructor(e, t, i) {
          super(e), (this._propertyApplier = t), (this._undoText = i)
        }
        _applyValue(e, t) {
          this._propertyApplier.setProperty(e, t, this._undoText)
        }
      }
      class a extends l {
        _applyValue(e, t) {
          e.setValue(t)
        }
      }
    },
  },
])
