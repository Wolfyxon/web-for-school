import { useRef, type SubmitEventHandler } from "react";

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
      <label htmlFor="inp-title">Tytuł filmu</label>
      <input type="text" id="inp-title" ref={refTitle} />

      <label htmlFor="sel-genre">Rodzaj</label>

      <select id="sel-genre" ref={refGenre}>
        {GENRES.map((v, i) => <option value={i}>{v}</option>)}
      </select>

      <input type="submit" value="Dodaj" />
    </form>
  )
}

export default App;
