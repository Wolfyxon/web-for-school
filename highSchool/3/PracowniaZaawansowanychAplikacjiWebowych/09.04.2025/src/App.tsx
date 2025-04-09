import './App.css'
import Hello from './components/Hello'
import Object, { Car } from './components/Object'
import RadioButton from './components/RadioButton'

function App() {

  const car: Car = {
    marka: "Panzerkampfagen",
    cena: 999999,
    rokProdukcji: 1944,
    rocznik: 1944
  }

  return (
    <>
      <Hello name="Wolfyxon" />
      <RadioButton />

      <Object car={car} i={0} /> <hr />
      <Object car={car} i={1} />
    </>
  )
}

export default App
