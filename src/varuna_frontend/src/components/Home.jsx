import varunaLogo from '../imagenes/VarunaLogo.jpeg';
import notificasion from '../imagenes/notificasion.jpeg';
import lupa from '../imagenes/lupita.png';
import grafica from '../imagenes/Grafica (2).jpeg';
import mensaje from '../imagenes/mensajito.jpeg';
import personas from '../imagenes/personas.jpeg';
import documento from '../imagenes/documento.png';
import post from '../imagenes/post.png';
import archivo from '../imagenes/archivoSub.png';
import iris from '../imagenes/iris.jpeg';
import usuario1 from '../imagenes/usuariosVa.jpeg';
import admid from '../imagenes/admid.jpeg';
import chat from '../imagenes/chatBot.jpeg';
import gerente from '../imagenes/gerente.jpeg';
import gerente1 from '../imagenes/gerenteMujer.jpeg';
import sierra from '../imagenes/sierra.jpeg'

function App() {
  return (
    <div className="bg-gray-100 font-sans antialiased min-h-screen flex flex-col">
      {/* Navbar */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md p-6">
          <nav className="space-y-4">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="bg-blue-600 text-white p-3 rounded-lg flex justify-between items-center">
                <span>Panel</span>
                <div className="bg-blue-800 rounded-full h-6 w-6 flex items-center justify-center">1</div>
              </div>
              <div className="mt-4 space-y-4">
                <div className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <div className="flex items-center">
                    <div className="bg-purple-500 rounded-full h-6 w-6 flex items-center justify-center mr-2">
                      <img src={documento} alt="Resultados" className="h-4 w-4" />
                    </div>
                    <span>Resultados</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-6 w-6 flex items-center justify-center">3</div>
                </div>
                <div className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <div className="flex items-center">
                    <div className="bg-green-500 rounded-full h-6 w-6 flex items-center justify-center mr-2">
                      <img src={post} alt="Posts" className="h-4 w-4" />
                    </div>
                    <span>Posts</span>
                  </div>
                  <div className="bg-red-500 text-white rounded-full px-2 py-1 text-xs">NEW</div>
                </div>
                <div className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <div className="flex items-center">
                    <div className="bg-blue-500 rounded-full h-6 w-6 flex items-center justify-center mr-2">
                      <img src={archivo} alt="Archivos subidos" className="h-4 w-4" />
                    </div>
                    <span>Archivos subidos</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-6 w-6 flex items-center justify-center">3</div>
                </div>
              </div>
            </div>

            {/* Usuarios */}
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="bg-blue-600 text-white p-3 rounded-lg flex justify-between items-center">
                <span>Usuarios</span>
                <div className="bg-blue-800 rounded-full h-6 w-6 flex items-center justify-center">8</div>
              </div>
              <div className="mt-4 space-y-4">
                <div className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <img src={iris} alt="Equipo VARUNA" className="rounded-full mr-2 w-7 h-7" />
                  <span className="text-gray-700">IRIS</span>
                  <span className="ml-auto bg-green-500 rounded-full w-3 h-3"></span>
                </div>
                <div className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <img src={usuario1} alt="Usuario 1" className="rounded-full mr-2  w-7 h-7" />
                  <span className="text-gray-700">Usuario 1</span>
                  <span className="ml-auto bg-gray-400 rounded-full w-3 h-3"></span>
                </div>
                <div className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <img src={admid} alt="Admin" className="rounded-full mr-2 w-7 h-7" />
                  <span className="text-gray-700">Admin</span>
                  <span className="ml-auto bg-green-500 rounded-full w-3 h-3"></span>
                </div>
                <div className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <img src={chat} alt="Chatbot" className="rounded-full mr-2 w-7 h-7" />
                  <span className="text-gray-700">Chatbot</span>
                  <span className="ml-auto bg-green-500 rounded-full w-3 h-3"></span>
                </div>
                <div className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <img src={gerente} alt="Gerente" className="rounded-full mr-2 w-7 h-7" />
                  <span className="text-gray-700">Gerente</span>
                  <span className="ml-auto bg-yellow-400 rounded-full w-3 h-3"></span>
                </div>
                <div className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <img src={gerente1} alt="Usuario 2" className="rounded-full mr-2 w-7 h-7" />
                  <span className="text-gray-700">Usuario 2</span>
                  <span className="ml-auto bg-yellow-400 rounded-full w-3 h-3"></span>
                </div>
              </div>
            </div>

            <div >
              <aside className="g-white rounded-lg shadow-lg p-4">
                <div className="flex items-center space-x-2 mb-6">
                  <img src={sierra} alt="Logo" className="h-10 w-10 rounded-full " />
                  <div>
                    <h1 className="text-lg font-semibold">La Sierra - Planta Tratadora</h1>
                    <p className="text-sm text-gray-500">lasierra@gmail.com</p>
                  </div>
                </div>
                <nav>
                  <ul>
                    <li className="mb-4">
                      <a href="#" className="flex items-center space-x-3 text-blue-500">
                        <span className="text-xl">
                          <i className="fas fa-list"></i>
                        </span>
                        <span>Categorías</span>
                        <span className="ml-auto bg-blue-100 text-blue-500 rounded-full px-3 py-1 text-xs">1</span>
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#" className="flex items-center space-x-3 text-red-500">
                        <span className="text-xl">
                          <i className="fas fa-tag"></i>
                        </span>
                        <span>Tags</span>
                        <span className="ml-auto bg-red-100 text-red-500 rounded-full px-3 py-1 text-xs">1</span>
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#" className="flex items-center space-x-3 text-green-500">
                        <span className="text-xl">
                          <i className="fas fa-comments"></i>
                        </span>
                        <span>Comentarios</span>
                        <span className="ml-auto bg-green-100 text-green-500 rounded-full px-3 py-1 text-xs">5</span>
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#" className="flex items-center space-x-3 text-yellow-500">
                        <span className="text-xl">
                          <i className="fas fa-cog"></i>
                        </span>
                        <span>Configuración</span>
                      </a>
                    </li>
                  </ul>
                </nav>
                <div className="mt-6">
                  <a href="#" className="flex items-center space-x-3 text-red-500">
                    <span className="text-xl">
                      <i className="fas fa-sign-out-alt"></i>
                    </span>
                    <span>Cerrar Sesión</span>
                  </a>
                </div>
              </aside>
            </div>

          </nav>
        </aside>

        {/* Main content */}
        <div className="flex-1 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Tarjetas de estadísticas */}
          <div className="bg-white p-4 shadow-md rounded-md">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-gray-600">Resultados</h4>
                <span className="text-2xl font-semibold">1,345</span>
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Ver</button>
            </div>
          </div>

          <div className="bg-white p-4 shadow-md rounded-md">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-gray-600">Publicaciones</h4>
                <span className="text-2xl font-semibold">12,456</span>
              </div>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md">Ver</button>
            </div>
          </div>

          <div className="bg-white p-4 shadow-md rounded-md">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-gray-600">Archivos</h4>
                <span className="text-2xl font-semibold">1,000</span>
              </div>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md">Ver</button>
            </div>
          </div>

          {/* Gráficos y tablas */}
          <div className="col-span-2 bg-white p-4 shadow-md rounded-md">
            <div className="text-center">Gráfico de datos del agua</div>
          </div>

          <div className="bg-white p-4 shadow-md rounded-md">
            <div className="text-center">Estadísticas Web / Aplicación</div>
          </div>

          <div className="bg-white p-4 shadow-md rounded-md">
            <div className="text-center">Costos x Litro</div>
          </div>

          {/* Más tarjetas y contenido */}
        </div>
      </div>
    </div>
  );
}

export default App;