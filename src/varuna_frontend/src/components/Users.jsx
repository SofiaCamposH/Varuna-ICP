import React, { useState } from 'react';

function Users() {
    const [plantas, setPlantas] = useState([]);
    const [nombre, setNombre] = useState('');
    const [ubicacion, setUbicacion] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const id = generateRandomID();
        const planta = { id, nombre, ubicacion };
        setPlantas([...plantas, planta]);
        setNombre('');
        setUbicacion('');
    };

    const generateRandomID = () => {
        return Math.floor(Math.random() * 1000000); // Genera un número aleatorio entre 0 y 999999
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-4">Añadir Planta Tratadora</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
                <div className="mb-4">
                    <label htmlFor="nombre" className="block text-gray-700">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        className="mt-1 p-2 w-full border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="ubicacion" className="block text-gray-700">Ubicación:</label>
                    <input
                        type="text"
                        id="ubicacion"
                        value={ubicacion}
                        onChange={(e) => setUbicacion(e.target.value)}
                        className="mt-1 p-2 w-full border rounded"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Añadir Planta
                </button>
            </form>

            <h2 className="text-2xl font-bold mt-8">Lista de Plantas Tratadoras</h2>
            <ul className="w-full max-w-md mt-4">
                {plantas.map((planta) => (
                    <li key={planta.id} className="bg-white p-4 rounded shadow mb-2">
                        
                        <p><strong>Nombre:</strong> {planta.nombre}</p>
                        <p><strong>Ubicación:</strong> {planta.ubicacion}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Users;