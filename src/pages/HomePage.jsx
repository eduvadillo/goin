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
          {espacio}GPT-3 Escribiendo sobre Goin, la StartUp de fintech {espacio}
          <a href='https://www.linkedin.com/in/edu-vadillo/' target='_blank'>
            <BsLinkedin className='linkImg' />
          </a>
          <BsArrowLeft className='arrowImg' />
        </h1>
        <h2 className='h2Goin'>Estará David Riudor, ceo de Goin, contento con el resultado?</h2>
        <h3 className='h3Goin'>
          Goin ha quedado bastante bien parado cuando le hemos dado la siguiente premisa:
        </h3>
        <p className='p1Goin'>
          Goin es una aplicación fintech que tiene como lema: Consíguelo ahorrando, conseguir tus
          objetivos nunca fue tan fácil. Según su web, Goin es la primera aplicación en España que
          te permite ahorrar de forma automática, sin complicaciones. Para ello, cuenta con un
          sistema de micro-aportaciones que te ayuda a reducir el gasto diario y a acumular una
          buena cantidad de dinero en poco tiempo.
        </p>
        <p className='p2Goin'>
          Para registrarse en Goin, sólo tienes que acceder a su web, introducir tus datos
          personales y seleccionar el importe que quieres ahorrar cada día. Goin te permitirá
          ahorrar entre 5 y 50 euros diarios, dependiendo de tu capacidad de ahorro. Una vez
          registrado, la aplicación se encargará de realizar las micro-aportaciones de dinero
          automáticamente, sin que tengas que preocuparte de nada. Goin es una aplicación ideal para
          todo tipo de usuarios, ya sean principiantes en el mundo del ahorro o expertos. Además, es
          perfecta para todos aquellos que quieran conseguir un objetivo financiero, ya sea ahorrar
          para comprar una casa, un coche o cualquier otro objetivo.
        </p>
        <p className='p3Goin'>Si has llegado aquí, click abajo, para unas preguntas rápidas</p>
        <div className='divButton'>
          <Link to='/david-riudor-goin'>
            <button className='buttonHome'>
              <p>Preguntas</p>
            </button>
          </Link>
        </div>
      </div>
      <div className='App2'></div>
      <div className='App2'></div>
    </>
  );
}

export default HomePage;
