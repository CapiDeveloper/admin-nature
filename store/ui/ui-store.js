import { create } from 'zustand'

export const useUIStore = create((set) => ({
    user: {},
    isOpenModalProveedor: false,
    isOpenModalCliente: false,
    addUser: (sesionUser) => set({ user: sesionUser }),

    addUser: (sesionUser) => set(state=>({...state, user:sesionUser})),


    openModalProveedor: () => set({ isOpenModalProveedor: true }),
    closeModalProveedor: () => set({ isOpenModalProveedor: false }),
    openModalCliente: () => set({ isOpenModalCliente: true }),
    closeModalCliente: () => set({ isOpenModalCliente: false }),
}));