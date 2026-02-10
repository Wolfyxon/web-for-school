import { useRef, type SubmitEventHandler } from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./style.css";

const GENRES = [
  "",
  "Komedia",
  "Obyczajowy",
  "Sensacyjny",
  "Horror"
];

function App() {
  const refTitle = useRef<HTMLInputElement>(null);
  const refGenre = useRef<HTMLSelectElement>(null);

  const submit: SubmitEventHandler = (e) => {
    e.preventDefault();

    const title = refTitle.current!.value;
    const genre = refGenre.current!.value;

    console.log(`tytul: ${title}; rodzaj: ${genre}`);
  }
  
  return (
    <form onSubmit={submit}>
      <div className="form-group"> 
        <label htmlFor="inp-title">Tytuł filmu</label>
        <input type="text" id="inp-title" className="form-control" ref={refTitle} />
      </div>

      <div className="form-group">
        <label htmlFor="sel-genre">Rodzaj</label>
        <select id="sel-genre" className="form-control" ref={refGenre}>
          {GENRES.map((v, i) => <option value={i}>{v}</option>)}
        </select>
      </div>

      <input type="submit" value="Dodaj" className="btn btn-primary mt-2" />
    </form>
  )
}

export default App;
