import { postRouter } from "~/server/api/routers/post";
import { createTRPCRouter } from "~/server/api/trpc";
import { signupRouter } from "./routers/signup";
import { votingRouter } from "./routers/voting";
import { answerRoute } from "./routers/answer";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  signup: signupRouter,
  voting: votingRouter,
  answer: answerRoute,
});

// export type definition of API
export type AppRouter = typeof appRouter;
