import { create } from 'zustand';

export type ThemeState = {
  mode: 'light' | 'dark';
  toggleMode: () => void;
};

const themeFromStorage = localStorage.getItem('theme') as 'light' | 'dark' | null;

export const useThemeStore = create<ThemeState>()((set) => ({
  mode: themeFromStorage === 'light' || themeFromStorage === 'dark' ? themeFromStorage : 'light',
  toggleMode: () => {
    set((state: ThemeState) => {
      const newMode = state.mode === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newMode);
      return { mode: newMode };
    });
  },
}));
