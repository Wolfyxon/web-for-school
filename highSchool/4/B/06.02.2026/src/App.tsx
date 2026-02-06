import Car from "./comp/Car"
import Counter from "./comp/Counter";
import Hello from "./comp/Hello"
import { Footer, Header } from "./comp/PageBounds";
import Profile from "./comp/Profile";
import User from "./comp/User"

function App() {
  return (
    <>
      <Header />

      <main>
        <Hello />
        <User name="Fryderyk Fazniedźwiedź" age={30} />
        <Car brand="Volkswagen" year={2000} />
        <Counter />
        <Profile />
      </main>

      <Footer />
    </>
  )
}

export default App;
