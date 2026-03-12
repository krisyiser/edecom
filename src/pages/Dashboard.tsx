import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    UserCircle, CalendarDays, Newspaper, BookUser,
    CalendarCheck, Radio, MessageSquareText, LayoutGrid,
    MapPinned, UserMinus
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const banners = [
    "https://images.unsplash.com/photo-1542382257-80dedb725088?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800"
];

const menuItems = [
    { id: 'eventos', title: 'EVENTOS', icon: CalendarDays, color: 'bg-[#4a8eb9]' },
    { id: 'noticias', title: 'NOTICIAS', icon: Newspaper, color: 'bg-[#559ecf]' },
    { id: 'directorio', title: 'DIRECTORIO', icon: BookUser, color: 'bg-[#4a8eb9]' },
    { id: 'agenda', title: 'AGENDA', icon: CalendarCheck, color: 'bg-[#29709d]' },
    { id: 'en-vivos', title: 'EN VIVOS', icon: Radio, color: 'bg-[#153e60]' },
    { id: 'contacto', title: 'CONTACTO', icon: MessageSquareText, color: 'bg-[#50b1d3]' },
    { id: 'clasificados', title: 'CLASIFICADOS', icon: LayoutGrid, color: 'bg-[#007cb4]' },
    { id: 'sitios', title: 'SITIOS DE INTERÉS', icon: MapPinned, color: 'bg-[#3b587a]' },
    { id: 'reporte', title: 'REPORTE ANÓNIMO', icon: UserMinus, color: 'bg-[#006093]' },
];

export default function Dashboard() {
    const navigate = useNavigate();
    const [currentBanner, setCurrentBanner] = useState(0);

    useEffect(() => {
        const isAuth = localStorage.getItem('isAuthenticated');
        if (!isAuth) {
            navigate('/login', { replace: true });
        }
    }, [navigate]);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentBanner((prev) => (prev + 1) % banners.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col h-screen bg-gray-50 overflow-hidden">
            {/* Header */}
            <header className="flex justify-between items-center px-4 py-3 bg-white shadow-sm z-10 shrink-0">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        e
                    </div>
                    <div className="leading-none">
                        <h1 className="text-xl font-bold text-blue-900 tracking-tight">edecom</h1>
                        <span className="text-[8px] text-gray-500 uppercase tracking-wider block">Impulsando Sueños, Fortaleciendo Comunidades</span>
                    </div>
                </div>
                <button className="text-orange-500 bg-orange-50 rounded-full p-1.5 active:scale-90 transition-transform">
                    <UserCircle size={32} />
                </button>
            </header>

            {/* Main Scrollable Content */}
            <div className="flex-1 overflow-y-auto no-scrollbar pb-16">
                {/* Banner Image Carousel */}
                <div className="relative w-full h-48 bg-gray-200 overflow-hidden group">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentBanner}
                            src={banners[currentBanner]}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 w-full h-full object-cover"
                            alt="EDECOM Banner"
                        />
                    </AnimatePresence>
                    <div className="absolute inset-y-0 left-2 flex items-center">
                        <button className="p-2 bg-black/20 text-white rounded-full backdrop-blur-sm" onClick={() => setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length)}>
                            <div className="w-0 h-0 border-y-8 border-y-transparent border-r-8 border-r-white"></div>
                        </button>
                    </div>
                    <div className="absolute inset-y-0 right-2 flex items-center">
                        <button className="p-2 bg-black/20 text-white rounded-full backdrop-blur-sm" onClick={() => setCurrentBanner((prev) => (prev + 1) % banners.length)}>
                            <div className="w-0 h-0 border-y-8 border-y-transparent border-l-8 border-l-white"></div>
                        </button>
                    </div>
                </div>

                {/* Gray Info Box */}
                <div className="bg-gray-500 text-white p-4 text-sm text-center font-medium shadow-inner">
                    Asistencia social, servicios, cultura, deporte, promociones, actividades y convocatorias.
                </div>

                {/* 3x3 Grid */}
                <div className="grid grid-cols-3 w-full">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <motion.button
                                key={item.id}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate(`/category/${item.id}`)}
                                className={`${item.color} flex flex-col items-center justify-center p-4 aspect-square text-white hover:brightness-110 transition-all border-r border-b border-white/10`}
                            >
                                <Icon size={36} strokeWidth={1.5} className="mb-2 drop-shadow-md" />
                                <span className="text-[10px] font-bold tracking-wider text-center leading-tight w-full truncate px-1 drop-shadow-sm">
                                    {item.title}
                                </span>
                            </motion.button>
                        )
                    })}
                </div>
            </div>

            {/* Footer Banner Simulator */}
            <div className="shrink-0 h-16 bg-cyan-400 w-full flex items-center justify-between px-3 shadow-[0_-4px_10px_rgba(0,0,0,0.1)] relative overflow-hidden z-20">
                <div className="text-white z-10">
                    <p className="text-[10px] font-bold drop-shadow-sm">Encuentra tus servicios</p>
                    <div className="bg-white text-red-600 font-black px-2 py-0.5 mt-0.5 rounded text-lg leading-none inline-block shadow-sm">
                        EDECOM
                    </div>
                </div>
                <div className="text-white font-bold text-xs transform -skew-x-12 bg-cyan-600 px-3 py-1 shadow-inner z-10">
                    SOLO AQUÍ
                </div>
                <img
                    src="https://images.unsplash.com/photo-1577744486770-52ae6143f6ab?auto=format&fit=crop&q=80&w=200"
                    alt="Ad"
                    className="absolute right-0 -bottom-4 w-32 opacity-20 object-cover mix-blend-multiply"
                />
            </div>
        </div>
    );
}
