import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

const names = [
  "Bogusław",
  "Fryderyk",
  "Włodzimierz",
  "Genowefa"
];

const products: {name: string, cost: number}[] = [
  {
    name: "Tung tung tung sahur trading card",
    cost: 20
  },
  {
    name: "Labubu Dubai chocolate",
    cost: 999999999999999
  }
];

function NameList() {
  return (
    <ul>
      {names.map((name) => <li key={name}>{name}</li>)}
    </ul>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <NameList />

    <h2>Lista produktów</h2>

    <table>
      {
        products.map((product) => {
          return (
            <tr>
              <td>{product.name}</td>
              <td>{product.cost}</td>
            </tr>
          )
        })
      }
    </table>

  </StrictMode>,
)
