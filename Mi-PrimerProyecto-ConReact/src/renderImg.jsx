import React, { useState, useEffect } from 'react';
import "./App.css";
import Pagination from './pagination.jsx';
import Buscador from './buscador.jsx';

const urlApi = "https://valorant-api.com/v1/agents?isPlayable=true";

// Componente Modal
function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-blue-900 p-6 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-white">Agentes Seleccionados</h2>
                    <button onClick={onClose} className="text-white hover:text-blue-200">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
}

function ApiValorant() {
    const [agents, setAgents] = useState([]);
    const [buscador, setBuscador] = useState('');
    const [rolSeleccionado, setRolSeleccionado] = useState('');
    const [agentesSeleccionados, setAgentesSeleccionados] = useState(() => {
        const saved = localStorage.getItem("agentesSeleccionados");
        return saved ? JSON.parse(saved) : [];
    });
    const [modalOpen, setModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [paginacion, setPaginacion] = useState(6);
    const [currentPage, setCurrentPage] = useState(1);
    const [showWarning, setShowWarning] = useState(false);
    const firtIndex = currentPage * paginacion - paginacion;
    const lastIndex = currentPage * paginacion;

    useEffect(() => {
        fetch(urlApi)
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setAgents(data.data)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
            
    }, []);
    useEffect(() => {
        localStorage.setItem("agentesSeleccionados", JSON.stringify(agentesSeleccionados));
    }, [agentesSeleccionados]);
    const handleBuscadorChange = (newValue) => {
        setBuscador(newValue);
    
    };

    const filtrarAgentes = (agentes) => {
        return agentes.filter((agente) => {
            const coincideNombre = agente.displayName.toLowerCase().includes(buscador.toLowerCase());
            const coincideRol = rolSeleccionado === '' || agente.role?.displayName === rolSeleccionado;
            return coincideNombre && coincideRol;
        });
    };

    const agentesFiltrados = filtrarAgentes(agents);

    const roles = [...new Set(agents.map(agent => agent.role?.displayName).filter(Boolean))];

    const toggleAgenteSeleccionado = (agent) => {
        setAgentesSeleccionados(prevSelected => {
            if (prevSelected.some(a => a.uuid === agent.uuid)) {
                const newSelected = prevSelected.filter(a => a.uuid !== agent.uuid);
                setShowWarning(false);
                return newSelected;
            } else {
                if (prevSelected.length < 5) {
                    const newSelected = [...prevSelected, agent];
                    if (newSelected.length === 5) {
                        setShowWarning(true);
                    }
                    return newSelected;
                }
                return prevSelected;
            }
        });
    };
    const closeWarning = () => {
        setShowWarning(false);
    };

    const isAgenteSeleccionado = (agent) => {
        return agentesSeleccionados.some(a => a.uuid === agent.uuid);
    };

    return (
        <div className="container mx-auto px-4">
            <div className="mb-8 mt-4">
                <div className="flex justify-between items-center space-x-4">
                    <div className="flex-grow max-w-[70%]"> {/* Ajusta el max-w según necesites */}
                        <div className="relative">
                            <select
                                id="role-select"
                                value={rolSeleccionado}
                                onChange={(e) => setRolSeleccionado(e.target.value)}
                                className="block appearance-none w-full has-background-text-00 border border-red-700 text-white py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-red-700 focus:border-red-500 transition duration-300"
                            >
                                <option value="">Todos los roles</option>
                                {roles.map(rol => (
                                    <option key={rol} value={rol}>{rol}</option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blue-200">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex-grow-0"> {/* Esto mantendrá el Buscador a la derecha */}
                        <Buscador buscador={buscador} handleChange={handleBuscadorChange} />
                    </div>
                </div>
                {showWarning && (
                    <div className="fixed right-4 bottom-10 w-72 notification is-warning bg-red-500 border border-black  rounded-lg overflow-hidden h-48 transition-all  ease-in-out z-50">
                        <button className="delete absolute top-2 right-2" onClick={closeWarning}></button>
                        <div className="p-1">
                            <p className="font-bold mb-2">Límite alcanzado</p>
                            <p className="text-xl">Has seleccionado 5 agentes. No puedes añadir más a tu equipo.</p>
                        </div>
                    </div>
                )}
            </div>
            <div className="mb-4 flex justify-between items-center">
                <button
                    onClick={() => setModalOpen(true)}
                    className="bg-gray-800 border-2 border-red-600 text-white font-bold py-2 px-4 rounded w-48 transition duration-300 ease-in-out hover:bg-red-600 hover:text-white"
                >
                    Team {agentesSeleccionados.length}/5
                </button>
            </div>
            <div>
            <Pagination paginacion={paginacion} 
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage}
            total={agents.length}
            />
            </div>
            {loading ? (
                <div className="flex justify-center items-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
    {agentesFiltrados.length === 0 ? (
        <div className="col-span-full flex justify-center items-center h-40">
            <p className="text-xl text-white text-center">
                No se encontraron agentes que coincidan con la búsqueda
            </p>
        </div>
    ) : (
        agentesFiltrados.slice(firtIndex, lastIndex).map((agent) => (
            <div key={agent.uuid} className="bg-gradient-to-br from-gray-900 to-blue-950 rounded-xl shadow-lg">
                <div className="relative">
                    <img src={agent.fullPortrait || agent.displayIcon} alt={agent.displayName} className="w-full h-100 overflow-hidden transform transition duration-300 hover:scale-125 " />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-500 to-transparent p-4">
                        <h3 className="text-xl font-bold text-white">{agent.displayName}</h3>
                        <p className="text-blue-200">{agent.role?.displayName}</p>
                    </div>
                </div>
                <div className="p-4">
                    <p className="text-sm text-blue-200 mb-4 h-20 overflow-y-auto">{agent.description}</p>
                    <button
                        onClick={() => toggleAgenteSeleccionado(agent)}
                        disabled={agentesSeleccionados.length >= 5 && !isAgenteSeleccionado(agent)}
                        className={`w-full font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105 ${
                            isAgenteSeleccionado(agent)
                                ? 'bg-red-600 hover:bg-red-700 text-white'
                                : agentesSeleccionados.length >= 5
                                ? 'button is-warning is-light'
                                : 'bg-blue-600 border-2 border-black hover:bg-blue-700 text-white'
                        }`}
                    >
                        {isAgenteSeleccionado(agent) ? 'Quitar' : 'Agregar'}
                    </button>
                </div>
            </div>
        ))
    )}
</div>
            )}
            <Pagination paginacion={paginacion}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                total={agents.length}
            />
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {agentesSeleccionados.map((agent) => (
                        <div key={agent.uuid} className="bg-blue-800 p-4 rounded-lg flex items-center space-x-4">
                            <img src={agent.displayIcon} alt={agent.displayName} className="w-16 h-16 rounded-full object-cover" />
                            <div>
                                <h3 className="text-lg font-semibold text-white">{agent.displayName}</h3>
                                <p className="text-blue-200">{agent.role?.displayName}</p>+
                                <button
                                    onClick={() => toggleAgenteSeleccionado(agent)}
                                    className="bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition duration-300"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </Modal>
        </div>
    );
}

export default ApiValorant;