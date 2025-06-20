;(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [1754],
  {
    36383: (e, t, r) => {
      'use strict'
      r.d(t, { useOutsideEvent: () => s })
      var o = r(50959),
        i = r(27267)
      function s(e) {
        const {
            click: t,
            mouseDown: r,
            touchEnd: s,
            touchStart: n,
            handler: a,
            reference: c,
            ownerDocument: l = document,
          } = e,
          d = (0, o.useRef)(null),
          h = (0, o.useRef)(new CustomEvent('timestamp').timeStamp)
        return (
          (0, o.useLayoutEffect)(() => {
            const e = { click: t, mouseDown: r, touchEnd: s, touchStart: n },
              o = c ? c.current : d.current
            return (0, i.addOutsideEventListener)(h.current, o, a, l, e)
          }, [t, r, s, n, a]),
          c || d
        )
      }
    },
    9745: (e, t, r) => {
      'use strict'
      r.d(t, { Icon: () => i })
      var o = r(50959)
      const i = o.forwardRef((e, t) => {
        const { icon: r = '', ...i } = e
        return o.createElement('span', {
          ...i,
          ref: t,
          dangerouslySetInnerHTML: { __html: r },
        })
      })
    },
    67961: (e, t, r) => {
      'use strict'
      r.d(t, { OverlapManager: () => s, getRootOverlapManager: () => a })
      var o = r(50151)
      class i {
        constructor() {
          this._storage = []
        }
        add(e) {
          this._storage.push(e)
        }
        remove(e) {
          this._storage = this._storage.filter((t) => e !== t)
        }
        has(e) {
          return this._storage.includes(e)
        }
        getItems() {
          return this._storage
        }
      }
      class s {
        constructor(e = document) {
          ;(this._storage = new i()),
            (this._windows = new Map()),
            (this._index = 0),
            (this._document = e),
            (this._container = e.createDocumentFragment())
        }
        setContainer(e) {
          const t = this._container,
            r = null === e ? this._document.createDocumentFragment() : e
          !(function (e, t) {
            Array.from(e.childNodes).forEach((e) => {
              e.nodeType === Node.ELEMENT_NODE && t.appendChild(e)
            })
          })(t, r),
            (this._container = r)
        }
        registerWindow(e) {
          this._storage.has(e) || this._storage.add(e)
        }
        ensureWindow(e, t = { position: 'fixed', direction: 'normal' }) {
          const r = this._windows.get(e)
          if (void 0 !== r) return r
          this.registerWindow(e)
          const o = this._document.createElement('div')
          if (
            ((o.style.position = t.position),
            (o.style.zIndex = this._index.toString()),
            (o.dataset.id = e),
            void 0 !== t.index)
          ) {
            const e = this._container.childNodes.length
            if (t.index >= e) this._container.appendChild(o)
            else if (t.index <= 0)
              this._container.insertBefore(o, this._container.firstChild)
            else {
              const e = this._container.childNodes[t.index]
              this._container.insertBefore(o, e)
            }
          } else
            'reverse' === t.direction
              ? this._container.insertBefore(o, this._container.firstChild)
              : this._container.appendChild(o)
          return this._windows.set(e, o), ++this._index, o
        }
        unregisterWindow(e) {
          this._storage.remove(e)
          const t = this._windows.get(e)
          void 0 !== t &&
            (null !== t.parentElement && t.parentElement.removeChild(t),
            this._windows.delete(e))
        }
        getZindex(e) {
          const t = this.ensureWindow(e)
          return parseInt(t.style.zIndex || '0')
        }
        moveToTop(e) {
          if (this.getZindex(e) !== this._index) {
            this.ensureWindow(e).style.zIndex = (++this._index).toString()
          }
        }
        removeWindow(e) {
          this.unregisterWindow(e)
        }
      }
      const n = new WeakMap()
      function a(e = document) {
        const t = e.getElementById('overlap-manager-root')
        if (null !== t) return (0, o.ensureDefined)(n.get(t))
        {
          const t = new s(e),
            r = (function (e) {
              const t = e.createElement('div')
              return (
                (t.style.position = 'absolute'),
                (t.style.zIndex = (150).toString()),
                (t.style.top = '0px'),
                (t.style.left = '0px'),
                (t.id = 'overlap-manager-root'),
                t
              )
            })(e)
          return n.set(r, t), t.setContainer(r), e.body.appendChild(r), t
        }
      }
    },
    99054: (e, t, r) => {
      'use strict'
      r.d(t, { setFixedBodyState: () => l })
      const o = (() => {
        let e
        return () => {
          var t
          if (void 0 === e) {
            const r = document.createElement('div'),
              o = r.style
            ;(o.visibility = 'hidden'),
              (o.width = '100px'),
              (o.msOverflowStyle = 'scrollbar'),
              document.body.appendChild(r)
            const i = r.offsetWidth
            r.style.overflow = 'scroll'
            const s = document.createElement('div')
            ;(s.style.width = '100%'), r.appendChild(s)
            const n = s.offsetWidth
            null === (t = r.parentNode) || void 0 === t || t.removeChild(r),
              (e = i - n)
          }
          return e
        }
      })()
      function i(e, t, r) {
        null !== e && e.style.setProperty(t, r)
      }
      function s(e, t) {
        return getComputedStyle(e, null).getPropertyValue(t)
      }
      function n(e, t) {
        return parseInt(s(e, t))
      }
      let a = 0,
        c = !1
      function l(e) {
        const { body: t } = document,
          r = t.querySelector('.widgetbar-wrap')
        if (e && 1 == ++a) {
          const e = s(t, 'overflow'),
            a = n(t, 'padding-right')
          'hidden' !== e.toLowerCase() &&
            t.scrollHeight > t.offsetHeight &&
            (i(r, 'right', `${o()}px`),
            (t.style.paddingRight = `${a + o()}px`),
            (c = !0)),
            t.classList.add('i-no-scroll')
        } else if (
          !e &&
          a > 0 &&
          0 == --a &&
          (t.classList.remove('i-no-scroll'), c)
        ) {
          i(r, 'right', '0px')
          let e = 0
          0,
            t.scrollHeight <= t.clientHeight && (e -= o()),
            (t.style.paddingRight = (e < 0 ? 0 : e) + 'px'),
            (c = !1)
        }
      }
    },
    89324: (e, t, r) => {
      'use strict'
      r.r(t),
        r.d(t, {
          Components: () => l,
          showDefaultSearchDialog: () => c,
          showSymbolSearchItemsDialog: () => n.showSymbolSearchItemsDialog,
        })
      var o = r(82992),
        i = (r(32563), r(31330)),
        s = r(65106),
        n = r(1861),
        a = r(84015)
      r(14483), r(49483)
      !(0, a.isOnMobileAppPage)('any') &&
        window.matchMedia('(min-width: 602px) and (min-height: 445px)').matches
      function c(e) {
        const t = (0, s.getSymbolSearchCompleteOverrideFunction)(),
          {
            defaultValue: r,
            showSpreadActions: a,
            source: c,
            onSearchComplete: l,
            ...d
          } = e,
          h = {
            ...d,
            showSpreadActions: null != a ? a : (0, i.canShowSpreadActions)(),
            onSearchComplete: (e, r) => {
              null == r || r.symbolType
              t(e[0].symbol, e[0].result).then((e) => {
                o.linking.symbol.setValue(e.symbol), null == l || l(e.symbol)
              })
            },
          }
        ;(0, n.showSymbolSearchItemsDialog)({ ...h, defaultValue: r })
      }
      const l = {
        SymbolSearchWatchlistDialogContentItem: null,
        SymbolSearchWatchlistDialog: null,
      }
    },
    1861: (e, t, r) => {
      'use strict'
      r.d(t, { showSymbolSearchItemsDialog: () => c })
      var o = r(50959),
        i = r(962),
        s = r(60508),
        n = r(51826),
        a = r(32456)
      function c(e) {
        const {
          initialMode: t = 'symbolSearch',
          autofocus: r = !0,
          defaultValue: c,
          showSpreadActions: l,
          selectSearchOnInit: d,
          onSearchComplete: h,
          dialogTitle: u,
          placeholder: m,
          fullscreen: p,
          initialScreen: _,
          wrapper: y,
          dialog: f,
          contentItem: S,
          onClose: g,
          onOpen: b,
          footer: v,
          symbolTypes: k,
          searchInput: x,
          emptyState: I,
          hideMarkedListFlag: w,
          dialogWidth: z = 'auto',
          manager: C,
          shouldReturnFocus: D,
        } = e
        if (
          n.dialogsOpenerManager.isOpened('SymbolSearch') ||
          n.dialogsOpenerManager.isOpened('ChangeIntervalDialog')
        )
          return
        const L = document.createElement('div'),
          T = o.createElement(
            s.SlotContext.Provider,
            { value: null != C ? C : null },
            o.createElement(a.SymbolSearchItemsDialog, {
              onClose: N,
              initialMode: t,
              defaultValue: c,
              showSpreadActions: l,
              hideMarkedListFlag: w,
              selectSearchOnInit: d,
              onSearchComplete: h,
              dialogTitle: u,
              placeholder: m,
              fullscreen: p,
              initialScreen: _,
              wrapper: y,
              dialog: f,
              contentItem: S,
              footer: v,
              symbolTypes: k,
              searchInput: x,
              emptyState: I,
              autofocus: r,
              dialogWidth: z,
              shouldReturnFocus: D,
            }),
          )
        function N() {
          i.unmountComponentAtNode(L),
            n.dialogsOpenerManager.setAsClosed('SymbolSearch'),
            g && g()
        }
        return (
          i.render(T, L),
          n.dialogsOpenerManager.setAsOpened('SymbolSearch'),
          b && b(),
          { close: N }
        )
      }
    },
    51826: (e, t, r) => {
      'use strict'
      r.d(t, { DialogsOpenerManager: () => o, dialogsOpenerManager: () => i })
      class o {
        constructor() {
          this._storage = new Map()
        }
        setAsOpened(e, t) {
          this._storage.set(e, t)
        }
        setAsClosed(e) {
          this._storage.delete(e)
        }
        isOpened(e) {
          return this._storage.has(e)
        }
        getDialogPayload(e) {
          return this._storage.get(e)
        }
      }
      const i = new o()
    },
    90692: (e, t, r) => {
      'use strict'
      r.d(t, { MatchMedia: () => i })
      var o = r(50959)
      class i extends o.PureComponent {
        constructor(e) {
          super(e),
            (this._handleChange = () => {
              this.forceUpdate()
            }),
            (this.state = { query: window.matchMedia(this.props.rule) })
        }
        componentDidMount() {
          this._subscribe(this.state.query)
        }
        componentDidUpdate(e, t) {
          this.state.query !== t.query &&
            (this._unsubscribe(t.query), this._subscribe(this.state.query))
        }
        componentWillUnmount() {
          this._unsubscribe(this.state.query)
        }
        render() {
          return this.props.children(this.state.query.matches)
        }
        static getDerivedStateFromProps(e, t) {
          return e.rule !== t.query.media
            ? { query: window.matchMedia(e.rule) }
            : null
        }
        _subscribe(e) {
          e.addListener(this._handleChange)
        }
        _unsubscribe(e) {
          e.removeListener(this._handleChange)
        }
      }
    },
    65718: (e, t, r) => {
      'use strict'
      r.d(t, { Portal: () => c, PortalContext: () => l })
      var o = r(50959),
        i = r(962),
        s = r(36174),
        n = r(67961),
        a = r(60508)
      class c extends o.PureComponent {
        constructor() {
          super(...arguments), (this._uuid = (0, s.guid)())
        }
        componentWillUnmount() {
          this._manager().removeWindow(this._uuid)
        }
        render() {
          const e = this._manager().ensureWindow(
            this._uuid,
            this.props.layerOptions,
          )
          return (
            (e.style.top = this.props.top || ''),
            (e.style.bottom = this.props.bottom || ''),
            (e.style.left = this.props.left || ''),
            (e.style.right = this.props.right || ''),
            (e.style.pointerEvents = this.props.pointerEvents || ''),
            i.createPortal(
              o.createElement(l.Provider, { value: this }, this.props.children),
              e,
            )
          )
        }
        moveToTop() {
          this._manager().moveToTop(this._uuid)
        }
        _manager() {
          return null === this.context
            ? (0, n.getRootOverlapManager)()
            : this.context
        }
      }
      c.contextType = a.SlotContext
      const l = o.createContext(null)
    },
    60508: (e, t, r) => {
      'use strict'
      r.d(t, { Slot: () => i, SlotContext: () => s })
      var o = r(50959)
      class i extends o.Component {
        shouldComponentUpdate() {
          return !1
        }
        render() {
          return o.createElement('div', {
            style: { position: 'fixed', zIndex: 150, left: 0, top: 0 },
            ref: this.props.reference,
          })
        }
      }
      const s = o.createContext(null)
    },
    16936: (e) => {
      e.exports = {
        ar: ['عودة'],
        ca_ES: ['Enrere'],
        cs: 'Back',
        de: ['Zurück'],
        el: 'Back',
        en: 'Back',
        es: ['Atrás'],
        fa: 'Back',
        fr: ['Retour'],
        he_IL: ['חזור'],
        hu_HU: 'Back',
        id_ID: ['Kembali'],
        it: ['Indietro'],
        ja: ['戻る'],
        ko: ['뒤로'],
        ms_MY: ['Kembali'],
        nl_NL: 'Back',
        pl: ['Cofnij'],
        pt: ['Voltar'],
        ro: 'Back',
        ru: ['Назад'],
        sv: ['Tillbaka'],
        th: ['กลับไป'],
        tr: ['Geri'],
        vi: ['Quay lại'],
        zh: ['返回'],
        zh_TW: ['返回'],
      }
    },
    9898: (e) => {
      e.exports = {
        ar: ['حق'],
        ca_ES: ['Right (dret de subscripció)'],
        cs: 'Right',
        de: ['Rechter'],
        el: 'Right',
        en: 'Right',
        es: ['Right (derecho de suscripción)'],
        fa: 'Right',
        fr: ['De droite'],
        he_IL: ['זכות Right'],
        hu_HU: 'Right',
        id_ID: ['Kanan'],
        it: ['Diritto'],
        ja: ['ストックオプション'],
        ko: ['라이트'],
        ms_MY: ['Benar'],
        nl_NL: 'Right',
        pl: ['Prawo do udostępniania'],
        pt: ['Direita'],
        ro: 'Right',
        ru: ['Право на акцию'],
        sv: ['Höger'],
        th: ['สิทธิ'],
        tr: ['Sağ'],
        vi: ['Phải'],
        zh: ['认股权'],
        zh_TW: ['認股權'],
      }
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
    64498: (e) => {
      e.exports = {
        ar: ['كل المصادر'],
        ca_ES: ['Totes les fonts'],
        cs: 'All sources',
        de: ['Alle Quellen'],
        el: 'All sources',
        en: 'All sources',
        es: ['Todas las fuentes'],
        fa: 'All sources',
        fr: ['Toutes les sources'],
        he_IL: ['כל המקורות'],
        hu_HU: 'All sources',
        id_ID: ['Seluruh sumber'],
        it: ['Tutte le fonti'],
        ja: ['すべての提供元'],
        ko: ['모든 자료'],
        ms_MY: ['Kesemua sumber'],
        nl_NL: 'All sources',
        pl: ['Wszystkie źródła'],
        pt: ['Todas as fontes'],
        ro: 'All sources',
        ru: ['Все источники'],
        sv: ['Samtliga källor'],
        th: ['แหล่งที่มาทั้งหมด'],
        tr: ['Tüm kaynaklar'],
        vi: ['Tất cả các nguồn'],
        zh: ['全部来源'],
        zh_TW: ['全部來源'],
      }
    },
    79852: (e) => {
      e.exports = {
        ar: ['سند'],
        ca_ES: ['Bo'],
        cs: 'Bond',
        de: ['Anleihe'],
        el: 'Bond',
        en: 'Bond',
        es: ['Bono'],
        fa: 'Bond',
        fr: ['Obligation'],
        he_IL: ['אגרת חוב'],
        hu_HU: 'Bond',
        id_ID: ['Surat hutang'],
        it: ['Obbligazione'],
        ja: ['債券'],
        ko: ['채권'],
        ms_MY: ['Bon'],
        nl_NL: 'Bond',
        pl: ['Obligacja'],
        pt: ['Título'],
        ro: 'Bond',
        ru: ['Облигации'],
        sv: ['Obligation'],
        th: ['พันธบัตร'],
        tr: ['Tahvil'],
        vi: ['Trái phiếu'],
        zh: ['债券'],
        zh_TW: ['債券'],
      }
    },
    29601: (e) => {
      e.exports = {
        ar: ['الوصف'],
        ca_ES: ['Descripció'],
        cs: ['Popis'],
        de: ['Beschreibung'],
        el: 'Description',
        en: 'Description',
        es: ['Descripción'],
        fa: ['شرح'],
        fr: 'Description',
        he_IL: ['תיאור'],
        hu_HU: ['Leírás'],
        id_ID: ['Deskripsi'],
        it: ['Descrizione'],
        ja: ['詳細'],
        ko: ['설명'],
        ms_MY: ['Huraian'],
        nl_NL: ['Beschrijving'],
        pl: ['Opis'],
        pt: ['Descrição'],
        ro: 'Description',
        ru: ['Описание'],
        sv: ['Beskrivning'],
        th: ['คำอธิบาย'],
        tr: ['Açıklama'],
        vi: ['Mô tả'],
        zh: ['描述'],
        zh_TW: ['描述'],
      }
    },
    29673: (e) => {
      e.exports = {
        ar: ['لا توجد أسواق تطابق المعايير التي عينتها'],
        ca_ES: [
          'No hi ha mercats de valors que coincideixin amb els vostres criteris.',
        ],
        cs: 'No exchanges match your criteria',
        de: ['Keine Börsen entsprechen Ihren Kriterien'],
        el: 'No exchanges match your criteria',
        en: 'No exchanges match your criteria',
        es: ['No hay mercados de valores que coincidan con sus criterios.'],
        fa: 'No exchanges match your criteria',
        fr: ['Aucun échange ne correspond à vos critères'],
        he_IL: ['אין בורסות התואמות את הקריטריונים שלך'],
        hu_HU: 'No exchanges match your criteria',
        id_ID: ['Tidak ada bursa yang sesuai dengan kriteria anda'],
        it: ['Nessuna borsa corrisponde ai tuoi criteri'],
        ja: ['条件に合致する取引所はありません'],
        ko: ['조건에 맞는 익스체인지가 없음'],
        ms_MY: ['Tiada bursa saham yang memenuhi kriteria anda.'],
        nl_NL: 'No exchanges match your criteria',
        pl: ['Brak giełd spełniających Twoje kryteria'],
        pt: ['Nenhuma exchange corresponde ao seu critério'],
        ro: 'No exchanges match your criteria',
        ru: ['Нет подходящих бирж'],
        sv: ['Inga börser matchar dina kriterier'],
        th: ['ไม่มีตลาดแลกเปลี่ยนใดๆ ตรงตามเงื่อนไขของคุณ'],
        tr: ['Kriterlerinize uygun borsa yok'],
        vi: ['Không có sàn giao dịch nào khớp với yêu cầu của bạn'],
        zh: ['没有交易所符合您的条件'],
        zh_TW: ['沒有交易所符合您的條件'],
      }
    },
    41379: (e) => {
      e.exports = {
        ar: ['لا توجد رموز تطابق معاييرك'],
        ca_ES: ['Cap símbol coincideix amb els vostres criteris'],
        cs: 'No symbols match your criteria',
        de: ['Für Ihre Kriterien gibt es keine übereinstimmenden Symbole'],
        el: 'No symbols match your criteria',
        en: 'No symbols match your criteria',
        es: ['Ningún símbolo coincide con sus criterios'],
        fa: 'No symbols match your criteria',
        fr: ['Aucun symbole ne correspond à vos critères'],
        he_IL: ['אין סימולים תואמים את הקריטריונים שלך'],
        hu_HU: 'No symbols match your criteria',
        id_ID: ['Tidak ada Simbol yang sesuai dengan kriteria anda'],
        it: ['Nessun simbolo corrisponde ai criteri'],
        ja: ['条件に合致するシンボルはありません'],
        ko: ['조건에 맞는 심볼이 없음'],
        ms_MY: ['Tiada Simbol yang menepati kriteria anda'],
        nl_NL: 'No symbols match your criteria',
        pl: ['Brak symboli spełniających Twoje kryteria'],
        pt: ['Nenhum símbolo compatível com seu critério'],
        ro: 'No symbols match your criteria',
        ru: ['Нет подходящих символов'],
        sv: ['Inga symboler matchar dina kriterier'],
        th: ['ไม่มีสัญลักษณ์ที่ตรงกับการค้นหาของคุณ'],
        tr: ['Kriterlerinize uygun sembol yok'],
        vi: ['Không có mã giao dịch nào khớp với tiêu chí của bạn'],
        zh: ['没有代码符合您的条件'],
        zh_TW: ['沒有商品符合您的條件'],
      }
    },
    19724: (e) => {
      e.exports = {
        ar: ['مصادر'],
        ca_ES: ['Fonts'],
        cs: 'Sources',
        de: ['Quellen'],
        el: 'Sources',
        en: 'Sources',
        es: ['Fuentes'],
        fa: 'Sources',
        fr: 'Sources',
        he_IL: ['מקורות'],
        hu_HU: 'Sources',
        id_ID: ['Sumber'],
        it: ['Fonti'],
        ja: ['情報源'],
        ko: ['자료'],
        ms_MY: ['Sumber-sumber'],
        nl_NL: 'Sources',
        pl: ['Źródła'],
        pt: ['Fontes'],
        ro: 'Sources',
        ru: ['Источники'],
        sv: ['Källor'],
        th: ['แหล่งที่มา'],
        tr: ['Kaynak'],
        vi: ['Nguồn'],
        zh: ['来源'],
        zh_TW: ['來源'],
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
    13269: (e) => {
      e.exports = {
        ar: ['اختر مصدراً'],
        ca_ES: ['Selecciona font'],
        cs: 'Select source',
        de: ['Quelle wählen'],
        el: 'Select source',
        en: 'Select source',
        es: ['Seleccionar fuente'],
        fa: 'Select source',
        fr: ['Sélectionner la source'],
        he_IL: ['בחר מקור'],
        hu_HU: 'Select source',
        id_ID: ['Pilih sumber'],
        it: ['Seleziona fonte'],
        ja: ['情報源を選択'],
        ko: ['자료 선택'],
        ms_MY: ['Pilih sumber'],
        nl_NL: 'Select source',
        pl: ['Wybierz źródło'],
        pt: ['Selecionar fonte'],
        ro: 'Select source',
        ru: ['Выбрать источник'],
        sv: ['Välj källa'],
        th: ['เลือกแหล่งที่มา'],
        tr: ['Kaynak seç'],
        vi: ['Chọn nguồn'],
        zh: ['选择来源'],
        zh_TW: ['選擇來源'],
      }
    },
    89053: (e) => {
      e.exports = {
        ar: ['رمز'],
        ca_ES: ['Símbol'],
        cs: 'Symbol',
        de: 'Symbol',
        el: ['Σύμβολο'],
        en: 'Symbol',
        es: ['Símbolo'],
        fa: ['نماد'],
        fr: ['Symbole'],
        he_IL: ['סימול'],
        hu_HU: ['Szimbólum'],
        id_ID: ['Simbol'],
        it: ['Simbolo'],
        ja: ['シンボル'],
        ko: ['심볼'],
        ms_MY: ['Simbol'],
        nl_NL: ['Symbool'],
        pl: 'Symbol',
        pt: ['Símbolo'],
        ro: 'Symbol',
        ru: ['Инструмент'],
        sv: 'Symbol',
        th: ['สัญลักษณ์'],
        tr: ['Sembol'],
        vi: ['Mã'],
        zh: ['商品代码'],
        zh_TW: ['商品代碼'],
      }
    },
    48490: (e) => {
      e.exports = {
        ar: ['الرمز والوصف'],
        ca_ES: ['Símbol i descripció'],
        cs: 'Symbol & description',
        de: ['Symbol & Beschreibung'],
        el: 'Symbol & description',
        en: 'Symbol & description',
        es: ['Símbolo y descripción'],
        fa: 'Symbol & description',
        fr: ['Symbole & description'],
        he_IL: ['סימול ותיאור'],
        hu_HU: 'Symbol & description',
        id_ID: ['Simbol & deskripsi'],
        it: ['Simbolo e descrizione'],
        ja: ['シンボル & 詳細'],
        ko: ['심볼 & 설명'],
        ms_MY: ['Simbol & penjelasan'],
        nl_NL: 'Symbol & description',
        pl: ['Symbol i opis'],
        pt: ['Símbolo & descrição'],
        ro: 'Symbol & description',
        ru: ['Инструмент и описание'],
        sv: ['Symbol & beskrivning'],
        th: ['สัญลักษณ์และคำอธิบาย'],
        tr: ['Sembol ve açıklama'],
        vi: ['Mã giao dịch & mô tả'],
        zh: ['商品和描述'],
        zh_TW: ['商品&描述'],
      }
    },
    75905: (e) => {
      e.exports = {
        ar: ['بحث عن الرموز'],
        ca_ES: ['Cerca de símbols'],
        cs: 'Symbol Search',
        de: ['Symbol Suche'],
        el: 'Symbol Search',
        en: 'Symbol Search',
        es: ['Búsqueda de símbolos'],
        fa: 'Symbol Search',
        fr: ['Recherche de symbole'],
        he_IL: ['חיפוש סימולים'],
        hu_HU: 'Symbol Search',
        id_ID: ['Pencarian Simbol'],
        it: ['Ricerca simbolo'],
        ja: ['シンボル検索'],
        ko: ['심볼 찾기'],
        ms_MY: ['Cari simbol'],
        nl_NL: 'Symbol Search',
        pl: ['Wyszukiwanie symboli'],
        pt: ['Pesquisa de Símbolo'],
        ro: 'Symbol Search',
        ru: ['Поиск инструментов'],
        sv: ['Symbolsök'],
        th: ['ค้นหาตัวย่อ'],
        tr: ['Sembol Arama'],
        vi: ['Tìm kiếm Mã giao dịch'],
        zh: ['商品代码搜索'],
        zh_TW: ['商品搜尋'],
      }
    },
    12629: (e) => {
      e.exports = {
        ar: ['السلع'],
        ca_ES: 'commodity',
        cs: 'commodity',
        de: ['Rohstoff'],
        el: 'commodity',
        en: 'commodity',
        es: ['materia prima'],
        fa: 'commodity',
        fr: ['produit de base'],
        he_IL: ['סחורה'],
        hu_HU: 'commodity',
        id_ID: ['komiditas'],
        it: ['materia prima'],
        ja: ['コモディティ'],
        ko: ['상품'],
        ms_MY: ['komoditi'],
        nl_NL: 'commodity',
        pl: ['towar'],
        pt: 'commodity',
        ro: 'commodity',
        ru: ['товары'],
        sv: ['Råvaror'],
        th: ['คอมมอดิตี้'],
        tr: ['Emtia'],
        vi: ['hàng hóa'],
        zh: ['商品'],
        zh_TW: ['商品'],
      }
    },
    87592: (e) => {
      e.exports = {
        ar: ['عقود الفروقات'],
        ca_ES: 'cfd',
        cs: 'cfd',
        de: 'cfd',
        el: 'cfd',
        en: 'cfd',
        es: 'cfd',
        fa: 'cfd',
        fr: 'cfd',
        he_IL: ['חוזה הפרשים cfd'],
        hu_HU: 'cfd',
        id_ID: 'cfd',
        it: 'cfd',
        ja: ['CFD'],
        ko: ['씨에프디'],
        ms_MY: 'cfd',
        nl_NL: 'cfd',
        pl: 'cfd',
        pt: 'cfd',
        ro: 'cfd',
        ru: 'cfd',
        sv: 'cfd',
        th: 'cfd',
        tr: 'cfd',
        vi: 'cfd',
        zh: ['差价合约'],
        zh_TW: 'cfd',
      }
    },
    8448: (e) => {
      e.exports = {
        ar: ['العملات الرقمية'],
        ca_ES: ['cripto'],
        cs: 'crypto',
        de: 'crypto',
        el: 'crypto',
        en: 'crypto',
        es: ['cripto'],
        fa: 'crypto',
        fr: 'crypto',
        he_IL: ['קריפטו'],
        hu_HU: ['kripto'],
        id_ID: 'crypto',
        it: ['cripto'],
        ja: ['暗号'],
        ko: ['크립토'],
        ms_MY: ['kripto'],
        nl_NL: 'crypto',
        pl: ['krypto'],
        pt: ['Cripto'],
        ro: 'crypto',
        ru: ['криптовалюты'],
        sv: ['krypto'],
        th: ['คริปโต'],
        tr: ['kripto'],
        vi: ['tiền điện tử'],
        zh: ['加密'],
        zh_TW: 'crypto',
      }
    },
    67245: (e) => {
      e.exports = {
        ar: ['إيصال إيداع'],
        ca_ES: 'dr',
        cs: 'dr',
        de: 'dr',
        el: 'dr',
        en: 'dr',
        es: 'dr',
        fa: 'dr',
        fr: 'dr',
        he_IL: 'dr',
        hu_HU: 'dr',
        id_ID: 'dr',
        it: 'dr',
        ja: ['預託証券'],
        ko: 'dr',
        ms_MY: 'dr',
        nl_NL: 'dr',
        pl: ['Potwierdzenie wpłaty'],
        pt: 'dr',
        ro: 'dr',
        ru: ['Депоз. расписки'],
        sv: 'dr',
        th: 'dr',
        tr: 'dr',
        vi: 'dr',
        zh: 'dr',
        zh_TW: 'dr',
      }
    },
    88720: (e) => {
      e.exports = {
        ar: ['اقتصاد'],
        ca_ES: ['economia'],
        cs: 'economy',
        de: ['Wirtschaft'],
        el: 'economy',
        en: 'economy',
        es: ['economía'],
        fa: 'economy',
        fr: ['économie'],
        he_IL: ['כַּלְכָּלָה'],
        hu_HU: 'economy',
        id_ID: ['ekonomi'],
        it: ['economia'],
        ja: ['経済指標'],
        ko: ['경제'],
        ms_MY: ['ekonomi'],
        nl_NL: 'economy',
        pl: ['gospodarka'],
        pt: ['economia'],
        ro: 'economy',
        ru: ['экономические данные'],
        sv: ['ekonomi'],
        th: ['เศรษฐกิจ'],
        tr: ['ekonomi'],
        vi: ['kinh tế'],
        zh: ['经济'],
        zh_TW: ['經濟'],
      }
    },
    39512: (e) => {
      e.exports = {
        ar: ['فوركس'],
        ca_ES: ['Forex'],
        cs: 'forex',
        de: ['Devisen'],
        el: 'forex',
        en: 'forex',
        es: ['Forex'],
        fa: 'forex',
        fr: ['Forex'],
        he_IL: ['מט"ח'],
        hu_HU: 'forex',
        id_ID: 'forex',
        it: 'forex',
        ja: ['FX'],
        ko: ['외환'],
        ms_MY: 'forex',
        nl_NL: 'forex',
        pl: 'forex',
        pt: 'forex',
        ro: 'forex',
        ru: ['форекс'],
        sv: ['valutor'],
        th: ['ฟอเร็กซ์'],
        tr: ['döviz'],
        vi: 'forex',
        zh: ['外汇'],
        zh_TW: ['外匯'],
      }
    },
    81859: (e) => {
      e.exports = {
        ar: ['العقود الآجلة'],
        ca_ES: ['futurs'],
        cs: 'futures',
        de: ['Futures'],
        el: 'futures',
        en: 'futures',
        es: ['futuros'],
        fa: 'futures',
        fr: 'futures',
        he_IL: ['חוזים עתידיים'],
        hu_HU: 'futures',
        id_ID: ['kontrak berjangka'],
        it: ['future'],
        ja: ['先物'],
        ko: ['퓨쳐스'],
        ms_MY: ['pasaran hadapan'],
        nl_NL: 'futures',
        pl: ['Kontrakty terminowe'],
        pt: ['futuros'],
        ro: 'futures',
        ru: ['фьючерсы'],
        sv: ['terminer'],
        th: ['ฟิวเจอร์ส'],
        tr: ['vadeli'],
        vi: ['hợp đồng tương lai'],
        zh: ['期货'],
        zh_TW: ['期貨'],
      }
    },
    12754: (e) => {
      e.exports = {
        ar: ['مؤشر'],
        ca_ES: ['índex'],
        cs: 'index',
        de: ['Index'],
        el: 'index',
        en: 'index',
        es: ['índice'],
        fa: 'index',
        fr: ['indice'],
        he_IL: ['מדד'],
        hu_HU: 'index',
        id_ID: ['indeks'],
        it: ['indice'],
        ja: ['指数'],
        ko: ['지수'],
        ms_MY: ['indeks'],
        nl_NL: 'index',
        pl: ['indeks'],
        pt: ['índice'],
        ro: 'index',
        ru: ['индексы'],
        sv: 'index',
        th: ['ดัชนี'],
        tr: ['endeks'],
        vi: ['chỉ số'],
        zh: ['指数'],
        zh_TW: ['指數'],
      }
    },
    60804: (e) => {
      e.exports = {
        ar: ['المؤشرات'],
        ca_ES: 'indices',
        cs: 'indices',
        de: ['Indizes'],
        el: 'indices',
        en: 'indices',
        es: ['índices'],
        fa: 'indices',
        fr: 'indices',
        he_IL: ['מדדים'],
        hu_HU: 'indices',
        id_ID: ['indeks'],
        it: ['Indici'],
        ja: ['指数'],
        ko: ['지수'],
        ms_MY: ['indeks'],
        nl_NL: ['indexen'],
        pl: ['indeksy'],
        pt: ['índices'],
        ro: 'indices',
        ru: ['индексы'],
        sv: ['index'],
        th: ['ดัชนี'],
        tr: ['endeks'],
        vi: ['các chỉ báo'],
        zh: ['指数'],
        zh_TW: ['指數'],
      }
    },
    36931: (e) => {
      e.exports = {
        ar: ['سهم'],
        ca_ES: ['accions'],
        cs: 'stock',
        de: ['Aktie'],
        el: 'stock',
        en: 'stock',
        es: ['acciones'],
        fa: 'stock',
        fr: 'stock',
        he_IL: ['מניה'],
        hu_HU: 'stock',
        id_ID: ['saham'],
        it: ['azione'],
        ja: ['株式'],
        ko: ['스탁'],
        ms_MY: ['saham'],
        nl_NL: 'stock',
        pl: ['akcja'],
        pt: ['ação'],
        ro: 'stock',
        ru: ['акция'],
        sv: ['aktier'],
        th: ['หุ้น'],
        tr: ['hisse'],
        vi: ['cổ phiếu'],
        zh: ['股票'],
        zh_TW: ['股票'],
      }
    },
  },
])
