;(() => {
  'use strict'
  var e,
    a,
    c,
    d,
    f,
    b = {},
    t = {}
  function r(e) {
    var a = t[e]
    if (void 0 !== a) return a.exports
    var c = (t[e] = { id: e, loaded: !1, exports: {} })
    return b[e].call(c.exports, c, c.exports, r), (c.loaded = !0), c.exports
  }
  ;(r.m = b),
    (r.c = t),
    (e = []),
    (r.O = (a, c, d, f) => {
      if (!c) {
        var b = 1 / 0
        for (i = 0; i < e.length; i++) {
          for (var [c, d, f] = e[i], t = !0, o = 0; o < c.length; o++)
            (!1 & f || b >= f) && Object.keys(r.O).every((e) => r.O[e](c[o]))
              ? c.splice(o--, 1)
              : ((t = !1), f < b && (b = f))
          if (t) {
            e.splice(i--, 1)
            var n = d()
            void 0 !== n && (a = n)
          }
        }
        return a
      }
      f = f || 0
      for (var i = e.length; i > 0 && e[i - 1][2] > f; i--) e[i] = e[i - 1]
      e[i] = [c, d, f]
    }),
    (r.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e
      return r.d(a, { a }), a
    }),
    (c = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (r.t = function (e, d) {
      if ((1 & d && (e = this(e)), 8 & d)) return e
      if ('object' == typeof e && e) {
        if (4 & d && e.__esModule) return e
        if (16 & d && 'function' == typeof e.then) return e
      }
      var f = Object.create(null)
      r.r(f)
      var b = {}
      a = a || [null, c({}), c([]), c(c)]
      for (var t = 2 & d && e; 'object' == typeof t && !~a.indexOf(t); t = c(t))
        Object.getOwnPropertyNames(t).forEach((a) => (b[a] = () => e[a]))
      return (b.default = () => e), r.d(f, b), f
    }),
    (r.d = (e, a) => {
      for (var c in a)
        r.o(a, c) &&
          !r.o(e, c) &&
          Object.defineProperty(e, c, { enumerable: !0, get: a[c] })
    }),
    (r.f = {}),
    (r.e = (e) =>
      Promise.all(Object.keys(r.f).reduce((a, c) => (r.f[c](e, a), a), []))),
    (r.u = (e) =>
      5652 === e
        ? '__LANG__.5652.afa01acb54a69426de69.js'
        : 2427 === e
          ? '__LANG__.2427.9e75295442d2edc53485.js'
          : 77 === e
            ? '__LANG__.77.99662205014782bfbe4a.js'
            : 6196 === e
              ? '__LANG__.6196.1cb6c0cf4b3c1139a67d.js'
              : 9871 === e
                ? '__LANG__.9871.80491970c40a96588ffd.js'
                : 7201 === e
                  ? '__LANG__.7201.d9e269cc77c4bebf986c.js'
                  : 3753 === e
                    ? '__LANG__.3753.453e4c91d1197ef94e09.js'
                    : 2521 === e
                      ? '__LANG__.2521.8eba2dc07079697338fc.js'
                      : 8884 === e
                        ? '__LANG__.8884.377844211bfc698fda75.js'
                        : 2684 === e
                          ? '__LANG__.2684.89c78924594078c4eeb0.js'
                          : ({
                              92: 'chart-screenshot-hint',
                              139: 'get-error-card',
                              507: 'study-pane-views',
                              607: 'study-property-pages-with-definitions',
                              731: 'add-compare-dialog',
                              1583: 'lt-pane-views',
                              1584: 'context-menu-renderer',
                              1702: 'manage-drawings-dialog',
                              1754: 'symbol-search-dialog',
                              1859: 'go-to-date-dialog-impl',
                              1890: 'line-tools-icons',
                              2077: 'change-interval-dialog',
                              2183: 'study-inputs-pane-views',
                              2306: 'floating-toolbars',
                              2377: 'hammerjs',
                              2616: 'svg-renderer',
                              2704: 'currency-label-menu',
                              2878: 'drawing-toolbar',
                              3005: 'header-toolbar',
                              3030: 'new-confirm-inputs-dialog',
                              3596: 'general-property-page',
                              4013: 'custom-intervals-add-dialog',
                              4079: 'series-pane-views',
                              4389: 'take-chart-image-impl',
                              4665: 'share-chart-to-social-utils',
                              4862: 'object-tree-dialog',
                              5009: 'load-chart-dialog',
                              5093: 'chart-widget-gui',
                              5516: 'restricted-toolset',
                              5551: 'favorite-drawings-api',
                              5598: 'lt-stickers-atlas',
                              6166: 'chart-event-hint',
                              6265: 'new-edit-object-dialog',
                              6456: 'study-market',
                              6631: 'study-template-dialog',
                              6780: 'source-properties-editor',
                              7078: 'general-chart-properties-dialog',
                              7260: 'chart-bottom-toolbar',
                              7271: 'compare-model',
                              7648: 'show-theme-save-dialog',
                              7987: 'lt-icons-atlas',
                              8020: 'user-defined-bars-marks-tooltip',
                              8537: 'lt-property-pages-with-definitions',
                              8643: 'full-tooltips-popup',
                              8890: 'simple-dialog',
                              9039: 'lollipop-tooltip-renderer',
                              9374: 'symbol-info-dialog-impl',
                              9498: 'export-data',
                              9685: 'series-icons-map',
                            }[e] || e) +
                            '.' +
                            {
                              6: 'a03a8ff024d47ed075c6',
                              92: 'bfb76cc7578ab709169b',
                              139: '02c0064b96893d572f7c',
                              306: '6c2d5d0bc3a42274d1e6',
                              507: 'ed33f2a0cf4f0d37ca70',
                              524: '2b350163c328ac8dce2e',
                              607: '8ba8754a2a9412395338',
                              731: 'f9dfb2d8c088196803c5',
                              769: 'ed387b8b1bd93b7c0b7e',
                              855: '61db310932f8af2c5989',
                              898: 'b63568700f1380e37b1a',
                              962: 'e2eb6a85de39a3d76e5d',
                              1013: 'ccba7f12442264960551',
                              1033: 'bb804c64fe58de0bace7',
                              1044: 'c0b266912178dd5523e1',
                              1054: 'c09e1aa220385adef79a',
                              1109: '845f0f111ff830ab93c8',
                              1365: 'e1fe1d66c5bb17da7c3a',
                              1553: 'c076714f5e24887f0b94',
                              1583: '9222abe1a9c6cc59d449',
                              1584: '429d5a2ad09b6791326c',
                              1702: '3f5b604134bebba28c6c',
                              1754: '33210ecad56124f25ac1',
                              1762: '9511e5b410d7d629bc49',
                              1803: '5799aa316db71b2f13e5',
                              1859: '60e0dfd6053265c37f63',
                              1890: '8b313f77ea6c1f51530a',
                              2020: '5b2c075133de85a92a00',
                              2077: '53c155e0d72b7d0f0e3d',
                              2109: '291fa715b6ded706c3dd',
                              2183: 'a80a3e282aa441e156d1',
                              2191: '2197cc1b66a1db8969cc',
                              2260: '95dc0a20b147b6b2eeed',
                              2306: '34e58852bb8c3a9adff8',
                              2377: '6e30e0c48af40bf2f6c0',
                              2587: '615babc52637decdb6e2',
                              2616: 'f065beaf6b5b37da27d9',
                              2639: 'a55d77a7912be54f7b9d',
                              2666: 'd28c0fa0a323b8118f22',
                              2676: 'a9a5ede4d514162164fa',
                              2704: '204b39f70fe35b79b049',
                              2731: '55eed17fefac5e82c077',
                              2878: '017ba93cd41a5c6638fd',
                              3005: '4299a771d5d92b59d861',
                              3016: 'a208448f3cc9c2faa231',
                              3030: 'dbb4bdcbf10acf6b5280',
                              3066: '8b1d2ceb22d9fedde67b',
                              3179: 'b87763465b433e5b66fd',
                              3291: 'f260c9805e8664fe86e1',
                              3502: '1985af3fa836c4248178',
                              3596: 'ca806447f87d03e5b322',
                              3610: 'c79c6bddd919cb78428a',
                              3717: '6f65e91a870250a6e450',
                              3842: '8758110ab553b5368121',
                              3843: 'a164a0c54147f1b0f34e',
                              3889: 'c5a6834243c3ccfc1fcb',
                              3896: '14d9e7509c300245c219',
                              3939: '2ee1e71dbe0bc0d85625',
                              3980: '9d7eeb2bacce45c508b3',
                              3986: 'aee89bf9b2348c0d0d7f',
                              4013: '530b63cb8c8b77a81d47',
                              4015: '9b6607a6f543f077c5a5',
                              4062: '9229fac3ef3db26fd5bc',
                              4079: '97a8e6dbe1a94532eb49',
                              4215: '8934b190aaed2663c300',
                              4378: 'a2a37780b99d50d784f7',
                              4387: 'b928c72ea82decd4ae7b',
                              4389: 'c0ec40f417c36a1c6179',
                              4403: 'fc4cac3ecee3925b9ec2',
                              4665: 'd7331dbca4a2aa0909e7',
                              4713: '365b703a3ce33b603ace',
                              4717: 'ff71583495773a86dd1b',
                              4862: 'f0f5697ff5a7cde39c47',
                              4894: '035fecc664874bb752b0',
                              4987: 'a23484dfcca6d5fae195',
                              5009: '5caa982f19f2103862f6',
                              5093: '3b90190b27680e589439',
                              5145: 'da831552b3b54ca47682',
                              5163: '953e65e04ed31b0ea0b3',
                              5166: '979eb8cba5281ffcb38b',
                              5403: 'a8ce3bbae4ddbe632714',
                              5516: '63a8261f0c902623b57f',
                              5551: '340e60e2342b0d93ebe7',
                              5598: '52ad6e6d7d7b134ab0ba',
                              5649: '5c1e55c9dad604880876',
                              5711: '17ff8f0322d7ffb8cabe',
                              5866: '039e25226b82968cca61',
                              5871: '1571b33c7b086a73eadd',
                              5899: '610e274e70fffca8c232',
                              5901: 'b074e295a11d37d7243b',
                              5993: '0e5f49179c6a516963de',
                              6025: 'd669a0315da9d6fda6b3',
                              6036: '5b373caaaa6e1ba4495f',
                              6106: '1d31df88e63bf542ea7b',
                              6166: '8b7dc7926d170fc11eac',
                              6214: '5a578175aab923a979dc',
                              6221: '56c4d15c823c019ddb39',
                              6265: '59756c2933ec24d194f0',
                              6456: '0a2edcb934de49437577',
                              6494: '7f264af8142cb9910c06',
                              6625: '364cf21fe24d7e675de8',
                              6631: '98a316b14a620a429192',
                              6639: 'a1bd5bf1d51c681561a1',
                              6752: '912872ffa56a7243d664',
                              6780: '36857414f568c0fc82b2',
                              6831: '912351c7cf5f8ac16dfe',
                              6884: '07642217627127113fb0',
                              6925: '665969c4af4481df0691',
                              6949: 'f50051a55eaa8dd5e780',
                              6959: '61ce9bf171293ea37c54',
                              7078: '4e9724b14f5dcf6923c2',
                              7111: '4716f3208dc337521c10',
                              7149: 'd450e8145ad7e6fbd67f',
                              7194: '098c1a8da1ddbbda98f6',
                              7232: 'abf9ba18c92e46a44f3b',
                              7260: '25497674c364b33c2599',
                              7271: '1c3f95ada81fc7c425a4',
                              7350: 'aa555ff9e17c4029aedd',
                              7391: 'c63bd39c42093cc4130c',
                              7413: '3a52b91975b98e6fe8e4',
                              7555: 'ea682716c26bc13db765',
                              7648: '01216b3cb4ad5a3c77f4',
                              7871: 'df6a9177c293c0c53e80',
                              7987: '2267a50d874703af7f28',
                              8020: '520f315000510aab3003',
                              8056: 'c06a1c8fb4a1f18cf217',
                              8115: 'aef220eae07f8df278f7',
                              8149: '9fb525d10e5c8ba95701',
                              8167: 'fd915cf05676c668486e',
                              8321: '1106a1be5eb0efa1fbfa',
                              8385: '32e961c4a8591abe04cd',
                              8399: 'ebb97a8311b57f015b11',
                              8537: '168b8df16f57900a29da',
                              8643: '71b6b063699eb3e1407e',
                              8890: '9d651e36d783aafef499',
                              8904: '87e94e93ade13962a48f',
                              9039: '0a3f1b99d355b6297d18',
                              9138: 'f516266ddcf6ca8c7064',
                              9322: 'fcbf1e7bff530c95a44f',
                              9327: '0c38440ca52f144413ac',
                              9374: '4660d2cad62644ff2ea9',
                              9498: '3892fbd90646aa80aef1',
                              9685: '6b7b2f52a18274053c99',
                              9727: '97af4991457cce9f6c62',
                              9789: '458feb5c8c0263b0618b',
                              9795: '2d6cc9343b34223a551b',
                              9842: '581808dd4a8651b16779',
                              9916: '0c2cb2d12479a20efce1',
                            }[e] +
                            '.js'),
    (r.miniCssF = (e) =>
      e +
      '.' +
      {
        6: '362fa6a7ab1f3e3b06c4',
        524: 'ef662c4bc3e57dd91171',
        855: '26e8cce3ad082b02cc26',
        898: 'f909d7c1efc95f635922',
        1013: '01583b91f7384f25e038',
        1033: '5197f9f8b8500206d06c',
        1054: 'd5b8033c360af91ed458',
        1109: 'ec16a629917db2baf412',
        1365: '0116666d16b5bc64c47a',
        1762: '7ff6b353c441db2276da',
        1803: 'd4e74e1d1b3b8dd5cf2b',
        2109: '39627406fe95483ff7db',
        2191: '6563d97efc3339a1e518',
        2260: 'b98824e4829a1aa9b444',
        2587: '1f1100dc01693edfe269',
        2639: 'c87f745c32020e3a8cff',
        2666: 'fbb750fd312778403036',
        2676: '2d3cabbd39a3b0d6e9ea',
        2731: 'df45c9c18811872fec07',
        3066: '2acb4b086c32c9448837',
        3502: 'c49903f7222870ff8aca',
        3610: '62c553543d76c38edfbc',
        3717: 'da244b56f00e05470918',
        3842: '6a8a7842ee841f6d2cff',
        3843: 'f5d90040192528c9391b',
        3889: 'a2646d6c3b33d166eee2',
        3896: '019229d7d874e1da11be',
        3939: '4d0187960a564ff5a557',
        3980: 'b2ff45a2d8bb6a131d7c',
        4015: '1d0e3a62a59d173c81f3',
        4215: 'd24836a292b1969ab4bb',
        4387: '5c4d8173fa4f7c40b528',
        4894: 'cc39b3740f4022cbd5cf',
        4987: '861f49973c19dc84365b',
        5145: 'a2b224fd27ab2941c565',
        5163: '8dc3fd2d8bb68b7d880e',
        5166: 'a12c50ad6225ca6de843',
        5403: 'd6bd43a35209059f1060',
        5649: 'b60ed09c5ea8c55827d4',
        5866: 'c89b7fc29afe92efc1f3',
        5993: 'd3e96a56dd65b0b2db55',
        6025: '263b457b1a7f9ca139b2',
        6036: '3b493a9f0ab052e6447c',
        6106: 'cf6f129517250c80b39f',
        6214: '65b7dbf8be6cca5ac143',
        6221: '25d30f095d6a54fbf276',
        6494: 'e9af15c073886bef781b',
        6625: 'cd54dd2a77c47eb6003d',
        6639: 'cea47dbe77ae73ace44b',
        6752: '207eb3cc75b3ed2c6754',
        6831: 'ac1745947bd2665f6c9a',
        6884: 'bb7d30a7bbbe5af36556',
        6925: '43e91cba4f1aefba5311',
        6949: '19355e81a60b640ea097',
        6959: '0cd4b06da6b4fd1fcc56',
        7111: 'b16b4eb739a7e8577559',
        7149: '12adbb19fdefe9b66b18',
        7194: 'e04f69c8933166966874',
        7232: 'dfa17050a6458c8bf3da',
        7350: '00632eec360f0cf2d9a0',
        7391: '9c809fa91ed0c8f75bc0',
        7413: 'f830ad1ad6ee6f9b1cb3',
        7555: '8c1e3939e7666b0f8c69',
        7871: 'fff454908cba03863eb7',
        8056: 'a83d512c1dc2173349a1',
        8149: '21f2b01074a4d082e268',
        8399: '525ea48565b11d84e370',
        8904: 'a302177fe7e3ccd50cb0',
        9138: '03b8fbcfabcae851949a',
        9322: 'beec29aa1b9aa9601ccf',
        9327: '209b21b1c7a9733ae8ab',
        9789: 'cb5ad20bc727d3820b6c',
        9842: '2f8e5864b0d72a886373',
        9916: '60c48148a54dba9504a0',
      }[e] +
      '.css'),
    (r.g = (function () {
      if ('object' == typeof globalThis) return globalThis
      try {
        return this || new Function('return this')()
      } catch (e) {
        if ('object' == typeof window) return window
      }
    })()),
    (r.hmd = (e) => (
      (e = Object.create(e)).children || (e.children = []),
      Object.defineProperty(e, 'exports', {
        enumerable: !0,
        set: () => {
          throw new Error(
            'ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' +
              e.id,
          )
        },
      }),
      e
    )),
    (r.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
    (d = {}),
    (f = 'tradingview:'),
    (r.l = (e, a, c, b) => {
      if (d[e]) d[e].push(a)
      else {
        var t, o
        if (void 0 !== c)
          for (
            var n = document.getElementsByTagName('script'), i = 0;
            i < n.length;
            i++
          ) {
            var s = n[i]
            if (
              s.getAttribute('src') == e ||
              s.getAttribute('data-webpack') == f + c
            ) {
              t = s
              break
            }
          }
        t ||
          ((o = !0),
          ((t = document.createElement('script')).charset = 'utf-8'),
          (t.timeout = 120),
          r.nc && t.setAttribute('nonce', r.nc),
          t.setAttribute('data-webpack', f + c),
          (t.src = e),
          0 !== t.src.indexOf(window.location.origin + '/') &&
            (t.crossOrigin = 'anonymous')),
          (d[e] = [a])
        var l = (a, c) => {
            ;(t.onerror = t.onload = null), clearTimeout(u)
            var f = d[e]
            if (
              (delete d[e],
              t.parentNode && t.parentNode.removeChild(t),
              f && f.forEach((e) => e(c)),
              a)
            )
              return a(c)
          },
          u = setTimeout(
            l.bind(null, void 0, { type: 'timeout', target: t }),
            12e4,
          )
        ;(t.onerror = l.bind(null, t.onerror)),
          (t.onload = l.bind(null, t.onload)),
          o && document.head.appendChild(t)
      }
    }),
    (r.r = (e) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (r.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      var e
      r.g.importScripts && (e = r.g.location + '')
      var a = r.g.document
      if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
        var c = a.getElementsByTagName('script')
        c.length && (e = c[c.length - 1].src)
      }
      if (!e)
        throw new Error('Automatic publicPath is not supported in this browser')
      ;(e = e
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (r.p = e)
    })(),
    r.g.location &&
      r.p.startsWith(r.g.location.origin) &&
      (r.p = r.p.slice(r.g.location.origin.length)),
    (() => {
      const e = r.u
      r.u = (a) => e(a).replace('__LANG__', r.g.language)
    })(),
    (r.p = r.g.WEBPACK_PUBLIC_PATH || r.p)
  var o = r.e,
    n = Object.create(null)
  function i(e, a) {
    return o(e).catch(function () {
      return new Promise(function (c) {
        var d = function () {
          self.removeEventListener('online', d, !1),
            !1 === navigator.onLine
              ? self.addEventListener('online', d, !1)
              : c(a < 2 ? i(e, a + 1) : o(e))
        }
        setTimeout(d, a * a * 1e3)
      })
    })
  }
  ;(r.e = function (e) {
    if (!n[e]) {
      n[e] = i(e, 0)
      var a = function () {
        delete n[e]
      }
      n[e].then(a, a)
    }
    return n[e]
  }),
    (() => {
      if ('undefined' != typeof document) {
        var e = (e) =>
            new Promise((a, c) => {
              var d = r.miniCssF(e),
                f = r.p + d
              if (
                ((e, a) => {
                  for (
                    var c = document.getElementsByTagName('link'), d = 0;
                    d < c.length;
                    d++
                  ) {
                    var f =
                      (t = c[d]).getAttribute('data-href') ||
                      t.getAttribute('href')
                    if ('stylesheet' === t.rel && (f === e || f === a)) return t
                  }
                  var b = document.getElementsByTagName('style')
                  for (d = 0; d < b.length; d++) {
                    var t
                    if (
                      (f = (t = b[d]).getAttribute('data-href')) === e ||
                      f === a
                    )
                      return t
                  }
                })(d, f)
              )
                return a()
              ;((e, a, c, d, f) => {
                var b = document.createElement('link')
                ;(b.rel = 'stylesheet'),
                  (b.type = 'text/css'),
                  (b.onerror = b.onload =
                    (c) => {
                      if (((b.onerror = b.onload = null), 'load' === c.type))
                        d()
                      else {
                        var t = c && ('load' === c.type ? 'missing' : c.type),
                          r = (c && c.target && c.target.href) || a,
                          o = new Error(
                            'Loading CSS chunk ' + e + ' failed.\n(' + r + ')',
                          )
                        ;(o.code = 'CSS_CHUNK_LOAD_FAILED'),
                          (o.type = t),
                          (o.request = r),
                          b.parentNode && b.parentNode.removeChild(b),
                          f(o)
                      }
                    }),
                  (b.href = a),
                  0 !== b.href.indexOf(window.location.origin + '/') &&
                    (b.crossOrigin = 'anonymous'),
                  c
                    ? c.parentNode.insertBefore(b, c.nextSibling)
                    : document.head.appendChild(b)
              })(e, f, null, a, c)
            }),
          a = { 3666: 0 }
        r.f.miniCss = (c, d) => {
          a[c]
            ? d.push(a[c])
            : 0 !== a[c] &&
              {
                6: 1,
                524: 1,
                855: 1,
                898: 1,
                1013: 1,
                1033: 1,
                1054: 1,
                1109: 1,
                1365: 1,
                1762: 1,
                1803: 1,
                2109: 1,
                2191: 1,
                2260: 1,
                2587: 1,
                2639: 1,
                2666: 1,
                2676: 1,
                2731: 1,
                3066: 1,
                3502: 1,
                3610: 1,
                3717: 1,
                3842: 1,
                3843: 1,
                3889: 1,
                3896: 1,
                3939: 1,
                3980: 1,
                4015: 1,
                4215: 1,
                4387: 1,
                4894: 1,
                4987: 1,
                5145: 1,
                5163: 1,
                5166: 1,
                5403: 1,
                5649: 1,
                5866: 1,
                5993: 1,
                6025: 1,
                6036: 1,
                6106: 1,
                6214: 1,
                6221: 1,
                6494: 1,
                6625: 1,
                6639: 1,
                6752: 1,
                6831: 1,
                6884: 1,
                6925: 1,
                6949: 1,
                6959: 1,
                7111: 1,
                7149: 1,
                7194: 1,
                7232: 1,
                7350: 1,
                7391: 1,
                7413: 1,
                7555: 1,
                7871: 1,
                8056: 1,
                8149: 1,
                8399: 1,
                8904: 1,
                9138: 1,
                9322: 1,
                9327: 1,
                9789: 1,
                9842: 1,
                9916: 1,
              }[c] &&
              d.push(
                (a[c] = e(c).then(
                  () => {
                    a[c] = 0
                  },
                  (e) => {
                    throw (delete a[c], e)
                  },
                )),
              )
        }
      }
    })(),
    (() => {
      var e = { 3666: 0, 3515: 0 }
      ;(r.f.j = (a, c) => {
        var d = r.o(e, a) ? e[a] : void 0
        if (0 !== d)
          if (d) c.push(d[2])
          else if (
            /^(1(0(13|33|54)|109|365|762|803)|2(6(39|66|76)|109|191|260|587|731)|3(8(42|43|89|96)|[06]66|502|515|610|717|939|980)|4([02]15|[39]87|894)|5(1(45|63|66)|24|403|649|866|993)|6(9(25|49|59)|[06]25|(21|49|88)4||036|106|221|639|752|831)|7(1(11|49|94)|232|350|391|413|555|871)|8(056|149|399|55|904|98)|9(32[27]|138|789|842|916))$/.test(
              a,
            )
          )
            e[a] = 0
          else {
            var f = new Promise((c, f) => (d = e[a] = [c, f]))
            c.push((d[2] = f))
            var b = r.p + r.u(a),
              t = new Error()
            r.l(
              b,
              (c) => {
                if (r.o(e, a) && (0 !== (d = e[a]) && (e[a] = void 0), d)) {
                  var f = c && ('load' === c.type ? 'missing' : c.type),
                    b = c && c.target && c.target.src
                  ;(t.message =
                    'Loading chunk ' + a + ' failed.\n(' + f + ': ' + b + ')'),
                    (t.name = 'ChunkLoadError'),
                    (t.type = f),
                    (t.request = b),
                    d[1](t)
                }
              },
              'chunk-' + a,
              a,
            )
          }
      }),
        (r.O.j = (a) => 0 === e[a])
      var a = (a, c) => {
          var d,
            f,
            [b, t, o] = c,
            n = 0
          if (b.some((a) => 0 !== e[a])) {
            for (d in t) r.o(t, d) && (r.m[d] = t[d])
            if (o) var i = o(r)
          }
          for (a && a(c); n < b.length; n++)
            (f = b[n]), r.o(e, f) && e[f] && e[f][0](), (e[f] = 0)
          return r.O(i)
        },
        c = (self.webpackChunktradingview = self.webpackChunktradingview || [])
      c.forEach(a.bind(null, 0)), (c.push = a.bind(null, c.push.bind(c)))
    })(),
    (() => {
      const { miniCssF: e } = r
      r.miniCssF = (a) =>
        self.document && 'rtl' === self.document.dir
          ? e(a).replace(/\.css$/, '.rtl.css')
          : e(a)
    })()
})()
