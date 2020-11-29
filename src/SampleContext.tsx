import React, { createContext, Dispatch, useContext, useReducer } from 'react';

type Color = 'red' | 'orange' | 'blue';

type State = {
  name: string;
  age: number;
  color: Color;
  isGood: boolean;
};

type Action =
  | { type: 'SET_NAME'; name: string }
  | { type: 'SET_AGE'; age: number }
  | { type: 'SET_COLOR'; color: Color }
  | { type: 'TOGGLE_GOOD' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.name,
      };
    case 'SET_AGE':
      return {
        ...state,
        age: action.age,
      };
    case 'SET_COLOR':
      return {
        ...state,
        color: action.color,
      };
    case 'TOGGLE_GOOD':
      return {
        ...state,
        isGood: !state.isGood,
      };
    default:
      throw new Error('Unhandled action type');
  }
}

const SampleStateContext = createContext<State | null>(null);
const SampleDispatchContext = createContext<Dispatch<Action> | null>(null);

type Props = {
  children: React.ReactNode;
};

export function SampleProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    age: 0,
    color: 'red',
    isGood: true,
  });

  return (
    <SampleStateContext.Provider value={state}>
      <SampleDispatchContext.Provider value={dispatch}>
        {children}
      </SampleDispatchContext.Provider>
    </SampleStateContext.Provider>
  );
}

export function useSampleState() {
  const state = useContext(SampleStateContext);
  if (!state) throw new Error('Cannot find Sample Provider');
  return state;
}

export function useSampleDispatch() {
  const dispatch = useContext(SampleDispatchContext);
  if (!dispatch) throw new Error('Cannot find Sample Provider');
  return dispatch;
}
