-- CreateTable
CREATE TABLE "Comision" (
    "id" TEXT NOT NULL,
    "cantidad" DECIMAL(65,30) NOT NULL,
    "mes" TEXT NOT NULL,
    "programaId" TEXT NOT NULL,
    "tourId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Comision_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Comision" ADD CONSTRAINT "Comision_programaId_fkey" FOREIGN KEY ("programaId") REFERENCES "Programa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comision" ADD CONSTRAINT "Comision_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comision" ADD CONSTRAINT "Comision_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
