/*
  Warnings:

  - You are about to drop the column `nombre_agencia_directa` on the `Tour` table. All the data in the column will be lost.
  - Added the required column `estado_pago_Id` to the `Pago_cliente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pago_cliente" ADD COLUMN     "estado_pago_Id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Tour" DROP COLUMN "nombre_agencia_directa",
ALTER COLUMN "nota" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Pago_cliente" ADD CONSTRAINT "Pago_cliente_estado_pago_Id_fkey" FOREIGN KEY ("estado_pago_Id") REFERENCES "Estado_pago"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
