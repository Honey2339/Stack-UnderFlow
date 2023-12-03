/*
  Warnings:

  - You are about to drop the column `userEmail` on the `Vote` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[postId,userId]` on the table `Vote` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Vote` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Vote" DROP CONSTRAINT "Vote_userEmail_fkey";

-- DropIndex
DROP INDEX "Vote_postId_userEmail_key";

-- AlterTable
ALTER TABLE "Vote" DROP COLUMN "userEmail",
ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Vote_postId_userId_key" ON "Vote"("postId", "userId");

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
