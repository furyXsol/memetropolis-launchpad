'use client'

import React from 'react'
import dynamic from 'next/dynamic'

const AdvancedRealTimeChartNoSSR = dynamic(
  () =>
    import('react-ts-tradingview-widgets').then((w) => w.AdvancedRealTimeChart),
  {
    ssr: false,
  },
)

function Chart() {
  return <AdvancedRealTimeChartNoSSR theme="dark" width="auto" height={389} />
}

export default Chart
