import { JsonValue } from '@prisma/client/runtime/library';

export type AccountDto = {
  id: string;
  address: string;
  name: string;
  username: string;
  image: string;
  bio: string;
  tier: number;
  socials?: JsonValue;
};
