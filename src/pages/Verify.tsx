import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldAlert, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Verify() {
    const [code, setCode] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (code.length === 6) {
            navigate('/register', { replace: true });
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <div className="pt-8 px-6">
                <button onClick={() => navigate(-1)} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <ArrowLeft className="w-6 h-6 text-gray-700" />
                </button>
            </div>

            <div className="flex-1 px-8 pt-6 pb-12 flex flex-col justify-center">
                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-800 shadow-sm border border-blue-100">
                        <ShieldAlert className="w-8 h-8" />
                    </div>

                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Verifica tu celular
                    </h1>
                    <p className="text-gray-500 mb-8 leading-relaxed text-sm">
                        Hemos enviado un código SMS de 6 dígitos a tu número. Ingrésalo a continuación para continuar.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <input
                            type="text"
                            inputMode="numeric"
                            value={code}
                            onChange={(e) => setCode(e.target.value.replace(/\D/g, '').substring(0, 6))}
                            className="w-full text-center tracking-[0.5em] font-mono text-3xl py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none text-gray-800 transition-all shadow-inner bg-gray-50"
                            placeholder="000000"
                            required
                        />

                        <button
                            disabled={code.length < 6}
                            type="submit"
                            className="w-full flex items-center justify-center bg-blue-900 text-white py-4 rounded-xl font-bold shadow-lg hover:bg-blue-800 disabled:opacity-50 disabled:shadow-none transition-all active:scale-95 text-lg"
                        >
                            Verificar
                        </button>
                    </form>

                    <div className="mt-8 text-center text-sm font-medium text-gray-500">
                        ¿No recibiste el código? <span className="text-blue-600 cursor-pointer hover:underline">Reenviar SMS</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
