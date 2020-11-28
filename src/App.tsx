import React from 'react';
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
    </div>
  );
}

export default App;
