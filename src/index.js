import './css/index.css';

import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import App from './pages/App'
import EditMeme from './pages/EditMeme';
import Meme from './pages/Meme';

render(
  <Router>
    <Routes>
      <Route path = "/" exact element = { <App/> } />
      <Route path = "/edit" element = { <EditMeme/> } />
      <Route path = "/meme" element = { <Meme/> } />
    </Routes>
  </Router>,
  document.getElementById('root')
);
