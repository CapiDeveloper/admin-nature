import { create } from 'zustand'

export const useUIStore = create((set) => ({
    isOpenModalProveedor: false,
    isOpenModalCliente: false,
    openModalProveedor: () => set({ isOpenModalProveedor: true }),
    closeModalProveedor: () => set({ isOpenModalProveedor: false }),
    openModalCliente: () => set({ isOpenModalCliente: true }),
    closeModalCliente: () => set({ isOpenModalCliente: false }),
}));