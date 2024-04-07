import './App.css'
import Navbar from '../components/NavBar/NavBar.jsx'
import Form from '../components/Form/Form.jsx'
import Slider from '../components/Slider/Slider.jsx'

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
        <Slider />
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
}

export default App;
