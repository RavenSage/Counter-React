import React from 'react';
import './index.css';
import Counter from './Counter.jsx';
import CounterHooks from './CounterHooks.jsx';

function App() {
  return (
    <>
      <div className="App">
        Counter
        <Counter initialCount={0} />
        CounterHooks
        <CounterHooks initialCount={0} />
      </div>
    </>
  );
}

export default App;
