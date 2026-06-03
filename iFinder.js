// ================== NAVEGACIÓN MÓVIL ==================
function toggleMobileMenu() {
  const menu = document.getElementById("categoriesMenu");
  menu.classList.toggle("active");
}

// ================== MODAL ¿CÓMO FUNCIONAMOS? ==================
function openHowWorks() {
  const modal = document.getElementById("howWorksModal");
  modal.classList.remove("hidden");
}

function closeHowWorks() {
  const modal = document.getElementById("howWorksModal");
  modal.classList.add("hidden");
}

// Cerrar menú y modal al hacer clic en una categoría
// Este evento se consolidará con el principal DOMContentLoaded en la sección de inicialización

// ================== BASE DE DATOS DE APLICACIONES ==================
let applications = [
  // ==================== DISEÑO ====================
  // ==================== DISEÑO ====================
  {
    id: 1,
    name: "Adobe Creative Cloud 2017 - Full Collection",
    price: 11.0,
    image: "img/apps/creative17-19.svg",
    category: "diseño",
    description:
      "Suite completa de herramientas profesionales para diseño gráfico, edición de video de alto nivel, postproducción y retoque fotográfico. Versión estable ideal para equipos con recursos moderados.",
    features: [
      "Photoshop CC (Edición de imágenes)",
      "Premiere Pro (Edición de video)",
      "After Effects (Motion Graphics)",
      "Illustrator (Vectores)",
      "InDesign (Maquetación editorial)",
      "Media Encoder (Renderizado)",
      "Audition (Postproducción de audio)",
      "Lightroom (Revelado digital)",
    ],
    compatibility: "macOS 10.10 en adelante",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 2,
    name: "Adobe Creative Cloud 2019 - Full Collection",
    price: 15.0,
    image: "img/apps/creative17-19.svg",
    category: "diseño",
    description:
      "La edición 2019 introduce herramientas avanzadas de Inteligencia Artificial y una integración más fluida entre apps. Ideal para diseñadores que buscan funciones modernas y estabilidad en sistemas operativos intermedios.",
    features: [
      "Photoshop CC 2019 (Relleno según contenido avanzado)",
      "Premiere Pro 2019 (Herramientas de color Lumetri mejoradas)",
      "After Effects 2019 (Eliminación de objetos en video)",
      "Illustrator 2019 (Degradados de forma libre)",
      "InDesign 2019 (Ajuste de contenido inteligente)",
      "Animate 2019 (Evolución de Flash Pro)",
      "Dreamweaver 2019 (Desarrollo web moderno)",
      "Audition, Media Encoder y Lightroom Classic",
    ],
    compatibility: "macOS 10.12 (Sierra) hasta macOS 10.14 (Mojave)",
    metodoPago: "Binance / PayPal",
    entrega: "Enlace de descarga directa",
  },
  {
    id: 3,
    name: "Adobe Creative Cloud 2020 - Full Collection",
    price: 18.0,
    image: "img/apps/creative20.svg",
    category: "diseño",
    description:
      "Versión marcada por la llegada de la selección de objetos con un solo clic y una interfaz más minimalista. Es el equilibrio perfecto entre funciones modernas y compatibilidad con equipos ligeramente anteriores.",
    features: [
      "Photoshop 2020 (Selección de sujetos mejorada)",
      "Illustrator 2020 (Renderizado rápido de efectos)",
      "Premiere Pro 2020 (Auto Reframe para redes sociales)",
      "After Effects 2020 (Previsualizaciones fluidas)",
      "InDesign, Audition, Lightroom y Media Encoder",
    ],
    compatibility: "macOS 10.13 (High Sierra) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 4,
    name: "Adobe Creative Cloud 2021 - Full Collection",
    price: 22.0,
    image: "img/apps/creative20.svg",
    category: "diseño",
    description:
      'Presenta los "Neural Filters" en Photoshop, permitiendo retoques complejos con IA en segundos. Primera versión con optimizaciones importantes para arquitectura de sistema moderna.',
    features: [
      "Photoshop 2021 (Filtros neuronales y reemplazo de cielo)",
      "Illustrator 2021 (Alineación de texto vertical)",
      "Premiere Pro 2021 (Transcripción de voz a texto)",
      "After Effects 2021 (Roto Brush 2.0 con IA)",
      "Adobe XD, Dimension y Character Animator",
    ],
    compatibility: "macOS 10.14 (Mojave) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 5,
    name: "Adobe Creative Cloud 2022 - Full Collection",
    price: 25.0,
    image: "img/apps/creative20.svg",
    category: "diseño",
    description:
      "Versión clave para usuarios de Mac con procesadores M1/M2, ofreciendo un rendimiento nativo y una velocidad hasta 4 veces superior en renderizado.",
    features: [
      "Optimización nativa para Apple Silicon (M1/M2)",
      "Photoshop 2022 (Interoperabilidad con Illustrator)",
      "Premiere Pro 2022 (Exportación rápida mejorada)",
      "After Effects 2022 (Detección de edición de escenas)",
      "Lightroom Classic (Mascaras de IA avanzadas)",
    ],
    compatibility: "macOS 11 (Big Sur) o superior",
    metodoPago: "Binance / PayPal",
    entrega: "Descarga Digit",
  },
  {
    id: 6,
    name: "Adobe Creative Cloud 2023 - Full Collection",
    price: 30.0,
    image: "img/apps/creative2023.svg",
    category: "diseño",
    description:
      "La vanguardia en herramientas creativas. Incluye las últimas funciones de colaboración en la nube y herramientas de selección ultra precisas para flujos de trabajo profesionales exigentes.",
    features: [
      "Photoshop 2023 (Herramientas de eliminación de distracciones)",
      "Illustrator 2023 (Entrelazado de objetos)",
      "Premiere Pro 2023 (Mapeo de tonos automático)",
      "After Effects 2023 (Codificación nativa H.264)",
      "Soporte total para las últimas versiones de macOS",
    ],
    compatibility: "macOS 12 (Monterey) o superior",
    metodoPago: "Binance / PayPal",
      
  },

  // ==================== DISEÑO ====================
  {
    id: 7,
    name: "Affinity Publisher 2",
    price: 45.0,
    image: "img/apps/hola.svg",
    category: "diseño",
    description: "Potente software de maquetación profesional para crear libros, revistas, folletos y diseños editoriales de alta calidad. Alternativa completa a InDesign con herramientas avanzadas de tipografía y exportación.",
    features: [
      "Maquetación multipágina con master pages",
      "Herramientas de tipografía avanzadas y estilos de texto",
      "Soporte completo para archivos PDF/X y CMYK",
      "Integración nativa con Affinity Photo y Designer",
      "Exportación a PDF, EPUB y formatos de impresión",
      "Rendimiento ultrarrápido en Apple Silicon"
    ],
    compatibility: "macOS 10.15 (Catalina) o superior",
    metodoPago: "Binance / PayPal",
      
  },

  // ==================== INGENIERÍA ====================
  {
    id: 8,
    name: "AutoCad 2020.2",
    price: 35.0,
    image: "img/apps/autocad.svg",
    category: "ingeniería",
    description: "La versión 2020 de AutoCAD ofrece dibujo 2D/3D preciso, modelado paramétrico y colaboración en la nube. Ideal para arquitectura, ingeniería y diseño industrial.",
    features: [
      "Dibujo 2D y modelado 3D paramétrico",
      "Herramientas de anotación y acotación automática",
      "Compatibilidad con archivos DWG/DXF",
      "Visualización 3D y renderizado en tiempo real",
      "Integración con Autodesk Cloud",
      "Soporte para Apple Silicon y macOS reciente"
    ],
    compatibility: "macOS 10.13 (High Sierra) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
  "id": 8,
  "name": "AutoCad 2026",
  "price": 35.0,
  "image": "img/apps/autocad2026.png",
  "category": "ingeniería",
  "description": "La versión 2026 de AutoCAD ofrece dibujo 2D/3D preciso, modelado paramétrico y colaboración en la nube. Ideal para arquitectura, ingeniería y diseño industrial.",
  "features": [
    "Funciones avanzadas con Autodesk AI (Paletas de bloques inteligentes y Guías de marcado)",
    "Dibujo 2D optimizado y modelado 3D paramétrico de alto rendimiento",
    "Información de actividad detallada y control de versiones en tiempo real",
    "Compatibilidad total y nativa con archivos DWG/DXF de última generación",
    "Sincronización avanzada con Autodesk Docs y flujos de trabajo en la nube",
    "Soporte optimizado para Apple Silicon (M1/M2/M3/M4) y gráficos Metal"
  ],
  "compatibility": "macOS 14 (Sonoma) o superior / Windows 11",
  "metodoPago": "Binance / PayPal"
},
  {
  "id": 9,
  "name": "Luminar Neo 1.24",
  "price": 25.0,
  "image": "img/apps/luminar.png",
  "category": "diseño",
  "description": "Luminar Neo 1.24 es un editor de fotos innovador impulsado por Inteligencia Artificial que simplifica los flujos de trabajo complejos y permite a los creadores dar vida a sus ideas más audaces.",
  "features": [
    "Herramientas generativas avanzadas (GenErase, GenSwap y GenExpand)",
    "Mejora de retratos con IA (Face AI, Body AI y Skin AI)",
    "Sustitución de cielo con un solo clic (Sky AI) y reiluminación 3D",
    "Eliminación automática de fondos, líneas de luz y polvo del sensor",
    "Flujo de trabajo por capas y soporte para archivos RAW de cámaras modernas",
    "Optimización nativa para Apple Silicon (M1/M2/M3/M4) y aceleración por GPU"
  ],
  "compatibility": "macOS 13 (Ventura) o superior / Windows 10 u 11 (64-bit)",
  "metodoPago": "Binance / PayPal"
},
  {
    id: 9,
    name: "GRAPHISOFT ARCHICAD 23",
    price: 55.0,
    image: "img/apps/archicad.svg",
    category: "ingeniería",
    description: "Software BIM (Building Information Modeling) líder para arquitectos. Permite modelado 3D inteligente, documentación automática y colaboración en tiempo real.",
    features: [
      "Modelado BIM completo y preciso",
      "Generación automática de planos y cortes",
      "Herramientas de visualización y renderizado",
      "Colaboración en equipo con IFC",
      "Optimizado para proyectos grandes y complejos",
      "Interfaz intuitiva y flujos de trabajo eficientes"
    ],
    compatibility: "macOS 10.15 (Catalina) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
  "id": 10,
  "name": "SketchUp Pro 2026 (v26.2)",
  "price": 30.0,
  "image": "img/apps/sketchup2026.svg",
  "category": "ingeniería",
  "description": "SketchUp Pro 2026 ofrece un modelado 3D rápido y fluido gracias a su nuevo motor gráfico avanzado. Incorpora herramientas de diseño asistido por IA, colaboración en la nube y documentación precisa con LayOut.",
  "features": [
    "Nuevo motor gráfico con aceleración por hardware para modelados complejos y fluidos",
    "Integración con SketchUp Diffusion (generación de imágenes y renderizado conceptual con IA)",
    "Modelado en tiempo real y herramientas avanzadas de oclusión ambiental",
    "Vinculación fluida y automatizada con LayOut para documentación 2D profesional",
    "Colaboración en la nube mediante Trimble Connect y soporte avanzado para archivos IFC 4",
    "Soporte nativo para Apple Silicon y compatibilidad optimizada con pantallas de alta densidad"
  ],
  "compatibility": "macOS 14 (Sonoma) o superior / Windows 11 (64-bit)",
  "metodoPago": "Binance / PayPal"
},
  {
    id: 10,
    name: "SketchUp Pro",
    price: 28.0,
    image: "img/apps/sketchup.svg",
    category: "3d",
    description: "Herramienta de modelado 3D intuitiva y potente para arquitectura, diseño de interiores y visualización. Incluye herramientas de dibujo y extensiones profesionales.",
    features: [
      "Modelado 3D rápido y preciso",
      "Biblioteca de componentes 3D extensa",
      "Renderizado en tiempo real con estilos",
      "Exportación a 2D/3D y formatos CAD",
      "Soporte para LayOut (documentación 2D)",
      "Compatibilidad con Apple Silicon"
    ],
    compatibility: "macOS 10.14 (Mojave) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 11,
    name: "VectorWorks 2020 SP4",
    price: 40.0,
    image: "img/apps/vectorworks.svg",
    category: "ingeniería",
    description: "Plataforma BIM y CAD todo en uno para diseño arquitectónico, paisajismo y entretenimiento. Combina dibujo 2D, modelado 3D y renderizado de alta calidad.",
    features: [
      "Dibujo 2D/3D híbrido",
      "Herramientas BIM avanzadas",
      "Renderizado fotorealista integrado",
      "Soporte para archivos DWG y IFC",
      "Flujos de trabajo personalizables",
      "Optimizado para proyectos de gran escala"
    ],
    compatibility: "macOS 10.13 (High Sierra) o superior",
    metodoPago: "Binance / PayPal",
      
  },

  // ==================== FOTOGRAFÍA ====================
  {
    id: 12,
    name: "Pixelmator Pro",
    price: 22.0,
    image: "img/apps/Pixelmator.webp",
    category: "fotografía",
    description: "Editor de imágenes profesional optimizado para Mac con herramientas de IA, capas avanzadas y soporte completo para Apple Silicon.",
    features: [
      "Edición de fotos con IA (ML Super Resolution)",
      "Herramientas de dibujo y vectoriales",
      "Soporte para capas, máscaras y efectos",
      "Exportación en múltiples formatos",
      "Interfaz moderna y optimizada para Mac",
      "Integración con Photos y Final Cut Pro"
    ],
    compatibility: "macOS 10.15 (Catalina) o superior",
    metodoPago: "Binance / PayPal",
      
  },

  // ==================== MÚSICA ====================
  {
    id: 13,
    name: "Celemony Melodyne 5 Studio",
    price: 32.0,
    image: "img/apps/melodyne.png",
    category: "música",
    description: "El estándar de edición de audio polifónico. Corrige afinación, tiempo y forma de notas con precisión quirúrgica. Versión Studio completa.",
    features: [
      "Edición polifónica de audio (DNA)",
      "Corrección de afinación y tiempo en tiempo real",
      "Análisis de forma y dinámica de notas",
      "Integración con DAWs vía ARA",
      "Soporte multicanal y multitrack",
      "Algoritmos avanzados de detección de notas"
    ],
    compatibility: "macOS 10.12 (Sierra) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 14,
    name: "Logic Pro",
    price: 38.0,
    image: "img/apps/logic.webp",
    category: "música",
    description: "DAW profesional de Apple con miles de instrumentos, efectos y herramientas de producción musical de nivel mundial.",
    features: [
      "Más de 60 GB de sonidos e instrumentos",
      "Edición avanzada de audio y MIDI",
      "Drummer y Step Sequencer inteligente",
      "Flex Time y Flex Pitch",
      "Soporte completo para Apple Silicon",
      "Integración nativa con GarageBand"
    ],
    compatibility: "macOS 11 (Big Sur) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 15,
    name: "FL Studio",
    price: 29.0,
    image: "img/apps/flstudio.png",
    category: "música",
    description: "Estación de trabajo de audio líder para producción electrónica y beatmaking. Interfaz intuitiva y loops infinitos.",
    features: [
      "Secuenciador de patrones y playlist",
      "Más de 80 plugins incluidos",
      "Edición de audio y automatización",
      "Soporte VST/AU y MIDI",
      "Rendimiento optimizado en Mac",
      "Actualizaciones de por vida"
    ],
    compatibility: "macOS 10.13 (High Sierra) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 16,
    name: "Pro Tools",
    price: 45.0,
    image: "img/apps/protools.svg",
    category: "música",
    description: "El estándar de la industria en grabación, mezcla y masterización profesional usado en estudios de todo el mundo.",
    features: [
      "Edición y mezcla de audio de alta resolución",
      "Soporte multitrack ilimitado",
      "Plugins AAX incluidos",
      "Colaboración en tiempo real",
      "Herramientas de masterización Elite",
      "Optimizado para hardware profesional"
    ],
    compatibility: "macOS 10.15 (Catalina) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 17,
    name: "Cubase Pro",
    price: 42.0,
    image: "img/apps/cubase.png",
    category: "música",
    description: "DAW completo de Steinberg con herramientas avanzadas de composición, grabación y producción musical.",
    features: [
      "Motor de audio de 64 bits",
      "VariAudio para corrección melódica",
      "Chord Track y Score Editor",
      "MixConsole avanzado",
      "Soporte completo para VST3",
      "Integración con hardware Steinberg"
    ],
    compatibility: "macOS 10.15 (Catalina) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 18,
    name: "Waves 12 (Plugins Bundle)",
    price: 35.0,
    image: "img/apps/wabes.webp",
    category: "música",
    description: "Colección completa de plugins de audio profesional de Waves. Más de 200 procesadores de sonido de estudio.",
    features: [
      "Compresores, EQ y reverbs legendarios",
      "Herramientas de mastering y restauración",
      "Plugins para vocales y guitarras",
      "Compatibilidad con todos los DAWs",
      "Licencia perpetua con actualizaciones",
      "Optimización nativa Apple Silicon"
    ],
    compatibility: "macOS 10.14 (Mojave) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 19,
    name: "Omnisphere",
    price: 48.0,
    image: "img/apps/omnisphere.png",
    category: "música",
    description: "Sintetizador de software más premiado del mundo con más de 14.000 sonidos. Ideal para productores y compositores.",
    features: [
      "Biblioteca masiva de sonidos",
      "Motor de síntesis híbrido",
      "Integración con hardware (Hardware Synth Integration)",
      "Efectos integrados de alta calidad",
      "Orbital Engine para manipulación en tiempo real",
      "Soporte completo AU/VST/AAX"
    ],
    compatibility: "macOS 10.13 (High Sierra) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 37,
    name: "Spotify",
    price: 0.0,
    image: "img/apps/spotify.svg",
    category: "música",
    description: "Aplicación oficial de Spotify para escuchar música, podcasts y playlists en alta calidad.",
    features: [
      "Más de 100 millones de canciones",
      "Modo offline y descargas",
      "Calidad de audio hasta 320kbps",
      "Playlists colaborativas y recomendaciones",
      "Totalmente gratuita (Premium opcional)",
      "Interfaz optimizada para Mac"
    ],
    compatibility: "macOS 10.13 o superior",
    metodoPago: "Gratis",
    entrega: "  Inmediata (Gratis)",
    downloadLink: "https://www.mediafire.com/download/spotify-mac",
  },
  {
    id: 40,
    name: "GarageBand",
    price: 0.0,
    image: "img/apps/garageband.webp",
    category: "música",
    description: "Estudio de música completo y gratuito de Apple. Perfecto para principiantes y músicos.",
    features: [
      "Más de 100 instrumentos virtuales",
      "Drummer inteligente y loops",
      "Grabación de audio y MIDI",
      "Lecciones de guitarra y piano",
      "Totalmente gratuito (incluido con macOS)",
      "Integración con Logic Pro"
    ],
    compatibility: "macOS 11 (Big Sur) o superior",
    metodoPago: "Gratis",
    entrega: "  Inmediata (Gratis)",
    downloadLink: "https://www.mediafire.com/download/garageband-mac",
  },

  // ==================== 3D ====================
  {
    id: 22,
    name: "Cinema 4D",
    price: 50.0,
    image: "img/apps/cinema.svg",
    category: "3d",
    description: "Software de modelado, animación y renderizado 3D profesional usado en cine, televisión y diseño de productos.",
    features: [
      "Modelado 3D paramétrico y poligonal",
      "Animación y rigging avanzado",
      "Renderizado físico con Redshift",
      "MoGraph para motion graphics",
      "Soporte para partículas y simulaciones",
      "Interfaz intuitiva y altamente personalizable"
    ],
    compatibility: "macOS 10.15 (Catalina) o superior",
    metodoPago: "Binance / PayPal",
      
  },

  // ==================== VIDEO ====================
  {
    id: 20,
    name: "Final Cut Pro",
    price: 35.0,
    image: "img/apps/finalcut.png",
    category: "video",
    description: "Editor de video profesional de Apple con edición magnética, efectos avanzados y optimización nativa para Apple Silicon.",
    features: [
      "Edición magnética y organización automática",
      "Color grading avanzado con Color Wheels",
      "Efectos y transiciones en tiempo real",
      "Soporte multicámara y 360°",
      "Exportación rápida 4K/8K",
      "Integración con Motion y Compressor"
    ],
    compatibility: "macOS 11 (Big Sur) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 21,
    name: "DaVinci Resolve Studio",
    price: 42.0,
    image: "img/apps/DaVinci.svg",
    category: "video",
    description: "Suite completa de edición, color, audio y efectos visuales. Versión Studio con todas las funciones profesionales.",
    features: [
      "Edición 4K/8K y fusión de nodos",
      "Corrección de color avanzada con HDR",
      "Fairlight Audio completo",
      "Fusion para VFX y motion graphics",
      "Colaboración en equipo en tiempo real",
      "Soporte para Apple Silicon y GPU"
    ],
    compatibility: "macOS 10.15 (Catalina) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 23,
    name: "Camtasia 2019",
    price: 25.0,
    image: "img/apps/camtasia.svg",
    category: "video",
    description: "Software de grabación y edición de pantalla profesional. Ideal para tutoriales, presentaciones y videos educativos.",
    features: [
      "Grabación de pantalla y webcam simultánea",
      "Edición de video drag-and-drop",
      "Efectos, transiciones y anotaciones",
      "Exportación en múltiples formatos y resoluciones",
      "Biblioteca de assets y plantillas",
      "Optimizado para Mac"
    ],
    compatibility: "macOS 10.13 (High Sierra) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 29,
    name: "OBS Studio",
    price: 0.0,
    image: "img/apps/obs.png",
    category: "video",
    description: "Software gratuito de grabación y transmisión en vivo de alta calidad. Ideal para streamers y creadores de contenido.",
    features: [
      "Grabación y streaming en 4K/60fps",
      "Escenas y fuentes ilimitadas",
      "Filtros de audio y video avanzados",
      "Soporte para plugins y extensiones",
      "Optimizado para Mac y Apple Silicon",
      "Completamente gratuito y open source"
    ],
    compatibility: "macOS 10.13 o superior",
    metodoPago: "Gratis",
    entrega: "  Inmediata (Gratis)",
    downloadLink: "https://www.mediafire.com/download/obs-studio-mac",
  },
  {
    id: 41,
    name: "iMovie",
    price: 0.0,
    image: "img/apps/imovie.png",
    category: "video",
    description: "Editor de video intuitivo y gratuito de Apple. Ideal para crear películas caseras y trailers.",
    features: [
      "Edición sencilla de video y audio",
      "Efectos, transiciones y títulos",
      "Biblioteca de temas y música",
      "Exportación 4K",
      "Totalmente gratuito (incluido con macOS)",
      "Integración con Final Cut Pro"
    ],
    compatibility: "macOS 11 (Big Sur) o superior",
    metodoPago: "Gratis",
    entrega: "  Inmediata (Gratis)",
    downloadLink: "https://www.mediafire.com/download/imovie-mac",
  },

  // ==================== UTILIDADES ====================
  {
    id: 24,
    name: "CleanMyMac X",
    price: 18.0,
    image: "img/apps/cleanmac.png",
    category: "utilidades",
    description: "La herramienta definitiva para mantener tu Mac limpia, rápida y optimizada. Elimina basura, malware y libera espacio.",
    features: [
      "Limpieza inteligente de sistema",
      "Desinstalador completo de apps",
      "Optimizador de rendimiento",
      "Protección contra malware",
      "Gestión de extensiones y grandes archivos",
      "Interfaz moderna y fácil de usar"
    ],
    compatibility: "macOS 10.13 (High Sierra) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 25,
    name: "Parallels Desktop",
    price: 30.0,
    image: "img/apps/parallels.webp",
    category: "utilidades",
    description: "La forma más rápida de ejecutar Windows en Mac sin reiniciar. Ideal para apps exclusivas de Windows.",
    features: [
      "Virtualización de alto rendimiento",
      "Coherence Mode (ejecutar apps Windows como nativas)",
      "Soporte para Apple Silicon (M1/M2/M3)",
      "Integración total con macOS",
      "Compartición de archivos y dispositivos",
      "Optimización automática de recursos"
    ],
    compatibility: "macOS 11 (Big Sur) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 26,
    name: "The Unarchiver",
    price: 0.0,
    image: "img/apps/the uniarchiver.png",
    category: "utilidades",
    description: "Descompresor universal gratuito para abrir cualquier archivo comprimido en Mac (ZIP, RAR, 7z, TAR, etc.).",
    features: [
      "Soporte para más de 50 formatos de compresión",
      "Extracción automática y rápida",
      "Interfaz sencilla y ligera",
      "Totalmente gratuito y sin anuncios",
      "Integración con Finder",
      "Actualizaciones constantes"
    ],
    compatibility: "macOS 10.10 o superior",
    metodoPago: "Gratis",
    entrega: "  Inmediata (Gratis)",
    downloadLink: "https://www.mediafire.com/download/the-unarchiver-mac",
  },
  {
    id: 27,
    name: "VLC",
    price: 0.0,
    image: "img/apps/vcl.png",
    category: "utilidades",
    description: "Reproductor multimedia gratuito y universal que reproduce prácticamente cualquier formato de video y audio.",
    features: [
      "Soporte para cientos de formatos (MKV, MP4, AVI, etc.)",
      "Reproducción de streams y subtítulos",
      "Conversor integrado",
      "Interfaz simple y personalizable",
      "Sin publicidad ni spyware",
      "Totalmente gratuito y open source"
    ],
    compatibility: "macOS 10.10 o superior",
    metodoPago: "Gratis",
    entrega: "  Inmediata (Gratis)",
    downloadLink: "https://www.mediafire.com/download/vlc-media-player-mac",
  },
  {
    id: 28,
    name: "Firefox",
    price: 0.0,
    image: "img/apps/firefox.svg",
    category: "utilidades",
    description: "Navegador web rápido, privado y personalizable. Bloquea rastreadores y protege tu privacidad.",
    features: [
      "Bloqueo automático de trackers",
      "Sincronización entre dispositivos",
      "Extensiones y temas personalizados",
      "Modo oscuro y optimización de batería",
      "Motor Quantum ultrarrápido",
      "Totalmente gratuito y open source"
    ],
    compatibility: "macOS 10.12 o superior",
    metodoPago: "Gratis",
    entrega: "  Inmediata (Gratis)",
    downloadLink: "https://www.mediafire.com/download/firefox-mac",
  },
  {
    id: 30,
    name: "Discord",
    price: 0.0,
    image: "img/apps/discord.svg",
    category: "utilidades",
    description: "Plataforma de chat, voz y video gratuita para comunidades, gamers y equipos de trabajo.",
    features: [
      "Chats de texto, voz y video en HD",
      "Servidores y canales ilimitados",
      "Screen sharing y Go Live",
      "Integración con juegos y apps",
      "Totalmente gratuito (Nitro opcional)",
      "Interfaz moderna y ligera"
    ],
    compatibility: "macOS 10.13 o superior",
    metodoPago: "Gratis",
    entrega: "  Inmediata (Gratis)",
    downloadLink: "https://www.mediafire.com/download/discord-mac",
  },
  {
    id: 31,
    name: "Steam",
    price: 0.0,
    image: "img/apps/steam.svg",
    category: "utilidades",
    description: "Plataforma de videojuegos gratuita con miles de títulos, multijugador y herramientas de comunidad.",
    features: [
      "Tienda de juegos y descuentos frecuentes",
      "Biblioteca personal y Cloud Save",
      "Chat y multijugador integrado",
      "Soporte para controladores y VR",
      "Totalmente gratuita (juegos de pago)",
      "Optimizada para Mac"
    ],
    compatibility: "macOS 10.13 o superior",
    metodoPago: "Gratis",
    entrega: "  Inmediata (Gratis)",
    downloadLink: "https://www.mediafire.com/download/steam-mac",
  },
  {
    id: 32,
    name: "Google Chrome",
    price: 0.0,
    image: "img/apps/google-chrome.svg",
    category: "utilidades",
    description: "Navegador web rápido y seguro de Google con sincronización en la nube y miles de extensiones.",
    features: [
      "Velocidad y rendimiento superior",
      "Sincronización de contraseñas y marcadores",
      "Traductor integrado y búsqueda inteligente",
      "Miles de extensiones en Chrome Web Store",
      "Totalmente gratuito",
      "Actualizaciones automáticas"
    ],
    compatibility: "macOS 10.13 o superior",
    metodoPago: "Gratis",
    entrega: "  Inmediata (Gratis)",
    downloadLink: "https://www.mediafire.com/download/google-chrome-mac",
  },
  {
    id: 33,
    name: "Keka",
    price: 0.0,
    image: "img/apps/keka.jpeg",
    category: "utilidades",
    description: "Compresor y descompresor nativo y rápido para Mac. Soporta RAR, ZIP, 7z y más formatos.",
    features: [
      "Compresión y extracción ultra rápida",
      "Interfaz drag-and-drop",
      "Soporte para contraseñas y cifrado",
      "Integración con Finder",
      "Totalmente gratuito y ligero",
      "Optimizado para Apple Silicon"
    ],
    compatibility: "macOS 10.10 o superior",
    metodoPago: "Gratis",
    entrega: "  Inmediata (Gratis)",
    downloadLink: "https://www.mediafire.com/download/keka-mac",
  },
  {
    id: 34,
    name: "VirtualBox",
    price: 0.0,
    image: "img/apps/virtualbox.png",
    category: "utilidades",
    description: "Software de virtualización gratuito y open source de Oracle para ejecutar otros sistemas operativos en Mac.",
    features: [
      "Máquinas virtuales ilimitadas",
      "Soporte para Windows, Linux y más",
      "Instantáneas y clonación",
      "Compartición de carpetas y USB",
      "Totalmente gratuito",
      "Fácil de usar"
    ],
    compatibility: "macOS 10.13 o superior",
    metodoPago: "Gratis",
    entrega: "  Inmediata (Gratis)",
    downloadLink: "https://www.mediafire.com/download/virtualbox-mac",
  },
  {    
    id: 35,
    name: "AnyDesk",
    price: 15.0,
    image: "img/apps/any.svg",
    category: "utilidades",
    description: "Software de escritorio remoto ultrarrápido y seguro. Conexión instantánea desde cualquier lugar.",
    features: [
      "Conexión remota de baja latencia",
      "Transferencia de archivos segura",
      "Soporte para múltiples monitores",
      "Modo unattended y acceso sin supervisión",
      "Encriptación de nivel bancario",
      "Ligero y multiplataforma"
    ],
    compatibility: "macOS 10.10 o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 36,
    name: "TeamViewer",
    price: 12.0,
    image: "img/apps/team.svg",
    category: "utilidades",
    description: "Acceso remoto y soporte técnico profesional. Conexión segura a cualquier dispositivo.",
    features: [
      "Acceso remoto en tiempo real",
      "Transferencia de archivos y chat",
      "Impresión remota",
      "Soporte para reuniones y presentaciones",
      "Encriptación AES de 256 bits",
      "Versión gratuita para uso personal"
    ],
    compatibility: "macOS 10.12 o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 38,
    name: "Zoom",
    price: 1.0,
    image: "img/apps/zoom.svg",
    category: "utilidades",
    description: "Plataforma de videoconferencias líder para reuniones, clases y webinars.",
    features: [
      "Videollamadas HD ilimitadas (básico)",
      "Compartición de pantalla y pizarra",
      "Grabación en la nube o local",
      "Sala de espera y controles de host",
      "Totalmente gratuita para uso básico",
      "Optimizada para Mac"
    ],
    compatibility: "macOS 10.10 o superior",
    metodoPago: "Gratis",
    entrega: "  Inmediata (Gratis)",
    downloadLink: "https://www.mediafire.com/download/zoom-mac",
  },
  {
    id: 39,
    name: "Android Studio",
    price: 1.0,
    image: "img/apps/android.svg",
    category: "utilidades",
    description: "Entorno de desarrollo oficial de Google para crear aplicaciones Android.",
    features: [
      "Editor de código inteligente",
      "Emulador de dispositivos Android",
      "Herramientas de depuración y testing",
      "Soporte para Kotlin y Java",
      "Totalmente gratuito y oficial",
      "Actualizaciones constantes"
    ],
    compatibility: "macOS 10.14 o superior",
    metodoPago: "Gratis",
    entrega: "  Inmediata (Gratis)",
    downloadLink: "https://www.mediafire.com/download/android-studio-mac",
  },
  {
    id: 42,
    name: "Keynote",
    price: 1.0,
    image: "img/apps/keynote.png",
    category: "utilidades",
    description: "Aplicación de presentaciones profesional y gratuita de Apple con animaciones espectaculares.",
    features: [
      "Plantillas profesionales y temas",
      "Animaciones y transiciones avanzadas",
      "Colaboración en tiempo real",
      "Exportación a PDF, PowerPoint y video",
      "Totalmente gratuita (incluido con macOS)",
      "Optimizada para Apple Silicon"
    ],
    compatibility: "macOS 11 (Big Sur) o superior",
    metodoPago: "Gratis",
    entrega: "  Inmediata (Gratis)",
    downloadLink: "https://www.mediafire.com/download/keynote-mac",
  },
  {
    id: 43,
    name: "Numbers",
    price: 1.0,
    image: "img/apps/numbers.svg",
    category: "utilidades",
    description: "Hoja de cálculo potente y visual de Apple. Ideal para presupuestos, gráficos y análisis de datos.",
    features: [
      "Plantillas inteligentes y diseños",
      "Gráficos y tablas interactivas",
      "Fórmulas y funciones avanzadas",
      "Colaboración en tiempo real",
      "Totalmente gratuita (incluido con macOS)",
      "Exportación a Excel y PDF"
    ],
    compatibility: "macOS 11 (Big Sur) o superior",
    metodoPago: "Gratis",
    entrega: "  Inmediata (Gratis)",
    downloadLink: "https://www.mediafire.com/download/numbers-mac",
  },
  // Ejemplo Photoshop 2021
  {
    id: 101, // Usa un rango de IDs diferente para apps sueltas
    name: "Adobe Photoshop 2021 (Individual)",
    price: 9.0,
    image: "img/apps/ps2021.svg",
    category: "fotografía",
    description:
      "La herramienta estándar de edición de imágenes. La versión 2021 destaca por introducir los Neural Filters, permitiendo cambiar expresiones faciales o colorear fotos antiguas en segundos.",
    features: [
      "Neural Filters (IA para retoque avanzado)",
      "Sustitución de Cielo automática",
      "Panel de Descubrimiento mejorado",
      "Documentos en la nube con historial de versiones",
      "Herramienta de selección de objetos ultra rápida",
    ],
    compatibility: "macOS 10.14 o superior",
    entrega: "Instalación independiente",
  },
  // Photoshop 2023
  {
    id: 102,
    name: "Adobe Photoshop 2023 (Individual)",
    price: 12.0,
    image: "img/apps/ps2021.svg",
    category: "fotografía",
    description:
      "La versión más potente hasta la fecha. Incluye la herramienta de eliminación de distracciones con un clic y una integración perfecta con archivos de Illustrator.",
    features: [
      "Herramienta Quitar (IA Generativa básica)",
      "Selecciones precisas con un solo clic",
      "Soporte nativo para procesadores Apple M1/M2",
      "Filtro de Restauración de fotos dañadas",
      "Nuevos pinceles y degradados dinámicos",
    ],
    compatibility: "macOS 12 (Monterey) o superior",
    entrega: "Instalación independiente",
  },
  // Ejemplo Illustrator 2019 (Muy estable)
  {
    id: 201,
    name: "Adobe Illustrator 2019 (Individual)",
    price: 8.0,
    image: "img/apps/illustrator.svg",
    category: "diseño",
    description:
      "El software de vectores por excelencia. La versión 2019 es famosa por su estabilidad y por introducir los degradados de forma libre.",
    features: [
      "Degradados de forma libre (Freeform Gradients)",
      "Edición global de objetos similares",
      "Modo de presentación a pantalla completa",
      "Zoom mejorado y rendimiento GPU",
      "Barra de herramientas personalizable",
    ],
    compatibility: "macOS 10.12 a 10.14",
    entrega: "Instalación independiente",
  },
  // Illustrator 2022 (Optimizado para M1/M2)
  {
    id: 202,
    name: "Adobe Illustrator 2022 (Individual)",
    price: 11.0,
    image: "img/apps/illustrator.svg",
    category: "diseño",
    description:
      "Versión moderna optimizada para máxima velocidad en equipos Mac nuevos. Perfecta para trabajar con archivos complejos sin lentitud.",
    features: [
      "Efectos 3D mejorados (Inflado y materiales)",
      "Detección automática de fuentes faltantes",
      "Colaboración compartiendo enlaces de revisión",
      "Soporte nativo para Apple Silicon",
      "Renderizado en tiempo real",
    ],
    compatibility: "macOS 11 (Big Sur) o superior",
    entrega: "Instalación independiente",
  },
  // Premiere Pro 2020
  {
    id: 301,
    name: "Adobe Premiere Pro 2020 (Individual)",
    price: 10.0,
    image: "img/apps/Premiere.svg",
    category: "video",
    description:
      "Edición de video profesional. Esta versión introdujo el Auto Reframe, que ajusta automáticamente tus videos para Instagram o TikTok.",
    features: [
      "Auto Reframe inteligente",
      "Mejoras en el panel de Gráficos Esenciales",
      "Soporte para nuevos formatos de cámara (ProRes RAW)",
      "Ajustes de audio HDR",
      "Estabilidad mejorada para renders largos",
    ],
    compatibility: "macOS 10.13 o superior",
    entrega: "Instalación independiente",
  },
  // Premiere Pro 2023
  {
    id: 302,
    name: "Adobe Premiere Pro 2023 (Individual)",
    price: 14.0,
    image: "img/apps/Premiere.svg",
    category: "video",
    description:
      "La cima de la edición de video. Incluye funciones de transcripción de audio a texto automáticas para subtítulos rápidos.",
    features: [
      "Transcripción automática de voz a texto",
      "Herramienta Remix para música (IA)",
      "Exportación ultra rápida con codificación H.264 nativa",
      "Mapeo de tonos automático para HDR/SDR",
      "Soporte total para MacBook Pro M2",
    ],
    compatibility: "macOS 12 o superior",
    entrega: "Instalación independiente",
  },

  // ==================== NUEVAS APLICACIONES (A-C) ====================
  {
    id: 44,
    name: "AnyTrans",
    price: 20.0,
    image: "img/apps/anytrans.avif",
    category: "utilidades",
    description: "Gestor completo de contenido para iOS. Transfiere fotos, videos, música y otros archivos entre dispositivos y computadoras con facilidad.",
    features: [
      "Transferencia de datos iOS a Mac",
      "Gestor de biblioteca multimedia",
      "Respaldo y restauración de datos",
      "Conversión de formatos multimedia",
      "Gestor de aplicaciones iOS",
      "Sincronización inteligente entre dispositivos"
    ],
    compatibility: "macOS 10.12 o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 45,
    name: "Arturia",
    price: 29.0,
    image: "img/apps/arturia.png",
    category: "música",
    description: "Suite de instrumentos virtuales y software de producción musical. Emulaciones auténticas de sintetizadores clásicos y herramientas modernas.",
    features: [
      "Múltiples sintetizadores virtuales",
      "Emulaciones de instrumentos clásicos",
      "Efectos de audio profesionales",
      "Integración con DAWs principales",
      "Soporte VST/AU/AAX",
      "Actualizaciones constantes"
    ],
    compatibility: "macOS 10.13 (High Sierra) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 46,
    name: "Arturia Analog Lab Pro",
    price: 35.0,
    image: "img/apps/arturiaanalog.jpg",
    category: "música",
    description: "La versión professional de Analog Lab con acceso a miles de presets y sonidos analógicos auténticos de los mejores sintetizadores.",
    features: [
      "Acceso a todos los sintetizadores Arturia",
      "Miles de presets profesionales",
      "Motor de síntesis híbrido avanzado",
      "Control MIDI optimizado",
      "Compatibilidad total VST/AU/AAX",
      "Actualizaciones de por vida incluidas"
    ],
    compatibility: "macOS 10.13 (High Sierra) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 47,
    name: "Blackmagic Disk Speed Test",
    price: 0.0,
    image: "img/apps/backmagic.jpg",
    category: "utilidades",
    description: "Herramienta gratuita de Blackmagic para medir la velocidad de lectura y escritura de discos duros y SSD en tiempo real.",
    features: [
      "Pruebas de velocidad en tiempo real",
      "Gráficos detallados de rendimiento",
      "Compatibilidad con HDD y SSD",
      "Interfaz clara y simple",
      "Exportación de resultados",
      "Totalmente gratuito"
    ],
    compatibility: "macOS 10.12 o superior",
    metodoPago: "Gratis",
    entrega: "  Inmediata (Gratis)",
    downloadLink: "https://www.mediafire.com/download/blackmagic-disk-speed-test-mac",
  },
  {
    id: 48,
    name: "Brightness Control",
    price: 0.0,
    image: "img/apps/brightnesscontrol.png",
    category: "utilidades",
    description: "Aplicación gratuita para controlar el brillo de la pantalla con precisión. Incluye atajos de teclado personalizables.",
    features: [
      "Control fino del brillo",
      "Atajos de teclado personalizables",
      "Perfiles de brillo guardables",
      "Control rápido desde la barra de menú",
      "Interfaz minimalista",
      "Totalmente gratuito"
    ],
    compatibility: "macOS 10.10 o superior",
    metodoPago: "Gratis",
    entrega: "  Inmediata (Gratis)",
    downloadLink: "https://www.mediafire.com/download/brightness-control-mac",
  },
  {
    id: 49,
    name: "Compressor",
    price: 8.0,
    image: "img/apps/compressor.webp",
    category: "utilidades",
    description: "Herramienta de compresión de archivos y carpetas de Apple. Optimiza el almacenamiento sin perder calidad.",
    features: [
      "Compresión inteligente de archivos",
      "Soporte para múltiples formatos",
      "Compresión en lote",
      "Interfaz integrada con Finder",
      "Algoritmos de compresión avanzados",
      "Compatible con versiones recientes de macOS"
    ],
    compatibility: "macOS 10.14 (Mojave) o superior",
    metodoPago: "Binance / PayPal",
    entrega: "Instalación independiente",
  },
  
  // ==================== CUBASE ====================
  {
    id: 50,
    name: "Cubase Elements 10.5",
    price: 26.0,
    image: "img/apps/cubase.png",
    category: "música",
    description: "Versión básica de Cubase con herramientas esenciales para grabación, edición y producción musical.",
    features: [
      "Grabación multipista y edición MIDI",
      "Motor de audio de 64 bits",
      "Arturia V Collection Lite incluida",
      "Mezclador profesional",
      "Soporte para VST3",
      "Ideal para principiantes y estudiantes"
    ],
    compatibility: "macOS 10.13 (High Sierra) o superior",
    metodoPago: "Binance / PayPal",
      
  },

  // ==================== D-F ====================
  {
    id: 51,
    name: "Disk Drill",
    price: 18.0,
    image: "img/apps/diskd.png",
    category: "utilidades",
    description: "Software de recuperación de datos profesional. Recupera archivos eliminados de discos duros, SSD y memorias USB.",
    features: [
      "Recuperación de datos avanzada",
      "Análisis profundo de discos",
      "Vista previa antes de recuperar",
      "Protección preventiva de datos",
      "Soporte para múltiples formatos de archivo",
      "Interfaz intuitiva y rápida"
    ],
    compatibility: "macOS 10.12 o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 52,
    name: "DVD Cloner",
    price: 22.0,
    image: "img/apps/dvdcloner.jpg",
    category: "video",
    description: "Software profesional para copiar y clonar DVDs. Incluye herramientas de conversión y compresión de video.",
    features: [
      "Copia de DVDs sin protección",
      "Conversión de DVD a video digital",
      "Compresión inteligente de contenido",
      "Editor de video integrado",
      "Quemador de DVD",
      "Soporte para múltiples formatos"
    ],
    compatibility: "macOS 10.13 o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 53,
    name: "Studio One",
    price: 39.0,
    image: "img/apps/studioone.png",
    category: "música",
    description: "DAW profesional de PreSonus con flujo de trabajo intuitivo y herramientas avanzadas de producción.",
    features: [
      "Grabación y mezcla multipista",
      "Sintetizador Presence XT",
      "Herramientas de edición MIDI avanzadas",
      "Mastering con extensiones",
      "Colaboración en tiempo real",
      "Integración con hardware PreSonus"
    ],
    compatibility: "macOS 10.13 (High Sierra) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 54,
    name: "Filmage Screen",
    price: 21.0,
    image: "img/apps/filmage.png",
    category: "video",
    description: "Software de grabación de pantalla y editor de video integrado. Ideal para tutoriales, demostraciones y streaming.",
    features: [
      "Grabación de pantalla en 4K",
      "Editor de video integrado",
      "Captura de webcam y micrófono",
      "Efectos y transiciones",
      "Exportación en múltiples formatos",
      "Optimizado para Mac"
    ],
    compatibility: "macOS 10.13 o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 55,
    name: "Final Draft",
    price: 32.0,
    image: "img/apps/finaldraft.png",
    category: "utilidades",
    description: "Software profesional de escritura de guiones para cine, televisión y teatro. Estándar de la industria.",
    features: [
      "Formato de guión profesional automático",
      "Navegación por escenas y actos",
      "Colaboración en línea",
      "Exportación en múltiples formatos",
      "Herramientas de análisis de guión",
      "Integración con software profesional"
    ],
    compatibility: "macOS 10.13 (High Sierra) o superior",
    metodoPago: "Binance / PayPal",
      
  },

  // ==================== G-L ====================
  {
    id: 56,
    name: "Gfx CardStatus",
    price: 0.0,
    image: "img/apps/gfxcardstatus.webp",
    category: "utilidades",
    description: "Aplicación gratuita para monitorear y cambiar entre GPU integrada y dedicada en MacBooks.",
    features: [
      "Monitoreo en tiempo real de GPU",
      "Cambio automático GPU",
      "Control manual de rendimiento",
      "Monitor de temperatura",
      "Historial de uso",
      "Totalmente gratuito"
    ],
    compatibility: "macOS 10.10 o superior",
    metodoPago: "Gratis",
    entrega: "  Inmediata (Gratis)",
    downloadLink: "https://www.mediafire.com/download/gfx-cardstatus-mac",
  },
  {
    id: 57,
    name: "GraphicConverter 11",
    price: 24.0,
    image: "img/apps/graphicC.webp",
    category: "fotografía",
    description: "Conversor universal de imágenes y gestor de archivos. Soporta más de 900 formatos de imagen.",
    features: [
      "Soporte para más de 900 formatos",
      "Editor de imágenes integrado",
      "Conversión por lotes",
      "Galería y organizador",
      "Herramientas de retoque",
      "Automatización con scripts"
    ],
    compatibility: "macOS 10.13 (High Sierra) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 58,
    name: "IBM SPSS Statistics 25",
    price: 45.0,
    image: "img/apps/spss-1.svg",
    category: "utilidades",
    description: "Software estadístico profesional para análisis de datos. Usado en investigación e instituciones académicas.",
    features: [
      "Análisis estadístico avanzado",
      "Visualización de datos",
      "Modelado predictivo",
      "Exportación de reportes",
      "Integración con R y Python",
      "Soporte profesional incluido"
    ],
    compatibility: "macOS 10.12 (Sierra) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 59,
    name: "iCareFone For WhatsApp Transfer",
    price: 16.0,
    image: "img/apps/icarefone.webp",
    category: "utilidades",
    description: "Herramienta para transferir chats y datos de WhatsApp entre dispositivos iOS y computadora.",
    features: [
      "Exportación de chats WhatsApp",
      "Transferencia a otro dispositivo",
      "Respaldo de datos",
      "Recuperación de mensajes",
      "Compatible con iOS e iCloud",
      "Interfaz segura y fácil"
    ],
    compatibility: "macOS 10.13 o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 60,
    name: "ImageRanger Pro",
    price: 20.0,
    image: "img/apps/imageranger.jpg",
    category: "fotografía",
    description: "Gestor profesional de fotos con búsqueda avanzada por contenido visual y análisis inteligente.",
    features: [
      "Búsqueda visual por contenido",
      "Reconocimiento de objetos (IA)",
      "Gestión de duplicados",
      "Organización automática",
      "Editor de metadatos",
      "Sincronización entre dispositivos"
    ],
    compatibility: "macOS 10.13 (High Sierra) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 61,
    name: "iZotope Ozone Advanced",
    price: 38.0,
    image: "img/apps/ozone1.png",
    category: "música",
    description: "Suite profesional de procesamiento de audio. Incluye herramientas de masterización y mezcla avanzadas.",
    features: [
      "EQ, compresor y dinámico",
      "Reverb y espacialización",
      "Mastering avanzado",
      "Assistant (IA para mezcla)",
      "Soporte VST/AU/AAX",
      "Integración con DAWs"
    ],
    compatibility: "macOS 10.13 (High Sierra) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 62,
    name: "Komplete 12",
    price: 52.0,
    image: "img/apps/komplete12.png",
    category: "música",
    description: "Colección masiva de Native Instruments con instrumentos, loops y sonidos para producción musical.",
    features: [
      "Más de 45 productos de NI",
      "Miles de instrumentos y loops",
      "Sintetizadores y muestreadores",
      "Herramientas de efectos profesionales",
      "Maschine integrado",
      "Actualizaciones de por vida"
    ],
    compatibility: "macOS 10.11 (El Capitan) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 63,
    name: "KONTAKT 7",
    price: 42.0,
    image: "img/apps/konkat.webp",
    category: "música",
    description: "Muestreador profesional de Native Instruments. Instrumentos virtuales con miles de sonidos incluidos.",
    features: [
      "Librería masiva de sonidos",
      "Herramientas de edición avanzadas",
      "Muestreo y timestretch",
      "Motor de síntesis",
      "Soporte VST/AU/AAX",
      "Actualizaciones constantes"
    ],
    compatibility: "macOS 10.11 (El Capitan) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
  "id": 63,
  "name": "KONTAKT 8",
  "price": 42.0,
  "image": "img/apps/kont.webp",
  "category": "música",
  "description": "La plataforma de muestreo estándar de la industria de Native Instruments. Descubre nuevas herramientas creativas, síntesis avanzada y una integración profunda con librerías virtuales de última generación.",
  "features": [
    "Nuevas funciones creativas 'Tools' (generadores de acordes y frases en tiempo real)",
    "Motor de síntesis 'Leap' optimizado para manipulación rápida de loops y samples",
    "Navegador inteligente mejorado con filtrado por etiquetas y carga ultra rápida",
    "Herramientas avanzadas de edición, muestreo profundo y timestretch de alta fidelidad",
    "Compatibilidad total con el formato NKS de nueva generación y soporte VST3/AU/AAX",
    "Soporte nativo y optimizado para procesadores Apple Silicon y arquitecturas multinúcleo"
  ],
  "compatibility": "macOS 14 (Sonoma) o superior / Windows 10 u 11 (64-bit)",
  "metodoPago": "Binance / PayPal"
},
  {
    id: 64,
    name: "LUMINAR 4",
    price: 28.0,
    image: "img/apps/luminar.svg",
    category: "fotografía",
    description: "Editor de fotos avanzado con IA. Incluye herramientas de edición no destructiva y filtros profesionales.",
    features: [
      "Edición con IA y machine learning",
      "Herramientas de retoque inteligente",
      "Soporte RAW completo",
      "Efectos y filtros creativos",
      "Plugin para Lightroom",
      "Interfaz moderna e intuitiva"
    ],
    compatibility: "macOS 10.13 (High Sierra) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 65,
    name: "Luxion KeyShot",
    price: 48.0,
    image: "img/apps/luxion.jpg",
    category: "3d",
    description: "Software de renderizado 3D fotorealista en tiempo real. Perfecto para visualización de productos y diseño.",
    features: [
      "Renderizado en tiempo real",
      "Iluminación global y materiales avanzados",
      "Integración con CAD",
      "Animación de productos",
      "Plugins para modeladores 3D",
      "Exportación de alta calidad"
    ],
    compatibility: "macOS 10.12 (Sierra) o superior",
    metodoPago: "Binance / PayPal",
      
  },

  // ==================== M-P ====================
  {
    id: 66,
    name: "Mac Booster",
    price: 15.0,
    image: "img/apps/macbooster.png",
    category: "utilidades",
    description: "Suite de optimización para limpiar y acelerar Mac. Elimina archivos innecesarios y optimiza rendimiento.",
    features: [
      "Limpieza profunda del sistema",
      "Optimización de memoria",
      "Desinstalador de apps completo",
      "Gestor de startup",
      "Monitor de rendimiento",
      "Interfaz amigable"
    ],
    compatibility: "macOS 10.12 (Sierra) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  
  {
    id: 68,
    name: "Macs Fan Control",
    price: 12.0,
    image: "img/apps/macfan.png",
    category: "utilidades",
    description: "Control preciso de ventiladores en Mac. Monitorea temperatura y optimiza rendimiento térmico.",
    features: [
      "Monitoreo de temperaturas en tiempo real",
      "Control manual de ventiladores",
      "Perfiles de temperatura personalizables",
      "Alertas de sobrecalentamiento",
      "Historial de datos térmicos",
      "Interfaz detallada"
    ],
    compatibility: "macOS 10.5 (Leopard) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 69,
    name: "Macsome Spotify Downloader",
    price: 19.0,
    image: "img/apps/macsome.avif",
    category: "música",
    description: "Descargador de música de Spotify a calidad MP3. Descarga canciones, playlists y álbumes.",
    features: [
      "Descarga de canciones a MP3",
      "Conversión de playlists completas",
      "Preservación de metadatos",
      "Descarga por lotes",
      "Compatible con Spotify Premium",
      "Interfaz simple e rápida"
    ],
    compatibility: "macOS 10.13 (High Sierra) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 70,
    name: "MainStage",
    price: 22.0,
    image: "img/apps/mainstage.png",
    category: "música",
    description: "Aplicación de Apple para performance en vivo. Organiza instrumentos y efectos para actuaciones.",
    features: [
      "Organización de sounds para en vivo",
      "Integración con Logic Pro",
      "Control de hardware MIDI",
      "Effectos y instrumentos de Logic",
      "Rig Designer visual",
      "Actualizaciones constantes"
    ],
    compatibility: "macOS 11 (Big Sur) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 71,
    name: "MATLAB 2016",
    price: 52.0,
    image: "img/apps/matlab.png",
    category: "utilidades",
    description: "Plataforma de programación y análisis numérico. Usado en investigación, ingeniería e instituciones académicas.",
    features: [
      "Programación en lenguaje MATLAB",
      "Análisis y visualización de datos",
      "Herramientas de optimización",
      "Simulaciones y modelado",
      "Toolboxes especializados",
      "Documentación completa"
    ],
    compatibility: "macOS 10.11 (El Capitan) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 72,
    name: "MediaHuman YouTube Downloader",
    price: 14.0,
    image: "img/apps/mediahuman.png",
    category: "utilidades",
    description: "Descargador de videos de YouTube en diversos formatos y resoluciones.",
    features: [
      "Descarga de videos en 4K",
      "Conversión a MP3 y otros formatos",
      "Descarga de playlists",
      "Descarga por lotes",
      "Interfaz simple y rápida",
      "Conversión integrada"
    ],
    compatibility: "macOS 10.10 o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 73,
    name: "Messenger",
    price: 0.0,
    image: "img/apps/messenger.svg",
    category: "utilidades",
    description: "Aplicación oficial de Messenger de Facebook. Chat, llamadas y videollamadas.",
    features: [
      "Mensajes y chats",
      "Llamadas de voz en HD",
      "Videollamadas",
      "Compartir archivos y fotos",
      "Totalmente gratuita",
      "Interfaz optimizada para Mac"
    ],
    compatibility: "macOS 10.13 o superior",
    metodoPago: "Gratis",
    entrega: "  Inmediata (Gratis)",
    downloadLink: "https://www.mediafire.com/download/messenger-mac",
  },
  {
    id: 74,
    name: "Microsoft Teams",
    price: 0.0,
    image: "img/apps/Microsoft_Teams.png",
    category: "utilidades",
    description: "Plataforma de comunicación empresarial de Microsoft. Chat, videollamadas y colaboración en equipo.",
    features: [
      "Chat y mensajería empresarial",
      "Videollamadas de grupo",
      "Compartición de pantalla",
      "Integración con Office 365",
      "Totalmente gratuita (versión básica)",
      "Optimizada para productividad"
    ],
    compatibility: "macOS 10.14 (Mojave) o superior",
    metodoPago: "Gratis",
    entrega: "  Inmediata (Gratis)",
    downloadLink: "https://www.mediafire.com/download/teams-mac",
  },
  {
    id: 75,
    name: "Motion",
    price: 25.0,
    image: "img/apps/motion.png",
    category: "video",
    description: "Software de motion graphics y efectos de Apple. Crea animaciones avanzadas y efectos profesionales.",
    features: [
      "Herramientas de motion graphics",
      "Animación de objetos 3D",
      "Efectos de partículas",
      "Integración con Final Cut Pro",
      "Renderizado en tiempo real",
      "Plantillas profesionales"
    ],
    compatibility: "macOS 11 (Big Sur) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 76,
    name: "Nitro PDF Professional",
    price: 28.0,
    image: "img/apps/nitro.svg",
    category: "utilidades",
    description: "Editor y gestor de PDFs profesional. Crea, edita y gestiona documentos PDF con facilidad.",
    features: [
      "Edición completa de PDFs",
      "OCR y reconocimiento de texto",
      "Conversión a Word, Excel, PowerPoint",
      "Firma digital",
      "Protección y encriptación",
      "Interfaz profesional"
    ],
    compatibility: "macOS 10.12 (Sierra) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  
  {
    id: 78,
    name: "NTFS for Mac",
    price: 17.0,
    image: "img/apps/ntfs.png",
    category: "utilidades",
    description: "Controlador NTFS para Mac. Lee y escribe en discos NTFS formateados para Windows.",
    features: [
      "Soporte lectura/escritura NTFS",
      "Acceso a discos Windows",
      "Interfaz transparente",
      "Rendimiento optimizado",
      "Compatible con discos USB",
      "Instalación sencilla"
    ],
    compatibility: "macOS 10.13 (High Sierra) o superior",
    metodoPago: "Binance / PayPal",
      
  },

  {
    id: 80,
    name: "PDF Element 7",
    price: 26.0,
    image: "img/apps/pdfelement.png",
    category: "utilidades",
    description: "Editor PDF versátil. Crea, edita y gestiona archivos PDF con herramientas completas.",
    features: [
      "Edición de PDF completa",
      "OCR y reconocimiento de texto",
      "Convertidor PDF",
      "Firma digital",
      "Protección de documentos",
      "Interfaz intuitiva"
    ],
    compatibility: "macOS 10.12 (Sierra) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 81,
    name: "PDF Expert",
    price: 24.0,
    image: "img/apps/pdfexpert.svg",
    category: "utilidades",
    description: "Editor PDF elegante y poderoso. Leer, anotar y editar PDFs con fluidez.",
    features: [
      "Lectura y anotación de PDF",
      "Edición de formularios",
      "Firma digital",
      "Fusión y división de PDFs",
      "Interfaz moderna y limpia",
      "Soporte iCloud"
    ],
    compatibility: "macOS 10.12 (Sierra) o superior",
    metodoPago: "Binance / PayPal",
      
  },

  // ==================== R-Z ====================
  {
    id: 83,
    name: "Radio Silence",
    price: 8.0,
    image: "img/apps/radio.png",
    category: "utilidades",
    description: "Bloqueador de internet simple pero efectivo. Bloquea conexión de apps específicas.",
    features: [
      "Bloqueo selectivo de apps",
      "Interfaz minimalista",
      "Temporizadores",
      "Sin configuración compleja",
      "Ideal para evitar distracciones",
      "Control desde barra de menú"
    ],
    compatibility: "macOS 10.12 (Sierra) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 84,
    name: "RAR Unarchiver",
    price: 0.0,
    image: "img/apps/unarchiver.png",
    category: "utilidades",
    description: "Descompresor especializado en archivos RAR. Soporte completo para archivos RAR5.",
    features: [
      "Extracción de archivos RAR",
      "Soporte RAR5",
      "Integración con Finder",
      "Vista previa de contenido",
      "Rápido y eficiente",
      "Totalmente gratuito"
    ],
    compatibility: "macOS 10.10 o superior",
    metodoPago: "Gratis",
    entrega: "  Inmediata (Gratis)",
    downloadLink: "https://www.mediafire.com/download/rar-unarchiver-mac",
  },
  {
    id: 85,
    name: "REAPER",
    price: 35.0,
    image: "img/apps/reaper.png",
    category: "música",
    description: "DAW completo y potente. Producción de audio profesional con precio accesible.",
    features: [
      "Grabación multipista ilimitada",
      "Editor MIDI avanzado",
      "Renderizado en tiempo real",
      "Soporte VST/AU/AAX",
      "Tema personalizable",
      "Actualizaciones de por vida"
    ],
    compatibility: "macOS 10.12 (Sierra) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 86,
    name: "ReiBoot Mac",
    price: 16.0,
    image: "img/apps/reiboot-logo.png",
    category: "utilidades",
    description: "Herramienta de recuperación para dispositivos iOS bloqueados. Restaura sin perder datos.",
    features: [
      "Recuperación de modo DFU",
      "Sin pérdida de datos",
      "Restaura cualquier error iOS",
      "Interfaz simple",
      "Soporte profesional",
      "Actualización gratuita"
    ],
    compatibility: "macOS 10.12 (Sierra) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 87,
    name: "Serato DJ Pro",
    price: 49.0,
    image: "img/apps/serato.png",
    category: "música",
    description: "Software de DJ profesional. Mezcla, rasguña y realiza en vivo con herramientas avanzadas.",
    features: [
      "Mesa de mezcla profesional",
      "Efectos y scratching",
      "Soporte para hardware Serato",
      "Análisis de BPM automático",
      "Biblioteca de canciones",
      "Integración de streaming"
    ],
    compatibility: "macOS 10.13 (High Sierra) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 88,
    name: "Serato Studio",
    price: 32.0,
    image: "img/apps/serato-studio.png",
    category: "música",
    description: "Software de producción musical basado en Serato. Ideal para productores y beatmakers.",
    features: [
      "Interfaz intuitiva de producción",
      "Loops y samples incluidos",
      "Instrumentos virtuales",
      "Exportación sin límite",
      "Gratuito con opciones Premium",
      "Comunidad activa"
    ],
    compatibility: "macOS 10.13 (High Sierra) o superior",
    metodoPago: "Binance / PayPal",
      
  },

  {
    id: 90,
    name: "Sibelius",
    price: 48.0,
    image: "img/apps/Sibelius_Logo.svg",
    category: "música",
    description: "Software profesional de notación musical. Crea, edita y publica partituras.",
    features: [
      "Notación musical completa",
      "Sonidos de orquesta realistas",
      "Herramientas de composición",
      "Exportación a PDF y audio",
      "Colaboración online",
      "Integración con Finale"
    ],
    compatibility: "macOS 10.13 (High Sierra) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 91,
    name: "Sidify Music Converter",
    price: 21.0,
    image: "img/apps/sidify.webp",
    category: "música",
    description: "Conversor de música de Spotify a MP3. Descarga canciones con calidad original.",
    features: [
      "Conversión Spotify a MP3/AAC/WAV/FLAC",
      "Descarga de playlists",
      "Preservación de metadatos",
      "Descarga por lotes",
      "Interfaz simple",
      "Compatible Spotify Premium"
    ],
    compatibility: "macOS 10.12 (Sierra) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 92,
    name: "Spectrasonics Keyscape",
    price: 44.0,
    image: "img/apps/spectrasonics.webp",
    category: "música",
    description: "Biblioteca masiva de pianos y teclados virtuales. Sonidos auténticos de instrumentos clásicos.",
    features: [
      "Más de 40 teclados virtuales",
      "Captura de movimiento del jugador",
      "Sonidos analógicos auténticos",
      "Soporte VST/AU/AAX",
      "Motor de síntesis avanzado",
      "Actualizaciones de contenido"
    ],
    compatibility: "macOS 10.13 (High Sierra) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 93,
    name: "Toast Titanium",
    price: 39.0,
    image: "img/apps/tost.svg",
    category: "utilidades",
    description: "Software de quemado de discos y autoría de DVD/Blu-ray. Crea medios físicos.",
    features: [
      "Grabación de CD, DVD y Blu-ray",
      "Autoría de video DVD",
      "Conversión de video",
      "Interfaz profesional",
      "Copia de datos",
      "Soporte completo de formatos"
    ],
    compatibility: "macOS 10.13 (High Sierra) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 94,
    name: "UnetBootin",
    price: 0.0,
    image: "img/apps/unet.png",
    category: "utilidades",
    description: "Herramienta gratuita para crear pendrives booteable con Linux.",
    features: [
      "Creación de USB booteable",
      "Soporte para múltiples distribuciones",
      "Interfaz simple",
      "Persistencia en vivo",
      "Sin instalación necesaria",
      "Totalmente gratuito y open source"
    ],
    compatibility: "macOS 10.5 (Leopard) o superior",
    metodoPago: "Gratis",
    entrega: "  Inmediata (Gratis)",
    downloadLink: "https://www.mediafire.com/download/unetbootin-mac",
  },

  {
    id: 96,
    name: "Waves 11",
    price: 32.0,
    image: "img/apps/waves.webp",
    category: "música",
    description: "Colección profesional de plugins de audio. Versión 11 con actualizaciones y mejoras.",
    features: [
      "Más de 100 plugins profesionales",
      "EQ, compresores y reverbs",
      "Herramientas de mastering",
      "Soporte VST/AU/AAX",
      "Compatibilidad con DAWs",
      "Actualizaciones continuas"
    ],
    compatibility: "macOS 10.13 (High Sierra) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 97,
    name: "Webex",
    price: 0.0,
    image: "img/apps/webex.webp",
    category: "utilidades",
    description: "Plataforma de conferencias de Cisco. Videollamadas, reuniones y colaboración.",
    features: [
      "Videollamadas HD ilimitadas",
      "Compartición de pantalla",
      "Grabación en la nube",
      "Chat integrado",
      "Totalmente gratuita (versión básica)",
      "Integraciones empresariales"
    ],
    compatibility: "macOS 10.13 o superior",
    metodoPago: "Gratis",
    entrega: "  Inmediata (Gratis)",
    downloadLink: "https://www.mediafire.com/download/webex-mac",
  },
  {
    id: 98,
    name: "WhatsApp",
    price: 0.0,
    image: "img/apps/whatsapp.png",
    category: "utilidades",
    description: "Aplicación oficial de WhatsApp para Mac. Chats, llamadas y videollamadas sincronizadas.",
    features: [
      "Mensajes sincronizados",
      "Llamadas de voz y video",
      "Compartición de archivos",
      "Notificaciones en tiempo real",
      "Totalmente gratuita",
      "Encriptación end-to-end"
    ],
    compatibility: "macOS 10.13 o superior",
    metodoPago: "Gratis",
    entrega: "  Inmediata (Gratis)",
    downloadLink: "https://www.mediafire.com/download/whatsapp-mac",
  },

  {
    id: 100,
    name: "Wondershare Filmora",
    price: 29.0,
    image: "img/apps/Wondershare.svg",
    category: "video",
    description: "Editor de video intuitivo y potente. Crea videos profesionales fácilmente.",
    features: [
      "Edición de video intuitiva",
      "Efectos y transiciones",
      "Filtros creativos",
      "Soporte 4K",
      "Exportación en múltiples formatos",
      "Biblioteca de efectos grande"
    ],
    compatibility: "macOS 10.13 (High Sierra) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 103,
    name: "Wondershare DVD Creator",
    price: 25.0,
    image: "img/apps/wondersharedvd.png",
    category: "video",
    description: "Software para crear DVDs desde videos. Autoría completa de DVD.",
    features: [
      "Creación de DVDs desde video",
      "Menús interactivos",
      "Capítulos personalizables",
      "Conversión de formatos",
      "Interfaz amigable",
      "Quemado directo"
    ],
    compatibility: "macOS 10.13 (High Sierra) o superior",
    metodoPago: "Binance / PayPal",
      
  },
  {
    id: 104,
    name: "Wondershare UniConverter",
    price: 27.0,
    image: "img/apps/uniconverter.jpg",
    category: "utilidades",
    description: "Conversor universal de video, audio e imágenes. Soporta cientos de formatos.",
    features: [
      "Conversión de 1000+ formatos",
      "Conversión por lotes",
      "Compresión de video",
      "Editor de video integrado",
      "Descargador de video",
      "Velocidad de conversión rápida"
    ],
    compatibility: "macOS 10.12 (Sierra) o superior",
    metodoPago: "Binance / PayPal",
      
  },
];

// ================== VARIABLES GLOBALES ==================
let currentAppSelected = null;
let selectedPaymentMethod = null;
let currentCategory = "todas";

// ================== INICIALIZACIÓN ==================
document.addEventListener("DOMContentLoaded", function () {
  // Cargar aplicaciones y configurar búsqueda
  cargarApps();
  configurarBusqueda();

  // Configurar modal ¿Cómo Funcionamos?
  const howWorksModal = document.getElementById("howWorksModal");
  const categoryLinks = document.querySelectorAll(".category-link");

  // Cerrar modal al hacer clic fuera del contenido
  if (howWorksModal) {
    howWorksModal.addEventListener("click", function (event) {
      if (event.target === howWorksModal) {
        closeHowWorks();
      }
    });
  }

  // Cerrar menú al hacer clic en una categoría
  categoryLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const menu = document.getElementById("categoriesMenu");
      menu.classList.remove("active");
    });
  });

  // Cerrar menú al hacer clic fuera
  document.addEventListener("click", function (event) {
    const menu = document.getElementById("categoriesMenu");
    const header = document.querySelector(".header");

    if (header && !header.contains(event.target) && menu.classList.contains("active")) {
      menu.classList.remove("active");
    }
  });
});

