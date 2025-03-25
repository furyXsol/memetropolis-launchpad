type Account = {
  id: string
  address: string
  name: string
  username: string
  image: string
  bio: string
  tier: number
}

type ReplyLike = {
  reply_id: string
  liked: boolean,
  account: Account,
}

export type Reply = {
  id: string
  content: string
  thread_id: string
  created_at: string
  account: Account
  reply_likes: ReplyLike[]
}
