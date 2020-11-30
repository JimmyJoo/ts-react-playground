import React from 'react';

type CounterProps = {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
};

function counter({
  count,
  onIncrease,
  onDecrease,
  onIncreaseBy,
}: CounterProps) {
  return (
    <div>
      <p>count: {count}</p>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
        <button onClick={() => onIncreaseBy(5)}>+5</button>
      </div>
    </div>
  );
}

export default counter;
