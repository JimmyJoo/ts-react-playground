import React from 'react';
import Counter from './Counter';
import Greetings from './Greetings';

function App() {
  const onClick = (name: string) => {
    console.log(name);
  };

  return (
    <div>
      <Greetings
        name="Jimmy"
        mark="!"
        age={27}
        optionalMsg="Welcome back!"
        onClick={onClick}
      />
      <Counter />
    </div>
  );
}

export default App;
