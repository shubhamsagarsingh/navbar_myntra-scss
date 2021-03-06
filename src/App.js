import { Switch, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import Home from "./pages/Home"




const App = () => {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </>
  )
}




export default App