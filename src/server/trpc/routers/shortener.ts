import { z } from "zod";
import { customAlphabet } from "nanoid/async";
import { publicProcedure, router } from "../trpc";
import { alphabetStr } from "../../../utils/constants";

const shortenerRouter = router({
  getAllLinks: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.link.findMany();
  }),
  createSlugLink: publicProcedure
    .input(
      z.object({
        url: z
          .string()
          .min(1, { message: "URL is required." })
          .url({ message: "URL is invalid" }),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const nanoidSlug = await customAlphabet(alphabetStr, 8)();
      const link = await ctx.prisma.link.create({
        data: {
          url: input.url,
          slug: nanoidSlug as unknown as string,
        },
      });

      return { slug: link.slug };
    }),
});

export default shortenerRouter;
