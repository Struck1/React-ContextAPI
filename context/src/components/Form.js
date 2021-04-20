import React, { useContext, useState, useRef, useEffect } from 'react';
import { DataContext } from './DataProvider';

export default function Form() {
  const [todos, setTodos] = useContext(DataContext);
  const [todoName, setTodoName] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { name: todoName, complate: false }]);
    setTodoName('');
    todoInput.current.focus();
  };

  const todoInput = useRef();

  useEffect(() => {
    todoInput.current.focus();
  }, []);

  return (
    <form autoComplete='off' onSubmit={submitHandler}>
      <input
        type='text'
        name='todos'
        id='todos'
        required
        value={todoName}
        placeholder="what's needed to be done"
        onChange={(e) => setTodoName(e.target.value)}
        ref={todoInput}
      />
      <button type='submit'>Create</button>
    </form>
  );
}
