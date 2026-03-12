import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
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
        <div className="flex flex-col min-h-[100dvh] bg-[#f5f5f7]">
            {/* iOS Style Top Bar */}
            <div className="flex items-center px-4 pt-10 pb-4">
                <button onClick={() => navigate(-1)} className="flex items-center text-blue-500 font-medium active:opacity-50 transition-opacity">
                    <ChevronLeft className="w-6 h-6 -ml-2" />
                    Atrás
                </button>
            </div>

            <div className="flex-1 px-6 pt-2 flex flex-col">
                <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.4 }}>
                    <h1 className="text-3xl font-bold text-black mb-2 tracking-tight">
                        Inicia sesión
                    </h1>
                    <p className="text-gray-500 mb-8 text-[15px] leading-relaxed">
                        Ingresa tu número de celular para continuar. Te enviaremos un código por SMS.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col h-full">
                        <div className="bg-white rounded-2xl ios-shadow overflow-hidden mb-8">
                            <div className="flex items-center px-4 py-4 border-b border-gray-100 last:border-0 relative">
                                <span className="text-black font-semibold text-[17px] mr-3 shrink-0">+52</span>
                                <div className="w-px h-6 bg-gray-200 mr-3 shrink-0"></div>
                                <input
                                    type="tel"
                                    autoFocus
                                    inputMode="numeric"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').substring(0, 10))}
                                    className="w-full bg-transparent text-[22px] font-semibold text-black placeholder-gray-300 outline-none caret-blue-500"
                                    placeholder="000 000 0000"
                                />
                            </div>
                        </div>

                        <div className="mt-auto pb-8 z-10 absolute bottom-0 left-0 right-0 px-6 sm:relative">
                            <button
                                disabled={phone.length < 10}
                                type="submit"
                                className="w-full flex items-center justify-center bg-black text-white py-4 rounded-full font-semibold text-[17px] shadow-lg disabled:opacity-30 disabled:shadow-none transition-all active:scale-95"
                            >
                                Continuar
                            </button>
                            <div className="mt-6 text-center text-xs text-gray-400">
                                La información está protegida por encriptación de extremo a extremo.
                            </div>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
