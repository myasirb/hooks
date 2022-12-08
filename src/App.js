import "./App.css";
import Home from "./components/Home";
import { useContact } from "./hooks/contact-hook";
import { ContactContext } from "./context/ContactContext";

const App = () => {
  const { list, push, pop } = useContact();

  return (
    <ContactContext.Provider value={{ list: list, push: push, pop: pop }}>
      <div className="App">
        <header className="App-header">Contact Book</header>

        <main>
          <Home />
        </main>

        {/* <footer className="App-footer">Developed By Muhammad Yasir</footer> */}
      </div>
    </ContactContext.Provider>
  );
};

export default App;
