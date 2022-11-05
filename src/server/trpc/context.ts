/* eslint-disable @typescript-eslint/no-unused-vars */
import type { inferAsyncReturnType } from "@trpc/server";
import type { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { prisma } from "~/utils/prisma-client";

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */

export async function createContext(opts: CreateNextContextOptions) {
  // for API-response caching see https://trpc.io/docs/caching

  return {
    prisma,
  };
}

/* Export Types */
export type Context = inferAsyncReturnType<typeof createContext>;
