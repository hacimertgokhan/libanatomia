-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "permission" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "community" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "university" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Communities" (
    "id" SERIAL NOT NULL,
    "owner" TEXT NOT NULL,
    "member_size" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "community" TEXT NOT NULL,

    CONSTRAINT "Communities_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Users_fullname_key" ON "Users"("fullname");

-- CreateIndex
CREATE UNIQUE INDEX "Communities_community_key" ON "Communities"("community");
