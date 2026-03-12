import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Share, Globe, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { toast } from 'sonner';

const CATEGORY_DATA: Record<string, { title: string, color: string, headerImg: string, items: { sub: string, desc: string }[] }> = {
    eventos: {
        title: 'Eventos',
        color: 'bg-blue-500',
        headerImg: 'https://images.unsplash.com/photo-1542382257-80dedb725088?auto=format&fit=crop&q=80&w=800',
        items: [
            { sub: 'Noticias y Convocatorias', desc: 'Notas relevantes nacionales y locales. Convocatorias EDECOM y de vinculación con instituciones colaborativas.' },
            { sub: 'Actividades', desc: 'Publicación de giras, entregas, proyectos, convivencias, conferencias y torneos.' }
        ]
    },
    cultura: {
        title: 'Cultura',
        color: 'bg-indigo-500',
        headerImg: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
        items: [
            { sub: 'Ciencia y Arte', desc: 'Exposiciones de arte contemporáneo y moderno. Talleres de artes plásticas, danza contemporánea, folklórica y robótica.' },
            { sub: 'Lengua Totonaco', desc: 'Aprendizaje de lengua materna en 5 módulos, certificación por puntaje y competencias.' }
        ]
    },
    deporte: {
        title: 'Deporte',
        color: 'bg-orange-500',
        headerImg: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800',
        items: [
            { sub: 'Torneos y Ligas', desc: 'Gestión y desarrollo deportivo virtual mediante la app. Inscripción en torneos de barrio.' },
            { sub: 'Uniformes y Equipo', desc: 'Inscripción para la solicitud de uniformes e implementos del deporte.' }
        ]
    },
    servicios: {
        title: 'Servicios',
        color: 'bg-teal-500',
        headerImg: 'https://images.unsplash.com/photo-1574607407408-1e681c46041d?auto=format&fit=crop&q=80&w=800',
        items: [
            { sub: 'Asesorías', desc: 'Defensa jurídica, servicios contables y fiscales. Asesorías de arquitectos en obra civil.' },
            { sub: 'Servicios Públicos', desc: 'Directorio de carpinteros, albañilería, plomeros, electricistas, transporte y mecánicos.' }
        ]
    },
    'asistencia-social': {
        title: 'Asistencia',
        color: 'bg-pink-500',
        headerImg: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800',
        items: [
            { sub: 'Salud Integral', desc: 'Jornadas de medicina. Programas de nutrición.' },
            { sub: 'Gestoría', desc: 'Sillas de ruedas, bastones. Ayuda con materiales de construcción y asistencia psicológica.' }
        ]
    },
    'en-construccion': {
        title: 'Próximamente',
        color: 'bg-gray-500',
        headerImg: 'https://images.unsplash.com/photo-1588600878108-578307a3cc9d?auto=format&fit=crop&q=80&w=800',
        items: [
            { sub: 'Trabajando...', desc: 'Pronto publicaremos esta sección en la aplicación para tu uso diario.' }
        ]
    }
};

export default function CategoryView() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { scrollY } = useScroll();

    const mappedId = id === 'sitios' ? 'asistencia-social' : id === 'clasificados' ? 'servicios' : id === 'agenda' ? 'cultura' : id;
    const data = CATEGORY_DATA[mappedId || 'en-construccion'] || CATEGORY_DATA['en-construccion'];

    const headerBlur = useTransform(scrollY, [0, 150], [0, 10]);
    const headerScale = useTransform(scrollY, [-100, 0], [1.2, 1]); // slight bounce scale

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: 'EDECOM App - ' + data.title,
                text: 'Visita los servicios y actividades que EDECOM ofrece.',
                url: 'https://www.edecom.mx'
            }).catch(() => toast.info('Acción de compartir cancelada'));
        } else {
            toast.success('Enlace copiado al portapapeles.', { duration: 3000 });
        }
    };

    return (
        <div className="flex flex-col h-[100dvh] bg-[#f5f5f7] overflow-y-auto no-scrollbar relative">

            {/* iOS Styled Transparent Top Bar */}
            <div className="sticky top-0 z-50 flex justify-between items-center px-4 pt-12 pb-2 ios-glass border-b border-gray-200/50">
                <button onClick={() => navigate(-1)} className="flex items-center text-blue-500 font-medium active:opacity-50 transition-opacity">
                    <ChevronLeft className="w-7 h-7 -ml-2" strokeWidth={2.5} />
                    <span className="text-[17px]">Atrás</span>
                </button>
                <div className="font-semibold text-[17px] text-black tracking-tight absolute left-1/2 -translate-x-1/2">
                    {data.title}
                </div>
                <button onClick={handleShare} className="text-blue-500 font-medium active:opacity-50 transition-opacity">
                    <Share className="w-6 h-6" />
                </button>
            </div>

            {/* Elastic Header Image Cover */}
            <div className="w-full h-64 -mt-20 overflow-hidden shrink-0 relative pointer-events-none">
                <motion.div style={{ filter: `blur(${headerBlur}px)`, scale: headerScale }} className="w-full h-full">
                    <img src={data.headerImg} alt={data.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/30"></div>
                </motion.div>
                <div className="absolute bottom-6 left-6">
                    <h1 className="text-white text-4xl font-bold tracking-tight drop-shadow-md">{data.title}</h1>
                </div>
            </div>

            <div className="flex-1 px-4 py-6 z-10 -mt-4 bg-[#f5f5f7] rounded-t-[20px] relative">

                {/* Promo Card */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="bg-white rounded-2xl p-5 ios-shadow mb-6 relative overflow-hidden"
                >
                    <div className={`absolute top-0 right-0 w-32 h-32 ${data.color} rounded-full blur-3xl opacity-20 -mr-10 -mt-10 pointer-events-none`}></div>
                    <Sparkles className={`w-8 h-8 mb-3 opacity-90 text-yellow-500`} strokeWidth={2} />
                    <h2 className="text-[20px] font-bold text-black mb-1.5 tracking-tight leading-tight">
                        Explora a fondo.
                    </h2>
                    <p className="text-[15px] text-gray-500 leading-relaxed font-medium">
                        Almacenaje directo a las convocatorias y recursos en nuestra plataforma oficial.
                    </p>
                    <a
                        href="https://www.edecom.mx"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 flex justify-between items-center w-full px-4 py-3 bg-gray-50 rounded-xl font-semibold text-black active:bg-gray-100 transition-colors"
                    >
                        <div className="flex items-center">
                            <Globe className="w-5 h-5 mr-3 text-blue-500" />
                            EDECOM Portal Oficial
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                    </a>
                </motion.div>

                {/* Sub-items list (iOS Style Group) */}
                <div className="mb-2 px-4">
                    <h3 className="uppercase text-[13px] font-semibold tracking-wider text-gray-500">Recursos disponibles</h3>
                </div>

                <div className="bg-white rounded-2xl overflow-hidden ios-shadow">
                    {data.items.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.1 * (idx + 1) }}
                            className="px-5 py-4 flex flex-col justify-center border-b border-gray-100 last:border-0 relative active:bg-gray-50 transition-colors cursor-pointer group"
                        >
                            <div className="flex justify-between items-center mb-1">
                                <h3 className="font-semibold text-black text-[17px] tracking-tight pr-6">{item.sub}</h3>
                                <ChevronRight className="w-5 h-5 text-gray-300 absolute right-4 group-hover:text-blue-500 transition-colors" />
                            </div>
                            <p className="text-[15px] text-gray-500 leading-relaxed pr-8">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="h-24"></div> {/* Bottom Padding */}
            </div>
        </div>
    );
}
