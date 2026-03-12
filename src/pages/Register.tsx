import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Register() {
    const navigate = useNavigate();
    const [isServiceProvider, setIsServiceProvider] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/home', { replace: true });
    };

    return (
        <div className="flex flex-col min-h-[100dvh] bg-[#f5f5f7] overflow-y-auto pb-8">
            <div className="pt-14 px-6 pb-6 bg-[#f5f5f7] sticky top-0 z-20 backdrop-blur-xl bg-opacity-80">
                <h1 className="text-3xl font-bold text-black tracking-tight">Registro</h1>
                <p className="text-gray-500 text-[15px] mt-1">Completa tu perfil para acceder.</p>
            </div>

            <div className="px-4">
                <motion.form
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >
                    {/* iOS Settings Group 1 */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                        <div className="flex items-center px-4 py-3 border-b border-gray-100">
                            <span className="w-24 text-[15px] text-black">Nombre</span>
                            <input type="text" required className="flex-1 bg-transparent text-[15px] outline-none placeholder-gray-300" placeholder="Juan Pérez" />
                        </div>
                        <div className="flex items-center px-4 py-3 border-b border-gray-100">
                            <span className="w-24 text-[15px] text-black">Dirección</span>
                            <input type="text" required className="flex-1 bg-transparent text-[15px] outline-none placeholder-gray-300" placeholder="Calle Ejemplo 123" />
                        </div>
                        <div className="flex items-center px-4 py-3 border-b border-gray-100">
                            <span className="w-24 text-[15px] text-black">Edad</span>
                            <input type="number" required className="flex-1 bg-transparent text-[15px] outline-none placeholder-gray-300" placeholder="Años" />
                        </div>
                        <div className="flex items-center px-4 py-3 cursor-pointer">
                            <span className="w-24 text-[15px] text-black">Intereses</span>
                            <select required className="flex-1 bg-transparent text-[15px] text-gray-500 outline-none appearance-none">
                                <option value="" disabled selected>Seleccionar...</option>
                                <option value="cultura">Cultura</option>
                                <option value="deporte">Deporte</option>
                                <option value="salud">Salud</option>
                                <option value="servicios">Servicios</option>
                            </select>
                            <ChevronRight className="w-5 h-5 text-gray-300 pointer-events-none" />
                        </div>
                    </div>

                    {/* iOS Settings Group 2 */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                        <div className="flex items-center px-4 py-3 border-b border-gray-100">
                            <span className="w-24 text-[15px] text-black">Facebook</span>
                            <input type="text" required className="flex-1 bg-transparent text-[15px] outline-none placeholder-gray-300" placeholder="Perfil o enlace" />
                        </div>
                        <div className="flex items-center px-4 py-3">
                            <span className="w-24 text-[15px] text-black">Correo</span>
                            <input type="email" className="flex-1 bg-transparent text-[15px] outline-none placeholder-gray-300" placeholder="Opcional" />
                        </div>
                    </div>

                    {/* iOS Style Toggle Switch Group */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm px-4 py-3 flex items-center justify-between">
                        <span className="text-[15px] text-black font-medium">Ofrecer servicios en EDECOM</span>
                        <div
                            className={`w-12 h-7 rounded-full p-1 cursor-pointer transition-colors duration-300 ease-in-out ${isServiceProvider ? 'bg-green-500' : 'bg-gray-200'}`}
                            onClick={() => setIsServiceProvider(!isServiceProvider)}
                        >
                            <div className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${isServiceProvider ? 'translate-x-5' : 'translate-x-0'}`}></div>
                        </div>
                    </div>

                    {/* INE Upload */}
                    {isServiceProvider && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            className="bg-white rounded-2xl p-4 shadow-sm flex flex-col items-center justify-center space-y-3"
                        >
                            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-blue-500 mb-1">
                                <Camera className="w-6 h-6" />
                            </div>
                            <div className="text-center">
                                <h3 className="font-semibold text-[15px] text-black">Foto de tu INE</h3>
                                <p className="text-[13px] text-gray-400 mt-1 max-w-[250px] mx-auto">Obligatorio brindar certeza subiendo el frente de tu credencial.</p>
                            </div>
                            <button type="button" className="text-blue-500 font-medium text-[15px] px-4 py-2 bg-blue-50 rounded-full mt-2 active:opacity-50 transition-opacity">
                                Elegir foto
                            </button>
                        </motion.div>
                    )}

                    <div className="pt-4 px-2">
                        <p className="text-[12px] text-gray-400 text-center mb-6 px-4">
                            Al continuar, aceptas nuestros Términos de Servicio y Avisos de Privacidad.
                        </p>
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center bg-black text-white py-4 rounded-full font-semibold text-[17px] shadow-lg transition-all active:scale-95"
                        >
                            Comenzar
                        </button>
                    </div>

                </motion.form>
            </div>
        </div>
    );
}
