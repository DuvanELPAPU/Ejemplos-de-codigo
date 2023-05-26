import React, { useState, useEffect } from 'react';

const EjemploComponente = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Contador: ${count}`;
  }, [count]);

  const incrementar = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};

export default EjemploComponente;


