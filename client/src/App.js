import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import DisplayPets from './components/views/DisplayPets';
import AddPet from './components/AddPet';
import ViewOne from './components/views/ViewOne';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DisplayPets/>}/>
        <Route path="/addPet" element={<AddPet/>}/>
        <Route path="/pet/:id" element={<ViewOne/>}/>
        <Route path="/pet/edit/:id" element={<Edit/>}/>
      </Routes>
    </div>
  );
}

export default App;
