import { create } from 'zustand'

export const useUIStore = create((set) => ({
    user: {},
    idTour: "",
    idProveedor: "",
    idPago: "",
    isOpenModalProveedor: false,
    isOpenModalEditarProveedor: false,
    isOpenModalCliente: false,
    isOpenModalEditarCliente: false,
    pagoClientesTour: [],
    proveedorestour: [],
    historialTours:[],
    
    setHistorialTours: (tour) => set({ historialTours: tour }),
    deleteHistorialTour: (id) =>
        set((state) => ({
            historialTours: state.historialTours.filter((tour) => tour.id !== id),
        })),

    addUser: (sesionUser) => set({ user: sesionUser }),
    addIdProveedor: (proveedorEditar) => set({ idProveedor: proveedorEditar }),
    addIdPago: (clienteEditar) => set({ idPago: clienteEditar }),

    addIdTour: (tourEditar) => set({ idTour: tourEditar }),

    addUser: (sesionUser) => set(state => ({ ...state, user: sesionUser })),

    openModalProveedor: () => set({ isOpenModalProveedor: true }),
    closeModalProveedor: () => set({ isOpenModalProveedor: false }),

    openModalEditarProveedor: () => set({ isOpenModalEditarProveedor: true }),
    closeModalEditarProveedor: () => set({ isOpenModalEditarProveedor: false }),

    openModalEditarCliente: () => set({ isOpenModalEditarCliente: true }),
    closeModalEditarCliente: () => set({ isOpenModalEditarCliente: false }),

    openModalCliente: () => set({ isOpenModalCliente: true }),
    closeModalCliente: () => set({ isOpenModalCliente: false }),

    // CRUD PAGO CLIENTES
    getPagoClientes: (getCliente) => set({ pagoClientesTour: getCliente }),
    updatePagoCliente: (PagoActualizado) =>
        set((state) => ({
            pagoClientesTour: state.pagoClientesTour.map((cliente) => {
                if (cliente.id !== PagoActualizado?.id) {
                    return PagoActualizado;
                }
                return cliente;
            }),
        })),
    deletePagoCliente: (id) =>
        set((state) => ({
            pagoClientesTour: state.pagoClientesTour.filter((pagoCliente) => pagoCliente.id !== id),
        })),
    addPagoCliente: (pagoCliente) =>
        set((state) => ({
            pagoClientesTour: [
                ...state.pagoClientesTour,
                pagoCliente,
            ],
        })),

    // CRUD PROVEEDORES
    getProveedores: (getProvedor) => set({ proveedorestour: getProvedor }),
    updateProveedores: (proveedorActualizado) =>
        set((state) => ({
            proveedorestour: state.proveedorestour.map((proveedor) => {
                if (proveedor.id !== proveedorActualizado?.id) {
                    return proveedorActualizado;
                }
                return proveedor;
            }),
        })),
    deleteProveedores: (id) =>
        set((state) => ({
            proveedorestour: state.proveedorestour.filter((proveedor) => proveedor.id !== id),
        })),
    addProveedores: (proveedor) =>
        set((state) => ({
            proveedorestour: [
                ...state.proveedorestour,
                proveedor,
            ],
        })),
}));