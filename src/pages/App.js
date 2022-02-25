/* eslint-disable jsx-a11y/alt-text */
import '../css/App.css';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CallMadeIcon from '@material-ui/icons/CallMade';

function App() {
  return (
    <div className="App">
      <div className='main'>
        <img
          src="/Trollface.png"
          className="logo"
        ></img>
        <h1>Meme Generator</h1>
      </div>

      <button className="button" onClick={getFile}>
        Upload
        <CloudUploadIcon className="icon"></CloudUploadIcon>
      </button>
      <input type="file" id="file"></input>
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

const getFile = () => {
  const file = document.getElementById('file');

  file.click();
}

export default App;
