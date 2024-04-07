import './App.css'
import Navbar from '../components/NavBar/NavBar.jsx'
import Form from '../components/Form/Form.jsx'

function App() {
  return (
    <div className="header">
      <div className="name">
        ¡Somos Córdoba!
      </div>
      <div className="App">
        <Navbar />
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
}

export default App;
