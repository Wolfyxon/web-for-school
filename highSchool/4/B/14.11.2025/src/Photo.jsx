import "./Photo.css";

export default function Photo(props) {
    const path = "assets/" + props.filename;
    
    return (
        <div className="photo">
            <img src={path} />
            <h4>Pobrania: {props.downloads}</h4>
            <a href={path} target="download">Pobierz</a>
        </div>
    );
}