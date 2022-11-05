import { router } from "../trpc";
import shortenerRouter from "./shortener";

export const appRouter = router({
  shortener: shortenerRouter,
});

export type AppRouter = typeof appRouter;
