import React, { useReducer } from 'react';

type Action = { type: 'INCREASE' } | { type: 'DECREASE' };

function counterReducer(state: number, action: Action): number {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    default:
      throw new Error('Unhandled action type');
  }
}

function Counter() {
  // const [count, setCount] = useState(0);

  // const onIncrease = () => setCount(count + 1);
  // const onDecrease = () => setCount(count - 1);

  const [count, dispatch] = useReducer(counterReducer, 0);

  const onIncrease = () => dispatch({ type: 'INCREASE' });
  const onDecrease = () => dispatch({ type: 'DECREASE' });

  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={onIncrease}> + </button>
        <button onClick={onDecrease}> - </button>
      </div>
    </div>
  );
}

export default Counter;
