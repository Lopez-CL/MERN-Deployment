import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import PetForm from './components/PetForm';
import PetList from './components/PetList';
import PetDetail from './components/PetDetail';
import PetUpdate from './components/PetUpdate';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route element={<PetList/>} path='/' default/>
        <Route element={<PetForm/>} path='/pets/new' />
        <Route element={<PetDetail/>} path='/pets/:_id' />
        <Route element={<PetUpdate/>} path='/pets/:_id/edit' />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
