import { create } from "zustand";

const DEFAULT_DIMENSIONS = { x: 0, y: 0, z: 0 };

export const usePackingStore = create((set) => ({
  box: { ...DEFAULT_DIMENSIONS },
  items: [{ ...DEFAULT_DIMENSIONS }],

  changeBox: ({ dimension, value }) =>
    set((state) => ({
      box: {
        ...state.box,
        [dimension]: value,
      },
    })),

  changeItem: ({ index, dimension, value }) =>
    set((state) => ({
      items: state.items.map((item, id) => {
        if (id !== index) return item;
        else
          return {
            ...item,
            [dimension]: value,
          };
      }),
    })),

  addItem: () =>
    set((state) => ({
      items: [...state.items, { ...DEFAULT_DIMENSIONS }],
    })),

  removeItem: (index) =>
    set((state) => ({
      items: state.items.filter((_, id) => id !== index),
    })),
}));
