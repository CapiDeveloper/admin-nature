-- CreateTable
CREATE TABLE "CategoriaTour" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "CategoriaTour_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoriaHotel" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "CategoriaHotel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Metodo_pago" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "porcentaje" INTEGER NOT NULL,

    CONSTRAINT "Metodo_pago_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Estado_pago" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "Estado_pago_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Agencia" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "porcentaje" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Agencia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Programa" (
    "id" TEXT NOT NULL,
    "nombre" TEXT,
    "codigo" TEXT,
    "nota" TEXT,
    "categoriaTourId" TEXT NOT NULL,

    CONSTRAINT "Programa_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "Tour" (
    "id" TEXT NOT NULL,
    "nombre_pasajero" TEXT NOT NULL,
    "inicio" TIMESTAMP(3),
    "finaliza" TIMESTAMP(3),
    "num_pax" INTEGER NOT NULL,
    "valor_proforma" DECIMAL(65,30) NOT NULL,
    "numero_proforma" INTEGER NOT NULL,
    "nota" TEXT,
    "actualizado" TIMESTAMP(3) NOT NULL,
    "valor_cobrado" DECIMAL(65,30),
    "programaId" TEXT NOT NULL,
    "categoriaTourId" TEXT NOT NULL,
    "categoriaHotelId" TEXT NOT NULL,
    "agenciaId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Tour_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Proveedor" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "pago" DECIMAL(65,30) NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "tourId" TEXT NOT NULL,
    "estado_pago_Id" TEXT NOT NULL,

    CONSTRAINT "Proveedor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "rol" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pago_cliente" (
    "id" TEXT NOT NULL,
    "cantidad" DECIMAL(65,30) NOT NULL,
    "registro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizar" TIMESTAMP(3) NOT NULL,
    "tourId" TEXT NOT NULL,
    "estado_pago_Id" TEXT NOT NULL,
    "metodo_pago_Id" TEXT NOT NULL,

    CONSTRAINT "Pago_cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gasto" (
    "id" TEXT NOT NULL,
    "tourId" TEXT NOT NULL,
    "cantidad" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Gasto_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Programa" ADD CONSTRAINT "Programa_categoriaTourId_fkey" FOREIGN KEY ("categoriaTourId") REFERENCES "CategoriaTour"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comision" ADD CONSTRAINT "Comision_programaId_fkey" FOREIGN KEY ("programaId") REFERENCES "Programa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comision" ADD CONSTRAINT "Comision_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comision" ADD CONSTRAINT "Comision_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tour" ADD CONSTRAINT "Tour_programaId_fkey" FOREIGN KEY ("programaId") REFERENCES "Programa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tour" ADD CONSTRAINT "Tour_categoriaTourId_fkey" FOREIGN KEY ("categoriaTourId") REFERENCES "CategoriaTour"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tour" ADD CONSTRAINT "Tour_categoriaHotelId_fkey" FOREIGN KEY ("categoriaHotelId") REFERENCES "CategoriaHotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tour" ADD CONSTRAINT "Tour_agenciaId_fkey" FOREIGN KEY ("agenciaId") REFERENCES "Agencia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tour" ADD CONSTRAINT "Tour_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proveedor" ADD CONSTRAINT "Proveedor_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proveedor" ADD CONSTRAINT "Proveedor_estado_pago_Id_fkey" FOREIGN KEY ("estado_pago_Id") REFERENCES "Estado_pago"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pago_cliente" ADD CONSTRAINT "Pago_cliente_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pago_cliente" ADD CONSTRAINT "Pago_cliente_estado_pago_Id_fkey" FOREIGN KEY ("estado_pago_Id") REFERENCES "Estado_pago"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pago_cliente" ADD CONSTRAINT "Pago_cliente_metodo_pago_Id_fkey" FOREIGN KEY ("metodo_pago_Id") REFERENCES "Metodo_pago"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gasto" ADD CONSTRAINT "Gasto_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
