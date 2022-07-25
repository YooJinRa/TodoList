import React from 'react';
import './App.css';
import TodoList from './pages/TodoList';

function App() {
  
  console.log("app ::");
  
  return (
    <div className='wrap'>
      <TodoList />
    </div>
  )
}

export default App;