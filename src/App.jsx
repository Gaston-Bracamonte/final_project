import './App.css'
import Navbar from '../components/NavBar/NavBar.jsx'
import Form from '../components/Form/Form.jsx'
import Slider from '../components/Slider/Slider.jsx'
import Footer from '../components/Footer/Footer.jsx'

function App() {
  return (
    <div>
      {/* Inicio de la barra superior */}
      <div className='navTop'>
        <div className='App'>
          <Navbar />
        </div>
      </div>
      {/* Fin de la barra superior */}
      <div className='home' id="section1">
        <div>
          <span className='subtitle'>¡Si estás acá, estás un paso más cerca de Córdoba!</span>
        </div>
        <br></br>
        {/* <div>
        <span className='description'>¡Ven y descubre la magia de Córdoba, una ciudad que te recibirá con los brazos abiertos y te dejará con recuerdos inolvidables!</span>
        </div> */}
      </div>
      <div className='information' id="section2">
        <div className="blueLine"></div>
        <div className='subtitleInfo'><p><span>Una provincia,</span><br></br><span className='blue_span'>mil aventuras</span></p></div>
        <div className='descriptionInfo'><p className='pDescription'>¿Cómo definimos a Córdoba? Una ciudad vibrante y llena de historia que te cautivará desde el primer momento. Sumérgete en sus calles empedradas, rodeadas de arquitectura colonial y moderna, mientras disfrutas del cálido ambiente que solo Córdoba puede ofrecer. Descubre nuestra rica cultura a través de sus numerosos museos, galerías de arte y festivales que celebran la música, el teatro y la danza. Déjate sorprender por la pasión del tango en las milongas, o sumérgete en la intensidad del fútbol en los estadios locales.Explora la naturaleza en los paisajes espectaculares de las Sierras de Córdoba, donde podrás disfrutar de actividades al aire libre como senderismo, ciclismo y rafting. O relájate en las tranquilas aguas de sus ríos y lagos, perfectos para un día de picnic o para practicar deportes acuáticos. Y por supuesto, no te pierdas la deliciosa gastronomía cordobesa, que combina sabores auténticos con influencias de todo el mundo. Desde los clásicos asados argentinos hasta las exquisitas empanadas y dulces regionales, cada bocado es una experiencia única.</p></div>
      </div>
      {/* Slider */}
      <div className='slider' id="section3">
        <div className='subtitleSlider'>
          <p>   <span>¿Aún con dudas?</span><br />
            <span className='blue_span'>¡Echa un vistazo!</span>  </p>
          <Slider />
        </div>
      </div>
      {/* Fin slider */}
      {/* Formulario */}
      <div id="section4">
      <div className='subtitleForm'>¡Contáctanos!</div>
      <div className='descriptionForm'><p className='pDescription'>Por cualquier duda, por información o solo por saludar, ¡estaremos encantandos con tu mensaje!</p></div>
        <div id="formElement"><Form /></div>
      </div>
      {/* Fin formulario */}
      <div id="section5">
        <Footer />
        </div>
    </div>
  );
}

export default App;
