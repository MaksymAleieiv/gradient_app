import {Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './pages/Home/Home';
import AddGradient from './pages/AddGradient/AddGradient';
import EditGradient from './pages/EditGradient/EditGradient';
import Layout from './components/Layout/Layout';

import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="new" element={<AddGradient />} />
            <Route path="edit/:editId" element={<EditGradient />}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
