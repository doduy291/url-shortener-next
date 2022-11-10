import { initTRPC } from "@trpc/server";
import { Context } from "./context";
import superjson from "superjson";
import { isJSON } from "~/utils/helpers";

const t = initTRPC.context<Context>().create({
  /**
   * @see https://trpc.io/docs/v10/data-transformers
   */
  transformer: superjson,

  /**
   * @see https://trpc.io/docs/v10/error-formatting
   */
  errorFormatter({ shape }) {
    return {
      ...shape,
      // Filter error message for string and JSON string
      message: isJSON(shape.message)
        ? JSON.parse(shape.message)
        : shape.message,
    };
  },
});

/**
 * Create a router
 * @see https://trpc.io/docs/v10/router
 */
export const router = t.router;

/**
 * Create an unprotected procedure
 * @see https://trpc.io/docs/v10/procedures
 **/
export const publicProcedure = t.procedure;
