import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css"
import Header from "./components/Header";
import Content from "./components/Content";
import About from "./components/About";
import Social from "./components/Social";
import Contact from "./components/Contact";
import Article from "./components/Article";
function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Content />
        <About />
        <Article />
        <Social />
        <Contact />
    </div>
  );
}

export default App;
