import { Button } from "react-bootstrap";

export default function Photo(props) {
    const path = "assets/" + props.filename;
    
    return (
        <div className="photo">
            <img src={path} />
            <h4>Pobrań: {props.downloads}</h4>
            <Button href={path} variant="success" download>
                Pobierz
            </Button>
        </div>
    );
}