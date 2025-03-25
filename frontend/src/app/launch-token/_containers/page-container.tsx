'use client'

import CarouselContent from '@/app/launch-token/_components/carousel-content'
import TokenCreationForm from '@/app/launch-token/_components/token-creation-form'
import { Skin } from '@/app/launch-token/_components/skin'
import Image from 'next/image'

const LaunchTokenPageContainer = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  }

  return (
    <main className="relative flex h-screen w-full flex-col items-center justify-start overflow-x-hidden pt-24 md:pt-48">
      <Image
        width={439}
        height={494}
        alt="BG Gradient"
        src="/assets/img/home/spotlights/bg-gradient-effect-tr.svg"
        className="absolute right-0 top-1/2 h-[494px] w-[439px]"
      />
      <Image
        width={439}
        height={494}
        alt="BG Gradient 2"
        src="/assets/img/home/spotlights/bg-gradient-effect-bl.svg"
        className="absolute left-0 top-0 h-[494px] w-[439px] translate-y-1/2"
      />
      <section className="mx-auto my-8 flex w-full max-w-[1300px] flex-col items-center gap-12 px-3">
        <TokenCreationForm />
      </section>
      <section className="hidden md:block">
        <CarouselContent />
      </section>

      {/* <section className="relative hidden w-full">
        <Skin />
      </section> */}
    </main>
  )
}

export default LaunchTokenPageContainer
