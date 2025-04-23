
import { create } from 'zustand';

interface ThemeStore {
    isToggled: boolean;
    toggle: () => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
    isToggled: JSON.parse(localStorage.getItem('isToggled') || 'false'),
    toggle: () => {
        set((state) => {
            const newState = !state.isToggled;

            localStorage.setItem('isToggled', JSON.stringify(newState));
            return { isToggled: newState };
        });
    },
}));


/*
import { create } from 'zustand';

const useStore = create((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1})),
    removeAllBears: () => set({ bears: 0 }),
    updateBears: (newBears) => set({ bears: newBears }),
}))

function BearCounter() {
    const bears = useStore((state) => state.bears)
    return <h1>{bears} bears around here...</h1>
}

function Controls() {
    const increasePopulation = useStore((state) => state.increasePopulation)
    return <button onClick={increasePopulation}>one up</button>
}

*/