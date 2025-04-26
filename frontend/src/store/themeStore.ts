import { create } from 'zustand';

// First: Define the theme state type
export type ThemeState = {
  mode: 'light' | 'dark';
  toggleMode: () => void;
};

// Get initial mode from localStorage
const themeFromStorage: 'light' | 'dark' | null = localStorage.getItem('theme') as 'light' | 'dark' | null;

// Now create the store
export const useThemeStore = create<ThemeState>((set) => ({
  mode: themeFromStorage === 'light' || themeFromStorage === 'dark' ? themeFromStorage : 'light',
  toggleMode: () =>
    set((state) => {
      const newMode = state.mode === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newMode);
      return { mode: newMode };
    }),
}));
