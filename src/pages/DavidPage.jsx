import "../App.css";
import { Link } from "react-router-dom";
import { BsLinkedin, BsArrowRight, BsArrowLeft } from "react-icons/bs";

function HomePage() {
  let espacio = ` `;
  return (
    <>
      <div className='App'></div>
      <div className='borderAllText'>
        <h1 className='h1Goin'>
          <BsArrowRight className='arrowImg' />
          <a href='https://www.linkedin.com/in/edu-vadillo/' target='_blank'>
            <BsLinkedin className='linkImg' />
          </a>
          {espacio}Preguntas para David Riudor, ceo de Goin{espacio}
          <a href='https://www.linkedin.com/in/edu-vadillo/' target='_blank'>
            <BsLinkedin className='linkImg' />
          </a>
          <BsArrowLeft className='arrowImg' />
        </h1>
        <h2 className='h2Goin'>
          ¿Necesitais un programador con habilidades SEO, Marketing y visión de negocio en Goin?
        </h2>
        <h3 className='h3Goin'>
          Ahora de verdad David, me conformo con que conectemos y me expliques con detalle como
          desarrollasteis la waiting list de Goin
        </h3>
        <p className='p1Goin'>¿Qué campos tenía que rellenar el usuario para registrarse?</p>
        <p className='p1Goin'>
          ¿Comprobabais con confirmación de mail, sms o de alguna otra manera que los usuarios no
          pudieran "hacer trampas" para avanzar más rapido en la lista?
        </p>
        <p className='p1Goin'>
          ¿Cuantas posiciones avanzaban por registro de usuario, y por contestar las preguntas?
          ¿Habian más parámetros que te hacían avanzar?
        </p>
        <p className='p1Goin'>
          Crees que si es desde una web y no una app puede funcionar tambíen?
        </p>
        <p className='p1Goin'>
          Por último, cualquier cosa que crees que pueda ser útil para intentar replicar con éxito
          una waiting list, estaré agradecido
        </p>
        <div className='divButton'>
          <Link to='/david-riudor-goin'>
            <button className='buttonHome'>Inicio</button>
          </Link>
        </div>
      </div>
      <div className='App2'></div>
      <div className='App2'></div>
    </>
  );
}

export default HomePage;
