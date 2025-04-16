import './App.css'
import Link from './Link'
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
      <Link>Jakiś link</Link>
    </>
  )
}

export default App
