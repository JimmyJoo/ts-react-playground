import React, { useReducer } from 'react';
import { useSampleDispatch, useSampleState } from './SampleContext';

function ReducerSample() {
  const state = useSampleState();
  const dispatch = useSampleDispatch();

  const onSetName = () => dispatch({ type: 'SET_NAME', name: 'Jimmy' });
  const onSetAge = () => dispatch({ type: 'SET_AGE', age: 27 });
  const onSetColor = () => dispatch({ type: 'SET_COLOR', color: 'blue' });
  const onToggleGood = () => dispatch({ type: 'TOGGLE_GOOD' });

  return (
    <div>
      <div>
        <p>
          <code>NAME: </code> {state.name}
        </p>
        <p>
          <code>AGE: </code> {state.age}
        </p>
        <p>
          <code>COLOR: </code> {state.color}
        </p>
        <p>
          <code>ISGOOD: </code> {state.isGood ? 'true' : 'false'}
        </p>
      </div>
      <div>
        <button onClick={onSetName}>SET_NAME</button>
        <button onClick={onSetAge}>SET_AGE</button>
        <button onClick={onSetColor}>SET_COLOR</button>
        <button onClick={onToggleGood}>TOGGLE_GOOD</button>
      </div>
    </div>
  );
}

export default ReducerSample;
