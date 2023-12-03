import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  CreatePost: protectedProcedure
    .input(
      z.object({
        title: z.string().min(10),
        description: z.string().min(20),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const title = input.title;
      const description = input.description;
      const userEmail = ctx.session.user.email;
      if (!userEmail) return console.log("User email is not avaliable");
      console.log(title, description);
      const createPost = await ctx.db.post.create({
        data: {
          question: title,
          description: description,
          votes: 0,
          views: 0,
          answers: 0,
          createdBy: { connect: { email: userEmail } },
        },
      });
    }),
  showQuestions: protectedProcedure.query(async ({ ctx, input }) => {
    const questions = ctx.db.post.findMany({
      include: {
        createdBy: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return questions;
  }),
  getQuestionById: protectedProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      const question = await ctx.db.post.findUnique({
        where: { id: input.id },
        include: {
          createdBy: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      });

      return question;
    }),
});
