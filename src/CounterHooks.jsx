import React, { useState } from 'react';

function CounterHooks({ initialCount }) {
  const [state, setState] = useState({ count: initialCount });
  return (
    <div>
      <button onClick={() => setState({ count: state.count - 1 })}>-</button>
      <span>{state.count}</span>
      <button onClick={() => setState({ count: state.count + 1 })}>+</button>
    </div>
  );
}

export default CounterHooks;
