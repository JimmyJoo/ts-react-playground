import React from 'react';
import Counter from './Counter';
import Greetings from './Greetings';
import Form from './Form';
import ReducerSample from './ReducerSample';

function App() {
  const onClick = (name: string) => {
    console.log(name);
  };

  const onSubmit = (form: { name: string; description: string }) => {
    const { name, description } = form;
    console.log('name: ', name);
    console.log('description: ', description);
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
      <Form onSubmit={onSubmit} />
      <ReducerSample />
    </div>
  );
}

export default App;
