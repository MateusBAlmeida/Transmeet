-- AlterTable
CREATE SEQUENCE "accounts_id_seq";
ALTER TABLE "accounts" ALTER COLUMN "id" SET DEFAULT nextval('accounts_id_seq');
ALTER SEQUENCE "accounts_id_seq" OWNED BY "accounts"."id";

-- AlterTable
CREATE SEQUENCE "match_id_seq";
ALTER TABLE "match" ALTER COLUMN "id" SET DEFAULT nextval('match_id_seq');
ALTER SEQUENCE "match_id_seq" OWNED BY "match"."id";
