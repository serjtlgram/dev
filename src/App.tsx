import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { 
  Globe, 
  Palette, 
  Terminal as TerminalIcon, 
  Cpu, 
  Compass, 
  ArrowUpRight, 
  Layers, 
  Network, 
  Zap, 
  CheckCircle2,
  Linkedin,
  Send,
  X
} from 'lucide-react';

const TRANSLATIONS = {
  en: {
    preloaderBooting: "Initializing Serj.Dev Core...",
    preloaderSuccess: "AI Orchestration Layer Online.",
    heroBadge: "READY TO LAUNCH YOUR NEXT BIG DIGITAL PRODUCT",
    heroTitle: "Turning Bold Ideas into",
    heroTitleGlow: "Premium Digital Systems",
    heroTitleSuffix: "at Hyper-Speed",
    heroDesc: "I am a high-velocity digital orchestrator. By merging cutting-edge AI code generation with expert architectural design, I build elite, high-converting platforms, interactive web experiences, and scalable Telegram apps. You get flawless, premium-grade software delivered in days, not months.",
    exploreBtn: "See My Creations",
    contactBtn: "Establish Connection",
    linkedinBtn: "Message on LinkedIn",
    telegramBtn: "Message on Telegram",
    terminalTitle: "INTERACTIVE SYSTEM PLAYGROUND",
    terminalSub: "Want to see how your future platform operates behind the scenes? Type 'projects', 'skills', or 'sudo hack' to interact.",
    terminalPlaceholder: "Query command...",
    terminalInit: "System initialized. Sandbox kernel v5.1.0-alpha ready.",
    terminalHint: "Type 'help' to access interactive command schemas.",
    terminalHelpHeader: "Available command schemas:",
    terminalHelpProjects: "Lists all current active production systems.",
    terminalHelpSkills: "Queries the creator's technical capability matrix.",
    terminalHelpSudo: "Initiates visual core-overlocking matrix overlay.",
    terminalHelpContacts: "Initiates communication protocols and displays direct contact links.",
    terminalHelpClear: "Flushes the console memory buffers.",
    terminalUnknown: "Unknown command schema: '{cmd}'. Input 'help' for diagnostics.",
    terminalSkillsHeader: "System Core Capability Matrix:",
    terminalQuery: "Querying remote data clusters...",
    terminalHackMsg: "OVERCLOCK SIGNAL RECEIVED. RUNNING QUANTUM FLOOD SEQUENCE...",
    terminalHackSub: "Dumping kernel state... Custom noise shaders aligned... Host system stable.",
    projectsHeader: "PROVEN PRODUCTS",
    projectsTitle: "Real Apps, Real Users",
    archHeader: "THE NEW WAY OF BUILDING",
    archTitle: "Supercharged velocity. Premium aesthetics. Flawless performance.",
    archDesc: "Traditional software development is incredibly slow and expensive. My advanced AI-assisted engineering methodology automates syntax generation, allowing me to focus entirely on what makes your business money: stunning user interfaces, flawless user journeys, and robust, load-ready infrastructure. Your ideas reach the market 10 times faster.",
    galaxyHeader: "AI-SYNTHESIZED ORBITAL CORE",
    galaxySub: "Interactive tech nodes orbiting the Vibe Engine in real time. Hover to inspect.",
    statApiTime: "Avg Response Time",
    statFps: "Render Fidelity",
    statUptime: "Infrastructure Uptime",
    launchApp: "Launch Product",
    mirror: "Mirror Link",
    all: "ALL PRODUCTS",
    techStackTitle: "ENGINE SPECIFICATION:",
    themeLabel: "THEME PROFILE:",
    langLabel: "LANGUAGE PORT:"
  },
  es: {
    preloaderBooting: "Iniciando Serj.Dev Core...",
    preloaderSuccess: "Motor de Orquestación de IA Listo.",
    heroBadge: "LISTO PARA LANZAR TU PRÓXIMO PRODUCTO DIGITAL DE ÉXITO",
    heroTitle: "Transformando Grandes Ideas en",
    heroTitleGlow: "Sistemas Digitales Exclusivos",
    heroTitleSuffix: "a Máxima Velocidad",
    heroDesc: "Actúo como un orquestador digital de alta velocidad. Fusionando la generación de código por IA de última generación con un diseño de sistemas impecable, construyo landing pages de alta conversión, aplicaciones de Telegram interactivas y plataformas web robustas. Obtén software premium listo en días, no en meses.",
    exploreBtn: "Ver Mis Creaciones",
    contactBtn: "Establecer Conexión",
    linkedinBtn: "Mensaje en LinkedIn",
    telegramBtn: "Mensaje en Telegram",
    terminalTitle: "ZONA DE JUEGO INTERACTIVA",
    terminalSub: "¿Curioso por ver cómo funcionará tu sistema? Escribe 'projects', 'skills' o 'sudo hack' abajo.",
    terminalPlaceholder: "Escribir comando...",
    terminalInit: "Sistema inicializado. Kernel sandbox v5.1.0-alpha listo.",
    terminalHint: "Escriba 'help' para desbloquear esquemas de comando personalizados.",
    terminalHelpHeader: "Esquemas de comando disponibles:",
    terminalHelpProjects: "Muestra todos los sistemas de producción activos.",
    terminalHelpSkills: "Muestra la matriz técnica del creador.",
    terminalHelpSudo: "Inicia una secuencia de aceleración del núcleo visual.",
    terminalHelpContacts: "Inicia protocolos de comunicación y muestra enlaces de contacto directo.",
    terminalHelpClear: "Limpia los búferes de memoria de la consola.",
    terminalUnknown: "Esquema desconocido: '{cmd}'. Escriba 'help' para diagnóstico.",
    terminalSkillsHeader: "Matriz de Capacidad Principal:",
    terminalQuery: "Consultando clusters de datos remotos...",
    terminalHackMsg: "ACCESO CONCEDIDO. INICIALIZANDO PROTOCOLO DE MATRIZ...",
    terminalHackSub: "Volcando el núcleo... Redirigiendo sombreadores CSS... Éxito.",
    projectsHeader: "PRODUCTOS COMPROBADOS",
    projectsTitle: "Aplicaciones Reales, Usuarios Reales",
    archHeader: "ORQUESTACIÓN A HIPER-VELOCIDAD",
    archTitle: "¿Por qué elegir la orquestación digital en lugar del desarrollo lento?",
    archDesc: "El desarrollo tradicional de software es lento y costoso. Mi metodología avanzada con IA automatiza la escritura de código pesado para enfocarme al 100% en lo que le genera ganancias a tu negocio: un diseño visual impactante, una experiencia de usuario perfecta y un sistema robusto que no se cae. Tu producto llega al mercado 10 veces más rápido.",
    galaxyHeader: "NÚCLEO ORBITAL DE SÍNTESIS DE IA",
    galaxySub: "Nodos de tecnología interactiva que orbitan el motor Vibe. Pase el cursor para inspeccionar.",
    statApiTime: "Tiempo medio de API",
    statFps: "Renderizado de Canvas",
    statUptime: "Tiempo de actividad",
    launchApp: "Acceder a la App",
    mirror: "Enlace Espejo",
    all: "TODOS LOS PRODUCTOS",
    techStackTitle: "ESPECIFICACIÓN:",
    themeLabel: "PERFIL DE TEMA:",
    langLabel: "IDIOMA:"
  },
  pt: {
    preloaderBooting: "Iniciando Serj.Dev Core...",
    preloaderSuccess: "Motor de Orquestração de IA Pronto.",
    heroBadge: "PRONTO PARA LANÇAR O SEU PRÓXIMO SUCESSO DIGITAL",
    heroTitle: "Transformando Grandes Visões em",
    heroTitleGlow: "Produtos Digitais Premium",
    heroTitleSuffix: "com Velocidade Máxima",
    heroDesc: "Atuo como um orquestrador digital de alta performance. Combinando engenharia assistida por IA e design de sistemas refinado, crio landing pages de alta conversão, aplicativos robustos para Telegram e sistemas web completos. Entregas de nível premium em dias, e não meses.",
    exploreBtn: "Ver Meus Projetos",
    contactBtn: "Estabelecer Conexão",
    linkedinBtn: "Mensagem no LinkedIn",
    telegramBtn: "Mensagem no Telegram",
    terminalTitle: "CONSOLE INTERATIVO DE TESTE",
    terminalSub: "Quer ver como seu futuro sistema funciona nos bastidores? Digite 'skills', 'projects' ou 'sudo hack'.",
    terminalPlaceholder: "Digitar comando...",
    terminalInit: "System inicializado. Sandbox kernel v5.1.0-alpha pronto.",
    terminalHint: "Digite 'help' para acessar esquemas de comando.",
    terminalHelpHeader: "Esquemas de comando disponíveis:",
    terminalHelpProjects: "Lista todos os sistemas ativos em produção.",
    terminalHelpSkills: "Exibe a matriz de capacidade técnica do criador.",
    terminalHelpSudo: "Inicia uma sequência visual de overclock de núcleo.",
    terminalHelpContacts: "Inicia protocolos de comunicação e exibe links de contato direto.",
    terminalHelpClear: "Limpa a memória do console.",
    terminalUnknown: "Esquema desconhecido: '{cmd}'. Use 'help' para diagnósticos.",
    terminalSkillsHeader: "Matriz de Capacidade Técnica:",
    terminalQuery: "Consultando clusters de datos remotos...",
    terminalHackMsg: "ACESSO AUTORIZADO. INICIANDO PROTOCOLO DE FLUXO...",
    terminalHackSub: "Dump do kernel concluído... Filtros analógicos aplicados.",
    projectsHeader: "RESULTADOS REAIS",
    projectsTitle: "Aplicativos Reais, Usuários Reais",
    archHeader: "ORQUESTRAÇÃO DE ALTA VELOCIDADE",
    archTitle: "Por que a orquestração inteligente supera o desenvolvimento tradicional?",
    archDesc: "O desenvolvimento tradicional é lento, caro e cheio de falhas. Minha metodologia ágil automatiza a digitação de código bruto através de inteligência artificial de ponta, permitindo que eu foque no que realmente traz retorno financeiro: design deslumbrante, fluidez de uso extrema e arquitetura escalável. Seu negócio sai na frente 10x mais rápido.",
    galaxyHeader: "NÚCLEO ORBITAL DE SÍNTESIS DE IA",
    galaxySub: "Nodos de tecnologia interativos que orbitam o Vibe Engine em tempo real. Passe o mouse para inspecionar.",
    statApiTime: "Tempo de resposta API",
    statFps: "Fidelidade de Render",
    statUptime: "Uptime de Microserviços",
    launchApp: "Acessar Produto",
    mirror: "Link Alternativo",
    all: "TODOS OS PRODUTOS",
    techStackTitle: "ESPECIFICAÇÕES:",
    themeLabel: "PERFIL DE TEMA:",
    langLabel: "IDIOMA:"
  },
  uk: {
    preloaderBooting: "Запуск системного ядра Serj.Dev...",
    preloaderSuccess: "ШШІ-оркестратор запущено. Система готова.",
    heroBadge: "ГОТОВИЙ СТВОРИТИ ТА ЗАПУСТИТИ ВАШ НАСТУПНИЙ ТОП-ПРОДУКТ",
    heroTitle: "Перетворюю Ваші Сміливі Ідеї на",
    heroTitleGlow: "Преміальні Цифрові Продукти",
    heroTitleSuffix: "з Космічною Швидкістю",
    heroDesc: "Я дію як високотехнологічний цифровий оркестратор. Поєднуючи передові інструменти ШІ-генерації коду з експертним архітектурним проектуванням, я створюю високоефективні лендінги, інтерактивні Telegram міні-додатки та веб-платформи. Ви отримуєте бездоганний софт преміум-класу за лічені дні замість місяців очікувань.",
    exploreBtn: "Подивитись Роботи",
    contactBtn: "Встановити Зв'язок",
    linkedinBtn: "Написати в LinkedIn",
    telegramBtn: "Написати в Telegram",
    terminalTitle: "ІНТЕРАКТИВНА ПІСОЧНИЦЯ",
    terminalSub: "Цікаво, як працюватиме ваша майбутня система зсередини? Спробуйте ввести 'skills', 'projects' або 'sudo hack'.",
    terminalPlaceholder: "Запит команди...",
    terminalInit: "Систему ініціалізовано. Ядро sandbox v5.1.0-alpha готове.",
    terminalHint: "Введіть 'help' для перегляду доступних схем команд.",
    terminalHelpHeader: "Доступні схеми команд:",
    terminalHelpProjects: "Виводить список усіх активних продакшн-систем.",
    terminalHelpSkills: "Відображає матрицю технічних здібностей автора.",
    terminalHelpSudo: "Запускає режим візуального розгону системного ядра.",
    terminalHelpContacts: "Ініціює протоколи зв'язку та відображає прямі контакти.",
    terminalHelpClear: "Очищує буфери пам'яті консолі.",
    terminalUnknown: "Невідома схема команди: '{cmd}'. Введіть 'help' для діагностики.",
    terminalSkillsHeader: "Матриця Головних Здібностей Системи:",
    terminalQuery: "Запит до віддалених дата-кластерів...",
    terminalHackMsg: "ОТРИМАНО СИГНАЛ РОЗГОНУ. ЗАПУСК КВАНТОВОГО ПРОТОКОЛУ...",
    terminalHackSub: "Дамп ядра виконано... Шейдери аналогового шуму підключено... Стабільно.",
    projectsHeader: "ДОСВІД ТА ЦИФРИ",
    projectsTitle: "Реальні Продукти з Живою Аудиторією",
    archHeader: "ШВИДКИЙ ЗАПУСК БЕЗ РУТИНИ",
    archTitle: "Чому цифровий оркестратор вигідніший за команду класичних кодерів?",
    archDesc: "Звичайне написання коду вручну — це довго, дорого та часто містить помилки. Мій підхід автоматизує рутину за допомогою ШІ, дозволяючи мені повністю сфокусуватися на тому, що приносить гроші вашому бізнесу: вражаючому преміум-дизайні, зручності для клієнтів та надійності під навантаженнями. Ваш продукт виходить на ринок у 10 разів швидше.",
    galaxyHeader: "ІНТЕРАКТИВНЕ ШІ-ОРБІТАЛЬНЕ ЯДРО",
    galaxySub: "Технологічні вузли, які обертаються навколо Vibe Engine в реальному часі. Наведіть для огляду.",
    statApiTime: "Сер. час відповіді API",
    statFps: "Частота Кадрів Рендеру",
    statUptime: "Аптайм Інфраструктури",
    launchApp: "Запустити Платформу",
    mirror: "Дзеркало Вузла",
    all: "УСІ АКТИВИ",
    techStackTitle: "ТЕХНІЧНА СПЕЦИФІКАЦІЯ:",
    themeLabel: "ПРОФІЛЬ ТЕМИ:",
    langLabel: "ПОРТ МОВИ:"
  },
  ru: {
    preloaderBooting: "Запуск системного ядра Serj.Dev...",
    preloaderSuccess: "ИИ-оркестратор запущен. Система готова.",
    heroBadge: "ГОТОВ СОЗДАТЬ И ЗАПУСТИТЬ ВАШ СЛЕДУЮЩИЙ ТОП-ПРОДУКТ",
    heroTitle: "Превращаю Ваши Смелые Идеи в",
    heroTitleGlow: "Премиальные Цифровые Продукты",
    heroTitleSuffix: "с Космической Скоростью",
    heroDesc: "Я действую как высокотехнологичный цифровой оркестратор. Объединяя передовую генерацию кода искусственным интеллектом с экспертным проектированием, я создаю конвертящие лендинги, интерактивные Telegram mini-apps и масштабируемые веб-системы. Вы получаете безупречный софт за считанные дни вместо месяцев ожиданий.",
    exploreBtn: "Посмотреть Работы",
    contactBtn: "Установить Связь",
    linkedinBtn: "Написать в LinkedIn",
    telegramBtn: "Написать в Telegram",
    terminalTitle: "ИНТЕРАКТИВНАЯ ПЕСОЧНИЦА",
    terminalSub: "Интересно, как будет работать ваша будущая система изнутри? Попробуйте ввести 'skills', 'projects' или 'sudo hack'.",
    terminalPlaceholder: "Запрос команды...",
    terminalInit: "Система инициализирована. Ядро sandbox v5.1.0-alpha готове.",
    terminalHint: "Введите 'help' для просмотра доступных сведений.",
    terminalHelpHeader: "Доступные схемы команд:",
    terminalHelpProjects: "Выводит список всех активных продакшн-систем.",
    terminalHelpSkills: "Отображает матрицу технических способностей автора.",
    terminalHelpSudo: "Запускает режим визуального разгона системного ядра.",
    terminalHelpContacts: "Инициирует протоколы связи и отображает прямые контакты.",
    terminalHelpClear: "Очищает буферы памяти консоли.",
    terminalUnknown: "Неизвестная схема команды: '{cmd}'. Введите 'help' для диагностики.",
    terminalSkillsHeader: "Матрица Главных Способностей Системы:",
    terminalQuery: "Запрос к удаленным дата-кластеров...",
    terminalHackMsg: "ПОЛУЧЕН СИГНАЛ РАЗГОНА. ЗАПУСК КВАНТОВОГО PROTOCOLA...",
    terminalHackSub: "Дамп ядра выполнен... Шейдеры аналогового шуму подключено... Стабильно.",
    projectsHeader: "ОПЫТ И ЦИФРЫ",
    projectsTitle: "Реальные Продукты с Живой Аудиторией",
    archHeader: "БЫСТРЫЙ ЗАПУСК БЕЗ РУТИНЫ",
    archTitle: "Почему цифровой оркестратор выгоднее команды классических кодеров?",
    archDesc: "Обычное написание кода вручную — это долго, дорого и часто содержит ошибки. Мой подход автоматизирует рутину с помощью ИИ, позволяя мне полностью сфокусироваться на том, что приносит деньги вашему бизнесу: впечатляющем премиум-дизайне, удобстве для клиентов и надежности под нагрузками. Ваш продукт выходит на рынок в 10 раз быстрее.",
    galaxyHeader: "ИНТЕРАКТИВНОЕ ИИ-ОРБИТАЛЬНОЕ ЯДРО",
    galaxySub: "Технологические узлы, вращающиеся вокруг Vibe Engine в реальном времени. Наведите для осмотра.",
    statApiTime: "Ср. время ответа API",
    statFps: "Частота Кадров Рендеру",
    statUptime: "Аптайм Инфраструктуры",
    launchApp: "Запустить Продукт",
    mirror: "Зеркало Ссылки",
    all: "ВСЕ ПРОДУКТЫ",
    techStackTitle: "ТЕХНИЧЕСКАЯ СПЕЦИФИКАЦИЯ:",
    themeLabel: "ТЕХНИЧЕСКИЙ ПРОФИЛЬ ТЕМЫ:",
    langLabel: "ЯЗЫКОВОЙ ПОРТ:"
  }
};

