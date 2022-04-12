-- CreateTable
CREATE TABLE "accounts" (
    "id" INTEGER NOT NULL,
    "name" VARCHAR,
    "email" VARCHAR,
    "password" VARCHAR,
    "regNumber" VARCHAR,
    "telephone" VARCHAR,
    "site" VARCHAR,
    "birthDate" VARCHAR,
    "gender" VARCHAR,
    "address" VARCHAR,
    "city" VARCHAR,
    "description" VARCHAR,
    "typeId" INTEGER,
    "stateId" INTEGER,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "match" (
    "id" INTEGER NOT NULL,
    "useraId" INTEGER,
    "userbId" INTEGER,
    "accept" BOOLEAN,

    CONSTRAINT "match_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "states" (
    "id" INTEGER NOT NULL,
    "name" VARCHAR,

    CONSTRAINT "states_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "types" (
    "id" INTEGER NOT NULL,
    "name" VARCHAR,

    CONSTRAINT "types_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "accounts_email_key" ON "accounts"("email");

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "states"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "match" ADD CONSTRAINT "match_useraId_fkey" FOREIGN KEY ("useraId") REFERENCES "accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "match" ADD CONSTRAINT "match_userbId_fkey" FOREIGN KEY ("userbId") REFERENCES "accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
