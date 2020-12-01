import React from 'react';

let nextId = 1;

const ADD_TODO = 'todos/ADD_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;
const REMOVE_TODO = 'todos/REMOVE_TODO' as const;

export const addTodo = (content: string) => ({
  type: ADD_TODO,
  payload: {
    id: nextId++,
    content,
  },
});
export const toggleTodo = (id: number) => ({ type: TOGGLE_TODO, payload: id });
export const removeTodo = (id: number) => ({ type: REMOVE_TODO, payload: id });

export type Todo = {
  id: number;
  content: string;
  done: boolean;
};

type TodosState = Todo[];

type TodosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof removeTodo>;

const initialState: TodosState = [];

function todos(
  state: TodosState = initialState,
  action: TodosAction
): TodosState {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { id: action.payload.id, content: action.payload.content, done: false },
      ];
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

export default todos;
