import { UseMutationResult } from "@tanstack/react-query";
import { NewsLetterSchema } from "@/core/schemas/news-letter-schema";

export type Social = {
  facebook?: string;
  x?: string;
  linkedin?: string;
}

export type Account = {
  address: string;
  name: string;
  username: string;
  image: string;
  bio: string;
  socials: Social;
  tier: number;
}

export namespace UseNewsLetter {
  export type Params = {
    data: NewsLetterSchema
  }
  export type ReturnType = UseMutationResult<
    {
      success: boolean
      message: string
    },
    Error,
    Params
  >
  export type FunctionType = () => ReturnType
}
