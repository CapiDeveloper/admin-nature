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
CREATE TABLE "metodo_pago" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "porcentaje" INTEGER NOT NULL,

    CONSTRAINT "metodo_pago_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "agencia" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "porcentaje" INTEGER NOT NULL,

    CONSTRAINT "agencia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "estado_pago" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "estado_pago_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tour" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "nombre_pasajero" TEXT NOT NULL,
    "nombre_agencia_directa" TEXT,
    "inicio" TIMESTAMP(3) NOT NULL,
    "finaliza" TIMESTAMP(3) NOT NULL,
    "num_pax" INTEGER NOT NULL,
    "valor_proforma" DECIMAL(65,30) NOT NULL,
    "numero_proforma" INTEGER NOT NULL,
    "nota" TEXT NOT NULL,
    "actualizado" TIMESTAMP(3) NOT NULL,
    "valor_cobrado" DECIMAL(65,30) NOT NULL,
    "nombre_agencia" TEXT NOT NULL,
    "user" TEXT NOT NULL,

    CONSTRAINT "Tour_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "proveedor" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "pago" DECIMAL(65,30) NOT NULL,
    "tour" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "proveedor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pago_cliente" (
    "id" TEXT NOT NULL,
    "tour" TEXT NOT NULL,
    "user" TEXT NOT NULL,
    "metodo_pago" TEXT NOT NULL,
    "cantidad" DECIMAL(65,30) NOT NULL,
    "registro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizar" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pago_cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gasto" (
    "id" TEXT NOT NULL,
    "tour" TEXT NOT NULL,
    "user" TEXT NOT NULL,
    "cantidad" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "gasto_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
