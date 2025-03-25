import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { getAccountRecentTokens } from '@/core/services/_api/use-account'
import { Button } from '@/components/ui/button'
import CustomizedImage from '@/components/customized-image'
import Image from 'next/image'
import {
  CommunityIcon,
  TokenLibraryIcon,
  RewardsBadgesIcon,
  FollowedTradersIcon,
  RecentTokensIcon,
} from '@/components/profile-icons'

const RecentTokensContent = ({ address }: { address: string }) => {
  const router = useRouter()
  const { data: tokens, isLoading } = useQuery(getAccountRecentTokens(address))

  if (isLoading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-[#FFFAFF]"></div>
      </div>
    )
  }

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-left text-sm font-normal text-[#999999]">
            <th className="whitespace-nowrap p-2">Name</th>
            <th className="whitespace-nowrap p-2">PnL</th>
            <th className="whitespace-nowrap p-2">Marketcap</th>
            <th className="whitespace-nowrap p-2">Volume Total</th>
            <th className="whitespace-nowrap p-2">Volume average Per Trade</th>
            <th className="whitespace-nowrap p-2">---</th>
            <th className="whitespace-nowrap p-2">---</th>
          </tr>
        </thead>
        <tbody>
          {tokens?.map((token, index) => (
            <tr
              key={index}
              className="text-[#FFFAFF] hover:cursor-pointer"
              onClick={() =>
                router.push(
                  `/token/${token.address}?chain=${token.chain_id}&symbol=${token.symbol}`,
                )
              }
            >
              <td className="flex items-center gap-2 py-3">
                <CustomizedImage
                  image={token.image}
                  fallbackImage="/assets/img/profile/details/token_ponke.svg"
                  className="size-[16px] rounded"
                />
                {token.name}
              </td>
              <td className="text-[#00FFA3]">0</td>
              <td>${token.marketCap}</td>
              <td>${token.volumeTotal}</td>
              <td>${token.volumeAveragePerTrade}</td>
              <td>--</td>
              <td>--</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const RecentTokensEmptyContent = () => {
  return (
    <div className="flex flex-col items-center gap-4 py-10">
      <Image
        src="/assets/img/profile/details/content_recent_tokens.svg"
        width={73}
        height={73}
        alt="Recent tokens icon"
      />
      <p className="text-base font-semibold md:text-2xl">No recent tokens</p>
      <p className="text-[#928E96]">Invest in a memecoin to view it here.</p>
      <Button
        borderColor="border-accent"
        className={
          'group relative h-[60px] w-[200px] overflow-hidden rounded-none border border-accent bg-accent md:w-[380px]'
        }
      >
        <span className="relative z-10 font-medium text-[#110A1A]">
          Find a community
        </span>
      </Button>
    </div>
  )
}

const CommunityContent = () => {
  return <></>
}

const CommunityEmptyContent = () => {
  return (
    <div className="flex flex-col items-center gap-4 py-10">
      <Image
        src="/assets/img/profile/details/content_community.svg"
        width={73}
        height={73}
        alt="Community icon"
      />
      <p className="text-base font-semibold md:text-2xl">No communities</p>
      <p className="text-[#928E96]">You have not joined any community yet.</p>
      <Button
        borderColor="border-accent"
        className={
          'group relative h-[60px] w-[200px] overflow-hidden rounded-none border border-accent bg-accent md:w-[380px]'
        }
      >
        <span className="relative z-10 font-medium text-[#110A1A]">
          Find a community
        </span>
      </Button>
    </div>
  )
}

const TokenLibraryContent = () => {
  return <></>
}

const TokenLibraryEmptyContent = () => {
  return (
    <div className="flex flex-col items-center gap-4 py-10">
      <Image
        src="/assets/img/profile/details/content_token_library.svg"
        width={73}
        height={73}
        alt="Token library icon"
      />
      <p className="text-base font-semibold md:text-2xl">
        Token library is empty
      </p>
      <p className="text-[#928E96]">
        You have no tokens in your token library.
      </p>
      <Button
        borderColor="border-accent"
        className={
          'group relative h-[60px] w-[200px] overflow-hidden rounded-none border border-accent bg-accent md:w-[380px]'
        }
      >
        <span className="relative z-10 font-medium text-[#110A1A]">
          Get started
        </span>
      </Button>
    </div>
  )
}

const RewardsBadgesContent = () => {
  return <></>
}

const RewardsBadgesEmptyContent = () => {
  return (
    <div className="flex flex-col items-center gap-4 py-10">
      <Image
        src="/assets/img/profile/details/content_rewards_badges.svg"
        width={73}
        height={73}
        alt="Rewards and badges icon"
      />
      <p className="text-base font-semibold md:text-2xl">No rewards & badges</p>
      <p className="text-center text-[#928E96]">
        Start trading to earn rewards, badges and more.
      </p>
      <Button
        borderColor="border-accent"
        className={
          'group relative h-[60px] w-[200px] overflow-hidden rounded-none border border-accent bg-accent md:w-[380px]'
        }
      >
        <span className="relative z-10 font-medium text-[#110A1A]">
          Get started
        </span>
      </Button>
    </div>
  )
}

const FollowedTradersContent = () => {
  return <></>
}

const FollowedTradersEmptyContent = () => {
  return (
    <div className="flex flex-col items-center gap-4 py-10">
      <Image
        src="/assets/img/profile/details/content_followed_traders.svg"
        width={73}
        height={73}
        alt="Followed traders icon"
      />
      <p className="text-base font-semibold md:text-2xl">No followed traders</p>
      <p className="text-center text-[#928E96]">
        Follow popular traders and learn from insights.
      </p>
      <Button
        borderColor="border-accent"
        className={
          'group relative h-[60px] w-[200px] overflow-hidden rounded-none border border-accent bg-accent md:w-[380px]'
        }
      >
        <span className="relative z-10 font-medium text-[#110A1A]">
          Start adding
        </span>
      </Button>
    </div>
  )
}

type TabId =
  | 'recent_tokens'
  | 'community'
  | 'token_library'
  | 'rewards_badges'
  | 'followed_traders'

interface TabContent {
  Content: React.FC<any>
  EmptyContent: React.FC
  icon: string
  title: string
}

const tabContents: Record<TabId, TabContent> = {
  recent_tokens: {
    Content: (props) => RecentTokensContent(props),
    EmptyContent: RecentTokensEmptyContent,
    icon: '/assets/img/profile/details/icon_recent_tokens',
    title: 'Recent tokens',
  },
  community: {
    Content: CommunityContent,
    EmptyContent: CommunityEmptyContent,
    icon: '/assets/img/profile/details/icon_community',
    title: 'Community',
  },
  token_library: {
    Content: TokenLibraryContent,
    EmptyContent: TokenLibraryEmptyContent,
    icon: '/assets/img/profile/details/icon_token_library',
    title: 'Token library',
  },
  rewards_badges: {
    Content: RewardsBadgesContent,
    EmptyContent: RewardsBadgesEmptyContent,
    icon: '/assets/img/profile/details/icon_rewards_badges',
    title: 'Rewards & Badges',
  },
  followed_traders: {
    Content: FollowedTradersContent,
    EmptyContent: FollowedTradersEmptyContent,
    icon: '/assets/img/profile/details/icon_followed_traders',
    title: 'Followed traders',
  },
}

interface TabButtonProps {
  id: TabId
  selectedTab: TabId | undefined
  onClick: (id: TabId) => void
  title: string
  icon: string
}

const TabButton: React.FC<TabButtonProps> = ({
  id,
  selectedTab,
  onClick,
  title,
  icon,
}) => {
  // Render the appropriate icon based on the tab id
  const renderIcon = () => {
    const isSelected = selectedTab === id

    switch (id) {
      case 'community':
        return <CommunityIcon selected={isSelected} />
      case 'token_library':
        return <TokenLibraryIcon selected={isSelected} />
      case 'rewards_badges':
        return <RewardsBadgesIcon selected={isSelected} />
      case 'followed_traders':
        return <FollowedTradersIcon selected={isSelected} />
      case 'recent_tokens':
      default:
        return <RecentTokensIcon selected={isSelected} />
    }
  }

  return (
    <h2
      className={`flex min-w-[180px] cursor-pointer gap-2 whitespace-nowrap px-0 py-2 font-medium md:px-6 ${
        selectedTab === id
          ? "border-b-2 border-accent bg-[url('/assets/img/profile/details/tab-selected-background.png')] bg-cover text-accent"
          : 'text-white'
      }`}
      onClick={() => onClick(id)}
    >
      {renderIcon()}
      {title}
    </h2>
  )
}

const ProfileDetails = ({
  address,
  isConnectedWallet,
}: {
  address: string
  isConnectedWallet: boolean
}) => {
  const [selectedTab, setSelectedTab] = useState<TabId>('recent_tokens')

  const { Content: TabContent, EmptyContent: TabEmptyContent } =
    tabContents[selectedTab]

  return (
    <div className="w-full">
      {/* Desktop tabs */}
      <div className="hidden flex-col md:flex md:flex-row">
        {(Object.entries(tabContents) as [TabId, TabContent][]).map(
          ([id, { title, icon }]) => (
            <TabButton
              key={id}
              id={id}
              selectedTab={selectedTab}
              onClick={setSelectedTab}
              title={title}
              icon={icon}
            />
          ),
        )}
      </div>

      {/* Desktop content */}
      <div className="hidden w-full border border-accent bg-primary px-4 py-2 text-white md:block md:px-8 md:py-4 2xl:px-16 2xl:py-8">
        {selectedTab === 'recent_tokens' ? (
          <TabContent address={address} />
        ) : (
          <TabEmptyContent />
        )}
      </div>

      {/* Mobile layout - tabs and content in sequence */}
      <div className="flex flex-col gap-10 md:hidden">
        {(Object.entries(tabContents) as [TabId, TabContent][]).map(
          ([id, { title, icon, Content, EmptyContent }]) => (
            <div key={id}>
              <TabButton
                id={id}
                selectedTab={undefined} // Each tab appears selected in its own section
                onClick={() => {}} // No click handler needed for mobile
                title={title}
                icon={icon}
              />
              <div className="mt-4 w-full bg-primary px-4 py-2 text-white">
                {id === 'recent_tokens' ? <Content /> : <EmptyContent />}
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  )
}

export default ProfileDetails
