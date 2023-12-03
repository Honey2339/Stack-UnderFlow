import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { api } from "~/trpc/server";

export const votingRouter = createTRPCRouter({
  increaseVote: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      const post = await ctx.db.post.findUnique({ where: { id: input.id } });
      if (!post) return console.log("Post not found");
      const userEmail = ctx.session.user.email ?? "";
      const voted = await ctx.db.vote.findFirst({
        where: { postId: input.id, userEmail: userEmail },
      });
      if (voted) return console.log("User Has Alread Voted");
      await ctx.db.vote.create({
        data: { postId: input.id, userEmail: userEmail },
      });
      const updatedPost = await ctx.db.post.update({
        where: { id: input.id },
        data: {
          votes: { increment: 1 },
        },
      });
      return updatedPost;
    }),
  decreaseVote: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      const post = await ctx.db.post.findUnique({ where: { id: input.id } });
      if (!post) return console.log("Post not found");
      const userEmail = ctx.session.user.email ?? "";
      const voted = await ctx.db.vote.findFirst({
        where: { postId: input.id, userEmail: userEmail },
      });
      if (voted) return console.log("User Has Alread Voted");
      await ctx.db.vote.create({
        data: { postId: input.id, userEmail: userEmail },
      });
      const updatedPost = await ctx.db.post.update({
        where: { id: input.id },
        data: {
          votes: { decrement: 1 },
        },
      });
      return updatedPost;
    }),
});
