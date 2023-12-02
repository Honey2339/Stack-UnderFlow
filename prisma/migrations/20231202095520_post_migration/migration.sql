/*
  Warnings:

  - You are about to drop the column `name` on the `Post` table. All the data in the column will be lost.
  - Added the required column `question` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Post_name_idx";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "name",
ADD COLUMN     "answers" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "question" TEXT NOT NULL,
ADD COLUMN     "views" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "votes" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE INDEX "Post_question_idx" ON "Post"("question");
