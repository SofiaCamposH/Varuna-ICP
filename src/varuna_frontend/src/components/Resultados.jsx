import React from 'react';
import Microplastics from './Microplastics';

const Resultados = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Resultados</h1>
            <table className="table-auto border-collapse border border-gray-200 w-full mb-4">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">ID</th>
                        <th className="border border-gray-300 px-4 py-2">Fecha y Hora</th>
                        <th className="border border-gray-300 px-4 py-2">Concentración</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Aquí se mostrarán las filas de datos */}
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">1</td>
                        <td className="border border-gray-300 px-4 py-2">2024-07-01 12:00:00</td>
                        <td className="border border-gray-300 px-4 py-2">100</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">2</td>
                        <td className="border border-gray-300 px-4 py-2">2024-07-02 12:00:00</td>
                        <td className="border border-gray-300 px-4 py-2">95</td>
                    </tr>
                    {/* Añade más filas según sea necesario */}
                </tbody>
            </table>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4">
                Actualizar Datos
            </button>
            <Microplastics />
        </div>
    );
};

export default Resultados;