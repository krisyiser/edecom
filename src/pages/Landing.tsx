import { Link } from 'react-router-dom';
import { Download, Smartphone, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export default function Landing() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 p-6 text-white text-center">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8 p-4 bg-white rounded-full shadow-2xl"
            >
                {/* Placeholder EDCOM Logo */}
                <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
                    <HeartHandshake className="w-12 h-12 text-blue-900" />
                </div>
            </motion.div>

            <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl font-extrabold mb-2 tracking-tight"
            >
                EDECOM
            </motion.h1>
            <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-blue-100 mb-10 text-lg mx-4"
            >
                Impulsando Sueños, Fortaleciendo Comunidades
            </motion.p>

            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="w-full space-y-4"
            >
                <Link
                    to="/login"
                    className="flex items-center justify-center w-full bg-white text-blue-900 py-4 px-6 rounded-2xl font-bold text-lg shadow-xl hover:bg-blue-50 transition-all active:scale-95"
                >
                    <Smartphone className="mr-2" />
                    Ingresa a la App
                </Link>
                <button
                    onClick={() => toast.info('Próximamente disponible en Play Store', { duration: 3000 })}
                    className="flex items-center justify-center w-full bg-blue-800 text-white py-4 px-6 rounded-2xl font-semibold text-lg border border-blue-600 hover:bg-blue-700 transition-all shadow-lg active:scale-95"
                >
                    <Download className="mr-2" />
                    Descargar de Playstore
                </button>
            </motion.div>
        </div>
    );
}
