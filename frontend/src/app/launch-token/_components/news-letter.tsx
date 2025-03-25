"use client";

import Link from "next/link";
import NewsletterBox from "@/app/launch-token/_components/newsletter-box";
import { Button } from "@/components/ui/button";
import NewsletterSubscribe from "@/app/_components/newsletter-subscribe";

export const Newsletter = () => {
  return (
    <>
      <div className="flex w-full flex-col gap-3 md:flex-row">
        <NewsletterBox
          borderFlag="top-right"
          bgSrc="/assets/img/home/crypto-news.svg"
          alignFlag="end"
        >
          <p className="text-lg font-semibold text-white md:text-3xl">
            Need Bots?
          </p>
          {/*<Button
            borderColor="border-accent"
            className={
              'group relative h-[40px] w-[150px] overflow-hidden rounded-none border border-accent bg-accent font-medium text-[#110A1A] md:w-[240px]'
            }
          >
            <span className="relative z-10">Access Bot</span>
          </Button>*/}
        </NewsletterBox>
        <NewsletterBox
          borderFlag="top-left"
          bgSrc="/assets/img/home/crypto-contests.svg"
          alignFlag="end"
        >
          <p className="text-lg font-semibold text-white md:text-3xl">
            Set MEMETROPOLIS directly on Telegram
          </p>
          <Link href="https://t.me/+ZV5V4M3yFsI3NjBh" target="_blank">
            <Button
              borderColor="border-accent"
              className={
                'group relative h-[40px] w-[150px] overflow-hidden rounded-none border border-accent bg-accent font-medium text-[#110A1A] md:w-[240px]'
              }
            >
              <span className="relative z-10">Telegram</span>
            </Button>
          </Link>
        </NewsletterBox>
      </div>
      <NewsletterSubscribe />
    </>
  )
}