import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const answerRoute = createTRPCRouter({
  createAnswer: protectedProcedure
    .input(z.object({ postId: z.number(), content: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { postId, content } = input;
      const userEmail = ctx.session.user.email ?? "";
      const answer = await ctx.db.answer.create({
        data: {
          content,
          postId,
          authorEmail: userEmail,
        },
      });
      const incrementAnswerCount = await ctx.db.post.update({
        where: { id: postId },
        data: {
          answers: { increment: 1 },
        },
      });
      return answer;
    }),
  getAnswersByPostId: protectedProcedure
    .input(z.object({ postId: z.number() }))
    .query(async ({ ctx, input }) => {
      const answers = await ctx.db.answer.findMany({
        where: { postId: input.postId },
        include: {
          author: true,
        },
      });
      return answers;
    }),
});
