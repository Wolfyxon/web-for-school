export default function Ksiazka(data: {autor: string, tytul: string, rokWydania: number}) {
    return (
        <tr>
            <td>{data.autor}</td>
            <td>{data.tytul}</td>
            <td>{data.rokWydania}</td>
        </tr>
    )
}