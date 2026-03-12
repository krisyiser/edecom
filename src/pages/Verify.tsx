import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Verify() {
    const [code, setCode] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (code.length === 6) {
            navigate('/register', { replace: true });
        }
    };

    return (
        <div className="flex flex-col min-h-[100dvh] bg-[#f5f5f7]">
            <div className="flex items-center px-4 pt-10 pb-4">
                <button onClick={() => navigate(-1)} className="flex items-center text-blue-500 font-medium active:opacity-50 transition-opacity">
                    <ChevronLeft className="w-6 h-6 -ml-2" />
                    Atrás
                </button>
            </div>

            <div className="flex-1 px-6 pt-2 flex flex-col">
                <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.4 }}>
                    <h1 className="text-3xl font-bold text-black mb-2 tracking-tight">
                        Verifica tu cuenta
                    </h1>
                    <p className="text-gray-500 mb-10 text-[15px] leading-relaxed">
                        Enviamos un código de 6 dígitos por SMS. Ingresa el código abajo.
                    </p>

                    <form onSubmit={handleSubmit} className="relative flex flex-col h-full items-center">
                        <div className="relative w-full max-w-[320px] mb-12" onClick={() => inputRef.current?.focus()}>
                            {/* Hidden Input for Mobile Keyboard */}
                            <input
                                ref={inputRef}
                                type="text"
                                inputMode="numeric"
                                autoComplete="one-time-code"
                                value={code}
                                onChange={(e) => setCode(e.target.value.replace(/\D/g, '').substring(0, 6))}
                                className="absolute inset-0 w-full h-full opacity-0 text-transparent bg-transparent z-10 cursor-pointer"
                                required
                                autoFocus
                            />

                            {/* Visual Boxes for OTP */}
                            <div className="flex justify-between w-full">
                                {[0, 1, 2, 3, 4, 5].map((index) => {
                                    const char = code[index];
                                    const isFocused = code.length === index || (code.length === 6 && index === 5);

                                    return (
                                        <div
                                            key={index}
                                            className={`w-11 h-16 bg-white rounded-xl shadow-sm border-2 flex items-center justify-center text-2xl font-semibold transition-all duration-200
                                                ${isFocused ? 'border-blue-500 scale-105 shadow-md' : char ? 'border-gray-300' : 'border-gray-100'}
                                            `}
                                        >
                                            {char || ''}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="mt-8 text-center text-[15px] font-medium text-gray-500 mb-8">
                            ¿No recibiste el código? <span className="text-blue-500 active:opacity-50 transition-opacity">Reenviar</span>
                        </div>

                        <div className="mt-auto pb-8 w-full absolute bottom-0 left-0 right-0 px-6 sm:relative">
                            <button
                                disabled={code.length < 6}
                                type="submit"
                                className="w-full flex items-center justify-center bg-black text-white py-4 rounded-full font-semibold text-[17px] shadow-lg disabled:opacity-30 disabled:shadow-none transition-all active:scale-95"
                            >
                                Verificar
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
