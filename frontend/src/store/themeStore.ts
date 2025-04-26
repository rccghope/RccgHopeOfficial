import { create } from 'zustand';

type ThemeState = {
  mode: 'light' | 'dark';
  toggleMode: () => void;
};

const themeFromStorage: 'light' | 'dark' | null = localStorage.getItem('theme') as 'light' | 'dark' | null;

export const useThemeStore = create<ThemeState>((set) => ({
  mode: themeFromStorage === 'light' || themeFromStorage === 'dark' ? themeFromStorage : 'light',  // Default to 'light' if not found in localStorage
  toggleMode: () => {
    set((state: ThemeState) => { // Explicitly typing `state` as `ThemeState`
      const newMode = state.mode === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newMode); // Save new theme to localStorage
      return { mode: newMode };
    });
  },
}));
