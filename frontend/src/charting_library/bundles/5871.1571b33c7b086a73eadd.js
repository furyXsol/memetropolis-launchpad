'use strict'
;(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [5871],
  {
    73955: (e, t, r) => {
      r.r(t), r.d(t, { createPropertyPage: () => o })
      var i = r(97145)
      function o(e, t, r, o = null) {
        var n
        const s = {
          id: t,
          title: r,
          definitions: new i.WatchedValue(e.definitions),
          visible:
            null !== (n = e.visible) && void 0 !== n
              ? n
              : new i.WatchedValue(!0).readonly(),
        }
        return null !== o && (s.icon = o), s
      }
    },
    20345: (e, t, r) => {
      r.d(t, {
        convertToInt: () => n,
        floor: () => o,
        limitedPrecision: () => s,
      })
      var i = r(10786)
      function o(e) {
        return Math.floor(e)
      }
      function n(e) {
        return parseInt(String(e))
      }
      function s(e) {
        const t = new i.LimitedPrecisionNumericFormatter(e)
        return (e) => {
          if (null === e) return e
          const r = t.parse(t.format(e))
          return r.res ? r.value : null
        }
      }
    },
    3347: (e, t, r) => {
      r.d(t, {
        convertToDefinitionProperty: () => n,
        makeProxyDefinitionProperty: () => o,
      })
      var i = r(51768)
      function o(e, t, r) {
        const i = new Map(),
          o = void 0 !== t ? t[0] : (e) => e,
          n = void 0 !== t ? (void 0 !== t[1] ? t[1] : t[0]) : (e) => e,
          s = {
            value: () => o(e.value()),
            setValue: (t) => {
              e.setValue(n(t))
            },
            subscribe: (t, r) => {
              const o = (e) => {
                r(s)
              }
              i.set(r, o), e.subscribe(t, o)
            },
            unsubscribe: (t, r) => {
              const o = i.get(r)
              o && (e.unsubscribe(t, o), i.delete(r))
            },
            unsubscribeAll: (t) => {
              e.unsubscribeAll(t), i.clear()
            },
            destroy: () => {
              e.release(), null == r || r()
            },
          }
        return s
      }
      function n(e, t, r, n, s, l, p) {
        const a = o(t.weakReference(), n, l),
          u = void 0 !== n ? (void 0 !== n[1] ? n[1] : n[0]) : (e) => e,
          c = null != s ? s : (i) => e.setProperty(t, u(i), r)
        return (
          (a.setValue = (e) => {
            var t
            p &&
              (0, i.trackEvent)(
                p.category,
                p.event,
                null === (t = p.label) || void 0 === t ? void 0 : t.call(p, e),
              ),
              c(e)
          }),
          a
        )
      }
    },
    43715: (e, t, r) => {
      r.d(t, { createLinePropertyDefinition: () => p })
      var i = r(73436),
        o = r(79849)
      const n = [o.LINESTYLE_SOLID, o.LINESTYLE_DOTTED, o.LINESTYLE_DASHED],
        s = [1, 2, 3, 4],
        l = [i.LineEnd.Normal, i.LineEnd.Arrow]
      function p(e, t) {
        const r = { propType: 'line', properties: e, ...t }
        return (
          void 0 !== r.properties.style && (r.styleValues = n),
          void 0 !== r.properties.width && (r.widthValues = s),
          (void 0 === r.properties.leftEnd &&
            void 0 === r.properties.rightEnd) ||
            void 0 !== r.endsValues ||
            (r.endsValues = l),
          void 0 !== r.properties.value &&
            void 0 === r.valueType &&
            (r.valueType = 1),
          r
        )
      }
    },
    46141: (e, t, r) => {
      function i(e, t) {
        return { propType: 'checkable', properties: e, ...t }
      }
      function o(e, t, r) {
        return {
          propType: 'checkableSet',
          properties: e,
          childrenDefinitions: r,
          ...t,
        }
      }
      function n(e, t) {
        return { propType: 'color', properties: e, noAlpha: !1, ...t }
      }
      r.d(t, {
        convertFromReadonlyWVToDefinitionProperty: () => H,
        convertFromWVToDefinitionProperty: () => N,
        convertToDefinitionProperty: () => z.convertToDefinitionProperty,
        createCheckablePropertyDefinition: () => i,
        createCheckableSetPropertyDefinition: () => o,
        createColorPropertyDefinition: () => n,
        createCoordinatesPropertyDefinition: () => k,
        createEmojiPropertyDefinition: () => A,
        createLeveledLinePropertyDefinition: () => u,
        createLinePropertyDefinition: () => s.createLinePropertyDefinition,
        createNumberPropertyDefinition: () => c,
        createOptionalTwoColorsPropertyDefinition: () => S,
        createOptionsPropertyDefinition: () => d,
        createPropertyDefinitionsGeneralGroup: () => O,
        createPropertyDefinitionsLeveledLinesGroup: () => W,
        createRangePropertyDefinition: () => V,
        createSelectionCoordinatesPropertyDefinition: () => E,
        createSessionPropertyDefinition: () => C,
        createStudyInputsPropertyDefinition: () => R,
        createSymbolPropertyDefinition: () => I,
        createTextPropertyDefinition: () => h,
        createTransparencyPropertyDefinition: () => L,
        createTwoColorsPropertyDefinition: () => w,
        createTwoOptionsPropertyDefinition: () => f,
        destroyDefinitions: () => Q,
        getColorDefinitionProperty: () => B,
        getLockPriceScaleDefinitionProperty: () => Y,
        getPriceScaleSelectionStrategyDefinitionProperty: () => _,
        getScaleRatioDefinitionProperty: () => G,
        getSymbolDefinitionProperty: () => J,
        isPropertyDefinitionsGroup: () => K,
        makeProxyDefinitionProperty: () => z.makeProxyDefinitionProperty,
      })
      var s = r(43715),
        l = r(79849)
      const p = [l.LINESTYLE_SOLID, l.LINESTYLE_DOTTED, l.LINESTYLE_DASHED],
        a = [1, 2, 3, 4]
      function u(e, t) {
        const r = { propType: 'leveledLine', properties: e, ...t }
        return (
          void 0 !== r.properties.style && (r.styleValues = p),
          void 0 !== r.properties.width && (r.widthValues = a),
          r
        )
      }
      function c(e, t) {
        return { propType: 'number', properties: e, type: 1, ...t }
      }
      function d(e, t) {
        return { propType: 'options', properties: e, ...t }
      }
      function f(e, t) {
        return { propType: 'twoOptions', properties: e, ...t }
      }
      var v = r(44352)
      const y = [
          { id: 'bottom', value: 'bottom', title: v.t(null, void 0, r(65994)) },
          { id: 'middle', value: 'middle', title: v.t(null, void 0, r(76476)) },
          { id: 'top', value: 'top', title: v.t(null, void 0, r(91757)) },
        ],
        b = [
          { id: 'left', value: 'left', title: v.t(null, void 0, r(19286)) },
          { id: 'center', value: 'center', title: v.t(null, void 0, r(72171)) },
          { id: 'right', value: 'right', title: v.t(null, void 0, r(21141)) },
        ],
        P = [
          {
            id: 'horizontal',
            value: 'horizontal',
            title: v.t(null, void 0, r(77405)),
          },
          {
            id: 'vertical',
            value: 'vertical',
            title: v.t(null, void 0, r(44085)),
          },
        ],
        D = [10, 11, 12, 14, 16, 20, 24, 28, 32, 40].map((e) => ({
          title: String(e),
          value: e,
        })),
        T = [1, 2, 3, 4],
        m = v.t(null, void 0, r(92960)),
        g = v.t(null, void 0, r(90581))
      function h(e, t) {
        const r = {
          propType: 'text',
          properties: e,
          ...t,
          isEditable: t.isEditable || !1,
        }
        return (
          void 0 !== r.properties.size &&
            void 0 === r.sizeItems &&
            (r.sizeItems = D),
          void 0 !== r.properties.alignmentVertical &&
            void 0 === r.alignmentVerticalItems &&
            (r.alignmentVerticalItems = y),
          void 0 !== r.properties.alignmentHorizontal &&
            void 0 === r.alignmentHorizontalItems &&
            (r.alignmentHorizontalItems = b),
          (r.alignmentVerticalItems || r.alignmentHorizontalItems) &&
            void 0 === r.alignmentTitle &&
            (r.alignmentTitle = m),
          void 0 !== r.properties.orientation &&
            (void 0 === r.orientationItems && (r.orientationItems = P),
            void 0 === r.orientationTitle && (r.orientationTitle = g)),
          void 0 !== r.properties.borderWidth &&
            void 0 === r.borderWidthItems &&
            (r.borderWidthItems = T),
          r
        )
      }
      function w(e, t) {
        return {
          propType: 'twoColors',
          properties: e,
          noAlpha1: !1,
          noAlpha2: !1,
          ...t,
        }
      }
      function S(e, t) {
        return {
          propType: 'optionalTwoColors',
          properties: e,
          noAlpha1: !1,
          noAlpha2: !1,
          ...t,
        }
      }
      function k(e, t) {
        return { propType: 'coordinates', properties: e, ...t }
      }
      function E(e, t) {
        return { propType: 'selectionCoordinates', properties: e, ...t }
      }
      function V(e, t) {
        return { propType: 'range', properties: e, ...t }
      }
      function L(e, t) {
        return { propType: 'transparency', properties: e, ...t }
      }
      function I(e, t) {
        return { propType: 'symbol', properties: e, ...t }
      }
      function C(e, t) {
        return { propType: 'session', properties: e, ...t }
      }
      function A(e, t) {
        return { propType: 'emoji', properties: e, ...t }
      }
      function R(e, t) {
        return { propType: 'studyInputs', properties: e, ...t }
      }
      var x = r(97145)
      function O(e, t, r, i) {
        return {
          id: t,
          title: r,
          visible: i,
          groupType: 'general',
          definitions: new x.WatchedValue(e),
        }
      }
      function W(e, t, r) {
        return {
          id: t,
          title: r,
          groupType: 'leveledLines',
          definitions: new x.WatchedValue(e),
        }
      }
      var z = r(3347)
      function M(e, t, r) {
        const i = new Map(),
          o = void 0 !== t ? t[0] : (e) => e,
          n = void 0 !== t ? (void 0 !== t[1] ? t[1] : t[0]) : (e) => e,
          s = {
            value: () => o(e.value()),
            setValue: (t) => {
              var r
              null === (r = e.setValue) || void 0 === r || r.call(e, n(t))
            },
            subscribe: (t, r) => {
              const o = () => {
                r(s)
              }
              let n = i.get(t)
              void 0 === n
                ? ((n = new Map()), n.set(r, o), i.set(t, n))
                : n.set(r, o),
                e.subscribe(o)
            },
            unsubscribe: (t, r) => {
              const o = i.get(t)
              if (void 0 !== o) {
                const t = o.get(r)
                void 0 !== t && (e.unsubscribe(t), o.delete(r))
              }
            },
            unsubscribeAll: (t) => {
              const r = i.get(t)
              void 0 !== r &&
                (r.forEach((t, r) => {
                  e.unsubscribe(t)
                }),
                r.clear())
            },
          }
        return r && (s.destroy = () => r()), s
      }
      function N(e, t, r, i) {
        const o = M(t, i),
          n = void 0 !== i ? (void 0 !== i[1] ? i[1] : i[0]) : (e) => e
        return (o.setValue = (i) => e.setWatchedValue(t, n(i), r)), o
      }
      function H(e, t) {
        return (function (e, t, r, i) {
          const o = new Map()
          return M(
            {
              subscribe: (r, i) => {
                const n = (e) => r(t(e))
                o.set(r, n), e.subscribe(n, i)
              },
              unsubscribe: (t) => {
                if (t) {
                  const r = o.get(t)
                  r && (e.unsubscribe(r), o.delete(t))
                } else o.clear(), e.unsubscribe()
              },
              value: () => t(e.value()),
            },
            r,
            i,
          )
        })(
          e,
          (e) => e,
          t,
          () => e.release(),
        )
      }
      function _(e, t) {
        const r = (0, z.makeProxyDefinitionProperty)(t.weakReference())
        return (r.setValue = (t) => e.setPriceScaleSelectionStrategy(t)), r
      }
      function Y(e, t, r, i) {
        const o = (0, z.makeProxyDefinitionProperty)(t.weakReference())
        return (
          (o.setValue = (t) => {
            const o = { lockScale: t }
            e.setPriceScaleMode(o, r, i)
          }),
          o
        )
      }
      function G(e, t, r, i) {
        const o = (0, z.makeProxyDefinitionProperty)(t.weakReference(), i)
        return (
          (o.setValue = (i) => {
            e.setScaleRatioProperty(t, i, r)
          }),
          o
        )
      }
      var j = r(24377),
        F = r(87095),
        U = r(49152)
      function q(e, t) {
        if ((0, F.isHexColor)(e)) {
          const r = (0, j.parseRgb)(e)
          return (0, j.rgbaToString)((0, j.rgba)(r, (100 - t) / 100))
        }
        return e
      }
      function B(e, t, r, i, o) {
        let n
        if (null !== r) {
          const e = (0, U.combineProperty)(
            q,
            t.weakReference(),
            r.weakReference(),
          )
          n = (0, z.makeProxyDefinitionProperty)(e.ownership())
        } else
          n = (0, z.makeProxyDefinitionProperty)(t.weakReference(), [
            () => q(t.value(), 0),
            (e) => e,
          ])
        return (
          (n.setValue = (r) => {
            o && e.beginUndoMacro(i),
              e.setProperty(t, r, i),
              o && e.endUndoMacro()
          }),
          n
        )
      }
      function J(e, t, r, i, o, n) {
        const s = [
          ((l = r),
          (p = t),
          (e) => {
            const t = l(p)
            if (e === p.value() && null !== t) {
              const e = t.ticker || t.full_name
              if (e) return e
            }
            return e
          }),
          (e) => e,
        ]
        var l, p
        const a = (0, z.convertToDefinitionProperty)(e, t, o, s)
        n && (a.setValue = n)
        const u = new Map()
        ;(a.subscribe = (e, r) => {
          const i = (e) => {
            r(a)
          }
          u.set(r, i), t.subscribe(e, i)
        }),
          (a.unsubscribe = (e, r) => {
            const i = u.get(r)
            i && (t.unsubscribe(e, i), u.delete(r))
          })
        const c = {}
        return (
          i.subscribe(c, () => {
            u.forEach((e, t) => {
              t(a)
            })
          }),
          (a.destroy = () => {
            i.unsubscribeAll(c), u.clear()
          }),
          a
        )
      }
      function K(e) {
        return e.hasOwnProperty('groupType')
      }
      function Q(e) {
        e.forEach((e) => {
          var t
          if (e.hasOwnProperty('propType')) {
            Object.keys(e.properties).forEach((t) => {
              const r = e.properties[t]
              void 0 !== r && void 0 !== r.destroy && r.destroy()
            })
          } else
            Q(e.definitions.value()),
              null === (t = e.visible) || void 0 === t || t.destroy()
        })
      }
    },
  },
])
