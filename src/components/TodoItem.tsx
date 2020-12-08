import React, { CSSProperties, useCallback } from 'react';
import { Todo } from '../modules/todos';

type Props = {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

function TodoItem({ todo, onToggle, onRemove }: Props) {
  const handleToggle = useCallback(() => {
    onToggle(todo.id);
  }, [todo.id]);

  const handleRemove = useCallback(() => {
    onRemove(todo.id);
  }, [todo.id]);

  const textStyle: CSSProperties = {
    textDecoration: todo.done ? 'line-through' : 'none',
  };

  const removeStyle: CSSProperties = {
    color: 'red',
    marginLeft: 8,
  };

  return (
    <li>
      <input type="checkbox" checked={todo.done} onChange={handleToggle} />
      <span style={textStyle}>{todo.content}</span>
      <button onClick={handleRemove} style={removeStyle}>
        X
      </button>
    </li>
  );
}

export default TodoItem;