// ================== MOSTRAR APLICACIONES ==================
function cargarApps() {
  const grid = document.getElementById("appsGrid");
  grid.innerHTML = "";

  let appsAMostrar = applications;

  // Filtrar por categoría
  if (currentCategory !== "todas") {
    appsAMostrar = applications.filter(
      (app) => app.category === currentCategory,
    );
  }

  if (appsAMostrar.length === 0) {
    grid.innerHTML =
      '<p style="grid-column: 1/-1; text-align: center; color: #666; padding: 2rem;">No hay aplicaciones en esta categoría</p>';
    document.getElementById("appCount").textContent = 0;
    return;
  }

  appsAMostrar.forEach((app) => {
    const card = document.createElement("div");
    card.className = "app-card";
    card.onclick = () => abrirModal(app);

    card.innerHTML = `
            <div class="app-icon-container">
                <img src="${app.image}" alt="${app.name}" class="app-icon">
            </div>
            <div class="app-name">${app.name}</div>
           
            <div class="app-status">📦 Virtual</div>
        `;

    grid.appendChild(card);
  });

  // Actualizar contador con el número de apps mostradas
  document.getElementById("appCount").textContent = appsAMostrar.length;
}
// ================== FILTRADO POR CATEGORÍA ==================
function filtrarPorCategoria(categoria, evento = null) {
  currentCategory = categoria;

  // Actualizar botones activos
  document.querySelectorAll(".category-link").forEach((btn) => {
    btn.classList.remove("active");
  });

  // Agregar clase active al botón clickeado (evento) o al botón correspondiente
  if (evento && evento.target) {
    evento.target.classList.add("active");
  } else {
    // Si no hay evento, buscar el botón correspondiente
    const buttons = document.querySelectorAll(".category-link");
    buttons.forEach((btn) => {
      // Verificar si el botón tiene el texto correcto
      const btnText = btn.textContent.trim().toLowerCase();
      const categoriaText = categoria === "todas" ? "todas" : categoria;
      if (btnText === categoriaText) {
        btn.classList.add("active");
      }
    });
  }

  // Recargar apps
  cargarApps();

  // Scroll hacia el grid
  document.getElementById("appsGrid").scrollIntoView({ behavior: "smooth" });
}

