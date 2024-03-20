import { create } from 'zustand'

export const useProgramaCrud = create((set) => ({
    programas: [],
    modalEditar: false,
    idProgramaEditar: "",

    // MODAL
    addIdPrograma: (idEditar) => set({ modalEditar: idEditar }),

    // MODAL
    openModalPrograma: () => set({ modalEditar: true }),
    closeModalPrograma: () => set({ modalEditar: false }),

    // CRUD
    getProgramas: (getPrograma) => set({ programas: getPrograma }),
    updateProgramas: (ProgramaActualizado) =>
        set((state) => ({
            programas: state.programas.map((programa) => {
                if (programa.id == ProgramaActualizado?.id) {
                    return ProgramaActualizado;
                }
                return programa;
            }),
        })),
    deleteProgramas: (id) =>
        set((state) => ({
            programas: state.programas.filter((programa) => programa.id !== id),
        })),
    addProgramas: (programa) =>
        set((state) => ({
            programas: [
                ...state.programas,
                programa,
            ],
        })),
}));