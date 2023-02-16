import React from 'react';
import './App.css';
import AddTodo from './components/TodosContext/AddTodo';
import TodoProvider from './Providers/TodoProvider';
import toast, { Toaster } from 'react-hot-toast';
import Todos from './components/TodosContext/Todos';

function App() {
  return (
    <div className="container mx-auto max-w-lg p-4">
      <TodoProvider>
        <AddTodo />
        <Todos />
      </TodoProvider>
      <Toaster />
    </div>
  );
}

export default App;
