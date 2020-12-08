import { ActionType, createAction, createReducer } from 'typesafe-actions';
import React from 'react';

let nextId = 1;

const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';
const REMOVE_TODO = 'todos/REMOVE_TODO';

export const addTodo = createAction(ADD_TODO, (content: string) => ({
  id: nextId++,
  content,
}))<Todo>();

export const toggleTodo = createAction(TOGGLE_TODO)<number>();
export const removeTodo = createAction(REMOVE_TODO)<number>();

export type Todo = {
  id: number;
  content: string;
  done: boolean;
};

type TodosState = Todo[];

const actions = { addTodo, toggleTodo, removeTodo };
type TodosAction = ActionType<typeof actions>;

const initialState: TodosState = [];

const todos = createReducer<TodosState, TodosAction>(initialState, {
  [ADD_TODO]: (state, action) =>
    state.concat({
      ...action.payload,
      done: false,
    }),
  [TOGGLE_TODO]: (state, action) =>
    state.map((todo) =>
      todo.id === action.payload ? { ...todo, done: !todo.done } : todo
    ),
  [REMOVE_TODO]: (state, action) =>
    state.filter((todo) => todo.id !== action.payload),
});

// function todos(
//   state: TodosState = initialState,
//   action: TodosAction
// ): TodosState {
//   switch (action.type) {
//     case ADD_TODO:
//       return [
//         ...state,
//         { id: action.payload.id, content: action.payload.content, done: false },
//       ];
//     case TOGGLE_TODO:
//       return state.map((todo) =>
//         todo.id === action.payload ? { ...todo, done: !todo.done } : todo
//       );
//     case REMOVE_TODO:
//       return state.filter((todo) => todo.id !== action.payload);
//     default:
//       return state;
//   }
// }

export default todos;
