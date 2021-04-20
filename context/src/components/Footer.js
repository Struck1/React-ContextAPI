import React, { useContext, useState } from 'react';
import { DataContext } from './DataProvider';

export default function Footer() {
  const [todos, setTodos] = useContext(DataContext);
  const [check, setCheck] = useState(false);

  const checkHandler = () => {
    const newTodos = [...todos];

    newTodos.forEach((todo) => {
      todo.complate = !check;
    });

    setTodos(newTodos);
    setCheck(!check);
  };

  const newTodosComplate = () => {
    return todos.filter((todo) => todo.complate === false);
  };

  const deleteTodo = () => {
    setTodos(newTodosComplate());
    setCheck(false);
  };

  return (
    <>
      {todos.length === 0 ? (
        <h2>Nothings To Do</h2>
      ) : (
        <div className='row'>
          <label htmlFor='all'>
            <input type='checkbox' name='all' id='all' onClick={checkHandler} />
            ALL
          </label>
          <p>You have {newTodosComplate().length} to do</p>
          <button id='delete' onClick={deleteTodo}>
            Delete
          </button>
        </div>
      )}
    </>
  );
}
