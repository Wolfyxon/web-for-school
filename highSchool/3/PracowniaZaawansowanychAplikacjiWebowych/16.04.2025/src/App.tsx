import './App.css'
import User, { UserData } from './User'

function App() {

  const user: UserData = {
    name: "Jan Kowalski",
    age: 30,
    email: "jan.kowalski@example.com",
    address: {
      street: "ul. Długa 15",
      city: "Warszawa",
      zip: "00-001"
    }
  }

  return (
    <>
      <User user={user}></User>
    </>
  )
}

export default App
