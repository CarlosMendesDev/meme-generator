/* eslint-disable jsx-a11y/alt-text */
import '../css/Meme.css';
import CallMadeIcon from '@material-ui/icons/CallMade';
import { Component } from 'react';
import { Link } from 'react-router-dom'

import MemeGenerate from '../service/MemeGenerate';

class Meme extends Component {
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
  
        <div className="container-meme">
          <div
            id="meme"
            style={{
              backgroundImage: `url(${MemeGenerate.getFile()})`,
            }}
          >
            <label className='TopText'>
              { MemeGenerate.getTopText() }
            </label>
            <label className='BottomText'>
              { MemeGenerate.getBottomText() }
            </label>
          </div>

          <div className='buttons'>
            <button
              className="button"
            >
              Download
            </button>
            <button
              className="button"
              onClick={this.voltar}
            >
              Tentar Novamente
            </button>
          </div>
        </div>

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


  voltar() {
    alert(0)

    const btnPageEdit = document.getElementById('edit-page');
    btnPageEdit.click();
  }
}

export default Meme;
