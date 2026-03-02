import "../node_modules/bootstrap/dist/css/bootstrap.css";

const COURSES = [
  "Programowanie w C#",
  "Angular dla początkujących",
  "Kurs Django"
];

export default function App() {
  return (
    <>
      <h2>Liczba kursów: {COURSES.length}</h2>
      <ol>
        {
          COURSES.map(v => <li>{v}</li>)
        }
      </ol>

      <form>
        <div className="form-group">
          <label htmlFor="inp-name">Imię i nazwisko:</label>
          <input type="text" className="form-control" id="inp-name" />
        </div>
        <div className="form-group">
          <label htmlFor="inp-course-id">Numer kursu:</label>
          <input type="text" className="form-control" id="inp-course-id" />
        </div>
        <br />
        <button className="btn btn-primary">Zapisz do kursu</button>
      </form>
    </>
  )
}

