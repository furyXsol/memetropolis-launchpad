import PageTop from '@/app/launch-token/_components/page-top'
import TopProjects from '@/app/_containers/top-projects'
import TradingChat from '@/app/_containers/trading-chat'
import Spotlights from '@/app/_containers/spotlights'
import TopTraders from '@/app/_containers/top-traders'
import { Charts } from './chart'
import Newsletter from './newsletter'

const HomePageContainer = () => {
  return (
    <main className="flex h-full w-full flex-col items-center justify-between gap-24 pb-10 pt-16 md:pb-28 md:pt-28 2xl:pt-40">
      <PageTop />
      <TopProjects />
      <Charts />
      <TradingChat />
      <TopTraders />
      <Spotlights />
      <Newsletter />
    </main>
  )
}

export default HomePageContainer
