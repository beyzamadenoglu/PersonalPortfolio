import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import Header from "./components/Header";
import Content from "./components/Content";
import About from "./components/About";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Content />
        <About />
      </header>
    </div>
  );
}

export default App;