const LOCALIZED_PROJECTS: Record<string, { id: string; title: string; category: string; description: string; techSpecs: string; link: string; alternativeLink?: string; stats: Record<string, string>; gradient: string; }[]> = {
  en: [
    {
      id: "loyalty-bot",
      title: "Customer Retention Tool",
      category: "Telegram B2B",
      description: "Next-gen enterprise B2B loyalty automation. Orchestrates client progression structures, referral chains, distribution mechanisms, and statistical triggers.",
      techSpecs: "Fastify Web Core, Node.js, Prisma ORM, Redis Cache Vector, RabbitMQ Message Pipelines, asynchronous webhook dispatching engine.",
      link: "https://t.me/diploybot?startapp",
      stats: { "transactions": "1.2M", "ping": "45ms", "systems": "12 APIs" },
      gradient: "from-purple-500 to-fuchsia-900"
    },
    {
      id: "pdr-bot",
      title: "Telegram Mini-App for Ukraine Traffic Rules",
      category: "Telegram Mini App",
      description: "A highly immersive, real-time gamified educational platform integrated into Telegram. Features customized spaced-repetition algorithms and dynamic performance analytics.",
      techSpecs: "Telegram WebApps Core, React, Redux Toolkit Engine, Node.js Microservices, PostgreSQL, customized internal memory cache for hot query acceleration.",
      link: "https://t.me/ispytpdrbot?startapp",
      stats: { "users": "50K+", "speed": "80ms", "rating": "4.9/5" },
      gradient: "from-blue-500 to-indigo-800"
    },
    {
      id: "pdr-landing",
      title: "Traffic Rules Mini-App Landing",
      category: "Marketing Engine",
      description: "An ultra-performant, search-optimized promotional ecosystem constructed via modern static regeneration principles. Fully responsive with fluid grid layouts.",
      techSpecs: "Next.js Static Framework, Tailwind Architectural CSS, Framer Motion Choreography, Incremental Static Regeneration (ISR). Perfect 100/100 Lighthouse performance metrics.",
      link: "https://www.pdr-ua.pp.ua/",
      alternativeLink: "https://pdr-landing-psi.vercel.app/",
      stats: { "lighthouse": "100/100", "bounce": "12%", "conversion": "24.8%" },
      gradient: "from-emerald-500 to-teal-800"
    },
    {
      id: "strike-map",
      title: "RF Strike Map",
      category: "Defense Analytics",
      description: "An ultra-responsive temporal mapping suite visualizing strategic operations against high-value targets. Renders thousands of interactive coordinate tracks.",
      techSpecs: "Leaflet Map Engine, custom GPU-accelerated Canvas overlay layer, GeoJSON real-time stream parsing, instant automatic spatial validation algorithms.",
      link: "https://sanctions-two.vercel.app/",
      alternativeLink: "https://serjtlgram.github.io/strike-map/",
      stats: { "tracking": "3200+", "fps": "60.0", "latency": "Realtime" },
      gradient: "from-red-500 to-rose-900"
    },
    {
      id: "art-quest",
      title: "ART Thriller Quest",
      category: "Interactive Narrative",
      description: "A dark, branching psychological thriller built with custom audio-spatial layers, dynamic decision trees, and post-processed visual noise.",
      techSpecs: "React, State Machine Core Engine, HTML5 Web Audio Synthesis, customized CSS shader overlays, resource background preloader.",
      link: "https://artquest-delta.vercel.app/",
      stats: { "pathing": "5 Endings", "assets": "120MB+", "session": "22min" },
      gradient: "from-amber-500 to-amber-900"
    },
    {
      id: "portfolio-land",
      title: "Interactive Developer Portfolio",
      category: "Frontend Identity",
      description: "A highly dynamic, themeable personal landing page. Features a mock interactive terminal, multi-language support, and sleek micro-animations.",
      techSpecs: "React, Vite, Tailwind CSS, customized UI components, dynamic theme context engine.",
      link: "https://dev-eosin-psi.vercel.app/",
      stats: { "themes": "4+", "langs": "5", "performance": "100/100" },
      gradient: "from-slate-700 to-zinc-900"
    }
  ],
  es: [
    {
      id: "loyalty-bot",
      title: "Herramienta de Retención de Clientes",
      category: "Telegram B2B",
      description: "Automatización de lealtad empresarial B2B. Diseña y gestiona flujos de clientes, esquemas de recomendación y activadores analíticos en tiempo real.",
      techSpecs: "Fastify, Node.js, Prisma ORM, Redis, RabbitMQ. Infraestructura asíncrona de alto rendimiento.",
      link: "https://t.me/diploybot?startapp",
      stats: { "transac": "1.2M", "ping": "45ms", "apis": "12 APIs" },
      gradient: "from-purple-500 to-fuchsia-900"
    },
    {
      id: "pdr-bot",
      title: "Mini-App de Telegram para Tráfico de Ucrania",
      category: "Telegram Mini App",
      description: "Plataforma educativa gamificada de alta fidelidad integrada en Telegram. Cuenta con algoritmos avanzados de repetición espaciada y analíticas de rendimiento.",
      techSpecs: "Telegram WebApps Core, React, Redux Toolkit, Node.js Microservices, PostgreSQL, caché de consulta optimizada en memoria.",
      link: "https://t.me/ispytpdrbot?startapp",
      stats: { "usuarios": "50K+", "latencia": "80ms", "calif": "4.9/5" },
      gradient: "from-blue-500 to-indigo-800"
    },
    {
      id: "pdr-landing",
      title: "Landing de Mini-App de Tráfico",
      category: "Marketing Engine",
      description: "Ecosistema promocional ultra-rápido optimizado para buscadores mediante generación estática incremental. Diseño responsivo fluido.",
      techSpecs: "Next.js Static Framework, Tailwind CSS, Framer Motion, ISR. Puntuación de rendimiento perfecta en Google Lighthouse (100/100).",
      link: "https://www.pdr-ua.pp.ua/",
      alternativeLink: "https://pdr-landing-psi.vercel.app/",
      stats: { "lighthouse": "100/100", "rebotes": "12%", "conv": "24.8%" },
      gradient: "from-emerald-500 to-teal-800"
    },
    {
      id: "strike-map",
      title: "Mapa de Impactos en RF",
      category: "Mapeo Estratégico",
      description: "Mapa temporal responsivo que visualiza operaciones defensivas clave. Procesa miles de trayectorias geográficas en tiempo real.",
      techSpecs: "Motor Leaflet.js, capa Canvas acelarada por GPU, análisis de flujos GeoJSON, motores de validación espacial de baja latencia.",
      link: "https://sanctions-two.vercel.app/",
      alternativeLink: "https://serjtlgram.github.io/strike-map/",
      stats: { "nodos": "3200+", "fps": "60.0", "actualiz": "Realtime" },
      gradient: "from-red-500 to-rose-900"
    },
    {
      id: "art-quest",
      title: "ART Thriller Quest",
      category: "Aventura Narrativa",
      description: "Aventura psicológica inmersiva y cinematográfica. Desarrollada con gráficos de decisión no lineales y capas de audio posicional.",
      techSpecs: "React, State Machine Engine, Web Audio API, superposiciones de sombreadores CSS personalizados, cargador de medios asíncrono.",
      link: "https://artquest-delta.vercel.app/",
      stats: { "finales": "5 unique", "medios": "120MB+", "sesion": "22min" },
      gradient: "from-amber-500 to-amber-900"
    },
    {
      id: "portfolio-land",
      title: "Portafolio de Desarrollador",
      category: "Frontend Identity",
      description: "Una página de aterrizaje personal altamente dinámica y personalizable. Cuenta con una terminal interactiva, soporte multilingüe y micro-animaciones elegantes.",
      techSpecs: "React, Vite, Tailwind CSS, componentes UI personalizados, motor de temas dinámico.",
      link: "https://dev-eosin-psi.vercel.app/",
      stats: { "temas": "4+", "idiomas": "5", "rendimiento": "100/100" },
      gradient: "from-slate-700 to-zinc-900"
    }
  ],
  pt: [
    {
      id: "loyalty-bot",
      title: "Ferramenta de Retenção de Clientes",
      category: "Telegram B2B",
      description: "Automatização de planos de fidelidade e indicação para B2B no Telegram. Motor analítico assíncrono projetado para alta escalabilidade.",
      techSpecs: "Fastify Node framework, Prisma ORM, Redis Cache, RabbitMQ. Logística moderna orientada a eventos assíncronos.",
      link: "https://t.me/diploybot?startapp",
      stats: { "transac": "1.2M", "ping": "45ms", "apis": "12 APIs" },
      gradient: "from-purple-500 to-fuchsia-900"
    },
    {
      id: "pdr-bot",
      title: "Mini-App do Telegram para Trânsito da Ucrânia",
      category: "Telegram Mini App",
      description: "Ambiente educacional interativo de alto desempenho integrado ao ecossistema do Telegram. Algoritmos inteligentes de repetição de intervalos de memória.",
      techSpecs: "Telegram WebApps, React, Redux Toolkit, Node.js Microservices, PostgreSQL, camada dedicada de memória cache distribuída.",
      link: "https://t.me/ispytpdrbot?startapp",
      stats: { "users": "50K+", "delay": "80ms", "score": "4.9/5" },
      gradient: "from-blue-500 to-indigo-800"
    },
    {
      id: "pdr-landing",
      title: "Landing de Mini-App de Trânsito",
      category: "Marketing Engine",
      description: "Portal promocional de ultra performance otimizado para motores de busca via geração estática sob demanda.",
      techSpecs: "Next.js Static Framework, Tailwind CSS, Framer Motion, ISR. Score de 100/100 garantido em performance no Google Lighthouse.",
      link: "https://www.pdr-ua.pp.ua/",
      alternativeLink: "https://pdr-landing-psi.vercel.app/",
      stats: { "lighthouse": "100/100", "bounces": "12%", "conv": "24.8%" },
      gradient: "from-emerald-500 to-teal-800"
    },
    {
      id: "strike-map",
      title: "Mapa de Ataques na RF",
      category: "Análise de Defesa",
      description: "Painel dinâmico que mapeia operações estratégicas e táticas contra instalações inimigas. Processa grandes conjuntos de GeoJSON a 60 FPS estáticos.",
      techSpecs: "Leaflet.js Engine, Canvas de GPU dedicado, feeds geoespaciais em tempo real, validação automatizada de coordenadas.",
      link: "https://sanctions-two.vercel.app/",
      alternativeLink: "https://serjtlgram.github.io/strike-map/",
      stats: { "alvos": "3200+", "fps": "60.0", "delay": "Realtime" },
      gradient: "from-red-500 to-rose-900"
    },
    {
      id: "art-quest",
      title: "ART Thriller Quest",
      category: "Narrativa Interativa",
      description: "Jogo psicológico cinemático e sombrio com ramificações de decisões complexas e design de áudio posicional HTML5.",
      techSpecs: "React, State Machine Engine, Web Audio API, shaders CSS sob medida, pré-carregamento assíncrono de recursos estáticos.",
      link: "https://artquest-delta.vercel.app/",
      stats: { "finais": "5 unique", "media": "120MB+", "sessao": "22min" },
      gradient: "from-amber-500 to-amber-900"
    },
    {
      id: "portfolio-land",
      title: "Portfólio Interativo",
      category: "Frontend Identity",
      description: "Uma página de destino pessoal altamente dinâmica e tematizável. Possui um terminal interativo, suporte multilíngue e micro-animações elegantes.",
      techSpecs: "React, Vite, Tailwind CSS, componentes UI personalizados, motor de temas dinâmico.",
      link: "https://dev-eosin-psi.vercel.app/",
      stats: { "temas": "4+", "idiomas": "5", "performance": "100/100" },
      gradient: "from-slate-700 to-zinc-900"
    }
  ],
  uk: [
    {
      id: "loyalty-bot",
      title: "Інструмент утримання клієнтів",
      category: "Telegram B2B",
      description: "B2B автоматизація лояльності підприємств нового покоління. Гнучке керування картами клієнтів, реферальними ланцюгами та розсилками.",
      techSpecs: "Fastify Web Core, Prisma ORM, Redis, RabbitMQ. Повністю асинхронне виконання черг завдань та робота з вебхуками.",
      link: "https://t.me/diploybot?startapp",
      stats: { "транзакції": "1.2M", "пінг": "45ms", "інтеграції": "12 APIs" },
      gradient: "from-purple-500 to-fuchsia-900"
    },
    {
      id: "pdr-bot",
      title: "Mini-app Telegram з вивчення ПДР України",
      category: "Telegram Mini App",
      description: "Високоінтерактивна освітня система вивчення ПДР безпосередньо в месенджері. Розумні алгоритми інтервальних повторень та детальна статистика.",
      techSpecs: "Telegram WebApps Core, React, Redux Toolkit, Node.js Microservices, PostgreSQL, налаштований розподілений кеш для моментальної відповіді.",
      link: "https://t.me/ispytpdrbot?startapp",
      stats: { "користувачі": "50K+", "швидкість": "80ms", "оцінка": "4.9/5" },
      gradient: "from-blue-500 to-indigo-800"
    },
    {
      id: "pdr-landing",
      title: "Лендінг для mini-app з ПДР",
      category: "Marketing Engine",
      description: "Супершвидкий промо-ресурс, оптимізований під пошукові системи через інструменти інкрементної статичної регенерації даних.",
      techSpecs: "Next.js Static Framework, Tailwind CSS, Framer Motion, ISR. Стабільні 100/100 балів у Google Lighthouse Core Web Vitals.",
      link: "https://www.pdr-ua.pp.ua/",
      alternativeLink: "https://pdr-landing-psi.vercel.app/",
      stats: { "lighthouse": "100/100", "відскоки": "12%", "конверсія": "24.8%" },
      gradient: "from-emerald-500 to-teal-800"
    },
    {
      id: "strike-map",
      title: "Карта уражень РФ",
      category: "OSINT Аналітика",
      description: "Аналітичний картографічний комплекс, що візуалізує оборонні операції по військових об'єктах РФ. Опрацьовує тисячі векторних координат.",
      techSpecs: "Движок Leaflet, прискорений рендеринг через GPU Canvas, парсинг GeoJSON потоків у реальному часі, миттєва гео-валідація.",
      link: "https://sanctions-two.vercel.app/",
      alternativeLink: "https://serjtlgram.github.io/strike-map/",
      stats: { "об'єкти": "3200+", "кадрів": "60.0", "оновлення": "Realtime" },
      gradient: "from-red-500 to-rose-900"
    },
    {
      id: "art-quest",
      title: "АРТ-трилер",
      category: "Квест",
      description: "Атмосферний кінематографічний психологічний трилер з нелінійним сценарієм, інтегрованими звуковими фільтрами та ефектом плівкового шуму.",
      techSpecs: "React, State Machine Core, HTML5 Web Audio Synthesis, CSS Shader overlay, фоновий асинхронний завантажувач ресурсів.",
      link: "https://artquest-delta.vercel.app/",
      stats: { "фінали": "5 endings", "медіа": "120MB+", "сесія": "22min" },
      gradient: "from-amber-500 to-amber-900"
    },
    {
      id: "portfolio-land",
      title: "Інтерактивне Портфоліо",
      category: "Frontend Identity",
      description: "Динамічний персональний лендінг із підтримкою змінних тем. Містить інтерактивний термінал, багатомовність та стильні мікроанімації.",
      techSpecs: "React, Vite, Tailwind CSS, кастомні UI компоненти, динамічний рушій тем.",
      link: "https://dev-eosin-psi.vercel.app/",
      stats: { "теми": "4+", "мови": "5", "продуктивність": "100/100" },
      gradient: "from-slate-700 to-zinc-900"
    }
  ],
  ru: [
    {
      id: "loyalty-bot",
      title: "Инструмент удержания клиентов",
      category: "Telegram B2B",
      description: "B2B автоматизация лояльности предприятий нового поколения. Гибкое управление картами клиентов, реферальными цепочками и рассылками.",
      techSpecs: "Fastify Web Core, Prisma ORM, Redis, RabbitMQ. Полностью асинхронное выполнение очередей задач и обработка вебхуков.",
      link: "https://t.me/diploybot?startapp",
      stats: { "транзакции": "1.2M", "ping": "45ms", "интеграции": "12 APIs" },
      gradient: "from-purple-500 to-fuchsia-900"
    },
    {
      id: "pdr-bot",
      title: "Mini-app Telegram по изучению ПДД Украины",
      category: "Telegram Mini App",
      description: "Высокоинтерактивная образовательная система изучения ПДД прямо в мессенджере. Умные алгоритмы интервальных повторений и детальная статистика.",
      techSpecs: "Telegram WebApps Core, React, Redux Toolkit, Node.js Microservices, PostgreSQL, оптимизированный распределенный кэш памяти.",
      link: "https://t.me/ispytpdrbot?startapp",
      stats: { "пользователи": "50K+", "скорость": "80ms", "оценка": "4.9/5" },
      gradient: "from-blue-500 to-indigo-800"
    },
    {
      id: "pdr-landing",
      title: "Лендинг для mini-app по ПДД",
      category: "Marketing Engine",
      description: "Супербыстрый промо-ресурс, оптимизированный под поисковые системы при помощи инструментов инкрементной статической регенерации данных.",
      techSpecs: "Next.js Static Framework, Tailwind CSS, Framer Motion, ISR. Стабильные 100/100 баллов в Google Lighthouse Core Web Vitals.",
      link: "https://www.pdr-ua.pp.ua/",
      alternativeLink: "https://pdr-landing-psi.vercel.app/",
      stats: { "lighthouse": "100/100", "отказы": "12%", "конверсия": "24.8%" },
      gradient: "from-emerald-500 to-teal-800"
    },
    {
      id: "strike-map",
      title: "Карта поражений РФ",
      category: "OSINT Аналитика",
      description: "Аналитический картографический комплекс, визуализирующий оборонные операции по военным объектам РФ. Обрабатывает тысячи векторных координат.",
      techSpecs: "Движок Leaflet, вскрытый рендеринг через GPU Canvas, парсинг GeoJSON потоков в реальном времени, мгновенная гео-валидация.",
      link: "https://sanctions-two.vercel.app/",
      alternativeLink: "https://serjtlgram.github.io/strike-map/",
      stats: { "объекты": "3200+", "кадров": "60.0", "обновление": "Realtime" },
      gradient: "from-red-500 to-rose-900"
    },
    {
      id: "art-quest",
      title: "АРТ-трилер",
      category: "Квест",
      description: "Атмосферный кинематографический психологический трилер с нелинейным сценарием, интегрированными звуковыми фильтрами и эффектом пленочного шума.",
      techSpecs: "React, State Machine Core, HTML5 Web Audio Synthesis, CSS Shader overlay, фоновый асинхронный загрузчик ресурсов.",
      link: "https://artquest-delta.vercel.app/",
      stats: { "финалы": "5 endings", "медиа": "120MB+", "сессия": "22min" },
      gradient: "from-amber-500 to-amber-900"
    },
    {
      id: "portfolio-land",
      title: "Интерактивное Портфолио",
      category: "Frontend Identity",
      description: "Динамичный персональный лендинг с поддержкой смены тем. Содержит интерактивный терминал, мультиязычность и стильные микроанимации.",
      techSpecs: "React, Vite, Tailwind CSS, кастомные UI компоненты, динамический движок тем.",
      link: "https://dev-eosin-psi.vercel.app/",
      stats: { "темы": "4+", "языки": "5", "скорость": "100/100" },
      gradient: "from-slate-700 to-zinc-900"
    }
  ]
};

