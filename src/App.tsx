import Header from "./components/Header/Header"
import HomePage from "./components/HomePage/HomePage"
import AboutPage from "./components/AboutPage/AboutPage"
import Services from "./components/Services/Services"

function App() {
 return (
  <div className="containerApp">
    <Header/>
    <HomePage/>
    <AboutPage/>
    <Services/>
    
  </div>
 )
}

export default App
