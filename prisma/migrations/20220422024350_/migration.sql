/*
  Warnings:

  - You are about to drop the column `useraId` on the `match` table. All the data in the column will be lost.
  - You are about to drop the column `userbId` on the `match` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "match" DROP CONSTRAINT "match_useraId_fkey";

-- DropForeignKey
ALTER TABLE "match" DROP CONSTRAINT "match_userbId_fkey";

-- AlterTable
ALTER TABLE "match" DROP COLUMN "useraId",
DROP COLUMN "userbId",
ADD COLUMN     "idSponsor" INTEGER,
ADD COLUMN     "idUser" INTEGER;

-- AddForeignKey
ALTER TABLE "match" ADD CONSTRAINT "match_userbId_fkey" FOREIGN KEY ("idSponsor") REFERENCES "accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "match" ADD CONSTRAINT "match_useraId_fkey" FOREIGN KEY ("idUser") REFERENCES "accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
