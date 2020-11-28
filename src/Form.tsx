import React, { useState } from 'react';

type FormProps = {
  onSubmit: (form: { name: string; description: string }) => void;
};

function Form({ onSubmit }: FormProps) {
  const [form, setForm] = useState({
    name: '',
    description: '',
  });

  const { name, description } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: '',
      description: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={name} onChange={onChange} />
        <input
          type="text"
          name="description"
          value={description}
          onChange={onChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
