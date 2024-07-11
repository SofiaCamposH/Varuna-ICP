import React from 'react';
import { ConnectButton, ConnectDialog, useConnect } from '@connect2ic/react';
import varunaFondo from '../imagenes/varunaFondo1.jpeg';
import varunaLogo from '../imagenes/logo.jpeg';
import fotoRara from '../imagenes/fotoRara.png';
import vaso from '../imagenes/vaso-removebg-preview.png';
import diagrma from '../imagenes/diagrma.png';
import ImageCarousel from './ImageCarousel';
import naturaleza from '../imagenes/naturaleza.png';
import logo from '../imagenes/img/logo.png';
import locationIcon from '../imagenes/img/ubicacion.png';
import emailIcon from '../imagenes/img/correo.png';
import phoneIcon from '../imagenes/img/telefono.png';
import facebookIcon from '../imagenes/img/facebook.png';
import twitterIcon from '../imagenes/img/twitter.png';
import instagramIcon from '../imagenes/img/instagram.png';
import linkedinIcon from '../imagenes/img/linkedin.png';
import youtubeIcon from '../imagenes/img/youtube.png';
import hainLogo from '../imagenes/img/azul.jpeg';
import chain from '../imagenes/img/chain.png';

const LandingPage = ({ onEnter }) => {
  const { isConnected } = useConnect();

  return (
    <div>
      {/* Barra de navegación fija */}
      <div className="fixed top-0 w-full z-50 bg-white shadow-md">
        <div className="menu flex justify-between p-6">
          <div className="logo">
            <a href="#top">
              <img src={varunaLogo} alt="logo" style={{ width: '60px', height: 'auto' }} />
            </a>
          </div>
          <div className="barraDeNavegacion flex items-center space-x-10">
            <ul className="flex space-x-10">
              <li><a href="#quienes-somos">Inicio</a></li>
              <li><a href="#beneficios">¿Quiénes Somos?</a></li>
            </ul>
            <ConnectButton />
            {isConnected && (
              <button className="bg-blue-500 text-white rounded-lg px-4 py-2" onClick={onEnter}>
                Iniciar Sesión
              </button>
            )}
            <ConnectDialog />
          </div>
        </div>
      </div>

      {/* Sección de héroe */}
      <div id="top"
        className="hero flex justify-center items-center bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(${varunaFondo})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold">VARUNA</h1>
          <p className="mt-4 text-lg md:text-2xl text-center">
            Bienvenido a Varuna, un proyecto innovador dedicado a <br /> la purificación avanzada del agua.
            Nuestro objetivo es <br /> revolucionar la industria tratadora de agua.<br />
            Este proceso permitirá reutilizar el agua tratada en diversos <br /> sectores,
            promoviendo la sostenibilidad ambiental <br /> y la eficiencia en el uso de recursos.
          </p>
          <button className="mt-6 text-white rounded-lg px-4 py-2" style={{ backgroundColor: '#89C33E' }}>
            Comenzar ahora
          </button>
        </div>
      </div>

      {/* Sección de contenido */}
      <div id="quienes-somos" className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row items-center">
          {/* Texto */}
          <div className="md:w-1/2 p-4">
            <h1 className="text-4xl font-bold mb-4">¿Qué es Varuna?</h1>
            <p className="text-lg mb-6">
              Varuna es una iniciativa que busca transformar el agua residual tratada en
              recursos valiosos. Nos enfocamos en limpiar el agua de microplásticos y microorganismos para hacerla
              apta para su uso en múltiples sectores, incluyendo agricultura, empresas que requieren grandes
              volúmenes de agua para sus procesos industriales y fabricación de plásticos.
            </p>
            <button
              className="px-6 py-2 bg-white text-blue-500 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-300"
            >
              Nuestra Tecnología
            </button>
          </div>
          {/* Imagen */}
          <div className="md:w-1/2 p-4">
            <div className="relative w-full h-63">
              <img src={fotoRara} style={{ width: '450px', height: 'auto' }} alt="Microplásticos en agua" />
            </div>
          </div>
        </div>
      </div>

      {/* Sección: ¿Cómo lo Hacemos? */}
      <section className="text-center py-16" style={{ backgroundColor: '#E9F9FF' }}>
        <h2 className="text-3xl font-semibold mb-4">¿Cómo lo Hacemos?</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          En Varuna, combinamos la potencia de la inteligencia artificial con tecnologías avanzadas de filtración para capturar y eliminar eficazmente los microplásticos de las aguas residuales. Nuestro enfoque no solo es efectivo, sino también eficiente, asegurando que las aguas tratadas cumplan con los estándares más rigurosos de calidad.
        </p>
        <div>
          <ImageCarousel />
        </div>
      </section>

      {/* Sección: Beneficios para el medio ambiente y la sociedad */}
      <section id="beneficios" className="bg-blue-600 text-white py-16" style={{ backgroundColor: '#00ADED' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-center"> Beneficios para el medio ambiente<span className="text-blue-900"> y la sociedad</span></h2>
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/2 md:pr-8 text-center md:text-left">
              <p className="max-w-3xl text-lg mb-8 text-black">
                En Varuna, ofrecemos soluciones innovadoras que transforman las aguas residuales de las plantas tratadoras en recursos valiosos para empresas, agricultura y otros sectores industriales. Nuestra tecnología avanzada utiliza inteligencia artificial y sistemas de filtración especializados para eliminar eficazmente los microplásticos. Al recuperar y reciclar estas aguas tratadas, Varuna no solo ayuda a conservar los recursos hídricos esenciales, sino que también reduce significativamente la contaminación plástica en nuestros entornos acuáticos. Nuestro trabajo beneficia directamente a las comunidades al proporcionar un suministro de agua más limpio y seguro para el consumo humano y actividades económicas esenciales.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-start space-x-4">
              <div className="w-64 h-64 bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={varunaFondo} alt="Imagen 4" className="w-full h-full object-cover" />
              </div>
              <div className="w-64 h-64 bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={naturaleza} alt="Imagen 5" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Beneficios para el medio ambiente y la sociedad */}
      <section className="bg-blue-600 text-white py-16" style={{ backgroundColor: '#00ADED' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-center"> Beneficios para el medio ambiente<span className="text-blue-900"> y la sociedad</span></h2>
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/2 md:pr-8 text-center md:text-left">
              <p className="max-w-3xl text-lg mb-8 text-black">
                En Varuna, ofrecemos soluciones innovadoras que transforman las aguas residuales de las plantas tratadoras en recursos valiosos para empresas, agricultura y otros sectores industriales. Nuestra tecnología avanzada utiliza inteligencia artificial y sistemas de filtración especializados para eliminar eficazmente los microplásticos. Al recuperar y reciclar estas aguas tratadas, Varuna no solo ayuda a conservar los recursos hídricos esenciales, sino que también reduce significativamente la contaminación plástica en nuestros entornos acuáticos. Nuestro trabajo beneficia directamente a las comunidades al proporcionar un suministro de agua más limpio y seguro para el consumo humano y actividades económicas esenciales.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-start space-x-4">
              <div className="w-64 h-64 bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={varunaFondo} alt="Imagen 4" className="w-full h-full object-cover" />
              </div>
              <div className="w-64 h-64 bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={naturaleza} alt="Imagen 5" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Tecnología Utilizada */}
      <section className="p-8 bg-blue-100">
        <div className="max-w-6xl mx-auto flex justify-between">
          <div className="w-1/3">
            <h2 className="text-3xl font-bold text-blue-900">Tecnología <span className="text-blue-400">utilizada</span></h2>
            <ul className="mt-4 list-disc list-inside text-blue-900">
              <li>Beneficios para el medio ambiente y la sociedad</li>
              <li>Tecnología Arduino</li>
              <li>Microscopios Especializados</li>
              <li>Tecnología de Filtración Avanzada</li>
              <li>Sistemas de Monitoreo Continuo</li>
            </ul>
          </div>
          <div className="max-w-6xl mx-auto flex justify-between">
            <img src={vaso} alt="Imagen de tecnología" className="w-1/3" />
            <div className="w-2/3 ml-8">
              <h3 className="text-2xl font-bold text-blue-900">Componentes de Nuestros Sistemas:</h3>
              <ul className="mt-4 list-disc list-inside text-blue-900">
                <li><strong>Sensores Avanzados:</strong> Utilizamos sensores de última generación para medir parámetros clave como la concentración de microplásticos, pH, turbidez y otros indicadores de calidad del agua.</li>
                <li><strong>Software de Gestión:</strong> Desarrollamos software especializado para el control y la gestión de datos recopilados por nuestros sistemas, permitiendo análisis detallados y optimización de nuestros procesos de tratamiento.</li>
          <li><strong>Materiales de Filtración Innovadores:</strong> Incorporamos materiales de filtración innovadores y respetuosos con el medio ambiente, que mejoran la eficiencia de captura de microplásticos sin generar residuos nocivos adicionales.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* Sección del Diagrama */}
    <section className="p-8 bg-white">
        <div className="max-w-6xl mx-auto flex justify-center">
            <img src={diagrma} alt="Diagrama del sistema" className="w-2/3" />
        </div>
    </section>

    {/*Sección de Contacto */}

    <footer className="bg-cover text-white py-8 mt-10" style={{ backgroundImage: `url(${hainLogo})` }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
            <img src={logo} alt="Varuna Logo" className="mb-4" />
            <p>
              "Varuna" es un proyecto que utiliza IA y otras tecnologías para eliminar microplásticos de las
              aguas tratadas, mejorando su calidad para usos empresariales y agrícolas, y contribuyendo al
              cuidado del medio ambiente.
            </p>
          </div>
          <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
            <h3 className="font-bold mb-2">Get in Touch</h3>
            <p>
              <img src={locationIcon} alt="Location" className="w-7 h-7 inline-block mr-2" />
              Av. Gerónimo de la Cueva s/n, Villas del Río, 20126 Aguascalientes, Ags.
            </p>
            <p>
              <img src={emailIcon} alt="Email" className="w-7 h-7 inline-block mr-2" />
              <a href="mailto:varunaia@outlook.com" className="text-white">varunaia@outlook.com</a>
            </p>
            <p>
              <img src={phoneIcon} alt="Phone" className="w-7 h-7 inline-block mr-2" />
              <a href="tel:+52134567892" className="text-white">+52 4499253920</a>
            </p>
          </div>
          <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
            <h3 className="font-bold mb-2">Contáctanos</h3>
            <div className="flex justify-center space-x-5">
              <a href="#" className="text-white">
                <img src={facebookIcon} alt="Facebook" className="w-6 h-6 inline-block" />
              </a>
              <a href="#" className="text-white">
                <img src={twitterIcon} alt="Twitter" className="w-6 h-6 inline-block" />
              </a>
              <a href="#" className="text-white">
                <img src={instagramIcon} alt="Instagram" className="w-6 h-6 inline-block" />
              </a>
              <a href="#" className="text-white">
                <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6 inline-block" />
              </a>
              <a href="#" className="text-white">
                <img src={youtubeIcon} alt="YouTube" className="w-6 h-6 inline-block" />
              </a>
            </div>
            <p className="mt-2 text-center">Síguenos en todas nuestras redes sociales.</p>
          </div>
          <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
            <h3 className="font-bold mb-2">Enlaces</h3>
            <ul>
              <li>
                <a href="#" className="text-white">Política de privacidad</a>
              </li>
              <li>
                <a href="#" className="text-white">Cookies</a>
              </li>
            </ul>
            <div className="mt-4">
              <img src={chain} alt="On-Chain Hosted 100%" />  {/* Aquí está la imagen importada */}
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>2022 © VARUNA - EQUIPO: IRIS</p>
        </div>
      </div>
    </footer>

    </div>
  );
  }



export default LandingPage;