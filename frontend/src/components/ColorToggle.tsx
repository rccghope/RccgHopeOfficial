
// updating component to use Zustand instead of useState

import { useThemeStore } from '../store/themeStore';

const ColorToggle = () => {
    const { isToggled, toggle } = useThemeStore();
    const color = isToggled ? '#ff5733' : '#3498db';

    return (
        <div style={{ backgroundColor: color, padding: '2rem', color: '#fff' }}>
            <p>The current color is { isToggled ? 'Color A' : 'Color B' }</p>

            <button onClick={toggle}>Toggle Color</button>
        </div>
    );
};

export default ColorToggle;


/* import { useEffect, useState  } from 'react';
const COLOR_A = 'purple';
const COLOR_B = 'darkblue';

const ColorToggle = () => {
    const [isToggled, setToggled] = useState<boolean>(() => {
        const saved = localStorage.getItem('toggleState');
        return saved ? JSON.parse(saved) : false;
    });

    // Saving toggle state to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('toggleState', JSON.stringify(isToggled));
    }, [isToggled]);

    const toggle = () => setToggled(prev => !prev);

    const currentColor = isToggled ? COLOR_A : COLOR_B;

    return (
        <div style={{backgroundColor: currentColor, padding: '2rem', color: '#fff'}}>
            <p>The current color is {isToggled ? 'Color A' : 'Color B'}</p>

            <button onClick={toggle} style={{border: '2px solid dark', backgroundColor: 'black', padding: '5px 10px', borderRadius: '50px'}}>Click here to Toggle the Color</button>

        </div>
    );
};

export default ColorToggle;

*/