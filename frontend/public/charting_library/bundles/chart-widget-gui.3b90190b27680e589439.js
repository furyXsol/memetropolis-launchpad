;(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [5093],
  {
    27267: (e, t, s) => {
      'use strict'
      function i(e, t, s, i, l) {
        function o(l) {
          if (e > l.timeStamp) return
          const o = l.target
          void 0 !== s &&
            null !== t &&
            null !== o &&
            o.ownerDocument === i &&
            (t.contains(o) || s(l))
        }
        return (
          l.click && i.addEventListener('click', o, !1),
          l.mouseDown && i.addEventListener('mousedown', o, !1),
          l.touchEnd && i.addEventListener('touchend', o, !1),
          l.touchStart && i.addEventListener('touchstart', o, !1),
          () => {
            i.removeEventListener('click', o, !1),
              i.removeEventListener('mousedown', o, !1),
              i.removeEventListener('touchend', o, !1),
              i.removeEventListener('touchstart', o, !1)
          }
        )
      }
      s.d(t, { addOutsideEventListener: () => i })
    },
    967: (e, t, s) => {
      'use strict'
      s.d(t, { weekDaysMiniNames: () => a, weekDaysShortNames: () => o })
      var i = s(44352),
        l = s(84917)
      l.Months.JANUARY,
        i.t(null, void 0, s(26910)),
        l.Months.FEBRUARY,
        i.t(null, void 0, s(16467)),
        l.Months.MARCH,
        i.t(null, void 0, s(84675)),
        l.Months.APRIL,
        i.t(null, void 0, s(97637)),
        l.Months.MAY,
        i.t(null, void 0, s(68327)),
        l.Months.JUNE,
        i.t(null, void 0, s(49385)),
        l.Months.JULY,
        i.t(null, void 0, s(23230)),
        l.Months.AUGUST,
        i.t(null, void 0, s(86797)),
        l.Months.SEPTEMBER,
        i.t(null, void 0, s(61132)),
        l.Months.OCTOBER,
        i.t(null, void 0, s(90784)),
        l.Months.NOVEMBER,
        i.t(null, void 0, s(71194)),
        l.Months.DECEMBER,
        i.t(null, void 0, s(55669)),
        l.Months.JANUARY,
        i.t(null, void 0, s(95425)),
        l.Months.FEBRUARY,
        i.t(null, void 0, s(35050)),
        l.Months.MARCH,
        i.t(null, void 0, s(51369)),
        l.Months.APRIL,
        i.t(null, void 0, s(42762)),
        l.Months.MAY,
        i.t(null, { context: 'short' }, s(27991)),
        l.Months.JUNE,
        i.t(null, void 0, s(15224)),
        l.Months.JULY,
        i.t(null, void 0, s(6215)),
        l.Months.AUGUST,
        i.t(null, void 0, s(38465)),
        l.Months.SEPTEMBER,
        i.t(null, void 0, s(57902)),
        l.Months.OCTOBER,
        i.t(null, void 0, s(73546)),
        l.Months.NOVEMBER,
        i.t(null, void 0, s(71230)),
        l.Months.DECEMBER,
        i.t(null, void 0, s(92203)),
        l.WeekDays.SUNDAY,
        i.t(null, void 0, s(72149)),
        l.WeekDays.MONDAY,
        i.t(null, void 0, s(61199)),
        l.WeekDays.TUESDAY,
        i.t(null, void 0, s(44979)),
        l.WeekDays.WEDNESDAY,
        i.t(null, void 0, s(7147)),
        l.WeekDays.THURSDAY,
        i.t(null, void 0, s(7951)),
        l.WeekDays.FRIDAY,
        i.t(null, void 0, s(72970)),
        l.WeekDays.SATURDAY,
        i.t(null, void 0, s(1144))
      const o = {
          [l.WeekDays.SUNDAY]: i.t(null, void 0, s(86577)),
          [l.WeekDays.MONDAY]: i.t(null, void 0, s(83085)),
          [l.WeekDays.TUESDAY]: i.t(null, void 0, s(94316)),
          [l.WeekDays.WEDNESDAY]: i.t(null, void 0, s(75094)),
          [l.WeekDays.THURSDAY]: i.t(null, void 0, s(9787)),
          [l.WeekDays.FRIDAY]: i.t(null, void 0, s(564)),
          [l.WeekDays.SATURDAY]: i.t(null, void 0, s(36835)),
        },
        a = {
          [l.WeekDays.SUNDAY]: i.t(null, { context: 'day_of_week' }, s(85954)),
          [l.WeekDays.MONDAY]: i.t(null, { context: 'day_of_week' }, s(11268)),
          [l.WeekDays.TUESDAY]: i.t(null, { context: 'day_of_week' }, s(31533)),
          [l.WeekDays.WEDNESDAY]: i.t(
            null,
            { context: 'day_of_week' },
            s(26230),
          ),
          [l.WeekDays.THURSDAY]: i.t(
            null,
            { context: 'day_of_week' },
            s(24793),
          ),
          [l.WeekDays.FRIDAY]: i.t(null, { context: 'day_of_week' }, s(19801)),
          [l.WeekDays.SATURDAY]: i.t(
            null,
            { context: 'day_of_week' },
            s(63331),
          ),
        }
    },
    76266: (e, t, s) => {
      'use strict'
      var i = s(11417).TVLocalStorage,
        l = s(57898).Delegate
      s(49483)
      var o = new l()
      ;(TradingView.FeatureToggle = {
        force_prefix: 'forcefeaturetoggle.',
        onChanged: new l(),
        enableFeature: function (e) {
          i.setItem(this.force_prefix + e, 'true'), o.fire(e)
        },
        disableFeature: function (e) {
          i.setItem(this.force_prefix + e, 'false'), o.fire(e)
        },
        resetFeature: function (e) {
          i.removeItem(this.force_prefix + e), o.fire(e)
        },
        onFeaturesStateChanged: function () {
          return o
        },
      }),
        (TradingView.isFeatureEnabled = (function (e) {
          var t = 'featuretoggle_seed'
          function s(e) {
            try {
              var s = undefined(
                e +
                  (function () {
                    if (window.user && window.user.id) return window.user.id
                    var e = i.getItem(t)
                    return (
                      null !== e ||
                        ((e = Math.floor(1e6 * Math.random())),
                        i.setItem(t, e)),
                      e
                    )
                  })(),
              )
              return new DataView(s).getUint32(0, !0) / 4294967296
            } catch (e) {
              return 0.5
            }
          }
          return function (t) {
            return (
              !(
                'local' !== window.environment ||
                !(function (e) {
                  var t = [
                      'skip_navigation_on_chart',
                      'tick_intervals',
                      'show_reset_chart_only_if_required',
                      'broker_FXCM_token_v2',
                      'broker_TRADESTATION',
                      'broker_TRADOVATE_dev',
                      'black_friday_mainpage',
                      'black_friday_popup',
                      'datawindow',
                      'trading-fast-renew-oauth-token',
                      'switching_year_to_month_disabled',
                      'default_year_billing_cycle_switcher',
                      'marketing-analytics',
                      'visible_address_fields_by_default',
                      'slow-support-warning',
                      'hide-trading-floating-toolbar',
                      'save-short-streams',
                      'details_disable_bid_ask',
                      'vat_disabled',
                      'pro_plan_upgrades_disabled',
                      'pro_plan_downgrades_disabled',
                      'disable_recaptcha_on_signup',
                      'braintree-gopro-in-order-dialog',
                      'braintree-apple-pay',
                      'braintree-apple-pay-trial',
                      'braintree-3ds-enabled',
                      'trial_increased_monthly_discounts',
                      'razorpay-card-tvcoins',
                      'razorpay-card-subscriptions',
                      'razorpay-upi-tvcoins',
                      'razorpay-upi-subscriptions',
                      'razorpay-use-recurring-billing-scheduler',
                      'hide_gopro_popup_upgrade_button',
                      'tradestation_use_sync_mapper',
                      'broker_id_session',
                      'remove_line_tools_from_content',
                      'disable_retry_load_linetools_from_storage',
                      'modular_broker_use_sync_mapper',
                      'do_not_save_shared_line_tools_to_charts',
                      'save_shared_line_tools',
                      'multichart_replay',
                      'chart_storage_with_broker_name',
                      'oanda-european-accounts-warning',
                      'mobile_show_bottom_panel',
                      'disable_save_settings',
                      'desktop_version_notification_enabled',
                      'favorites-in-broker-dropdown',
                      'enable_toggle_streams_rtmp_url',
                      'hide_ecomonic_events',
                      'mobile_trading_web',
                      'mobile_trading_ios',
                      'mobile_trading_android',
                      'hide_real_brokers_on_mobile',
                      'disable_tradestation_country_block',
                      'enable_trading_server_logger',
                      'hide_ranges_label_colors',
                      'disable_user_specific_encryption',
                      'minds_widget_enabled',
                      'collapse_pane_buttons_when_connected_to_broker',
                      'enable_new_execution_style',
                      'disable_pushstream_connections_for_anonymous_users',
                      'use_new_paper_status_mapping',
                      'use_staging_verifier',
                      'fxcm_fcl_api',
                      'ally_use_new_sso_url',
                      'ibkr_use_new_init_session_api',
                      'enable_eventsource_pushstream_transport',
                      'enable_eventsource_pushstream_mobile',
                      'ftx_request_server_logger',
                      'ibkr_request_server_logger',
                      'disallow_concurrent_sessions',
                      'check_ibkr_side_maintenance',
                      'tradestation_request_server_logger',
                      'trading_request_server_logger',
                      'hide_tweet_drawingtool',
                      'RU_SF_disable',
                      'RU_VOR_disable',
                      'enable_monaco_editor',
                      'enable_import_inlay_hints',
                      'enable_pine_editor_status_bar',
                      'enable_pine_logs',
                      'enable_pine_editor_full_source_ids',
                      'enable_new_custom_public_chats',
                      'bottom_panel_track_events',
                      'continuous_front_contract_trading',
                      'vertex-tax-included',
                      'enable_place_order_context_in_instant_mode',
                      'multiple_SoS',
                      'enable_edit_order_context_in_instant_mode',
                      'show_data_problems_in_help_center',
                      'chart_storage_hibernation_delay_60min',
                      'chart_storage_hibernation_delay_10min',
                      'chart_storage_hibernation_delay_5min',
                      'widget-sheriff',
                      'enable_sign_in_popup_with_evercookie',
                      'center_alignment_replay_position',
                      'start_replay_right_after_point_selection',
                      'switching_raf_toast',
                      'trade_button',
                      'order_type_specific_settings_saving',
                      'enable_share_idea_via_twitter',
                      'hide_position_trade_value',
                      'alerts-restrict-offline-clear-requests',
                      'alerts-logos-in-widgets',
                      'enable_qty_calculator_in_replay',
                      'alerts-widgets-use-facade',
                      'alerts-facade-use-permission-proxy',
                      'forexcom_session_v2',
                      'add_financials_for_symbols',
                      'hide_percent_bottom_toolbar',
                      'hide_log_bottom_toolbar',
                      'hide_auto_bottom_toolbar',
                      'remove_lines_submenu',
                      'new_idea_publish_page',
                      'new_script_publish_page',
                      'enable_logo_in_mobile_apps',
                      'show_symbol_logo_in_legend',
                      'fxcm_fcl_server_logger',
                      'minds_comments_enable_for_free_users',
                      'ibkr_new_book_trader_api',
                      'alerts-hide-widget-filters-by-type',
                    ],
                    s = '[A-Z]+[a-zA-Z0-9_]+',
                    i = new RegExp(`broker_${s}_dev`, 'g'),
                    l = new RegExp(`hide_${s}_on_ios`, 'g'),
                    o = new RegExp(`hide_${s}_on_android`, 'g'),
                    a = new RegExp(`hide_${s}_on_mobile_web`, 'g')
                  return (
                    -1 === t.indexOf(e) &&
                    -1 === e.indexOf('-maintenance') &&
                    !1 === i.test(e) &&
                    !1 === l.test(e) &&
                    !1 === o.test(e) &&
                    !1 === a.test(e)
                  )
                })(t)
              ) ||
              ((!e[t] || -1 !== e[t]) &&
                (!!(
                  'true' ===
                    i.getItem(TradingView.FeatureToggle.force_prefix + t) ||
                  (window.is_authenticated &&
                    'undefined' != typeof user &&
                    user.settings &&
                    'true' ===
                      user.settings[TradingView.FeatureToggle.force_prefix + t])
                ) ||
                  (!(
                    'false' ===
                      i.getItem(TradingView.FeatureToggle.force_prefix + t) ||
                    (window.is_authenticated &&
                      'undefined' != typeof user &&
                      user.settings &&
                      'false' ===
                        user.settings[
                          TradingView.FeatureToggle.force_prefix + t
                        ])
                  ) &&
                    !!e[t] &&
                    (1 === e[t] || s(t) <= e[t]))))
            )
          }
        })(window.featureToggleState || {})),
        TradingView.FeatureToggle,
        TradingView.isFeatureEnabled,
        TradingView.FeatureToggle.onFeaturesStateChanged.bind(
          TradingView.FeatureToggle,
        )
    },
    36279: (e, t, s) => {
      'use strict'
      var i
      s.d(t, { LogoSize: () => i, getLogoUrlResolver: () => a }),
        (function (e) {
          ;(e[(e.Medium = 0)] = 'Medium'), (e[(e.Large = 1)] = 'Large')
        })(i || (i = {}))
      class l {
        getSymbolLogoUrl(e) {
          return e
        }
        getCountryFlagUrl() {
          return ''
        }
        getCryptoLogoUrl(e) {
          return e
        }
        getProviderLogoUrl(e) {
          return e
        }
      }
      let o
      function a() {
        return o || (o = new l()), o
      }
    },
    82708: (e, t, s) => {
      'use strict'
      s.d(t, { safeShortName: () => l })
      var i = s(79982)
      function l(e) {
        try {
          return (0, i.shortName)(e)
        } catch (t) {
          return e
        }
      }
    },
    93251: (e, t, s) => {
      'use strict'
      s.d(t, {
        removeUsdFromCryptoPairLogos: () => a,
        resolveLogoUrls: () => o,
      })
      var i = s(36279)
      const l = (0, i.getLogoUrlResolver)()
      function o(e, t = i.LogoSize.Medium) {
        const s = e.logoid,
          o = e['base-currency-logoid'],
          a = e['currency-logoid'],
          n = s && l.getSymbolLogoUrl(s, t)
        if (n) return [n]
        const r = o && l.getSymbolLogoUrl(o, t),
          d = a && l.getSymbolLogoUrl(a, t)
        return r && d ? [r, d] : r ? [r] : d ? [d] : []
      }
      function a(e) {
        return 2 !== e.length
          ? e
          : (function (e) {
                return e.some((e) => n(e))
              })(e) &&
              !(function (e) {
                return e.some((e) => e.includes('country') && !n(e))
              })(e)
            ? e.filter((e) => !n(e))
            : e
      }
      function n(e) {
        return !1
      }
    },
    44747: (e, t, s) => {
      'use strict'
      s.d(t, { getBlockStyleClasses: () => l, getLogoStyleClasses: () => o })
      var i = s(97754)
      function l(e, t) {
        return i('tv-circle-logo-pair', `tv-circle-logo-pair--${e}`, t)
      }
      function o(e, t) {
        return i(
          'tv-circle-logo-pair__logo',
          `tv-circle-logo-pair__logo--${e}`,
          !t && 'tv-circle-logo-pair__logo-empty',
        )
      }
    },
    58492: (e, t, s) => {
      'use strict'
      s.d(t, { getStyleClasses: () => l, isCircleLogoWithUrlProps: () => o })
      var i = s(97754)
      function l(e, t) {
        return i('tv-circle-logo', `tv-circle-logo--${e}`, t)
      }
      function o(e) {
        return 'logoUrl' in e && void 0 !== e.logoUrl && 0 !== e.logoUrl.length
      }
    },
    77975: (e, t, s) => {
      'use strict'
      s.d(t, { useWatchedValueReadonly: () => l })
      var i = s(50959)
      const l = (e, t = !1) => {
        const s = 'watchedValue' in e ? e.watchedValue : void 0,
          l = 'defaultValue' in e ? e.defaultValue : e.watchedValue.value(),
          [o, a] = (0, i.useState)(s ? s.value() : l)
        return (
          (t ? i.useLayoutEffect : i.useEffect)(() => {
            if (s) {
              a(s.value())
              const e = (e) => a(e)
              return s.subscribe(e), () => s.unsubscribe(e)
            }
            return () => {}
          }, [s]),
          o
        )
      }
    },
    23709: (e) => {
      e.exports = {}
    },
    83314: (e) => {
      e.exports = {
        wrapper: 'wrapper-hPiAkrn3',
        timezone: 'timezone-hPiAkrn3',
        sessionDayWrapper: 'sessionDayWrapper-hPiAkrn3',
        nowWrapper: 'nowWrapper-hPiAkrn3',
        now: 'now-hPiAkrn3',
        sessionDay: 'sessionDay-hPiAkrn3',
        weekDay: 'weekDay-hPiAkrn3',
        sessionDaySegments: 'sessionDaySegments-hPiAkrn3',
        timeMarkWrapper: 'timeMarkWrapper-hPiAkrn3',
        timeMarkSegment: 'timeMarkSegment-hPiAkrn3',
        timeMark: 'timeMark-hPiAkrn3',
        timeMarkSegmentAlignByEnds: 'timeMarkSegmentAlignByEnds-hPiAkrn3',
        segment: 'segment-hPiAkrn3',
        small: 'small-hPiAkrn3',
        start: 'start-hPiAkrn3',
        end: 'end-hPiAkrn3',
        active: 'active-hPiAkrn3',
        green: 'green-hPiAkrn3',
        orange: 'orange-hPiAkrn3',
        blue: 'blue-hPiAkrn3',
        gray: 'gray-hPiAkrn3',
        tooltip: 'tooltip-hPiAkrn3',
        time: 'time-hPiAkrn3',
      }
    },
    77539: (e) => {
      e.exports = {
        marginlegendhoriz: '4px',
        legend: 'legend-l31H9iuA',
        item: 'item-l31H9iuA',
        withAction: 'withAction-l31H9iuA',
        selected: 'selected-l31H9iuA',
        last: 'last-l31H9iuA',
        text: 'text-l31H9iuA',
        noWrapWrapper: 'noWrapWrapper-l31H9iuA',
        noWrap: 'noWrap-l31H9iuA',
        series: 'series-l31H9iuA',
        valuesAdditionalWrapper: 'valuesAdditionalWrapper-l31H9iuA',
        valueItem: 'valueItem-l31H9iuA',
        valueTitle: 'valueTitle-l31H9iuA',
        valueValue: 'valueValue-l31H9iuA',
        hideUniportantValueItems: 'hideUniportantValueItems-l31H9iuA',
        unimportant: 'unimportant-l31H9iuA',
        valuesWrapper: 'valuesWrapper-l31H9iuA',
        wrappable: 'wrappable-l31H9iuA',
        directionColumn: 'directionColumn-l31H9iuA',
        titleWrapper: 'titleWrapper-l31H9iuA',
        logoAndTitlesWrapper: 'logoAndTitlesWrapper-l31H9iuA',
        button: 'button-l31H9iuA',
        statusesWrapper: 'statusesWrapper-l31H9iuA',
        logoWrapper: 'logoWrapper-l31H9iuA',
        buttonsWrapper: 'buttonsWrapper-l31H9iuA',
        buttons: 'buttons-l31H9iuA',
        statusesWrapper__statuses: 'statusesWrapper__statuses-l31H9iuA',
        pairContainer: 'pairContainer-l31H9iuA',
        logo: 'logo-l31H9iuA',
        hidden: 'hidden-l31H9iuA',
        noActions: 'noActions-l31H9iuA',
        title: 'title-l31H9iuA',
        intervalTitle: 'intervalTitle-l31H9iuA',
        disabled: 'disabled-l31H9iuA',
        disabledOnInterval: 'disabledOnInterval-l31H9iuA',
        withDot: 'withDot-l31H9iuA',
        withCustomTextColor: 'withCustomTextColor-l31H9iuA',
        study: 'study-l31H9iuA',
        mainTitle: 'mainTitle-l31H9iuA',
        descTitle: 'descTitle-l31H9iuA',
        hideValues: 'hideValues-l31H9iuA',
        has5Buttons: 'has5Buttons-l31H9iuA',
        stayInHoveredMode: 'stayInHoveredMode-l31H9iuA',
        withTail: 'withTail-l31H9iuA',
        loading: 'loading-l31H9iuA',
        loader: 'loader-l31H9iuA',
        providerTitle: 'providerTitle-l31H9iuA',
        exchangeTitle: 'exchangeTitle-l31H9iuA',
        styleTitle: 'styleTitle-l31H9iuA',
        minHideIntervalTitle: 'minHideIntervalTitle-l31H9iuA',
        microHideIntervalTitle: 'microHideIntervalTitle-l31H9iuA',
        hideExchangeProviderTitles: 'hideExchangeProviderTitles-l31H9iuA',
        flagged: 'flagged-l31H9iuA',
        medium: 'medium-l31H9iuA',
        minimized: 'minimized-l31H9iuA',
        micro: 'micro-l31H9iuA',
        linked: 'linked-l31H9iuA',
        onlyOneButtonCanBeStick: 'onlyOneButtonCanBeStick-l31H9iuA',
        touchMode: 'touchMode-l31H9iuA',
        buttonIcon: 'buttonIcon-l31H9iuA',
        flag: 'flag-l31H9iuA',
        invisibleHover: 'invisibleHover-l31H9iuA',
        eye: 'eye-l31H9iuA',
        eyeLoading: 'eyeLoading-l31H9iuA',
        'eye-animation': 'eye-animation-l31H9iuA',
        linking: 'linking-l31H9iuA',
        intervalEye: 'intervalEye-l31H9iuA',
        markerContainer: 'markerContainer-l31H9iuA',
        flagWrapper: 'flagWrapper-l31H9iuA',
        sourcesWrapper: 'sourcesWrapper-l31H9iuA',
        legendMainSourceWrapper: 'legendMainSourceWrapper-l31H9iuA',
        sources: 'sources-l31H9iuA',
        toggler: 'toggler-l31H9iuA pane-button-e6PF69Df',
        onlyOneSourceShown: 'onlyOneSourceShown-l31H9iuA',
        counter: 'counter-l31H9iuA',
        iconArrow: 'iconArrow-l31H9iuA',
        objectTree: 'objectTree-l31H9iuA',
        closed: 'closed-l31H9iuA',
        objectsTreeCanBeShown: 'objectsTreeCanBeShown-l31H9iuA',
      }
    },
    34362: (e) => {
      e.exports = {
        loader: 'loader-_7n3rLPY',
        loaderItem: 'loaderItem-_7n3rLPY',
        'loader-animation': 'loader-animation-_7n3rLPY',
        touchMode: 'touchMode-_7n3rLPY',
      }
    },
    94815: (e) => {
      e.exports = {
        'css-value-pane-controls-padding-left': '1px',
        'css-value-pane-controls-padding-right': '4px',
        css_value_pane_controls_margin_top: '4',
        css_value_pane_controls_button_size: '22',
        css_value_pane_controls_button_touch_size: '22',
        paneControls: 'paneControls-JQv8nO8e',
        hidden: 'hidden-JQv8nO8e',
        forceHidden: 'forceHidden-JQv8nO8e',
        button: 'button-JQv8nO8e pane-button-e6PF69Df',
        buttonIcon: 'buttonIcon-JQv8nO8e',
        minimize: 'minimize-JQv8nO8e',
        restore: 'restore-JQv8nO8e',
        newButton: 'newButton-JQv8nO8e',
        touchMode: 'touchMode-JQv8nO8e',
        maximize: 'maximize-JQv8nO8e',
        collapse: 'collapse-JQv8nO8e',
        'maximize-animation-up-bracket':
          'maximize-animation-up-bracket-JQv8nO8e',
        'maximize-animation-down-bracket':
          'maximize-animation-down-bracket-JQv8nO8e',
        'minimize-animation-up-bracket':
          'minimize-animation-up-bracket-JQv8nO8e',
        'minimize-animation-down-bracket':
          'minimize-animation-down-bracket-JQv8nO8e',
        up: 'up-JQv8nO8e',
        'up-animation': 'up-animation-JQv8nO8e',
        down: 'down-JQv8nO8e',
        'down-animation': 'down-animation-JQv8nO8e',
        buttonsWrapper: 'buttonsWrapper-JQv8nO8e',
      }
    },
    7488: (e) => {
      e.exports = {
        blockHidden: 'blockHidden-e6PF69Df',
        'pane-button': 'pane-button-e6PF69Df',
      }
    },
    64123: (e) => {
      e.exports = {
        'css-value-small-size': '18px',
        'css-value-medium-size': '22px',
        'css-value-large-size': '28px',
        'css-value-border-radius-small-size': '9px',
        'css-value-border-radius-medium-size': '11px',
        'css-value-border-radius-large-size': '8px',
        statuses: 'statuses-Lgtz1OtS',
        statusItem: 'statusItem-Lgtz1OtS',
        statuses_hidden: 'statuses_hidden-Lgtz1OtS',
        small: 'small-Lgtz1OtS',
        medium: 'medium-Lgtz1OtS',
        large: 'large-Lgtz1OtS',
        blinking: 'blinking-Lgtz1OtS',
        'blinking-animation': 'blinking-animation-Lgtz1OtS',
        marketStatusOpen: 'marketStatusOpen-Lgtz1OtS',
        marketStatusClose: 'marketStatusClose-Lgtz1OtS',
        marketStatusPre: 'marketStatusPre-Lgtz1OtS',
        marketStatusPost: 'marketStatusPost-Lgtz1OtS',
        marketStatusHoliday: 'marketStatusHoliday-Lgtz1OtS',
        marketStatusExpired: 'marketStatusExpired-Lgtz1OtS',
        marketStatusCustom: 'marketStatusCustom-Lgtz1OtS',
        invalidSymbol: 'invalidSymbol-Lgtz1OtS',
        replayModeAutoPlay: 'replayModeAutoPlay-Lgtz1OtS',
        replayModePause: 'replayModePause-Lgtz1OtS',
        replayModePointSelect: 'replayModePointSelect-Lgtz1OtS',
        'blinking-animation-custom': 'blinking-animation-custom-Lgtz1OtS',
        notAccurate: 'notAccurate-Lgtz1OtS',
        delay: 'delay-Lgtz1OtS',
        eod: 'eod-Lgtz1OtS',
        dataProblemHigh: 'dataProblemHigh-Lgtz1OtS',
        dataProblemLow: 'dataProblemLow-Lgtz1OtS',
      }
    },
    33283: (e, t, s) => {
      'use strict'
      s.r(t), s.d(t, { ControlBarNavigation: () => Y })
      var i = s(50151),
        l = s(44352),
        o = s(32563),
        a = s(14483),
        n = s(78159),
        r = s(38223),
        d = s(70027),
        u = s(61814),
        h = s(49483),
        c = s(68335),
        _ = (s(51768), s(23317)),
        p = s(89612),
        m = s(77576),
        g = s(93724),
        v = s(91986),
        b = s(76996),
        w = s(78529),
        y = s(50119),
        S = s(62884),
        f = s(50662),
        M = s(42205)
      s(23709)
      const C = (0, c.humanReadableModifiers)(c.Modifiers.Alt, !1),
        E = (0, c.humanReadableModifiers)(c.Modifiers.Shift, !1),
        V = (0, c.humanReadableModifiers)(c.Modifiers.Mod, !1),
        k = (0, u.hotKeySerialize)({ keys: [C, 'R'], text: '{0} + {1}' }),
        A = (0, u.hotKeySerialize)({
          keys: [C, 'Click', C, 'Enter'],
          text: '{0} + {1}, {2} + {3}',
        }),
        L = (0, u.hotKeySerialize)({ keys: [y], text: '{0}' }),
        W = (0, u.hotKeySerialize)({ keys: [S], text: '{0}' }),
        T = (0, u.hotKeySerialize)({ keys: [V, f], text: '{0} + {1}' }),
        x = (0, u.hotKeySerialize)({ keys: [V, M], text: '{0} + {1}' }),
        H = (0, u.hotKeySerialize)({
          keys: [C, E, S],
          text: '{0} + {1} + {2}',
        }),
        D = l.t(null, void 0, s(47602)),
        P = l.t(null, void 0, s(61311)),
        B = l.t(null, void 0, s(56470)),
        I = l.t(null, void 0, s(48293)),
        z = l.t(null, void 0, s(40653)),
        N = l.t(null, void 0, s(35809)),
        O = l.t(null, void 0, s(34301)),
        F = l.t(null, void 0, s(26721)),
        R = `<div class="control-bar-wrapper">\n\t<div class="control-bar control-bar--hidden">\n\t\t<div class="control-bar__group js-btn-group js-btn-group-zoom">\n\t\t\t<div class="control-bar__btn control-bar__btn--zoom-out apply-common-tooltip" title="${D}" data-tooltip-hotkey="${x}">\n\t\t\t\t${_}\n\t\t\t</div>\n\t\t\t<div class="control-bar__btn control-bar__btn--zoom-in apply-common-tooltip" title="${P}" data-tooltip-hotkey="${T}">\n\t\t\t\t${m}\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="control-bar__group js-btn-group js-btn-group-maximize">\n\t\t\t<div class="control-bar__btn control-bar__btn--maximize apply-common-tooltip" title="${B}" data-tooltip-hotkey="${A}">\n\t\t\t\t${v}\n\t\t\t</div>\n\t\t\t<div class="control-bar__btn control-bar__btn--minimize js-hidden apply-common-tooltip" title="${I}" data-tooltip-hotkey="${A}">\n\t\t\t\t${b}\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="control-bar__group js-btn-group js-btn-group-scroll">\n\t\t\t<div class="control-bar__btn control-bar__btn--move-left apply-common-tooltip" title="${z}" data-tooltip-hotkey="${L}">\n\t\t\t\t${p}\n\t\t\t</div>\n\t\t\t<div class="control-bar__btn control-bar__btn--move-right apply-common-tooltip" title="${N}" data-tooltip-hotkey="${W}">\n\t\t\t\t${p}\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="control-bar__group js-btn-group js-btn-group-reset-scale">\n\t\t\t<div class="control-bar__btn control-bar__btn--turn-button control-bar__btn--btn-hidden apply-common-tooltip js-btn-reset" title="${O}" data-tooltip-hotkey="${k}">\n\t\t\t\t${g}\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>`,
        U = `<div class="control-bar control-bar__btn control-bar__btn--back-present control-bar__btn--btn-hidden apply-common-tooltip" title="${F}" data-tooltip-hotkey="${H}">\n\t${w}\n</div>`,
        G = h.CheckMobile.any(),
        $ = 'control-bar__btn--btn-hidden',
        j = {
          zoomInOut: !0,
          maximize: !0,
          scrollLeftRight: !0,
          resetScale: !0,
          goToRealtime: !0,
        }
      class Y {
        constructor(e, t, s) {
          ;(this._widget = (0, i.ensureNotNull)(
            (0, d.parseHtml)(R).querySelector('.control-bar-wrapper'),
          )),
            (this._controlBar = (0, i.ensureNotNull)(
              this._widget.querySelector('.control-bar'),
            )),
            (this._back = (0, i.ensureNotNull)(
              (0, d.parseHtml)(U).querySelector(
                '.control-bar__btn--back-present',
              ),
            )),
            (this._btnGroups = Array.from(
              this._controlBar.querySelectorAll('.js-btn-group'),
            )),
            (this._backButtonVisible = !1),
            (this._boundMouseHandler = null),
            (this._chartModel = null),
            (this._checkIntervalId = 0),
            (this._controlBarVisible = !1),
            (this._priceAxisChanged = null),
            (this._resetScalesAvailable = null),
            (this._priceAxisName = 'right'),
            (this._rafId = 0),
            (this._visibilityTypeProperty = null),
            (this._boundUpdateMaximizeButtonsVisibility =
              this._updateMaximizeButtonsVisibility.bind(this)),
            (this._boundToggleFullscreenButtons =
              this._toggleFullscreenButtons.bind(this)),
            (this._paneWidth = 0),
            (this._leftPriceScaleWidth = 0),
            (this._rightPriceScaleWidth = 0),
            (this._chart = e),
            (this._parent = t),
            (this._options = Object.assign({}, j, s)),
            (this._visibilityPrioritizedGroups = this._initGroupDescriptions()),
            this._init(),
            this._initHandlers(),
            this.updatePosition()
        }
        destroy() {
          var e
          null !== this._visibilityTypeProperty &&
            (this._visibilityTypeProperty.unsubscribe(
              this,
              this._onVisibilityTypeChange,
            ),
            (this._visibilityTypeProperty = null)),
            null !== this._boundMouseHandler &&
              (this._parent.removeEventListener(
                'mousemove',
                this._boundMouseHandler,
                !1,
              ),
              this._parent.removeEventListener(
                'mouseleave',
                this._boundMouseHandler,
                !1,
              ),
              (this._boundMouseHandler = null)),
            null !== this._priceAxisChanged &&
              (this._priceAxisChanged.unsubscribe(
                this,
                this._updateBackBtnPosition,
              ),
              (this._priceAxisChanged = null)),
            clearInterval(this._checkIntervalId),
            null === (e = this._resetScalesAvailable) ||
              void 0 === e ||
              e.destroy()
          const t = this._chart.getResizerDetacher()
          t.fullscreenable.unsubscribe(
            this._boundUpdateMaximizeButtonsVisibility,
          ),
            t.fullscreen.unsubscribe(this._boundToggleFullscreenButtons),
            (this._chart = null)
        }
        updatePosition() {
          const e = this._chart.paneWidgets()
          if (0 === e.length) return
          ;(this._paneWidth = e[0].width()),
            (this._leftPriceScaleWidth =
              this._chart.getPriceAxisMaxWidthByName('left')),
            (this._rightPriceScaleWidth =
              this._chart.getPriceAxisMaxWidthByName('right'))
          const t = this._chart.timeAxisHeight() + this._bottomMargin()
          ;(this._widget.style.bottom = `${t}px`),
            (this._back.style.bottom = `${t}px`),
            this._updateBtnGroupVisibility()
        }
        _bottomMargin() {
          var e
          const t = this._chart.paneWidgets()
          return (null !== (e = this._chart.maximizedPaneWidget()) &&
          void 0 !== e
            ? e
            : t[t.length - 1]
          ).containsMainSeries()
            ? 32
            : 5
        }
        _init() {
          if (h.CheckMobile.any())
            for (const e of this._btnGroups) e.classList.add('js-hidden')
          ;(this._buttons = {
            zoomIn: this._widget.querySelector('.control-bar__btn--zoom-in'),
            zoomOut: this._widget.querySelector('.control-bar__btn--zoom-out'),
            moveLeft: this._widget.querySelector(
              '.control-bar__btn--move-left',
            ),
            moveRight: this._widget.querySelector(
              '.control-bar__btn--move-right',
            ),
            turn: this._widget.querySelector('.control-bar__btn--turn-button'),
            maximize: this._widget.querySelector('.control-bar__btn--maximize'),
            minimize: this._widget.querySelector('.control-bar__btn--minimize'),
          }),
            this._initVisibility(),
            this._parent.appendChild(this._widget),
            this._parent.appendChild(this._back),
            (this._backButtonVisible = !1),
            (this._priceAxisName = (0, r.isRtl)() ? 'left' : 'right'),
            this._chart.withModel(this, () => {
              ;(this._chartModel = this._chart.model()),
                (this._priceAxisChanged =
                  this._chart.getPriceAxisWidthChangedByName(
                    this._priceAxisName,
                  )),
                this._priceAxisChanged.subscribe(
                  this,
                  this._updateBackBtnPosition,
                ),
                (this._resetScalesAvailable = this._chartModel
                  .model()
                  .resetScalesAvailable()
                  .spawn()),
                this._resetScalesAvailable.subscribe(
                  this._updateResetScalesButtonVisibility.bind(this),
                  { callWithLast: !0 },
                )
              const e = this._chart.getResizerDetacher()
              e.fullscreenable.subscribe(
                this._boundUpdateMaximizeButtonsVisibility,
              ),
                e.fullscreen.subscribe(this._boundToggleFullscreenButtons),
                this._updateMaximizeButtonsVisibility(),
                this._updateBackBtnPosition(),
                this._back.addEventListener('click', () => {
                  null !== this._chartModel &&
                    this._chartModel.timeScale().scrollToRealtime(!0)
                }),
                (this._checkIntervalId = setInterval(() => this._check(), 1e3))
            })
        }
        _initHandlers() {
          const e = o.mobiletouch ? 'touchstart' : 'mousedown',
            t = o.mobiletouch ? ['touchend'] : ['mouseup', 'mouseout']
          this._buttons.moveLeft.addEventListener(e, (e) => {
            e.preventDefault(),
              this._chart.scrollHelper().moveByBar(1),
              this._trackEvent('Move Left')
          }),
            this._buttons.moveRight.addEventListener(e, (e) => {
              e.preventDefault(),
                this._chart.scrollHelper().moveByBar(-1),
                this._trackEvent('Move Right')
            })
          for (const e of t)
            this._buttons.moveLeft.addEventListener(e, () =>
              this._chart.scrollHelper().stopMoveByBar(),
            ),
              this._buttons.moveRight.addEventListener(e, () =>
                this._chart.scrollHelper().stopMoveByBar(),
              )
          this._buttons.turn.addEventListener('click', (e) => {
            e.preventDefault(),
              this._chart.GUIResetScales(),
              this._trackEvent('Reset to Default Settings')
          }),
            this._buttons.zoomOut.addEventListener('click', (e) => {
              e.preventDefault(),
                null !== this._chartModel && this._chartModel.zoomOut(),
                this._trackEvent('Zoom Out')
            }),
            this._buttons.zoomIn.addEventListener('click', (e) => {
              e.preventDefault(),
                null !== this._chartModel && this._chartModel.zoomIn(),
                this._trackEvent('Zoom In')
            }),
            this._buttons.maximize.addEventListener('click', (e) => {
              e.preventDefault(),
                this._chart.setActive(!0),
                this._chart.getResizerDetacher().requestFullscreen(),
                this._trackEvent(' Maximize Chart')
            }),
            this._buttons.minimize.addEventListener('click', (e) => {
              e.preventDefault(),
                this._chart.getResizerDetacher().exitFullscreen(),
                this._trackEvent(' Restore Chart')
            })
          const s = (e) =>
            e.addEventListener('contextmenu', (e) => e.preventDefault())
          s(this._buttons.moveLeft),
            s(this._buttons.moveRight),
            s(this._buttons.turn),
            s(this._buttons.zoomOut),
            s(this._buttons.zoomIn),
            s(this._buttons.minimize),
            s(this._buttons.maximize)
        }
        _initGroupDescriptions() {
          return [
            {
              shouldBeHiddenOnMobile: !1,
              available: this._isMaximizeButtonAvailable.bind(this),
              className: 'js-btn-group-maximize',
              element: this._getBtnGroup('js-btn-group-maximize'),
              totalWidth: 50,
            },
            {
              shouldBeHiddenOnMobile: !1,
              available: () => this._options.resetScale,
              className: 'js-btn-group-reset-scale',
              element: this._getBtnGroup('js-btn-group-reset-scale'),
              totalWidth: 50,
            },
            {
              shouldBeHiddenOnMobile: !a.enabled(
                'show_zoom_and_move_buttons_on_touch',
              ),
              available: () => this._options.zoomInOut,
              className: 'js-btn-group-zoom',
              element: this._getBtnGroup('js-btn-group-zoom'),
              totalWidth: 86,
            },
            {
              shouldBeHiddenOnMobile: !a.enabled(
                'show_zoom_and_move_buttons_on_touch',
              ),
              available: () => this._options.scrollLeftRight,
              className: 'js-btn-group-scroll',
              element: this._getBtnGroup('js-btn-group-scroll'),
              totalWidth: 86,
            },
          ]
        }
        _check() {
          if (null === this._chartModel || !this._options.goToRealtime) return
          const e = this._chartModel.timeScale().rightOffset() < 0
          e !== this._backButtonVisible &&
            ((this._backButtonVisible = e),
            this._back.classList.toggle($, !this._backButtonVisible))
        }
        _initVisibility() {
          ;(this._visibilityTypeProperty = (0, n.actualBehavior)()),
            this._visibilityTypeProperty.subscribe(
              this,
              this._onVisibilityTypeChange,
            ),
            this._onVisibilityTypeChange()
        }
        _onVisibilityTypeChange() {
          if (null === this._visibilityTypeProperty) return
          const e = this._visibilityTypeProperty.value()
          'alwaysOn' === e || 'alwaysOff' === e
            ? ((this._controlBarVisible = 'alwaysOn' === e),
              null !== this._boundMouseHandler &&
                (this._parent.removeEventListener(
                  'mousemove',
                  this._boundMouseHandler,
                  !1,
                ),
                this._parent.removeEventListener(
                  'mouseleave',
                  this._boundMouseHandler,
                  !1,
                ),
                (this._boundMouseHandler = null)))
            : ((this._controlBarVisible = !1),
              this._boundMouseHandler ||
                ((this._boundMouseHandler =
                  this._visibilityMouseHandler.bind(this)),
                this._parent.addEventListener(
                  'mousemove',
                  this._boundMouseHandler,
                ),
                this._parent.addEventListener(
                  'mouseleave',
                  this._boundMouseHandler,
                ))),
            this._updateControlBarVisibility()
        }
        _visibilityMouseHandler(e) {
          if (e.buttons) return
          if (null !== this._chartModel && this._chartModel.lineBeingCreated())
            return
          let t = 'mouseleave' !== e.type
          if ('mousemove' === e.type) {
            const s = this._widget.getBoundingClientRect(),
              i = 100 - this._bottomMargin()
            t =
              e.clientX >= s.left - 100 &&
              e.clientX <= s.right + 100 &&
              e.clientY >= s.top - i &&
              e.clientY <= s.bottom + 100
          }
          this._controlBarVisible !== t &&
            ((this._controlBarVisible = t),
            null === this._rafId &&
              (this._rafId =
                this._controlBar.ownerDocument.defaultView.requestAnimationFrame(
                  this._updateControlBarVisibility.bind(this),
                )))
        }
        _updateControlBarVisibility() {
          ;(this._rafId = null),
            this._controlBar.classList.toggle(
              'control-bar--hidden',
              !this._controlBarVisible,
            )
        }
        _updateBackBtnPosition() {
          if (
            'left' === this._priceAxisName ||
            'right' === this._priceAxisName
          ) {
            const e =
              this._chart.getPriceAxisMaxWidthByName(this._priceAxisName) + 14
            e && (this._back.style.marginRight = `${e}px`)
          }
        }
        _updateBtnGroupVisibility() {
          const e = this._leftPriceScaleWidth + this._paneWidth,
            t = (e + this._rightPriceScaleWidth) / 2
          let s = 2 * Math.min(e - t, t - this._leftPriceScaleWidth) - 50 - 50,
            i = !1
          for (const e of this._visibilityPrioritizedGroups) {
            e.enoughSpaceForGroup = !1
            e.available() &&
              (!G || !e.shouldBeHiddenOnMobile) &&
              ((s -= e.totalWidth),
              (e.enoughSpaceForGroup = s >= 0 && !i),
              (i = i || !e.enoughSpaceForGroup)),
              !e.enoughSpaceForGroup !==
                e.element.classList.contains('js-hidden') &&
                e.element.classList.toggle('js-hidden', !e.enoughSpaceForGroup)
          }
          this._updateControlBarPosition()
        }
        _getBtnGroup(e) {
          return (0, i.ensureDefined)(
            this._btnGroups.find((t) => t.classList.contains(e)),
          )
        }
        _updateControlBarPosition() {
          const e = this._visibilityPrioritizedGroups.reduce(
              (e, t) => e + (t.enoughSpaceForGroup ? t.totalWidth : 0),
              0,
            ),
            t =
              (this._paneWidth +
                this._leftPriceScaleWidth +
                this._rightPriceScaleWidth) /
                2 -
              Math.ceil(e / 2)
          this._widget.style.left = `${t}px`
        }
        _updateResetScalesButtonVisibility() {
          if (null === this._chartModel) return
          const e = this._chartModel.model().resetScalesAvailable().value()
          this._buttons.turn.classList.toggle($, !e)
        }
        _updateMaximizeButtonsVisibility() {
          this._updateBtnGroupVisibility()
        }
        _toggleFullscreenButtons() {
          const e = this._chart.inFullscreen()
          this._buttons.maximize.classList.toggle('js-hidden', e),
            this._buttons.minimize.classList.toggle('js-hidden', !e)
        }
        _isMaximizeButtonAvailable() {
          return this._options.maximize, !1
        }
        _trackEvent(e) {
          0
        }
      }
    },
    85109: (e, t, s) => {
      'use strict'
      s.r(t), s.d(t, { LegendWidget: () => Ml })
      var i = s(27714),
        l = s(43370),
        o = s(50151),
        a = s(97145),
        n = s(1722),
        r = s(24377),
        d = s(14483),
        u = s(49483),
        h = s(65616),
        c = s(59255),
        _ = s(34926),
        p = s(42184),
        m = s(80007),
        g = s(7488)
      var v = s(34362)
      class b extends class {
        constructor(e, t = {}) {
          ;(this._loadingEl = document.createElement('span')),
            this._renderLoading(t),
            this.toggleVisibility(!1),
            e.appendChild(this._loadingEl)
        }
        toggleVisibility(e) {
          this._loadingEl.classList.toggle(g.blockHidden, !e)
        }
        _renderLoading(e) {
          const { className: t } = e
          t && this._loadingEl.classList.add(t)
        }
      } {
        _renderLoading(e) {
          super._renderLoading(e),
            (this._loadingEl.innerHTML = `\n\t\t\t<span class="${v.loaderItem}"></span>\n\t\t\t<span class="${v.loaderItem}"></span>\n\t\t\t<span class="${v.loaderItem}"></span>\n\t\t`),
            this._loadingEl.classList.add(v.loader)
        }
      }
      function w(e, t) {
        null === e.firstChild
          ? (e.textContent = t)
          : (e.firstChild.nodeValue = t)
      }
      var y = s(77539)
      const S = u.CheckMobile.any()
      class f {
        constructor(e, t, s) {
          ;(this._el = null),
            (this._firstBlockWrapper = null),
            (this._logoAndTitleParentEl = null),
            (this._titleElements = []),
            (this._valuesParentEl = null),
            (this._valuesAdditionalWrapperEl = null),
            (this._valuesElements = []),
            (this._actionsParentEl = null),
            (this._actionAdditionalWrapperEl = null),
            (this._stayInHoveredMode = !1),
            (this._mode = 4),
            (this._statusesWrapper = null),
            (this._resizeObserver = null),
            (this._hideInvisibleHover = null),
            (this._hideValues = null),
            (this._allButtonsWidth = null),
            (this._lastStatusesWrapperWidth = null),
            (this._lastActionsWrapperWidth = null),
            (this._showActionsHandler = null),
            (this._hideActionsHandler = null),
            (this._selectedSourceHandler = null),
            (this._mouseEventHandlers = []),
            (this._disableTimeout = null),
            (this._loader = null),
            (this._updateDisabledState = (e = this._disabled.value()) => {
              null !== this._el &&
                (this._el.classList.toggle(y.disabled, e),
                this._updateLoadingState(),
                this._updateStatusWidgetVisibility(e),
                this._updateTitleMaxWidth())
            }),
            (this._updateLoadingState = (e = this._loading.value()) => {
              if (null !== this._el) {
                const t = this._el.classList
                t.toggle(y.eyeLoading, e && !this._disabled.value()),
                  t.toggle(y.loading, e)
              }
              null !== this._loader && this._loader.toggleVisibility(e)
            }),
            (this._model = e),
            (this._parentEl = t),
            (this._disabled = this._model.disabled().spawn()),
            this._disabled.subscribe(this._updateDisabledState),
            (this._disabledOnInterval = this._model
              .disabledOnInterval()
              .spawn()),
            this._disabledOnInterval.subscribe(
              this._updateDisabledOnIntervalState.bind(this),
            ),
            (this._selected = this._model.selected().spawn()),
            this._selected.subscribe(this._updateSelectedState.bind(this)),
            (this._loading = this._model.loading().spawn()),
            this._loading.subscribe(
              (function (e, t) {
                let s = 0
                return (i) => {
                  clearTimeout(s), i ? e() : (s = setTimeout(e, t))
                }
              })(this._updateLoadingState, 700),
            ),
            (this._isTitleHidden = this._model.isTitleHidden().spawn()),
            (this._isValuesHidden = this._model.isValuesHidden().spawn()),
            (this._isRowHidden = this._model.isRowHidden().spawn()),
            this._isTitleHidden.subscribe(this._updateShowTitles.bind(this)),
            this._isValuesHidden.subscribe(this._updateShowValues.bind(this)),
            this._isRowHidden.subscribe(this._updateShowLine.bind(this)),
            this._createTitlesSpawns()
          for (let e = 0; e < this._titlesSpawns.length; e++)
            this._titlesSpawns[e].title.subscribe(
              this._updateTitlesHandler.bind(this, e),
            )
          ;(this._values = this._model.values().spawn()),
            this._values.subscribe(this._updateValues.bind(this)),
            this._createValuesSpawns(),
            this._addValuesSpawnsSubscriptions(),
            (this._actionsSpawnArray = this._model
              .actions()
              .map((e) => ({
                visible: e.visible.spawn(),
                title: void 0 === e.title ? null : e.title.spawn(),
              })))
          for (let e = 0; e < this._actionsSpawnArray.length; e++) {
            this._actionsSpawnArray[e].visible.subscribe(
              this._updateActionVisibilities.bind(this, e),
            )
            const t = this._actionsSpawnArray[e].title
            null !== t && t.subscribe(this._updateActionTitle.bind(this, e))
          }
          ;(this._withActions = s.withActions),
            this._render(),
            this._updateStates(),
            this._updateShowTitles(),
            this._updateShowValues(),
            this._updateShowLine(),
            null !== this._valuesParentEl &&
              (this._loader = new b(this._valuesParentEl, {
                className: y.loader,
              })),
            (this._customTextColor = s.customTextColor.spawn()),
            this._customTextColor.subscribe(
              this._updateCustomTextColor.bind(this),
            ),
            this._updateCustomTextColor(),
            this._withActions &&
              ((this._showActionsHandler = (0, m.wrapHandlerWithPreventEvent)(
                this._showActions.bind(this),
              )),
              (this._hideActionsHandler = (0, m.wrapHandlerWithPreventEvent)(
                this._hideActions.bind(this),
              )),
              (this._selectedSourceHandler = (0, m.wrapHandlerWithPreventEvent)(
                this._model.setSourceSelected.bind(this._model),
              )),
              null !== this._logoAndTitleParentEl &&
                (this._logoAndTitleParentEl.addEventListener(
                  'touchend',
                  this._selectedSourceHandler,
                ),
                this._logoAndTitleParentEl.addEventListener(
                  'mousedown',
                  this._selectedSourceHandler,
                ),
                S ||
                  (this._logoAndTitleParentEl.addEventListener(
                    'mouseenter',
                    this._showActionsHandler,
                  ),
                  this._logoAndTitleParentEl.addEventListener(
                    'mouseleave',
                    this._hideActionsHandler,
                  )),
                this._mouseEventHandlers.push(
                  new p.MouseEventHandler(this._logoAndTitleParentEl, {
                    mouseDoubleClickEvent: this._model.onShowSettings.bind(
                      this._model,
                    ),
                    doubleTapEvent: this._model.onShowSettings.bind(
                      this._model,
                    ),
                  }),
                )),
              null === this._actionAdditionalWrapperEl ||
                null === this._actionsParentEl ||
                S ||
                (this._actionAdditionalWrapperEl.addEventListener(
                  'mouseenter',
                  this._showActionsHandler,
                ),
                this._actionAdditionalWrapperEl.addEventListener(
                  'mouseleave',
                  this._hideActionsHandler,
                ),
                this._actionsParentEl.addEventListener('contextmenu', (e) => {
                  e.preventDefault(), e.stopPropagation()
                })))
        }
        destroy() {
          var e, t
          this._disabled.destroy(),
            this._disabledOnInterval.destroy(),
            this._selected.destroy(),
            this._loading.destroy(),
            this._isTitleHidden.destroy(),
            this._isValuesHidden.destroy(),
            this._isRowHidden.destroy(),
            this._customTextColor.destroy(),
            null !== this._disableTimeout && clearTimeout(this._disableTimeout)
          for (const e of this._titlesSpawns) e.title.destroy()
          if (null !== this._logoAndTitleParentEl) {
            for (const e of this._mouseEventHandlers) e.destroy()
            ;(this._titleElements = []),
              this._withActions &&
                null !== this._selectedSourceHandler &&
                null !== this._showActionsHandler &&
                null !== this._hideActionsHandler &&
                (this._logoAndTitleParentEl.removeEventListener(
                  'touchend',
                  this._selectedSourceHandler,
                ),
                this._logoAndTitleParentEl.removeEventListener(
                  'mousedown',
                  this._selectedSourceHandler,
                ),
                S ||
                  (this._logoAndTitleParentEl.removeEventListener(
                    'mouseenter',
                    this._showActionsHandler,
                  ),
                  this._logoAndTitleParentEl.removeEventListener(
                    'mouseleave',
                    this._hideActionsHandler,
                  ))),
              (this._logoAndTitleParentEl = null)
          }
          for (const e of this._actionsSpawnArray) {
            e.visible.destroy()
            const t = e.title
            null !== t && t.destroy()
          }
          if (
            (null !== this._actionAdditionalWrapperEl &&
              (this._withActions &&
                null !== this._showActionsHandler &&
                null !== this._hideActionsHandler &&
                !S &&
                (this._actionAdditionalWrapperEl.removeEventListener(
                  'mouseenter',
                  this._showActionsHandler,
                ),
                this._actionAdditionalWrapperEl.removeEventListener(
                  'mouseleave',
                  this._hideActionsHandler,
                )),
              (this._actionAdditionalWrapperEl = null)),
            (this._actionsParentEl = null),
            this._removeValuesSpawnsSubscriptions(),
            this._values.destroy(),
            null !== this._valuesParentEl &&
              ((this._valuesElements = []), (this._valuesParentEl = null)),
            null === (e = this._hideInvisibleHover) ||
              void 0 === e ||
              e.destroy(),
            null === (t = this._hideValues) || void 0 === t || t.destroy(),
            null !== this._resizeObserver &&
              (this._resizeObserver.disconnect(),
              (this._resizeObserver = null)),
            null !== this._el)
          ) {
            ;(0, o.ensureNotNull)(this._el.parentNode).removeChild(this._el),
              (this._el = null)
          }
        }
        getHeight() {
          return null === this._el ? null : 24
        }
        updateMode(e) {
          ;(this._mode === e && null !== this._allButtonsWidth) ||
            ((this._mode = e), this._updateAllButtonsWidth())
        }
        _render() {
          this._renderTitle(),
            this._renderActions(),
            this._renderValues(),
            (this._el = document.createElement('div')),
            (this._firstBlockWrapper = document.createElement('div')),
            this._firstBlockWrapper.classList.add(y.noWrapWrapper),
            this._firstBlockWrapper.appendChild(
              (0, o.ensureNotNull)(this._logoAndTitleParentEl),
            ),
            null !== this._actionsParentEl &&
              this._firstBlockWrapper.appendChild(this._actionsParentEl),
            this._el.appendChild(this._firstBlockWrapper),
            this._el.appendChild((0, o.ensureNotNull)(this._valuesParentEl)),
            this._parentEl.append(this._el)
        }
        _renderTitle() {
          var e
          null === this._logoAndTitleParentEl &&
            ((this._logoAndTitleParentEl = document.createElement('div')),
            this._logoAndTitleParentEl.classList.add(y.logoAndTitlesWrapper))
          const t = document.createElement('div')
          t.classList.add(y.titleWrapper),
            this._logoAndTitleParentEl.appendChild(t)
          for (let s = 0; s < this._titlesSpawns.length; s++) {
            const i =
                null !== (e = this._titlesSpawns[s].title.value()) &&
                void 0 !== e
                  ? e
                  : '',
              l = this._titlesSpawns[s].class,
              o = document.createElement('div')
            o.classList.add(y.title, l, 'apply-overflow-tooltip'),
              (o.dataset.name = 'legend-source-title'),
              i.length > 0
                ? (o.appendChild(document.createTextNode(i)),
                  o.classList.add(y.withDot))
                : o.classList.add(g.blockHidden),
              t.appendChild(o),
              this._titleElements.push(o)
          }
        }
        _renderActions() {
          if (!this._withActions) return
          null === this._actionsParentEl &&
            ((this._actionsParentEl = document.createElement('div')),
            this._actionsParentEl.classList.add(y.buttonsWrapper),
            this._parentEl.append(this._actionsParentEl),
            (this._actionAdditionalWrapperEl = document.createElement('div')),
            this._actionAdditionalWrapperEl.classList.add(y.buttons),
            this._actionsParentEl.appendChild(this._actionAdditionalWrapperEl))
          const e = (0, o.ensureNotNull)(this._actionAdditionalWrapperEl),
            t = h.trackingModeIsAvailable ? 'large' : 'small'
          for (const s of this._model.actions()) {
            const i = (0, _.createActionElement)(
              s,
              y.button,
              y.buttonIcon,
              g.blockHidden,
              t,
            )
            e.appendChild(i)
          }
        }
        _isWidthButtonsMode() {
          return (
            null !== this._el &&
            (this._el.classList.contains(y.withAction) ||
              this._disabled.value() ||
              this._selected.value() ||
              this._stayInHoveredMode)
          )
        }
        _updateTitlesHandler(e, t) {
          const s = (0, o.ensureNotNull)(this._titleElements[e]),
            i = 0 === t.length
          s.classList.toggle(g.blockHidden, i),
            s.classList.toggle(y.withDot, !i),
            w(s, t)
        }
        _updateStates(e) {
          this._updateDisabledState(),
            this._updateDisabledOnIntervalState(),
            this._updateSelectedState(),
            this._updateLoadingState(),
            e && this._clearDisableState()
        }
        _updateValuesHTMLElHandler(e, t) {
          w((0, o.ensure)(this._valuesElements[e].value), t),
            this._updateShowValues()
        }
        _updateValueColorHandler(e, t = '') {
          ;(0, o.ensure)(this._valuesElements[e].value).style.color = t
        }
        _updateValueVisibleHandler(e, t) {
          const s = (0, o.ensure)(this._valuesElements[e].value).closest(
            `.${y.valueItem}`,
          )
          null !== s && s.classList.toggle(g.blockHidden, !t)
        }
        _updateShowLine() {
          null !== this._el &&
            this._el.classList.toggle(g.blockHidden, this._isRowHidden.value())
        }
        _createValuesSpawns() {
          this._valuesSpawnArray = this._values
            .value()
            .map((e) => ({
              value: e.value.spawn(),
              color: e.color.spawn(),
              visible: e.visible.spawn(),
              title: e.title.spawn(),
            }))
        }
        _removeValuesSpawnsSubscriptions() {
          for (const e of this._valuesSpawnArray)
            e.value.destroy(),
              e.color.destroy(),
              e.visible.destroy(),
              e.title.destroy()
          this._valuesSpawnArray = []
        }
        _addValuesSpawnsSubscriptions() {
          for (let e = 0; e < this._valuesSpawnArray.length; e++) {
            const t = this._valuesSpawnArray[e]
            t.value.subscribe(this._updateValuesHTMLElHandler.bind(this, e)),
              t.color.subscribe(this._updateValueColorHandler.bind(this, e)),
              t.visible.subscribe(
                this._updateValueVisibleHandler.bind(this, e),
              ),
              t.title.subscribe(
                this._updateValuesTitleHTMLElHandler.bind(this, e),
              )
          }
        }
        _updateShowValues() {
          null !== this._valuesAdditionalWrapperEl &&
            this._valuesAdditionalWrapperEl.classList.toggle(
              g.blockHidden,
              this._isValuesShouldBeHidden(),
            )
        }
        _isValuesShouldBeHidden() {
          return !this._valuesSpawnArray.some((e) => e.value.value().length > 0)
        }
        _addStatusesWidget(e, t, s) {
          ;(this._statusesWrapper = document.createElement('div')),
            this._statusesWrapper.classList.add(y.statusesWrapper),
            e.classList.add(y.statusesWrapper__statuses),
            this._statusesWrapper.appendChild(e),
            (0, o.ensureNotNull)(this._firstBlockWrapper).appendChild(
              this._statusesWrapper,
            ),
            (this._hideInvisibleHover = t.spawn()),
            this._hideInvisibleHover.subscribe(
              this._updateInvisibleHoverMode.bind(this),
              { callWithLast: !0 },
            ),
            (this._hideValues = s.spawn()),
            this._hideValues.subscribe(this._updateHideValuesMode.bind(this), {
              callWithLast: !0,
            }),
            this._updateStatusWidgetVisibility(this._disabled.value()),
            (this._resizeObserver = new c.default(
              this._handlerRestrictTitleWidth.bind(this),
            )),
            null !== this._actionsParentEl &&
              this._resizeObserver.observe(this._actionsParentEl),
            this._resizeObserver.observe(this._statusesWrapper)
        }
        _updateTitleMaxWidth() {
          if (null === this._firstBlockWrapper) return
          const e = this._allButtonsWidth || 0,
            t =
              (this._lastActionsWrapperWidth || 0) +
              (this._lastStatusesWrapperWidth || 0)
          this._isWidthButtonsMode()
            ? (this._firstBlockWrapper.style.maxWidth = `calc(100% - ${Math.max(e, t)}px)`)
            : (this._firstBlockWrapper.style.maxWidth =
                t > 0 ? `calc(100% - ${t}px)` : '')
        }
        _updateAllButtonsWidth() {
          ;(this._allButtonsWidth = this._getButtonsCount() * Z + 1),
            this._updateTitleMaxWidth()
        }
        _updateInvisibleHoverMode(e) {
          null !== this._el && this._el.classList.toggle(y.invisibleHover, !e)
        }
        _updateHideValuesMode(e) {
          null !== this._el && this._el.classList.toggle(y.hideValues, e)
        }
        _showActions() {
          if (null === this._el || !this._withActions) return
          this._el.classList.add(y.withAction)
          const e =
            null !== this._valuesParentEl &&
            null !== this._logoAndTitleParentEl &&
            this._valuesParentEl.offsetTop ===
              this._logoAndTitleParentEl.offsetTop
          this._el.classList.toggle(y.withTail, e), this._updateTitleMaxWidth()
        }
        _hideActions() {
          null !== this._el &&
            this._withActions &&
            !this._stayInHoveredMode &&
            (this._el.classList.remove(y.withAction),
            null !== this._valuesParentEl &&
              this._valuesParentEl.classList.remove(y.withTail),
            this._updateTitleMaxWidth())
        }
        _handlerRestrictTitleWidth(e) {
          if (
            null === this._actionsParentEl ||
            null === this._firstBlockWrapper
          )
            return
          let t = null,
            s = null
          for (const i of e)
            i.target === this._statusesWrapper && (t = i.contentRect.width),
              i.target === this._actionsParentEl && (s = i.contentRect.width)
          ;(t === this._lastStatusesWrapperWidth &&
            s === this._lastActionsWrapperWidth) ||
            (null !== t && (this._lastStatusesWrapperWidth = t),
            null !== s && (this._lastActionsWrapperWidth = s),
            this._updateTitleMaxWidth())
        }
        _clearDisableState() {
          null !== this._el &&
            (this._el.classList.remove(y.eyeLoading),
            this._el.classList.remove(y.disabled),
            this._updateStatusWidgetVisibility(this._disabled.value()),
            this._updateTitleMaxWidth())
        }
        _updateDisabledOnIntervalState() {
          var e
          null === (e = this._el) ||
            void 0 === e ||
            e.classList.toggle(
              y.disabledOnInterval,
              this._disabledOnInterval.value(),
            )
        }
        _updateSelectedState() {
          null !== this._el &&
            this._withActions &&
            this._el.classList.toggle(y.selected, this._selected.value())
        }
        _updateShowTitles() {
          null !== this._logoAndTitleParentEl &&
            (this._logoAndTitleParentEl.classList.toggle(
              g.blockHidden,
              this._isTitleHidden.value(),
            ),
            null !== this._actionsParentEl &&
              this._actionsParentEl.classList.toggle(
                g.blockHidden,
                this._isTitleHidden.value(),
              ))
        }
        _updateValues() {
          this._removeValuesSpawnsSubscriptions(),
            this._createValuesSpawns(),
            null !== this._valuesParentEl &&
              null !== this._valuesAdditionalWrapperEl &&
              ((this._valuesElements = []),
              (this._valuesAdditionalWrapperEl.innerHTML = '')),
            this._renderValues(),
            this._addValuesSpawnsSubscriptions(),
            this._updateShowValues()
        }
        _updateActionVisibilities(e) {
          null !== this._actionsParentEl &&
            this._actionsParentEl
              .querySelectorAll(`.${y.button}`)
              [
                e
              ].classList.toggle(g.blockHidden, !this._actionsSpawnArray[e].visible.value())
        }
        _updateActionTitle(e) {
          const t = this._actionsSpawnArray[e].title
          null !== this._actionsParentEl &&
            null !== t &&
            this._actionsParentEl
              .querySelectorAll(`.${y.button}`)
              [e].setAttribute('title', t.value())
        }
        _updateCustomTextColor() {
          const e = this._customTextColor.value() || ''
          for (const t of this._titleElements) null !== t && (t.style.color = e)
          const t = (0, o.ensureNotNull)(this._valuesParentEl).querySelectorAll(
            `.${y.valueTitle}`,
          )
          for (let s = 0; s < t.length; s++) t[s].style.color = e
          ;(0, o.ensureNotNull)(this._el).classList.toggle(
            y.withCustomTextColor,
            Boolean(e),
          )
        }
        _updateStatusWidgetVisibility(e) {
          null !== this._statusesWrapper &&
            this._statusesWrapper.classList.toggle(g.blockHidden, e)
        }
      }
      var M = s(16230),
        C = s(97754),
        E = s.n(C),
        V = s(44747),
        k = s(58492),
        A = s(82708),
        L = s(12767)
      const W = 'tv-circle-logo--visually-hidden'
      class T {
        constructor(e, t) {
          ;(this._lastDrawnLogos = []),
            (this._logoWrapper = null),
            (this._pairContainer = null),
            (this._primaryLogo = null),
            (this._secondaryLogo = null),
            (this._logoContainer = null),
            (this._symbolLetterContainer = null),
            (this._updateLogoVisibility = (e) => {
              this._logoWrapper &&
                this._logoWrapper.classList.toggle(y.hidden, !e)
            }),
            (this._updateSymbolLogo = async (e) => {
              var t, s, i, l, o, a, n, r, d
              if (
                (null === this._logoWrapper && this._renderSymbolLogo(),
                (0, M.default)(this._lastDrawnLogos, e))
              )
                return
              const u = await ((h = e),
              Promise.all(
                h.map((e) =>
                  (0, L.getImage)(`symbol_logo_${e}`, e, (e) => {
                    e.decoding = 'async'
                  }).then((e) => e.cloneNode()),
                ),
              ))
              var h
              switch (u.length) {
                case 0:
                  null === (t = this._pairContainer) ||
                    void 0 === t ||
                    t.classList.add(y.hidden),
                    null === (s = this._logoContainer) ||
                      void 0 === s ||
                      s.classList.add(W),
                    this._updateSymbolLetter(),
                    null === (i = this._symbolLetterContainer) ||
                      void 0 === i ||
                      i.classList.remove(W),
                    (this._lastDrawnLogos = e)
                  break
                case 1:
                  x(this._logoContainer, u[0]),
                    null === (l = this._pairContainer) ||
                      void 0 === l ||
                      l.classList.add(y.hidden),
                    null === (o = this._logoContainer) ||
                      void 0 === o ||
                      o.classList.remove(W),
                    null === (a = this._symbolLetterContainer) ||
                      void 0 === a ||
                      a.classList.add(W),
                    (this._lastDrawnLogos = e)
                  break
                case 2:
                  x(this._primaryLogo, u[0]),
                    x(this._secondaryLogo, u[1]),
                    null === (n = this._pairContainer) ||
                      void 0 === n ||
                      n.classList.remove(y.hidden),
                    null === (r = this._logoContainer) ||
                      void 0 === r ||
                      r.classList.add(W),
                    null === (d = this._symbolLetterContainer) ||
                      void 0 === d ||
                      d.classList.add(W),
                    (this._lastDrawnLogos = e)
              }
            }),
            (this._model = e),
            (this._parentElement = t),
            this._renderSymbolLogo(),
            (this._logoUrls = e.symbolLogoUrls().spawn()),
            this._logoUrls.subscribe(this._updateSymbolLogo, {
              callWithLast: !0,
            }),
            (this._isLogoVisible = e.isSymbolLogoVisible().spawn()),
            this._isLogoVisible.subscribe(this._updateLogoVisibility, {
              callWithLast: !0,
            })
        }
        destroy() {
          var e
          null === (e = this._logoWrapper) || void 0 === e || e.remove(),
            (this._logoWrapper = null),
            (this._pairContainer = null),
            (this._primaryLogo = null),
            (this._secondaryLogo = null),
            (this._logoContainer = null),
            (this._symbolLetterContainer = null),
            this._logoUrls.destroy(),
            this._isLogoVisible.destroy()
        }
        _renderSymbolLogo() {
          if (!this._logoWrapper) {
            const e = (this._logoWrapper = document.createElement('div'))
            e.classList.add(y.logoWrapper)
            const t = (this._pairContainer = e.appendChild(
              document.createElement('span'),
            ))
            t.classList.add(y.pairContainer, y.hidden)
            const s = t.appendChild(document.createElement('span'))
            s.className = (0, V.getBlockStyleClasses)('xxxsmall')
            ;(this._secondaryLogo = s.appendChild(
              document.createElement('span'),
            )).className = E()((0, V.getLogoStyleClasses)('xxxsmall'), y.logo)
            ;(this._primaryLogo = s.appendChild(
              document.createElement('span'),
            )).className = E()((0, V.getLogoStyleClasses)('xxxsmall'), y.logo)
            ;(this._logoContainer = e.appendChild(
              document.createElement('span'),
            )).className = E()((0, k.getStyleClasses)('xxxsmall'), y.logo, W)
            ;((this._symbolLetterContainer = e.appendChild(
              document.createElement('span'),
            )).className = E()((0, k.getStyleClasses)('xxxsmall'), y.logo)),
              this._updateSymbolLetter()
          }
          this._parentElement.insertBefore(
            this._logoWrapper,
            this._parentElement.firstChild,
          )
        }
        _updateSymbolLetter() {
          var e
          if (this._symbolLetterContainer) {
            const t = (0, A.safeShortName)(
              null !== (e = this._model.symbol()) && void 0 !== e ? e : '',
            )[0]
            w(this._symbolLetterContainer, t)
          }
        }
      }
      function x(e, t) {
        e && e.replaceChildren(t)
      }
      class H extends f {
        constructor(e, t, s) {
          super(e, t, s),
            (this._symbolLogoRenderer = null),
            (this._clientHeight = null),
            (this._updateLinkedState = void 0),
            (this._flagged = this._model.flagged().spawn()),
            this._flagged.subscribe(this._updateFlaggedState.bind(this)),
            this._updateStates(),
            s.statusWidgetEl &&
              this._addStatusesWidget(
                s.statusWidgetEl,
                s.hideInvisibleHover,
                s.hideValues,
              ),
            this._selected.subscribe(this._updateTitleMaxWidth.bind(this))
          const i = e.symbolLogoViewModel().value()
          i &&
            (this._symbolLogoRenderer = new T(
              i,
              (0, o.ensureNotNull)(this._logoAndTitleParentEl),
            ))
        }
        destroy() {
          var e, t
          super.destroy(),
            null === (e = this._flagged) || void 0 === e || e.destroy(),
            null === (t = this._symbolLogoRenderer) ||
              void 0 === t ||
              t.destroy()
        }
        getHeight() {
          return null === this._el
            ? null
            : (null === this._clientHeight &&
                ((this._clientHeight = this._el.clientHeight),
                0 === this._clientHeight && (this._clientHeight = null)),
              this._clientHeight)
        }
        _getButtonsCount() {
          return 1 === this._mode ? 1 : 3
        }
        _render() {
          super._render()
          const e = (0, o.ensureNotNull)(this._el)
          e.classList.add(y.item, y.series),
            e.classList.toggle(
              y.onlyOneButtonCanBeStick,
              this._model.isOneButtonCanBeStick(),
            ),
            (e.dataset.name = 'legend-series-item')
        }
        _updateStates() {
          super._updateStates(), this._updateFlaggedState()
        }
        _renderValues() {
          null === this._valuesParentEl &&
            ((this._valuesParentEl = document.createElement('div')),
            this._valuesParentEl.classList.add(y.valuesWrapper),
            (this._valuesAdditionalWrapperEl = document.createElement('div')),
            this._valuesAdditionalWrapperEl.classList.add(
              y.valuesAdditionalWrapper,
            ),
            this._valuesParentEl.appendChild(this._valuesAdditionalWrapperEl))
          const e = (0, o.ensureNotNull)(this._valuesAdditionalWrapperEl),
            t = this._values.value()
          for (const s of t) {
            const t = document.createElement('div')
            t.classList.add(y.valueItem),
              t.classList.toggle(g.blockHidden, !s.visible.value()),
              t.classList.toggle(y.unimportant, s.unimportant.value())
            const i = document.createElement('div'),
              l = s.title.value() || ''
            i.classList.add(y.valueTitle),
              i.classList.toggle(g.blockHidden, 0 === l.length),
              i.appendChild(document.createTextNode(l)),
              t.appendChild(i)
            const o = document.createElement('div')
            o.classList.add(y.valueValue),
              (o.style.color = s.color.value() || ''),
              o.appendChild(document.createTextNode(s.value.value())),
              t.appendChild(o),
              this._valuesElements.push({ title: i, value: o }),
              e.appendChild(t)
          }
        }
        _createTitlesSpawns() {
          const e = this._model.titles()
          this._titlesSpawns = [
            { title: e.title.spawn(), class: y.mainTitle },
            { title: e.description.spawn(), class: y.descTitle },
            { title: e.interval.spawn(), class: y.intervalTitle },
            { title: e.provider.spawn(), class: y.providerTitle },
            { title: e.exchange.spawn(), class: y.exchangeTitle },
            { title: e.chartStyle.spawn(), class: y.styleTitle },
            { title: e.priceSource.spawn(), class: y.styleTitle },
          ]
        }
        _isValuesShouldBeHidden() {
          return !this._valuesSpawnArray.some(
            (e) =>
              e.value.value().length > 0 || (e.title.value() || '').length > 0,
          )
        }
        _updateValuesTitleHTMLElHandler(e, t = '') {
          const s = (0, o.ensure)(this._valuesElements[e].title)
          w(s, t),
            s.classList.toggle(g.blockHidden, 0 === t.length),
            this._updateShowValues()
        }
        _isWidthButtonsMode() {
          var e
          return (
            null !== this._el &&
            ((void 0 !== this._flagged && Boolean(this._flagged.value())) ||
              (null === (e = this._linked) || void 0 === e
                ? void 0
                : e.value()) ||
              super._isWidthButtonsMode())
          )
        }
        _updateFlaggedState() {
          if (void 0 === this._flagged) return
          ;(0, o.ensureNotNull)(this._el).classList.toggle(
            y.flagged,
            Boolean(this._flagged.value()),
          ),
            this._updateTitleMaxWidth()
        }
      }
      const D = u.isSafari ? 'click' : 'auxclick'
      class P extends f {
        constructor(e, t, s) {
          super(e, t, s),
            (this._wheelClickHandler = null),
            (this._symbolLogoRenderer = null),
            (this._updateSymbolLogoRenderer = (e) => {
              var t
              d.enabled('show_symbol_logo_for_compare_studies') &&
                (null === (t = this._symbolLogoRenderer) ||
                  void 0 === t ||
                  t.destroy(),
                (this._symbolLogoRenderer = e
                  ? new T(e, (0, o.ensureNotNull)(this._logoAndTitleParentEl))
                  : null))
            }),
            (this._canUpdateRowVisibility = !0),
            (this._globalRowVisibility = this._model
              .globalVisibility()
              .spawn()),
            this._globalRowVisibility.subscribe(
              this._updateShowLine.bind(this),
              { callWithLast: !0 },
            ),
            (this._has5Buttons = this._model.isPineScriptDataSource().spawn()),
            this._has5Buttons.subscribe(this._update5ButtonsStyles.bind(this)),
            this._updateStates(!this._disabled.value()),
            s.statusWidgetEl &&
              this._addStatusesWidget(
                s.statusWidgetEl,
                s.hideInvisibleHover,
                s.hideValues,
              ),
            this._selected.subscribe(this._updateTitleMaxWidth.bind(this)),
            s.withActions &&
              ((this._wheelClickHandler = this._onWheelClicked.bind(this)),
              null !== this._logoAndTitleParentEl &&
                this._logoAndTitleParentEl.addEventListener(
                  D,
                  this._wheelClickHandler,
                ))
          const i = e.symbolLogoViewModel().value()
          this._updateSymbolLogoRenderer(i),
            e.symbolLogoViewModel().subscribe(this._updateSymbolLogoRenderer)
        }
        destroy() {
          var e
          this._model
            .symbolLogoViewModel()
            .unsubscribe(this._updateSymbolLogoRenderer),
            null === (e = this._symbolLogoRenderer) ||
              void 0 === e ||
              e.destroy(),
            this._has5Buttons.destroy(),
            this._globalRowVisibility && this._globalRowVisibility.destroy(),
            null !== this._wheelClickHandler &&
              null !== this._logoAndTitleParentEl &&
              this._logoAndTitleParentEl.removeEventListener(
                D,
                this._wheelClickHandler,
              ),
            super.destroy()
        }
        _updateShowLine() {
          if (null === this._el || !this._canUpdateRowVisibility) return
          const e = !this._globalRowVisibility.value()
          e
            ? this._el.classList.toggle(g.blockHidden, e)
            : super._updateShowLine()
        }
        _getButtonsCount() {
          switch (this._mode) {
            case 4:
              return this._has5Buttons.value() ? 5 : 4
            case 3:
              return 3
            default:
              return 2
          }
        }
        _render() {
          super._render()
          const e = (0, o.ensureNotNull)(this._el)
          e.classList.add(y.item, y.study),
            (e.dataset.name = 'legend-source-item')
        }
        _createTitlesSpawns() {
          const e = this._model.titles()
          this._titlesSpawns = [
            { title: e.title.spawn(), class: y.mainTitle },
            { title: e.args.spawn(), class: y.descTitle },
          ]
        }
        _renderValues() {
          null === this._valuesParentEl &&
            ((this._valuesParentEl = document.createElement('div')),
            this._valuesParentEl.classList.add(y.valuesWrapper),
            (this._valuesAdditionalWrapperEl = document.createElement('div')),
            this._valuesAdditionalWrapperEl.classList.add(
              y.valuesAdditionalWrapper,
            ),
            this._valuesParentEl.appendChild(this._valuesAdditionalWrapperEl))
          const e = (0, o.ensureNotNull)(this._valuesAdditionalWrapperEl),
            t = this._values.value()
          for (const s of t) {
            const t = document.createElement('div')
            t.classList.add(y.valueItem),
              t.classList.toggle(g.blockHidden, !s.visible.value())
            const i = document.createElement('div')
            i.classList.add(y.valueValue),
              (i.style.color = s.color.value() || ''),
              i.appendChild(document.createTextNode(s.value.value()))
            const l = s.title.value()
            void 0 !== l &&
              (i.classList.add('apply-common-tooltip'), (i.title = l)),
              t.appendChild(i),
              this._valuesElements.push({ value: i }),
              e.appendChild(t)
          }
        }
        _updateValuesTitleHTMLElHandler(e, t = '') {
          const s = (0, o.ensure)(this._valuesElements[e].value)
          s.classList.toggle('apply-common-tooltip', 0 !== t.length),
            (s.title = t)
        }
        _update5ButtonsStyles(e) {
          null !== this._el &&
            (this._el.classList.toggle(y.has5Buttons, e),
            this._updateAllButtonsWidth())
        }
        _onWheelClicked(e) {
          1 === e.button && this._model.onRemoveSource()
        }
      }
      var B = s(44352),
        I = s(51768)
      function z(e) {
        ;(0, I.trackEvent)('GUI', 'Legend action', e)
      }
      var N = s(47036),
        O = s(62920),
        F = s(65300),
        R = s(36885)
      const U = B.t(null, void 0, s(21686)),
        G = B.t(null, void 0, s(28705)),
        $ = B.t(null, void 0, s(51072))
      class j {
        constructor(e, t, s) {
          ;(this._el = null),
            (this._counterEl = null),
            (this._arrowIconEL = null),
            (this._objectTreeEl = null),
            (this._mode = 0),
            (this._parentEl = e),
            (this._themedColor = t.spawn()),
            this._themedColor.subscribe(this._updateThemedColor.bind(this)),
            (this._sourceCount = s.visibleDataSourceCount.spawn()),
            this._sourceCount.subscribe(this._updateSourceCount.bind(this)),
            (this._isStateOpen = s.isDataSourcesCollapsed.spawn()),
            this._isStateOpen.subscribe(this._updateState.bind(this)),
            (this._showObjectsTree = s.showObjectsTree.spawn()),
            this._showObjectsTree.subscribe(
              this._updateObjectTreeVisibility.bind(this),
            ),
            this._render(),
            this._updateState(),
            this._updateThemedColor(this._themedColor.value()),
            this._updateObjectTreeVisibility(this._showObjectsTree.value()),
            (this._toggleStateHandler = (0, m.wrapHandlerWithPreventEvent)(
              s.onCollapseDataSources,
            )),
            (this._showObjectTreeHandler = (0, m.wrapHandlerWithPreventEvent)(
              s.onShowObjectsTreeDialog,
            )),
            null !== this._el &&
              (this._el.addEventListener('touchend', this._toggleStateHandler),
              this._el.addEventListener('click', this._toggleStateHandler),
              this._el.addEventListener('contextmenu', (e) => {
                e.preventDefault(), e.stopPropagation()
              })),
            null !== this._objectTreeEl &&
              (this._objectTreeEl.addEventListener(
                'touchend',
                this._showObjectTreeHandler,
              ),
              this._objectTreeEl.addEventListener(
                'click',
                this._showObjectTreeHandler,
              ))
        }
        destroy() {
          this._sourceCount.destroy(),
            this._isStateOpen.destroy(),
            null !== this._objectTreeEl &&
              (this._objectTreeEl.removeEventListener(
                'touchend',
                this._showObjectTreeHandler,
              ),
              this._objectTreeEl.removeEventListener(
                'click',
                this._showObjectTreeHandler,
              ),
              (this._objectTreeEl = null)),
            (this._arrowIconEL = null),
            (this._counterEl = null),
            null !== this._el &&
              (this._el.removeEventListener(
                'touchend',
                this._toggleStateHandler,
              ),
              this._el.removeEventListener('click', this._toggleStateHandler),
              (this._el.innerHTML = ''),
              (this._el = null))
        }
        setMode(e) {
          ;(this._mode = e ? 1 : 0), this._updateTooltip()
        }
        _render() {
          ;(this._el = document.createElement('div')),
            (this._el.className = `${y.toggler} apply-common-tooltip`),
            (this._arrowIconEL = document.createElement('div')),
            this._arrowIconEL.classList.add(y.iconArrow),
            (this._arrowIconEL.innerHTML = h.trackingModeIsAvailable ? O : N),
            this._el.appendChild(this._arrowIconEL),
            (this._objectTreeEl = document.createElement('div')),
            this._objectTreeEl.classList.add(y.objectTree),
            (this._objectTreeEl.innerHTML = h.trackingModeIsAvailable ? R : F),
            this._el.appendChild(this._objectTreeEl),
            (this._counterEl = document.createElement('div')),
            this._counterEl.classList.add(y.counter),
            this._counterEl.appendChild(
              document.createTextNode(String(this._sourceCount.value())),
            ),
            this._el.appendChild(this._counterEl),
            this._parentEl.appendChild(this._el)
        }
        _updateThemedColor(e) {
          if (null !== this._el)
            if (e.length > 0) {
              const [t, s, i] = (0, r.parseRgb)(e)
              this._el.style.backgroundColor = (0, r.rgbaToString)([
                t,
                s,
                i,
                (0, r.normalizeAlphaComponent)(0.8),
              ])
            } else this._el.style.removeProperty('background-color')
        }
        _updateSourceCount(e) {
          w((0, o.ensureNotNull)(this._counterEl), String(e))
          const t = (0, o.ensureNotNull)(this._el),
            s = e < 1
          t.classList.toggle(g.blockHidden, s)
          {
            const s = 1 === e
            t.classList.toggle(y.onlyOneSourceShown, s)
          }
        }
        _updateState() {
          const e = !this._isStateOpen.value()
          this._parentEl.classList.toggle(y.closed, e),
            this._updateTooltip(),
            z((e ? 'Hide' : 'Show') + ' not main sources')
        }
        _tooltip() {
          return 1 === this._mode ? $ : this._isStateOpen.value() ? U : G
        }
        _updateTooltip() {
          null !== this._el && this._el.setAttribute('title', this._tooltip())
        }
        _updateObjectTreeVisibility(e) {
          ;(0, o.ensureNotNull)(this._el).classList.toggle(
            y.objectsTreeCanBeShown,
            e,
          )
        }
      }
      var Y = s(38780),
        q = s(27267)
      const Z = h.trackingModeIsAvailable ? 44 : 28,
        X = d.enabled('object_tree_legend_mode')
      class J {
        constructor(e, t) {
          ;(this._renderToggler = null),
            (this._mainDataSourceRenderer = null),
            (this._dataSourceRenderers = []),
            (this._parentEl = document.createElement('div')),
            (this._mainDataSourceEl = null),
            (this._dataSourcesEl = null),
            (this._dataSourcesAdditionalWrapperEl = null),
            (this._collapsedDataSourcesWrapperEl = null),
            (this._collapsedDataSourcesEl = null),
            (this._outsideEventForCollapsedTooltip = null),
            (this._options = e),
            (this._togglerOptions = t),
            (this._isStudiesLegendHidden = e.isStudiesLegendHidden.spawn()),
            this._isStudiesLegendHidden.subscribe(
              this._updateLegendVisibility.bind(this),
            ),
            (this._isAllLegendHidden = e.isAllLegendHidden.spawn()),
            this._isAllLegendHidden.subscribe(
              this._updateLegendVisibility.bind(this),
            ),
            this._updateLegendVisibility(),
            (this._hideAllExceptFirstLine = e.hideAllExceptFirstLine.spawn()),
            this._hideAllExceptFirstLine.subscribe(
              this._updateAllHiddenExeptFirstLine.bind(this),
            ),
            (this._themedColor = e.themedColor.spawn()),
            this._themedColor.subscribe(this._setCustomBg.bind(this)),
            (this._showBackground = e.showBackground.spawn()),
            this._showBackground.subscribe(this._setCustomBg.bind(this)),
            (this._backgroundTransparency = e.backgroundTransparency.spawn()),
            this._backgroundTransparency.subscribe(
              this._setCustomBg.bind(this),
            ),
            (this._collapsedDataSourcesCountSpawn =
              e.collapsedDataSourcesCount.spawn()),
            this._collapsedDataSourcesCountSpawn.subscribe(
              this._updateCollapsedSourcesCount.bind(this),
            ),
            (this._showCollapsedDataSourcesTooltipHandler =
              this._showCollapsedDataSourcesTooltip.bind(this)),
            this._parentEl.classList.add(y.legend),
            this._parentEl.classList.toggle(
              y.noWrap,
              !h.trackingModeIsAvailable,
            ),
            this._parentEl.classList.toggle(
              y.noActions,
              !this._options.withActions,
            ),
            this._parentEl.classList.toggle(
              y.touchMode,
              h.trackingModeIsAvailable,
            ),
            this._parentEl.classList.toggle(
              y.wrappable,
              !this._hideAllExceptFirstLine.value(),
            ),
            (this._parentEl.dataset.name = 'legend'),
            this._parentEl.style.setProperty(
              '--legend-source-item-button-width',
              `${Z}px`,
            )
          const s = (t) => {
            t.preventDefault(), e.showLegendWidgetContextMenu(t)
          }
          this._mouseEventHandler = new p.MouseEventHandler(this._parentEl, {
            contextMenuEvent: s,
            touchContextMenuEvent: s,
          })
        }
        destroy() {
          if (
            (this._isStudiesLegendHidden.destroy(),
            this._isAllLegendHidden.destroy(),
            this._hideAllExceptFirstLine.destroy(),
            this._themedColor.destroy(),
            this._showBackground.destroy(),
            this._backgroundTransparency.destroy(),
            this._collapsedDataSourcesCountSpawn.destroy(),
            h.trackingModeIsAvailable &&
              null !== this._collapsedDataSourcesWrapperEl &&
              this._collapsedDataSourcesWrapperEl.removeEventListener(
                'touchend',
                this._showCollapsedDataSourcesTooltipHandler,
              ),
            this._outsideEventForCollapsedTooltip &&
              this._outsideEventForCollapsedTooltip(),
            null !== this._dataSourcesAdditionalWrapperEl &&
              ((this._dataSourcesAdditionalWrapperEl.innerHTML = ''),
              (this._dataSourcesAdditionalWrapperEl = null)),
            null !== this._dataSourcesEl &&
              ((this._dataSourcesEl.innerHTML = ''),
              (this._dataSourcesEl = null)),
            null !== this._renderToggler &&
              (this._renderToggler.destroy(), (this._renderToggler = null)),
            null !== this._mainDataSourceRenderer &&
              (this._mainDataSourceRenderer.destroy(),
              (this._mainDataSourceRenderer = null)),
            0 !== this._dataSourceRenderers.length)
          ) {
            for (const e of this._dataSourceRenderers) e.destroy()
            this._dataSourceRenderers = []
          }
          this._mouseEventHandler.destroy(),
            (this._parentEl.innerHTML = ''),
            delete this._parentEl
        }
        addMainDataSource(e, t) {
          this._renderMainDataSourceEl(),
            (this._mainDataSourceRenderer = new H(
              e,
              (0, o.ensureNotNull)(this._mainDataSourceEl),
              {
                withActions: this._options.withActions,
                customTextColor: this._options.customTextColor,
                statusWidgetEl: t.getElement(),
                hideInvisibleHover: t.visibility(),
                hideValues: t.errorWidgetIsShown,
              },
            )),
            this._updateLegendVisibility(),
            e.onDestroy().subscribe(
              this,
              () => {
                null !== this._mainDataSourceRenderer &&
                  (this._mainDataSourceRenderer.destroy(),
                  (this._mainDataSourceRenderer = null))
              },
              !0,
            )
        }
        addDataSources(e, t) {
          this._renderDataSourcesEl()
          const s = (0, o.ensureNotNull)(this._dataSourcesAdditionalWrapperEl)
          for (let i = 0; i < e.length; i++) {
            const l = e[i],
              o = new P(l, s, {
                withActions: this._options.withActions,
                customTextColor: this._options.customTextColor,
                statusWidgetEl: t[i].getElement(),
                hideInvisibleHover: t[i].visibility(),
                hideValues: t[i].errorWidgetIsShown,
              })
            this._dataSourceRenderers.push(o),
              this._updateLegendVisibility(),
              l.onDestroy().subscribe(
                this,
                () => {
                  const e = this._dataSourceRenderers.indexOf(o)
                  ;-1 !== e &&
                    (this._dataSourceRenderers[e].destroy(),
                    this._dataSourceRenderers.splice(e, 1))
                },
                !0,
              )
          }
        }
        addCustomWidget(e, t) {
          if (0 === t.block) {
            this._renderMainDataSourceEl()
            const s = (0, o.ensureNotNull)(this._mainDataSourceEl)
            1 === t.position && e.renderTo(s, s.firstChild),
              0 === t.position && e.renderTo(s)
          }
          if (1 === t.block) {
            this._renderDataSourcesEl()
            const s = (0, o.ensureNotNull)(this._dataSourcesAdditionalWrapperEl)
            1 === t.position && e.renderTo(s, s.firstChild),
              0 === t.position && e.renderTo(s)
          }
        }
        firstTitle() {
          return this._parentEl.firstElementChild
        }
        getElement() {
          return this._parentEl
        }
        updateMode(e) {
          const t = X && e < 133 ? 1 : e < 205 ? 2 : e < 222 ? 3 : 4
          null !== this._mainDataSourceRenderer &&
            this._mainDataSourceRenderer.updateMode(t)
          for (const e of this._dataSourceRenderers) e.updateMode(t)
          this._parentEl.classList.toggle(y.medium, 3 === t),
            this._parentEl.classList.toggle(y.minimized, 2 === t),
            this._parentEl.classList.toggle(y.micro, 1 === t),
            null !== this._renderToggler && this._renderToggler.setMode(1 === t)
          const s =
            !this._hideAllExceptFirstLine.value() &&
            (h.trackingModeIsAvailable || e < 542)
          this._parentEl.classList.toggle(y.directionColumn, s),
            this._parentEl.classList.toggle(
              y.hideUniportantValueItems,
              !u.CheckMobile.any() && e <= 272,
            )
        }
        getMainSourceHeight() {
          return null === this._mainDataSourceRenderer
            ? 0
            : this._mainDataSourceRenderer.getHeight()
        }
        getDataSourceHeight() {
          return 0 === this._dataSourceRenderers.length
            ? 0
            : this._dataSourceRenderers[0].getHeight()
        }
        _renderMainDataSourceEl() {
          null === this._mainDataSourceEl &&
            ((this._mainDataSourceEl = document.createElement('div')),
            this._mainDataSourceEl.classList.add(y.legendMainSourceWrapper),
            this._parentEl.insertBefore(
              this._mainDataSourceEl,
              this._dataSourcesEl,
            ))
        }
        _renderDataSourcesEl() {
          null === this._dataSourcesEl &&
            ((this._dataSourcesEl = document.createElement('div')),
            this._dataSourcesEl.classList.add(y.sourcesWrapper),
            this._renderToggle(this._dataSourcesEl),
            (this._dataSourcesAdditionalWrapperEl =
              document.createElement('div')),
            this._dataSourcesAdditionalWrapperEl.classList.add(y.sources),
            this._dataSourcesEl.appendChild(
              this._dataSourcesAdditionalWrapperEl,
            ),
            this._renderCollapsedCounter(this._dataSourcesAdditionalWrapperEl),
            this._parentEl.appendChild(this._dataSourcesEl))
        }
        _renderToggle(e) {
          this._options.showToggleButton &&
            (this._renderToggler = new j(
              e,
              this._options.themedColor,
              this._togglerOptions,
            ))
        }
        _renderCollapsedCounter(e) {
          ;(this._collapsedDataSourcesWrapperEl =
            document.createElement('div')),
            (this._collapsedDataSourcesWrapperEl.className = `${y.item} ${y.last}`),
            (this._collapsedDataSourcesEl = document.createElement('span')),
            (this._collapsedDataSourcesEl.className = `${y.text} apply-common-tooltip`),
            this._collapsedDataSourcesWrapperEl.append(
              this._collapsedDataSourcesEl,
            ),
            e.append(this._collapsedDataSourcesWrapperEl),
            h.trackingModeIsAvailable &&
              this._collapsedDataSourcesWrapperEl.addEventListener(
                'touchend',
                this._showCollapsedDataSourcesTooltipHandler,
              ),
            this._updateCollapsedSourcesCount(
              this._collapsedDataSourcesCountSpawn.value(),
            )
        }
        _showCollapsedDataSourcesTooltip() {
          ;(0, Y.showOnElement)(this._collapsedDataSourcesEl, {
            text: this._options.collapsedDataSourcesTitle.value(),
          }),
            this._addOutsideEventForHideTooltip()
        }
        _addOutsideEventForHideTooltip() {
          null !== this._outsideEventForCollapsedTooltip &&
            this._outsideEventForCollapsedTooltip(),
            (this._outsideEventForCollapsedTooltip = (0,
            q.addOutsideEventListener)(
              new CustomEvent('timestamp').timeStamp,
              this._collapsedDataSourcesWrapperEl,
              () => {
                null !== this._outsideEventForCollapsedTooltip &&
                  this._outsideEventForCollapsedTooltip(),
                  (0, Y.hide)()
              },
              window.document,
              { touchEnd: !0 },
            ))
        }
        _updateCollapsedSourcesCount(e) {
          if (
            null === this._collapsedDataSourcesWrapperEl ||
            null === this._collapsedDataSourcesEl
          )
            return
          const t = 0 === e
          this._collapsedDataSourcesWrapperEl.classList.toggle(
            g.blockHidden,
            t,
          ),
            t ||
              (w(this._collapsedDataSourcesEl, `+${e}`),
              this._collapsedDataSourcesEl.setAttribute(
                'title',
                this._options.collapsedDataSourcesTitle.value(),
              ))
        }
        _updateLegendVisibility() {
          this._parentEl.classList.toggle(
            g.blockHidden,
            this._isAllLegendHidden.value(),
          ),
            null !== this._dataSourcesEl &&
              this._dataSourcesEl.classList.toggle(
                g.blockHidden,
                this._isStudiesLegendHidden.value(),
              )
        }
        _updateAllHiddenExeptFirstLine() {
          this._parentEl.classList.toggle(
            y.wrappable,
            !this._hideAllExceptFirstLine.value(),
          )
        }
        _setCustomBg() {
          const e = this._showBackground.value(),
            t = this._themedColor.value(),
            s = this._backgroundTransparency.value()
          let i = ''
          if (e) {
            const [e, l, o] = (0, r.parseRgb)(t)
            i = (0, r.rgbaToString)([
              e,
              l,
              o,
              (0, r.normalizeAlphaComponent)(1 - s / 100),
            ])
          }
          this._parentEl.style.color = i
        }
      }
      var Q = s(54358),
        K = s(49152),
        ee = s(87095),
        te = s(36298),
        se = s(57898),
        ie = s(38223),
        le = s(97906),
        oe = s(37591)
      function ae(e) {
        return void 0 !== e ? ee.resetTransparency(e) : e
      }
      const ne = new te.TranslatedString(
          'show {title}',
          B.t(null, void 0, s(87358)),
        ),
        re = new te.TranslatedString(
          'hide {title}',
          B.t(null, void 0, s(70301)),
        ),
        de = B.t(null, void 0, s(81428)),
        ue = B.t(null, void 0, s(31971))
      class he {
        constructor(e, t, s, i, l) {
          ;(this._values = new a.WatchedValue([])),
            (this._actions = []),
            (this._onDestroy = new se.Delegate()),
            (this._loading = new a.WatchedValue(!1)),
            (this._symbolLogoViewModel = new a.WatchedValue(null)),
            (this._moreActionCM = null),
            (this._updateLoadingStatus = () => {
              this._loading.setValue(this._source.isLoading())
            }),
            (this._model = e),
            (this._source = t),
            (this._options = s),
            (this._callbacks = i),
            (this._contextMenuOptions = l),
            (this._disabled = new a.WatchedValue(this._getDisabledState())),
            (this._disabledOnInterval = new a.WatchedValue(
              this._getDisabledOnIntervalState(),
            )),
            (this._selected = new a.WatchedValue(!1)),
            (this._isTitleHidden = new a.WatchedValue(
              this._getTitleHiddenValue(),
            )),
            (this._isValuesHidden = new a.WatchedValue(
              this._getValuesHiddenValue(),
            )),
            (this._isRowHidden = new a.WatchedValue(this._getRowHiddenValue())),
            (this._isEditable = new a.WatchedValue(this._getIsEditable())),
            (0, le.combine)(
              () => ({}),
              this._isTitleHidden.weakReference(),
              this._isValuesHidden.weakReference(),
              this._disabled.weakReference(),
            ).subscribe(this._updateRowVisibilities.bind(this)),
            this._values.subscribe(() => {
              this._isValuesHidden.setValue(this._getValuesHiddenValue())
            })
        }
        destroy() {
          var e
          null === (e = this._symbolLogoViewModel.value()) ||
            void 0 === e ||
            e.destroy()
        }
        onDestroy() {
          return this._onDestroy
        }
        titles() {
          return this._titles
        }
        values() {
          return this._values.readonly()
        }
        actions() {
          return this._actions
        }
        disabled() {
          return this._disabled.readonly()
        }
        disabledOnInterval() {
          return this._disabledOnInterval.readonly()
        }
        selected() {
          return this._selected.readonly()
        }
        loading() {
          return this._loading.readonly()
        }
        isTitleHidden() {
          return this._isTitleHidden.readonly()
        }
        isValuesHidden() {
          return this._isValuesHidden.readonly()
        }
        isRowHidden() {
          return this._isRowHidden.readonly()
        }
        isEditable() {
          return this._isEditable.readonly()
        }
        symbolLogoViewModel() {
          return this._symbolLogoViewModel
        }
        update() {
          this._updateTitles(), this._updateValues(), this._updateStates()
        }
        updateSource(e) {
          this._source !== e &&
            ((this._source = e),
            this.update(),
            this._isTitleHidden.setValue(this._getTitleHiddenValue()),
            this._isValuesHidden.setValue(this._getValuesHiddenValue()))
        }
        onToggleDisabled() {
          const e = this._source.properties().childs().visible,
            t = !e.value()
          this._model.setProperty(
            e,
            t,
            (t ? ne : re).format({
              title: new te.TranslatedString(
                this._source.name(),
                this._source.title(oe.TitleDisplayTarget.StatusLine),
              ),
            }),
          ),
            z((t ? 'Show' : 'Hide') + ' source')
        }
        onShowSettings(e) {
          this._source.userEditEnabled() &&
            (this.setSourceSelected(),
            this._callbacks.showChartPropertiesForSource(this._source, e),
            z('Settings for source'))
        }
        onShowMoreActions(e) {
          return this._options.readOnlyMode
            ? Promise.resolve(null)
            : (this._callbacks.updateActions(),
              z('Show source context menu'),
              this._callbacks.showContextMenuForSources(
                [this._source],
                this._calcNewPosition(e),
                this._contextMenuOptions,
              ))
        }
        setSourceSelected() {
          this._model.selectionMacro((e) => {
            e.clearSelection(), e.addSourceToSelection(this._source)
          })
        }
        _moreActionHandler(e) {
          e.preventDefault(),
            null !== this._moreActionCM && this._moreActionCM.isShown()
              ? (this._moreActionCM = null)
              : (this.setSourceSelected(),
                this.onShowMoreActions(e).then((e) => {
                  this._moreActionCM = e
                }))
        }
        _updateStates() {
          this._disabled.setValue(this._getDisabledState()),
            this._disabledOnInterval.setValue(
              this._getDisabledOnIntervalState(),
            ),
            this._selected.setValue(
              this._model.selection().isSelected(this._source),
            ),
            this._isEditable.setValue(this._getIsEditable()),
            this._updateLoadingStatus()
        }
        _hasValues() {
          return this._values.value().length > 0
        }
        _getEyeTitle() {
          return this._disabled.value() ? de : ue
        }
        _getIsEditable() {
          return this._source.userEditEnabled()
        }
        _getDisabledState() {
          return !this._source.properties().visible.value()
        }
        _updateRowVisibilities() {
          this._isRowHidden.setValue(this._getRowHiddenValue())
        }
        _getRowHiddenValue() {
          return (
            (this._options.readOnlyMode && this._disabled.value()) ||
            (this._isTitleHidden.value() &&
              (this._isValuesHidden.value() || this._disabled.value()))
          )
        }
        _calcNewPosition(e) {
          let t = {}
          if (e.hasOwnProperty('touches') && e.touches.length > 0)
            t = { clientX: e.touches[0].clientX, clientY: e.touches[0].clientY }
          else if (null !== e.target) {
            const s = e.target.getBoundingClientRect()
            t = {
              clientX: (0, ie.isRtl)() ? s.right : s.left,
              clientY: s.top + s.height + 3,
            }
          } else {
            const s = e
            t = { clientX: s.clientX, clientY: s.clientY }
          }
          return t
        }
      }
      var ce = s(93251),
        _e = (s(76266), s(36279)),
        pe = s(28986)
      const me =
          d.enabled('show_symbol_logos') &&
          d.enabled('show_symbol_logo_in_legend'),
        ge = new (class {
          constructor(e = 0) {
            ;(this._keys = []), (this._cache = new Map()), (this._size = e)
          }
          set(e, t) {
            if (
              !this._touchKeyIfExists(e) &&
              (this._keys.push(e), this._size && this._keys.length > this._size)
            ) {
              const e = this._keys.shift()
              this._cache.delete((0, o.ensureDefined)(e))
            }
            this._cache.set(e, t)
          }
          get(e) {
            return this._touchKeyIfExists(e), this._cache.get(e)
          }
          _touchKeyIfExists(e) {
            const t = this._keys.indexOf(e)
            return -1 !== t && (this._keys.splice(t, 1), this._keys.push(e), !0)
          }
        })(100)
      class ve {
        constructor(e, t) {
          ;(this._symbolLogoUrls = new a.WatchedValue([])),
            (this._quoteDataForLogos = null),
            (this._source = e),
            (this._isLogoVisible = (0, pe.createWVFromGetterAndSubscription)(
              () => t.showLogo.value(),
              t.showLogo,
            )),
            this._source
              .symbolChanged()
              .subscribe(this, this._quoteSymbolChanged),
            this._source
              .symbolResolved()
              .subscribe(this, this._onSourceSymbolResolved),
            this._quoteSymbolChanged()
        }
        destroy() {
          this._source.symbolChanged().unsubscribeAll(this),
            this._source.symbolResolved().unsubscribeAll(this),
            this._isLogoVisible.destroy()
        }
        isSymbolLogoVisible() {
          return this._isLogoVisible
        }
        symbolLogoUrls() {
          return this._symbolLogoUrls
        }
        symbol() {
          return this._source.symbol()
        }
        _updateSymbolLogoUrls(e, t) {
          const s = t.values
          if (
            void 0 !== s.logoid ||
            void 0 !== s['currency-logoid'] ||
            void 0 !== s['base-currency-logoid']
          ) {
            this._quoteDataForLogos = {
              logoid: s.logoid,
              'currency-logoid': s['currency-logoid'],
              'base-currency-logoid': s['base-currency-logoid'],
            }
            const e = this.symbol()
            e && ge.set(e, this._quoteDataForLogos), this._updateLogoUrls()
          }
        }
        _quoteSymbolChanged() {
          var e, t, s
          const i = this._source.quotesProvider().quotes(),
            l = (0, o.ensureNotNull)(this.symbol()),
            a = ge.get(l)
          ;(this._quoteDataForLogos = {
            logoid:
              null !== (e = null == i ? void 0 : i.logoid) && void 0 !== e
                ? e
                : null == a
                  ? void 0
                  : a.logoid,
            'currency-logoid':
              null !== (t = null == i ? void 0 : i['currency-logoid']) &&
              void 0 !== t
                ? t
                : null == a
                  ? void 0
                  : a['currency-logoid'],
            'base-currency-logoid':
              null !== (s = null == i ? void 0 : i['base-currency-logoid']) &&
              void 0 !== s
                ? s
                : null == a
                  ? void 0
                  : a['base-currency-logoid'],
          }),
            this._updateLogoUrls()
        }
        _updateLogoUrls() {
          if (this._quoteDataForLogos) {
            const e = (0, ce.removeUsdFromCryptoPairLogos)(
              (0, ce.resolveLogoUrls)(
                this._quoteDataForLogos,
                _e.LogoSize.Medium,
              ),
            )
            this._symbolLogoUrls.setValue(e)
          }
        }
        _onSourceSymbolResolved() {
          {
            const e = this._source.symbolInfo()
            this._quoteDataForLogos = {}
            const t = (null == e ? void 0 : e.logo_urls) || []
            1 === t.length
              ? (this._quoteDataForLogos = { logoid: t[0] })
              : 2 === t.length &&
                (this._quoteDataForLogos = {
                  'currency-logoid': t[0],
                  'base-currency-logoid': t[1],
                }),
              this._updateLogoUrls()
          }
        }
      }
      function be(e, t) {
        return me ? new ve(e, t) : null
      }
      var we = s(14787),
        ye = s(3792),
        Se = s(41674),
        fe = s(87258),
        Me = s(45534)
      const Ce = B.t(null, void 0, s(41610)),
        Ee = B.t(null, void 0, s(93666)),
        Ve = B.t(null, void 0, s(8209)),
        ke = d.enabled('show_hide_button_in_legend'),
        Ae = d.enabled('hide_resolution_in_legend')
      class Le extends he {
        constructor(e, t, s, i, l) {
          super(e, t, s, i, l),
            (this._titles = {
              title: new a.WatchedValue(''),
              description: new a.WatchedValue(''),
              interval: new a.WatchedValue(''),
              provider: new a.WatchedValue(''),
              exchange: new a.WatchedValue(''),
              chartStyle: new a.WatchedValue(''),
              priceSource: new a.WatchedValue(''),
            }),
            (this._symbolMarker = null),
            (this._symbolMarkerIcon = null),
            (this._flagged = new a.WatchedValue(null)),
            (this._symbolAction = null),
            (this._symbolForMarker = null),
            (this._isOneButtonCanBeStick = !1),
            (this._layoutChartSyncLegendRenderer = null),
            (this._isChartLinked = new a.WatchedValue(!1).readonly().spawn()),
            this._createActions(),
            this._updateSymbolMarker()
          const o = this._model
            .model()
            .properties()
            .childs()
            .paneProperties.childs()
            .legendProperties.childs()
          this._symbolLogoViewModel.setValue(be(t, o)),
            o.showSeriesTitle.subscribe(this, () => {
              this._isTitleHidden.setValue(this._getTitleHiddenValue())
            }),
            (this._isPriceSourceHidden = (0,
            K.createWVFromGetterAndSubscription)(
              () => !o.showPriceSource.value(),
              o.showPriceSource,
            )),
            (this._valuesVisibleProperty = (0, K.combineProperty)(
              (e, t, s) => e || t || s,
              o.showSeriesOHLC.weakReference(),
              o.showBarChange.weakReference(),
              o.showVolume.weakReference(),
            )),
            this._valuesVisibleProperty.subscribe(null, () => {
              this._isValuesHidden.setValue(this._getValuesHiddenValue())
            }),
            this.update(),
            this._source
              .onStatusChanged()
              .subscribe(this, this._updateLoadingStatus)
        }
        destroy() {
          super.destroy(),
            this._model
              .model()
              .properties()
              .childs()
              .paneProperties.childs()
              .legendProperties.childs()
              .showSeriesTitle.unsubscribeAll(this),
            this._source.onStatusChanged().unsubscribeAll(this),
            this._valuesVisibleProperty.destroy(),
            this._isPriceSourceHidden.destroy(),
            this._onDestroy.fire()
        }
        flagged() {
          return this._flagged
        }
        linked() {
          return this._isChartLinked
        }
        onShowSettings() {
          this._source.userEditEnabled() &&
            this._callbacks.showGeneralChartProperties(we.TabNames.symbol)
        }
        isOneButtonCanBeStick() {
          return this._isOneButtonCanBeStick
        }
        _updateTitles() {
          const e = (0, o.ensureNotNull)(
            this._source.statusView(),
          ).getSplitTitle()
          this._titles.title.setValue((0, Q.clean)(e.title, !0)),
            this._titles.description.setValue((0, Q.clean)(e.description, !0)),
            Ae || this._titles.interval.setValue((0, Q.clean)(e.interval, !0)),
            this._titles.provider.setValue((0, Q.clean)(e.provider, !0)),
            this._titles.exchange.setValue((0, Q.clean)(e.exchange, !0)),
            this._titles.chartStyle.setValue((0, Q.clean)(e.chartStyle, !0)),
            this._titles.priceSource.setValue(
              (0, Q.clean)(
                this._isPriceSourceHidden.value() ? '' : e.priceSource,
                !0,
              ),
            )
        }
        _updateValues() {
          const e = this._source.legendView(),
            t = this._values.value(),
            s = e.marketTitle(),
            i = e.marketTitle().length > 0
          if (0 === t.length) {
            const t = {
                value: new a.WatchedValue(''),
                color: new a.WatchedValue(''),
                visible: new a.WatchedValue(i),
                title: new a.WatchedValue(s),
                unimportant: new a.WatchedValue(!1),
              },
              l = e.items().map((e) => ({
                value: new a.WatchedValue(e.value()),
                color: new a.WatchedValue(ae(e.color())),
                visible: new a.WatchedValue(e.visible()),
                title: new a.WatchedValue(e.title()),
                unimportant: new a.WatchedValue(e.unimportant()),
              }))
            this._values.setValue([t].concat(l))
          } else {
            t[0].title.setValue(s), t[0].visible.setValue(i)
            const l = e.items()
            for (let e = 0; e < l.length; e++) {
              const s = l[e]
              t[e + 1].value.setValue(s.value()),
                t[e + 1].color.setValue(ae(s.color())),
                t[e + 1].visible.setValue(s.visible()),
                t[e + 1].title.setValue(s.title())
            }
          }
        }
        _updateStates() {
          super._updateStates(), this._updateSymbolMarker()
        }
        _getDisabledOnIntervalState() {
          return !1
        }
        _getTitleHiddenValue() {
          return !this._model
            .model()
            .properties()
            .childs()
            .paneProperties.childs()
            .legendProperties.childs()
            .showSeriesTitle.value()
        }
        _getValuesHiddenValue() {
          return !this._hasValues() || !this._valuesVisibleProperty.value()
        }
        _createActions() {
          if (ke) {
            const e = {
              iconMap: new Map([
                ['large', Se],
                ['small', ye],
              ]),
              action: (0, m.wrapHandlerWithPreventEvent)(
                this.onToggleDisabled.bind(this),
              ),
              visible: new a.WatchedValue(!0),
              className: y.eye,
              title: new a.WatchedValue(this._getEyeTitle()),
              dataset: { name: 'legend-show-hide-action' },
            }
            this._actions.push(e),
              this._disabled.subscribe(() => {
                e.title.setValue(this._getEyeTitle())
              })
          }
          this._actions.push({
            iconMap: new Map([
              ['large', Me],
              ['small', fe],
            ]),
            action: this._moreActionHandler.bind(this),
            visible: new a.WatchedValue(!0),
            title: new a.WatchedValue(Ce),
            dataset: { name: 'legend-more-action' },
          })
        }
        _getMarkerTitle() {
          return null !== this._symbolMarker
            ? this._symbolMarker.isMarked()
              ? Ve
              : Ee
            : ''
        }
        _symbolActionHandler() {
          null !== this._symbolMarker &&
            (this._updateSymbolMarker(), z('Change flag state'))
        }
        _updateSymbolMarker() {
          this._isOneButtonCanBeStick = !0
        }
      }
      var We = s(28853),
        Te = s(3615)
      var xe = s(96362),
        He = s(59224),
        De = s(83637),
        Pe = s(34882),
        Be = s(88658),
        Ie = s(52506),
        ze = s(64063),
        Ne = s(8561),
        Oe = s(18611)
      ;(0, He.getLogger)('Chart.LegendWidget')
      const Fe = B.t(null, void 0, s(89517)),
        Re = B.t(null, void 0, s(66324)),
        Ue = B.t(null, void 0, s(34596)),
        Ge = B.t(null, void 0, s(41610)),
        $e =
          (B.t(null, void 0, s(82751)),
          B.t(null, void 0, s(89790)),
          B.t(null, void 0, s(37809))),
        je =
          (d.enabled('study_buttons_in_legend'),
          d.enabled('show_hide_button_in_legend')),
        Ye = d.enabled('property_pages'),
        qe = d.enabled('format_button_in_legend'),
        Ze = d.enabled('delete_button_in_legend')
      class Xe extends he {
        constructor(e, t, s, i, l) {
          super(e, t, s, i, l),
            (this._titles = {
              title: new a.WatchedValue(''),
              args: new a.WatchedValue(''),
            }),
            (this._error = new a.WatchedValue(!1)),
            (this._isPineScriptDataSource = new a.WatchedValue(!1)),
            (this._pineAction = null),
            (this._globalVisibility = new a.WatchedValue(!0)),
            this._updateSymbolLogoModel(),
            this._createActions()
          const o = this._model
              .model()
              .properties()
              .childs()
              .paneProperties.childs()
              .legendProperties.childs(),
            n = [o.showSeriesTitle, o.showStudyTitles]
          for (const e of n)
            e.subscribe(this, () => {
              this._isTitleHidden.setValue(this._getTitleHiddenValue())
            })
          const r = [o.showSeriesOHLC, o.showBarChange, o.showStudyValues]
          for (const e of r)
            e.subscribe(this, () => {
              this._isValuesHidden.setValue(this._getValuesHiddenValue())
            })
          this.update()
        }
        destroy() {
          super.destroy()
          const e = this._model
            .model()
            .properties()
            .childs()
            .paneProperties.childs()
            .legendProperties.childs()
          e.showSeriesTitle.unsubscribeAll(this),
            e.showStudyTitles.unsubscribeAll(this),
            e.showSeriesOHLC.unsubscribeAll(this),
            e.showBarChange.unsubscribeAll(this),
            e.showStudyValues.unsubscribeAll(this),
            this._onDestroy.fire()
        }
        error() {
          return this._error.readonly()
        }
        isPineScriptDataSource() {
          return this._isPineScriptDataSource.readonly()
        }
        updateSource(e) {
          this._source !== e &&
            (this._values.setValue([]),
            super.updateSource(e),
            this._updateAbleShowSourceCode(),
            this._updateSymbolLogoModel())
        }
        onRemoveSource() {
          var e
          this._source.isUserDeletable() &&
            (this._source.hasChildren()
              ? ((e = this._model.removeSource.bind(
                  this._model,
                  this._source,
                  !1,
                )),
                (0, Te.showConfirm)({
                  title: B.t(null, void 0, s(38154)),
                  text: B.t(null, void 0, s(52003)),
                  onConfirm: ({ dialogClose: t }) => {
                    e(), t()
                  },
                }))
              : this._model.removeSource(this._source, !1),
            z('Remove sources'))
        }
        onShowSourceCode() {
          0
        }
        setGlobalVisibility(e) {
          this._globalVisibility.setValue(e)
        }
        globalVisibility() {
          return this._globalVisibility.readonly()
        }
        getFullTitle() {
          return [this._titles.title, this._titles.args]
            .map((e) => e.value())
            .join(' ')
        }
        _updateTitles() {
          const e = (0, o.ensureNotNull)(
            this._source.statusView(),
          ).getSplitTitle()
          this._titles.title.setValue((0, Q.clean)(e[0], !0))
          const t = Array.isArray(e[1]) ? e[1].join(' ') : e[1] || ''
          this._titles.args.setValue((0, Q.clean)(t, !0))
        }
        _updateValues() {
          const e = this._source.legendView()
          if (null === e) return
          if (0 === e.items().length) return
          const t = this._values.value()
          if (0 === t.length) {
            const t = e
              .items()
              .map((e) => ({
                value: new a.WatchedValue(e.value()),
                color: new a.WatchedValue(ae(e.color())),
                visible: new a.WatchedValue(e.visible()),
                unimportant: new a.WatchedValue(e.unimportant()),
                title: new a.WatchedValue(e.title()),
              }))
            this._values.setValue(t)
          } else {
            const s = e.items()
            for (let e = 0; e < s.length; e++) {
              const i = t[e],
                l = s[e]
              i.value.setValue(l.value()),
                i.color.setValue(ae(l.color())),
                i.visible.setValue(l.visible()),
                i.title.setValue(l.title())
            }
          }
        }
        _updateStates() {
          super._updateStates(),
            void 0 !== this._error &&
              this._error.setValue(Boolean(this._source.isFailed()))
        }
        _getTitleHiddenValue() {
          const e = this._model
            .model()
            .properties()
            .childs()
            .paneProperties.childs()
            .legendProperties.childs()
          return this._isSymbolLikeStudy()
            ? !e.showSeriesTitle.value()
            : !e.showStudyTitles.value()
        }
        _getDisabledOnIntervalState() {
          return (
            !(
              !(0, We.isStudy)(this._source) &&
              !(0, We.isStudyStub)(this._source)
            ) && !this._source.isActualInterval()
          )
        }
        _getValuesHiddenValue() {
          if (!this._hasValues()) return !0
          const e = this._model
            .model()
            .properties()
            .childs()
            .paneProperties.childs()
            .legendProperties.childs()
          return this._isSymbolLikeStudy()
            ? !e.showSeriesOHLC.value() && !e.showBarChange.value()
            : !e.showStudyValues.value()
        }
        _isSymbolLikeStudy() {
          return (
            this._source instanceof ze.study_Overlay ||
            this._source instanceof Ne.StudyCompare
          )
        }
        _updateAbleShowSourceCode() {
          0
        }
        _updateVisibilityPineAction(e) {
          null !== this._pineAction &&
            (this._pineAction.visible.setValue(e),
            this._isPineScriptDataSource.setValue(e))
        }
        _createActions() {
          if (this._options.readOnlyMode) return
          if (
            ((this._pineAction = {
              iconMap: new Map([
                ['large', Pe],
                ['small', Pe],
              ]),
              action: (0, m.wrapHandlerWithPreventEvent)(
                this.onShowSourceCode.bind(this),
              ),
              visible: new a.WatchedValue(!1),
              title: new a.WatchedValue(Re),
              dataset: { name: 'legend-pine-action' },
            }),
            je)
          ) {
            const e = {
              iconMap: new Map([
                ['large', Se],
                ['small', ye],
              ]),
              action: (0, m.wrapHandlerWithPreventEvent)(
                this.onToggleDisabled.bind(this),
              ),
              visible: new a.WatchedValue(!this._getDisabledOnIntervalState()),
              className: y.eye,
              title: new a.WatchedValue(this._getEyeTitle()),
              dataset: { name: 'legend-show-hide-action' },
            }
            this._actions.push(e),
              this._disabled.subscribe(() => {
                e.title.setValue(this._getEyeTitle())
              })
            const t = {
              iconMap: new Map([
                ['large', Se],
                ['small', ye],
              ]),
              action: (0, m.wrapHandlerWithPreventEvent)(
                this.onShowSettings.bind(this, we.TabNames.visibility),
              ),
              visible: new a.WatchedValue(this._getDisabledOnIntervalState()),
              className: y.intervalEye,
              title: new a.WatchedValue($e),
              dataset: { name: 'legend-interval-show-hide-action' },
            }
            this._actions.push(t),
              this._disabledOnInterval.subscribe((s) => {
                t.visible.setValue(s), e.visible.setValue(!s)
              })
          }
          if (
            Ye &&
            qe &&
            (!(0, We.isStudy)(this._source) ||
              new xe.MetaInfoHelper(
                this._source.metaInfo(),
              ).hasUserEditableOptions())
          ) {
            const e = {
              iconMap: new Map([
                ['large', De],
                ['small', De],
              ]),
              action: (0, m.wrapHandlerWithPreventEvent)(
                this.onShowSettings.bind(this),
              ),
              visible: new a.WatchedValue(this._getIsEditable()),
              title: new a.WatchedValue(Fe),
              dataset: { name: 'legend-settings-action' },
            }
            this._actions.push(e),
              this._isEditable.subscribe((t) => {
                e.visible.setValue(t)
              })
          }
          if (Ze) {
            const e = {
              iconMap: new Map([
                ['large', Ie],
                ['small', Be],
              ]),
              action: (0, m.wrapHandlerWithPreventEvent)(
                this.onRemoveSource.bind(this),
              ),
              visible: new a.WatchedValue(this._getIsEditable()),
              title: new a.WatchedValue(Ue),
              dataset: { name: 'legend-delete-action' },
            }
            this._actions.push(e),
              this._isEditable.subscribe((t) => {
                e.visible.setValue(t)
              })
          }
          const e = {
            iconMap: new Map([
              ['large', Me],
              ['small', fe],
            ]),
            action: this._moreActionHandler.bind(this),
            visible: new a.WatchedValue(this._getIsEditable()),
            title: new a.WatchedValue(Ge),
            dataset: { name: 'legend-more-action' },
          }
          this._actions.push(e),
            this._isEditable.subscribe((t) => {
              e.visible.setValue(t)
            })
        }
        _updateSymbolLogoModel() {
          var e
          if (
            (null === (e = this._symbolLogoViewModel.value()) ||
              void 0 === e ||
              e.destroy(),
            (0, Oe.isSymbolSourceWithQuotesProvider)(this._source))
          ) {
            const e = this._model
              .model()
              .properties()
              .childs()
              .paneProperties.childs()
              .legendProperties.childs()
            this._symbolLogoViewModel.setValue(be(this._source, e))
          } else this._symbolLogoViewModel.setValue(null)
        }
      }
      var Je = s(39347),
        Qe = s(10643),
        Ke = s(42960),
        et = s(98425),
        tt = s(53180),
        st = s(51983)
      function it(e, t, s) {
        e.setProperty(t, !t.value(), s)
      }
      const lt = new te.TranslatedString(
          'change symbol description visibility',
          B.t(null, void 0, s(26717)),
        ),
        ot = new te.TranslatedString(
          'change open market status visibility',
          B.t(null, void 0, s(18644)),
        ),
        at = new te.TranslatedString(
          'change OHLC values visibility',
          B.t(null, void 0, s(57889)),
        ),
        nt = new te.TranslatedString(
          'change bar change visibility',
          B.t(null, void 0, s(45110)),
        ),
        rt = new te.TranslatedString(
          'change indicator titles visibility',
          B.t(null, void 0, s(31325)),
        ),
        dt = new te.TranslatedString(
          'change indicator arguments visibility',
          B.t(null, void 0, s(96162)),
        ),
        ut = new te.TranslatedString(
          'change indicator values visibility',
          B.t(null, void 0, s(99774)),
        ),
        ht = new te.TranslatedString(
          'change volume values visibility',
          B.t(null, void 0, s(9455)),
        ),
        ct = new te.TranslatedString(
          'change symbol field visibility',
          B.t(null, void 0, s(6091)),
        ),
        _t = B.t(null, void 0, s(63143)),
        pt = B.t(null, void 0, s(75991)),
        mt = B.t(null, void 0, s(99487)),
        gt = B.t(null, void 0, s(22519)),
        vt = B.t(null, void 0, s(1111)),
        bt = B.t(null, void 0, s(26315)),
        wt = B.t(null, void 0, s(26935)),
        yt = B.t(null, void 0, s(84098)),
        St = B.t(null, void 0, s(46041)),
        ft = (0, tt.appendEllipsis)(B.t(null, void 0, s(89517))),
        Mt = d.enabled('symbol_info_price_source')
      var Ct = s(78071),
        Et = s(38618),
        Vt = s(61146),
        kt = s(967),
        At = s(84917),
        Lt = s(41249),
        Wt = s(32923)
      function Tt(e) {
        return e === At.WeekDays.SUNDAY ? At.WeekDays.SATURDAY : e - 1
      }
      function xt(e) {
        return e === At.WeekDays.SATURDAY ? At.WeekDays.SUNDAY : e + 1
      }
      function Ht(e, t) {
        const s = Tt(t)
        return 0 === e[s].entries.length
          ? Ht(e, s)
          : { dayIndex: s, entries: e[s].entries }
      }
      function Dt(e, t) {
        const s = xt(t)
        return 0 === e[s].entries.length
          ? Dt(e, s)
          : { dayIndex: s, entries: e[s].entries }
      }
      function Pt(e) {
        for (; e > Lt.minutesPerDay; ) e -= Lt.minutesPerDay
        const t = e % 60,
          s = (e - t) / 60
        return (
          (0, Vt.numberToStringWithLeadingZero)(s, 2) +
          ':' +
          (0, Vt.numberToStringWithLeadingZero)(t, 2)
        )
      }
      const Bt = {
        [At.WeekDays.MONDAY]: {
          title: kt.weekDaysShortNames[At.WeekDays.MONDAY],
          isActive: !1,
          entries: [],
        },
        [At.WeekDays.TUESDAY]: {
          title: kt.weekDaysShortNames[At.WeekDays.TUESDAY],
          isActive: !1,
          entries: [],
        },
        [At.WeekDays.WEDNESDAY]: {
          title: kt.weekDaysShortNames[At.WeekDays.WEDNESDAY],
          isActive: !1,
          entries: [],
        },
        [At.WeekDays.THURSDAY]: {
          title: kt.weekDaysShortNames[At.WeekDays.THURSDAY],
          isActive: !1,
          entries: [],
        },
        [At.WeekDays.FRIDAY]: {
          title: kt.weekDaysShortNames[At.WeekDays.FRIDAY],
          isActive: !1,
          entries: [],
        },
        [At.WeekDays.SATURDAY]: {
          title: kt.weekDaysShortNames[At.WeekDays.SATURDAY],
          isActive: !1,
          entries: [],
        },
        [At.WeekDays.SUNDAY]: {
          title: kt.weekDaysShortNames[At.WeekDays.SUNDAY],
          isActive: !1,
          entries: [],
        },
      }
      function It(e, t) {
        return e.start.value === t.start.value && e.end.value === t.end.value
      }
      function zt(e, t) {
        return It(e[0], t[0])
      }
      function Nt(e) {
        const t = e.start(),
          s = e.length(),
          i = e.sessionStartDayOfWeek(),
          l = e.sessionEndDayOfWeek(),
          o = Pt(t),
          a = Pt(t + s)
        return s > Lt.minutesPerDay
          ? `${kt.weekDaysShortNames[i]} ${o} — ${kt.weekDaysShortNames[l]} ${a}`
          : `${o} — ${a}`
      }
      function Ot(e, t, s, i) {
        return Math.abs(i - s) > 1
          ? `${kt.weekDaysShortNames[s]} ${e.title} — ${kt.weekDaysShortNames[i]} ${t.title}`
          : `${e.title} — ${t.title}`
      }
      function Ft(e, t, s) {
        for (const i of t) {
          let t = i.sessionStartDayOfWeek()
          const l = i.start(),
            o = i.length(),
            a = l + o,
            n = []
          if (a <= Lt.minutesPerDay) n.push([l, a])
          else {
            const e = Math.min(Lt.minutesPerDay - l, o)
            n.push([l, l + e]), n.push([0, o - e])
          }
          for (let l = 0; l < n.length; l++) {
            const o = n[l],
              [a, r] = o,
              d = a / Lt.minutesPerDay,
              u = (0, Ct.lowerbound)(
                e[t].entries,
                d,
                (e, t) => e.start.value < t,
              ),
              h = {
                start: {
                  value: d,
                  title: Pt(a),
                  isFirstOrLastPoint: a === i.start(),
                },
                end: {
                  value: r / Lt.minutesPerDay,
                  title: Pt(r),
                  isFirstOrLastPoint: n.length - 1 === l,
                },
                type: s,
                tooltip: Nt(i),
                showStartForLastEntry: !1,
                showEndForFirstEntry: !1,
              }
            e[t].entries.splice(u, 0, h), (t = xt(t))
          }
        }
      }
      class Rt {
        constructor(e) {
          ;(this.sessionsDays = new a.WatchedValue((0, n.clone)(Bt))),
            (this.todaySession = new a.WatchedValue(
              (0, n.clone)({ entries: [] }),
            )),
            (this._todayInExchangeTime = null),
            (this._symbolInfo = e.symbolInfo().spawn()),
            this._symbolInfo.subscribe(
              this._updateEntriesBySubSessions.bind(this),
              { callWithLast: !0 },
            )
        }
        destroy() {
          this._symbolInfo.destroy()
        }
        currentTimeValue() {
          return null === this._todayInExchangeTime
            ? -1
            : Lt.get_minutes_from_midnight(this._todayInExchangeTime) /
                Lt.minutesPerDay
        }
        timezone() {
          const e = this._symbolInfo.value()
          return null === e ? '' : (0, Et.timezoneTitle)(e.timezone)
        }
        _updateEntriesBySubSessions(e) {
          var t
          this._updateTodayWithOffsets(e)
          const s = this._createSubSessionSpecs(e),
            i =
              (l =
                (null === (t = this._todayInExchangeTime) || void 0 === t
                  ? void 0
                  : t.getUTCDay()) || new Date().getDay()) <
              At.WeekDays.SATURDAY
                ? l + 1
                : At.WeekDays.SUNDAY
          var l
          const a = (0, n.clone)(Bt)
          a[i].isActive = !0
          for (const e of Array.from(s.keys())) {
            Ft(
              a,
              (0, o.ensureDefined)(s.get(e)).getEntriesForWeekByCalendar(
                (0, o.ensureNotNull)(this._todayInExchangeTime),
              ),
              e,
            )
          }
          !(function (e) {
            const t = Pt(0),
              s = Pt(Lt.minutesPerDay),
              i = (0, n.clone)(e)
            for (const l of Object.keys(e)) {
              const a = parseInt(l),
                n = e[a].entries
              if (0 === n.length) {
                n.push({
                  start: { value: 0, title: t, isFirstOrLastPoint: !0 },
                  end: { value: 1, title: s, isFirstOrLastPoint: !0 },
                  type: 3,
                  tooltip: `${t} — ${s}`,
                  showStartForLastEntry: !1,
                  showEndForFirstEntry: !1,
                })
                continue
              }
              const r = Tt(a),
                d = xt(a),
                u = i[r].entries,
                h = i[d].entries,
                c = Ht(i, a),
                _ = Dt(i, a),
                p = n.length
              let m = 0
              for (let e = 0; e < p; e++) {
                const s = n[e],
                  i = e > 0 ? n[e - 1] : null,
                  l = 0 === e
                if (
                  0 === s.start.value ||
                  (0 === s.start.value && 1 === s.end.value) ||
                  (null !== i && s.start.value === i.end.value)
                ) {
                  m++
                  continue
                }
                const r = l
                    ? c.entries[c.entries.length - 1]
                    : (0, o.ensureNotNull)(i),
                  d = {
                    start: {
                      value: l ? 0 : n[e - 1].end.value,
                      title: l ? t : n[e - 1].end.title,
                      isFirstOrLastPoint:
                        !(l && u.length > 0) || 1 === u[u.length - 1].end.value,
                    },
                    end: {
                      value: s.start.value,
                      title: s.start.title,
                      isFirstOrLastPoint: !0,
                    },
                    type: 3,
                    tooltip: Ot(r.end, s.start, c.dayIndex, a),
                    showStartForLastEntry: !1,
                    showEndForFirstEntry: !1,
                  }
                n.splice(m, 0, d), (m = e + 2)
              }
              const g = n[n.length - 1]
              1 !== g.end.value &&
                n.push({
                  start: {
                    value: g.end.value,
                    title: g.end.title,
                    isFirstOrLastPoint: !0,
                  },
                  end: {
                    value: 1,
                    title: Pt(Lt.minutesPerDay),
                    isFirstOrLastPoint:
                      !(h.length > 0) || 0 === h[0].start.value,
                  },
                  type: 3,
                  tooltip: Ot(g.end, _.entries[0].start, a, _.dayIndex),
                  showStartForLastEntry: !1,
                  showEndForFirstEntry: !1,
                })
            }
          })(a),
            (function (e) {
              for (const i of Object.keys(e)) {
                const l = parseInt(i),
                  o = e[l].entries
                if (1 === o.length) continue
                const a = Tt(l),
                  n = xt(l),
                  r = o[0],
                  d = o[o.length - 1]
                r.start.isFirstOrLastPoint ||
                  (r.showStartForLastEntry =
                    ((t = o),
                    (s = e[a].entries),
                    It(t[t.length - 1], s[s.length - 1]))),
                  d.end.isFirstOrLastPoint ||
                    (d.showEndForFirstEntry = zt(o, e[n].entries))
              }
              var t, s
            })(a),
            this.sessionsDays.setValue(a),
            this.todaySession.setValue(a[i])
        }
        _createSubSessionSpecs(e) {
          if (null === e) return new Map()
          if (void 0 === e.subsessions)
            return new Map([
              [
                0,
                new Wt.SessionSpec(
                  e.timezone,
                  e.session,
                  e.session_holidays,
                  e.corrections,
                ),
              ],
            ])
          const t = 'regular',
            s = 'premarket',
            i = 'postmarket',
            l = [t, s, i],
            o = new Map()
          for (const a of l) {
            let l = null
            switch (a) {
              case t:
                l = 0
                break
              case s:
                l = 1
                break
              case i:
                l = 2
            }
            if (null !== l) {
              const t = e.subsessions.find((e) => e.id === a)
              void 0 !== t &&
                o.set(
                  l,
                  new Wt.SessionSpec(
                    e.timezone,
                    t['session-display'] || t.session,
                    e.session_holidays,
                    t['session-correction'],
                  ),
                )
            }
          }
          return o
        }
        _updateTodayWithOffsets(e) {
          if (null === e) return void (this._todayInExchangeTime = null)
          const t = 1e3 * window.ChartApiInstance.serverTimeOffset()
          this._todayInExchangeTime = Lt.get_cal_from_unix_timestamp_ms(
            Lt.get_timezone(e.timezone),
            Date.now() + t,
          )
        }
      }
      var Ut = s(50959),
        Gt = s(77975),
        $t = s(36174),
        jt = s(83314)
      const Yt = new WeakMap()
      function qt(e) {
        return (
          Yt.has(e) || Yt.set(e, (0, $t.randomHash)()),
          (0, o.ensureDefined)(Yt.get(e))
        )
      }
      const Zt = new Map([
          [0, jt.green],
          [1, jt.orange],
          [2, jt.blue],
          [3, jt.gray],
        ]),
        Xt = new Map([
          [0, B.t(null, void 0, s(83949))],
          [1, B.t(null, void 0, s(56042))],
          [2, B.t(null, void 0, s(29985))],
          [3, B.t(null, void 0, s(95814))],
        ]),
        Jt = B.t(null, void 0, s(80227))
      function Qt(e) {
        const { segment: t, forceStart: s, forceEnd: i } = e,
          l = t.end.value - t.start.value,
          o = l < 0.03,
          a = {
            left: 100 * t.start.value + '%',
            width: `calc(${100 * l}% + ${o ? 2 : 0}px)`,
          },
          n = C(
            jt.segment,
            Zt.get(t.type),
            (s || t.start.isFirstOrLastPoint) && jt.start,
            (i || t.end.isFirstOrLastPoint) && jt.end,
            o && jt.small,
            'common-tooltip-html',
            'apply-common-tooltip',
          ),
          r = (function (e, t) {
            return `<div class="${jt.tooltip}">\n\t\t<span class="${Zt.get(t)}">${Xt.get(t)}</span>\n\t\t<span class="${jt.time}">${e}</span>\n\t</div>`
          })(t.tooltip, t.type)
        return Ut.createElement('div', {
          className: n,
          style: a,
          'data-tooltip': r,
        })
      }
      function Kt(e) {
        const { sessionDay: t } = e,
          s = t.entries.map((e, s) =>
            Ut.createElement(Qt, {
              key: `${qt(e)}Segment`,
              segment: e,
              forceStart: 0 === s && 3 === e.type,
              forceEnd: s === t.entries.length - 1 && 3 === e.type,
            }),
          ),
          i = C(jt.sessionDay, t.isActive && jt.active)
        return Ut.createElement(
          'div',
          { className: i },
          Ut.createElement('div', { className: jt.weekDay }, t.title),
          Ut.createElement('div', { className: jt.sessionDaySegments }, s),
        )
      }
      function es(e) {
        const { sessionDays: t, currentTimeMark: s } = e,
          i = [],
          l = parseInt(
            Object.keys(t).filter((e) => t[parseInt(e)].isActive)[0],
          ),
          o = t[l],
          a = o.entries.filter((e) => e.start.value <= s && e.end.value >= s)[0]
        !a.start.isFirstOrLastPoint && a.showStartForLastEntry
          ? i.push(o.entries[o.entries.length - 1].start)
          : i.push(a.start)
        const n =
          !a.end.isFirstOrLastPoint && a.showEndForFirstEntry
            ? o.entries[0].end
            : a.end
        if ((i[0].value !== n.value && i.push(n), 0 === i.length)) return null
        i.sort((e, t) => e.value - t.value)
        const r = i.map((e) =>
            Ut.createElement(
              'div',
              { key: qt(e), className: jt.timeMark },
              e.title,
            ),
          ),
          d = 100 * (2 === i.length ? i[1].value - i[0].value : 0),
          u = C(d > 12 && jt.timeMarkSegmentAlignByEnds, jt.timeMarkSegment)
        return Ut.createElement(
          'div',
          { className: jt.sessionDay },
          Ut.createElement('div', { className: jt.weekDay }),
          Ut.createElement(
            'div',
            { className: jt.timeMarkWrapper },
            Ut.createElement(
              'div',
              {
                className: u,
                style: { left: 100 * i[0].value + '%', width: `${d}%` },
              },
              r,
            ),
          ),
        )
      }
      class ts {
        constructor(e) {
          ;(this._source = e), (this._fullSessionScheduleViewModel = new Rt(e))
        }
        destroy() {
          this._fullSessionScheduleViewModel.destroy()
        }
        renderer(e, t) {
          var s, i
          return (
            null ===
              (i =
                null === (s = this._source.marketStatusModel()) || void 0 === s
                  ? void 0
                  : s.futuresContractExpirationTime()) || void 0 === i
              ? void 0
              : i.expired().value()
          )
            ? null
            : (function (e) {
                const { key: t, className: s, now: i, timezone: l } = e,
                  o = (0, Gt.useWatchedValueReadonly)({
                    watchedValue: e.sessionDays,
                  }),
                  a = Object.values(o).filter((e) => e.isActive)[0],
                  n = C(s, jt.wrapper)
                return Ut.createElement(
                  'div',
                  { key: t, className: n },
                  Ut.createElement(
                    'div',
                    { className: jt.sessionDayWrapper },
                    Ut.createElement(Kt, { sessionDay: a }),
                    Ut.createElement(
                      'div',
                      { className: jt.nowWrapper },
                      Ut.createElement('div', {
                        className: jt.now,
                        style: { left: 100 * i + '%' },
                      }),
                    ),
                  ),
                  Ut.createElement(es, { sessionDays: o, currentTimeMark: i }),
                  Ut.createElement(
                    'div',
                    { className: jt.timezone },
                    `${Jt}: ${l}`,
                  ),
                )
              })({
                key: e,
                className: t,
                sessionDays: this._fullSessionScheduleViewModel.sessionsDays,
                now: this._fullSessionScheduleViewModel.currentTimeValue(),
                timezone: this._fullSessionScheduleViewModel.timezone(),
              })
        }
        updateSource(e) {}
      }
      var ss = s(48891),
        is = s(94474),
        ls = s(64123)
      class os {
        constructor(e) {
          ;(this.isBlinkingMode = new a.WatchedValue(!1)),
            (this._status = new a.WatchedValue(null)),
            (this._fullTooltip = new a.WatchedValue(null)),
            (this._iconClassNames = new a.WatchedValue(null)),
            (this._visible = new a.WatchedValue(!1)),
            (this._tooltip = new a.WatchedValue(null)),
            (this._icon = new a.WatchedValue(null)),
            (this._className = new a.WatchedValue(null)),
            (this._customColor = new a.WatchedValue(null)),
            (this._infoMaps = e),
            (this._size = e.size || 'small'),
            this._status.subscribe(this._updateByStatus.bind(this), {
              callWithLast: !0,
            })
        }
        turnOffBlinkingMode() {}
        status() {
          return this._status
        }
        tooltip() {
          return this._tooltip
        }
        icon() {
          return this._icon
        }
        className() {
          return this._className
        }
        visible() {
          return this._visible
        }
        size() {
          return this._size
        }
        fullInfo() {
          return this._fullTooltip
        }
        customColor() {
          return this._customColor
        }
        _getTooltip(e) {
          var t, s
          return null !==
            (s =
              null === (t = this._infoMaps.tooltipMap) || void 0 === t
                ? void 0
                : t.get(e)) && void 0 !== s
            ? s
            : null
        }
        _getIcon(e) {
          let t
          const s = this._infoMaps.iconMap.get(e)
          return void 0 !== s && (t = s.get(this._size)), t || null
        }
        _getClassName(e) {
          return this._infoMaps.classNameMap.get(e) || null
        }
        _getFullTooltipIconClassNames(e) {
          const t = this._getClassName(e)
          return t ? [ls.statusItem, t] : []
        }
        _getTitle(e) {
          var t, s
          return null !==
            (s =
              null === (t = this._infoMaps.titleMap) || void 0 === t
                ? void 0
                : t.get(e)) && void 0 !== s
            ? s
            : null
        }
        _getTitleColor(e) {
          var t, s
          return null !==
            (s =
              null === (t = this._infoMaps.titleColorMap) || void 0 === t
                ? void 0
                : t.get(e)) && void 0 !== s
            ? s
            : null
        }
        _getAction(e) {
          var t, s
          return null !==
            (s =
              null === (t = this._infoMaps.actionMap) || void 0 === t
                ? void 0
                : t.get(e)) && void 0 !== s
            ? s
            : null
        }
        _getHTML(e) {
          var t, s, i
          return null !==
            (i =
              null ===
                (s =
                  null === (t = this._infoMaps.htmlMap) || void 0 === t
                    ? void 0
                    : t.get(e)) || void 0 === s
                ? void 0
                : s.map(is.htmlEscape)) && void 0 !== i
            ? i
            : []
        }
        async _updateFullTooltip() {
          const e = this._status.value()
          null !== e
            ? this._fullTooltip.setValue([
                {
                  icon: this._getIcon(e),
                  iconClassName: this._getFullTooltipIconClassNames(e),
                  title: this._getTitle(e),
                  titleColor: this._getTitleColor(e),
                  html: this._getHTML(e),
                  size: this._size,
                  action: this._getAction(e),
                },
              ])
            : this._fullTooltip.setValue(null)
        }
        _updateByStatus(e) {
          if (null === e || this._shouldBeHiddenByStatus(e))
            return (
              this._icon.setValue(null),
              this._tooltip.setValue(null),
              void this._visible.setValue(!1)
            )
          this._icon.setValue(this._getIcon(e)),
            this._className.setValue(this._getClassName(e)),
            this._tooltip.setValue(this._getTooltip(e)),
            this._visible.setValue(!0),
            this._updateFullTooltip()
        }
        _shouldBeHiddenByStatus(e) {
          return !1
        }
      }
      var as = s(12646),
        ns = s(31233),
        rs = s(55593),
        ds = s(69410),
        us = s(52828),
        hs = s(91665),
        cs = s(39379),
        _s = s(72844),
        ps = s(23683)
      const ms = new Map([
          ['small', as],
          ['medium', ns],
          ['large', ns],
        ]),
        gs = new Map([
          ['small', rs],
          ['medium', ds],
          ['large', ds],
        ]),
        vs = new Map([
          ['small', us],
          ['medium', hs],
          ['large', hs],
        ]),
        bs =
          (new Map([
            ['small', cs],
            ['medium', cs],
            ['large', cs],
          ]),
          new Map([
            ['small', _s],
            ['medium', ps],
            ['large', ps],
          ]),
          new Map([
            ['small', ''],
            ['medium', ''],
            ['large', ''],
          ]),
          ss.colorsPalette['color-delay-mode']),
        ws = ss.colorsPalette['color-eod-mode'],
        ys = ss.colorsPalette['color-notaccurate-mode'],
        Ss =
          (ss.colorsPalette['color-primary-symbol'],
          ss.colorsPalette['color-halal'],
          ss.colorsPalette['color-continuous'],
          B.t(null, void 0, s(57310))),
        fs = B.t(null, void 0, s(59315)),
        Ms = B.t(null, void 0, s(15815)),
        Cs = B.t(null, void 0, s(45e3)),
        Es = B.t(null, void 0, s(7435)),
        Vs =
          (B.t(null, void 0, s(24680)),
          B.t(null, void 0, s(99214)),
          B.t(null, void 0, s(6044)),
          B.t(null, void 0, s(31461)),
          B.t(null, void 0, s(32960)),
          B.t(null, void 0, s(52449)),
          (0, is.htmlEscape)(B.t(null, void 0, s(11155)))),
        ks = (0, is.htmlEscape)(B.t(null, void 0, s(1084))),
        As = (0, is.htmlEscape)(B.t(null, void 0, s(52984))),
        Ls = (0, is.htmlEscape)(B.t(null, void 0, s(89022))),
        Ws = (0, is.htmlEscape)(B.t(null, void 0, s(52916))),
        Ts = (0, is.htmlEscape)(B.t(null, void 0, s(49321))),
        xs = (0, is.htmlEscape)(B.t(null, void 0, s(25978))),
        Hs = (0, is.htmlEscape)(B.t(null, void 0, s(28412))),
        Ds = (0, is.htmlEscape)(B.t(null, void 0, s(91459))),
        Ps = B.t(null, void 0, s(6667)),
        Bs =
          (B.t(
            null,
            {
              context:
                'Part of: "Real-time data for {symbolName} is provided by {exchange} exchange."',
            },
            s(12978),
          ),
          B.t(
            null,
            {
              context:
                'Part of: "Real-time data for {symbolName} is provided by {exchange} exchange."',
            },
            s(64565),
          ),
          B.t(null, void 0, s(2310))),
        Is = B.t(null, void 0, s(29512))
      B.t(null, void 0, s(53205)), B.t(null, void 0, s(15993))
      var zs = s(56840)
      const Ns = 'tv.alreadyBlinkedStatuses',
        Os = []
      function Fs() {
        return zs.getJSON(Ns, Os)
      }
      const Rs = new a.WatchedValue(Fs())
      function Us(e) {
        const t = zs.getJSON(Ns, Os)
        t.includes(e) || (t.push(e), zs.setJSON(Ns, t), Rs.setValue(Fs()))
      }
      zs.onSync.subscribe(null, () => Rs.setValue(Fs()))
      const Gs = Rs
      var $s = s(93544)
      const js = (0, He.getLogger)('Chart.LegendWidget'),
        Ys = [
          'TFEXDelayForGuest',
          'MOEXDelayForGuest',
          'CHIXAuDelayForGuest',
          'MILDelayForGuest',
          'NGMDelayForGuest',
          'DEForGuest',
          'ICESGDelayForGuest',
          'TAIFEXDelayForGuest',
          'TURQUOISEDelayForGuest',
          'ADXDelayForGuest',
          'TRADEGATEDelayForGuest',
          'LUXSEDelayForGuest',
          'NSENGDelayForGuest',
        ],
        qs = new Map([
          ['DelayToRealtime', ms],
          ['DelayNoRealtime', ms],
          ['TFEXDelayForGuest', ms],
          ['MOEXDelayForGuest', ms],
          ['CHIXAuDelayForGuest', ms],
          ['MILDelayForGuest', ms],
          ['NGMDelayForGuest', ms],
          ['ICESGDelayForGuest', ms],
          ['TAIFEXDelayForGuest', ms],
          ['TURQUOISEDelayForGuest', ms],
          ['ADXDelayForGuest', ms],
          ['TRADEGATEDelayForGuest', ms],
          ['LUXSEDelayForGuest', ms],
          ['NSENGDelayForGuest', ms],
          ['DEForGuest', ms],
          ['EOD', gs],
          ['TickByTick', vs],
          ['BATSToRealtime', vs],
          ['DelayWithoutMarketAgreement', ms],
        ]),
        Zs = new Map([
          ['DelayToRealtime', ls.delay],
          ['DelayNoRealtime', ls.delay],
          ['TFEXDelayForGuest', ls.delay],
          ['MOEXDelayForGuest', ls.delay],
          ['CHIXAuDelayForGuest', ls.delay],
          ['MILDelayForGuest', ls.delay],
          ['NGMDelayForGuest', ls.delay],
          ['ICESGDelayForGuest', ls.delay],
          ['TAIFEXDelayForGuest', ls.delay],
          ['TURQUOISEDelayForGuest', ls.delay],
          ['ADXDelayForGuest', ls.delay],
          ['TRADEGATEDelayForGuest', ls.delay],
          ['LUXSEDelayForGuest', ls.delay],
          ['NSENGDelayForGuest', ls.delay],
          ['DEForGuest', ls.delay],
          ['EOD', ls.eod],
          ['TickByTick', ls.notAccurate],
          ['BATSToRealtime', ls.notAccurate],
          ['DelayWithoutMarketAgreement', ls.delay],
        ]),
        Xs = new Map([
          ['DelayToRealtime', bs],
          ['DelayNoRealtime', bs],
          ['TFEXDelayForGuest', bs],
          ['MOEXDelayForGuest', bs],
          ['CHIXAuDelayForGuest', bs],
          ['MILDelayForGuest', bs],
          ['NGMDelayForGuest', bs],
          ['ICESGDelayForGuest', bs],
          ['TAIFEXDelayForGuest', bs],
          ['TURQUOISEDelayForGuest', bs],
          ['ADXDelayForGuest', bs],
          ['TRADEGATEDelayForGuest', bs],
          ['LUXSEDelayForGuest', bs],
          ['NSENGDelayForGuest', bs],
          ['DEForGuest', bs],
          ['EOD', ws],
          ['TickByTick', ys],
          ['BATSToRealtime', ys],
          ['DelayWithoutMarketAgreement', bs],
        ])
      B.t(null, void 0, s(36004)),
        B.t(null, void 0, s(36051)),
        (0, is.htmlEscape)(B.t(null, void 0, s(25046)))
      class Js extends os {
        constructor(e, t, s) {
          super({ iconMap: qs, classNameMap: Zs, titleColorMap: Xs, size: t }),
            (this._dataUpdatedInfo = new a.WatchedValue(null).spawn()),
            (this._options = s),
            (this._model = e),
            (this._dataModeBlinkingStatuses = Gs.spawn()),
            this._dataModeBlinkingStatuses.subscribe(
              this._updateBlinkingMode.bind(this),
            ),
            (this.turnOffBlinkingMode = this._turnOffBlinking.bind(this)),
            this.setModel(e)
        }
        destroy() {
          this._dataUpdatedInfo.destroy(),
            this._dataModeBlinkingStatuses.destroy()
        }
        setModel(e) {
          if ((this._dataUpdatedInfo.destroy(), null === e))
            return (
              (this._model = e),
              void (this._dataUpdatedInfo = new a.WatchedValue(null).spawn())
            )
          ;(this._dataUpdatedInfo = e.status().spawn()),
            this._dataUpdatedInfo.subscribe(this._updateStatus.bind(this), {
              callWithLast: !0,
            })
        }
        _shouldBeHiddenByStatus(e) {
          var t
          return (
            !!(null === (t = this._options.shouldBeHiddenRegardlessOfStatus) ||
            void 0 === t
              ? void 0
              : t.value()) || super._shouldBeHiddenByStatus(e)
          )
        }
        _getTooltip() {
          const e = this._getShortTexts()
          return null === e ? null : Object.values(e).join(' · ')
        }
        async _updateFullTooltip() {
          const e = this._dataUpdatedInfo.value(),
            t = this._status.value()
          if (null === e || null === t)
            return void this._fullTooltip.setValue(null)
          const s = this._getShortTexts(),
            [i, l] = await Promise.all([this._getHtmls(), this._getActions()])
          if (e !== this._dataUpdatedInfo.value()) return
          const o = []
          for (const a of e) {
            const e = a.mode
            o.push({
              icon: this._getIcon(e),
              iconClassName: this._getFullTooltipIconClassNames(t),
              title: s && s[e],
              titleColor: this._getTitleColor(e),
              html: i && i[e],
              size: this._size,
              action: l && l[e],
            })
          }
          this._fullTooltip.setValue(o)
        }
        _updateStatus(e) {
          var t
          const s = null !== e ? e[0] : null
          this._status.setValue(
            null !== (t = null == s ? void 0 : s.mode) && void 0 !== t
              ? t
              : null,
            !0,
          ),
            this._updateBlinkingMode()
        }
        async _getHtmls() {
          var e, t
          const i = this._dataUpdatedInfo.value()
          if (null === i || null === this._model) return Promise.resolve(null)
          const l = {},
            o = this._model.symbolName()
          let a = null,
            n = null
          try {
            ;(a = await this._model.description()), (n = this._model.exchange())
          } catch (e) {
            js.logError(
              `Can't get exchange description, reason: ${(0, $s.errorToString)(e)}`,
            )
          }
          for (const r of i) {
            const i = r.mode
            if (
              ((l[i] = []),
              [
                'DelayToRealtime',
                'DelayNoRealtime',
                'DelayWithoutMarketAgreement',
                ...Ys,
              ].includes(i) &&
                (l[i].push(
                  Vs.format({
                    symbolName: o,
                    time: this._model.time().toString(),
                  }),
                ),
                this._options.subscriptionFullInfo &&
                  null !== a &&
                  'DelayToRealtime' === i &&
                  l[i].push(As.format({ description: `<b>${a}</b>` })),
                'DelayNoRealtime' === i && l[i].push(Ls),
                'DelayWithoutMarketAgreement' === i &&
                  l[i].push(
                    Ds.format({ listedExchange: this._model.listedExchange() }),
                  ),
                this._options.subscriptionFullInfo &&
                  Ys.includes(i) &&
                  l[i].push(
                    ks.format({ listedExchange: this._model.listedExchange() }),
                  )),
              'EOD' === i && (l[i] = [Ws]),
              'TickByTick' === i)
            ) {
              const o =
                  void 0 === r.updatePeriod
                    ? Ts
                    : (0, is.htmlEscape)(
                        B.t(
                          null,
                          {
                            count: r.updatePeriod,
                            replace: {
                              amount: (null !== (e = r.updatePeriod) &&
                              void 0 !== e
                                ? e
                                : 1
                              ).toString(),
                            },
                            plural:
                              'Data on our Basic plan is updated once every {amount} seconds, even if there are more updates on the market.',
                          },
                          s(2121),
                        ),
                      ),
                a =
                  void 0 === r.updatePeriod
                    ? xs
                    : (0, is.htmlEscape)(
                        B.t(
                          null,
                          {
                            count: r.updatePeriod,
                            replace: {
                              amount: (null !== (t = r.updatePeriod) &&
                              void 0 !== t
                                ? t
                                : 1
                              ).toString(),
                            },
                            plural:
                              'Data is updated once every {amount} seconds, even if there are more updates on the market.',
                          },
                          s(77033),
                        ),
                      )
              l[i].push(this._options.subscriptionFullInfo ? o : a),
                this._options.subscriptionFullInfo && l[i].push(Hs)
            }
            if (null !== n && 'BATSToRealtime' === i) {
              let e = this._model.listedExchange()
              0,
                l[i].push(
                  Ps.format({ symbolName: o, exchange: n }),
                  '' !== e
                    ? (0, is.htmlEscape)(Is).format({ exchange: e })
                    : (0, is.htmlEscape)(Bs),
                )
            }
          }
          return Object.keys(l).length > 0 ? l : null
        }
        async _getActions() {
          if (null === this._dataUpdatedInfo.value() || null === this._model)
            return null
          const e = {}
          return Object.keys(e).length > 0 ? e : null
        }
        _getShortTexts() {
          var e, t
          const i = this._dataUpdatedInfo.value()
          if (null === i || null === this._model) return null
          const l = {}
          for (const o of i) {
            const i = o.mode
            if (
              ([
                'DelayToRealtime',
                'DelayNoRealtime',
                ...Ys,
                'DelayWithoutMarketAgreement',
              ].includes(i) && (l[i] = Ss),
              'EOD' === i && (l[i] = fs),
              'TickByTick' === i)
            ) {
              const t =
                void 0 === o.updatePeriod
                  ? Ms
                  : (0, is.htmlEscape)(
                      B.t(
                        null,
                        {
                          plural: 'One update every {amount} seconds',
                          count: o.updatePeriod,
                          replace: {
                            amount: (null !== (e = o.updatePeriod) &&
                            void 0 !== e
                              ? e
                              : 1
                            ).toString(),
                          },
                        },
                        s(5223),
                      ),
                    )
              l[i] = t
            }
            if ('BATSToRealtime' === i) {
              let e =
                null !== (t = this._model.firstReplacedByBatsExchange()) &&
                void 0 !== t
                  ? t
                  : ''
              0,
                (l[i] =
                  '' !== e
                    ? Es.format({ exchange: e, originalExchange: Cs })
                    : Cs)
            }
          }
          return Object.keys(l).length > 0 ? l : null
        }
        _updateBlinkingMode() {
          const e = this._dataUpdatedInfo.value()
          if (null === e) return
          const t = this._dataModeBlinkingStatuses.value()
          for (const s of e)
            if (!t.includes(s.mode))
              return void this.isBlinkingMode.setValue(!0)
          this.isBlinkingMode.setValue(!1)
        }
        _turnOffBlinking() {
          const e = this._dataUpdatedInfo.value()
          if (null !== e) for (const t of e) Us(t.mode)
        }
      }
      var Qs = s(38373),
        Ks = s(79304)
      const ei = B.t(null, void 0, s(39045)),
        ti = new Map([
          [
            !0,
            new Map([
              ['small', Qs],
              ['medium', Ks],
              ['large', Ks],
            ]),
          ],
          [
            !1,
            new Map([
              ['small', ''],
              ['medium', ''],
              ['large', ''],
            ]),
          ],
        ]),
        si = new Map([
          [!0, ls.dataProblemLow],
          [!1, null],
        ]),
        ii = new Map([
          [!0, ei],
          [!1, null],
        ]),
        li = new Map([
          [!0, ei],
          [!1, null],
        ]),
        oi = new Map([
          [!0, ss.colorsPalette['color-data-problem']],
          [!1, null],
        ])
      class ai extends os {
        constructor(e, t, s) {
          super({
            iconMap: ti,
            classNameMap: si,
            tooltipMap: ii,
            titleMap: li,
            titleColorMap: oi,
            size: t,
          }),
            (this._dataSourceErrorStatus = new a.WatchedValue(null).spawn()),
            (this._lastError = null),
            (this._options = s),
            this.setSource(e)
        }
        destroy() {
          this._dataSourceErrorStatus.destroy()
        }
        setSource(e) {
          this._dataSourceErrorStatus.destroy(),
            (this._dataSourceErrorStatus = e.errorStatus().spawn()),
            this._dataSourceErrorStatus.subscribe(
              this._updateStatus.bind(this),
              { callWithLast: !0 },
            )
        }
        _getTooltip(e) {
          var t
          return null !==
            (t = e ? this._getDataSourceErrorStatusCustomTitle() : null) &&
            void 0 !== t
            ? t
            : super._getTooltip(e)
        }
        _getTitle(e) {
          var t
          return null !==
            (t = e ? this._getDataSourceErrorStatusCustomTitle() : null) &&
            void 0 !== t
            ? t
            : super._getTitle(e)
        }
        async _updateFullTooltip() {
          const e = this._status.value(),
            t = this._dataSourceErrorStatus.value()
          null !== e && null !== t
            ? this._fullTooltip.setValue([
                {
                  icon: this._getIcon(e),
                  iconClassName: this._getFullTooltipIconClassNames(e),
                  title: this._getTitle(e),
                  titleColor: this._getTitleColor(e),
                  html: [(0, is.htmlEscape)(t.error)],
                  size: this._size,
                  action: this._getAction(e),
                },
              ])
            : this._fullTooltip.setValue(null)
        }
        _getAction(e) {
          return null
        }
        _updateStatus(e) {
          const t = this._status.value()
          null !== e
            ? (this._status.setValue(!0),
              t && this._lastError !== e.error && this._updateByStatus(!0),
              (this._lastError = e.error))
            : (this._status.setValue(null), (this._lastError = null))
        }
        _getDataSourceErrorStatusCustomTitle() {
          var e
          return (
            (null === (e = this._dataSourceErrorStatus.value()) || void 0 === e
              ? void 0
              : e.title) || null
          )
        }
      }
      const ni = B.t(null, void 0, s(97325)),
        ri = new Map([
          [
            'high',
            new Map([
              ['small', Qs],
              ['medium', Ks],
              ['large', Ks],
            ]),
          ],
          [
            'low',
            new Map([
              ['small', Qs],
              ['medium', Ks],
              ['large', Ks],
            ]),
          ],
        ]),
        di = new Map([
          ['high', ls.dataProblemHigh],
          ['low', ls.dataProblemLow],
        ]),
        ui = new Map([
          ['high', ni],
          ['low', ni],
        ]),
        hi = new Map([
          ['high', ss.colorsPalette['color-data-problem']],
          ['low', ss.colorsPalette['color-data-problem']],
        ])
      class ci extends os {
        constructor(e, t) {
          super({
            tooltipMap: ui,
            iconMap: ri,
            classNameMap: di,
            titleMap: ui,
            titleColorMap: hi,
            size: t,
          }),
            (this._dataProblems = new a.WatchedValue([]).spawn()),
            (this._isDataProblemCritical = new a.WatchedValue(!1)),
            this.setModel(e)
        }
        destroy() {
          this._dataProblems.destroy()
        }
        isDataProblemCritical() {
          return this._isDataProblemCritical
        }
        setModel(e) {
          this._dataProblems.destroy(),
            null !== e
              ? ((this._dataProblems = e.dataProblems().spawn()),
                this._dataProblems.subscribe(this._updateStatus.bind(this), {
                  callWithLast: !0,
                }))
              : (this._dataProblems = new a.WatchedValue([]).spawn())
        }
        async _updateFullTooltip() {
          const e = this.status().value(),
            t = this._dataProblems.value()
          if (null === e || 0 === t.length)
            return void this._fullTooltip.setValue(null)
          const s = t.map((t, s) => {
            var i
            return {
              icon: this._getIcon(e),
              iconClassName: this._getFullTooltipIconClassNames(e),
              title:
                null !== (i = t.title) && void 0 !== i
                  ? i
                  : 0 === s
                    ? this._getTitle(e)
                    : null,
              titleColor: this._getTitleColor(e),
              html: [(0, is.htmlEscape)(t.text)],
              size: this._size,
              action: this._getAction(e),
            }
          })
          this._fullTooltip.setValue(s)
        }
        _getTooltip(e) {
          var t
          return null !== (t = this._getDataProblemCustomTitle()) &&
            void 0 !== t
            ? t
            : super._getTooltip(e)
        }
        _getTitle(e) {
          var t
          return null !== (t = this._getDataProblemCustomTitle()) &&
            void 0 !== t
            ? t
            : super._getTitle(e)
        }
        _updateStatus(e) {
          var t, s
          const i =
              null !==
                (s =
                  null === (t = e[0]) || void 0 === t ? void 0 : t.severity) &&
              void 0 !== s
                ? s
                : null,
            l = this._status.value() !== i
          this._status.setValue(i),
            this._isDataProblemCritical.setValue(
              (function (e) {
                return 'high' === e
              })(i),
            ),
            l || this._updateFullTooltip()
        }
        _getDataProblemCustomTitle() {
          var e, t
          return (
            (null ===
              (t =
                null === (e = this._dataProblems.value()) || void 0 === e
                  ? void 0
                  : e[0]) || void 0 === t
              ? void 0
              : t.title) || null
          )
        }
      }
      class _i extends os {
        constructor(e, t) {
          super(t),
            (this._booleanStatus = new a.WatchedValue(!1).spawn()),
            this.updateStatus(e)
        }
        destroy() {
          this._booleanStatus.destroy()
        }
        updateStatus(e) {
          this._booleanStatus.destroy(),
            (this._booleanStatus = e.spawn()),
            this._booleanStatus.subscribe(this._updateStatus.bind(this), {
              callWithLast: !0,
            })
        }
        _updateStatus(e) {
          e ? this._status.setValue(!0) : this._status.setValue(null)
        }
      }
      var pi = s(73710),
        mi = s(45503)
      const gi = B.t(null, void 0, s(14177)),
        vi = B.t(null, void 0, s(73717)),
        bi = new Map([
          [
            !0,
            new Map([
              ['small', pi],
              ['medium', mi],
              ['large', mi],
            ]),
          ],
          [
            !1,
            new Map([
              ['small', ''],
              ['medium', ''],
              ['large', ''],
            ]),
          ],
        ]),
        wi = new Map([
          [!0, ls.invalidSymbol],
          [!1, null],
        ]),
        yi = new Map([
          [!0, gi],
          [!1, null],
        ]),
        Si = new Map([
          [!0, gi],
          [!1, null],
        ]),
        fi = new Map([
          [!0, ss.colorsPalette['color-invalid-symbol']],
          [!1, null],
        ]),
        Mi = new Map([
          [!0, [vi]],
          [!1, null],
        ]),
        Ci = new Map([
          [!0, null],
          [!1, null],
        ])
      class Ei {
        constructor(e) {
          ;(this._el = document.createElement('div')),
            (this._prevCustomClass = null),
            (this._prevCustomColor = null),
            (this._customColor = null),
            (this._size = e.size || 'small'),
            (this._icon = e.icon.spawn()),
            (this._className = e.className.spawn()),
            (this._visible = e.visible.spawn()),
            this._el.classList.add(ls.statusItem, ls[this._size]),
            this._icon.subscribe(this._updateIcon.bind(this), {
              callWithLast: !0,
            }),
            this._className.subscribe(this._updateClassName.bind(this), {
              callWithLast: !0,
            }),
            (this._customColor = e.customColor.spawn()),
            this._customColor.subscribe(this._updateCustomColor.bind(this), {
              callWithLast: !0,
            }),
            e.isBlinking &&
              ((this._isBlinking = e.isBlinking.spawn()),
              this._isBlinking.subscribe(this._updateBlinkingMode.bind(this), {
                callWithLast: !0,
              }),
              (this._turnOffBlinking = e.turnOffBlinking))
        }
        destroy() {
          this._visible.destroy(),
            this._icon.destroy(),
            this._isBlinking && this._isBlinking.destroy()
        }
        onClick() {
          this._turnOffBlinking && this._turnOffBlinking()
        }
        visible() {
          return this._visible
        }
        element() {
          return this._el
        }
        _updateIcon(e) {
          this._el.innerHTML = e || ''
        }
        _updateClassName(e) {
          this._prevCustomClass !== e &&
            (null !== this._prevCustomClass &&
              this._el.classList.remove(this._prevCustomClass),
            null !== e && this._el.classList.add(e),
            (this._prevCustomClass = e))
        }
        _updateCustomColor(e) {
          this._prevCustomColor !== e &&
            (this._el.style.setProperty('--custom-status-color', e),
            (this._prevCustomColor = e))
        }
        _updateBlinkingMode(e) {
          this._el.classList.toggle(ls.blinking, e)
        }
      }
      function Vi(e, t, s) {
        for (const i of t)
          for (const t of i.split(' ')) e.classList.toggle(t, s)
      }
      class ki {
        constructor(e, t, s, i = ls) {
          ;(this.element = document.createElement('div')),
            (this._blinkingSpawns = []),
            (this._iconsRenderers = []),
            (this._updateIcons = () => {
              const [e, t] = this._iconsRenderers.reduce(
                (e, t) => {
                  const s = t.element()
                  return (
                    t.visible().value() && e[0].length < 3
                      ? e[0].push(s)
                      : e[1].push(s),
                    e
                  )
                },
                [[], []],
              )
              t.forEach((e) => {
                this.element.contains(e) && this.element.removeChild(e)
              }),
                e.forEach((e, t) => {
                  this.element.contains(e) ||
                    (t >= this.element.childElementCount
                      ? this.element.appendChild(e)
                      : this.element.insertBefore(
                          e,
                          this.element.childNodes[t],
                        ))
                })
            }),
            (this._theme = i)
          const l = [
            this._theme.statuses,
            'apply-common-tooltip',
            'common-tooltip-wide',
            this._theme[e],
            this._theme.statuses_hidden,
          ]
          Vi(this.element, l, !0),
            (this._tooltips = t.spawn()),
            this._tooltips.subscribe(this._updateTooltip.bind(this)),
            (this._onClickCallback = s.onClick),
            (this._onClickHandler = this._onClick.bind(this)),
            this.element.addEventListener('click', this._onClickHandler)
        }
        destroy() {
          for (const e of this._iconsRenderers) e.destroy()
          for (const e of this._blinkingSpawns) e.destroy()
          this._tooltips.destroy(),
            this.element.removeEventListener('click', this._onClickHandler),
            this.element.remove()
        }
        setVisibility(e) {
          Vi(this.element, [this._theme.statuses_hidden], e)
        }
        addStatusModel(e) {
          const t = new Ei({
            visible: e.visible,
            icon: e.model.icon(),
            className: e.model.className(),
            size: e.model.size(),
            isBlinking: e.model.isBlinkingMode,
            turnOffBlinking: e.model.turnOffBlinkingMode,
            customColor: e.model.customColor(),
          })
          this._iconsRenderers.push(t)
          const s = e.model.isBlinkingMode.spawn()
          s.subscribe(this._updateBlinkingMode.bind(this)),
            t.visible().subscribe(this._updateIcons, { callWithLast: !0 }),
            this._blinkingSpawns.push(s),
            this._updateBlinkingMode()
        }
        _onClick(e) {
          e.preventDefault()
          const t = this._iconsRenderers.filter((e) => e.visible().value())
          for (const e of t) e.onClick()
          let s = 14
          t.length > 1 && (s -= 2)
          const i = this.element.getBoundingClientRect(),
            l = { x: i.left - s, y: i.bottom + 4 }
          this._onClickCallback(l)
        }
        _updateTooltip() {
          this.element.setAttribute('title', this._tooltips.value().join(' · '))
        }
        _updateBlinkingMode() {
          const e = this._blinkingSpawns.some((e) => e.value())
          Vi(this.element, [this._theme.blinking], e)
        }
      }
      class Ai {
        constructor(e, t) {
          ;(this.isBlinkingMode = new a.WatchedValue(!1)),
            (this._status = new a.WatchedValue(null)),
            (this._size = 'small'),
            (this._fullInfo = new a.WatchedValue(null)),
            (this._className = new a.WatchedValue(ls.marketStatusCustom)),
            (this._symbolModel = null),
            (this._symbol = null),
            (this._tooltip = new a.WatchedValue(null)),
            (this._icon = new a.WatchedValue(null)),
            (this._visible = new a.WatchedValue(!1)),
            (this._color = new a.WatchedValue(null)),
            (this._updateVisibleCallback = this._updateVisible.bind(this)),
            (this._updateColorCallback = this._updateColor.bind(this)),
            (this._updateIconCallback = this._updateIcon.bind(this)),
            (this._updateTooltipCallback = this._updateTooltip.bind(this)),
            (this._updateFullInfoCallback = this._updateFullInfo.bind(this)),
            (this._model = e),
            (this._size = t)
        }
        turnOffBlinkingMode() {}
        destroy() {}
        setModel(e) {
          this._model = e
        }
        setSymbol(e) {
          e !== this._symbol &&
            (this._unSyncModel(),
            (this._symbol = e),
            e
              ? ((this._symbolModel = this._model.getSymbolCustomStatus(e)),
                this._syncModel())
              : (this._symbolModel = null))
        }
        status() {
          return this._status.spawn()
        }
        tooltip() {
          return this._tooltip.spawn()
        }
        icon() {
          return this._icon.spawn()
        }
        className() {
          return this._className.spawn()
        }
        visible() {
          return this._visible.spawn()
        }
        size() {
          return this._size
        }
        fullInfo() {
          return this._fullInfo.spawn()
        }
        customColor() {
          return this._color.spawn()
        }
        _updateFullInfo(e) {
          if (null === e) return void this._fullInfo.setValue(null)
          const t = e.map((e) => {
            var t, s
            return {
              icon:
                null !== (t = e.icon) && void 0 !== t ? t : this.icon().value(),
              iconClassName: [ls.marketStatusCustom],
              title: e.title,
              titleColor:
                null !== (s = e.color) && void 0 !== s
                  ? s
                  : this.customColor().value(),
              html: e.content,
              size: this.size(),
              action: this._buildAction(e.action),
            }
          })
          this._fullInfo.setValue(t)
        }
        _buildAction(e) {
          var t
          return e && e.onClick
            ? {
                text: null !== (t = e.text) && void 0 !== t ? t : '',
                tooltip: e.tooltip,
                onClick: e.onClick,
              }
            : null
        }
        _unSyncModel() {
          this._symbolModel &&
            (this._symbolModel
              .visible()
              .unsubscribe(this._updateVisibleCallback),
            this._symbolModel.color().unsubscribe(this._updateColorCallback),
            this._symbolModel.icon().unsubscribe(this._updateIconCallback),
            this._symbolModel
              .tooltip()
              .unsubscribe(this._updateTooltipCallback),
            this._symbolModel
              .tooltipContent()
              .unsubscribe(this._updateFullInfoCallback))
        }
        _syncModel() {
          var e, t, s, i, l, o, a, n, r, d
          this._visible.setValue(
            null !==
              (t =
                null === (e = this._symbolModel) || void 0 === e
                  ? void 0
                  : e.visible().value()) &&
              void 0 !== t &&
              t,
          ),
            this._color.setValue(
              null !==
                (i =
                  null === (s = this._symbolModel) || void 0 === s
                    ? void 0
                    : s.color().value()) && void 0 !== i
                ? i
                : null,
            ),
            this._icon.setValue(
              null !==
                (o =
                  null === (l = this._symbolModel) || void 0 === l
                    ? void 0
                    : l.icon().value()) && void 0 !== o
                ? o
                : null,
            ),
            this._tooltip.setValue(
              null !==
                (n =
                  null === (a = this._symbolModel) || void 0 === a
                    ? void 0
                    : a.tooltip().value()) && void 0 !== n
                ? n
                : null,
            ),
            this._updateFullInfo(
              null !==
                (d =
                  null === (r = this._symbolModel) || void 0 === r
                    ? void 0
                    : r.tooltipContent().value()) && void 0 !== d
                ? d
                : null,
            ),
            this._symbolModel &&
              (this._symbolModel
                .visible()
                .subscribe(this._updateVisibleCallback),
              this._symbolModel.color().subscribe(this._updateColorCallback),
              this._symbolModel.icon().subscribe(this._updateIconCallback),
              this._symbolModel
                .tooltip()
                .subscribe(this._updateTooltipCallback),
              this._symbolModel
                .tooltipContent()
                .subscribe(this._updateFullInfoCallback))
        }
        _updateVisible(e) {
          this._visible.setValue(e)
        }
        _updateColor(e) {
          this._color.setValue(e)
        }
        _updateIcon(e) {
          this._icon.setValue(e)
        }
        _updateTooltip(e) {
          this._tooltip.setValue(e)
        }
      }
      var Li = s(75593),
        Wi = s(53218),
        Ti = s(32140),
        xi = s(62998),
        Hi = s(25230),
        Di = s(15507),
        Pi = s(43401),
        Bi = s(85290),
        Ii = s(12462)
      const zi = B.t(null, void 0, s(83949)),
        Ni = B.t(null, void 0, s(56042)),
        Oi = B.t(null, void 0, s(29985)),
        Fi = B.t(null, void 0, s(95814)),
        Ri = B.t(null, void 0, s(88958)),
        Ui = B.t(null, void 0, s(69419)),
        Gi = B.t(null, void 0, s(1653)),
        $i = B.t(null, void 0, s(40519)),
        ji = B.t(null, void 0, s(57048)),
        Yi = B.t(null, void 0, s(56086)),
        qi = B.t(null, void 0, s(39348)),
        Zi = B.t(null, void 0, s(7827)),
        Xi = B.t(null, void 0, s(19830)),
        Ji = B.t(null, void 0, s(35701)),
        Qi = B.t(null, void 0, s(98105)),
        Ki = B.t(null, void 0, s(50634)),
        el = B.t(null, void 0, s(74537)),
        tl = new Map([
          [
            'market',
            new Map([
              ['small', Ti],
              ['medium', xi],
              ['large', xi],
            ]),
          ],
          [
            'pre_market',
            new Map([
              ['small', Bi],
              ['medium', Ii],
              ['large', Ii],
            ]),
          ],
          [
            'post_market',
            new Map([
              ['small', Di],
              ['medium', Pi],
              ['large', Pi],
            ]),
          ],
          [
            'out_of_session',
            new Map([
              ['small', Wi],
              ['medium', Wi],
              ['large', Wi],
            ]),
          ],
          [
            'holiday',
            new Map([
              ['small', Hi],
              ['medium', Hi],
              ['large', Hi],
            ]),
          ],
        ]),
        sl = new Map([
          ['market', ls.marketStatusOpen],
          ['pre_market', ls.marketStatusPre],
          ['post_market', ls.marketStatusPost],
          ['out_of_session', ls.marketStatusClose],
          ['holiday', ls.marketStatusHoliday],
        ]),
        il = new Map([
          ['market', zi],
          ['pre_market', Ni],
          ['post_market', Oi],
          ['out_of_session', Fi],
          ['holiday', Ri],
        ]),
        ll = new Map([
          ['market', zi],
          ['pre_market', Ni],
          ['post_market', Oi],
          ['out_of_session', Fi],
          ['holiday', Ri],
        ]),
        ol = new Map([
          ['market', ss.colorsPalette['color-market-open']],
          ['pre_market', ss.colorsPalette['color-pre-market']],
          ['post_market', ss.colorsPalette['color-post-market']],
          ['out_of_session', ss.colorsPalette['color-market-closed']],
          ['holiday', ss.colorsPalette['color-market-holiday']],
        ]),
        al = {
          market: Ui,
          pre_market: Gi,
          post_market: $i,
          out_of_session: ji,
          holiday: Yi,
        }
      function nl(e) {
        return B.t(
          null,
          { plural: '{number} minutes', count: e },
          s(67151),
        ).format({ number: e.toString() })
      }
      function rl(e) {
        return B.t(
          null,
          { plural: '{number} hours', count: e },
          s(24430),
        ).format({ number: e.toString() })
      }
      function dl(e) {
        const t = Math.floor(e / 86400),
          i = Math.floor((e - 86400 * t) / 3600),
          l = Math.floor((e - 86400 * t - 3600 * i) / 60)
        return 0 === t && 0 === i && 0 === l
          ? qi
          : t > 0
            ? Zi.format({
                days:
                  ((o = t),
                  B.t(
                    null,
                    { plural: '{number} days', count: o },
                    s(58609),
                  ).format({ number: o.toString() })),
                hours: rl(i),
              })
            : i > 0
              ? Xi.format({ hours: rl(i), minutes: nl(l) })
              : nl(l)
        var o
      }
      const ul = {
          market: (e) =>
            ('post_market' === e.status ? Ki : Qi).format({
              remainingTime: dl(e.remainingSeconds),
            }),
          pre_market: (e) =>
            Ji.format({ remainingTime: dl(e.remainingSeconds) }),
          post_market: (e) =>
            Qi.format({ remainingTime: dl(e.remainingSeconds) }),
          out_of_session: (e) =>
            ('pre_market' === e.status ? el : Ji).format({
              remainingTime: dl(e.remainingSeconds),
            }),
          holiday: (e) =>
            ('pre_market' === e.status ? el : Ji).format({
              remainingTime: dl(e.remainingSeconds),
            }),
        },
        hl = new Map([
          ['market', null],
          ['pre_market', null],
          ['post_market', null],
          ['out_of_session', null],
          ['holiday', null],
        ])
      class cl extends os {
        constructor(e, t) {
          super({
            tooltipMap: il,
            iconMap: tl,
            classNameMap: sl,
            titleMap: ll,
            titleColorMap: ol,
            actionMap: hl,
            size: t,
          }),
            (this._model = null),
            (this._expiredStatus = null),
            (this._marketStatus = new a.WatchedValue(null).spawn()),
            (this._sessionEdge = new a.WatchedValue(null).spawn()),
            this.setModel(e),
            et.showMarketOpenStatusProperty.subscribe(
              this,
              this._showMarketOpenStatusPropertyChanged,
            )
        }
        destroy() {
          this._marketStatus.destroy(),
            this._sessionEdge.destroy(),
            (this._model = null),
            et.showMarketOpenStatusProperty.unsubscribeAll(this)
        }
        setModel(e) {
          var t
          if (
            (this._marketStatus.destroy(),
            this._sessionEdge.destroy(),
            null === (t = this._expiredStatus) || void 0 === t || t.destroy(),
            null === e)
          )
            return (
              (this._marketStatus = new a.WatchedValue(null).spawn()),
              (this._sessionEdge = new a.WatchedValue(null).spawn()),
              void (this._expiredStatus = null)
            )
          this._model = e
          const s = e.futuresContractExpirationTime()
          s &&
            ((this._expiredStatus = s.expired().spawn()),
            this._expiredStatus.subscribe((e) => {
              e && this._updateByStatus(this._marketStatus.value())
            })),
            (this._marketStatus = e.status().spawn()),
            this._marketStatus.subscribe(this._updateStatus.bind(this), {
              callWithLast: !0,
            }),
            (this._sessionEdge = e.nextSessionEdge().spawn()),
            this._sessionEdge.subscribe(this._updateTooltip.bind(this)),
            this._updateTooltip()
        }
        async _updateFullTooltip() {
          const e = this.status().value()
          if (null === e) return void this._fullTooltip.setValue(null)
          let t
          if (this._isExpiredFutures()) t = [(0, is.htmlEscape)(expiredHtml)]
          else {
            t = [(0, is.htmlEscape)(al[e])]
            const s = this._marketStatus.value()
            if (null !== this._model && null !== s) {
              const s = this._model.nextSessionEdge().value()
              null !== s && t.push({ text: ul[e](s), bold: !0 })
            }
          }
          this._fullTooltip.setValue([
            {
              icon: this._getIcon(e),
              iconClassName: this._getFullTooltipIconClassNames(e),
              title: this._getTitle(e),
              titleColor: this._getTitleColor(e),
              html: t,
              size: this._size,
              action: this._getAction(e),
            },
          ])
        }
        _shouldBeHiddenByStatus(e) {
          return !et.showMarketOpenStatusProperty.value() && 'market' === e
        }
        _getTooltip(e) {
          return this._isExpiredFutures()
            ? expiredTooltip
            : super._getTooltip(e)
        }
        _getIcon(e) {
          return this._isExpiredFutures()
            ? expiredIconMap.get(this._size) || null
            : super._getIcon(e)
        }
        _getClassName(e) {
          return this._isExpiredFutures()
            ? expiredClassName
            : super._getClassName(e)
        }
        _getTitle(e) {
          return this._isExpiredFutures() ? expiredTitle : super._getTitle(e)
        }
        _getTitleColor(e) {
          return this._isExpiredFutures()
            ? expiredTitleColor
            : super._getTitleColor(e)
        }
        _isExpiredFutures() {
          var e, t, s
          return (
            null !==
              (s =
                null ===
                  (t =
                    null === (e = this._model) || void 0 === e
                      ? void 0
                      : e.futuresContractExpirationTime()) || void 0 === t
                  ? void 0
                  : t.expired().value()) &&
            void 0 !== s &&
            s
          )
        }
        _updateStatus(e) {
          this._status.setValue(e)
        }
        _updateTooltip() {
          this._updateFullTooltip()
        }
        _showMarketOpenStatusPropertyChanged() {
          this._updateByStatus(this._status.value())
        }
      }
      class _l {
        constructor(e, t) {
          var s, i
          ;(this.errorWidgetIsShown = new a.WatchedValue(!1)),
            (this._size = h.trackingModeIsAvailable ? 'medium' : 'small'),
            (this._tooltips = new a.WatchedValue([])),
            (this._visibilitySpawns = []),
            (this._tooltipSpawns = []),
            (this._statusWidgetInfos = []),
            (this._visibility = new a.WatchedValue(!1)),
            (this._renderer = new ki(this._size, this._tooltips, {
              onClick: this._handleToggleDropdown.bind(this),
            })),
            (this._symbolInvalidViewModel = null),
            (this._dataSourceErrorStatusViewModel = null),
            (this._marketStatusViewModel = null),
            (this._dataUpdatedModeViewModel = null),
            (this._dataProblemViewModel = null),
            (this._customStatusViewModel = null),
            (this._sessionWidget = null),
            (this._dataSourceHasErrorVisible = null),
            (this._dataSourceErrorCanBeShown = new a.WatchedValue(!1)),
            (this._marketStatusCanBeShown = new a.WatchedValue(!1)),
            (this._dataUpdatedModeCanBeShown = new a.WatchedValue(!1)),
            (this._dataProblemCanBeShown = new a.WatchedValue(!1)),
            (this._isDataProblemCritical = null),
            (this._container = document.createElement('div')),
            (this._menuOpened = !1),
            (this._menuPosition = null),
            (this._handleDropdownMenuClose = () => {
              var e
              ;(this._menuOpened = !1),
                null === (e = this._source.symbol()) ||
                  void 0 === e ||
                  e.unsubscribe(this._handleDropdownMenuClose),
                this._updateDropdownMenu()
            }),
            (this._updateVisibility = (e) => {
              this._visibility.setValue(!e), this._renderer.setVisibility(e)
            }),
            (this._source = e),
            (this._symbol =
              null !==
                (i =
                  null === (s = e.symbol()) || void 0 === s
                    ? void 0
                    : s.spawn()) && void 0 !== i
                ? i
                : null),
            (this._options = t),
            (this._statusProviderHidden = e.hidden().spawn()),
            this._statusProviderHidden.subscribe(this._updateVisibility, {
              callWithLast: !0,
            }),
            this._recreateWidgets(),
            this._symbol &&
              this._symbol.subscribe(
                this._recreateAndUpdateWidgetState.bind(this),
              ),
            this._addSubscriptionForSymbolInvalid(),
            null !== this._dataSourceHasErrorVisible &&
              (this._dataSourceHasErrorVisible.subscribe(
                this._updateStatusWidgetsVisibilities.bind(this),
              ),
              this._dataSourceHasErrorVisible.subscribe(
                this._updateErrorWidgetIsShown.bind(this),
              )),
            this._options.dataProblemEnabled &&
              null !== this._isDataProblemCritical &&
              this._isDataProblemCritical.subscribe(
                this._updateStatusWidgetsVisibilities.bind(this),
              )
          for (const e of this._tooltipSpawns)
            e.subscribe(this._updateTooltips.bind(this))
          for (const e of this._visibilitySpawns)
            e.subscribe(this._updateTooltips.bind(this))
          this._updateErrorWidgetIsShown(),
            this._updateStatusWidgetsVisibilities(),
            this._updateTooltips()
        }
        destroy() {
          var e, t
          this._statusProviderHidden.destroy(),
            this._visibility.unsubscribe(),
            null === (e = this._symbol) || void 0 === e || e.destroy(),
            null === (t = this._isDataProblemCritical) ||
              void 0 === t ||
              t.destroy()
          for (const e of this._tooltipSpawns) e.destroy()
          for (const e of this._visibilitySpawns) e.destroy()
          for (const e of this._statusWidgetInfos) e.model.destroy()
          this._renderer.destroy()
        }
        visibility() {
          return this._visibility.readonly()
        }
        getElement() {
          return this._renderer.element
        }
        updateSource(e) {
          var t, s, i
          this._source !== e &&
            (this._statusProviderHidden.destroy(),
            null === (t = this._symbol) || void 0 === t || t.destroy(),
            (this._source = e),
            (this._symbol =
              null !==
                (i =
                  null === (s = e.symbol()) || void 0 === s
                    ? void 0
                    : s.spawn()) && void 0 !== i
                ? i
                : null),
            (this._statusProviderHidden = e.hidden().spawn()),
            this._statusProviderHidden.subscribe(this._updateVisibility, {
              callWithLast: !0,
            }),
            this._recreateAndUpdateWidgetState())
        }
        _updateStatusWidgetsVisibilities() {
          const e = this._isForceStatusActive()
          this._dataSourceErrorCanBeShown.setValue(!e),
            this._marketStatusCanBeShown.setValue(!e),
            this._dataUpdatedModeCanBeShown.setValue(!e),
            this._dataProblemCanBeShown.setValue(!this._isPrimaryWidgetShown())
        }
        _isPrimaryWidgetShown() {
          var e, t
          return (
            null !==
              (t =
                null === (e = this._source.isSymbolInvalid()) || void 0 === e
                  ? void 0
                  : e.value()) &&
            void 0 !== t &&
            t
          )
        }
        _isForceStatusActive() {
          var e, t
          return (
            this._isPrimaryWidgetShown() ||
            (null !==
              (t =
                null === (e = this._isDataProblemCritical) || void 0 === e
                  ? void 0
                  : e.value()) &&
              void 0 !== t &&
              t)
          )
        }
        _recreateWidgets() {
          var e, t, s, i, l, a, n, r
          if (this._options.sourceStatusesEnabled) {
            const e = this._source.isSymbolInvalid()
            if (null !== e)
              if (null === this._symbolInvalidViewModel) {
                this._symbolInvalidViewModel = new _i(e, {
                  tooltipMap: yi,
                  iconMap: bi,
                  classNameMap: wi,
                  titleMap: Si,
                  titleColorMap: fi,
                  htmlMap: Mi,
                  actionMap: Ci,
                  size: this._size,
                })
                const t = this._symbolInvalidViewModel.visible().spawn()
                this._visibilitySpawns.push(t),
                  this._tooltipSpawns.push(
                    this._symbolInvalidViewModel.tooltip().spawn(),
                  )
                const s = { visible: t, model: this._symbolInvalidViewModel }
                this._statusWidgetInfos.push(s),
                  this._renderer.addStatusModel(s)
              } else
                this._symbolInvalidViewModel.updateStatus(e),
                  this._addSubscriptionForSymbolInvalid()
            if (null === this._dataSourceErrorStatusViewModel) {
              ;(this._dataSourceErrorStatusViewModel = new ai(
                this._source,
                this._size,
                this._options.sourceStatuses,
              )),
                (this._dataSourceHasErrorVisible = (0, le.combine)(
                  () =>
                    this._dataSourceErrorCanBeShown.value() &&
                    (0, o.ensureNotNull)(this._dataSourceErrorStatusViewModel)
                      .visible()
                      .value(),
                  this._dataSourceErrorCanBeShown.weakReference(),
                  this._dataSourceErrorStatusViewModel
                    .visible()
                    .weakReference(),
                )),
                this._visibilitySpawns.push(this._dataSourceHasErrorVisible),
                this._tooltipSpawns.push(
                  this._dataSourceErrorStatusViewModel.tooltip().spawn(),
                )
              const e = {
                visible: this._dataSourceHasErrorVisible,
                model: this._dataSourceErrorStatusViewModel,
              }
              this._statusWidgetInfos.push(e), this._renderer.addStatusModel(e)
            } else this._dataSourceErrorStatusViewModel.setSource(this._source)
          }
          if (this._options.marketStatusEnabled) {
            const t = this._source.marketStatusModel()
            if (null === this._marketStatusViewModel) {
              this._marketStatusViewModel = new cl(t, this._size)
              const e = (0, le.combine)(
                () =>
                  this._marketStatusCanBeShown.value() &&
                  (0, o.ensureNotNull)(this._marketStatusViewModel)
                    .visible()
                    .value() &&
                  !(0, Ke.isEconomicSymbol)(this._source.symbolInfo().value()),
                this._marketStatusCanBeShown.weakReference(),
                this._marketStatusViewModel.visible().weakReference(),
                this._source.symbolInfo().weakReference(),
              )
              this._visibilitySpawns.push(e),
                this._tooltipSpawns.push(
                  this._marketStatusViewModel.tooltip().spawn(),
                )
              const s = { visible: e, model: this._marketStatusViewModel }
              null !== t &&
                ((this._sessionWidget = new ts(this._source)),
                (s.additionalWidgets = [this._sessionWidget])),
                this._statusWidgetInfos.push(s),
                this._renderer.addStatusModel(s)
            } else
              this._marketStatusViewModel.setModel(t),
                null === (e = this._sessionWidget) ||
                  void 0 === e ||
                  e.updateSource(this._source)
          }
          if (this._options.dataUpdateModeEnabled) {
            const e = this._source.dataUpdatedModeModel()
            if (null === this._dataUpdatedModeViewModel) {
              const i = {
                ...this._options.dataUpdateMode,
                shouldBeHiddenRegardlessOfStatus:
                  null ===
                    (s =
                      null === (t = this._source.marketStatusModel()) ||
                      void 0 === t
                        ? void 0
                        : t.futuresContractExpirationTime()) || void 0 === s
                    ? void 0
                    : s.expired(),
              }
              this._dataUpdatedModeViewModel = new Js(e, this._size, i)
              const l = (0, le.combine)(
                () =>
                  this._dataUpdatedModeCanBeShown.value() &&
                  (0, o.ensureNotNull)(this._dataUpdatedModeViewModel)
                    .visible()
                    .value() &&
                  !(0, Ke.isEconomicSymbol)(this._source.symbolInfo().value()),
                this._dataUpdatedModeCanBeShown.weakReference(),
                this._dataUpdatedModeViewModel.visible().weakReference(),
                this._source.symbolInfo().weakReference(),
              )
              this._visibilitySpawns.push(l),
                this._tooltipSpawns.push(
                  this._dataUpdatedModeViewModel.tooltip().spawn(),
                )
              const a = { visible: l, model: this._dataUpdatedModeViewModel }
              this._statusWidgetInfos.push(a), this._renderer.addStatusModel(a)
            } else this._dataUpdatedModeViewModel.setModel(e)
          }
          if (this._options.dataProblemEnabled) {
            const e = this._source.dataProblemModel()
            if (null === this._dataProblemViewModel) {
              ;(this._dataProblemViewModel = new ci(e, this._size)),
                (this._isDataProblemCritical = this._dataProblemViewModel
                  .isDataProblemCritical()
                  .spawn())
              const t = (0, le.combine)(
                () =>
                  this._dataProblemCanBeShown.value() &&
                  (0, o.ensureNotNull)(this._dataProblemViewModel)
                    .visible()
                    .value(),
                this._dataProblemCanBeShown.weakReference(),
                this._dataProblemViewModel.visible().weakReference(),
              )
              this._visibilitySpawns.push(t),
                this._tooltipSpawns.push(
                  this._dataProblemViewModel.tooltip().spawn(),
                )
              const s = { visible: t, model: this._dataProblemViewModel }
              this._statusWidgetInfos.push(s), this._renderer.addStatusModel(s)
            } else this._dataProblemViewModel.setModel(e)
          }
          if (
            null !==
              (a =
                null === (l = (i = this._source).isMainSeries) || void 0 === l
                  ? void 0
                  : l.call(i)) &&
            void 0 !== a &&
            a
          ) {
            const e = Li.CustomStatusModel.getInstance(),
              t =
                null !==
                  (r =
                    null === (n = this._symbol) || void 0 === n
                      ? void 0
                      : n.value()) && void 0 !== r
                  ? r
                  : null
            if (null === this._customStatusViewModel) {
              ;(this._customStatusViewModel = new Ai(e, this._size)),
                this._customStatusViewModel.setSymbol(t)
              const s = this._customStatusViewModel.visible().spawn(),
                i = { visible: s, model: this._customStatusViewModel }
              this._visibilitySpawns.push(s),
                this._tooltipSpawns.push(
                  this._customStatusViewModel.tooltip().spawn(),
                ),
                this._statusWidgetInfos.push(i),
                this._renderer.addStatusModel(i)
            } else
              this._customStatusViewModel.setModel(e),
                this._customStatusViewModel.setSymbol(t)
          }
        }
        _updateTooltips() {
          const e = []
          for (let t = 0; t < this._tooltipSpawns.length; t++) {
            if (!this._visibilitySpawns[t].value()) continue
            const s = this._tooltipSpawns[t].value()
            null !== s && s.length > 0 && e.push(s)
          }
          this._tooltips.setValue(e)
        }
        _addTooltipSpawn(e) {
          e.subscribe(this._updateTooltips.bind(this)),
            this._tooltipSpawns.push(e)
        }
        _addVisibilitySpawn(e) {
          e.subscribe(this._updateTooltips.bind(this)),
            this._visibilitySpawns.push(e)
        }
        _recreateAndUpdateWidgetState() {
          this._recreateWidgets(),
            this._updateStatusWidgetsVisibilities(),
            this._updateErrorWidgetIsShown(),
            this._updateTooltips()
        }
        _addSubscriptionForSymbolInvalid() {
          const e = this._source.isSymbolInvalid()
          this._options.sourceStatusesEnabled &&
            null !== e &&
            (e.subscribe(this._updateStatusWidgetsVisibilities.bind(this)),
            e.subscribe(this._updateErrorWidgetIsShown.bind(this), {
              callWithLast: !0,
            }))
        }
        _updateErrorWidgetIsShown() {
          var e, t, s, i
          const l =
              null !==
                (t =
                  null === (e = this._source.isSymbolInvalid()) || void 0 === e
                    ? void 0
                    : e.value()) &&
              void 0 !== t &&
              t,
            o =
              null !==
                (i =
                  null === (s = this._dataSourceHasErrorVisible) || void 0 === s
                    ? void 0
                    : s.value()) &&
              void 0 !== i &&
              i
          this.errorWidgetIsShown.setValue(l || o)
        }
        _handleToggleDropdown(e) {
          var t, s
          ;(this._menuPosition = e),
            (this._menuOpened = !this._menuOpened),
            this._menuOpened &&
              (null === (t = this._source.symbol()) ||
                void 0 === t ||
                t.subscribe(this._handleDropdownMenuClose),
              (s = `Open full tooltip for statuses: ${this._tooltips.value().join(', ')}`),
              (0, I.trackEvent)('GUI', "Statuses widget's action", s)),
            this._updateDropdownMenu()
        }
        _updateDropdownMenu() {
          Promise.all([
            s.e(3842),
            s.e(5649),
            s.e(2731),
            s.e(962),
            s.e(3179),
            s.e(8643),
          ])
            .then(s.bind(s, 52685))
            .then((e) => {
              e.render({
                opened: this._menuOpened,
                container: this._container,
                rendererButton: this._renderer.element,
                statusWidgetInfos: this._statusWidgetInfos,
                onClose: this._handleDropdownMenuClose,
                position: (0, o.ensureNotNull)(this._menuPosition),
              })
            })
        }
      }
      class pl extends _l {
        constructor(e, t, s) {
          super(e, s),
            (this._isInReplay = new a.WatchedValue(!1).readonly().spawn()),
            (this._isInReplayCanBeShown = null),
            (this._inited = !1),
            (this._halalViewModel = null),
            (this._halalCanBeShown = new a.WatchedValue(!1))
        }
        destroy() {
          super.destroy()
        }
        updateSource(e) {
          super.updateSource(e)
        }
        _updateStatusWidgetsVisibilities() {
          super._updateStatusWidgetsVisibilities()
        }
        _isPrimaryWidgetShown() {
          var e, t
          return (
            super._isPrimaryWidgetShown() ||
            (null !==
              (t =
                null === (e = this._isInReplay) || void 0 === e
                  ? void 0
                  : e.value()) &&
              void 0 !== t &&
              t)
          )
        }
        _crateHalalStatus() {}
        _getHalalVisibilitySpawn() {
          return new a.WatchedValue(!1).readonly().spawn()
        }
      }
      var ml = s(92249)
      class gl {
        constructor(e, t) {
          ;(this._hidden = new a.WatchedValue(!1)),
            (this._symbol = null),
            (this._isSymbolInvalid = null),
            (this._symbolInfo = new a.WatchedValue(null).spawn()),
            (this._source = e),
            e.properties().hasChild('symbol') &&
              (this._symbol = (0, K.createWVFromGetterAndSubscription)(
                () => e.properties().symbol.value(),
                e.properties().symbol.listeners(),
              ))
          const s = []
          if ((0, ml.isStudyLineTool)(e)) s.push(e.onStatusChanged())
          else if ((0, We.isStudy)(e) || (0, We.isStudyStub)(e))
            (this._isSymbolInvalid = (0, K.createWVFromGetterAndSubscriptions)(
              () => e.isSymbolInvalid() && e.isActualInterval(),
              s,
            )),
              s.push(e.onStatusChanged(), e.onIsActualIntervalChange())
          else {
            ;(0, o.assert)(e === t.mainSeries())
            const i = t.mainSeries()
            ;(this._isSymbolInvalid = (0, K.createWVFromGetterAndSubscription)(
              () => i.isSymbolInvalid(),
              i.onStatusChanged(),
            )),
              s.push(i.onStatusChanged()),
              (this._symbolInfo = (0, K.createWVFromGetterAndSubscription)(
                i.symbolInfo.bind(i),
                i.dataEvents().symbolResolved(),
              ))
          }
          this._dataSourceErrorStatus = (0,
          K.createWVFromGetterAndSubscriptions)(
            () => this._source.statusProvider({}).errorStatus(),
            s,
          )
        }
        destroy() {
          var e, t
          null === (e = this._symbol) || void 0 === e || e.destroy(),
            null === (t = this._isSymbolInvalid) || void 0 === t || t.destroy(),
            this._dataSourceErrorStatus.destroy(),
            this._symbolInfo.destroy()
        }
        symbol() {
          return this._symbol
        }
        isSymbolInvalid() {
          return this._isSymbolInvalid
        }
        errorStatus() {
          return this._dataSourceErrorStatus
        }
        symbolInfo() {
          return this._symbolInfo
        }
        hidden() {
          return this._hidden.readonly()
        }
        marketStatusModel() {
          return this._source.marketStatusModel()
        }
        dataProblemModel() {
          return this._source.dataProblemModel()
        }
        dataUpdatedModeModel() {
          return this._source.dataUpdatedModeModel()
        }
        isMainSeries() {
          var e, t, s
          return (
            null !==
              (s =
                null === (t = (e = this._source).isMainSeries) || void 0 === t
                  ? void 0
                  : t.call(e)) &&
            void 0 !== s &&
            s
          )
        }
      }
      class vl extends gl {
        constructor(e, t) {
          super(e, t),
            (this._forceDisableHiddenState = new a.WatchedValue(!0)),
            (this._forceDisableHiddenStateTimeout = null),
            (this._series = e),
            (this._marketStatus = e.marketStatusModel().status().spawn()),
            this._marketStatus.subscribe(
              (e) => {
                null === e &&
                  (null !== this._forceDisableHiddenStateTimeout &&
                    clearTimeout(this._forceDisableHiddenStateTimeout),
                  this._forceDisableHiddenState.setValue(!1),
                  (this._forceDisableHiddenStateTimeout = setTimeout(() => {
                    ;(this._forceDisableHiddenStateTimeout = null),
                      this._forceDisableHiddenState.setValue(!0)
                  }, 3500)))
              },
              { callWithLast: !0 },
            ),
            (this._dataProblems = this._series
              .dataProblemModel()
              .dataProblems()
              .spawn()),
            this._marketStatus.subscribe(this._updateHiddenValue.bind(this)),
            this._dataProblems.subscribe(this._updateHiddenValue.bind(this)),
            this._forceDisableHiddenState.subscribe(
              this._updateHiddenValue.bind(this),
            ),
            e.onStatusChanged().subscribe(this, this._updateHiddenValue),
            this._updateHiddenValue()
        }
        destroy() {
          this._marketStatus.destroy(),
            this._dataProblems.destroy(),
            this._series.onStatusChanged().unsubscribeAll(this),
            null !== this._forceDisableHiddenStateTimeout &&
              clearTimeout(this._forceDisableHiddenStateTimeout),
            super.destroy()
        }
        _updateHiddenValue() {
          const e = this._series.status(),
            t =
              this._forceDisableHiddenState.value() ||
              12 === e ||
              4 === e ||
              (null !== this._marketStatus.value() && 2 !== e && 1 !== e) ||
              this._dataProblems.value().some((e) => 'high' === e.severity)
          this._hidden.setValue(!t)
        }
      }
      var bl = s(5286)
      const wl = {
          readOnlyMode: !1,
          contextMenu: {
            settings: !0,
            mainSeries: !0,
            studies: !0,
            showOpenMarketStatus: !1,
          },
          symbolMarkerEnabled: !1,
          showToggleButton: !0,
          canShowSourceCode: !1,
          statusesWidgets: {
            sourceStatusesEnabled: !1,
            sourceStatuses: { errorSolution: !0 },
            marketStatusEnabled: !1,
            marketStatus: { preMarketSolution: !0, postMarketSolution: !0 },
            dataUpdateModeEnabled: !1,
            dataUpdateMode: { subscriptionFullInfo: !0 },
            dataProblemEnabled: !1,
          },
        },
        yl =
          (d.enabled('hide_legend_by_default'),
          d.enabled('fundamental_widget')),
        Sl = d.enabled('legend_context_menu'),
        fl = 2 * parseInt(y.marginlegendhoriz)
      class Ml {
        constructor(e, t, s, i, o, r, d, u) {
          ;(this._mainSeriesViewModel = null),
            (this._dataSourceViewModels = []),
            (this._visibleDataSourceCount = new a.WatchedValue(0)),
            (this._themedColor = new a.WatchedValue('')),
            (this._mainSeriesRowHidden = null),
            (this._dataSourceRowsHidden = []),
            (this._customWidgetsVisibilities = []),
            (this._allLegendHidden = new a.WatchedValue(!1)),
            (this._studiesLegendHidden = new a.WatchedValue(!1)),
            (this._customWidgetsHeights = []),
            (this._onLegendVisibilityToggled = null),
            (this._availableHeight = 0),
            (this._collapsedDataSourcesCount = new a.WatchedValue(0)),
            (this._collapsedDataSourcesTitle = new a.WatchedValue('')),
            (this._mainSeriesStatusWidget = null),
            (this._dataSourcesStatusesWidgets = []),
            (this._statusProviders = new Map()),
            (this._size = null),
            (this._customLegendWidgetsFactoriesMap = new Map()),
            (this._customLegendWidgetsMap = new Map()),
            (this._margin = 0),
            (this._model = e),
            (this._paneWidget = t),
            (this._options = (0, n.merge)((0, n.clone)(wl), d)),
            (this._callbacks = u),
            (this._mainSeriesViewModelsOptions = {
              readOnlyMode: this._options.readOnlyMode,
              symbolMarkerEnabled: this._options.symbolMarkerEnabled,
            }),
            (this._dataSourceViewModelsOptions = {
              ...this._mainSeriesViewModelsOptions,
              canShowSourceCode: this._options.canShowSourceCode,
            }),
            (this._backgroundThemeName = s)
          const h = this._showLegendCalculatedProperty()
          ;(this._isDataSourcesCollapsed = new a.WatchedValue(h.value())),
            h.subscribe(this, () => {
              this._isDataSourcesCollapsed.setValue(h.value())
            })
          const c = new a.WatchedValue(this._getCustomTextColorValue()),
            _ = this._model.model().properties().childs()
          _.scalesProperties.childs().textColor.subscribe(this, () => {
            c.setValue(this._getCustomTextColorValue())
          })
          const p = _.paneProperties
              .childs()
              .legendProperties.childs().showBackground,
            m = new a.WatchedValue(p.value())
          p.subscribe(this, () => {
            m.setValue(p.value())
          })
          const g = _.paneProperties
              .childs()
              .legendProperties.childs().backgroundTransparency,
            v = new a.WatchedValue(g.value())
          g.subscribe(this, () => {
            v.setValue(g.value())
          }),
            (this._hideNotMainSources = i),
            this._hideNotMainSources.subscribe(
              this._updateLegendVisibilities.bind(this),
            ),
            (this._hideAllExceptFirstLine = o),
            this._hideAllExceptFirstLine.subscribe(
              this._updateCollapsedSourcesMode.bind(this),
            ),
            (this._hideWholeLegend = r),
            this._hideWholeLegend.subscribe(
              this._updateLegendVisibilities.bind(this),
            ),
            (this._isPaneMain = new a.WatchedValue(this._getIsPaneMainValue())),
            (this._updateCollapsedSourcesModeThrottle = (0, l.default)(
              this._updateCollapsedSourcesMode.bind(this),
              100,
            )),
            (this._renderer = new J(
              {
                withActions: !this._options.readOnlyMode,
                showToggleButton: this._options.showToggleButton,
                isStudiesLegendHidden: this._studiesLegendHidden.readonly(),
                isAllLegendHidden: this._allLegendHidden.readonly(),
                customTextColor: c.readonly(),
                themedColor: this._themedColor.readonly(),
                showBackground: m.readonly(),
                backgroundTransparency: v.readonly(),
                collapsedDataSourcesCount:
                  this._collapsedDataSourcesCount.readonly(),
                collapsedDataSourcesTitle:
                  this._collapsedDataSourcesTitle.readonly(),
                showLegendWidgetContextMenu:
                  this.onShowLegendWidgetContextMenu.bind(this),
                hideAllExceptFirstLine: this._hideAllExceptFirstLine,
              },
              {
                visibleDataSourceCount: this._visibleDataSourceCount.readonly(),
                isDataSourcesCollapsed: this._isDataSourcesCollapsed.readonly(),
                showObjectsTree: this._isPaneMain.readonly(),
                onCollapseDataSources: this.onCollapseDataSources.bind(this),
                onShowObjectsTreeDialog: this._callbacks.showObjectsTreeDialog,
              },
            ))
        }
        destroy() {
          this._backgroundThemeName.release(),
            this._hideNotMainSources.release(),
            this._hideAllExceptFirstLine.release(),
            this._hideWholeLegend.release(),
            null !== this._mainSeriesViewModel && this._destroyMainDataSource()
          for (const [, e] of this._statusProviders) e.destroy()
          for (const e of this._dataSourceViewModels) e.destroy()
          for (const e of this._dataSourcesStatusesWidgets) e.destroy()
          this._clearSubscriptions()
          for (const e of Array.from(this._customLegendWidgetsMap.keys()))
            this._destroyCustomWidgetFromLayerBlock(e)
          this._customLegendWidgetsMap.clear(),
            this._renderer.destroy(),
            delete this._renderer,
            this._showLegendCalculatedProperty().unsubscribeAll(this),
            this._showLegendOriginalProperty().unsubscribeAll(this)
          const e = this._model.model().properties().childs()
          e.scalesProperties.childs().textColor.unsubscribeAll(this),
            e.paneProperties
              .childs()
              .legendProperties.childs()
              .showBackground.unsubscribeAll(this),
            e.paneProperties
              .childs()
              .legendProperties.childs()
              .backgroundTransparency.unsubscribeAll(this)
        }
        addCustomWidgetToLegend(e, t) {
          const s =
              this._customLegendWidgetsFactoriesMap.get(t.block) || new Map(),
            i = s.get(t.position) || []
          i.push(e),
            s.set(t.position, i),
            this._customLegendWidgetsFactoriesMap.set(t.block, s),
            this.updateLayout(),
            this._updateCustomWidgetModeBySize()
        }
        onShowLegendWidgetContextMenu(e, t) {
          if (this._options.readOnlyMode || !Sl) return Promise.resolve()
          z('Show legend context menu')
          const s = new Map()
          for (const e of Array.from(this._customLegendWidgetsMap.keys())) {
            const t = (0, o.ensureDefined)(this._customLegendWidgetsMap.get(e)),
              i = new Map()
            for (const e of Array.from(t.keys())) {
              const s = (0, o.ensureDefined)(t.get(e)),
                l = i.get(e) || []
              for (const e of s) l.push(...e.contextMenuActions())
              i.set(e, l)
            }
            s.set(e, i)
          }
          return (function (e, t, s, i, l, o) {
            const a = [],
              n = i.get(0)
            if (void 0 !== n) {
              const e = n.get(1)
              void 0 !== e &&
                e.length > 0 &&
                (a.push(...e), a.push(new Je.Separator()))
            }
            const r = e
                .model()
                .properties()
                .childs()
                .paneProperties.childs()
                .legendProperties.childs(),
              d =
                Mt &&
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
                  })
            if (
              (a.push(
                new Je.Action({
                  actionId: 'Chart.Legend.ToggleSymbolVisibility',
                  checkable: !0,
                  checked: r.showSeriesTitle.value(),
                  label: _t,
                  statName: 'Show Symbol',
                  onExecute: () => it(e, r.showSeriesTitle, lt),
                }),
              ),
              t.showOpenMarketStatus &&
                'market' ===
                  e.mainSeries().marketStatusModel().status().value() &&
                !(0, Ke.isEconomicSymbol)(e.mainSeries().symbolInfo()) &&
                a.push(
                  new Je.Action({
                    actionId: 'Chart.Legend.ToggleOpenMarketStatusVisibility',
                    checkable: !0,
                    checked: et.showMarketOpenStatusProperty.value(),
                    label: pt,
                    statName: 'Show Open market status',
                    onExecute: () => it(e, et.showMarketOpenStatusProperty, ot),
                  }),
                ),
              a.push(
                new Je.Action({
                  actionId: 'Chart.Legend.ToggleOhlcValuesVisibility',
                  checkable: !0,
                  checked: r.showSeriesOHLC.value(),
                  label: mt,
                  statName: 'Show OHLC Values',
                  onExecute: () => it(e, r.showSeriesOHLC, at),
                }),
              ),
              a.push(
                new Je.Action({
                  actionId: 'Chart.Legend.ToggleBarChangeValuesVisibility',
                  checkable: !0,
                  checked: r.showBarChange.value(),
                  label: gt,
                  statName: 'Show Bar Change Values',
                  onExecute: () => it(e, r.showBarChange, nt),
                }),
              ),
              a.push(
                new Je.Action({
                  actionId: 'Chart.Legend.ToggleVolumeVisibility',
                  checkable: !0,
                  checked: r.showVolume.value(),
                  label: vt,
                  statName: 'Show Volume',
                  onExecute: () => it(e, r.showVolume, ht),
                }),
              ),
              d &&
                a.push(
                  new Je.Action({
                    actionId: 'Chart.Legend.TogglePriceSourceVisibility',
                    checkable: !0,
                    checked: r.showPriceSource.value(),
                    label: St,
                    statName: 'Show Price Source',
                    onExecute: () => it(e, r.showPriceSource, ct),
                  }),
                ),
              a.push(new Je.Separator()),
              void 0 !== n)
            ) {
              const e = n.get(0)
              void 0 !== e &&
                e.length > 0 &&
                (a.push(...e), a.push(new Je.Separator()))
            }
            const u = i.get(1)
            if (void 0 !== u) {
              const e = u.get(1)
              void 0 !== e &&
                e.length > 0 &&
                (a.push(...e), a.push(new Je.Separator()))
            }
            if (
              (e
                .model()
                .priceDataSources()
                .some(
                  (e) =>
                    !(0, Oe.isActingAsSymbolSource)(e) && e.showInObjectTree(),
                ) &&
                (a.push(
                  new Je.Action({
                    actionId: 'Chart.Legend.ToggleIndicatorTitlesVisibility',
                    checkable: !0,
                    checked: r.showStudyTitles.value(),
                    label: bt,
                    statName: 'Show Indicator Titles',
                    onExecute: () => it(e, r.showStudyTitles, rt),
                  }),
                ),
                a.push(
                  new Je.Action({
                    actionId: 'Chart.Legend.ToggleIndicatorArgumentsVisibility',
                    checkable: !0,
                    checked: r.showStudyArguments.value(),
                    label: wt,
                    statName: 'Show Indicator Arguments',
                    onExecute: () => it(e, r.showStudyArguments, dt),
                  }),
                ),
                a.push(
                  new Je.Action({
                    actionId: 'Chart.Legend.ToggleIndicatorValuesVisibility',
                    checkable: !0,
                    checked: r.showStudyValues.value(),
                    label: yt,
                    statName: 'Show Indicator Values',
                    onExecute: () => it(e, r.showStudyValues, ut),
                  }),
                )),
              void 0 !== u)
            ) {
              const e = u.get(0)
              void 0 !== e &&
                e.length > 0 &&
                (a.push(...e), a.push(new Je.Separator()))
            }
            return (
              t.settings &&
                (a[a.length - 1] instanceof Je.Separator ||
                  a.push(new Je.Separator()),
                a.push(
                  new Je.Action({
                    actionId: 'Chart.Dialogs.ShowGeneralSettings.LegendTab',
                    label: ft,
                    icon: st,
                    statName: 'Settings...',
                    onExecute: () => s(we.TabNames.legend),
                  }),
                )),
              Qe.ContextMenuManager.showMenu(
                a,
                l,
                void 0,
                { menuName: 'LegendPropertiesContextMenu' },
                o,
              )
            )
          })(
            this._model,
            this._options.contextMenu,
            this._callbacks.showGeneralChartProperties,
            s,
            e,
            t,
          )
        }
        onCollapseDataSources() {
          const e = this._showLegendOriginalProperty()
          e.setValue(!e.value())
        }
        updateLayout() {
          const e = this._paneWidget
              .state()
              .sourcesByGroup()
              .legendViewSources()
              .filter(
                (e) => null !== e.statusView() && e.isDisplayedInLegend(),
              ),
            t = Array.from(this._statusProviders.keys()).filter(
              (t) => !e.includes(t),
            )
          for (const e of t) {
            const t = this._statusProviders.get(e)
            t && (t.destroy(), this._statusProviders.delete(e))
          }
          if (0 === e.length) return
          const s = this._model.mainSeries(),
            i = e.indexOf(s)
          i > -1
            ? (e.splice(i, 1),
              yl ||
                null !== this._mainSeriesViewModel ||
                ((this._mainSeriesViewModel = new Le(
                  this._model,
                  s,
                  this._mainSeriesViewModelsOptions,
                  this._callbacks,
                  this._options.contextMenu,
                )),
                (this._mainSeriesStatusWidget = new pl(
                  this._statusSourceAdapter(s),
                  this._model.model(),
                  this._options.statusesWidgets,
                )),
                this._renderer.addMainDataSource(
                  this._mainSeriesViewModel,
                  this._mainSeriesStatusWidget,
                )),
              this._addCustomWidgetForLayerBlock(0))
            : null !== this._mainSeriesViewModel &&
              (this._destroyMainDataSource(),
              this._destroyCustomWidgetFromLayerBlock(0))
          const l = [],
            a = [],
            n = this._dataSourceViewModels.length
          if (0 === n)
            for (let t = e.length - 1; t >= 0; t--) {
              const s = e[t]
              l.push(
                new Xe(
                  this._model,
                  s,
                  this._dataSourceViewModelsOptions,
                  this._callbacks,
                  this._options.contextMenu,
                ),
              ),
                a.push(
                  new _l(
                    this._statusSourceAdapter(s),
                    this._options.statusesWidgets,
                  ),
                )
            }
          else {
            let t = 0
            for (let s = e.length - 1; s >= 0; s--) {
              const i = e[s]
              this._dataSourceViewModels[t]
                ? (this._dataSourceViewModels[t].updateSource(i),
                  this._dataSourcesStatusesWidgets[t].updateSource(
                    this._statusSourceAdapter(i),
                  ))
                : (l.push(
                    new Xe(
                      this._model,
                      i,
                      this._dataSourceViewModelsOptions,
                      this._callbacks,
                      this._options.contextMenu,
                    ),
                  ),
                  a.push(
                    new _l(
                      this._statusSourceAdapter(i),
                      this._options.statusesWidgets,
                    ),
                  )),
                t++
            }
            for (; this._dataSourceViewModels.length > t; )
              (0, o.ensureDefined)(this._dataSourceViewModels.pop()).destroy()
            for (; this._dataSourcesStatusesWidgets.length > t; )
              (0, o.ensureDefined)(
                this._dataSourcesStatusesWidgets.pop(),
              ).destroy()
          }
          0 !== l.length &&
            (this._renderer.addDataSources(l, a),
            this._dataSourceViewModels.push(...l),
            this._dataSourcesStatusesWidgets.push(...a)),
            n !== this._dataSourceViewModels.length &&
              this._updateCollapsedSourcesMode(),
            this._dataSourceViewModels.length > 0
              ? this._addCustomWidgetForLayerBlock(1)
              : this._destroyCustomWidgetFromLayerBlock(1),
            this._recreateSubscriptions(),
            this._isPaneMain.setValue(this._getIsPaneMainValue()),
            this.update(),
            this._updateWidgetModeByWidth()
        }
        update() {
          null !== this._mainSeriesViewModel &&
            this._mainSeriesViewModel.update()
          for (const e of this._dataSourceViewModels) e.update()
        }
        updateThemedColors(e) {
          null === e &&
            (e = (0, bl.getStdThemedValue)(
              'chartProperties.paneProperties.background',
              this._backgroundThemeName.value(),
            )),
            this._themedColor.setValue(e || '')
        }
        firstTitle() {
          return this._renderer.firstTitle()
        }
        getElement() {
          return this._renderer.getElement()
        }
        addMargin(e) {
          if (this._margin === e) return
          this._margin = e
          ;(this._renderer.getElement().style.maxWidth =
            0 === this._margin ? '' : `calc(100% - ${this._margin + fl}px)`),
            this._updateWidgetModeBySize()
        }
        updateWidgetModeBySize(e) {
          ;(this._size = e), this._updateWidgetModeBySize()
        }
        _statusSourceAdapter(e) {
          let t = this._statusProviders.get(e)
          return (
            void 0 === t &&
              ((t =
                e !== this._model.mainSeries()
                  ? new gl(e, this._model.model())
                  : new vl(this._model.mainSeries(), this._model.model())),
              this._statusProviders.set(e, t)),
            t
          )
        }
        _updateWidgetModeBySize() {
          this._updateWidgetModeByWidth(),
            this._updateWidgetModeByHeight(),
            this._updateCustomWidgetModeBySize()
        }
        _updateWidgetModeByWidth() {
          if (null === this._size) return
          const e = this._availableWidth()
          this._renderer.updateMode(e),
            this._paneWidget.hasState() &&
              this._paneWidget.state().containsMainSeries() &&
              this._model
                .mainSeries()
                .setTextSourceIsAlwaysTickerRestrictionEnabled(e <= 132)
        }
        _updateWidgetModeByHeight() {
          null !== this._size &&
            ((this._availableHeight = 0.8 * this._size.height),
            this._updateCollapsedSourcesModeThrottle())
        }
        _updateCustomWidgetModeBySize() {
          if (null === this._size) return
          const e = (0, i.size)({
            width: this._availableWidth(),
            height: this._size.height,
          })
          for (const t of Array.from(this._customLegendWidgetsMap.values()))
            for (const s of Array.from(t.values()))
              for (const t of s) t.updateWidgetModeBySize(e)
        }
        _destroyMainDataSource() {
          ;(0, o.ensureNotNull)(this._mainSeriesStatusWidget).destroy(),
            (this._mainSeriesStatusWidget = null),
            (0, o.ensureNotNull)(this._mainSeriesViewModel).destroy(),
            (this._mainSeriesViewModel = null)
        }
        _updateCollapsedSourcesMode() {
          const e = this._dataSourceViewModels.length,
            t = this._hideAllExceptFirstLine.value()
          if (this._availableHeight > 0 && e > 2) {
            const s = Number(this._renderer.getMainSourceHeight()),
              i = this._renderer.getDataSourceHeight(),
              l = this._getCustomWidgetsHeight()
            if (null !== i) {
              const o = Math.floor((this._availableHeight - s - l) / i),
                a = Math.max(o, 2) - 1
              if (e > a + 1) {
                let s = ''
                for (let i = 0; i < e; i++) {
                  const e = i < a
                  this._dataSourceViewModels[i].setGlobalVisibility(
                    e && (!t || 0 === i),
                  ),
                    e ||
                      (s += `${0 === s.length ? '' : ', '}${this._dataSourceViewModels[i].getFullTitle()}`)
                }
                return (
                  this._collapsedDataSourcesTitle.setValue(s),
                  void this._collapsedDataSourcesCount.setValue(e - a)
                )
              }
            }
          }
          for (let e = 0; e < this._dataSourceViewModels.length; ++e)
            this._dataSourceViewModels[e].setGlobalVisibility(!t || 0 === e)
          this._collapsedDataSourcesCount.setValue(0),
            this._collapsedDataSourcesTitle.setValue('')
        }
        _getCustomWidgetsHeight() {
          let e = 0
          for (const t of Array.from(this._customLegendWidgetsMap.values()))
            for (const s of Array.from(t.values()))
              for (const t of s) e += t.height().value()
          return e
        }
        _getCustomTextColorValue() {
          const e = this._model
            .model()
            .properties()
            .childs()
            .scalesProperties.childs()
            .textColor.value()
          return (0, bl.isStdThemedDefaultValue)(
            'chartProperties.scalesProperties.textColor',
            e,
            (0, bl.getCurrentTheme)().name,
          )
            ? null
            : e
        }
        _clearSubscriptions() {
          null !== this._mainSeriesRowHidden &&
            (this._mainSeriesRowHidden.destroy(),
            (this._mainSeriesRowHidden = null))
          for (const e of this._dataSourceRowsHidden) e.destroy()
          this._dataSourceRowsHidden = []
          for (const e of this._customWidgetsVisibilities) e.destroy()
          this._customWidgetsVisibilities = []
          for (const e of this._customWidgetsHeights) e.destroy()
          this._customWidgetsHeights = []
        }
        _recreateSubscriptions() {
          this._clearSubscriptions(),
            null !== this._mainSeriesViewModel &&
              ((this._mainSeriesRowHidden = this._mainSeriesViewModel
                .isRowHidden()
                .spawn()),
              this._mainSeriesRowHidden.subscribe(
                this._updateLegendVisibilities.bind(this),
              ))
          for (const e of this._dataSourceViewModels) {
            const t = e.isRowHidden().spawn()
            this._dataSourceRowsHidden.push(t),
              t.subscribe(this._updateVisibleDataSourceCount.bind(this)),
              t.subscribe(this._updateLegendVisibilities.bind(this))
          }
          for (const e of Array.from(this._customLegendWidgetsMap.values()))
            for (const t of Array.from(e.values()))
              for (const e of t) {
                const t = e.visibility().spawn()
                this._customWidgetsVisibilities.push(t),
                  t.subscribe(this._updateLegendVisibilities.bind(this))
                const s = e.height().spawn()
                this._customWidgetsHeights.push(s),
                  s.subscribe(this._updateCollapsedSourcesMode.bind(this))
              }
          this._updateVisibleDataSourceCount(), this._updateLegendVisibilities()
        }
        _updateLegendVisibilities() {
          if (this._hideWholeLegend.value())
            return void this._allLegendHidden.setValue(!0)
          const e = this._dataSourceRowsHidden.every((e) => e.value()),
            t = this._hideNotMainSources.value() || e
          this._studiesLegendHidden.setValue(t)
          const s =
              null === this._mainSeriesRowHidden ||
              this._mainSeriesRowHidden.value(),
            i = this._customWidgetsVisibilities.some((e) => e.value())
          this._allLegendHidden.setValue(e && s && !i)
        }
        _updateVisibleDataSourceCount() {
          const e = this._dataSourceRowsHidden.filter((e) => !e.value()).length
          this._visibleDataSourceCount.setValue(e)
        }
        _setLegendVisibilityToggled() {
          0
        }
        _getIsPaneMainValue() {
          return this._paneWidget.containsMainSeries()
        }
        _showLegendCalculatedProperty() {
          return this._model.model().showLegend()
        }
        _showLegendOriginalProperty() {
          return this._model
            .model()
            .properties()
            .childs()
            .paneProperties.childs()
            .legendProperties.childs().showLegend
        }
        _addCustomWidgetForLayerBlock(e) {
          const t = this._customLegendWidgetsFactoriesMap.get(e)
          if (void 0 === t) return
          const s = this._customLegendWidgetsMap.get(e) || new Map()
          let i = !1
          for (const l of Array.from(t.keys())) {
            const o = s.get(l) || [],
              a = t.get(l) || []
            for (let t = o.length; t < a.length; t++) {
              const s = a[t](this._model.model(), this._backgroundThemeName)
              0 === e &&
                0 === l &&
                s.setGlobalVisibility(
                  (0, le.combine)(
                    (e, t) => !e && !t,
                    this._hideNotMainSources.weakReference(),
                    this._hideAllExceptFirstLine.weakReference(),
                  ).ownership(),
                ),
                o.push(s),
                this._renderer.addCustomWidget(s, { block: e, position: l }),
                (i = !0)
            }
            i && s.set(l, o)
          }
          i && this._customLegendWidgetsMap.set(e, s)
        }
        _destroyCustomWidgetFromLayerBlock(e) {
          const t = this._customLegendWidgetsMap.get(e)
          if (void 0 !== t) {
            for (const e of Array.from(t.values()))
              for (const t of e) t.destroy()
            t.clear(), this._customLegendWidgetsMap.delete(e)
          }
        }
        _availableWidth() {
          return null === this._size ? 0 : this._size.width - this._margin - fl
        }
      }
    },
    69289: (e, t, s) => {
      'use strict'
      s.r(t), s.d(t, { PaneControlsWidget: () => X })
      var i = s(32563),
        l = s(51768),
        o = s(44352),
        a = s(68335),
        n = s(3228),
        r = s(28853),
        d = s(50151),
        u = s(24377),
        h = s(65616),
        c = s(34926),
        _ = s(94815),
        p = s(7488)
      class m {
        constructor(e, t, s) {
          ;(this._parentEl = document.createElement('div')),
            (this._listActionsWrapperEl = null),
            (this._listActionsElements = {}),
            (this._actionsSpawns = {}),
            (this._onMouseEnterLeaveEventHandler = null),
            (this._mouseOverWidget = !1),
            (this._width = null),
            (this._wrapEl = e),
            (this._onMouseEnterLeaveEventHandler =
              this._onMouseEnterLeaveEvent.bind(this)),
            this._wrapEl.addEventListener(
              'mouseenter',
              this._onMouseEnterLeaveEventHandler,
            ),
            this._wrapEl.addEventListener(
              'mouseleave',
              this._onMouseEnterLeaveEventHandler,
            ),
            (this._actions = t),
            (this._globalVisibility = s.globalVisibility.spawn()),
            this._globalVisibility.subscribe(
              this._updatePaneControlsWidgetVisibility.bind(this),
            ),
            (this._visibilityType = s.visibilityType.spawn()),
            this._visibilityType.subscribe(
              this._updatePaneControlsWidgetVisibility.bind(this),
            ),
            (this._doNotSwitchToContextMenuMode =
              s.doNotSwitchToContextMenuMode),
            (this._forceContextMenuMode = s.forceContextMenuMode.spawn()),
            this._forceContextMenuMode.subscribe(
              this._updateWidgetMode.bind(this),
            ),
            (this._themedColor = s.themedColor.spawn()),
            this._themedColor.subscribe(this._updateThemedColor.bind(this))
          for (const [e, t] of Object.entries(this._actions)) {
            const s = e
            ;(this._actionsSpawns[s] = {
              visible: t.visible.spawn(),
              title: void 0 === t.title ? null : t.title.spawn(),
            }),
              this._actionsSpawns[s].visible.subscribe(
                this._updateActionVisibilities.bind(this, s),
              )
            const i = this._actionsSpawns[s].title
            null !== i && i.subscribe(this._updateActionTitle.bind(this, s))
          }
          this._render(),
            this._updatePaneControlsWidgetVisibility(),
            this._updateThemedColor(this._themedColor.value()),
            this._parentEl.classList.toggle(
              _.touchMode,
              h.trackingModeIsAvailable,
            ),
            this._parentEl.addEventListener('contextmenu', (e) =>
              e.preventDefault(),
            )
        }
        destroy() {
          this._visibilityType.destroy(),
            this._forceContextMenuMode.destroy(),
            this._themedColor.destroy()
          for (const e of Object.keys(this._actionsSpawns)) {
            const t = e
            this._actionsSpawns[t].visible.destroy()
            const s = this._actionsSpawns[t].title
            null !== s && s.destroy()
          }
          null !== this._onMouseEnterLeaveEventHandler &&
            (this._wrapEl.removeEventListener(
              'mouseenter',
              this._onMouseEnterLeaveEventHandler,
            ),
            this._wrapEl.removeEventListener(
              'mouseleave',
              this._onMouseEnterLeaveEventHandler,
            ),
            (this._onMouseEnterLeaveEventHandler = null)),
            (this._parentEl.innerHTML = ''),
            delete this._parentEl
        }
        getElement() {
          return this._parentEl
        }
        bottomWithMargin() {
          const e = this._parentEl.classList.contains(_.touchMode)
            ? Number(_.css_value_pane_controls_button_touch_size)
            : Number(_.css_value_pane_controls_button_size)
          return 2 * Number(_.css_value_pane_controls_margin_top) + e
        }
        updateWidgetModeByWidth(e) {
          ;(this._width = e), this._updateWidgetMode()
        }
        _updateWidgetMode() {
          if (null === this._width) return
          const e =
              !this._doNotSwitchToContextMenuMode.value() && this._width < 356,
            t =
              !this._doNotSwitchToContextMenuMode.value() &&
              (this._forceContextMenuMode.value() || this._width < 666.65),
            s = (0, d.ensureNotNull)(this._listActionsWrapperEl),
            i = (0, d.ensureNotNull)(this._listActionsElements.more)
          s.classList.toggle(p.blockHidden, e || t),
            i.classList.toggle(
              p.blockHidden,
              e || !t || !this._actions.more.visible.value(),
            )
        }
        _render() {
          this._renderActions(),
            this._parentEl.classList.add(_.paneControls),
            this._wrapEl.append(this._parentEl)
        }
        _renderActions() {
          null === this._listActionsWrapperEl &&
            ((this._listActionsWrapperEl = document.createElement('div')),
            this._listActionsWrapperEl.classList.add(_.buttonsWrapper),
            this._parentEl.append(this._listActionsWrapperEl))
          const e = h.trackingModeIsAvailable ? 'large' : 'small'
          ;(this._listActionsElements.up = (0, c.createActionElement)(
            this._actions.up,
            _.button,
            _.buttonIcon,
            p.blockHidden,
            e,
          )),
            (this._listActionsElements.down = (0, c.createActionElement)(
              this._actions.down,
              _.button,
              _.buttonIcon,
              p.blockHidden,
              e,
            )),
            (this._listActionsElements.collapse = (0, c.createActionElement)(
              this._actions.collapse,
              _.button,
              _.buttonIcon,
              p.blockHidden,
              e,
            )),
            (this._listActionsElements.restore = (0, c.createActionElement)(
              this._actions.restore,
              _.button,
              _.buttonIcon,
              p.blockHidden,
              e,
            )),
            (this._listActionsElements.close = (0, c.createActionElement)(
              this._actions.close,
              _.button,
              _.buttonIcon,
              p.blockHidden,
              e,
            )),
            (this._listActionsElements.maximize = (0, c.createActionElement)(
              this._actions.maximize,
              _.button,
              _.buttonIcon,
              p.blockHidden,
              e,
            )),
            (this._listActionsElements.minimize = (0, c.createActionElement)(
              this._actions.minimize,
              _.button,
              _.buttonIcon,
              p.blockHidden,
              e,
            )),
            this._listActionsWrapperEl.append(
              this._listActionsElements.up,
              this._listActionsElements.down,
              this._listActionsElements.close,
              this._listActionsElements.collapse,
              this._listActionsElements.restore,
              this._listActionsElements.maximize,
              this._listActionsElements.minimize,
            ),
            (this._listActionsElements.more = (0, c.createActionElement)(
              this._actions.more,
              _.button,
              _.buttonIcon,
              p.blockHidden,
              e,
            ))
          for (const e of Object.keys(this._listActionsElements))
            (0, d.ensureNotNull)(this._listActionsElements[e]).classList.add(
              _.newButton,
            )
          this._parentEl.append(this._listActionsElements.more)
        }
        _updateActionVisibilities(e, t) {
          ;(0, d.ensureNotNull)(this._listActionsElements[e]).classList.toggle(
            p.blockHidden,
            !t,
          )
        }
        _updateActionTitle(e, t) {
          ;(0, d.ensureNotNull)(this._listActionsElements[e]).setAttribute(
            'title',
            t,
          )
        }
        _onMouseEnterLeaveEvent(e) {
          ;(this._mouseOverWidget = 'mouseenter' === e.type),
            'visibleOnMouseOver' === this._visibilityType.value() &&
              this._updatePaneControlsWidgetVisibility()
        }
        _updatePaneControlsWidgetVisibility() {
          let e,
            t = !1
          switch (this._visibilityType.value()) {
            case 'alwaysOff':
              ;(e = !1), (t = !0)
              break
            case 'alwaysOn':
              e = this._globalVisibility.value()
              break
            case 'visibleOnMouseOver':
              e = this._globalVisibility.value() && this._mouseOverWidget
          }
          this._parentEl.classList.toggle(_.hidden, !e),
            this._parentEl.classList.toggle(
              _.forceHidden,
              !this._globalVisibility.value() || t,
            )
        }
        _updateThemedColor(e) {
          if (e.length > 0) {
            const [t, s, i] = (0, u.parseRgb)(e)
            this._parentEl.style.color = (0, u.rgbaToString)([
              t,
              s,
              i,
              (0, u.normalizeAlphaComponent)(0.8),
            ])
          } else this._parentEl.style.removeProperty('color')
        }
      }
      var g = s(39347),
        v = s(10643),
        b = s(36016),
        w = s(72899),
        y = s(48344),
        S = s(99539),
        f = s(20465),
        M = s(34763)
      const C = o.t(null, void 0, s(68854)),
        E = C,
        V = (0, a.humanReadableModifiers)(a.Modifiers.Mod) + C
      var k = s(97145),
        A = s(5286),
        L = s(61814),
        W = s(72237),
        T = s(81020),
        x = s(3515),
        H = s(79526),
        D = s(82847),
        P = s(7859),
        B = s(70471),
        I = s(71402),
        z = s(42930)
      const N = i.mobiletouch,
        O = o.t(null, void 0, s(83498)),
        F = o.t(null, void 0, s(70343)),
        R = o.t(null, void 0, s(39899)),
        U = o.t(null, void 0, s(19603)),
        G = o.t(null, void 0, s(91029)),
        $ = o.t(null, void 0, s(39589)),
        j = o.t(null, void 0, s(35732)),
        Y = o.t(null, void 0, s(68854)),
        q = (0, L.hotKeySerialize)({ keys: [''], text: Y }),
        Z = (0, L.hotKeySerialize)({
          keys: [(0, a.humanReadableModifiers)(a.Modifiers.Mod, !1)],
          text: `{0} + ${Y}`,
        })
      class X {
        constructor(e, t, s, i, l) {
          ;(this._actions = {}),
            (this._moreCMShown = !1),
            (this._themedColor = new k.WatchedValue('')),
            (this._connectedToBroker = new k.WatchedValue(!1)),
            (this._isDestroyed = !1),
            (this._model = e),
            (this._paneWidget = t),
            (this._callbacks = i),
            (this._closeButtonVisibility = new k.WatchedValue(
              this._getCloseButtonVisibility(),
            )),
            (this._upButtonVisibility = new k.WatchedValue(
              this._getUpButtonVisibility(),
            )),
            (this._downButtonVisibility = new k.WatchedValue(
              this._getDownButtonVisibility(),
            )),
            (this._maximizeButtonVisibility = new k.WatchedValue(
              this._getMaximizeButtonVisibility(),
            )),
            (this._minimizeButtonVisibility = new k.WatchedValue(
              this._getMinimizeButtonVisibility(),
            )),
            (this._collapseButtonVisibility = new k.WatchedValue(
              this._getCollapseButtonVisibility(),
            )),
            (this._restoreButtonVisibility = new k.WatchedValue(
              this._getRestoreButtonVisibility(),
            )),
            this._createActions(),
            (this._visibilityTypeProperty = (0, n.actualBehavior)()),
            this._visibilityTypeProperty.subscribe(this, (e) => {
              this._visibilityType.setValue(e.value())
            }),
            (this._visibilityType = new k.WatchedValue(
              this._visibilityTypeProperty.value(),
            )),
            (this._isPaneMaximize = new k.WatchedValue(
              this._getIsPaneMaximizeValue(),
            )),
            (this._isWidgetShow = new k.WatchedValue(this._getIsWidgetShow())),
            (this._backgroundThemeName = s.backgroundThemeName),
            (this._renderer = new m(l, this._actions, {
              visibilityType: this._visibilityType.readonly(),
              globalVisibility: this._isWidgetShow.readonly(),
              doNotSwitchToContextMenuMode: this._isPaneMaximize.readonly(),
              forceContextMenuMode: this._connectedToBroker.readonly(),
              themedColor: this._themedColor.readonly(),
            }))
        }
        destroy() {
          this._visibilityTypeProperty.unsubscribeAll(this),
            this._renderer.destroy(),
            (this._isDestroyed = !0)
        }
        getElement() {
          return this._renderer.getElement()
        }
        bottomWithMargin() {
          return this._renderer.bottomWithMargin()
        }
        action() {
          return this._actions
        }
        update() {
          this._updateButtonsVisibility(),
            this._isPaneMaximize.setValue(this._getIsPaneMaximizeValue()),
            this._isWidgetShow.setValue(this._getIsWidgetShow())
        }
        updateWidgetModeByWidth(e) {
          this._renderer.updateWidgetModeByWidth(e)
        }
        updateThemedColors(e) {
          null === e &&
            (e = (0, A.getStdThemedValue)(
              'chartProperties.paneProperties.background',
              this._backgroundThemeName.value(),
            )),
            this._themedColor.setValue(e || '')
        }
        async _subscribeOnConnectedToBroker() {
          const e = await waitTradingService()
          this._isDestroyed ||
            (e.onConnectionStatusChange.subscribe(
              this,
              this._updateConnectedToBroker.bind(this),
            ),
            this._updateConnectedToBroker(e.connectStatus()))
        }
        _updateConnectedToBroker(e) {
          this._connectedToBroker.setValue(1 === e)
        }
        _updateButtonsVisibility() {
          this._closeButtonVisibility.setValue(
            this._getCloseButtonVisibility(),
          ),
            this._upButtonVisibility.setValue(this._getUpButtonVisibility()),
            this._downButtonVisibility.setValue(
              this._getDownButtonVisibility(),
            ),
            this._maximizeButtonVisibility.setValue(
              this._getMaximizeButtonVisibility(),
            ),
            this._minimizeButtonVisibility.setValue(
              this._getMinimizeButtonVisibility(),
            ),
            this._collapseButtonVisibility.setValue(
              this._getCollapseButtonVisibility(),
            ),
            this._restoreButtonVisibility.setValue(
              this._getRestoreButtonVisibility(),
            )
        }
        _createActions() {
          ;(this._actions.up = {
            iconMap: new Map([
              ['large', T],
              ['small', T],
            ]),
            action: this._onUpDownButton.bind(this, 'up'),
            visible: this._upButtonVisibility,
            title: new k.WatchedValue(F),
            className: _.up,
            dataset: { name: 'pane-button-up' },
          }),
            (this._actions.down = {
              iconMap: new Map([
                ['large', x],
                ['small', x],
              ]),
              action: this._onUpDownButton.bind(this, 'down'),
              visible: this._downButtonVisibility,
              title: new k.WatchedValue(R),
              className: _.down,
              dataset: { name: 'pane-button-down' },
            }),
            (this._actions.close = {
              iconMap: new Map([
                ['large', W],
                ['small', W],
              ]),
              action: this._onCloseButton.bind(this),
              visible: this._closeButtonVisibility,
              title: new k.WatchedValue(O),
              dataset: { name: 'pane-button-close' },
            }),
            (this._actions.maximize = {
              iconMap: new Map([
                ['large', P],
                ['small', H],
              ]),
              action: this._onToggleMaximizeButton.bind(this, 'Maximize pane'),
              visible: this._maximizeButtonVisibility,
              title: new k.WatchedValue(U),
              hotKeyTitle: q,
              className: _.maximize,
              dataset: { name: 'pane-button-maximize' },
            }),
            (this._actions.minimize = {
              iconMap: new Map([
                ['large', P],
                ['small', H],
              ]),
              action: this._onToggleMaximizeButton.bind(this, 'Minimize pane'),
              visible: this._minimizeButtonVisibility,
              title: new k.WatchedValue(G),
              hotKeyTitle: q,
              className: _.minimize,
              dataset: { name: 'pane-button-minimize' },
            }),
            (this._actions.collapse = {
              iconMap: new Map([
                ['large', I],
                ['small', I],
              ]),
              action: this._onToggleCollapseButton.bind(this, 'Collapse pane'),
              visible: this._collapseButtonVisibility,
              title: new k.WatchedValue($),
              hotKeyTitle: Z,
              className: _.collapse,
              dataset: { name: 'pane-button-collapse' },
            }),
            (this._actions.restore = {
              iconMap: new Map([
                ['large', z],
                ['small', z],
              ]),
              action: this._onToggleCollapseButton.bind(this, 'Restore pane'),
              visible: this._restoreButtonVisibility,
              title: new k.WatchedValue(G),
              hotKeyTitle: Z,
              className: _.restore,
              dataset: { name: 'pane-button-restore' },
            }),
            (this._actions.more = {
              iconMap: new Map([
                ['large', B],
                ['small', D],
              ]),
              action: this._showButtonsInContextMenu.bind(this),
              visible: new k.WatchedValue(!N),
              title: new k.WatchedValue(j),
              dataset: { name: 'pane-button-more' },
            })
        }
        _getCloseButtonVisibility() {
          const e = this._paneWidget.state()
          let t = !1
          return (
            e.containsMainSeries() ||
              e.maximized().value() ||
              N ||
              (t = e.dataSources().some((e) => (0, r.isStudy)(e))),
            t
          )
        }
        _onCloseButton() {
          this._trackEvent('Delete pane')
          const e = this._model
            .model()
            .panes()
            .indexOf(this._paneWidget.state())
          this._model.removePane(e)
        }
        _getUpButtonVisibility() {
          const e = this._paneWidget.state()
          return (
            this._model.model().panes().indexOf(e) > 0 &&
            !e.maximized().value() &&
            !N
          )
        }
        _getDownButtonVisibility() {
          const e = this._paneWidget.state(),
            t = this._model.model().panes()
          return t.indexOf(e) < t.length - 1 && !e.maximized().value() && !N
        }
        _onUpDownButton(e) {
          this._trackEvent(`Move pane ${e}`)
          const t = this._model
            .model()
            .panes()
            .indexOf(this._paneWidget.state())
          this._model.rearrangePanes(t, e)
        }
        _getMaximizeButtonVisibility() {
          const e = this._paneWidget.state()
          return (
            this._model.model().panes().length > 1 &&
            !e.maximized().value() &&
            !N
          )
        }
        _getMinimizeButtonVisibility() {
          const e = this._paneWidget.state()
          return this._model.model().panes().length > 1 && e.maximized().value()
        }
        _getCollapseButtonVisibility() {
          if (N) return !1
          const e = this._paneWidget.state()
          return (
            !e.maximized().value() &&
            !e.collapsed().value() &&
            this._model.model().paneCollapsingAvailable().value()
          )
        }
        _getRestoreButtonVisibility() {
          const e = this._paneWidget.state()
          return !e.maximized().value() && e.collapsed().value()
        }
        _onToggleMaximizeButton(e) {
          this._trackEvent(e),
            this._callbacks.toggleMaximizePane(this._paneWidget)
        }
        _onToggleCollapseButton(e) {
          this._trackEvent(e),
            this._callbacks.toggleCollapsedPane(this._paneWidget)
        }
        _showButtonsInContextMenu(e) {
          e.preventDefault(),
            this._moreCMShown ||
              (function (e, t, s) {
                const i = []
                if (e.maximize.visible.value()) {
                  const t = (0, d.ensure)(e.maximize.title),
                    s = (0, d.ensureNotNull)(e.maximize.action)
                  i.push(
                    new g.Action({
                      actionId: 'Chart.PaneControls.MaximizePane',
                      icon: S,
                      label: t.value(),
                      statName: 'Maximize Pane',
                      shortcutHint: E,
                      onExecute: () => s(),
                    }),
                  )
                } else if (e.minimize.visible.value()) {
                  const t = (0, d.ensure)(e.minimize.title),
                    s = (0, d.ensureNotNull)(e.minimize.action)
                  i.push(
                    new g.Action({
                      actionId: 'Chart.PaneControls.MinimizePane',
                      icon: S,
                      label: t.value(),
                      statName: 'Minimize Pane',
                      shortcutHint: E,
                      onExecute: () => s(),
                    }),
                  )
                }
                if (e.collapse.visible.value()) {
                  const t = (0, d.ensure)(e.collapse.title),
                    s = (0, d.ensureNotNull)(e.collapse.action)
                  i.push(
                    new g.Action({
                      actionId: 'Chart.PaneControls.CollapsePane',
                      icon: f,
                      label: t.value(),
                      statName: 'Collapse pane',
                      shortcutHint: V,
                      onExecute: () => s(),
                    }),
                  )
                }
                if (e.restore.visible.value()) {
                  const t = (0, d.ensure)(e.restore.title),
                    s = (0, d.ensureNotNull)(e.restore.action)
                  i.push(
                    new g.Action({
                      actionId: 'Chart.PaneControls.RestorePane',
                      icon: M,
                      label: t.value(),
                      statName: 'Restore pane',
                      shortcutHint: V,
                      onExecute: () => s(),
                    }),
                  )
                }
                if (e.up.visible.value()) {
                  const t = (0, d.ensure)(e.up.title),
                    s = (0, d.ensureNotNull)(e.up.action)
                  i.push(
                    new g.Action({
                      actionId: 'Chart.PaneControls.MovePaneUp',
                      icon: w,
                      label: t.value(),
                      statName: 'Move pane up',
                      onExecute: () => s(),
                    }),
                  )
                }
                if (e.down.visible.value()) {
                  const t = (0, d.ensure)(e.down.title),
                    s = (0, d.ensureNotNull)(e.down.action)
                  i.push(
                    new g.Action({
                      actionId: 'Chart.PaneControls.MovePaneDown',
                      icon: y,
                      label: t.value(),
                      statName: 'Move pane down',
                      onExecute: () => s(),
                    }),
                  )
                }
                if (e.close.visible.value()) {
                  const t = (0, d.ensure)(e.close.title),
                    s = (0, d.ensureNotNull)(e.close.action)
                  i.push(
                    new g.Action({
                      actionId: 'Chart.PaneControls.DeletePane',
                      icon: b,
                      label: t.value(),
                      statName: 'Delete pane',
                      onExecute: () => s(),
                    }),
                  )
                }
                const l = (0, d.ensureNotNull)(t.target).getBoundingClientRect()
                return v.ContextMenuManager.showMenu(
                  i,
                  {
                    clientX: l.right,
                    clientY: l.top + l.height + 3,
                    attachToXBy: 'right',
                  },
                  void 0,
                  void 0,
                  s,
                )
              })(this._actions, e, () => {
                this._moreCMShown = !1
              }).then(() => {
                this._moreCMShown = !0
              })
        }
        _getIsPaneMaximizeValue() {
          return this._paneWidget.state().maximized().value()
        }
        _getIsWidgetShow() {
          return this._model.model().panes().length > 1
        }
        _trackEvent(e) {
          ;(0, l.trackEvent)('GUI', 'Pane action', e)
        }
      }
    },
    34926: (e, t, s) => {
      'use strict'
      s.d(t, { createActionElement: () => l })
      var i = s(1722)
      function l(e, t, s, l, o) {
        const a = document.createElement('div')
        ;(a.className = t),
          a.classList.toggle(l, !e.visible.value()),
          Object.assign(a.dataset, e.dataset),
          void 0 !== e.className && a.classList.add(e.className),
          void 0 !== e.title &&
            (a.classList.add('apply-common-tooltip'),
            a.setAttribute('title', e.title.value()),
            void 0 !== e.hotKeyTitle &&
              (a.dataset.tooltipHotkey = e.hotKeyTitle)),
          a.addEventListener('touchend', e.action),
          a.addEventListener('mousedown', (t) => {
            0 === t.button && e.action(t)
          })
        const n = document.createElement('div')
        n.classList.add(s)
        const r = e.iconMap.get(o) || ''
        return (
          (0, i.isString)(r) ? (n.innerHTML = r) : n.appendChild(r),
          a.appendChild(n),
          a
        )
      }
    },
    65616: (e, t, s) => {
      'use strict'
      s.d(t, { trackingModeIsAvailable: () => i })
      const i = s(49483).CheckMobile.any()
    },
    89612: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.26 4.44a.75.75 0 0 1 1.05.07l3.5 4c.25.28.25.7 0 .98l-3.5 4a.75.75 0 0 1-1.12-.98L10.25 9 7.2 5.5a.75.75 0 0 1 .07-1.06Z"/></svg>'
    },
    23317: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M14 10H4V8.5h10V10Z"/></svg>'
    },
    77576: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M8.25 13.75v-9.5h1.5v9.5h-1.5Z"/><path fill="currentColor" d="M13.75 9.75h-9.5v-1.5h9.5v1.5Z"/></svg>'
    },
    91986: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M14.5 8V3.5H10V2h6v6h-1.5Zm-11 2v4.5H8V16H2v-6h1.5Z"/></svg>'
    },
    76996: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M11.5 2v4.5H16V8h-6V2h1.5Zm-5 14v-4.5H2V10h6v6H6.5Z"/></svg>'
    },
    78529: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.45 3.5 12.48 9l-5.03 5.49 1.1 1.01L14.52 9 8.55 2.49 7.45 3.5Z"/><path fill="currentColor" d="m3.93 5.99 2.58 3-2.58 3.02 1.14.98 3.42-4-3.42-3.98L3.93 6Z"/></svg>'
    },
    93724: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M10 6.38V8L6 5.5 10 3v1.85A5.25 5.25 0 1 1 3.75 10a.75.75 0 0 1 1.5 0A3.75 3.75 0 1 0 10 6.38Z"/></svg>'
    },
    79304: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9 2.5c-1.06 0-1.88.93-1.75 1.98l.63 5.03a1.13 1.13 0 0 0 2.25 0l.62-5.03A1.77 1.77 0 0 0 9 2.5zm0 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/></svg>'
    },
    38373: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9 4c-.79 0-1.38.7-1.25 1.48l.67 4.03a.59.59 0 0 0 1.16 0l.67-4.03A1.27 1.27 0 0 0 9 4zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>'
    },
    45503: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13.5 4.5l-9 9M4.5 4.5l9 9"/></svg>'
    },
    73710: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.7" d="M12.5 5.5l-7 7m0-7l7 7"/></svg>'
    },
    31233: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.57 14.8H5.03V3.36c1.62-.05 2.64-.08 3.06-.08 1.66 0 2.98.49 3.96 1.47a5.23 5.23 0 0 1 1.47 3.88c0 4.11-1.99 6.17-5.95 6.17zm-.5-9.66v7.8c.32.04.67.06 1.05.06 1.03 0 1.83-.38 2.41-1.12.58-.75.88-1.79.88-3.13 0-2.44-1.14-3.67-3.42-3.67-.22 0-.53.02-.93.06z"/></svg>'
    },
    12646: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.84 13.7H5.78V4.4l2.48-.06c1.35 0 2.42.4 3.22 1.2.8.78 1.19 1.83 1.19 3.15 0 3.34-1.61 5.01-4.83 5.01zm-.41-7.85v6.35c.26.02.55.03.86.03.83 0 1.48-.3 1.95-.9.48-.6.72-1.46.72-2.54 0-2-.93-2.99-2.78-2.99-.18 0-.43.02-.75.05z"/></svg>'
    },
    69410: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.65 5.16v2.68h3.78v1.73H7.65V13h5.19v1.8H5.62V3.35h7.3v1.8H7.65z"/></svg>'
    },
    55593: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.9 5.87v2.17h3.07v1.4H7.9v2.8h4.22v1.46H6.25V4.4h5.94v1.47H7.9z"/></svg>'
    },
    23683: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.2 7.34c0-1.4.73-2.64 1.82-3.34A5.03 5.03 0 0 0 4 9c0 2.76 2.26 5 5.05 5A5.04 5.04 0 0 0 14 10c-.71.8-1.74 1.29-2.89 1.29A3.93 3.93 0 0 1 7.2 7.34Z"/><path fill="currentColor" d="M11.67 6.33 11 5l-.67 1.33-1.33.2.98 1.03L9.76 9 11 8.34l1.24.66-.22-1.44.98-1.03-1.33-.2Z"/></svg>'
    },
    72844: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M11 11.39c0-2.27 1.19-4.25 3-5.39-4.43.07-8 3.63-8 8 0 4.42 3.64 8 8.13 8A8.1 8.1 0 0 0 22 16a6.55 6.55 0 0 1-11-4.61Z"/><path fill="currentColor" d="m18 10-1-2-1 2-2 .3 1.47 1.54-.32 2.16L17 13l1.85 1-.32-2.16L20 10.29 18 10Z"/></svg>'
    },
    53218: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><rect width="10" height="4" fill="currentColor" rx="2" x="4" y="7"/></svg>'
    },
    62998: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><circle fill="currentColor" cx="9" cy="9" r="5"/></svg>'
    },
    32140: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><circle fill="currentColor" cx="9" cy="9" r="4"/></svg>'
    },
    25230: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M9.3 9l.9-4.53a1.23 1.23 0 1 0-2.4 0L8.7 9l-.9 4.53a1.23 1.23 0 1 0 2.4 0L9.3 9z"/><path fill="currentColor" d="M9.15 9.26l4.38-1.48a1.23 1.23 0 1 0-1.21-2.09L8.85 8.74l-4.38 1.48a1.23 1.23 0 1 0 1.21 2.09l3.47-3.05z"/><path fill="currentColor" d="M9.15 8.74L5.68 5.69a1.23 1.23 0 1 0-1.2 2.09l4.37 1.48 3.47 3.05a1.23 1.23 0 1 0 1.2-2.09L9.16 8.74z"/></svg>'
    },
    43401: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M13.29 4.8h-.09a4.2 4.2 0 1 0 .09 8.4 6 6 0 1 1 0-8.4z"/></svg>'
    },
    15507: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M12.57 5.5h-.07a3.5 3.5 0 1 0 .07 7A4.98 4.98 0 0 1 4 9a5 5 0 0 1 8.57-3.5z"/></svg>'
    },
    12462: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M12.58 12.1A3.86 3.86 0 0 0 9 6.75a3.87 3.87 0 0 0-3.58 5.33 7.74 7.74 0 0 1 7.16 0zM3.64 9.93l-2.3-.62.37-1.38 2.3.62-.37 1.38zM6.1 6.07L5.07 3.92l1.3-.6 1 2.15-1.29.6zM10.62 5.47l1-2.16 1.3.6-1.01 2.16-1.3-.6zM13.99 8.55l2.3-.62.36 1.38-2.3.62L14 8.55z"/></svg>'
    },
    85290: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M12.22 11.78A3.47 3.47 0 0 0 9 6.98a3.48 3.48 0 0 0-3.22 4.8 6.97 6.97 0 0 1 6.44 0zM4.18 9.83L2.1 9.28l.33-1.24 2.07.55-.33 1.24zM6.38 6.36l-.9-1.94 1.16-.54.9 1.94-1.16.54zM10.46 5.82l.9-1.94 1.16.54-.9 1.94-1.16-.54zM13.49 8.6l2.07-.56.33 1.24-2.07.55-.33-1.24z"/></svg>'
    },
    91665: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M14.48 5.1c-.52 2.03-1.46 3.04-2.82 3.04-.64 0-1.55-.19-2.74-.56-1.17-.38-1.99-.57-2.46-.57-.69 0-1.22.37-1.58 1.13H3.55A4.3 4.3 0 0 1 4.5 6c.5-.6 1.08-.9 1.74-.9.7 0 1.65.2 2.84.58 1.2.37 2.04.55 2.52.55.8 0 1.32-.37 1.59-1.13h1.29zm0 4.84c-.52 2.02-1.46 3.03-2.82 3.03-.64 0-1.55-.19-2.74-.56-1.17-.38-1.99-.57-2.46-.57-.69 0-1.22.38-1.58 1.13H3.55a4.3 4.3 0 0 1 .95-2.14c.5-.6 1.08-.9 1.74-.9.7 0 1.65.2 2.84.58 1.2.37 2.04.56 2.52.56.8 0 1.32-.38 1.59-1.13h1.29z"/></svg>'
    },
    52828: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M13.4 5.9c-.41 1.62-1.16 2.43-2.25 2.43-.52 0-1.25-.15-2.2-.45-.93-.3-1.58-.45-1.96-.45-.55 0-.98.3-1.27.9H4.66c.1-.67.36-1.24.76-1.71.4-.48.86-.72 1.4-.72.56 0 1.31.16 2.27.46.95.3 1.62.45 2.01.45.64 0 1.06-.3 1.27-.9h1.03zm0 3.87c-.41 1.62-1.16 2.43-2.25 2.43-.52 0-1.25-.15-2.2-.45-.93-.3-1.58-.46-1.96-.46-.55 0-.98.3-1.27.9H4.66c.1-.67.36-1.24.76-1.7.4-.48.86-.72 1.4-.72.56 0 1.31.15 2.27.46.95.3 1.62.44 2.01.44.64 0 1.06-.3 1.27-.9h1.03z"/></svg>'
    },
    39379: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M4 6.5 6 8l3-3 3 3 2-1.5V10H4V6.5ZM14 13v-2H4v2h10Z"/></svg>'
    },
    52506: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 30 24" width="30" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M15.82 14l5.36-5.36-.82-.82L15 13.18 9.64 7.82l-.82.82L14.18 14l-5.36 5.36.82.82L15 14.82l5.36 5.36.82-.82L15.82 14z"/></svg>'
    },
    88658: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" width="24" height="22" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.35 6.35l-10 10-.7-.7 10-10 .7.7z"/><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M6.65 6.35l10 10 .7-.7-10-10-.7.7z"/></svg>'
    },
    41674: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" width="30" height="24" fill="none"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" class="normal-eye"><path d="M18 7.91C16.7 6.5 14.7 5 12 5S7.3 6.49 6 7.91C6 7.91 4 10 4 11s2 3.09 2 3.09C7.3 15.5 9.3 17 12 17s4.7-1.49 6-2.91c0 0 2-2.09 2-3.09s-2-3.09-2-3.09zm-11.26 5.5C7.94 14.74 9.7 16 12 16s4.05-1.26 5.25-2.59c0 0 1.75-1.91 1.75-2.41 0-.5-1.75-2.41-1.75-2.41C16.05 7.26 14.3 6 12 6S7.95 7.26 6.74 8.59C6.74 8.59 5 10.5 5 11c0 .5 1.74 2.41 1.74 2.41z"/><path d="M12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></g><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" class="crossed-eye"><path d="M8.85 16.27c.92.44 1.97.73 3.15.73 2.7 0 4.7-1.49 6-2.91 0 0 2-2.09 2-3.09s-2-3.09-2-3.09l-.39-.4-.7.7.34.38S19 10.5 19 11c0 .5-1.75 2.41-1.75 2.41C16.05 14.74 14.3 16 12 16c-.88 0-1.68-.18-2.4-.48l-.75.75zM7.1 13.78l-.36-.37S5 11.5 5 11c0-.5 1.74-2.41 1.74-2.41C7.94 7.26 9.7 6 12 6c.88 0 1.68.18 2.4.48l.75-.75A7.17 7.17 0 0 0 12 5C9.3 5 7.3 6.49 6 7.91 6 7.91 4 10 4 11s2 3.09 2 3.09l.39.4.7-.7z"/><path d="M11.22 13.9a3 3 0 0 0 3.68-3.68l-.9.9A2 2 0 0 1 12.13 13l-.9.9zm.66-4.9A2 2 0 0 0 10 10.88l-.9.9a3 3 0 0 1 3.68-3.68l-.9.9zM5.65 16.65l12-12 .7.7-12 12-.7-.7z"/></g><g class="loading-eye"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M18 7.91C16.7 6.5 14.7 5 12 5S7.3 6.49 6 7.91C6 7.91 4 10 4 11s2 3.09 2 3.09C7.3 15.5 9.3 17 12 17s4.7-1.49 6-2.91c0 0 2-2.09 2-3.09s-2-3.09-2-3.09zm-11.26 5.5C7.94 14.74 9.7 16 12 16s4.05-1.26 5.25-2.59c0 0 1.75-1.91 1.75-2.41 0-.5-1.75-2.41-1.75-2.41C16.05 7.26 14.3 6 12 6S7.95 7.26 6.74 8.59C6.74 8.59 5 10.5 5 11c0 .5 1.74 2.41 1.74 2.41z"/></g><g class="animated-loading-eye"><path stroke="currentColor" stroke-linecap="round" d="M14.5 11a2.5 2.5 0 1 0-2.5 2.5"/></g></svg>'
    },
    3792: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" width="24" height="22" fill="none"><g class="normal-eye"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.9948 7.91366C16.6965 6.48549 14.6975 5 11.9999 5C9.30225 5 7.30322 6.48549 6.00488 7.91366C6.00488 7.91366 4 10 4 11C4 12 6.00488 14.0863 6.00488 14.0863C7.30322 15.5145 9.30225 17 11.9999 17C14.6975 17 16.6965 15.5145 17.9948 14.0863C17.9948 14.0863 20 12 20 11C20 10 17.9948 7.91366 17.9948 7.91366ZM6.74482 13.4137C7.94648 14.7355 9.69746 16 11.9999 16C14.3022 16 16.0532 14.7355 17.2549 13.4137C17.2549 13.4137 19 11.5 19 11C19 10.5 17.2549 8.58634 17.2549 8.58634C16.0532 7.26451 14.3022 6 11.9999 6C9.69746 6 7.94648 7.26451 6.74482 8.58634C6.74482 8.58634 5 10.5 5 11C5 11.5 6.74482 13.4137 6.74482 13.4137Z"/><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"/></g><g class="crossed-eye"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M8.8503 16.2712C9.76531 16.7135 10.8152 17 11.9999 17C14.6975 17 16.6965 15.5145 17.9948 14.0863C17.9948 14.0863 20 12 20 11C20 10 17.9948 7.91366 17.9948 7.91366C17.8729 7.77954 17.7448 7.64491 17.6105 7.51105L16.9035 8.2181C17.0254 8.33968 17.1425 8.46276 17.2549 8.58634C17.2549 8.58634 19 10.5 19 11C19 11.5 17.2549 13.4137 17.2549 13.4137C16.0532 14.7355 14.3022 16 11.9999 16C11.1218 16 10.324 15.8161 9.60627 15.5153L8.8503 16.2712ZM7.09663 13.7823C6.97455 13.6606 6.85728 13.5374 6.74482 13.4137C6.74482 13.4137 5 11.5 5 11C5 10.5 6.74482 8.58634 6.74482 8.58634C7.94648 7.26451 9.69746 6 11.9999 6C12.8781 6 13.6761 6.18398 14.394 6.48495L15.1499 5.729C14.2348 5.28657 13.1847 5 11.9999 5C9.30225 5 7.30322 6.48549 6.00488 7.91366C6.00488 7.91366 4 10 4 11C4 12 6.00488 14.0863 6.00488 14.0863C6.12693 14.2206 6.25516 14.3553 6.38959 14.4893L7.09663 13.7823Z"/><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M11.2231 13.8984C11.4709 13.9647 11.7313 14 12 14C13.6569 14 15 12.6569 15 11C15 10.7313 14.9647 10.4709 14.8984 10.2231L13.9961 11.1254C13.934 12.1301 13.1301 12.934 12.1254 12.9961L11.2231 13.8984ZM11.8751 9.00384C10.87 9.06578 10.0658 9.87001 10.0038 10.8751L9.10166 11.7772C9.03535 11.5294 9 11.2688 9 11C9 9.34315 10.3431 8 12 8C12.2688 8 12.5294 8.03535 12.7772 8.10166L11.8751 9.00384Z"/><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.64648 16.6465L17.6465 4.64648L18.3536 5.35359L6.35359 17.3536L5.64648 16.6465Z"/></g><g class="loading-eye"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.9948 7.91366C16.6965 6.48549 14.6975 5 11.9999 5C9.30225 5 7.30322 6.48549 6.00488 7.91366C6.00488 7.91366 4 10 4 11C4 12 6.00488 14.0863 6.00488 14.0863C7.30322 15.5145 9.30225 17 11.9999 17C14.6975 17 16.6965 15.5145 17.9948 14.0863C17.9948 14.0863 20 12 20 11C20 10 17.9948 7.91366 17.9948 7.91366ZM6.74482 13.4137C7.94648 14.7355 9.69746 16 11.9999 16C14.3022 16 16.0532 14.7355 17.2549 13.4137C17.2549 13.4137 19 11.5 19 11C19 10.5 17.2549 8.58634 17.2549 8.58634C16.0532 7.26451 14.3022 6 11.9999 6C9.69746 6 7.94648 7.26451 6.74482 8.58634C6.74482 8.58634 5 10.5 5 11C5 11.5 6.74482 13.4137 6.74482 13.4137Z"/></g><g class="animated-loading-eye"><path stroke="currentColor" stroke-linecap="round" d="M14.5 11C14.5 9.61929 13.3807 8.5 12 8.5C10.6193 8.5 9.5 9.61929 9.5 11C9.5 12.3807 10.6193 13.5 12 13.5"/></g></svg>'
    },
    45534: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 30 24" width="30" height="24" fill="none"><circle stroke="currentColor" stroke-width="1.15" cx="8.08" cy="14" r="1.73"/><circle stroke="currentColor" stroke-width="1.15" cx="15" cy="14" r="1.73"/><circle stroke="currentColor" stroke-width="1.15" cx="21.92" cy="14" r="1.73"/></svg>'
    },
    87258: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 4" width="16" height="4" fill="none"><circle stroke="currentColor" cx="2" cy="2" r="1.5"/><circle stroke="currentColor" cx="8" cy="2" r="1.5"/><circle stroke="currentColor" cx="14" cy="2" r="1.5"/></svg>'
    },
    36885: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M8.54.84a.8.8 0 0 1 .92 0l7.5 5.25a.8.8 0 0 1 0 1.32l-7.5 5.25a.8.8 0 0 1-.92 0L1.04 7.4a.8.8 0 0 1 0-1.32L8.54.84zM2.9 6.75L9 11.02l6.1-4.27L9 2.48 2.9 6.75z"/><path fill="currentColor" d="M.84 10.8a.8.8 0 0 1 1.12-.2L9 15.51l7.04-4.93a.8.8 0 0 1 .92 1.32l-7.5 5.25a.8.8 0 0 1-.92 0l-7.5-5.25a.8.8 0 0 1-.2-1.12z"/></svg>'
    },
    65300: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M7.23 2.58a.5.5 0 0 1 .54 0l5.5 3.5a.5.5 0 0 1 0 .84l-5.5 3.5a.5.5 0 0 1-.54 0l-5.5-3.5a.5.5 0 0 1 0-.84l5.5-3.5zM2.93 6.5L7.5 9.4l4.57-2.9L7.5 3.6 2.93 6.5z"/><path fill="currentColor" d="M1.58 9.23a.5.5 0 0 1 .69-.15L7.5 12.4l5.23-3.33a.5.5 0 0 1 .54.84l-5.5 3.5a.5.5 0 0 1-.54 0l-5.5-3.5a.5.5 0 0 1-.15-.69z"/></svg>'
    },
    34882: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" width="24" height="22" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M6 6.5A2.5 2.5 0 0 1 8.5 4H10v1H8.5C7.67 5 7 5.67 7 6.5v1.15a3.5 3.5 0 0 1-1.93 3.13l-.45.22.45.22A3.5 3.5 0 0 1 7 14.35v1.15c0 .83.67 1.5 1.5 1.5H10v1H8.5A2.5 2.5 0 0 1 6 15.5v-1.15a2.5 2.5 0 0 0-1.38-2.23l-1.34-.67a.5.5 0 0 1 0-.9l1.34-.67A2.5 2.5 0 0 0 6 7.65V6.5zM15.5 5H14V4h1.5A2.5 2.5 0 0 1 18 6.5v1.15c0 .94.54 1.8 1.38 2.23l1.34.67a.5.5 0 0 1 0 .9l-1.34.67A2.5 2.5 0 0 0 18 14.35v1.15a2.5 2.5 0 0 1-2.5 2.5H14v-1h1.5c.83 0 1.5-.67 1.5-1.5v-1.15a3.5 3.5 0 0 1 1.93-3.13l.45-.22-.45-.22A3.5 3.5 0 0 1 17 7.65V6.5c0-.83-.67-1.5-1.5-1.5z"/></svg>'
    },
    83637: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M8.63 1.08a2.04 2.04 0 0 1-3.26 0c-.51.14-1 .35-1.45.6l.01.2A2.05 2.05 0 0 1 1.7 3.93a6.1 6.1 0 0 0-.6 1.45 2.04 2.04 0 0 1 0 3.26c.13.51.34 1 .6 1.45l.2-.01a2.05 2.05 0 0 1 2.03 2.24c.45.26.94.47 1.45.6a2.04 2.04 0 0 1 3.26 0c.51-.13 1-.34 1.45-.6l-.01-.2a2.05 2.05 0 0 1 2.24-2.03c.26-.45.47-.94.6-1.45a2.04 2.04 0 0 1 0-3.26 6.1 6.1 0 0 0-.6-1.45 2.05 2.05 0 0 1-2.23-2.23 6.1 6.1 0 0 0-1.45-.6zM7.84.42c.17-.24.43-.47.72-.4.84.18 1.62.5 2.32.96.23.15.26.48.22.76a1.03 1.03 0 0 0 1.16 1.16c.28-.04.6-.01.76.22.45.7.78 1.48.97 2.32.06.29-.17.55-.41.72a1.02 1.02 0 0 0 0 1.68c.24.17.47.43.4.72a7.12 7.12 0 0 1-.96 2.32c-.15.23-.48.26-.76.22a1.03 1.03 0 0 0-1.17 1.01l.01.15c.04.28.01.6-.22.76-.7.45-1.48.78-2.32.97-.29.06-.55-.17-.72-.41a1.02 1.02 0 0 0-1.68 0c-.17.24-.43.47-.72.4a7.12 7.12 0 0 1-2.32-.96c-.23-.15-.26-.48-.22-.76v-.15a1.02 1.02 0 0 0-1.16-1c-.28.03-.6 0-.76-.23A7.12 7.12 0 0 1 0 8.56c-.06-.29.17-.55.41-.72a1.02 1.02 0 0 0 0-1.68c-.24-.17-.47-.43-.4-.72.18-.84.5-1.62.96-2.32.15-.23.48-.26.76-.22h.15a1.02 1.02 0 0 0 1-1.16c-.03-.28 0-.6.23-.76C3.82.53 4.6.2 5.44 0c.29-.06.55.17.72.41a1.02 1.02 0 0 0 1.68 0zM9 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm1 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/></svg>'
    },
    72237: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M11.65 12.35l-9-9 .7-.7 9 9-.7.7z"/><path fill="currentColor" d="M2.65 11.65l9-9 .7.7-9 9-.7-.7z"/></svg>'
    },
    71402: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15" fill="none"><path stroke="currentColor" d="M11 2 7.5 5 4 2" class="bracket-up"/><path stroke="currentColor" d="M4 13l3.5-3 3.5 3" class="bracket-down"/></svg>'
    },
    36016: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M7.65 8.35l.7-.7 6.15 6.14 6.15-6.14.7.7-6.14 6.15 6.14 6.15-.7.7-6.15-6.14-6.15 6.14-.7-.7 6.14-6.15-6.14-6.15z"/></svg>'
    },
    20465: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M20.53 3.73 14 9.33 7.47 3.73M7.47 24.27l6.53 -5.60 6.53 5.60"/></svg>'
    },
    48344: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M14 7v12.93l5.18-4.31.64.76-6.32 5.27-6.32-5.27.64-.76L13 19.93V7h1z"/></svg>'
    },
    99539: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M19.32 6H8.68A2.68 2.68 0 0 0 6 8.68V11h1V8.68C7 7.75 7.75 7 8.68 7h10.64c.93 0 1.68.75 1.68 1.68V11h1V8.68C22 7.2 20.8 6 19.32 6zM7 19.32c0 .93.75 1.68 1.68 1.68h10.64c.93 0 1.68-.75 1.68-1.68V17h1v2.32C22 20.8 20.8 22 19.32 22H8.68A2.68 2.68 0 0 1 6 19.32V17h1v2.32z"/></svg>'
    },
    34763: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="m7.47 9.33 6.53 -5.60L20.53 9.33M20.53 18.67l-6.53 5.60L7.47 18.67"/></svg>'
    },
    72899: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M13.5 6.35l6.32 5.27-.64.76L14 8.07V21h-1V8.07l-5.18 4.31-.64-.76 6.32-5.27z"/></svg>'
    },
    70471: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><circle fill="currentColor" cx="15" cy="9" r="1.5"/><circle fill="currentColor" cx="9" cy="9" r="1.5"/><circle fill="currentColor" cx="3" cy="9" r="1.5"/></svg>'
    },
    82847: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><circle fill="currentColor" cx="12.75" cy="7.5" r="1.25"/><circle fill="currentColor" cx="7.5" cy="7.5" r="1.25"/><circle fill="currentColor" cx="2.25" cy="7.5" r="1.25"/></svg>'
    },
    3515: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M11.83 8.88l-.66-.76L8 10.9V3H7v7.9L3.83 8.12l-.66.76 4.33 3.78 4.33-3.78z"/></svg>'
    },
    7859: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M3.5 2.8a.7.7 0 0 0-.7.7V6H1.2V3.5a2.3 2.3 0 0 1 2.3-2.3h11a2.3 2.3 0 0 1 2.3 2.3V6h-1.6V3.5a.7.7 0 0 0-.7-.7h-11z" class="bracket-up"/><path fill="currentColor" d="M3.5 15.2a.7.7 0 0 1-.7-.7V12H1.2v2.5a2.3 2.3 0 0 0 2.3 2.3h11a2.3 2.3 0 0 0 2.3-2.3V12h-1.6v2.5a.7.7 0 0 1-.7.7h-11z" class="bracket-down"/></svg>'
    },
    79526: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15" fill="none"><path fill="currentColor" d="M4.5 12A1.5 1.5 0 0 1 3 10.5V9H2v1.5A2.5 2.5 0 0 0 4.5 13h6a2.5 2.5 0 0 0 2.5-2.5V9h-1v1.5c0 .83-.67 1.5-1.5 1.5h-6z" class="bracket-up"/><path fill="currentColor" d="M4.5 3C3.67 3 3 3.67 3 4.5V6H2V4.5A2.5 2.5 0 0 1 4.5 2h6A2.5 2.5 0 0 1 13 4.5V6h-1V4.5c0-.83-.67-1.5-1.5-1.5h-6z" class="bracket-down"/></svg>'
    },
    42930: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15" fill="none"><path stroke="currentColor" d="m4 5 3.5-3L11 5" class="bracket-up"/><path stroke="currentColor" d="M11 10l-3.5 3L4 10" class="bracket-down"/></svg>'
    },
    81020: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M11.83 6.12l-.66.76L8 4.1V12H7V4.1L3.83 6.88l-.66-.76L7.5 2.34l4.33 3.78z"/></svg>'
    },
    62920: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill="currentColor" d="M2.4 5.46a.8.8 0 0 1 1.14-.05L8 9.42l4.46-4.01a.8.8 0 0 1 1.08 1.18L8 11.58 2.47 6.59a.8.8 0 0 1-.06-1.13z"/></svg>'
    },
    47036: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M3.5 5.58c.24-.28.65-.3.92-.07L7.5 8.14l3.08-2.63a.65.65 0 1 1 .84.98L7.5 9.86 3.58 6.49a.65.65 0 0 1-.07-.91z"/></svg>'
    },
    42205: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 7" width="7" height="7"><path fill="currentColor" d="M3.5 7L7 4H4V0H3V4H0L3.5 7Z"/></svg>'
    },
    50119: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 7" width="9" height="7"><path fill="currentColor" d="M.5 3.5L4 0v3h5v1H4v3z"/></svg>'
    },
    62884: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 7" width="9" height="7"><path fill="currentColor" d="M8.5 3.5L5 0v3H0v1h5v3z"/></svg>'
    },
    50662: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 7" width="7" height="7"><path fill="currentColor" d="M3.5 0L0 3h3v4h1V3h3L3.5 0z"/></svg>'
    },
  },
])