const THEMES = {
  'cyber-dark': {
    name: { en: "Cyber Dark", es: "Cyber Oscuro", pt: "Cyber Escuro", uk: "Кібер Темна", ru: "Кибер Темная" },
    bg: "bg-[#04060a] text-slate-100",
    accent: "text-cyan-400",
    accentBg: "bg-cyan-400",
    accentText: "text-black",
    badgeBg: "bg-cyan-950/40 text-cyan-400 border-cyan-900/40",
    headerBg: "bg-[#0a0f1d]/90 border-slate-900 shadow-[0_12px_40px_rgba(0,0,0,0.5)]",
    cardBg: "bg-[#070b16]/55",
    cardBorder: "border-slate-900",
    cardHoverBorder: "group-hover:border-cyan-500/40",
    terminalBg: "bg-[#03050a]/95 border-slate-900 shadow-[0_15px_50px_rgba(0,0,0,0.8)]",
    terminalHeader: "bg-[#060912] border-b-slate-900/50",
    terminalInput: "text-slate-100 caret-cyan-400",
    particleColor: "#22d3ee",
    gridColor: "rgba(34, 211, 238, 0.02)",
    btnPrimary: "bg-cyan-400 text-black hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.45)] border-transparent font-bold",
    glow: "rgba(34, 211, 238, 0.08)",
    heroGlow: "from-cyan-400 via-indigo-400 to-teal-400",
    terminalCommand: "text-cyan-400",
    dropdownBg: "bg-[#080d1a] border-slate-900 text-slate-100 hover:bg-[#0e162b]"
  },
  'clean-light': {
    name: { en: "Clean Light", es: "Luz Limpia", pt: "Luz Limpa", uk: "Світла", ru: "Светлая" },
    bg: "bg-[#f8fafc] text-slate-900",
    accent: "text-indigo-600",
    accentBg: "bg-indigo-600",
    accentText: "text-white",
    badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-100",
    headerBg: "bg-white/80 border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]",
    cardBg: "bg-white/90",
    cardBorder: "border-slate-200/80",
    cardHoverBorder: "group-hover:border-indigo-300/60",
    terminalBg: "bg-slate-900 text-slate-100 border-slate-800 shadow-[0_15px_50px_rgba(0,0,0,0.15)]",
    terminalHeader: "bg-slate-950 border-b-slate-800/80",
    terminalInput: "text-slate-100 caret-indigo-500",
    particleColor: "#4f46e5",
    gridColor: "rgba(79, 70, 229, 0.02)",
    btnPrimary: "bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-[0_0_20px_rgba(79,70,229,0.3)] border-transparent font-bold",
    glow: "rgba(79, 70, 229, 0.04)",
    heroGlow: "from-indigo-600 via-violet-600 to-blue-600",
    terminalCommand: "text-indigo-400",
    dropdownBg: "bg-white border-slate-200 text-slate-800 hover:bg-slate-50"
  },
  'neon-synth': {
    name: { en: "Neon Synth", es: "Neon Synth", pt: "Neon Synth", uk: "Неоновий Синт", ru: "Неоновый Синт" },
    bg: "bg-[#0f051d] text-fuchsia-50",
    accent: "text-fuchsia-500",
    accentBg: "bg-fuchsia-500",
    accentText: "text-black",
    badgeBg: "bg-fuchsia-950/40 text-fuchsia-400 border-fuchsia-900/40",
    headerBg: "bg-[#160a2b]/90 border-fuchsia-950 shadow-[0_12px_40px_rgba(244,63,94,0.15)]",
    cardBg: "bg-[#1c0d38]/50",
    cardBorder: "border-fuchsia-950/70",
    cardHoverBorder: "group-hover:border-fuchsia-500/40",
    terminalBg: "bg-[#0b0314]/95 border-fuchsia-950 shadow-[0_15px_50px_rgba(0,0,0,0.8)]",
    terminalHeader: "bg-[#120524] border-b-fuchsia-900/40",
    terminalInput: "text-fuchsia-50 caret-fuchsia-500",
    particleColor: "#d946ef",
    gridColor: "rgba(217, 70, 239, 0.02)",
    btnPrimary: "bg-fuchsia-500 text-black hover:bg-fuchsia-400 hover:shadow-[0_0_20px_rgba(244,63,94,0.45)] border-transparent font-bold",
    glow: "rgba(244, 63, 94, 0.12)",
    heroGlow: "from-fuchsia-500 via-pink-500 to-indigo-500",
    terminalCommand: "text-fuchsia-400",
    dropdownBg: "bg-[#140828] border-fuchsia-900/40 text-fuchsia-100 hover:bg-[#1f0d3d]"
  },
  'amber-hack': {
    name: { en: "Amber Deus", es: "Ambar Deus", pt: "Âmbar Deus", uk: "Бурштинова", ru: "Янтарная" },
    bg: "bg-[#090704] text-amber-50",
    accent: "text-[#f59e0b]",
    accentBg: "bg-amber-500",
    accentText: "text-black",
    badgeBg: "bg-amber-950/40 text-amber-500 border-amber-900/40",
    headerBg: "bg-[#110f08]/90 border-amber-950/80 shadow-[0_12px_40px_rgba(245,158,11,0.1)]",
    cardBg: "bg-[#19150c]/50",
    cardBorder: "border-amber-950/80",
    cardHoverBorder: "group-hover:border-amber-500/40",
    terminalBg: "bg-[#0d0b06]/95 border-amber-950/80 shadow-[0_15px_50px_rgba(0,0,0,0.8)]",
    terminalHeader: "bg-[#141009] border-b-amber-900/40",
    terminalInput: "text-amber-50 caret-amber-500",
    particleColor: "#f59e0b",
    gridColor: "rgba(245, 158, 11, 0.03)",
    btnPrimary: "bg-amber-500 text-black hover:bg-amber-600 hover:shadow-[0_0_20px_rgba(245,158,11,0.45)] border-transparent font-bold",
    glow: "rgba(245, 158, 11, 0.12)",
    heroGlow: "from-amber-400 via-orange-400 to-yellow-500",
    terminalCommand: "text-amber-500",
    dropdownBg: "bg-[#15110a] border-amber-900/40 text-amber-100 hover:bg-[#201a0e]"
  }
};

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    let rafId: number;
    let paused = false;

    function raf(time: number) {
      if (!paused) lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    const onVisibility = () => { paused = document.hidden; };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return <>{children}</>;
};


