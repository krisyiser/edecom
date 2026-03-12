import { Link } from 'react-router-dom';
import { Download, Fingerprint, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export default function Landing() {
    return (
        <div className="flex flex-col items-center justify-between min-h-[100dvh] bg-black text-white relative overflow-hidden px-6 pt-20 pb-12">
            {/* Background Ambient Glows */}
            <div className="absolute top-[-10%] left-[-20%] w-[120%] h-[50%] bg-blue-900/40 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-20%] w-[100%] h-[40%] bg-cyan-900/30 blur-[100px] rounded-full pointer-events-none"></div>

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center w-full z-10 mt-10"
            >
                <div className="w-24 h-24 rounded-3xl ios-glass-dark border border-white/10 flex items-center justify-center mb-10 shadow-2xl">
                    <Fingerprint className="w-12 h-12 text-blue-400" strokeWidth={1} />
                </div>

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-5xl font-black mb-3 tracking-tighter text-center bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-gray-500"
                >
                    EDECOM
                </motion.h1>
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-gray-400 text-lg font-medium text-center max-w-[280px] leading-snug tracking-tight"
                >
                    El futuro de tu comunidad, en tus manos.
                </motion.p>
            </motion.div>

            <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8, type: "spring", stiffness: 100 }}
                className="w-full space-y-4 z-10"
            >
                <Link
                    to="/login"
                    className="group flex items-center justify-between w-full bg-white text-black py-4 px-6 rounded-full font-semibold text-[17px] shadow-lg hover:scale-[1.02] transition-all active:scale-95"
                >
                    <span>Ingresar</span>
                    <div className="bg-gray-100 p-1.5 rounded-full group-hover:bg-gray-200 transition-colors">
                        <ChevronRight className="w-5 h-5" />
                    </div>
                </Link>

                <button
                    onClick={() => toast.info('Próximamente disponible en App Store & Google Play', { duration: 3000 })}
                    className="flex items-center justify-center w-full bg-white/10 text-white py-4 px-6 rounded-full font-medium text-[17px] border border-white/10 backdrop-blur-md hover:bg-white/15 transition-all active:scale-95"
                >
                    <Download className="mr-2 w-5 h-5" />
                    Descargar App
                </button>
            </motion.div>
        </div>
    );
}
