import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNewsletter } from '@/core/services/_api/use-newsletter'
import {
  NewsLetterSchema,
  newsLetterSchema,
} from '@/core/schemas/news-letter-schema'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import NewsletterBox from '@/app/launch-token/_components/newsletter-box'
import ButtonSendEmail from '@/app/_components/button-send-email'
import Image from 'next/image'

const NewsletterSubscribe = () => {
  const form = useForm<NewsLetterSchema>({
    resolver: zodResolver(newsLetterSchema),
    defaultValues: {
      email: '',
    },
  })

  const { mutate, isPending } = useNewsletter()

  const onSubmit = (data: NewsLetterSchema) => {
    mutate(
      { data },
      {
        onSuccess: () => {
          toast.success('Thanks for subscribing to our newsletter!')
          form.reset()
        },
        onError: (e: any) => {
          toast.error(e.shortMessage)
        },
      },
    )
  }

  return (
    <NewsletterBox bgSrc="/assets/img/home/projects/portal_bg.png">
      <p className="relative z-[1] text-center font-hanson text-xl font-bold uppercase text-white md:text-4xl">
        Sign up for the
        <br />
        crypto newsletter
      </p>
      <p className="text-center text-xs md:text-base">
        Get updates for news, coins, contests, pre-access and much more.
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="relative h-12 w-full max-w-[470px]"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    className="h-12 w-full rounded-lg border border-violet-100 bg-transparent px-6 py-3 text-xs text-white md:text-base"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <button type="submit" disabled={isPending}>
            <ButtonSendEmail />
          </button>
        </form>
      </Form>
    </NewsletterBox>
  )
}

export default NewsletterSubscribe
