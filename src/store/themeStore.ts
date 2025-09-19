import { create } from "zustand";
import { persist } from "zustand/middleware";

type TTheme = {
  isDark: boolean;

  toggle: () => void;
};

export const themeStorage = create<TTheme>()(
  persist(
    (set) => ({
      isDark: false,

      toggle: () => set((state) => ({ isDark: !state.isDark })),
    }),
    {
      name: "theme-storage",
    }
  )
);
