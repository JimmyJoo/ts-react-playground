import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { RootState } from '../modules';
import { addTodo, removeTodo, toggleTodo } from '../modules/todos';

function TodosContainer() {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  const onInsert = useCallback(
    (content) => {
      dispatch(addTodo(content));
    },
    [dispatch]
  );

  const onRemove = useCallback(
    (id) => {
      dispatch(removeTodo(id));
    },
    [dispatch]
  );

  const onToggle = useCallback(
    (id) => {
      dispatch(toggleTodo(id));
    },
    [dispatch]
  );

  return (
    <>
      <TodoForm onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default TodosContainer;
