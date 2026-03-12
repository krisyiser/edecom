import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Share2, Globe, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const CATEGORY_DATA: Record<string, { title: string, color: string, items: { sub: string, desc: string }[] }> = {
    eventos: {
        title: 'EVENTOS Y CARTELERA',
        color: 'bg-[#4a8eb9]',
        items: [
            { sub: 'Noticias y Convocatorias', desc: 'Notas relevantes nacionales y locales. Convocatorias EDECOM y de vinculación con instituciones colaborativas.' },
            { sub: 'Actividades', desc: 'Publicación de giras, entregas, proyectos, convivencias, conferencias y torneos deportivos.' }
        ]
    },
    cultura: {
        title: 'CULTURA',
        color: 'bg-[#8e4ab9]',
        items: [
            { sub: 'Ciencia y Arte', desc: 'Exposiciones de arte contemporáneo y moderno. Talleres de artes plásticas, danza contemporánea, folklórica y robótica.' },
            { sub: 'Lengua materna Totonaco', desc: 'Aprendizaje de lengua materna en 5 módulos, certificación por puntaje y competencias.' }
        ]
    },
    deporte: {
        title: 'DEPORTE',
        color: 'bg-[#e06666]',
        items: [
            { sub: 'Torneos y Ligas', desc: 'Gestión y desarrollo deportivo virtual mediante la app. Inscripción en torneos de barrio (Futbol, Basquetbol, Beisbol).' },
            { sub: 'Uniformes y Equipo', desc: 'Inscripción para la solicitud de uniformes e implementos del deporte.' }
        ]
    },
    servicios: {
        title: 'SERVICIOS PROFESIONALES',
        color: 'bg-[#2b6832]',
        items: [
            { sub: 'Asesorías', desc: 'Defensa jurídica, servicios contables y fiscales. Asesorías de arquitectos en obra civil.' },
            { sub: 'Servicios Públicos', desc: 'Directorio de carpinteros, albañilería, plomeros, electricistas, transporte y mecánicos.' }
        ]
    },
    'asistencia-social': {
        title: 'ASISTENCIA SOCIAL',
        color: 'bg-[#b94a61]',
        items: [
            { sub: 'Salud Integral', desc: 'Jornadas itinerantes de medicina general, odontología, lentes, ginecología y cirugías de paladar hendido. Programas de nutrición.' },
            { sub: 'Gestoría', desc: 'Sillas de ruedas, bastones. Seguridad alimentaria. Ayuda psicológica y apoyo con materiales como ZintroAlum, block y varilla.' }
        ]
    },
    'en-construccion': {
        title: 'PRÓXIMAMENTE',
        color: 'bg-gray-400',
        items: [
            { sub: 'Estamos trabajando en ello', desc: 'Pronto publicaremos esta sección en la aplicación para tu uso.' }
        ]
    }
};

export default function CategoryView() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Map Dashboard IDs to categories if needed
    const mappedId = id === 'sitios' ? 'asistencia-social' : id === 'clasificados' ? 'servicios' : id === 'agenda' ? 'cultura' : id;

    const data = CATEGORY_DATA[mappedId || 'en-construccion'] || CATEGORY_DATA['en-construccion'];

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: 'EDECOM App - ' + data.title,
                text: 'Visita los servicios y actividades que EDECOM ofrece.',
                url: 'https://www.edecom.mx'
            }).catch(() => toast.info('Acción de compartir cancelada'));
        } else {
            toast.success('Enlace copiado: www.edecom.mx', { duration: 3000 });
        }
    };

    return (
        <div className="flex flex-col h-screen bg-gray-50 overflow-hidden">
            {/* Dynamic Header */}
            <header className={`${data.color} shrink-0 text-white shadow-xl flex items-center justify-between p-4 sticky top-0 z-20`}>
                <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20 transition-all active:scale-90">
                    <ArrowLeft size={24} />
                </button>
                <h1 className="font-extrabold text-lg flex-1 text-center tracking-wide">{data.title}</h1>
                <button onClick={handleShare} className="p-2 -mr-2 rounded-full hover:bg-white/20 transition-all active:scale-90 relative">
                    <Share2 size={24} />
                    <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 border-2 border-current rounded-full"></span>
                </button>
            </header>

            {/* Decorative Sparkle SVG overlay */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 pointer-events-none rounded-full blur-3xl transform -translate-x-12 -translate-y-24"></div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto no-scrollbar p-5 space-y-5 pb-20 relative z-10">

                {/* Banner Informative Card */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="bg-white rounded-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent -mr-10 -mt-10 rounded-full blur-2xl transition-transform group-hover:scale-110 duration-700"></div>
                    <Sparkles className="w-8 h-8 text-blue-400 mb-3 opacity-80" strokeWidth={1.5} />
                    <h2 className="text-xl font-black text-gray-800 mb-2 font-sans tracking-tight leading-tight">
                        Explora {data.title.toLowerCase()}
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed font-medium">
                        Almacenaje directo a las convocatorias y recursos en nuestra página oficial con vinculación en tiempo real.
                    </p>
                    <a
                        href="https://www.edecom.mx"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 flex items-center text-sm font-bold text-blue-600 w-max px-3 py-1.5 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors border border-blue-100"
                    >
                        <Globe className="w-4 h-4 mr-2" />
                        Visitar www.edecom.mx
                    </a>
                </motion.div>

                {/* Categories List items mapped from Prompt tables */}
                {data.items.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 * (idx + 1) }}
                        className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 cursor-pointer active:scale-95 group"
                    >
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="font-bold text-gray-800 text-lg leading-tight group-hover:text-blue-600 transition-colors pr-4">{item.sub}</h3>
                            <div className="p-1.5 bg-gray-50 group-hover:bg-blue-50 rounded-full text-gray-300 group-hover:text-blue-500 transition-colors shrink-0">
                                <ChevronRight size={18} />
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            {item.desc}
                        </p>
                    </motion.div>
                ))}

                {/* Empty state filler for aesthetics */}
                <div className="h-[20vh]"></div>

            </div>
        </div>
    );
}
