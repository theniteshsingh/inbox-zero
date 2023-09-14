import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production", "test"]),
    DATABASE_URL: z.string().url(),
    NEXTAUTH_URL: z.string().min(1),
    NEXTAUTH_SECRET: z.string().min(1),
    GOOGLE_CLIENT_ID: z.string().min(1),
    GOOGLE_CLIENT_SECRET: z.string().min(1),
    OPENAI_API_KEY: z.string().min(1),
    UPSTASH_REDIS_URL: z.string().min(1),
    UPSTASH_REDIS_TOKEN: z.string().min(1),
    GOOGLE_PUBSUB_TOPIC_NAME: z.string().min(1),
    LOG_ZOD_ERRORS: z.coerce.boolean().optional(),
    LEMON_SQUEEZY_API_SECRET: z.string(),
    LEMON_SQUEEZY_SIGNING_SECRET: z.string(),
  },
  client: {
    NEXT_PUBLIC_PRO_PAYMENT_LINK: z.string().min(1),
    NEXT_PUBLIC_ENTERPRISE_PAYMENT_LINK: z.string().min(1),
  },
  // For Next.js >= 13.4.4, you only need to destructure client variables:
  experimental__runtimeEnv: {
    NEXT_PUBLIC_PRO_PAYMENT_LINK: process.env.NEXT_PUBLIC_PRO_PAYMENT_LINK,
    NEXT_PUBLIC_ENTERPRISE_PAYMENT_LINK:
      process.env.NEXT_PUBLIC_ENTERPRISE_PAYMENT_LINK,
  },
});