function useScrollReveal() {
  const [revealed, setRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return [ref, revealed] as const;
}

const HighFidelityConstellation = ({ themeConfig }: { themeConfig: typeof THEMES['cyber-dark'] }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // alpha:true is default; explicitly no willReadFrequently since we never readback
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;
    let animationFrameId: number;
    let paused = false;

    // Off-screen canvas for the static grid — drawn once per resize, blitted each frame
    const gridCanvas = document.createElement('canvas');
    const gridCtx = gridCanvas.getContext('2d');

    const setupDimensions = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      gridCanvas.width = w;
      gridCanvas.height = h;
      return { w, h };
    };

    let { w: width, h: height } = setupDimensions();

    const drawGrid = () => {
      if (!gridCtx) return;
      gridCtx.clearRect(0, 0, width, height);
      gridCtx.strokeStyle = themeConfig.gridColor;
      gridCtx.lineWidth = 1;
      const gridSize = 90;
      gridCtx.beginPath();
      for (let x = 0; x < width; x += gridSize) {
        gridCtx.moveTo(x, 0);
        gridCtx.lineTo(x, height);
      }
      for (let y = 0; y < height; y += gridSize) {
        gridCtx.moveTo(0, y);
        gridCtx.lineTo(width, y);
      }
      gridCtx.stroke();
    };
    drawGrid();

    // Fewer particles — O(n²) connection check is very sensitive to N
    const particleCount = Math.min(60, Math.floor((width * height) / 22000));
    const mouse = { x: null as number | null, y: null as number | null };

    class InteractiveParticle {
      x: number; y: number; vx: number; vy: number; radius: number; alpha: number;
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.radius = Math.random() * 2.5 + 1;
        this.alpha = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 280;

          if (dist < maxDistance) {
            const force = (maxDistance - dist) / maxDistance;
            this.vx += (dx / dist) * force * 0.18;
            this.vy += (dy / dist) * force * 0.18;
            const speedLimit = 4.5;
            const currentSpeed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
            if (currentSpeed > speedLimit) {
              this.vx = (this.vx / currentSpeed) * speedLimit;
              this.vy = (this.vy / currentSpeed) * speedLimit;
            }
          } else {
            this.vx *= 0.99;
            this.vy *= 0.99;
          }
        } else {
          this.vx *= 0.985;
          this.vy *= 0.985;
          const maxDrift = 0.5;
          const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
          if (speed < 0.05) {
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;
          }
          if (speed > maxDrift) {
            this.vx = (this.vx / speed) * maxDrift;
            this.vy = (this.vy / speed) * maxDrift;
          }
        }
      }

      draw() {
        // No shadowBlur — it is the single most expensive Canvas GPU call
        // ctx is guaranteed non-null by the early-return guard above
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx!.fillStyle = themeConfig.particleColor;
        ctx!.globalAlpha = this.alpha;
        ctx!.fill();
      }
    }

    const particles: InteractiveParticle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new InteractiveParticle());
    }

    const handleResize = () => {
      if (!canvas) return;
      ({ w: width, h: height } = setupDimensions());
      drawGrid();
    };

    // Throttle mousemove to ~30fps to reduce per-frame physics work
    let lastMouseTime = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastMouseTime < 33) return;
      lastMouseTime = now;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const onVisibility = () => { paused = document.hidden; };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('visibilitychange', onVisibility);

    const CONN_DIST = 140;
    const CONN_DIST_SQ = CONN_DIST * CONN_DIST;
    const color = themeConfig.particleColor;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (paused) return;

      ctx.clearRect(0, 0, width, height);
      // Blit the pre-drawn static grid — zero per-frame stroke calls
      ctx.globalAlpha = 1;
      ctx.drawImage(gridCanvas, 0, 0);

      particles.forEach((p, idx) => {
        p.update();
        p.draw();

        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distSq = dx * dx + dy * dy;

          // Cheap squared distance check before expensive sqrt
          if (distSq < CONN_DIST_SQ) {
            const dist = Math.sqrt(distSq);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = color;
            ctx.globalAlpha = (1 - dist / CONN_DIST) * 0.28;
            ctx.stroke();
          }
        }
      });
      ctx.globalAlpha = 1;
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [themeConfig]);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ willChange: 'transform' }} />;
};

// Wraps any element with magnetic attraction to cursor
const MagnetWrap = ({ children, strength = 0.35 }: { children: React.ReactNode; strength?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [xy, setXy] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setXy({ x: (e.clientX - (r.left + r.width / 2)) * strength, y: (e.clientY - (r.top + r.height / 2)) * strength });
  };
  const onLeave = () => setXy({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        transform: `translate3d(${xy.x}px, ${xy.y}px, 0)`,
        transition: xy.x === 0 && xy.y === 0
          ? 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
          : 'transform 0.1s ease-out',
        display: 'inline-block',
      }}
    >
      {children}
    </div>
  );
};

const MagneticButton = ({ children, className, onClick, id, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) => {
  const btnRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setTransform({ x: x * 0.35, y: y * 0.35 });
  };

  const handleMouseLeave = () => {
    setTransform({ x: 0, y: 0 });
  };

  return (
    <div
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        transition: transform.x === 0 && transform.y === 0
          ? 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
          : 'transform 0.1s ease-out'
      }}
      className="inline-block"
    >
      <button id={id} onClick={onClick} className={className} {...props}>
        {children}
      </button>
    </div>
  );
};

// Shared rAF scheduler for all orbit nodes — one loop instead of 6
type OrbitListener = (angle: number) => void;
const orbitListeners = new Map<string, OrbitListener>();
let orbitRafId = 0;
let orbitRunning = false;
const orbitAngles = new Map<string, number>();

const startOrbitScheduler = () => {
  if (orbitRunning) return;
  orbitRunning = true;
  const tick = () => {
    if (document.hidden) { orbitRafId = requestAnimationFrame(tick); return; }
    orbitListeners.forEach((cb, id) => {
      const prev = orbitAngles.get(id) ?? 0;
      const next = (prev + 0.002) % (Math.PI * 2);
      orbitAngles.set(id, next);
      cb(next);
    });
    orbitRafId = requestAnimationFrame(tick);
  };
  orbitRafId = requestAnimationFrame(tick);
};

const stopOrbitScheduler = () => {
  orbitRunning = false;
  cancelAnimationFrame(orbitRafId);
};

const TechGalaxyNode = ({ name, angle, radius, icon, active, onHover, themeAccent, isDark }: {
  name: string; angle: number; radius: number; icon: React.ReactNode; active: boolean; onHover: (n: string | null) => void; themeAccent: string; isDark: boolean;
}) => {
  // Use a ref for position — updating DOM directly, no React re-render per frame
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    orbitAngles.set(name, angle);
    orbitListeners.set(name, (a: number) => {
      const el = nodeRef.current;
      if (!el) return;
      const x = Math.cos(a) * radius;
      const y = Math.sin(a) * radius;
      el.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    });
    startOrbitScheduler();
    return () => {
      orbitListeners.delete(name);
      orbitAngles.delete(name);
      if (orbitListeners.size === 0) stopOrbitScheduler();
    };
  }, [name, angle, radius]);

  return (
    <div
      ref={nodeRef}
      style={{ transform: `translate(calc(-50% + ${Math.cos(angle) * radius}px), calc(-50% + ${Math.sin(angle) * radius}px))` }}
      className="absolute top-1/2 left-1/2 z-20"
      onMouseEnter={() => onHover(name)}
      onMouseLeave={() => onHover(null)}
    >
      <div className={`flex items-center justify-center w-11 h-11 rounded-full border font-mono text-[9px] font-bold cursor-pointer transition-all duration-300 ${
        isDark 
          ? `bg-slate-950/90 border-slate-800 text-white ${active ? 'scale-125 border-current shadow-[0_0_20px_currentColor]' : 'hover:border-slate-400'}`
          : `bg-white/95 border-slate-200 text-slate-800 shadow-[0_4px_12px_rgba(0,0,0,0.05)] ${active ? 'scale-125 border-current shadow-[0_0_15px_currentColor]' : 'hover:border-slate-400'}`
      }`} style={active ? { borderColor: themeAccent, boxShadow: `0 0 20px ${themeAccent}` } : {}}>
        {icon}
      </div>
      {active && (
        <span className={`absolute left-1/2 -bottom-7 -translate-x-1/2 whitespace-nowrap text-[9px] font-mono tracking-wider px-2.5 py-1 rounded border shadow-lg transition-colors ${
          isDark 
            ? 'bg-black/90 text-white border-slate-800/80 shadow-black/40' 
            : 'bg-white/95 text-slate-800 border-slate-200/80 shadow-slate-200/60'
        }`} style={{ color: themeAccent, borderColor: `${themeAccent}30` }}>
          {name}
        </span>
      )}
    </div>
  );
};

const getTechIcon = (name: string, isDark: boolean) => {
  const colorClass = isDark ? {
    "React Engine": "text-cyan-400",
    "Telegram Bot API": "text-blue-400",
    "Fastify Core": "text-emerald-400",
    "PostgreSQL Data": "text-indigo-400",
    "Next.js Framework": "text-amber-400",
    "GeoJSON / Leaflet": "text-rose-400"
  }[name] : {
    "React Engine": "text-cyan-600",
    "Telegram Bot API": "text-blue-600",
    "Fastify Core": "text-emerald-600",
    "PostgreSQL Data": "text-indigo-600",
    "Next.js Framework": "text-amber-600",
    "GeoJSON / Leaflet": "text-rose-600"
  }[name] || "text-slate-600";

  const iconMap: Record<string, React.ReactNode> = {
    "React Engine": <Layers className={`w-4 h-4 ${colorClass}`} />,
    "Telegram Bot API": <Network className={`w-4 h-4 ${colorClass}`} />,
    "Fastify Core": <Zap className={`w-4 h-4 ${colorClass}`} />,
    "PostgreSQL Data": <Cpu className={`w-4 h-4 ${colorClass}`} />,
    "Next.js Framework": <CheckCircle2 className={`w-4 h-4 ${colorClass}`} />,
    "GeoJSON / Leaflet": <Compass className={`w-4 h-4 ${colorClass}`} />
  };

  return iconMap[name];
};

