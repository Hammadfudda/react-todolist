import { useCallback, useState } from 'react';
import InputAdd from './components/InputAdd.jsx';
import Todolist from './components/Todolist.jsx';
import FilterButton from './components/filterbutton.jsx';

function App() {
  const [todos, setTodos] = useState([
    { title: 'Learn React', id: Date.now(), completed: false },
  ]);
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all');

  const handleChangeInput = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = useCallback(() => {
    if (newTodo.trim() === '') return;

    setTodos((prevTodos) => [
      ...prevTodos,
      { title: newTodo, id: Date.now(), completed: false },
    ]);
    setNewTodo('');
  }, [newTodo]);

  const handleOnDelete = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  const handleOnToggle = useCallback((id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'completed') return todo.completed;
    if (filter === 'pending') return !todo.completed;
    return false;
  });

  return (
    <div className="text-center m-10">
      <h1 className="font-bold text-3xl">TODO LIST</h1>
      <InputAdd value={newTodo} onChange={handleChangeInput} onAdd={handleAddTodo} />
      <FilterButton filter={filter} setFilter={setFilter} />
      <Todolist todos={filteredTodos} onDelete={handleOnDelete} onToggle={handleOnToggle} />
    </div>
  );
}

export default App;
