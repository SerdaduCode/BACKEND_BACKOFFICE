-- CreateTable
CREATE TABLE "event" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "pic_id" TEXT NOT NULL,
    "desc" VARCHAR(255) NOT NULL,
    "date" DATE NOT NULL,

    CONSTRAINT "event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "event_record" (
    "id" TEXT NOT NULL,
    "member_id" VARCHAR(255) NOT NULL,
    "event_id" TEXT NOT NULL,
    "desc" VARCHAR(255) NOT NULL,
    "date" DATE NOT NULL,

    CONSTRAINT "event_record_pkey" PRIMARY KEY ("id")
);
