import "./bootstrap";
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Tasks from './components/tasks/Tasks';
import Create from './components/tasks/Create';
import Edit from './components/tasks/Edit';
import Header from './components/Header';
import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById('app')).render(
  <>
  
  <BrowserRouter>
  <Header />
  
  <Routes>
    <Route path="/" exact element={ <Tasks />}/>
    <Route path="/create" exact element={<Create />}/>
    <Route path="/edit/:userId" exact element={<Edit />}/>
  </Routes>
  </BrowserRouter>
  
  </>
);

