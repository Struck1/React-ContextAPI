import React, { useContext } from 'react';
import ListItem from './ListItem';
import { DataContext } from './DataProvider';

export default function List() {
  const [todos, setTodos] = useContext(DataContext);

  const switchComplate = (id) => {
    const newTodos = [...todos];

    newTodos.forEach((todo, index) => {
      if (index === id) {
        todo.complate = !todo.complate;
      }
    });

    setTodos(newTodos);
  };

  const editTodo = (id, value) => {
    const newTodos = [...todos];

    newTodos.forEach((todo, index) => {
      if (index === id) {
        todo.name = value;
      }
    });

    setTodos(newTodos);
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <ListItem
          todo={todo}
          key={index}
          id={index}
          checkComplate={switchComplate}
          editHandler={editTodo}
        />
      ))}
    </ul>
  );
}
