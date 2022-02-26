/* eslint-disable jsx-a11y/alt-text */
import '../css/EditMeme.css';
import CallMadeIcon from '@material-ui/icons/CallMade';
import { Component } from 'react';
import { Link } from 'react-router-dom'

import MemeGenerate from '../service/MemeGenerate';

class EditMeme extends Component {
  render() {
    return (
      <div className="EditMeme">
        <header>
          <Link to="/">
            <img
              src="/Trollface.png"
              className="logo-header"
            ></img>
          </Link>
          <h1 className="title-header">Meme Generator</h1>
        </header>
  
        <div className="container-edit">
          <input
            placeholder="Top text..."
            type="text"
          ></input>
  
          <img
            className="image-edit"
            src={ MemeGenerate.getFile() }
          ></img>
  
          <input
            placeholder="Bottom text..."
            type="text"
          ></input>
  
          <button className="button">
            Generate
          </button>
        </div>
  
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
}

export default EditMeme;
