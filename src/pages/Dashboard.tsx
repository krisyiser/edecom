import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    CalendarDays, Newspaper, BookUser,
    CalendarCheck, Radio, MessageSquareText, LayoutGrid,
    MapPinned, ShieldAlert, Home, User, Bell
} from 'lucide-react';
import { motion } from 'framer-motion';

const menuItems = [
    { id: 'eventos', title: 'Eventos', icon: CalendarDays, color: 'bg-blue-500', size: 'col-span-2 row-span-2' },
    { id: 'noticias', title: 'Noticias', icon: Newspaper, color: 'bg-indigo-500', size: 'col-span-1 row-span-1' },
    { id: 'directorio', title: 'Directorio', icon: BookUser, color: 'bg-purple-500', size: 'col-span-1 row-span-1' },
    { id: 'agenda', title: 'Agenda', icon: CalendarCheck, color: 'bg-orange-500', size: 'col-span-1 row-span-1' },
    { id: 'en-vivos', title: 'En Vivo', icon: Radio, color: 'bg-red-500', size: 'col-span-1 row-span-1' },
    { id: 'contacto', title: 'Contacto', icon: MessageSquareText, color: 'bg-teal-500', size: 'col-span-2 row-span-1' },
    { id: 'clasificados', title: 'Clasificados', icon: LayoutGrid, color: 'bg-pink-500', size: 'col-span-1 row-span-2' },
    { id: 'sitios', title: 'Sitios', icon: MapPinned, color: 'bg-green-500', size: 'col-span-1 row-span-1' },
    { id: 'reporte', title: 'Reporte', icon: ShieldAlert, color: 'bg-gray-800', size: 'col-span-1 row-span-1' },
];

export default function Dashboard() {
    const navigate = useNavigate();

    useEffect(() => {
        const isAuth = localStorage.getItem('isAuthenticated');
        if (!isAuth) {
            navigate('/login', { replace: true });
        }
    }, [navigate]);

    return (
        <div className="flex flex-col h-[100dvh] bg-[#f5f5f7] relative">

            {/* Main Scrollable Content */}
            <div className="flex-1 overflow-y-auto no-scrollbar pb-24">

                {/* iOS Large Header */}
                <div className="px-6 pt-16 pb-4 sticky top-0 bg-[#f5f5f7]/80 backdrop-blur-xl z-20">
                    <div className="flex justify-between items-end">
                        <div>
                            <p className="text-gray-500 font-semibold text-[13px] uppercase tracking-wider mb-1">Miércoles 11</p>
                            <h1 className="text-3xl font-bold text-black tracking-tight">Inicio</h1>
                        </div>
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center shadow-inner overflow-hidden border border-gray-300">
                            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100" alt="Avatar" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* Parallax Hero Banner */}
                <div className="px-4 mb-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-full h-48 rounded-[24px] overflow-hidden relative shadow-md"
                    >
                        <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800" alt="Banner" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                            <span className="bg-white/20 backdrop-blur-md text-white text-[11px] font-bold px-2 py-1 rounded mb-2 inline-block">NUEVO</span>
                            <h2 className="text-white font-bold text-xl leading-tight">Descubre las nuevas convocatorias culturales.</h2>
                        </div>
                    </motion.div>
                </div>

                {/* Bento Box Grid */}
                <div className="px-4 pb-6">
                    <div className="flex justify-between items-center mb-3 px-2">
                        <h3 className="font-bold text-[17px] text-black">Explorar</h3>
                        <span className="text-blue-500 font-medium text-[15px] cursor-pointer">Ver todo</span>
                    </div>

                    <div className="grid grid-cols-4 gap-3">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={item.id}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => navigate(`/category/${item.id}`)}
                                    className={`${item.color} ${item.size} rounded-[20px] p-4 flex flex-col justify-between shadow-sm cursor-pointer relative overflow-hidden group`}
                                >
                                    <div className="absolute -right-4 -top-4 w-20 h-20 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500 pointer-events-none"></div>
                                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md mb-2">
                                        <Icon size={16} className="text-white" strokeWidth={2.5} />
                                    </div>
                                    <span className="text-white font-semibold text-[15px] leading-tight tracking-tight drop-shadow-sm">
                                        {item.title}
                                    </span>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* iOS Floating Light Tab Bar */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] ios-glass rounded-full shadow-lg border border-white/50 px-6 py-3 flex justify-between items-center z-50">
                <button className="flex flex-col items-center flex-1 text-black">
                    <Home size={22} className="mb-1" strokeWidth={2.5} />
                    <span className="text-[10px] font-semibold">Inicio</span>
                </button>
                <button className="flex flex-col items-center flex-1 text-gray-400 hover:text-black transition-colors">
                    <MapPinned size={22} className="mb-1" />
                    <span className="text-[10px] font-semibold">Mapa</span>
                </button>
                <button className="flex flex-col items-center flex-1 text-gray-400 hover:text-black transition-colors relative">
                    <Bell size={22} className="mb-1" />
                    <span className="absolute top-0 right-3 w-2 h-2 bg-red-500 rounded-full border border-white border-opacity-50"></span>
                    <span className="text-[10px] font-semibold">Alertas</span>
                </button>
                <button className="flex flex-col items-center flex-1 text-gray-400 hover:text-black transition-colors">
                    <User size={22} className="mb-1" />
                    <span className="text-[10px] font-semibold">Perfil</span>
                </button>
            </div>
        </div>
    );
}
