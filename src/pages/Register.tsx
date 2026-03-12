import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserCheck, UploadCloud, FileText } from 'lucide-react';
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
        <div className="flex flex-col min-h-screen bg-gray-50 overflow-y-auto pb-12">
            <div className="p-6 bg-blue-900 text-white shadow-md relative overflow-hidden rounded-b-3xl">
                <h1 className="text-2xl font-bold mb-1">Registro Complementario</h1>
                <p className="text-blue-100 text-sm opacity-90">Completa tu perfil para acceder</p>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
            </div>

            <div className="px-6 pt-6">
                <motion.form
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-600 ml-2">Nombre completo *</label>
                        <input type="text" required className="w-full p-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500 bg-white" placeholder="Ej. Juan Pérez" />
                    </div>

                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-600 ml-2">Dirección *</label>
                        <input type="text" required className="w-full p-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500 bg-white" placeholder="Calle, Número, Colonia" />
                    </div>

                    <div className="flex gap-4">
                        <div className="space-y-1 flex-1">
                            <label className="text-xs font-semibold text-gray-600 ml-2">Edad *</label>
                            <input type="number" required className="w-full p-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500 bg-white" placeholder="Años" />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-600 ml-2">Actividades de interés *</label>
                        <select required className="w-full p-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                            <option value="">Selecciona tus intereses...</option>
                            <option value="cultura">Cultura (Ciencia, Arte, Lengua)</option>
                            <option value="deporte">Deporte (Futbol, Basquetbol, Beisbol)</option>
                            <option value="salud">Asistencia Social y Salud</option>
                            <option value="servicios">Servicios y Oficios</option>
                        </select>
                    </div>

                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-600 ml-2">Cuenta de Facebook *</label>
                        <input type="text" required className="w-full p-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500 bg-white" placeholder="Enlace a tu perfil de Facebook" />
                    </div>

                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-600 ml-2">Correo electrónico (Opcional)</label>
                        <input type="email" className="w-full p-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500 bg-white" placeholder="correo@ejemplo.com" />
                    </div>

                    <div className="pt-2">
                        <label className="flex items-center space-x-3 bg-blue-50 p-4 rounded-xl border border-blue-100 cursor-pointer">
                            <input
                                type="checkbox"
                                className="w-5 h-5 text-blue-600 rounded"
                                checked={isServiceProvider}
                                onChange={(e) => setIsServiceProvider(e.target.checked)}
                            />
                            <span className="text-sm font-medium text-blue-900">Deseo ofrecer mis servicios en EDECOM</span>
                        </label>
                    </div>

                    {isServiceProvider && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            className="mt-4 p-5 bg-white border-2 border-dashed border-blue-200 rounded-2xl"
                        >
                            <div className="flex flex-col items-center justify-center text-center space-y-3">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                                    <UploadCloud className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-sm text-gray-800">Fotografía de INE Obligatoria</h3>
                                    <p className="text-xs text-gray-500 mt-1 px-4">Para brindar certeza en la vinculación de servicios, sube una foto clara del frente de tu INE.</p>
                                </div>
                                <button type="button" className="px-5 py-2.5 bg-gray-100 font-semibold text-sm rounded-lg text-gray-700 hover:bg-gray-200 transition-colors">
                                    Seleccionar Imagen
                                </button>
                            </div>
                        </motion.div>
                    )}

                    <div className="pt-6">
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center bg-blue-900 text-white py-4 rounded-xl font-bold shadow-lg hover:bg-blue-800 transition-all active:scale-95 text-lg"
                        >
                            <UserCheck className="w-5 h-5 mr-2" />
                            Finalizar Registro
                        </button>
                    </div>

                    <div className="text-center pt-2">
                        <p className="text-[10px] text-gray-400 flex items-center justify-center">
                            <FileText className="w-3 h-3 mr-1" />
                            Al continuar aceptas nuestros Avisos de Privacidad según la ley mexicana.
                        </p>
                    </div>

                </motion.form>
            </div>
        </div>
    );
}
