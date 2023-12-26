import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";
import Services from "./components/Services/Services";
import Contatos from "./components/Contatos/Contatos";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="containerApp">
      <Header />
      <HomePage />
      <AboutPage />
      <Services />
      <Contatos />
      <Footer />
    </div>
  );
}

export default App;
