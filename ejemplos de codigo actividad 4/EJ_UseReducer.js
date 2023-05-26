import React, { useReducer } from 'react';

const initialState = {
  count: 0
};

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error('Acción no reconocida');
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch('increment')}>Incrementar</button>
      <button onClick={() => dispatch('decrement')}>Decrementar</button>
    </div>
  );
};

export default Counter;

