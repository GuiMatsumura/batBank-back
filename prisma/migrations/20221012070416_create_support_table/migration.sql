-- CreateTable
CREATE TABLE "support" (
    "id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "date" TIMESTAMP(6) NOT NULL,
    "userId" INTEGER NOT NULL,
    "email" BIGINT NOT NULL,

    CONSTRAINT "support_pk" PRIMARY KEY ("id")
);
