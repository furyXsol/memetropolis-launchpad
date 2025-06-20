;(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [3030],
  {
    31988: (t) => {
      t.exports = {
        separator: 'separator-EI7Qsb2Q',
        scrollable: 'scrollable-EI7Qsb2Q',
      }
    },
    29638: (t, e, i) => {
      'use strict'
      i.r(e), i.d(e, { ConfirmInputsDialogRenderer: () => S })
      var r = i(962),
        n = i(50959),
        o = i(44352),
        s = i(50182),
        p = i(59064),
        u = i(86656),
        c = i(39828),
        a = i(57898),
        l = i(49483),
        h = i(31988)
      function d(t) {
        const {
            title: e,
            confirmInputs: r,
            inputsProperty: d,
            studyMetaInfo: S,
            model: y,
            confirmInputsType: D,
            onCancel: f,
            onSubmit: m,
            onClose: T,
            onStudyInputChange: I,
          } = t,
          [_, g] = (0, n.useState)(!0),
          k = (0, n.useMemo)(function () {
            const t = new a.Delegate()
            return {
              isInputsStudy: !0,
              symbolsResolved: () => t,
              resolvedSymbolInfoBySymbol: () => null,
              tempProperties: d,
            }
          }, []),
          v = (0, n.useRef)(null),
          [z, b] = (0, n.useState)(C())
        return (
          (0, n.useEffect)(() => {
            if (!l.CheckMobile.any() && _ && 'symbol' === D && v.current) {
              const t = v.current.querySelector('input')
              t && t.focus()
            }
          }, [_]),
          n.createElement(s.AdaptiveConfirmDialog, {
            dataName: 'confirm-inputs-dialog',
            title: e,
            isOpened: _,
            onSubmit: function () {
              m(d.state().inputs), E()
            },
            onCancel: f,
            onClickOutside: E,
            onClose: E,
            render: () =>
              n.createElement(
                n.Fragment,
                null,
                n.createElement('div', { className: h.separator }),
                n.createElement(
                  u.TouchScrollContainer,
                  { className: h.scrollable, onScroll: w },
                  n.createElement(c.InputsTabContent, {
                    reference: v,
                    property: d,
                    studyMetaInfo: S,
                    model: y,
                    study: k,
                    inputs: r,
                    onStudyInputChange: M,
                  }),
                ),
              ),
            defaultActionOnClose: 'none',
            submitButtonText: o.t(null, void 0, i(73226)),
            submitButtonDisabled: z,
            submitOnEnterKey: !1,
          })
        )
        function w() {
          p.globalCloseDelegate.fire()
        }
        function E() {
          g(!1), T()
        }
        function C() {
          const { inputs: t } = d.state()
          for (const e of r)
            if ('symbol' === e.type && !e.optional && '' === t[e.id]) return !0
          return !1
        }
        function M(t, e) {
          null == I || I(t, e), b(C())
        }
      }
      class S {
        constructor(t, e, i, n, o, s, p, u, c) {
          ;(this._container = document.createElement('div')),
            (this._handleClose = () => {
              r.unmountComponentAtNode(this._container), this._onClose()
            }),
            (this._title = t),
            (this._confirmInputs = e),
            (this._model = s),
            (this._confirmInputsType = n),
            (this._studyMetaInfo = o),
            (this._onSubmit = p),
            (this._onClose = u),
            (this._onStudyInputChange = c),
            (this._inputsProperty = i)
        }
        show() {
          r.render(
            n.createElement(d, {
              title: this._title,
              confirmInputs: this._confirmInputs,
              inputsProperty: this._inputsProperty,
              studyMetaInfo: this._studyMetaInfo,
              model: this._model,
              confirmInputsType: this._confirmInputsType,
              onSubmit: this._onSubmit,
              onCancel: () => {},
              onClose: this._handleClose,
              onStudyInputChange: this._onStudyInputChange,
            }),
            this._container,
          )
        }
      }
    },
    73339: (t, e, i) => {
      'use strict'
      i.r(e), i.d(e, { selectInputValuesOnChart: () => u })
      var r = i(50151),
        n = i(48891),
        o = i(44352),
        s = i(64420),
        p = i(88348)
      n.colorsPalette['color-cold-gray-500']
      async function u(t, e, n, u, c) {
        let a
        const l = (0, s.getInputGroups)(e)
        t.model().model()
        for await (const t of l)
          await h(t).catch((t) => {
            throw new Error(t)
          })
        return { customSourceId: void 0, destPane: a }
        async function h(t) {
          if ((0, s.isGroup)(t))
            if ((0, s.isInputInlines)(t)) {
              const e = (function (t) {
                if (2 !== t.length || t[0].type === t[1].type) return null
                return 'price' === t[0].type
                  ? { price: t[0], time: t[1] }
                  : { price: t[1], time: t[0] }
              })(t.children)
              if (e) {
                const { time: r, price: n } = e,
                  s = r.inline
                    ? o.t(
                        null,
                        {
                          replace: {
                            inputInline: r.inline,
                            studyShortDescription: u,
                          },
                        },
                        i(59877),
                      )
                    : o.t(
                        null,
                        { replace: { studyShortDescription: u } },
                        i(80481),
                      ),
                  p = y(t.id)
                await S(t, 'all', null != p ? p : s, r.id, n.id)
              } else for await (const e of t.children) await d(e)
            } else for await (const e of t.children) await h(e)
          else await d(t)
        }
        async function d(t) {
          const e = 'time' === t.type,
            r = e ? 'time' : 'price',
            n = (function () {
              if (t.inline) {
                const e = y(t.inline)
                if (e) return e
              }
              if (t.tooltip) return t.tooltip
              const r = t.name
                  ? o.t(
                      null,
                      {
                        replace: {
                          inputTitle: t.name,
                          studyShortDescription: u,
                        },
                      },
                      i(18571),
                    )
                  : o.t(
                      null,
                      { replace: { studyShortDescription: u } },
                      i(42917),
                    ),
                n = t.name
                  ? o.t(
                      null,
                      {
                        replace: {
                          inputTitle: t.name,
                          studyShortDescription: u,
                        },
                      },
                      i(58552),
                    )
                  : o.t(
                      null,
                      { replace: { studyShortDescription: u } },
                      i(6083),
                    )
              return e ? r : n
            })(),
            s = e ? t.id : void 0,
            p = e ? void 0 : t.id
          await S(t, r, n, s, p)
        }
        async function S(e, i, o, s, u) {
          const c = await t.requestSelectPoint(
            {
              pointType: i,
              pane: a,
              lineColor: void 0,
              selectPointMode: p.SelectPointMode.Study,
            },
            o,
          )
          void 0 === a && (a = c.pane)
          const l = n.childs().inputs
          l &&
            (s &&
              (0, r.ensureDefined)(l.child(s)).setValue(
                1e3 * (c.point.time || 0),
              ),
            u && (0, r.ensureDefined)(l.child(u)).setValue(c.point.price))
        }
        function y(t) {
          let e
          return (
            c
              .filter((e) => e.inline === t)
              .forEach((t) => {
                t.tooltip && (e = t.tooltip)
              }),
            e
          )
        }
      }
    },
    64420: (t, e, i) => {
      'use strict'
      i.d(e, {
        getInputGroups: () => s,
        isGroup: () => n,
        isInputInlines: () => o,
      })
      var r = i(50151)
      function n(t) {
        return t.hasOwnProperty('groupType')
      }
      function o(t) {
        return n(t) && 'inline' === t.groupType
      }
      function s(t) {
        const e = [],
          i = new Map(),
          n = new Map()
        return (
          n.set(void 0, new Map()),
          t.forEach((t) => {
            const { group: o, inline: s } = t
            if (void 0 !== o || void 0 !== s)
              if (void 0 !== o)
                if (void 0 !== s)
                  if (i.has(o)) {
                    const e = (0, r.ensureDefined)(i.get(o))
                    let u
                    n.has(e)
                      ? (u = (0, r.ensureDefined)(n.get(e)))
                      : ((u = new Map()), n.set(e, u)),
                      p(t, 'inline', s, u, e.children)
                  } else {
                    const r = { id: s, groupType: 'inline', children: [t] },
                      p = { id: o, groupType: 'group', children: [r] },
                      u = new Map()
                    u.set(s, r), n.set(p, u), i.set(o, p), e.push(p)
                  }
                else p(t, 'group', o, i, e)
              else {
                const i = (0, r.ensureDefined)(n.get(void 0))
                p(t, 'inline', (0, r.ensureDefined)(s), i, e)
              }
            else e.push(t)
          }),
          e
        )
      }
      function p(t, e, i, n, o) {
        if (n.has(i)) (0, r.ensureDefined)(n.get(i)).children.push(t)
        else {
          const r = { id: i, groupType: e, children: [t] }
          n.set(i, r), o.push(r)
        }
      }
    },
    73226: (t) => {
      t.exports = {
        ar: ['تطبيق'],
        ca_ES: ['Aplicar'],
        cs: ['Použít'],
        de: ['Anwenden'],
        el: ['Εφαρμογή'],
        en: 'Apply',
        es: ['Aplicar'],
        fa: ['اعمال'],
        fr: ['Appliquer'],
        he_IL: ['החל'],
        hu_HU: ['Alkalmaz'],
        id_ID: ['Terapkan'],
        it: ['Applica'],
        ja: ['適用'],
        ko: ['적용'],
        ms_MY: ['Gunakan'],
        nl_NL: ['Toepassen'],
        pl: ['Zastosuj'],
        pt: ['Aplicar'],
        ro: 'Apply',
        ru: ['Применить'],
        sv: ['Verkställ'],
        th: ['บันทึก'],
        tr: ['Uygula'],
        vi: ['Áp dụng'],
        zh: ['应用'],
        zh_TW: ['套用'],
      }
    },
    59877: (t) => {
      t.exports = {
        ar: ['تعيين وقت وسعر {inputInline} لـ {studyShortDescription}'],
        ca_ES: [
          "Establiu l'hora i el preu de {inputInline} per a {studyShortDescription}",
        ],
        cs: 'Set the "{inputInline}" time and price for "{studyShortDescription}"',
        de: [
          'Legen Sie die {inputInline} Zeit und den Preis für {studyShortDescription} fest',
        ],
        el: 'Set the "{inputInline}" time and price for "{studyShortDescription}"',
        en: 'Set the "{inputInline}" time and price for "{studyShortDescription}"',
        es: [
          'Establezca la hora y el precio de {inputInline} para {studyShortDescription}',
        ],
        fa: 'Set the "{inputInline}" time and price for "{studyShortDescription}"',
        fr: [
          "Définissez l'heure et le prix de {inputInline} pour {studyShortDescription}.",
        ],
        he_IL: [
          'הגדר את הזמן והמחיר של {inputInline} עבור {studyShortDescription}',
        ],
        hu_HU:
          'Set the "{inputInline}" time and price for "{studyShortDescription}"',
        id_ID: [
          'Menentukan waktu dan harga {inputInline} untuk {studyShortDescription}',
        ],
        it: [
          'Imposta valori di tempo e prezzo di {inputInline} nello script {studyShortDescription}',
        ],
        ja: ['{studyShortDescription}の{inputInline}に日時と価格を設定'],
        ko: ['{studyShortDescription}에 대한 {inputInline} 시간 및 가격 설정'],
        ms_MY: [
          'Tetapkan masa {inputInline} dan harga untuk {studyShortDescription}',
        ],
        nl_NL:
          'Set the "{inputInline}" time and price for "{studyShortDescription}"',
        pl: ['Ustaw czas i cenę „{inputInline}” dla „{studyShortDescription}”'],
        pt: [
          'Definir o preço e o tempo de "{inputInline}" para "{studyShortDescription}"',
        ],
        ro: [
          'Set the {inputInline} time and price for {studyShortDescription}',
        ],
        ru: [
          'Установить время и цену {inputInline} для {studyShortDescription}',
        ],
        sv: ['Ställ in {inputInline} tid och pris för {studyShortDescription}'],
        th: ['กำหนดเวลาและราคา {inputInline} สำหรับ {studyShortDescription}'],
        tr: ['Saat ve fiyatı ayarlama{inputInline} {studyShortDescription}'],
        vi: ['Đặt {inputInline} thời gian và giá cho {studyShortDescription}'],
        zh: ['为{studyShortDescription}设置{inputInline}时间和价格'],
        zh_TW: ['為{studyShortDescription}設定{inputInline}時間和價格'],
      }
    },
    18571: (t) => {
      t.exports = {
        ar: ['نعيين وقت {inputTitle} لـ {studyShortDescription}'],
        ca_ES: [
          "Establiu l'hora de {inputTitle} per a {studyShortDescription}",
        ],
        cs: 'Set the "{inputTitle}" time for "{studyShortDescription}"',
        de: [
          'Legen Sie die {inputTitle} Zeit für {studyShortDescription} fest',
        ],
        el: 'Set the "{inputTitle}" time for "{studyShortDescription}"',
        en: 'Set the "{inputTitle}" time for "{studyShortDescription}"',
        es: ['Establezca la hora de {inputTitle} para {studyShortDescription}'],
        fa: 'Set the "{inputTitle}" time for "{studyShortDescription}"',
        fr: ["Définissez {inputTitle} l'heure pour {studyShortDescription}"],
        he_IL: ['הגדר את הזמן {inputTitle} עבור {studyShortDescription}'],
        hu_HU: 'Set the "{inputTitle}" time for "{studyShortDescription}"',
        id_ID: ['Menentukan waktu {inputTitle} untuk {studyShortDescription}'],
        it: [
          'Imposta valore di tempo di {inputTitle} nello script {studyShortDescription}',
        ],
        ja: ['{studyShortDescription}の{inputTitle}に日時を設定'],
        ko: ['{studyShortDescription}에 대한 {inputTitle} 시간 설정'],
        ms_MY: [
          'Tetapkan masa {inputTitle} dan harga untuk {studyShortDescription}',
        ],
        nl_NL: 'Set the "{inputTitle}" time for "{studyShortDescription}"',
        pl: ['Ustaw czas i cenę „{inputTitle}” dla „{studyShortDescription}”'],
        pt: [
          'Definir o tempo de "{inputTitle}" para "{studyShortDescription}"',
        ],
        ro: ['Set the {inputTitle} time for {studyShortDescription}'],
        ru: ['Установить время {inputTitle} для {studyShortDescription}'],
        sv: ['Ställ in {inputTitle} pris för {studyShortDescription}'],
        th: ['กำหนดเวลา {inputTitle} สำหรับ {studyShortDescription}'],
        tr: [
          '"{studyShortDescription}" için "{inputTitle}" zamanını ayarlayın',
        ],
        vi: ['Đặt {inputTitle} thời gian cho {studyShortDescription}'],
        zh: ['为{studyShortDescription}设置{inputTitle}时间'],
        zh_TW: ['為{studyShortDescription}設定{inputTitle}時間'],
      }
    },
    58552: (t) => {
      t.exports = {
        ar: ['تعيين سعر {inputTitle} لـ {studyShortDescription}'],
        ca_ES: [
          'Establiu el preu de {inputTitle} per a {studyShortDescription}',
        ],
        cs: 'Set the "{inputTitle}" price for "{studyShortDescription}"',
        de: [
          'Legen Sie den {inputTitle} Preis für {studyShortDescription} fest',
        ],
        el: 'Set the "{inputTitle}" price for "{studyShortDescription}"',
        en: 'Set the "{inputTitle}" price for "{studyShortDescription}"',
        es: [
          'Establezca el precio de {inputTitle} para {studyShortDescription}',
        ],
        fa: 'Set the "{inputTitle}" price for "{studyShortDescription}"',
        fr: ['Définissez le {inputTitle}prix pour {studyShortDescription}'],
        he_IL: ['הגדר את המחיר {inputTitle} עבור {studyShortDescription}'],
        hu_HU: 'Set the "{inputTitle}" price for "{studyShortDescription}"',
        id_ID: ['Menentukan harga {inputTitle} untuk {studyShortDescription}'],
        it: [
          'Imposta valore di prezzo di {inputTitle} nello script {studyShortDescription}',
        ],
        ja: ['{studyShortDescription}の{inputTitle}に価格を設定'],
        ko: ['{studyShortDescription}에 대한 {inputTitle} 가격 설정'],
        ms_MY: ['Tetapkan harga {inputTitle} untuk {studyShortDescription}'],
        nl_NL: 'Set the "{inputTitle}" price for "{studyShortDescription}"',
        pl: ['Ustaw czas i cenę „{inputTitle} ” dla „{studyShortDescription}”'],
        pt: [
          'Definir o preço de "{inputTitle}" para "{studyShortDescription}"',
        ],
        ro: ['Set the {inputTitle} price for {studyShortDescription}'],
        ru: ['Установить цену {inputTitle} для {studyShortDescription}'],
        sv: ['Ställ in {inputTitle} pris för {studyShortDescription}'],
        th: ['กำหนดราคา {inputTitle} สำหรับ {studyShortDescription}'],
        tr: [
          '"{studyShortDescription}" için "{inputTitle}" fiyatını ayarlayın',
        ],
        vi: ['Đặt {inputTitle} giá cho {studyShortDescription}'],
        zh: ['为{studyShortDescription}设置{inputTitle}价格'],
        zh_TW: ['為{studyShortDescription}設定{inputTitle}價格'],
      }
    },
    80481: (t) => {
      t.exports = {
        ar: ['تعيين وقت وسعر "{studyShortDescription}"'],
        ca_ES: ['Establiu l\'hora i el preu per a "{studyShortDescription}"'],
        cs: 'Set the time and price for "{studyShortDescription}"',
        de: [
          'Legen Sie die Zeit und den Preis für "{studyShortDescription}" fest',
        ],
        el: 'Set the time and price for "{studyShortDescription}"',
        en: 'Set the time and price for "{studyShortDescription}"',
        es: ['Establezca la hora y el precio para "{studyShortDescription}"'],
        fa: 'Set the time and price for "{studyShortDescription}"',
        fr: ['Fixez l\'heure et le prix pour "{studyShortDescription}"'],
        he_IL: ['הגדר את הזמן והמחיר עבור "{studyShortDescription}"'],
        hu_HU: 'Set the time and price for "{studyShortDescription}"',
        id_ID: ['Menentukan waktu dan harga untuk "{studyShortDescription}"'],
        it: ['Imposta tempo e prezzo per "{studyShortDescription}"'],
        ja: ['{studyShortDescription}に日時と価格を設定'],
        ko: ['"{studyShortDescription}" 에 대한 타임과 프라이스를 셋하시오'],
        ms_MY: ['Tetapkan masa dan harga untuk "{studyShortDescription}"'],
        nl_NL: 'Set the time and price for "{studyShortDescription}"',
        pl: ['Ustaw czas i cenę dla „{studyShortDescription}”'],
        pt: ['Definir o tempo e preço para "{studyShortDescription}"'],
        ro: 'Set the time and price for "{studyShortDescription}"',
        ru: ['Задать время и цену для "{studyShortDescription}"'],
        sv: ['Ställ in tid och pris för "{studyShortDescription}"'],
        th: ['ตั้งเวลาและราคาสำหรับ "{studyShortDescription}"'],
        tr: ['"{studyShortDescription}" için saati ve fiyatı ayarlayın'],
        vi: ['Đặt thời gian và giá cho "{studyShortDescription}"'],
        zh: ['设置“{studyShortDescription}”的时间和价格'],
        zh_TW: ['設定“{studyShortDescription}”的時間和價格'],
      }
    },
    42917: (t) => {
      t.exports = {
        ar: ['نعيين وقت "{studyShortDescription}"'],
        ca_ES: ['Establiu l\'hora per a "{studyShortDescription}"'],
        cs: 'Set the time for "{studyShortDescription}"',
        de: ['Legen Sie die Zeit für "{studyShortDescription}" fest'],
        el: 'Set the time for "{studyShortDescription}"',
        en: 'Set the time for "{studyShortDescription}"',
        es: ['Establezca la hora para "{studyShortDescription}"'],
        fa: 'Set the time for "{studyShortDescription}"',
        fr: ['Fixez l\'heure pour "{studyShortDescription}"'],
        he_IL: ['הגדר את השעה עבור "{studyShortDescription}"'],
        hu_HU: 'Set the time for "{studyShortDescription}"',
        id_ID: ['Menentukan waktu untuk "{studyShortDescription}"'],
        it: ['Imposta tempo per "{studyShortDescription}"'],
        ja: ['{studyShortDescription}に日時を設定"'],
        ko: ['"{studyShortDescription}" 에 대한 타임을 셋하시오'],
        ms_MY: ['Tetapkan masa untuk "{studyShortDescription}"'],
        nl_NL: 'Set the time for "{studyShortDescription}"',
        pl: ['Ustaw godzinę dla „{studyShortDescription}”'],
        pt: ['Definir o tempo para "{studyShortDescription}"'],
        ro: 'Set the time for "{studyShortDescription}"',
        ru: ['Задать время для "{studyShortDescription}"'],
        sv: ['Ställ in tid för "{studyShortDescription}"'],
        th: ['ตั้งเวลาสำหรับ "{studyShortDescription}"'],
        tr: ['"{studyShortDescription}" için zamanı ayarlayın'],
        vi: ['Đặt thời gian cho "{studyShortDescription}"'],
        zh: ['设置“{studyShortDescription}”的时间'],
        zh_TW: ['設定“{studyShortDescription}”的時間'],
      }
    },
    6083: (t) => {
      t.exports = {
        ar: ['تعيين سعر "{studyShortDescription}"'],
        ca_ES: ['Establiu el preu per a "{studyShortDescription}"'],
        cs: 'Set the price for "{studyShortDescription}"',
        de: ['Legen Sie den Preis für "{studyShortDescription}" fest'],
        el: 'Set the price for "{studyShortDescription}"',
        en: 'Set the price for "{studyShortDescription}"',
        es: ['Establezca el precio para "{studyShortDescription}"'],
        fa: 'Set the price for "{studyShortDescription}"',
        fr: ['Fixez le prix pour "{studyShortDescription}"'],
        he_IL: ['הגדר את המחיר עבור "{studyShortDescription}"'],
        hu_HU: 'Set the price for "{studyShortDescription}"',
        id_ID: ['Menentukan harga untuk "{studyShortDescription}"'],
        it: ['Imposta prezzo per "{studyShortDescription}"'],
        ja: ['{studyShortDescription}に価格を設定"'],
        ko: ['"{studyShortDescription}" 에 대한 프라이스를 셋하시오'],
        ms_MY: ['Tetapkan harga untuk "{studyShortDescription}"'],
        nl_NL: 'Set the price for "{studyShortDescription}"',
        pl: ['Ustaw cenę dla „{studyShortDescription}”'],
        pt: ['Definir o preço para "{studyShortDescription}"'],
        ro: 'Set the price for "{studyShortDescription}"',
        ru: ['Задать цену для "{studyShortDescription}"'],
        sv: ['Ställ in pris för "{studyShortDescription}"'],
        th: ['กำหนดราคาสำหรับ "{studyShortDescription}"'],
        tr: ['"{studyShortDescription}" için tarih seti'],
        vi: ['Đặt giá cho "{studyShortDescription}"'],
        zh: ['设置“{studyShortDescription}”的价格'],
        zh_TW: ['設定“{studyShortDescription}”的價格'],
      }
    },
  },
])
