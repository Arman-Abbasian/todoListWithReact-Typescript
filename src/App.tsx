import React from 'react';
import './App.css';
import AddTodo from './components/TodosContext/AddTodo';
import TodoProvider from './Providers/TodoProvider';

function App() {
  return (
    <div className="container mx-auto max-w-lg p-4">
      <TodoProvider>
        <AddTodo />
      </TodoProvider>
    </div>
  );
}

export default App;
