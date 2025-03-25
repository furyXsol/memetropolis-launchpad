'use client'
import NewsletterSubscribe from '@/app/_components/newsletter-subscribe'
import NewsletterBox from '@/app/launch-token/_components/newsletter-box'

const Newsletter = () => {
  return (
    <div className="mx-auto flex w-full max-w-[1300px] flex-col gap-6 px-3">
      <div className="flex w-full flex-col gap-3 md:flex-row">
        <NewsletterBox
          borderFlag="top-right"
          bgSrc="/assets/img/home/crypto-news.svg"
          alignFlag="end"
        >
          <p className="text-lg font-semibold text-white md:text-3xl">
            Crypto news (coming soon)
          </p>
        </NewsletterBox>
        <NewsletterBox
          borderFlag="top-left"
          bgSrc="/assets/img/home/crypto-contests.svg"
          alignFlag="end"
        >
          <p className="text-lg font-semibold text-white md:text-3xl">
            Crypto Contests (coming soon)
          </p>
        </NewsletterBox>
      </div>
      <NewsletterSubscribe />
    </div>
  )
}

export default Newsletter
