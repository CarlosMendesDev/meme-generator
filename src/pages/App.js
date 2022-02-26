/* eslint-disable jsx-a11y/alt-text */
import '../css/App.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CallMadeIcon from '@material-ui/icons/CallMade';

import MemeGenerate from '../service/MemeGenerate.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='main'>
          <img
            src="/Trollface.png"
            className="logo"
          ></img>
          <h1>Meme Generator</h1>
        </div>
  
        <button className="button" onClick={this.getFile}>
          Upload
          <CloudUploadIcon className="icon"></CloudUploadIcon>
        </button>

        <input
          type="file"
          id="file"
          accept="image/png, image/jpeg"
          onChange={(event) => { this.setFile(event.target.files[0]) }}
        />

        <Link to="/edit" id="edit-page"/>

        <footer>
          <label>Desenvolvido por Os Brabos</label>
          <a href="https://github.com/CarlosMendesDev" target="blank">
            Visite meu GitHub
            <CallMadeIcon></CallMadeIcon>
          </a>
        </footer>
      </div>
    );
  }

  getFile() {
    const file = document.getElementById('file');

    file.click();
  }

  setFile(file) {
    const fileURL = window.URL.createObjectURL(file);
    MemeGenerate.setFile(fileURL);
    
    const btnPageEdit = document.getElementById('edit-page');
    btnPageEdit.click();
  }

}

export default App;
