import React, { FormEvent, useState } from 'react';

type Props = {
  onInsert: (content: string) => void;
};

function TodoForm({ onInsert }: Props) {
  const [value, setValue] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    onInsert(value);
    setValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="할 일을 입력하세요."
      />
      <button type="submit">등록</button>
    </form>
  );
}

export default TodoForm;
