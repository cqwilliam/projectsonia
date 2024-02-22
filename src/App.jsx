import "./App.css";

function App() {
  return (
    <div>
      <div className="padre">
        <nav className="nav">
          <div>
            <img src="./logo.jpg" alt="" className="logo" />
          </div>
          <div>
            <ul className="lista_nav">
              <li className="list">inicio</li>
              <li className="list">municipalidad</li>
              <li className="list">planes y organización</li>
              <li className="list">normas emitidas</li>
            </ul>
          </div>
        </nav>
      </div>
      <div>todo el contenido</div>
    </div>
  );
}

export default App;