// ================== BÚSQUEDA Y FILTRADO ==================
function configurarBusqueda() {
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", filtrarApps);
}

function filtrarApps() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".app-card");

  cards.forEach((card) => {
    const name = card.querySelector(".app-name").textContent.toLowerCase();
    const matches = name.includes(query);
    card.style.display = matches ? "" : "none";
  });
}

// ================== MODAL ==================
function abrirModal(app) {
  try {
    currentAppSelected = app;
    selectedPaymentMethod = null;

    // Actualizar contenido del modal
    const modalTitle = document.getElementById("modalTitle");
    if (modalTitle) modalTitle.textContent = app.name;
    
    // Verificar si es gratis o de pago
    const isGratuita = app.price === 0.0 || app.price === 0;
    
    const modalPrice = document.getElementById("modalPrice");
    if (isGratuita) {
      if (modalPrice) modalPrice.textContent = "GRATIS 🎁";
    } else {
      if (modalPrice) modalPrice.textContent = `$${app.price}`;
    }
    
    const modalDescription = document.getElementById("modalDescription");
    if (modalDescription) modalDescription.textContent = app.description;
    
    const modalCompatibility = document.getElementById("modalCompatibility");
    if (modalCompatibility) modalCompatibility.textContent = app.compatibility;

    // Actualizar imagen (cambiar a imagen en lugar de icono)
    const modalIcon = document.getElementById("modalIcon");
    if (modalIcon) {
      // Limpiar contenido anterior
      modalIcon.innerHTML = '';
      
      // Crear y añadir la imagen de forma controlada
      const img = document.createElement('img');
      img.src = app.image;
      img.alt = app.name;
      img.className = 'modal-app-image';
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'contain';
      img.style.objectPosition = 'center';
      
      modalIcon.appendChild(img);
    }

    // Actualizar características
    const featuresList = document.getElementById("modalFeatures");
    if (featuresList) {
      featuresList.innerHTML = "";
      app.features.forEach((feature) => {
        const li = document.createElement("li");
        li.textContent = feature;
        featuresList.appendChild(li);
      });
    }

    // Panel de pago o descarga según si es gratis
    const paymentPanel = document.querySelector(".modal-payment-panel");
    const downloadPanel = document.getElementById("downloadPanel");
    
    if (isGratuita) {
      // Ocultar métodos de pago
      if (paymentPanel) paymentPanel.style.display = "none";
      
      // Mostrar panel de descarga
      if (downloadPanel) {
        downloadPanel.style.display = "block";
        const downloadLink = document.getElementById("downloadButton");
        if (downloadLink && app.downloadLink) {
          downloadLink.href = app.downloadLink;
          downloadLink.onclick = (e) => {
            mostrarNotificacion(`✅ Descargando ${app.name}...`);
            window.open(app.downloadLink, '_blank');
          };
        }
      }
    } else {
      // Mostrar métodos de pago
      if (paymentPanel) paymentPanel.style.display = "block";
      if (downloadPanel) downloadPanel.style.display = "none";
      
      // Actualizar WhatsApp
      const appNameEncoded = encodeURIComponent(app.name);
      const priceEncoded = encodeURIComponent(app.price);
      const whatsappLink = document.getElementById("whatsappLink");
      if (whatsappLink) {
        whatsappLink.href = `https://wa.me/59160569549?text=Hola!%20Me%20interesa%20la%20aplicaci%C3%B3n%20${appNameEncoded}%20de%20iFinder.%20Me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n.`;
      }
    }

    // Mostrar modal
    const modal = document.getElementById("appModal");
    if (modal) {
      modal.classList.remove("hidden");
      modal.classList.add("active");
    }
  } catch (error) {
    console.error("Error al abrir modal:", error);
    mostrarNotificacion("❌ Error al abrir la aplicación");
  }

  // Resetear estado de pago
  limpiarEstadoPago();
}