const TechGalaxy = ({ themeConfig, t, theme }: { themeConfig: typeof THEMES['cyber-dark']; t: typeof TRANSLATIONS['en']; theme: string }) => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const isDark = theme !== 'clean-light';

  const orbitTechs = [
    { name: "React Engine", radius: 95, angle: 0 },
    { name: "Telegram Bot API", radius: 145, angle: Math.PI / 3 },
    { name: "Fastify Core", radius: 195, angle: (2 * Math.PI) / 3 },
    { name: "PostgreSQL Data", radius: 145, angle: Math.PI },
    { name: "Next.js Framework", radius: 95, angle: (4 * Math.PI) / 3 },
    { name: "GeoJSON / Leaflet", radius: 195, angle: (5 * Math.PI) / 3 }
  ];

  return (
    <div
      className="w-full py-12 flex flex-col items-center justify-center relative overflow-hidden min-h-[500px]"
      style={{ '--accent-color': themeConfig.particleColor } as React.CSSProperties}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-transparent pointer-events-none" />
      
      <div className={`relative z-10 w-24 h-24 rounded-full border flex flex-col items-center justify-center shadow-2xl transition-colors duration-300 ${
        isDark ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900 shadow-[0_8px_30px_rgba(0,0,0,0.06)]'
      }`}>
        <div className={`absolute inset-0 rounded-full ${themeConfig.accentBg} opacity-15 animate-ping`} style={{ animationDuration: '2.5s' }} />
        <TerminalIcon className={`w-7 h-7 ${themeConfig.accent} mb-1 animate-pulse`} />
        <span className="font-mono text-[9px] tracking-widest font-extrabold">VIBE</span>
        <span className={`font-mono text-[7px] tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>ENGINE</span>
      </div>

      <div className={`absolute w-[190px] h-[190px] rounded-full border pointer-events-none z-0 transition-colors duration-300 ${isDark ? 'border-slate-900' : 'border-slate-200'}`} />
      <div className={`absolute w-[290px] h-[290px] rounded-full border pointer-events-none z-0 transition-colors duration-300 ${isDark ? 'border-slate-900/60' : 'border-slate-200/80'}`} />
      <div className={`absolute w-[390px] h-[390px] rounded-full border pointer-events-none z-0 transition-colors duration-300 ${isDark ? 'border-slate-900/40' : 'border-slate-200/60'}`} />

      {orbitTechs.map((tech) => (
        <TechGalaxyNode
          key={tech.name}
          name={tech.name}
          angle={tech.angle}
          radius={tech.radius}
          icon={getTechIcon(tech.name, isDark)}
          active={hoveredNode === tech.name}
          onHover={setHoveredNode}
          themeAccent={themeConfig.particleColor}
          isDark={isDark}
        />
      ))}

      <div className="mt-8 text-center min-h-[42px] z-10">
        <p className="text-[10px] font-mono tracking-wider opacity-60 uppercase">{t.galaxyHeader}</p>
        <p className={`text-xs font-mono font-bold ${themeConfig.accent} mt-1.5`}>
          {hoveredNode ? `>> ACTIVE PORT: ${hoveredNode.toUpperCase()}` : `>> STATUS: ACTIVE`}
        </p>
      </div>
    </div>
  );
};

const AbstractCardBg = ({ projectId, active }: { projectId: string; active: boolean }) => {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden rounded-2xl"
      style={{
        opacity: active ? 1 : 0,
        transition: 'opacity 0.6s cubic-bezier(0.4,0,0.2,1)',
      }}
    >
      {/* Portfolio Land — sleek data waves and floating tech particles */}
      {projectId === 'portfolio-land' && (
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="bg-portfolio" cx="80%" cy="20%">
              <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#e2e8f0" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <rect width="400" height="300" fill="url(#bg-portfolio)" />
          
          {/* Flowing data lines */}
          <g className="card-bg-waves" style={{ transformOrigin: '200px 150px', transform: 'rotate(-10deg) scale(1.2)' }}>
            <path d="M-100,100 C0,150 100,50 200,100 C300,150 400,50 500,100" fill="none" stroke="url(#wave-grad)" strokeWidth="1.5" strokeOpacity="0.5" />
            <path d="M-100,120 C0,170 100,70 200,120 C300,170 400,70 500,120" fill="none" stroke="url(#wave-grad)" strokeWidth="1" strokeOpacity="0.3" style={{ animationDelay: '0.4s' }} />
            <path d="M-100,140 C0,190 100,90 200,140 C300,190 400,90 500,140" fill="none" stroke="url(#wave-grad)" strokeWidth="0.5" strokeOpacity="0.2" style={{ animationDelay: '0.8s' }} />
          </g>

          {/* Floating tech squares */}
          <rect x="280" y="50" width="40" height="40" fill="none" stroke="#64748b" strokeWidth="0.8" strokeOpacity="0.3" transform="rotate(15 300 70)">
            <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite" />
          </rect>
          <rect x="290" y="60" width="20" height="20" fill="none" stroke="#94a3b8" strokeWidth="0.8" strokeOpacity="0.5" transform="rotate(-10 300 70)">
             <animate attributeName="stroke-opacity" values="0.5;0.1;0.5" dur="3s" repeatCount="indefinite" />
          </rect>

          <circle cx="90" cy="220" r="2" fill="#cbd5e1" fillOpacity="0.6">
            <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="340" cy="240" r="3" fill="#94a3b8" fillOpacity="0.4">
            <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.5s" repeatCount="indefinite" />
          </circle>
        </svg>
      )}

      {/* PDR Bot — blue concentric orbital rings with floating dots */}
      {projectId === 'pdr-bot' && (
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="bg-pdr-bot" cx="30%" cy="30%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="400" height="300" fill="url(#bg-pdr-bot)" />
          <g style={{ transformOrigin: '320px 60px' }} className="card-bg-orbit-fast">
            <ellipse cx="320" cy="60" rx="70" ry="70" fill="none" stroke="#60a5fa" strokeWidth="0.8" strokeOpacity="0.25" strokeDasharray="6 4" />
          </g>
          <g style={{ transformOrigin: '320px 60px' }} className="card-bg-orbit-med">
            <ellipse cx="320" cy="60" rx="110" ry="110" fill="none" stroke="#818cf8" strokeWidth="0.6" strokeOpacity="0.18" strokeDasharray="3 7" />
          </g>
          <g style={{ transformOrigin: '320px 60px' }} className="card-bg-orbit-slow">
            <ellipse cx="320" cy="60" rx="150" ry="150" fill="none" stroke="#38bdf8" strokeWidth="0.5" strokeOpacity="0.12" strokeDasharray="10 6" />
          </g>
          <circle cx="320" cy="60" r="4" fill="#60a5fa" fillOpacity="0.5" />
          <circle cx="250" cy="60" r="2.5" fill="#93c5fd" fillOpacity="0.6">
            <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2.4s" repeatCount="indefinite" />
          </circle>
          <circle cx="380" cy="100" r="2" fill="#818cf8" fillOpacity="0.5">
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3.1s" repeatCount="indefinite" />
          </circle>
          <circle cx="30" cy="220" r="60" fill="none" stroke="#3b82f6" strokeWidth="0.5" strokeOpacity="0.10" />
        </svg>
      )}

      {/* PDR Landing — emerald geometric grid with shimmer lines */}
      {projectId === 'pdr-landing' && (
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="bg-pdr-land" cx="70%" cy="25%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#0d1f17" stopOpacity="0" />
            </radialGradient>
            <pattern id="grid-land" width="28" height="28" patternUnits="userSpaceOnUse">
              <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#34d399" strokeWidth="0.4" strokeOpacity="0.22" />
            </pattern>
          </defs>
          <rect width="400" height="300" fill="url(#bg-pdr-land)" />
          <rect width="400" height="300" fill="url(#grid-land)" />
          {/* Diagonal shimmer accents */}
          <line x1="0" y1="0" x2="400" y2="300" stroke="#34d399" strokeWidth="0.7" strokeOpacity="0.12" strokeDasharray="8 12" className="card-bg-grid" />
          <line x1="100" y1="0" x2="400" y2="220" stroke="#6ee7b7" strokeWidth="0.5" strokeOpacity="0.10" strokeDasharray="5 15" className="card-bg-grid" style={{ animationDelay: '1.2s' }} />
          <line x1="0" y1="80" x2="300" y2="300" stroke="#10b981" strokeWidth="0.6" strokeOpacity="0.10" strokeDasharray="12 8" className="card-bg-grid" style={{ animationDelay: '0.6s' }} />
          {/* Corner accent ring */}
          <circle cx="350" cy="40" r="55" fill="none" stroke="#34d399" strokeWidth="0.6" strokeOpacity="0.16" strokeDasharray="4 8" />
          <circle cx="350" cy="40" r="30" fill="none" stroke="#6ee7b7" strokeWidth="0.5" strokeOpacity="0.12" />
        </svg>
      )}

      {/* Loyalty Bot — purple network / graph nodes */}
      {projectId === 'loyalty-bot' && (
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="bg-loyalty" cx="55%" cy="40%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#1e0533" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="400" height="300" fill="url(#bg-loyalty)" />
          <g className="card-bg-net">
            {/* Edges */}
            <line x1="80" y1="60" x2="200" y2="130" stroke="#c084fc" strokeWidth="0.7" strokeOpacity="0.35" />
            <line x1="320" y1="50" x2="200" y2="130" stroke="#c084fc" strokeWidth="0.7" strokeOpacity="0.35" />
            <line x1="200" y1="130" x2="130" y2="240" stroke="#a855f7" strokeWidth="0.7" strokeOpacity="0.28" />
            <line x1="200" y1="130" x2="340" y2="220" stroke="#a855f7" strokeWidth="0.7" strokeOpacity="0.28" />
            <line x1="80" y1="60" x2="30" y2="180" stroke="#7c3aed" strokeWidth="0.5" strokeOpacity="0.20" />
            <line x1="320" y1="50" x2="380" y2="160" stroke="#7c3aed" strokeWidth="0.5" strokeOpacity="0.20" />
            <line x1="30" y1="180" x2="130" y2="240" stroke="#7c3aed" strokeWidth="0.5" strokeOpacity="0.16" />
            <line x1="380" y1="160" x2="340" y2="220" stroke="#7c3aed" strokeWidth="0.5" strokeOpacity="0.16" />
            {/* Nodes */}
            <circle cx="200" cy="130" r="7" fill="#a855f7" fillOpacity="0.30" />
            <circle cx="200" cy="130" r="3" fill="#d8b4fe" fillOpacity="0.55" />
            <circle cx="80" cy="60" r="5" fill="#c084fc" fillOpacity="0.30" />
            <circle cx="80" cy="60" r="2.5" fill="#e9d5ff" fillOpacity="0.50" />
            <circle cx="320" cy="50" r="5" fill="#c084fc" fillOpacity="0.30" />
            <circle cx="320" cy="50" r="2.5" fill="#e9d5ff" fillOpacity="0.50" />
            <circle cx="130" cy="240" r="4" fill="#9333ea" fillOpacity="0.30" />
            <circle cx="340" cy="220" r="4" fill="#9333ea" fillOpacity="0.30" />
            <circle cx="30" cy="180" r="3.5" fill="#7c3aed" fillOpacity="0.25" />
            <circle cx="380" cy="160" r="3.5" fill="#7c3aed" fillOpacity="0.25" />
          </g>
        </svg>
      )}

      {/* Strike Map — red radar sweep */}
      {projectId === 'strike-map' && (
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="bg-strike" cx="65%" cy="35%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#1f0000" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="sweep-strike" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#f87171" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="400" height="300" fill="url(#bg-strike)" />
          {/* Static concentric rings */}
          <circle cx="300" cy="70" r="40" fill="none" stroke="#f87171" strokeWidth="0.7" strokeOpacity="0.20" />
          <circle cx="300" cy="70" r="75" fill="none" stroke="#f87171" strokeWidth="0.5" strokeOpacity="0.14" />
          <circle cx="300" cy="70" r="115" fill="none" stroke="#ef4444" strokeWidth="0.5" strokeOpacity="0.10" />
          {/* Crosshair */}
          <line x1="300" y1="30" x2="300" y2="110" stroke="#f87171" strokeWidth="0.5" strokeOpacity="0.22" />
          <line x1="260" y1="70" x2="340" y2="70" stroke="#f87171" strokeWidth="0.5" strokeOpacity="0.22" />
          {/* Rotating sweep wedge */}
          <g style={{ transformOrigin: '300px 70px' }} className="card-bg-radar">
            <path d="M300 70 L340 40 A50 50 0 0 1 348 90 Z" fill="url(#sweep-strike)" />
          </g>
          {/* Blinking dot */}
          <circle cx="300" cy="70" r="3" fill="#fca5a5" fillOpacity="0.7">
            <animate attributeName="r" values="3;6;3" dur="1.8s" repeatCount="indefinite" />
            <animate attributeName="fill-opacity" values="0.7;0.2;0.7" dur="1.8s" repeatCount="indefinite" />
          </circle>
          {/* Scattered hit markers */}
          <circle cx="170" cy="200" r="2.5" fill="#f87171" fillOpacity="0.30">
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.3s" repeatCount="indefinite" />
          </circle>
          <circle cx="60" cy="100" r="2" fill="#fca5a5" fillOpacity="0.25">
            <animate attributeName="opacity" values="0.25;0.6;0.25" dur="3.1s" repeatCount="indefinite" />
          </circle>
        </svg>
      )}

      {/* ART Quest — amber horizontal scanlines with noise texture */}
      {projectId === 'art-quest' && (
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="bg-art" cx="40%" cy="60%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.13" />
              <stop offset="100%" stopColor="#1c0a00" stopOpacity="0" />
            </radialGradient>
            <filter id="art-noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
              <feBlend in="SourceGraphic" mode="overlay" result="blend" />
              <feComposite in="blend" in2="SourceGraphic" operator="in" />
            </filter>
          </defs>
          <rect width="400" height="300" fill="url(#bg-art)" />
          {/* Horizontal scanlines */}
          {Array.from({ length: 18 }).map((_, i) => (
            <line
              key={i}
              x1="0" y1={i * 18 + 4} x2="400" y2={i * 18 + 4}
              stroke="#fbbf24"
              strokeWidth="0.5"
              strokeOpacity={i % 3 === 0 ? 0.22 : 0.10}
              className="card-bg-wave"
              style={{ animationDelay: `${i * 0.18}s`, animationDuration: `${5 + (i % 3)}s` }}
            />
          ))}
          {/* Branching decision lines — subtle */}
          <g opacity="0.20">
            <line x1="200" y1="0" x2="100" y2="150" stroke="#f59e0b" strokeWidth="0.8" />
            <line x1="200" y1="0" x2="300" y2="150" stroke="#f59e0b" strokeWidth="0.8" />
            <line x1="100" y1="150" x2="40" y2="300" stroke="#d97706" strokeWidth="0.6" />
            <line x1="100" y1="150" x2="180" y2="300" stroke="#d97706" strokeWidth="0.6" />
            <line x1="300" y1="150" x2="220" y2="300" stroke="#d97706" strokeWidth="0.6" />
            <line x1="300" y1="150" x2="370" y2="300" stroke="#d97706" strokeWidth="0.6" />
            <circle cx="200" cy="0" r="4" fill="#fbbf24" fillOpacity="0.40" />
            <circle cx="100" cy="150" r="3" fill="#fbbf24" fillOpacity="0.35" />
            <circle cx="300" cy="150" r="3" fill="#fbbf24" fillOpacity="0.35" />
          </g>
        </svg>
      )}
    </div>
  );
};

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  techSpecs: string;
  link: string;
  alternativeLink?: string;
  stats: Record<string, string>;
  gradient: string;
};

const getProjectBlobColors = (projectId: string) => {
  const colors: Record<string, { blob1: string; blob2: string }> = {
    'pdr-bot': { blob1: 'bg-blue-500/20', blob2: 'bg-indigo-600/15' },
    'pdr-landing': { blob1: 'bg-emerald-500/20', blob2: 'bg-teal-600/15' },
    'loyalty-bot': { blob1: 'bg-purple-500/20', blob2: 'bg-fuchsia-600/15' },
    'strike-map': { blob1: 'bg-red-500/20', blob2: 'bg-rose-600/15' },
        'art-quest': { blob1: 'bg-amber-500/20', blob2: 'bg-yellow-600/15' },
    'portfolio-land': { blob1: 'bg-slate-500/20', blob2: 'bg-zinc-600/15' }
  };
  return colors[projectId] || { blob1: 'bg-cyan-500/20', blob2: 'bg-blue-600/15' };
};

const ProjectCard = ({ project, index, t, themeConfig, visible }: {
  project: Project;
  index: number;
  t: typeof TRANSLATIONS['en'];
  themeConfig: typeof THEMES['cyber-dark'];
  visible: boolean;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!visible) return;
    const staggerTimeout = setTimeout(() => {
      setRevealed(true);
    }, index * 140);
    return () => clearTimeout(staggerTimeout);
  }, [index, visible]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;
    setTilt({ x: x * 18, y: y * -18 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  const handleTouch = (e: React.TouchEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const touch = e.touches[0];
    const width = rect.width;
    const height = rect.height;
    const x = (touch.clientX - rect.left) / width - 0.5;
    const y = (touch.clientY - rect.top) / height - 0.5;
    setTilt({ x: x * 18, y: y * -18 });
    if (!hovered) setHovered(true);
  };

  return (
    <div
      className={`transition-all duration-[800ms] ${revealed ? 'animate-fade-up' : 'opacity-0'}`}
      style={{
        animationDelay: revealed ? `${index * 120}ms` : '0ms',
      }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouch}
        onTouchMove={handleTouch}
        className={`relative flex flex-col justify-between h-full rounded-2xl border ${themeConfig.cardBorder} ${themeConfig.cardBg} ${themeConfig.cardHoverBorder} p-6 md:p-8 backdrop-blur-md overflow-hidden group cursor-pointer`}
        style={{
          transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) scale(${hovered ? 1.025 : 1})`,
          transition: hovered 
            ? 'transform 0.08s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s ease' 
            : 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s ease',
          boxShadow: hovered ? `0 25px 50px -12px ${themeConfig.glow}` : 'none',
          transformStyle: 'preserve-3d',
        }}
      >
        <AbstractCardBg projectId={project.id} active={hovered} />

        <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${project.gradient} opacity-80`} />

        <div className="relative z-10" style={{ transformStyle: 'preserve-3d' }}>
          <div className="flex justify-between items-start mb-4" style={{ transform: hovered ? 'translateZ(20px)' : 'translateZ(0px)', transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)' }}>
            <span className={`text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded border ${themeConfig.badgeBg}`}>
              {project.category}
            </span>
            <div className="flex gap-2 items-center">
              <span className={`w-2 h-2 rounded-full ${themeConfig.accentBg} animate-pulse`} />
            </div>
          </div>

          <h3 
            className="text-2xl font-bold tracking-tighter leading-tight mb-3 transition-colors"
            style={{ transform: hovered ? 'translateZ(35px)' : 'translateZ(0px)', transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)' }}
          >
            {project.title}
          </h3>

          <div className="mb-6 space-y-4" style={{ transformStyle: 'preserve-3d' }}>
            <p 
              className="opacity-75 text-sm md:text-base leading-relaxed font-sans"
              style={{ transform: hovered ? 'translateZ(15px)' : 'translateZ(0px)', transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)' }}
            >
              {project.description}
            </p>

            <div 
              className="font-mono text-xs leading-relaxed bg-[#000000]/40 p-3.5 rounded-xl border border-slate-800/20 backdrop-blur-sm"
              style={{ transform: hovered ? 'translateZ(10px)' : 'translateZ(0px)', transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)' }}
            >
              <span className="opacity-45 tracking-wider">// {t.techStackTitle}</span><br />
              <span className="opacity-90">{project.techSpecs}</span>
            </div>
          </div>
        </div>

        <div className="relative z-10" style={{ transformStyle: 'preserve-3d' }}>
          <div 
            className="grid grid-cols-3 gap-2 border-t border-b border-slate-800/10 py-3.5 mb-5 text-center font-mono tabular-nums"
            style={{ transform: hovered ? 'translateZ(15px)' : 'translateZ(0px)', transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)' }}
          >
            {Object.entries(project.stats).map(([key, val]) => (
              <div key={key}>
                <div className="text-[9px] font-mono uppercase tracking-widest opacity-45">{key}</div>
                <div className="text-xs font-black tracking-tight mt-0.5">{val}</div>
              </div>
            ))}
          </div>

          <div 
            className="flex flex-col sm:flex-row gap-2 mt-auto"
            style={{ transform: hovered ? 'translateZ(25px)' : 'translateZ(0px)', transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)' }}
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-gradient-to-b from-white/10 to-white/[0.02] hover:bg-white/[0.08] border border-white/10 text-current font-bold text-xs font-mono tracking-wider uppercase transition-all shadow-md active:scale-95"
            >
              {t.launchApp}
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            {project.alternativeLink && (
              <a
                href={project.alternativeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border border-white/5 bg-black/20 hover:bg-black/40 text-current opacity-80 font-bold text-xs font-mono tracking-wider uppercase transition-all hover:opacity-100"
              >
                {t.mirror}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const InteractiveTerminal = ({ triggerHack, currentLang, t, themeConfig }: {
  triggerHack: () => void;
  currentLang: string;
  t: typeof TRANSLATIONS['en'];
  themeConfig: typeof THEMES['cyber-dark'];
}) => {
  const [history, setHistory] = useState<{ 
    text: string; 
    type: string; 
    linkText?: string; 
    linkUrl?: string; 
    altLinkUrl?: string; 
  }[]>([]);
  const [inputVal, setInputVal] = useState("");
  const terminalConsoleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHistory([
      { text: t.terminalInit, type: "system" },
      { text: t.terminalHint, type: "hint" }
    ]);
  }, [currentLang, t]);

  const handleCommandSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const cmd = inputVal.trim().toLowerCase();
      const response: { 
        text: string; 
        type: string; 
        linkText?: string; 
        linkUrl?: string; 
        altLinkUrl?: string; 
      }[] = [];
      response.push({ text: `visitor@serj-matrix:~$ ${inputVal}`, type: "command" });

      if (cmd === 'help') {
        response.push({ text: t.terminalHelpHeader, type: "system" });
        response.push({ text: `  projects - ${t.terminalHelpProjects}`, type: "system" });
        response.push({ text: `  skills   - ${t.terminalHelpSkills}`, type: "system" });
        response.push({ text: `  contacts - ${t.terminalHelpContacts}`, type: "system" });
        response.push({ text: `  sudo hack- ${t.terminalHelpSudo}`, type: "system" });
        response.push({ text: `  clear    - ${t.terminalHelpClear}`, type: "system" });
      } else if (cmd === 'projects') {
        response.push({ text: t.terminalQuery, type: "system" });
        LOCALIZED_PROJECTS[currentLang as keyof typeof LOCALIZED_PROJECTS].forEach(p => {
          response.push({ 
            text: `• [${p.category}] ${p.title} -> `, 
            linkText: p.link,
            linkUrl: p.link,
            altLinkUrl: p.alternativeLink,
            type: "success" 
          });
        });
      } else if (cmd === 'skills') {
        response.push({ text: t.terminalSkillsHeader, type: "system" });
        response.push({ text: "  Languages: TypeScript, JavaScript, Rust, SQL, Python", type: "success" });
        response.push({ text: "  Frontend: React, Next.js, WebGL/ThreeJS, Tailwind CSS", type: "success" });
        response.push({ text: "  Backend & Infrastructure: Fastify, Node.js, Redis, Docker, RabbitMQ", type: "success" });
      } else if (cmd === 'contacts') {
        response.push({ text: "  Initializing connection protocols...", type: "system" });
        response.push({ 
          text: "• [LinkedIn] ", 
          linkText: "https://www.linkedin.com/in/serjii-smirnov-7a119541a",
          linkUrl: "https://www.linkedin.com/in/serjii-smirnov-7a119541a",
          type: "success" 
        });
        response.push({ 
          text: "• [Telegram] ", 
          linkText: "https://t.me/passloyality",
          linkUrl: "https://t.me/passloyality",
          type: "success" 
        });
      } else if (cmd === 'sudo hack') {
        response.push({ text: t.terminalHackMsg, type: "error" });
        triggerHack();
      } else if (cmd === 'clear') {
        setHistory([]);
        setInputVal("");
        return;
      } else if (cmd !== '') {
        response.push({ text: t.terminalUnknown.replace('{cmd}', inputVal), type: "error" });
      }

      setHistory(prev => [...prev, ...response]);
      setInputVal("");
    }
  };

  useEffect(() => {
    if (terminalConsoleRef.current) {
      terminalConsoleRef.current.scrollTop = terminalConsoleRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div className={`rounded-2xl border ${themeConfig.terminalBg} overflow-hidden font-mono text-sm`}>
      <div className={`flex items-center gap-2 px-5 py-3.5 border-b ${themeConfig.terminalHeader}`}>
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-[10px] tracking-widest opacity-40 uppercase">serj-matrix:~$</span>
      </div>
      <div ref={terminalConsoleRef} className="h-64 overflow-y-auto p-5 space-y-1.5 scrollbar-thin">
        {history.map((item, i) => (
          <div
            key={i}
            className={`text-xs leading-relaxed ${
              item.type === 'command' ? themeConfig.terminalCommand :
              item.type === 'success' ? 'text-emerald-400' :
              item.type === 'error' ? 'text-red-400' :
              item.type === 'hint' ? 'opacity-40' :
              'opacity-70'
            }`}
          >
            {item.text}
            {item.linkUrl && (
              <a 
                href={item.linkUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline hover:text-emerald-300 transition-colors cursor-pointer"
              >
                {item.linkText || item.linkUrl}
              </a>
            )}
            {item.altLinkUrl && (
              <>
                <span className="opacity-50"> | Mirror: </span>
                <a 
                  href={item.altLinkUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="underline hover:text-emerald-300 transition-colors cursor-pointer"
                >
                  {item.altLinkUrl}
                </a>
              </>
            )}
          </div>
        ))}
      </div>
      <div className={`flex items-center gap-3 px-5 py-3.5 border-t ${themeConfig.terminalHeader}`}>
        <span className={`text-xs ${themeConfig.terminalCommand} font-bold shrink-0`}>visitor@serj-matrix:~$</span>
        <input
          type="text"
          value={inputVal}
          onChange={e => setInputVal(e.target.value)}
          onKeyDown={handleCommandSubmit}
          placeholder={t.terminalPlaceholder}
          className={`flex-1 bg-transparent outline-none text-xs ${themeConfig.terminalInput} placeholder:opacity-30`}
          autoComplete="off"
          spellCheck={false}
          id="terminal-input"
        />
      </div>
    </div>
  );
};

type ThemeKey = keyof typeof THEMES;
type LangKey = keyof typeof TRANSLATIONS;

const CustomCursor = ({ themeConfig }: { themeConfig: typeof THEMES['cyber-dark'] }) => {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let animationFrameId: number;
    let dotX = window.innerWidth / 2;
    let dotY = window.innerHeight / 2;
    let circleX = dotX;
    let circleY = dotY;

    const handleMouseMove = (e: MouseEvent) => {
      dotX = e.clientX;
      dotY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;
      }
    };

    const updateCircle = () => {
      circleX += (dotX - 8 - circleX) * 0.15;
      circleY += (dotY - 8 - circleY) * 0.15;
      if (circleRef.current) {
        circleRef.current.style.transform = `translate3d(${circleX}px, ${circleY}px, 0) translate(-50%, -50%)`;
      }
      animationFrameId = requestAnimationFrame(updateCircle);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer')
      )) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    animationFrameId = requestAnimationFrame(updateCircle);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="custom-cursor-container pointer-events-none fixed inset-0 z-[99999]">
      <div 
        ref={circleRef} 
        className="absolute top-0 left-0 rounded-full border-[1.5px] transition-all duration-300"
        style={{ 
          borderColor: themeConfig.particleColor, 
          opacity: isHovered ? 0.45 : 0.8,
          width: isHovered ? '48px' : '32px',
          height: isHovered ? '48px' : '32px',
          backgroundColor: isHovered ? `${themeConfig.particleColor}15` : 'transparent',
        }}
      />
      <div 
        ref={dotRef} 
        className="absolute top-0 left-0 w-2 h-2 rounded-full transition-all duration-300"
        style={{ 
          backgroundColor: themeConfig.particleColor,
          transform: isHovered ? 'scale(1.5)' : 'scale(1)'
        }}
      />
    </div>
  );
};

const BootPreloader = ({ onComplete }: { onComplete: () => void }) => {
  const [lines, setLines] = useState<string[]>([]);
  const [cursorBlink, setCursorBlink] = useState(true);

  const bootLogs = [
    "[   0.000000 ] Booting Serj.Dev Core Kernel v5.1.0-alpha...",
    "[   0.041248 ] CPU check: AMD Ryzen AI-Accelerated (128 threads) detected.",
    "[   0.092104 ] RAM test: 256GB Quantum-Entangled ECC Cache -> PASS.",
    "[   0.158402 ] Loading core orchestration parameters...",
    "[   0.210492 ] Initializing Vibe Engine layout subsystem...",
    "[   0.312501 ] Establishing remote handshake with AI clusters...",
    "[   0.428402 ] Handshake link: OpenAI GPT-4o matrix [PING: 14ms]",
    "[   0.534128 ] Handshake link: Anthropic Claude 3.5 Sonnet [PING: 18ms]",
    "[   0.640108 ] Handshake link: Google Gemini 3.5 Flash [PING: 9ms]",
    "[   0.729402 ] OSINT Strike Map Temporal GeoJSON Parser... OK.",
    "[   0.832941 ] Connecting to PDR Ukraine bot remote cluster... OK.",
    "[   0.941208 ] Compiling Tailwind v4 CSS layout tokens...",
    "[   1.042502 ] Aligning planetary UI TechGalaxy node vectors...",
    "[   1.148128 ] Accelerating custom lagging cursor haptic ring...",
    "[   1.284102 ] Injecting smooth inertial scroll dampening dynamics...",
    "[   1.391204 ] [SUCCESS] System state stable. All vectors aligned.",
    "[   1.484128 ] [SUCCESS] Vibe orchestration ready. Launching UI core..."
  ];

  useEffect(() => {
    let currentIdx = 0;
    const interval = setInterval(() => {
      if (currentIdx < bootLogs.length) {
        const nextLine = bootLogs[currentIdx];
        setLines(prev => [...prev, nextLine]);
        currentIdx++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 200);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorBlink(p => !p);
    }, 250);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className="absolute inset-0 bg-[#020306] p-6 md:p-12 font-mono text-[10px] md:text-xs text-emerald-400 select-none overflow-hidden flex flex-col justify-start">
      {/* CRT scanline effect */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,_rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-35" />
      {/* Glow filter */}
      <div className="absolute inset-0 pointer-events-none bg-emerald-500/5 mix-blend-color-dodge blur-[1px]" />
      
      <div className="w-full max-w-4xl mx-auto space-y-1.5 md:space-y-2 leading-relaxed">
        {lines.map((line, idx) => {
          let colorClass = "text-emerald-400/90";
          if (line.includes("[SUCCESS]")) colorClass = "text-cyan-400 font-bold";
          else if (line.includes("Handshake link") || line.includes("Handshake") || line.includes("Establishing")) colorClass = "text-amber-400/95";
          else if (line.includes("ready") || line.includes("Launching")) colorClass = "text-white font-bold animate-pulse";
          
          return (
            <div key={idx} className={colorClass}>
              {line}
            </div>
          );
        })}
        <div className="text-emerald-400/90 flex items-center">
          <span>visitor@serj-dev-kernel:~$ </span>
          <span className={`w-2 h-4 bg-emerald-400 ml-1.5 ${cursorBlink ? 'opacity-100' : 'opacity-0'}`} />
        </div>
      </div>
    </div>
  );
};



export default function App() {
  const [lang, setLang] = useState<LangKey>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('serj_lang');
      if (stored && ['en', 'es', 'pt', 'uk', 'ru'].includes(stored)) return stored as LangKey;
      
      const browserLang = navigator.language.split('-')[0].toLowerCase();
      if (['en', 'es', 'pt', 'uk', 'ru'].includes(browserLang)) return browserLang as LangKey;
    }
    return 'en';
  });

  const [theme, setTheme] = useState<ThemeKey>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('serj_theme');
      if (stored && stored in THEMES) {
        return stored as ThemeKey;
      }
    }
    return 'cyber-dark';
  });

  useEffect(() => {
    localStorage.setItem('serj_lang', lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('serj_theme', theme);
  }, [theme]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hackMode, setHackMode] = useState(false);
  const [activeLangMenu, setActiveLangMenu] = useState(false);
  const [activeThemeMenu, setActiveThemeMenu] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [scrolled, setScrolled] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const [heroRef, heroVisible] = useScrollReveal();
  const [projectsRef, projectsVisible] = useScrollReveal();
  const [archRef, archVisible] = useScrollReveal();
  const [galaxySecRef, galaxySecVisible] = useScrollReveal();
  const [termRef, termVisible] = useScrollReveal();

  // SECTION-WIDE CURSOR TRAIL LOGIC FOR TITLE NEGATIVE EFFECT
  const bgCanvasRef = useRef<HTMLCanvasElement>(null);
  const fgCanvasRef = useRef<HTMLCanvasElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const requestRef = useRef<number | null>(null);
  const pointsRef = useRef<{ x: number; y: number; age: number; maxAge: number; size: number }[]>([]);
  const lastMousePosRef = useRef<{ x: number; y: number } | null>(null);
  const rectRef = useRef<{ left: number; top: number; width: number; height: number } | null>(null);
  const headingLimitsRef = useRef<{ top: number; bottom: number }>({ top: 0, bottom: 500 });
  const isDark = theme !== 'clean-light';

  const bgColors = {
    'cyber-dark': '#04060a',
    'neon-synth': '#0f051d',
    'amber-hack': '#090704',
    'clean-light': '#ffffff'
  };
  const activeHighlightColor = bgColors[theme] || '#04060a';

  const updateSize = () => {
    const section = heroRef.current;
    const heading = headingRef.current;
    const bgCanvas = bgCanvasRef.current;
    const fgCanvas = fgCanvasRef.current;
    if (!section || !heading || !bgCanvas || !fgCanvas) return;

    const rect = section.getBoundingClientRect();
    rectRef.current = {
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height
    };

    const headingRect = heading.getBoundingClientRect();
    headingLimitsRef.current = {
      top: headingRect.top - rect.top,
      bottom: headingRect.bottom - rect.top
    };

    bgCanvas.width = rect.width;
    bgCanvas.height = rect.height;
    fgCanvas.width = rect.width;
    fgCanvas.height = rect.height;

    draw();
  };

  const draw = () => {
    const bgCanvas = bgCanvasRef.current;
    const fgCanvas = fgCanvasRef.current;
    if (!bgCanvas || !fgCanvas) return;

    const bgCtx = bgCanvas.getContext('2d');
    const fgCtx = fgCanvas.getContext('2d');
    if (!bgCtx || !fgCtx) return;

    const width = bgCanvas.width;
    const height = bgCanvas.height;

    // Clear background canvas
    bgCtx.clearRect(0, 0, width, height);

    // Clear foreground canvas and fill with base color
    if (isDark) {
      fgCtx.fillStyle = '#000000';
      fgCtx.fillRect(0, 0, width, height);
    } else {
      fgCtx.fillStyle = '#ffffff';
      fgCtx.fillRect(0, 0, width, height);
    }

    const points = pointsRef.current;
    const trailColor = themeConfig.particleColor;
    const limits = headingLimitsRef.current;

    points.forEach(p => {
      const opacity = 1 - p.age / p.maxAge;
      
      // Calculate smooth vertical fade-out
      let fadeFactor = 1;
      if (p.y < limits.top) {
        const dist = limits.top - p.y;
        fadeFactor = Math.max(0, 1 - dist / 80); // fade out over 80px above
      } else if (p.y > limits.bottom) {
        const dist = p.y - limits.bottom;
        fadeFactor = Math.max(0, 1 - dist / 120); // fade out over 120px below
      }

      const finalOpacity = opacity * fadeFactor;
      if (finalOpacity <= 0) return;

      const size = p.size;

      // Draw background trail glow
      const bgGrad = bgCtx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size);
      const alphaHex = Math.max(0, Math.min(255, Math.floor(finalOpacity * 48)))
        .toString(16)
        .padStart(2, '0');
      
      const midAlphaHex = Math.max(0, Math.min(255, Math.floor(finalOpacity * 16)))
        .toString(16)
        .padStart(2, '0');

      bgGrad.addColorStop(0, `${trailColor}${alphaHex}`);
      bgGrad.addColorStop(0.5, `${trailColor}${midAlphaHex}`);
      bgGrad.addColorStop(1, `${trailColor}00`);
      
      bgCtx.fillStyle = bgGrad;
      bgCtx.beginPath();
      bgCtx.arc(p.x, p.y, size, 0, Math.PI * 2);
      bgCtx.fill();

      // Draw foreground mask circle
      const fgGrad = fgCtx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size);
      if (isDark) {
        // White circles on black
        fgGrad.addColorStop(0, `rgba(255, 255, 255, ${finalOpacity})`);
        fgGrad.addColorStop(0.5, `rgba(255, 255, 255, ${finalOpacity * 0.4})`);
        fgGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      } else {
        // Black circles on white
        fgGrad.addColorStop(0, `rgba(0, 0, 0, ${finalOpacity})`);
        fgGrad.addColorStop(0.5, `rgba(0, 0, 0, ${finalOpacity * 0.4})`);
        fgGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      }

      fgCtx.fillStyle = fgGrad;
      fgCtx.beginPath();
      fgCtx.arc(p.x, p.y, size, 0, Math.PI * 2);
      fgCtx.fill();
    });
  };

  const updatePoints = () => {
    const points = pointsRef.current;
    for (let i = points.length - 1; i >= 0; i--) {
      const p = points[i];
      p.age += 1;
      if (p.age >= p.maxAge) {
        points.splice(i, 1);
      }
    }
  };

  const loop = () => {
    updatePoints();
    draw();

    if (pointsRef.current.length > 0) {
      requestRef.current = requestAnimationFrame(loop);
    } else {
      requestRef.current = null;
    }
  };

  const triggerLoop = () => {
    if (!requestRef.current) {
      requestRef.current = requestAnimationFrame(loop);
    }
  };

  const addPoints = (x1: number, y1: number, x2: number, y2: number) => {
    const dist = Math.hypot(x2 - x1, y2 - y1);
    const steps = Math.max(1, Math.floor(dist / 6)); // Add a point every 6 pixels
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const x = x1 + (x2 - x1) * t;
      const y = y1 + (y2 - y1) * t;
      pointsRef.current.push({
        x,
        y,
        age: 0,
        maxAge: 30, // Fades out in about 0.5s at 60fps
        size: 90
      });
    }
  };

  const handleHeroMouseMove = (e: React.MouseEvent) => {
    const rect = rectRef.current;
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const lastPos = lastMousePosRef.current;
    if (lastPos) {
      addPoints(lastPos.x, lastPos.y, x, y);
    } else {
      pointsRef.current.push({
        x,
        y,
        age: 0,
        maxAge: 30,
        size: 90
      });
    }

    lastMousePosRef.current = { x, y };
    triggerLoop();
  };

  const handleHeroMouseLeave = () => {
    lastMousePosRef.current = null;
  };

  const handleHeroMouseEnter = () => {
    updateSize();
  };

  useEffect(() => {
    updateSize();
    window.addEventListener('resize', updateSize);
    window.addEventListener('scroll', updateSize, { passive: true });

    // Set up ResizeObserver to track heading size changes
    const heading = headingRef.current;
    let headingObserver: ResizeObserver | null = null;
    if (heading) {
      headingObserver = new ResizeObserver(() => {
        updateSize();
      });
      headingObserver.observe(heading);
    }

    return () => {
      window.removeEventListener('resize', updateSize);
      window.removeEventListener('scroll', updateSize);
      if (headingObserver) headingObserver.disconnect();
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [theme, lang, heroVisible]);



  const themeConfig = THEMES[theme];
  const t = TRANSLATIONS[lang];
  const projects = LOCALIZED_PROJECTS[lang];

  useEffect(() => {
    if (hackMode) {
      const timer = setTimeout(() => setHackMode(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [hackMode]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerHack = () => setHackMode(true);

  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(p => p.id === activeFilter);

  const categories = ['all', ...projects.map(p => p.id)];

  return (
    <div className={`min-h-screen ${themeConfig.bg} font-['Inter',sans-serif] transition-colors duration-500 relative overflow-x-hidden`}>
      <CustomCursor themeConfig={themeConfig} />
      {/* PRELOADER */}
      <div className={`fixed inset-0 z-[100] transition-all duration-[1000ms] cubic-bezier(0.16, 1, 0.3, 1) ${
        isLoaded ? 'opacity-0 pointer-events-none scale-110 blur-xl' : 'opacity-100'
      }`}>
        <BootPreloader onComplete={() => setIsLoaded(true)} />
      </div>

      {/* HACK MODE OVERLAY */}
      {hackMode && (
        <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-green-950/30 animate-pulse" />
          <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,0,0.03)_2px,rgba(0,255,0,0.03)_4px)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-mono">
            <p className="text-green-400 text-xl font-bold animate-pulse tracking-widest">{t.terminalHackMsg}</p>
            <p className="text-green-600 text-xs mt-2 opacity-70">{t.terminalHackSub}</p>
          </div>
        </div>
      )}

      <HighFidelityConstellation themeConfig={themeConfig} />

      {/* HEADER */}
      <SmoothScroll>
        <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b ${
          scrolled ? themeConfig.headerBg : 'bg-transparent border-transparent'
        }`}>
          <div className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-1 sm:gap-2">
            <div className="flex items-center shrink-0">
              <span className="font-mono font-bold tracking-tight text-sm items-center whitespace-nowrap hidden sm:flex">
                SERJ.DEV
              </span>
            </div>

            {/* HEADER CONTACT BUTTON (Centered on Desktop, right-aligned before toggles on Mobile) */}
            <div className="flex-1 flex justify-end xl:justify-center pr-1 sm:pr-3 xl:pr-0 min-w-0">
              <div className="relative">
                {/* Radiating Waves */}
                <div className={`absolute inset-0 rounded-full ${themeConfig.accentBg} animate-ping opacity-20`} style={{ animationDuration: '3s' }} />
                <div className={`absolute inset-0 rounded-full ${themeConfig.accentBg} animate-ping opacity-10`} style={{ animationDuration: '3s', animationDelay: '1.5s' }} />
                
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className={`relative flex items-center gap-2 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(0,0,0,0.2)] group-hover:scale-105 hover:scale-105 border border-transparent ${themeConfig.btnPrimary}`}
                >
                  <Send className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span className="whitespace-nowrap">{t.contactBtn}</span>
                </button>
              </div>
            </div>

            {/* DESKTOP ROW (Hidden on mobile) */}
            <div className="hidden xl:flex items-center gap-3 2xl:gap-6 overflow-hidden">
              <div className="flex items-center gap-1">
                <span className="text-[9px] font-mono tracking-widest opacity-40 uppercase mr-1.5 2xl:mr-3">{t.langLabel}</span>
                {Object.keys(TRANSLATIONS).map((key) => {
                  const langNames: Record<string, string> = { en: "English", es: "Español", pt: "Português", uk: "Українська", ru: "Русский" };
                  const isActive = lang === key;
                  return (
                    <MagnetWrap key={key} strength={0.3}>
                      <button
                        onClick={() => setLang(key as LangKey)}
                        className={`px-2 py-1.5 rounded-full font-mono text-[11px] 2xl:text-xs transition-all duration-300 ${isActive ? `${themeConfig.accentBg} ${themeConfig.accentText} font-bold shadow-[0_0_15px_rgba(255,255,255,0.1)]` : 'opacity-60 hover:opacity-100'}`}
                      >
                        {langNames[key]}
                      </button>
                    </MagnetWrap>
                  );
                })}
              </div>
              <div className="flex items-center gap-1 border-l border-slate-700/50 pl-3 2xl:pl-6">
                <span className="text-[9px] font-mono tracking-widest opacity-40 uppercase mr-1.5 2xl:mr-3">{t.themeLabel}</span>
                {Object.keys(THEMES).map((tk) => {
                  const isActive = theme === tk;
                  return (
                    <MagnetWrap key={tk} strength={0.3}>
                      <button
                        onClick={() => setTheme(tk as ThemeKey)}
                        className={`px-2 py-1.5 rounded-full font-mono text-[11px] 2xl:text-xs transition-all duration-300 whitespace-nowrap ${isActive ? `${themeConfig.accentBg} ${themeConfig.accentText} font-bold shadow-[0_0_15px_rgba(255,255,255,0.1)]` : 'opacity-60 hover:opacity-100'}`}
                      >
                        {THEMES[tk as ThemeKey].name.en}
                      </button>
                    </MagnetWrap>
                  );
                })}
              </div>
            </div>

            {/* MOBILE DROPDOWNS (Hidden on desktop) */}
            <div className="flex xl:hidden items-center gap-2 sm:gap-3 shrink-0">
              {/* THEME SWITCHER */}
              <div className="relative">
                <button
                  id="theme-toggle-btn"
                  onClick={() => { setActiveThemeMenu(p => !p); setActiveLangMenu(false); }}
                  className={`flex items-center gap-1.5 text-[10px] font-mono tracking-wider uppercase px-3 py-2 rounded-lg border ${themeConfig.badgeBg} transition-all`}
                >
                  <Palette className="w-3 h-3" />
                  <span className="hidden sm:inline">{themeConfig.name[lang as keyof typeof themeConfig.name]}</span>
                </button>
                {activeThemeMenu && (
                  <div className={`absolute right-0 top-full mt-2 w-40 rounded-xl border shadow-xl overflow-hidden z-50 ${themeConfig.dropdownBg}`}>
                    {(Object.keys(THEMES) as ThemeKey[]).map(tk => (
                      <button
                        key={tk}
                        onClick={() => { setTheme(tk); setActiveThemeMenu(false); }}
                        className={`w-full text-left px-4 py-2.5 text-[11px] font-mono tracking-wider transition-colors ${themeConfig.dropdownBg} ${theme === tk ? themeConfig.accent : ''}`}
                      >
                        {THEMES[tk].name[lang as keyof typeof THEMES[typeof tk]['name']]}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* LANG SWITCHER */}
              <div className="relative">
                <button
                  id="lang-toggle-btn"
                  onClick={() => { setActiveLangMenu(p => !p); setActiveThemeMenu(false); }}
                  className={`flex items-center gap-1.5 text-[10px] font-mono tracking-wider uppercase px-3 py-2 rounded-lg border ${themeConfig.badgeBg} transition-all`}
                >
                  <Globe className="w-3 h-3" />
                  <span>{lang.toUpperCase()}</span>
                </button>
                {activeLangMenu && (
                  <div className={`absolute right-0 top-full mt-2 w-32 rounded-xl border shadow-xl overflow-hidden z-50 ${themeConfig.dropdownBg}`}>
                    {(Object.keys(TRANSLATIONS) as LangKey[]).map(lk => (
                      <button
                        key={lk}
                        onClick={() => { setLang(lk); setActiveLangMenu(false); }}
                        className={`w-full text-left px-4 py-2.5 text-[11px] font-mono tracking-wider transition-colors ${themeConfig.dropdownBg} ${lang === lk ? themeConfig.accent : ''}`}
                      >
                        {lk.toUpperCase()}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 relative z-10">

          {/* HERO SECTION */}
          <section ref={heroRef} className="min-h-[85vh] flex flex-col justify-center mb-28 relative">
            <div className="max-w-4xl relative z-10">
              <div className={`inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.25em] uppercase px-3 py-1.5 rounded-full border ${themeConfig.badgeBg} mb-8 transition-all duration-1000 delay-100 transform ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${themeConfig.accentBg} animate-pulse`} />
                {t.heroBadge}
              </div>

              <h1 className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 transition-all duration-1000 delay-300 transform ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${['uk', 'ru'].includes(lang) ? 'leading-[1.05]' : 'leading-[0.9]'}`}>
                <span className="block">{t.heroTitle}</span>
                <span className={`block bg-gradient-to-r ${themeConfig.heroGlow} bg-clip-text text-transparent`}>
                  {t.heroTitleGlow}
                </span>
                <span className="block opacity-40">{t.heroTitleSuffix}</span>
              </h1>

              <p className={`text-lg md:text-xl opacity-65 leading-relaxed max-w-2xl mb-10 font-light transition-all duration-1000 delay-500 transform ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {t.heroDesc}
              </p>

              <div className={`flex flex-wrap gap-4 transition-all duration-1000 delay-700 transform ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <MagneticButton
                  id="explore-btn"
                  className={`px-8 py-4 rounded-2xl text-sm font-bold tracking-wide transition-all border ${themeConfig.btnPrimary}`}
                  onClick={() => document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t.exploreBtn} <ArrowUpRight className="inline w-4 h-4 ml-1" />
                </MagneticButton>
                <MagneticButton
                  id="contact-btn"
                  className={`px-8 py-4 rounded-2xl text-sm font-bold tracking-wide border ${themeConfig.cardBorder} ${themeConfig.cardBg} hover:border-current transition-all`}
                  onClick={() => setIsContactModalOpen(true)}
                >
                  {t.contactBtn}
                </MagneticButton>
              </div>
            </div>
          </section>

          {/* PROJECTS SECTION */}
          <section
            id="projects-section"
            ref={projectsRef}
            className={`mb-28`}
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div className={`transition-all duration-1000 delay-100 transform ${projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h2 className={`text-[10px] font-mono uppercase tracking-widest ${themeConfig.accent} mb-2`}>// {t.projectsHeader}</h2>
                <p className="text-3xl md:text-4xl font-black tracking-tighter">{t.projectsTitle}</p>
              </div>
              <div className={`flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] transition-all duration-1000 delay-300 transform ${projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`whitespace-nowrap shrink-0 text-[10px] font-mono tracking-wider uppercase px-3 py-1.5 rounded-lg border transition-all ${
                      activeFilter === cat
                        ? `${themeConfig.accentBg} ${themeConfig.accentText} border-transparent`
                        : `${themeConfig.cardBorder} ${themeConfig.cardBg} opacity-60 hover:opacity-100`
                    }`}
                  >
                    {cat === 'all' ? t.all : projects.find(p => p.id === cat)?.title ?? cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  t={t}
                  themeConfig={themeConfig}
                  visible={projectsVisible}
                />
              ))}
            </div>
          </section>

          {/* ARCH SECTION */}
          <section
            ref={archRef}
            className={`mb-28 transition-all duration-[1000ms] transform ${
              archVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
            }`}
          >
            <div className={`rounded-3xl border ${themeConfig.cardBorder} ${themeConfig.cardBg} p-10 md:p-16 backdrop-blur-md overflow-hidden relative`}>
              <div className={`absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-10 ${themeConfig.accentBg}`} />
              <div className="relative z-10 max-w-3xl">
                <h2 className={`text-[10px] font-mono uppercase tracking-widest ${themeConfig.accent} mb-4`}>// {t.archHeader}</h2>
                <h3 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight mb-8">
                  {t.archTitle}
                </h3>
                <p className="opacity-65 leading-relaxed text-lg mb-12">
                  {t.archDesc}
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono text-sm tabular-nums">
                  <div>
                    <div className="text-2xl md:text-3xl font-black tracking-tight mb-1">&lt;100ms</div>
                    <div className="opacity-45 text-[10px] uppercase tracking-wider">{t.statApiTime}</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-black tracking-tight mb-1">60FPS</div>
                    <div className="opacity-45 text-[10px] uppercase tracking-wider">{t.statFps}</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-black tracking-tight mb-1">100/100</div>
                    <div className="opacity-45 text-[10px] uppercase tracking-wider">Lighthouse Code</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-black tracking-tight mb-1">99.99%</div>
                    <div className="opacity-45 text-[10px] uppercase tracking-wider">{t.statUptime}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* TECH STACK ORBIT SHIELD */}
          <section 
            ref={galaxySecRef} 
            className={`mb-28 transition-all duration-[1000ms] transform ${
              galaxySecVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
            }`}
          >
            <div className="text-center mb-8">
              <h2 className={`text-[10px] font-mono uppercase tracking-widest ${themeConfig.accent} mb-2`}>// {t.galaxyHeader}</h2>
              <p className="text-xs opacity-50 font-mono max-w-lg mx-auto">{t.galaxySub}</p>
            </div>
            <TechGalaxy themeConfig={themeConfig} t={t} theme={theme} />
          </section>

          {/* DEVELOPER TERMINAL SANDBOX PLAYGROUND */}
          <section 
            ref={termRef} 
            className={`mb-28 transition-all duration-[1000ms] transform ${
              termVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
            }`}
          >
            <div className="text-center mb-8">
              <h2 className={`text-[10px] font-mono uppercase tracking-widest ${themeConfig.accent} mb-2`}>// {t.terminalTitle}</h2>
              <p className="text-xs opacity-50 font-mono">{t.terminalSub}</p>
            </div>
            <InteractiveTerminal triggerHack={triggerHack} currentLang={lang} t={t} themeConfig={themeConfig} />
          </section>

          {/* FOOTER */}
          <footer className="border-t border-slate-800/20 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 opacity-45 text-xs font-mono tracking-wider">
            <div className="flex items-center gap-2">
              <span>© 2026 SERJ.DEV. ALL LOGISTICS RESERVED.</span>
            </div>
            <div className="flex items-center gap-6 uppercase">
              <span className="opacity-60">{t.contactBtn}:</span>
              <a 
                href="https://www.linkedin.com/in/serjii-smirnov-7a119541a" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ '--hover-color': themeConfig.particleColor } as React.CSSProperties}
                className="flex items-center gap-2 hover:text-[var(--hover-color)] hover:scale-110 hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a 
                href="https://t.me/passloyality" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ '--hover-color': themeConfig.particleColor } as React.CSSProperties}
                className="flex items-center gap-2 hover:text-[var(--hover-color)] hover:scale-110 hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
              >
                <Send size={16} /> Telegram
              </a>
            </div>
          </footer>
        </main>
        
        {/* CONTACT MODAL */}
        {isContactModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsContactModalOpen(false)}
            ></div>
            <div className={`relative w-full max-w-md p-8 rounded-3xl border shadow-2xl overflow-hidden ${themeConfig.cardBg} ${themeConfig.cardBorder} backdrop-blur-md animate-in fade-in zoom-in duration-300`}>
              <div className={`absolute top-0 left-0 w-full h-full pointer-events-none opacity-50`} style={{ background: `radial-gradient(circle at top right, ${themeConfig.glow}, transparent 70%)` }}></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-2xl font-black tracking-tight">{t.contactBtn}</h3>
                  <button 
                    onClick={() => setIsContactModalOpen(false)}
                    className={`p-2 rounded-full hover:bg-white/10 transition-colors`}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="flex flex-col gap-4">
                  <a
                    href="https://www.linkedin.com/in/serjii-smirnov-7a119541a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center p-4 rounded-2xl border ${themeConfig.cardBorder} hover:border-current group transition-all duration-300`}
                    style={{ '--hover-color': themeConfig.particleColor } as React.CSSProperties}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-white/5 group-hover:scale-110 transition-transform duration-300`}>
                      <Linkedin className="w-6 h-6 text-[#0A66C2]" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-lg">{(t as any).linkedinBtn || "Message on LinkedIn"}</div>
                      <div className="text-sm opacity-60">LinkedIn</div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </a>

                  <a
                    href="https://t.me/passloyality"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center p-4 rounded-2xl border ${themeConfig.cardBorder} hover:border-current group transition-all duration-300`}
                    style={{ '--hover-color': themeConfig.particleColor } as React.CSSProperties}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-white/5 group-hover:scale-110 transition-transform duration-300`}>
                      <Send className="w-6 h-6 text-[#229ED9]" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-lg">{(t as any).telegramBtn || "Message on Telegram"}</div>
                      <div className="text-sm opacity-60">Telegram</div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </SmoothScroll>
    </div>
  );
}
