import './css/index.css';

import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import App from './pages/App'
import EditMeme from './pages/EditMeme';

render(
  <Router>
    <Routes>
      <Route path="/" exact element={<App/>} />
      <Route path="/edit" element={<EditMeme/>} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
