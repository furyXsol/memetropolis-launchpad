'use client'

import { useQueries } from '@tanstack/react-query'
import ProjectCard from '@/app/_components/project-card'
import { getTokenListByCategory } from '@/core/services/_api/use-token'
import { Token } from '@/core/types/token'
import Image from 'next/image'
import { Skeleton } from '@/components/ui/skeleton'

const CATEGORIES = [
  {
    name: 'Hot',
    value: 'hot',
    color: '#D16235',
    icon: '/assets/img/home/spotlights/spotlights-hot.svg',
    hoverBgGradient: '/assets/img/home/projects/hover-hot.png',
  },
  {
    name: 'New',
    value: 'new',
    color: '#00C2FF',
    icon: '/assets/img/home/spotlights/spotlights-new.svg',
    hoverBgGradient: '/assets/img/home/projects/hover-new.png',
  },
  {
    name: 'Top mcap',
    value: 'top',
    color: '#77FB77',
    icon: '/assets/img/home/spotlights/spotlights-top-mcap.svg',
    hoverBgGradient: '/assets/img/home/projects/hover-top.png',
  },
]

const Spotlights = () => {
  const tokenQueries = useQueries({
    queries: CATEGORIES.map((category) => ({
      ...getTokenListByCategory(category.value),
      queryKey: ['tokens', category.value],
    })),
  })

  const isLoading = tokenQueries.some((query) => query.isLoading)
  const tokensByCategory = tokenQueries.reduce(
    (acc, query, index) => {
      acc[CATEGORIES[index].value] = query.data || []
      return acc
    },
    {} as Record<string, Token[]>,
  )

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-16 overflow-hidden px-3">
      <h1 className="relative text-center font-hanson text-3xl font-bold uppercase text-[#FFFAFF] md:text-6xl">
        Spotlights
        <Image
          src="/assets/img/home/spotlights/title-ribbon.svg"
          alt="Title Ribbon"
          width={90}
          height={90}
          className="absolute left-[-60px] top-[-50px] hidden md:block"
        />
      </h1>

      <div className="flex flex-col gap-8">
        {CATEGORIES.map((category) => (
          <CategorySection
            key={category.value}
            category={category}
            tokens={tokensByCategory[category.value] || []}
            isLoading={isLoading}
          />
        ))}
      </div>
    </div>
  )
}

type CategorySectionProps = {
  category: {
    name: string
    value: string
    color: string
    icon: string
    hoverBgGradient: string
  }
  tokens: Token[]
  isLoading: boolean
}

const CategorySection = ({
  category,
  tokens,
  isLoading,
}: CategorySectionProps) => {
  return (
    <div>
      <p
        className="mb-2 flex items-center gap-2 font-semibold"
        style={{ color: category.color }}
      >
        <Image
          src={category.icon}
          alt={`${category.name} icon`}
          width={24}
          height={24}
        />
        <span>{category.name}</span>
      </p>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {isLoading
          ? [...Array(3)].map((_, index) => (
              <div
                key={index}
                className="relative min-w-[320px] rounded-md bg-[url('/assets/img/home/spotlights/spotlights-background.svg')] bg-cover bg-center bg-no-repeat p-4 pl-8"
              >
                <Skeleton className="absolute right-[10px] top-[-10px] h-7 w-7" />
                <div className="flex items-center gap-2">
                  <Skeleton className="h-14 w-14 rounded-full" />
                  <div className="flex flex-col gap-[6px]">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-5 w-32" />
                    <Skeleton className="h-4 w-48" />
                  </div>
                </div>
                <hr className="my-[10px] border-[#FFFFFF33]" />
                <div className="flex items-center justify-between">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-5 w-36" />
                </div>
              </div>
            ))
          : tokens.map((token) => (
              <ProjectCard
                key={token.address}
                hoverUrl={category.hoverBgGradient}
                token={token}
              />
            ))}
      </div>
    </div>
  )
}

export default Spotlights
