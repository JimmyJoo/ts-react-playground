import React from 'react';
import todos, { Todo } from '../modules/todos';
import TodoItem from './TodoItem';

type Props = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

function TodoList({ todos, onToggle, onRemove }: Props) {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
