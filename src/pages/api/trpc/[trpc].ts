// src/pages/api/trpc/[trpc].ts
import { createNextApiHandler } from "@trpc/server/adapters/next";
import { appRouter } from "~/server/trpc/routers/_app";
import { createContext } from "~/server/trpc/context";

export default createNextApiHandler({
  router: appRouter,
  createContext,
  onError:
    process.env.NODE_ENV === "development"
      ? ({ path, error }) => {
          console.error(`❌ tRPC failed on ${path}: ${error}`);
        }
      : ({ error }) => {
          if (error.code === "INTERNAL_SERVER_ERROR") {
            console.error("Something went wrong", error);
          }
        },
});
