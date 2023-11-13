
// import useSelector  from 'react-redux';
import TaskList from './components/TaskList';
import TaskForm  from './components/TaskForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
// This is a simple Web application CRUD (Create, Read, Update, Delete) using React and Redux Toolkit.
  return (
    <div className="min-h-screen bg-zinc-900 text-slate-50 text-lg flex items-center justify-center ">
      <div className='h-full flex items-center justify-center'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TaskList/>}/>
          <Route path='/create-task' element={<TaskForm/>}/>
          <Route path='/edit-task/:id' element={<TaskForm/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}
// Aqui genero mis rutas de navegacion.

export default App;
