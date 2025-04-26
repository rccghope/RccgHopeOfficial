import { create } from 'zustand';

type ThemeState = {
  mode: 'light' | 'dark';
  toggleMode: () => void;
};

const themeFromStorage: 'light' | 'dark' | null = localStorage.getItem('theme') as 'light' | 'dark' | null;

export const useThemeStore = create<ThemeState>((set) => ({
  mode: themeFromStorage === 'light' || themeFromStorage === 'dark' ? themeFromStorage : 'light',  // Default to 'light' if not found in localStorage
  toggleMode: () => {
    set((state) => {
      const newMode = state.mode === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newMode);
      return { mode: newMode }; // This is fine because we're updating only the `mode` field
    });
  },
}));
