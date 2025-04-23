import { useEffect, useState  } from 'react';

const COLOR_A = '#fff';
const COLOR_B = '#666';

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

            <button onClick={toggle}>Toggle Color</button>

        </div>
    );
};

export default ColorToggle;