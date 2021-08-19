import React, { useState } from 'react';
import './index.css';
import Counter from './Counter.jsx';
import CounterHooks from './CounterHooks.jsx';

export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState('green');
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      <div className="App">
        Counter
        <Counter initialCount={0} />
        CounterHooks
        <CounterHooks initialCount={0} />
        <button
          onClick={() =>
            setTheme((prevTheme) => {
              return prevTheme === 'red' ? 'blue' : 'red';
            })
          }
        >
          Toggle Theme
        </button>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
