import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import Header from "./components/Header";
import Content from "./components/Content";
import About from "./components/About";
import Social from "./components/Social";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Content />
        <About />
        <Social />
        <Contact />
      </header>
    </div>
  );
}

export default App;
