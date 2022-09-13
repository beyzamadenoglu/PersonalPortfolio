import "bootstrap/dist/css/bootstrap.min.css";
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'

import "./App.css"
import Header from "./components/Header";
import Content from "./components/Content";
import About from "./components/About";
import Social from "./components/Social";
import Contact from "./components/Contact";
import Article from "./components/Article";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <ReactNotifications />
      <header className="App-header">
        <Header />
      </header>
      <Content />
      <About />
      <Article />
      <Social />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
