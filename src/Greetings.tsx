import React from 'react';

type GreetingsProps = {
  name: string;
  age: number;
  mark: string;
  optionalMsg?: string;
  onClick: (name: string) => void;
};

function Greetings({ name, age, mark, optionalMsg, onClick }: GreetingsProps) {
  const handleClick = () => onClick(name);

  return (
    <div>
      <h1>
        Hello, {name} {mark}
      </h1>
      {optionalMsg && <p>{optionalMsg}</p>}
      <div>
        <button onClick={handleClick}>Click Me!</button>
      </div>
    </div>
  );
}

Greetings.defaultProps = {
  mark: '.',
};

export default Greetings;
