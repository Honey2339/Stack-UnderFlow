import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const signupRouter = createTRPCRouter({
  signup: publicProcedure
    .input(
      z.object({
        username: z.string(),
        email: z.string().includes("@"),
        password: z.string().min(10),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { username, email, password } = input;

      try {
        const existingUser = await ctx.db.user.findFirst({
          where: { username },
        });
        if (existingUser) {
          return { success: false, error: "User Already Exist" };
        }
        const newUser = await ctx.db.user.create({
          data: {
            name: username,
            username,
            password,
            email,
          },
        });
        return {
          success: true,
          user: {
            id: newUser.id,
            username: newUser.username,
            email: newUser.email,
          },
        };
      } catch (err) {
        console.log(err);
      }
    }),
});