function closeModal() {
  const modal = document.getElementById("appModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("active");
  }
  currentAppSelected = null;
  selectedPaymentMethod = null;
  limpiarEstadoPago();
}

// Cerrar modal si se hace clic fuera
document.addEventListener("click", (e) => {
  const modal = document.getElementById("appModal");
  if (e.target === modal) {
    closeModal();
  }
});

// ================== SISTEMA DE PAGO ==================
function selectPayment(method) {
  selectedPaymentMethod = method;

  // Actualizar interfaz
  document.querySelectorAll(".payment-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  if (method === "paypal") {
    document.querySelector(".paypal-btn").classList.add("active");
  } else if (method === "binance") {
    document.querySelector(".binance-btn").classList.add("active");
  }

  // Activar botón de compra
  document.getElementById("purchaseBtn").disabled = false;
}

function limpiarEstadoPago() {
  document.querySelectorAll(".payment-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  document.getElementById("purchaseBtn").disabled = true;
}

function completePurchase() {
  if (!selectedPaymentMethod || !currentAppSelected) {
    mostrarNotificacion("⚠️ Selecciona un método de pago", "warning");
    return;
  }

  // Simular procesamiento de pago
  const appName = currentAppSelected.name;
  const método = selectedPaymentMethod === "paypal" ? "PayPal" : "Binance";

  mostrarNotificacion(
    `✅ Pago completado con ${método} por $${currentAppSelected.price.toFixed(2)}`,
  );

  console.log(`Pago procesado:
        Aplicación: ${appName}
        Precio: $${currentAppSelected.price.toFixed(2)}
        Método: ${método}
        Fecha: ${new Date().toLocaleString("es-ES")}`);

  // Cerrar modal después de 1500ms
  setTimeout(() => {
    closeModal();
  }, 1500);
}

// ================== NOTIFICACIONES ==================
function mostrarNotificacion(mensaje, tipo = "success") {
  const notification = document.getElementById("notification");
  const notificationText = document.getElementById("notificationText");

  notificationText.textContent = mensaje;
  notification.classList.add("active");

  if (tipo === "warning") {
    notification.style.background = "var(--warning-color)";
  } else {
    notification.style.background = "var(--success-color)";
  }

  setTimeout(() => {
    notification.classList.remove("active");
  }, 4000);
}
