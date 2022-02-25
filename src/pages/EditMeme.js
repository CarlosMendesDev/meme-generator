/* eslint-disable jsx-a11y/alt-text */
import '../css/EditMeme.css';
import CallMadeIcon from '@material-ui/icons/CallMade';

function EditMeme() {
  return (
    <div className="EditMeme">
      <header>
        <img
          src="/Trollface.png"
          className="logo-header"
        ></img>
        <h1 className="title-header">Meme Generator</h1>
      </header>

      <div className="container-edit">
        <input
          placeholder="Top text..."
          type="text"
        ></input>

        <img
          className="image-edit"
          src="https://veja.abril.com.br/wp-content/uploads/2022/02/000_9XR6RW.jpg"
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

export default EditMeme;
