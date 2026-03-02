import { useState, type SubmitEvent } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

const COURSES = [
  "Programowanie w C#",
  "Angular dla początkujących",
  "Kurs Django"
];

export default function App() {
  const [name, setName] = useState("");
  const [courseId, setCourseId] = useState(0);

  function submit(e: SubmitEvent) {
    e.preventDefault();

    console.log(name);
    console.log(COURSES[courseId - 1]);
  }
  
  return (
    <>
      <h2>Liczba kursów: {COURSES.length}</h2>
      <ol>
        {
          COURSES.map(v => <li>{v}</li>)
        }
      </ol>

      <form onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="inp-name">Imię i nazwisko:</label>
          <input 
            type="text" 
            className="form-control" 
            id="inp-name" 
            onChange={e => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inp-course-id">Numer kursu:</label>
          <input 
            type="text" 
            className="form-control" 
            id="inp-course-id"
            onChange={e => {
              setCourseId(parseInt(e.target.value));
            }} 
          />
        </div>
        <br />
        <button className="btn btn-primary">Zapisz do kursu</button>
      </form>
    </>
  )
}

