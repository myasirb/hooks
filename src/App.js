import "./App.css";
import Home from "./components/Home";
import { useContact } from "./hooks/contact-hook";
import { ContactContext } from "./context/ContactContext";
import Clock from "./components/Clock";

const App = () => {
  const { list, count, push, pop } = useContact();

  return (
    <ContactContext.Provider value={{ list: list, count:count , push: push, pop: pop }}>
      <div className="App">
        <header className="App-header">
          Contact Book
          <Clock />
        </header>

        <main>
          <Home />
        </main>

        {/* <footer className="App-footer">Developed By Muhammad Yasir</footer> */}
      </div>
    </ContactContext.Provider>
  );
};

export default App;
