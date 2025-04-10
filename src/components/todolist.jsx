import React from 'react';

function Todolist({ todos, onDelete, onToggle }) {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className='cursor-pointer flex justify-center items-center m-3'>
          <h1
            onClick={() => onToggle(todo.id)}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            className='bg-steel-500 font-bold border-2 m-1 text-black p-2 rounded-lg'
          >
            {todo.title}
          </h1>
          <button onClick={() => onDelete(todo.id)} className='bg-red-500 text-white p-2 rounded-lg'>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todolist;