import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Login() {
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (phone.length >= 10) {
            navigate('/verify');
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <div className="flex-1 px-8 pt-20 pb-12 flex flex-col justify-center">
                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-800 shadow-sm border border-blue-100">
                        <Phone className="w-8 h-8" />
                    </div>

                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Ingresa a EDECOM
                    </h1>
                    <p className="text-gray-500 mb-8 leading-relaxed text-sm">
                        Escribe tu número de celular. Te enviaremos un código de seguridad para verificar tu identidad y proteger tus datos.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <span className="text-gray-400 font-semibold">+52</span>
                                <div className="w-px h-6 bg-gray-200 mx-3"></div>
                            </div>
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').substring(0, 10))}
                                className="w-full pl-20 pr-4 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none text-lg font-medium transition-all"
                                placeholder="  Número a 10 dígitos"
                                required
                            />
                        </div>

                        <button
                            disabled={phone.length < 10}
                            type="submit"
                            className="w-full flex items-center justify-center bg-blue-900 text-white py-4 rounded-xl font-bold shadow-lg hover:bg-blue-800 disabled:opacity-50 disabled:shadow-none transition-all active:scale-95"
                        >
                            Continuar
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </button>
                    </form>
                </motion.div>
            </div>

            <div className="py-6 px-8 bg-gray-50 flex items-center justify-center text-xs text-center text-gray-500 pb-10">
                <ShieldCheck className="w-4 h-4 mr-1 text-green-600" />
                Aplicamos protocolos de aviso de privacidad para resguardar tu información
            </div>
        </div>
    );
}
