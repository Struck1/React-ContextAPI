import React, { useState } from 'react';

export default function ListItem({ todo, id, checkComplate, editHandler }) {
  const [edit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState(todo.name);

  const handleSave = (id) => {
    setEdit(false);
    editHandler(id, editValue);
  };

  if (edit) {
    return (
      <li>
        <input
          type='text'
          id={id}
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
        />

        <button onClick={() => handleSave(id)}>Save</button>
      </li>
    );
  } else {
    return (
      <li>
        <label htmlFor={id} className={todo.complate ? 'active' : ''}>
          <input
            type='checkbox'
            id={id}
            checked={todo.complate}
            onChange={() => checkComplate(id)}
          />

          {todo.name}
        </label>
        <button disabled={todo.complate} onClick={() => setEdit(true)}>
          Edit
        </button>
      </li>
    );
  }
}
