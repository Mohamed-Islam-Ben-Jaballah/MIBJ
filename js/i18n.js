// ========================================
//  MIBJ Portfolio — Internationalisation
//  Languages: English (en), French (fr), Arabic (ar),
//             Spanish (es), Chinese (zh), Russian (ru)
// ========================================

const TRANSLATIONS = {

  /* ─────────────────── ENGLISH ─────────────────── */
  en: {
    'nav.about':     'About',
    'nav.services':  'Services',
    'nav.process':   'Process',
    'nav.portfolio': 'Portfolio',
    'nav.reviews':   'Reviews',
    'nav.contact':   'Get In Touch',
    'nav.logo':      '<MIBJ />',

    'hero.greeting':    'Hi, my name is',
    'hero.name':        'Mohamed Islam<br/>Ben Jeballah',
    'hero.tagline':     'I build immersive digital experiences.',
    'hero.description': 'Technical Project Manager &amp; Software Engineer with <strong class="accent">7 years of experience</strong> crafting 3D solutions, VR simulations, AI-powered interfaces, and interactive web experiences that captivate and deliver results.',
    'hero.cta':         'Explore My Services',

    'about.label': '01 About',
    'about.title': 'Who I Am',
    'about.p1': 'Over <strong>seven years</strong>, I\'ve specialized in <strong>3D, VR, AI,</strong> and <strong>interactive web development</strong> starting as a developer and growing into full project leadership while staying hands-on in architecture and implementation.',
    'about.p2': 'My work spans <strong>VR training simulations</strong> for security forces, multilingual <strong>AI avatars</strong>, and advanced <strong>Three.js web experiences</strong> — projects that push creative and technical limits while delivering real, measurable impact.',
    'about.p3': 'I stay involved from concept to deployment assembling trusted teams, aligning stakeholders, and upholding rigorous quality standards to deliver outcomes clients are <strong>confident and proud to present</strong>.',

    'stat.years':        'Years Experience',
    'stat.projects':     'Projects Delivered',
    'stat.team':         'Flexible Team Size',
    'stat.satisfaction': 'Client Satisfaction',

    'services.label': '02 Services',
    'services.title': 'What I Deliver',
    'svc1.title': '3D Unity Solutions',
    'svc1.desc':  'Custom-built interactive 3D applications powered by Unity. From real-time product configurators to architectural visualizations and gamified experiences that engage your audience like nothing else.',
    'svc2.title': 'Interactive Websites (Three.js)',
    'svc2.desc':  'Immersive, GPU-accelerated web experiences built with Three.js and WebGL. I create websites that don\'t just inform — they captivate, giving your brand a visual identity that stands out in any market.',
    'svc3.title': 'AI Avatars & Multilingual Assistants',
    'svc3.desc':  'Smart, conversational AI avatars your clients can talk to — ask questions, get answers, in any language. Automatic multilingual detection ensures zero friction for a global audience.',
    'svc4.title': 'VR Training Simulations',
    'svc4.desc':  'High-fidelity virtual reality training for industries, police, military, and security forces. Realistic scenarios, measurable outcomes, and safe environments to build critical skills.',
    'svc5.title': 'VR Education Platform',
    'svc5.desc':  'A full immersive learning platform combining a web solution for schools and teachers with a VR environment for students. Kids learn through engaging, curriculum-aligned VR experiences while educators track progress in real time through a dedicated dashboard.',
    'svc6.title': 'Captivating Visual Branding',
    'svc6.desc':  'I help clients amplify their market presence through stunning 3D visuals, motion graphics, and interactive media that grabs attention and communicates value instantly.',

    'process.label': '03 Process',
    'process.title': 'How We Work Together',
    'step1.title': 'Discovery & Problem Mapping',
    'step1.desc':  'We start with a deep conversation. I listen to understand your challenge, your audience, and your goals. No jargon, no assumptions — just clarity.',
    'step2.title': 'Solution Design',
    'step2.desc':  'I prepare a curated set of solutions tailored to your needs — from lightweight to comprehensive. We discuss each option together and land on the approach that fits your vision, timeline, and budget.',
    'step3.title': 'Team Assembly',
    'step3.desc':  'I assemble the ideal mix of freelance developers, 3D artists, and designers — senior specialists I\'ve delivered with repeatedly. Team size scales from just me to 5–6 experts, keeping execution fast, focused, and efficient.',
    'step4.title': 'MVP Delivery (1–3 Months)',
    'step4.desc':  'We align on a clear MVP, timeline, and budget. The POC/MVP phase is where we test the solution in the real world, gather feedback, iterate, and adapt until it perfectly matches your needs and market demands.',
    'step5.title': 'Full Development & Iteration',
    'step5.desc':  'After validation, we scale the project adding features, polishing the experience, and delivering the final product. Our goal isn\'t just to meet expectations; it\'s to exceed them. We make our clients <strong class="accent">satisfied and amazed</strong>.',
    'team.title':   'A Trusted, Battle-Tested Team',
    'team.desc':    'Every project is managed by me and executed by a handpicked team of proven freelance professionals I\'ve shipped with for years. They\'re highly skilled, reliable under pressure, and efficient by design — bringing in the right specialists at the right time to deliver top-quality results.',
    'team.members': 'Team Members',
    'team.years':   'Years Together',

    'portfolio.label': '04 Portfolio',
    'portfolio.title': 'Featured Work',
    'proj1.tag':   'VR Training',
    'proj1.title': 'Immersive Security Training Simulation',
    'proj1.desc':  'High-fidelity VR training environment designed for law enforcement and military units. Realistic tactical scenarios with performance analytics and adaptive difficulty.',
    'proj2.tag':   'AI / NLP',
    'proj2.title': 'Multilingual AI Customer Avatar',
    'proj2.desc':  'Smart conversational AI avatar with automatic language detection. Customers speak naturally in any language and receive instant, accurate responses — no buttons, no menus.',
    'proj3.tag':   'Web / Three.js',
    'proj3.title': '3D Interactive Brand Experience',
    'proj3.desc':  'GPU-accelerated website featuring real-time 3D product visualization, particle effects, and smooth camera transitions that elevate client branding to the next level.',
    'proj4.tag':   'VR Education',
    'proj4.title': 'VR Education Platform — Immersive Learning for Kids',
    'proj4.desc':  'End-to-end immersive learning platform — students explore curriculum-aligned lessons inside a rich VR environment while teachers manage content and track each student\'s progress through a dedicated web dashboard.',
    'proj5.tag':   '3D / Unity',
    'proj5.title': 'Industrial 3D Visualization Platform',
    'proj5.desc':  'Real-time 3D application for industrial equipment visualization — interactive exploded views, assembly animations, and maintenance training modules.',
    'proj6.tag':   'Branding',
    'proj6.title': '3D Motion Branding Campaign',
    'proj6.desc':  'Eye-catching 3D motion graphics and interactive media created to supercharge client market exposure. Designed to stop the scroll and communicate value in seconds.',

    'docs.heading':       '// Documents & Resources',
    'doc.resume.label':   '📄 Resume / CV',
    'doc.resume.title':   'Mohamed Islam Ben Jaballah',
    'doc.resume.desc':    'Technical Project Manager &amp; Software Engineer — Full CV',
    'doc.resume.btn':     'View Resume',
    'doc.projects.label': '📎 Project Documentation',
    'doc.bikevr.title':   'BikeVR Project',
    'doc.bikevr.desc':    'Virtual Reality cycling training simulation',
    'doc.bikevr.btn':     'View Documentation',
    'doc.cthulhu.title':  'Cthulhu Invocation',
    'doc.cthulhu.desc':   'Interactive horror experience presentation',
    'doc.cthulhu.btn':    'View Documentation',

    'testimonials.label':    '05 Reviews',
    'testimonials.title':    'What Clients Say',
    'testimonials.subtitle': 'Real words from the people I\'ve had the privilege to build with.',

    'testimonial.hamami.name': 'Dr. Mohamed Ali Hamami',
    'testimonial.hamami.role': 'AI & XR Strategy and Research Specialist',
    'testimonial.hamami.org':  'Weill Cornell Medicine University',
    'testimonial.hamami.text': 'Islam first stood out to me as a brilliant student under my supervision, and it has been genuinely rewarding to watch him grow into a sharp, dependable business partner. Across three hardware and software projects, he consistently delivered outstanding results, combining deep technical mastery with real creative initiative. His grasp of AI and XR is exceptional, and when he is handling things, I know the work is in very capable hands.',

    'testimonial.farzaneh.name': 'Farzaneh Shiri',
    'testimonial.farzaneh.role': 'Chief Operating Officer',
    'testimonial.farzaneh.org':  'Millennium Abu Dhabi',
    'testimonial.farzaneh.text': 'What impressed me most about Islam was how calmly he handled real pressure. Deadlines were tight, requirements kept shifting, and expectations changed constantly, yet he adapted quickly, kept moving, and never let quality slip. He took every curveball in stride and kept delivering. Millennium couldn\'t have asked for a more resilient or dependable technical manager.',

    'testimonial.jose.name': 'Jose Vargas',
    'testimonial.jose.role': 'Project Manager',
    'testimonial.jose.org':  'ICONIK',
    'testimonial.jose.text': 'Working with Islam at ICONIK was a genuine pleasure. Beyond his sharp technical skills, he\'s the kind of person who makes the whole team better: supportive, fully present, and always ready to go the extra mile. Every meeting was better with him in it, and every project felt more enjoyable because of his presence. I\'d gladly work with him again anytime.',

    'contact.label': '06 Contact',
    'contact.title': "Let's Build Something Great",
    'contact.desc':  "Have a project in mind? Looking for a reliable technical partner who delivers results? I'd love to hear about your challenge and explore how we can solve it together.",
    'contact.hello': 'Say Hello',
    'contact.call':  'Call Me',

    'footer.text': '© 2026 MIBJ. Crafted with precision.',

    'lb.video':        '▶  Video',
    'lb.image':        '🖼  Image',
    'lb.pdf':          '📄  PDF Document',
    'lb.presentation': '📊  Presentation',
    'lb.iframe':       '🌐  External Content',
  },

  /* ─────────────────── FRENCH ─────────────────── */
  fr: {
    'nav.about':     'À Propos',
    'nav.services':  'Services',
    'nav.process':   'Processus',
    'nav.portfolio': 'Portfolio',
    'nav.reviews':   'Avis',
    'nav.contact':   'Me Contacter',
    'nav.logo':      '<MIBJ />',

    'hero.greeting':    'Bonjour, je suis',
    'hero.name':        'Mohamed Islam<br/>Ben Jeballah',
    'hero.tagline':     'Je crée des expériences numériques immersives.',
    'hero.description': 'Directeur de Projet Technique &amp; Ingénieur Logiciel avec <strong class="accent">7 ans d\'expérience</strong> dans la création de solutions 3D, simulations VR, interfaces alimentées par l\'IA et expériences web interactives captivantes qui livrent des résultats.',
    'hero.cta':         'Découvrir Mes Services',

    'about.label': '01 À Propos',
    'about.title': 'Qui Suis-Je',
    'about.p1': 'Depuis plus de <strong>sept ans</strong>, je me suis spécialisé en <strong>3D, VR, IA</strong> et <strong>développement web interactif</strong> en débutant comme développeur et en évoluant vers la direction de projets, tout en restant actif dans l\'architecture et la mise en œuvre.',
    'about.p2': 'Mon travail couvre les <strong>simulations de formation en VR</strong> pour les forces de sécurité, les <strong>avatars IA multilingues</strong> et les expériences web avancées <strong>Three.js</strong> — des projets qui repoussent les limites tout en livrant un impact réel et mesurable.',
    'about.p3': 'Je reste impliqué du concept au déploiement — en assemblant des équipes de confiance, en alignant les parties prenantes et en maintenant des standards de qualité rigoureux pour livrer des résultats dont les clients sont <strong>fiers et confiants</strong>.',

    'stat.years':        "Ans d'Expérience",
    'stat.projects':     'Projets Livrés',
    'stat.team':         "Taille d'Équipe Flexible",
    'stat.satisfaction': 'Satisfaction Client',

    'services.label': '02 Services',
    'services.title': 'Ce Que Je Livre',
    'svc1.title': 'Solutions 3D Unity',
    'svc1.desc':  'Applications 3D interactives sur mesure propulsées par Unity. Des configurateurs de produits en temps réel aux visualisations architecturales et expériences gamifiées qui captivent votre audience.',
    'svc2.title': 'Sites Web Interactifs (Three.js)',
    'svc2.desc':  'Expériences web immersives GPU-accélérées construites avec Three.js et WebGL. Je crée des sites qui ne se contentent pas d\'informer — ils captivent, donnant à votre marque une identité visuelle qui se démarque dans n\'importe quel marché.',
    'svc3.title': 'Avatars IA & Assistants Multilingues',
    'svc3.desc':  'Avatars IA conversationnels intelligents avec qui vos clients peuvent discuter — poser des questions, obtenir des réponses, dans n\'importe quelle langue. Détection multilingue automatique pour une audience mondiale.',
    'svc4.title': 'Simulations de Formation en VR',
    'svc4.desc':  'Formation en réalité virtuelle haute-fidélité pour l\'industrie, la police, l\'armée et les forces de sécurité. Scénarios réalistes, résultats mesurables et environnements sûrs pour développer des compétences critiques.',
    'svc5.title': "Plateforme d'Éducation VR",
    'svc5.desc':  'Une plateforme d\'apprentissage immersif complète combinant une solution web pour les écoles et les enseignants avec un environnement VR pour les élèves. Les enfants apprennent via des expériences VR alignées sur les programmes tandis que les éducateurs suivent les progrès en temps réel.',
    'svc6.title': 'Identité Visuelle Captivante',
    'svc6.desc':  "J'aide les clients à amplifier leur présence sur le marché grâce à des visuels 3D époustouflants, des motion graphics et des médias interactifs qui captent l'attention et communiquent la valeur instantanément.",

    'process.label': '03 Processus',
    'process.title': 'Comment Nous Travaillons Ensemble',
    'step1.title': 'Découverte & Cartographie du Problème',
    'step1.desc':  "Nous commençons par une conversation approfondie. J'écoute pour comprendre votre défi, votre audience et vos objectifs. Pas de jargon, pas d'hypothèses — juste de la clarté.",
    'step2.title': 'Conception de la Solution',
    'step2.desc':  'Je prépare un ensemble de solutions adaptées à vos besoins — du plus léger au plus complet. Nous discutons ensemble de chaque option et choisissons l\'approche qui correspond à votre vision, votre calendrier et votre budget.',
    'step3.title': "Constitution de l'Équipe",
    'step3.desc':  "J'assemble le mélange idéal de développeurs freelance, artistes 3D et designers — des spécialistes seniors avec lesquels j'ai livré à plusieurs reprises. La taille de l'équipe s'adapte de juste moi à 5–6 experts.",
    'step4.title': 'Livraison MVP (1–3 Mois)',
    'step4.desc':  "Nous nous alignons sur un MVP clair, un calendrier et un budget. La phase POC/MVP est où nous testons la solution dans le monde réel, recueillons les retours, itérons et nous adaptons jusqu'à ce qu'elle corresponde parfaitement.",
    'step5.title': 'Développement Complet & Itération',
    'step5.desc':  "Après validation, nous développons le projet en ajoutant des fonctionnalités, peaufinant l'expérience et livrant le produit final. Notre objectif n'est pas seulement de répondre aux attentes — c'est de les dépasser. Nous voulons que nos clients soient <strong class=\"accent\">satisfaits et émerveillés</strong>.",
    'team.title':   'Une Équipe de Confiance, Éprouvée au Combat',
    'team.desc':    "Chaque projet est géré par moi et exécuté par une équipe triée sur le volet de professionnels freelance éprouvés avec lesquels j'ai travaillé pendant des années. Ils sont hautement qualifiés, fiables sous pression et efficaces par conception.",
    'team.members': "Membres d'Équipe",
    'team.years':   'Ans Ensemble',

    'portfolio.label': '04 Portfolio',
    'portfolio.title': 'Travaux Sélectionnés',
    'proj1.tag':   'Formation VR',
    'proj1.title': 'Simulation de Formation Sécurité Immersive',
    'proj1.desc':  "Environnement de formation VR haute-fidélité conçu pour les forces de l'ordre et les unités militaires. Scénarios tactiques réalistes avec analyses de performance et difficulté adaptative.",
    'proj2.tag':   'IA / NLP',
    'proj2.title': 'Avatar IA Client Multilingue',
    'proj2.desc':  "Avatar IA conversationnel intelligent avec détection automatique de la langue. Les clients parlent naturellement dans n'importe quelle langue et reçoivent des réponses instantanées et précises.",
    'proj3.tag':   'Web / Three.js',
    'proj3.title': 'Expérience de Marque 3D Interactive',
    'proj3.desc':  'Site web GPU-accéléré avec visualisation 3D de produits en temps réel, effets de particules et transitions de caméra fluides qui élèvent la marque client au niveau supérieur.',
    'proj4.tag':   'Éducation VR',
    'proj4.title': "Plateforme Éducation VR — Apprentissage Immersif pour Enfants",
    'proj4.desc':  "Plateforme d'apprentissage immersif complète — les élèves explorent des leçons alignées sur les programmes dans un environnement VR riche tandis que les enseignants gèrent le contenu et suivent les progrès.",
    'proj5.tag':   '3D / Unity',
    'proj5.title': 'Plateforme de Visualisation 3D Industrielle',
    'proj5.desc':  "Application 3D temps réel pour la visualisation d'équipements industriels — vues éclatées interactives, animations d'assemblage et modules de formation à la maintenance.",
    'proj6.tag':   'Branding',
    'proj6.title': 'Campagne de Branding Motion 3D',
    'proj6.desc':  "Motion graphics 3D saisissants et médias interactifs créés pour propulser l'exposition marché des clients. Conçus pour capturer l'attention et communiquer la valeur en secondes.",

    'docs.heading':       '// Documents & Ressources',
    'doc.resume.label':   '📄 CV / Curriculum Vitae',
    'doc.resume.title':   'Mohamed Islam Ben Jaballah',
    'doc.resume.desc':    'Directeur de Projet Technique &amp; Ingénieur Logiciel — CV Complet',
    'doc.resume.btn':     'Voir le CV',
    'doc.projects.label': '📎 Documentation Projet',
    'doc.bikevr.title':   'Projet BikeVR',
    'doc.bikevr.desc':    'Simulation de formation cycliste en réalité virtuelle',
    'doc.bikevr.btn':     'Voir la Documentation',
    'doc.cthulhu.title':  'Cthulhu Invocation',
    'doc.cthulhu.desc':   "Présentation d'une expérience horreur interactive",
    'doc.cthulhu.btn':    'Voir la Documentation',

    'testimonials.label':    '05 Avis',
    'testimonials.title':    'Ce Que Disent Mes Clients',
    'testimonials.subtitle': 'Des mots authentiques des personnes avec qui j\'ai eu le privilège de construire.',

    'testimonial.hamami.name': 'Dr. Mohamed Ali Hamami',
    'testimonial.hamami.role': 'Spécialiste en Stratégie IA & XR',
    'testimonial.hamami.org':  'Weill Cornell Medicine University',
    'testimonial.hamami.text': 'Islam s\'est d\'abord distingué à mes yeux comme un étudiant brillant sous ma supervision, et cela a été vraiment gratifiant de le voir évoluer en un partenaire de confiance, solide et fiable. À travers trois projets mêlant matériel et logiciel, il a constamment livré d\'excellents résultats, avec une vraie maîtrise technique et une belle initiative créative. Sa compréhension de l\'IA et du XR est exceptionnelle, et lorsqu\'il prend les choses en main, je sais que le travail est entre de très bonnes mains.',

    'testimonial.farzaneh.name': 'Farzaneh Shiri',
    'testimonial.farzaneh.role': 'Directrice des Opérations',
    'testimonial.farzaneh.org':  'SSC Abou Dhabi',
    'testimonial.farzaneh.text': 'Ce qui m\'a le plus marquée chez Islam, c\'est la façon très calme avec laquelle il gérait la vraie pression. Les délais étaient serrés, les besoins changeaient sans cesse, les attentes évoluaient constamment, et pourtant il s\'adaptait vite, avançait sans perdre de temps et ne laissait jamais la qualité baisser. Il a encaissé chaque imprévu avec sang-froid et a continué à livrer. SSC n\'aurait pas pu demander un responsable technique plus solide et plus fiable.',

    'testimonial.jose.name': 'Jose Vargas',
    'testimonial.jose.role': 'Chef de Projet',
    'testimonial.jose.org':  'Pompiers Sans Frontières, France',
    'testimonial.jose.text': 'Travailler avec Islam a été un vrai plaisir. Au-delà de ses solides compétences techniques, c\'est le genre de personne qui rend toute l\'équipe meilleure : présent, bienveillant et toujours prêt à faire un effort de plus. Chaque réunion se passait mieux quand il était là, et chaque projet était plus agréable grâce à sa présence. Je retravaillerais avec lui avec grand plaisir, n\'importe quand.',

    'contact.label': '06 Contact',
    'contact.title': 'Construisons Quelque Chose de Grand',
    'contact.desc':  "Vous avez un projet en tête ? Vous cherchez un partenaire technique fiable qui livre des résultats ? Je serais ravi d'entendre parler de votre défi et d'explorer comment nous pourrions le résoudre ensemble.",
    'contact.hello': 'Dire Bonjour',
    'contact.call':  "M'Appeler",

    'footer.text': '© 2026 MIBJ. Conçu avec précision.',

    'lb.video':        '▶  Vidéo',
    'lb.image':        '🖼  Image',
    'lb.pdf':          '📄  Document PDF',
    'lb.presentation': '📊  Présentation',
    'lb.iframe':       '🌐  Contenu Externe',
  },

  /* ─────────────────── ARABIC ─────────────────── */
  ar: {
    'nav.about':     'عن',
    'nav.services':  'الخدمات',
    'nav.process':   'العملية',
    'nav.portfolio': 'الأعمال',
    'nav.reviews':   'الآراء',
    'nav.contact':   'تواصل معي',
    'nav.logo':      '<م.إ.ب.ج />',

    'hero.greeting':    'مرحباً، اسمي',
    'hero.name':        'محمد إسلام<br/>بن جاب الله',
    'hero.tagline':     'أبني تجارب رقمية غامرة.',
    'hero.description': 'مدير مشاريع تقني ومهندس برمجيات بخبرة تزيد عن <strong class="accent">7 سنوات</strong> في تطوير حلول ثلاثية الأبعاد ومحاكاة الواقع الافتراضي وواجهات الذكاء الاصطناعي وتجارب الويب التفاعلية.',
    'hero.cta':         'استكشف خدماتي',

    'about.label': '01 عن',
    'about.title': 'من أنا',
    'about.p1': 'على مدى <strong>سبع سنوات</strong>، تخصصت في <strong>الثلاثي الأبعاد والواقع الافتراضي والذكاء الاصطناعي</strong> و<strong>تطوير الويب التفاعلي</strong> — بدأت كمطور ونمت لأصبح قائداً كاملاً للمشاريع مع البقاء عملياً في الهندسة والتنفيذ.',
    'about.p2': 'يمتد عملي عبر <strong>محاكاة التدريب بالواقع الافتراضي</strong> لقوات الأمن وأفاتار <strong>الذكاء الاصطناعي متعدد اللغات</strong> وتجارب الويب المتقدمة <strong>Three.js</strong> — مشاريع تدفع الحدود الإبداعية والتقنية.',
    'about.p3': 'أبقى مشاركاً من الفكرة حتى النشر — بتجميع فرق موثوقة ومواءمة أصحاب المصلحة والحفاظ على معايير الجودة الصارمة لتحقيق نتائج يفخر بها العملاء <strong>بثقة واعتزاز</strong>.',

    'stat.years':        'سنوات خبرة',
    'stat.projects':     'مشروع مكتمل',
    'stat.team':         'حجم الفريق المرن',
    'stat.satisfaction': 'رضا العملاء',

    'services.label': '02 الخدمات',
    'services.title': 'ما أقدمه',
    'svc1.title': 'حلول Unity ثلاثية الأبعاد',
    'svc1.desc':  'تطبيقات ثلاثية الأبعاد تفاعلية مخصصة مبنية بـ Unity. من مُهيِّئات المنتجات الفورية إلى التصورات المعمارية والتجارب التشبيهية التي تجذب جمهورك بشكل لا مثيل له.',
    'svc2.title': 'مواقع تفاعلية (Three.js)',
    'svc2.desc':  'تجارب ويب غامرة مسرَّعة بوحدة معالجة الرسومات مبنية بـ Three.js وWebGL. أنشئ مواقع لا تكتفي بالإعلام — بل تأسر، منحاً لعلامتك التجارية هوية بصرية تتميز في أي سوق.',
    'svc3.title': 'أفاتار الذكاء الاصطناعي والمساعدون متعددو اللغات',
    'svc3.desc':  'أفاتار ذكاء اصطناعي تحادثي ذكي يمكن لعملائك التحدث معه — طرح الأسئلة والحصول على إجابات بأي لغة. كشف متعدد اللغات تلقائي يضمن تجربة سلسة لجمهور عالمي.',
    'svc4.title': 'محاكاة التدريب بالواقع الافتراضي',
    'svc4.desc':  'تدريب بالواقع الافتراضي عالي الدقة للصناعات والشرطة والجيش وقوات الأمن. سيناريوهات واقعية ونتائج قابلة للقياس وبيئات آمنة لبناء المهارات الحيوية.',
    'svc5.title': 'منصة التعليم بالواقع الافتراضي',
    'svc5.desc':  'منصة تعليمية غامرة متكاملة تجمع حلاً على الويب للمدارس والمعلمين مع بيئة واقع افتراضي للطلاب. يتعلم الأطفال عبر تجارب VR متوافقة مع المناهج بينما يتتبع المعلمون تقدم كل طالب في الوقت الحقيقي.',
    'svc6.title': 'هوية بصرية آسرة',
    'svc6.desc':  'أساعد العملاء في تضخيم حضورهم في السوق من خلال صور ثلاثية الأبعاد مذهلة ورسوم متحركة ووسائط تفاعلية تلفت الانتباه وتوصل القيمة فوراً.',

    'process.label': '03 العملية',
    'process.title': 'كيف نعمل معاً',
    'step1.title': 'الاكتشاف ورسم خريطة المشكلة',
    'step1.desc':  'نبدأ بمحادثة عميقة. أستمع لفهم تحديك وجمهورك وأهدافك. لا مصطلحات معقدة ولا افتراضات — فقط وضوح.',
    'step2.title': 'تصميم الحل',
    'step2.desc':  'أعد مجموعة منتقاة من الحلول المصممة خصيصاً لاحتياجاتك — من الخفيف إلى الشامل. نناقش كل خيار معاً ونختار النهج الذي يناسب رؤيتك وجدولك الزمني وميزانيتك.',
    'step3.title': 'تجميع الفريق',
    'step3.desc':  'أجمع المزيج المثالي من المطورين المستقلين وفناني الثلاثي الأبعاد والمصممين — متخصصين كبار عملت معهم مراراً. يتوسع حجم الفريق من أنا فقط إلى 5–6 خبراء.',
    'step4.title': 'تسليم النموذج الأولي (1–3 أشهر)',
    'step4.desc':  'نتوافق على نموذج أولي واضح وجدول زمني وميزانية. مرحلة POC/MVP هي حيث نختبر الحل في العالم الحقيقي ونجمع التغذية الراجعة ونكرر ونتكيف حتى يتوافق تماماً مع احتياجاتك.',
    'step5.title': 'التطوير الكامل والتكرار',
    'step5.desc':  'بعد التحقق، نوسِّع المشروع بإضافة ميزات وتلميع التجربة وتسليم المنتج النهائي. هدفنا ليس فقط تلبية التوقعات — بل تجاوزها. نجعل عملاءنا <strong class="accent">راضين ومنبهرين</strong>.',
    'team.title':   'فريق موثوق ومُثبَت الجدارة',
    'team.desc':    'كل مشروع يُدار مني وينفذه فريق من المحترفين المستقلين المجربين الذين عملت معهم لسنوات. إنهم متخصصون للغاية وموثوقون تحت الضغط وفعّالون بالتصميم — يجلبون المختصين المناسبين في الوقت المناسب.',
    'team.members': 'أعضاء الفريق',
    'team.years':   'سنوات معاً',

    'portfolio.label': '04 الأعمال',
    'portfolio.title': 'أبرز الأعمال',
    'proj1.tag':   'تدريب VR',
    'proj1.title': 'محاكاة التدريب الأمني الغامر',
    'proj1.desc':  'بيئة تدريب VR عالية الدقة مصممة لقوات إنفاذ القانون والوحدات العسكرية. سيناريوهات تكتيكية واقعية مع تحليلات الأداء والصعوبة التكيفية.',
    'proj2.tag':   'ذكاء اصطناعي / معالجة لغوية',
    'proj2.title': 'أفاتار عميل ذكاء اصطناعي متعدد اللغات',
    'proj2.desc':  'أفاتار ذكاء اصطناعي تحادثي ذكي مع كشف تلقائي للغة. يتحدث العملاء بشكل طبيعي بأي لغة ويتلقون إجابات فورية ودقيقة.',
    'proj3.tag':   'ويب / Three.js',
    'proj3.title': 'تجربة العلامة التجارية ثلاثية الأبعاد التفاعلية',
    'proj3.desc':  'موقع ويب مسرَّع بوحدة معالجة الرسومات مع تصور منتجات ثلاثية الأبعاد في الوقت الحقيقي وتأثيرات جسيمات وانتقالات كاميرا سلسة.',
    'proj4.tag':   'تعليم VR',
    'proj4.title': 'منصة تعليم VR — تعلم غامر للأطفال',
    'proj4.desc':  'منصة تعليمية غامرة متكاملة — يستكشف الطلاب دروساً متوافقة مع المناهج في بيئة VR غنية بينما يدير المعلمون المحتوى ويتتبعون تقدم كل طالب.',
    'proj5.tag':   'ثلاثي الأبعاد / Unity',
    'proj5.title': 'منصة التصور الصناعي ثلاثي الأبعاد',
    'proj5.desc':  'تطبيق ثلاثي الأبعاد للوقت الحقيقي لتصور المعدات الصناعية — عروض انفجارية تفاعلية ورسوم تجميع ووحدات تدريب على الصيانة.',
    'proj6.tag':   'هوية بصرية',
    'proj6.title': 'حملة العلامة التجارية بالحركة ثلاثية الأبعاد',
    'proj6.desc':  'رسوم متحركة ثلاثية الأبعاد جذابة ووسائط تفاعلية أُنشئت لتعزيز تعرض العميل في السوق. مصممة لاستوقاف المتصفح وإيصال القيمة في ثوانٍ.',

    'docs.heading':       '// الوثائق والموارد',
    'doc.resume.label':   '📄 السيرة الذاتية',
    'doc.resume.title':   'محمد الإسلام بن جبالة',
    'doc.resume.desc':    'مدير مشاريع تقني ومهندس برمجيات — السيرة الذاتية الكاملة',
    'doc.resume.btn':     'عرض السيرة الذاتية',
    'doc.projects.label': '📎 توثيق المشاريع',
    'doc.bikevr.title':   'مشروع BikeVR',
    'doc.bikevr.desc':    'محاكاة تدريب ركوب الدراجة بالواقع الافتراضي',
    'doc.bikevr.btn':     'عرض التوثيق',
    'doc.cthulhu.title':  'استحضار كثولو',
    'doc.cthulhu.desc':   'عرض تقديمي لتجربة رعب تفاعلية',
    'doc.cthulhu.btn':    'عرض التوثيق',

    'testimonials.label':    '05 الآراء',
    'testimonials.title':    'ماذا يقول عملائي',
    'testimonials.subtitle': 'كلمات حقيقية من أشخاص شرفت بالبناء معهم.',

    'testimonial.hamami.name': 'د. محمد علي هـمامي',
    'testimonial.hamami.role': 'متخصص في استراتيجية وبحث الذكاء الاصطناعي والواقع الموسع',
    'testimonial.hamami.org':  'جامعة ويل كورنيل للطب',
    'testimonial.hamami.text': 'لفت إسلام انتباهي منذ البداية كطالب لامع تحت إشرافي، وكان من الجميل فعلاً أن أراه يكبر ليصبح شريك عمل موثوقاً وحاضراً بقوة. عبر ثلاثة مشاريع جمعت بين الأجهزة والبرمجيات، كان يقدّم نتائج ممتازة باستمرار، جامعاً بين عمق تقني حقيقي وروح إبداعية واضحة. فهمه للذكاء الاصطناعي والواقع الموسع استثنائي، وحين يكون هو من يتولى الأمور أعرف أن العمل في أيدٍ أمينة جداً.',

    'testimonial.farzaneh.name': 'فرزانة شيري',
    'testimonial.farzaneh.role': 'الرئيسة التنفيذية للعمليات',
    'testimonial.farzaneh.org':  'SSC أبوظبي',
    'testimonial.farzaneh.text': 'أكثر ما أثار إعجابي في إسلام هو هدوؤه تحت الضغط الحقيقي. المواعيد كانت ضيقة، والمتطلبات كانت تتغير باستمرار، والتوقعات لم تكن ثابتة، ومع ذلك كان يتأقلم بسرعة، يواصل التقدم، ولا يسمح أبداً بأن تتراجع الجودة. تعامل مع كل مفاجأة بثبات واستمر في التسليم. لم يكن بإمكان SSC أن تطلب مديراً تقنياً أكثر صلابة أو موثوقية منه.',

    'testimonial.jose.name': 'خوسيه فارغاس',
    'testimonial.jose.role': 'مدير المشروع',
    'testimonial.jose.org':  'Pompiers Sans Frontières، فرنسا',
    'testimonial.jose.text': 'العمل مع إسلام كان متعة حقيقية. إلى جانب مهاراته التقنية القوية، فهو من الأشخاص الذين يجعلون الفريق كله أفضل: داعم، حاضر فعلاً، ودائماً مستعد لبذل جهد إضافي. كل اجتماع كان أفضل بوجوده، وكل مشروع كان أكثر سلاسة ومتعة بسبب حضوره. سأكون سعيداً جداً بالعمل معه من جديد في أي وقت.',

    'contact.label': '06 تواصل',
    'contact.title': 'لنبنِ شيئاً عظيماً',
    'contact.desc':  'هل لديك مشروع في ذهنك؟ هل تبحث عن شريك تقني موثوق يحقق النتائج؟ يسعدني سماع تحديك واستكشاف كيف يمكننا حله معاً.',
    'contact.hello': 'قل مرحباً',
    'contact.call':  'اتصل بي',

    'footer.text': '© 2026 MIBJ. صُنع بإتقان.',

    'lb.video':        '▶  فيديو',
    'lb.image':        '🖼  صورة',
    'lb.pdf':          '📄  ملف PDF',
    'lb.presentation': '📊  عرض تقديمي',
    'lb.iframe':       '🌐  محتوى خارجي',
  },

  /* ─────────────────── SPANISH ─────────────────── */
  es: {
    'nav.about':     'Sobre Mí',
    'nav.services':  'Servicios',
    'nav.process':   'Proceso',
    'nav.portfolio': 'Portafolio',
    'nav.reviews':   'Reseñas',
    'nav.contact':   'Contáctame',
    'nav.logo':      '<MIBJ />',

    'hero.greeting':    'Hola, mi nombre es',
    'hero.name':        'Mohamed Islam<br/>Ben Jeballah',
    'hero.tagline':     'Creo experiencias digitales inmersivas.',
    'hero.description': 'Director de Proyectos Técnicos e Ingeniero de Software con <strong class="accent">7 años de experiencia</strong> desarrollando soluciones 3D, simulaciones de VR, interfaces con IA y experiencias web interactivas que cautivan y generan resultados.',
    'hero.cta':         'Explorar Mis Servicios',

    'about.label': '01 Sobre Mí',
    'about.title': 'Quién Soy',
    'about.p1': 'Durante más de <strong>siete años</strong>, me he especializado en <strong>3D, VR, IA</strong> y <strong>desarrollo web interactivo</strong> — comenzando como desarrollador y creciendo hasta la dirección de proyectos, manteniéndome activo en arquitectura e implementación.',
    'about.p2': 'Mi trabajo abarca <strong>simulaciones de entrenamiento en VR</strong> para fuerzas de seguridad, <strong>avatares de IA multilingüe</strong> y experiencias web avanzadas con <strong>Three.js</strong> — proyectos que empujan límites creativos y técnicos.',
    'about.p3': 'Permanezco involucrado desde el concepto hasta el despliegue — formando equipos de confianza, alineando a las partes interesadas y manteniendo estándares de calidad rigurosos para entregar resultados de los que los clientes están <strong>seguros y orgullosos</strong>.',

    'stat.years':        'Años de Experiencia',
    'stat.projects':     'Proyectos Entregados',
    'stat.team':         'Tamaño de Equipo Flexible',
    'stat.satisfaction': 'Satisfacción del Cliente',

    'services.label': '02 Servicios',
    'services.title': 'Lo Que Entrego',
    'svc1.title': 'Soluciones 3D con Unity',
    'svc1.desc':  'Aplicaciones 3D interactivas a medida desarrolladas con Unity. Desde configuradores de productos en tiempo real hasta visualizaciones arquitectónicas y experiencias gamificadas que enganchan a tu audiencia.',
    'svc2.title': 'Sitios Web Interactivos (Three.js)',
    'svc2.desc':  'Experiencias web inmersivas aceleradas por GPU construidas con Three.js y WebGL. Creo sitios que no solo informan — cautivan, dando a tu marca una identidad visual que destaca en cualquier mercado.',
    'svc3.title': 'Avatares de IA y Asistentes Multilingüe',
    'svc3.desc':  'Avatares de IA conversacionales inteligentes con los que tus clientes pueden hablar — hacer preguntas, obtener respuestas, en cualquier idioma. Detección multilingüe automática para una audiencia global.',
    'svc4.title': 'Simulaciones de Entrenamiento en VR',
    'svc4.desc':  'Entrenamiento de realidad virtual de alta fidelidad para industrias, policía, militares y fuerzas de seguridad. Escenarios realistas, resultados medibles y entornos seguros para desarrollar habilidades críticas.',
    'svc5.title': 'Plataforma Educativa de VR',
    'svc5.desc':  'Una plataforma de aprendizaje inmersivo completa que combina una solución web para escuelas y maestros con un entorno de VR para estudiantes. Los niños aprenden a través de experiencias VR alineadas con el currículo mientras los educadores siguen el progreso en tiempo real.',
    'svc6.title': 'Identidad Visual Cautivadora',
    'svc6.desc':  'Ayudo a los clientes a amplificar su presencia en el mercado a través de impresionantes visuales 3D, motion graphics y medios interactivos que captan la atención y comunican valor al instante.',

    'process.label': '03 Proceso',
    'process.title': 'Cómo Trabajamos Juntos',
    'step1.title': 'Descubrimiento y Mapeo del Problema',
    'step1.desc':  'Comenzamos con una conversación profunda. Escucho para entender tu desafío, tu audiencia y tus objetivos. Sin jerga, sin suposiciones — solo claridad.',
    'step2.title': 'Diseño de la Solución',
    'step2.desc':  'Preparo un conjunto seleccionado de soluciones adaptadas a tus necesidades — desde ligeras hasta comprensivas. Discutimos cada opción juntos y elegimos el enfoque que se ajusta a tu visión, cronograma y presupuesto.',
    'step3.title': 'Formación del Equipo',
    'step3.desc':  'Ensamblo la mezcla ideal de desarrolladores freelance, artistas 3D y diseñadores — especialistas senior con quienes he entregado proyectos repetidamente. El tamaño del equipo escala desde solo yo hasta 5–6 expertos.',
    'step4.title': 'Entrega del MVP (1–3 Meses)',
    'step4.desc':  'Nos alineamos en un MVP claro, cronograma y presupuesto. La fase POC/MVP es donde probamos la solución en el mundo real, recopilamos retroalimentación, iteramos y adaptamos hasta que encaje perfectamente.',
    'step5.title': 'Desarrollo Completo e Iteración',
    'step5.desc':  'Tras la validación, escalamos el proyecto añadiendo funciones, puliendo la experiencia y entregando el producto final. Nuestro objetivo no es solo cumplir expectativas — es superarlas. Hacemos que nuestros clientes queden <strong class="accent">satisfechos y asombrados</strong>.',
    'team.title':   'Un Equipo de Confianza, Probado en Batalla',
    'team.desc':    'Cada proyecto es gestionado por mí y ejecutado por un equipo seleccionado de profesionales freelance probados con quienes he trabajado durante años. Son altamente calificados, confiables bajo presión y eficientes por diseño.',
    'team.members': 'Miembros del Equipo',
    'team.years':   'Años Juntos',

    'portfolio.label': '04 Portafolio',
    'portfolio.title': 'Trabajos Destacados',
    'proj1.tag':   'Entrenamiento VR',
    'proj1.title': 'Simulación Inmersiva de Entrenamiento de Seguridad',
    'proj1.desc':  'Entorno de entrenamiento VR de alta fidelidad diseñado para fuerzas del orden y unidades militares. Escenarios tácticos realistas con análisis de rendimiento y dificultad adaptativa.',
    'proj2.tag':   'IA / NLP',
    'proj2.title': 'Avatar de Cliente IA Multilingüe',
    'proj2.desc':  'Avatar de IA conversacional inteligente con detección automática de idioma. Los clientes hablan naturalmente en cualquier idioma y reciben respuestas instantáneas y precisas.',
    'proj3.tag':   'Web / Three.js',
    'proj3.title': 'Experiencia de Marca 3D Interactiva',
    'proj3.desc':  'Sitio web acelerado por GPU con visualización de productos 3D en tiempo real, efectos de partículas y transiciones de cámara suaves que elevan la marca del cliente al siguiente nivel.',
    'proj4.tag':   'Educación VR',
    'proj4.title': 'Plataforma Educativa VR — Aprendizaje Inmersivo para Niños',
    'proj4.desc':  'Plataforma de aprendizaje inmersivo de extremo a extremo — los estudiantes exploran lecciones alineadas con el currículo en un entorno VR enriquecido mientras los maestros gestionan el contenido y siguen el progreso.',
    'proj5.tag':   '3D / Unity',
    'proj5.title': 'Plataforma de Visualización 3D Industrial',
    'proj5.desc':  'Aplicación 3D en tiempo real para visualización de equipos industriales — vistas explosionadas interactivas, animaciones de ensamblaje y módulos de entrenamiento de mantenimiento.',
    'proj6.tag':   'Branding',
    'proj6.title': 'Campaña de Branding Motion 3D',
    'proj6.desc':  'Impactantes motion graphics 3D y medios interactivos creados para impulsar la exposición de marca del cliente. Diseñados para detener el scroll y comunicar valor en segundos.',

    'docs.heading':       '// Documentos y Recursos',
    'doc.resume.label':   '📄 Currículum / CV',
    'doc.resume.title':   'Mohamed Islam Ben Jaballah',
    'doc.resume.desc':    'Director de Proyectos Técnicos e Ingeniero de Software — CV Completo',
    'doc.resume.btn':     'Ver Currículum',
    'doc.projects.label': '📎 Documentación de Proyectos',
    'doc.bikevr.title':   'Proyecto BikeVR',
    'doc.bikevr.desc':    'Simulación de entrenamiento en bicicleta en realidad virtual',
    'doc.bikevr.btn':     'Ver Documentación',
    'doc.cthulhu.title':  'Invocación de Cthulhu',
    'doc.cthulhu.desc':   'Presentación de experiencia de terror interactiva',
    'doc.cthulhu.btn':    'Ver Documentación',

    'testimonials.label':    '05 Reseñas',
    'testimonials.title':    'Lo Que Dicen Mis Clientes',
    'testimonials.subtitle': 'Palabras reales de las personas con quienes he tenido el privilegio de construir.',

    'testimonial.hamami.name': 'Dr. Mohamed Ali Hamami',
    'testimonial.hamami.role': 'Especialista en Estrategia IA & XR',
    'testimonial.hamami.org':  'Weill Cornell Medicine University',
    'testimonial.hamami.text': 'Islam me llamó la atención desde el principio como un estudiante brillante bajo mi supervisión, y ha sido realmente gratificante verlo crecer hasta convertirse en un socio de trabajo sólido y confiable. A lo largo de tres proyectos de hardware y software, entregó resultados excelentes de forma constante, combinando una gran profundidad técnica con una iniciativa creativa muy valiosa. Su dominio de la IA y el XR es excepcional, y cuando él está al frente, sé que el trabajo está en muy buenas manos.',

    'testimonial.farzaneh.name': 'Farzaneh Shiri',
    'testimonial.farzaneh.role': 'Directora de Operaciones',
    'testimonial.farzaneh.org':  'SSC Abu Dhabi',
    'testimonial.farzaneh.text': 'Lo que más me impresionó de Islam fue la calma con la que manejaba la presión real. Los plazos eran ajustados, los requisitos cambiaban constantemente y las expectativas no dejaban de moverse, pero aun así se adaptaba rápido, seguía avanzando y nunca dejó que la calidad bajara. Supo absorber cada giro inesperado y siguió entregando. SSC no podría haber pedido un gerente técnico más resistente ni más confiable.',

    'testimonial.jose.name': 'Jose Vargas',
    'testimonial.jose.role': 'Jefe de Proyecto',
    'testimonial.jose.org':  'Pompiers Sans Frontières, Francia',
    'testimonial.jose.text': 'Trabajar con Islam fue un verdadero gusto. Más allá de sus sólidas habilidades técnicas, es de esas personas que hacen mejor a todo el equipo: cercano, presente y siempre dispuesto a dar un poco más. Cada reunión salía mejor con él, y cada proyecto se sentía más llevadero y más humano gracias a su presencia. Volvería a trabajar con él encantado, en cualquier momento.',

    'contact.label': '06 Contacto',
    'contact.title': 'Construyamos Algo Grande',
    'contact.desc':  '¿Tienes un proyecto en mente? ¿Buscas un socio técnico confiable que entregue resultados? Me encantaría escuchar sobre tu desafío y explorar cómo podemos resolverlo juntos.',
    'contact.hello': 'Saludar',
    'contact.call':  'Llamarme',

    'footer.text': '© 2026 MIBJ. Elaborado con precisión.',

    'lb.video':        '▶  Video',
    'lb.image':        '🖼  Imagen',
    'lb.pdf':          '📄  Documento PDF',
    'lb.presentation': '📊  Presentación',
    'lb.iframe':       '🌐  Contenido Externo',
  },

  /* ─────────────────── CHINESE ─────────────────── */
  zh: {
    'nav.about':     '关于',
    'nav.services':  '服务',
    'nav.process':   '流程',
    'nav.portfolio': '作品',
    'nav.reviews':   '评价',
    'nav.contact':   '联系我',
    'nav.logo':      '<MIBJ />',

    'hero.greeting':    '你好，我叫',
    'hero.name':        'Mohamed Islam<br/>Ben Jeballah',
    'hero.tagline':     '我打造沉浸式数字体验。',
    'hero.description': '技术项目经理兼软件工程师，拥有<strong class="accent">7年经验</strong>，专注于3D解决方案、VR仿真、AI驱动界面及互动网页体验的开发。',
    'hero.cta':         '探索我的服务',

    'about.label': '01 关于',
    'about.title': '我是谁',
    'about.p1': '在超过<strong>七年</strong>的时间里，我专注于<strong>3D、VR、AI</strong>和<strong>交互式网页开发</strong>——从开发者起步，成长为全面的项目负责人，同时深度参与架构与实现。',
    'about.p2': '我的工作涵盖为安全部队开发的<strong>VR训练仿真</strong>、多语言<strong>AI虚拟形象</strong>以及先进的<strong>Three.js</strong>网页体验——这些项目突破创意与技术边界，带来真实可量化的影响。',
    'about.p3': '我始终参与从概念到部署的全过程——组建可信团队、协调利益相关者，保持严格的质量标准，交付让客户<strong>充满信心和自豪</strong>的成果。',

    'stat.years':        '年经验',
    'stat.projects':     '交付项目',
    'stat.team':         '灵活团队规模',
    'stat.satisfaction': '客户满意度',

    'services.label': '02 服务',
    'services.title': '我能交付什么',
    'svc1.title': '3D Unity 解决方案',
    'svc1.desc':  '基于Unity构建的定制交互式3D应用。从实时产品配置器到建筑可视化，再到让受众眼前一亮的游戏化体验。',
    'svc2.title': '交互式网站（Three.js）',
    'svc2.desc':  '使用Three.js和WebGL构建的沉浸式GPU加速网页体验。我创建的网站不仅仅是传递信息——它们令人着迷，赋予您的品牌在任何市场都脱颖而出的视觉标识。',
    'svc3.title': 'AI虚拟形象与多语言助手',
    'svc3.desc':  '智能对话式AI虚拟形象，您的客户可以与其交流——用任意语言提问获取答案。自动多语言识别确保全球受众零摩擦的体验。',
    'svc4.title': 'VR训练仿真',
    'svc4.desc':  '面向工业、警察、军事及安全部队的高保真虚拟现实训练。逼真场景、可量化结果以及培养关键技能的安全环境。',
    'svc5.title': 'VR教育平台',
    'svc5.desc':  '一体化沉浸式学习平台，结合面向学校和教师的网页解决方案与面向学生的VR环境。孩子们通过贴合课程的VR体验学习，教育者可通过专属仪表板实时追踪进度。',
    'svc6.title': '引人注目的视觉品牌',
    'svc6.desc':  '我帮助客户通过精美的3D视觉效果、动态图形和互动媒体来扩大市场影响力，瞬间抓住注意力并传递品牌价值。',

    'process.label': '03 流程',
    'process.title': '我们如何合作',
    'step1.title': '探索与问题梳理',
    'step1.desc':  '从深度对话开始。我倾听以理解您的挑战、受众和目标。没有行话，没有假设——只有清晰。',
    'step2.title': '解决方案设计',
    'step2.desc':  '我准备一套针对您需求量身定制的解决方案——从轻量到全面。我们共同讨论每个选项，确定符合您愿景、时间表和预算的方案。',
    'step3.title': '团队组建',
    'step3.desc':  '我组建自由职业开发者、3D艺术家和设计师的理想组合——我反复合作过的资深专家。团队规模从仅我一人到5–6位专家灵活扩展。',
    'step4.title': 'MVP交付（1–3个月）',
    'step4.desc':  '我们就清晰的MVP、时间表和预算达成一致。POC/MVP阶段是我们在真实世界中测试解决方案、收集反馈、迭代并适应的关键阶段。',
    'step5.title': '全面开发与迭代',
    'step5.desc':  '验证后，我们扩展项目——添加功能、完善体验并交付最终产品。我们的目标不只是满足期望；而是超越它。让客户<strong class="accent">满意且惊叹</strong>。',
    'team.title':   '值得信赖、经过实战检验的团队',
    'team.desc':    '每个项目都由我管理，由我多年合作的精选优秀自由职业专家团队执行。他们技术精湛、抗压能力强、高效务实——在正确的时间引入合适的专家。',
    'team.members': '团队成员',
    'team.years':   '合作年限',

    'portfolio.label': '04 作品',
    'portfolio.title': '精选作品',
    'proj1.tag':   'VR训练',
    'proj1.title': '沉浸式安全培训仿真',
    'proj1.desc':  '为执法机构和军事单位设计的高保真VR训练环境。逼真战术场景，配备绩效分析与自适应难度。',
    'proj2.tag':   'AI / NLP',
    'proj2.title': '多语言AI客户虚拟形象',
    'proj2.desc':  '具备自动语言检测功能的智能对话AI虚拟形象。客户用任意语言自然交流，即时获得精准回复。',
    'proj3.tag':   '网页 / Three.js',
    'proj3.title': '3D交互式品牌体验',
    'proj3.desc':  'GPU加速网站，具备实时3D产品可视化、粒子效果和流畅的摄像机过渡，将客户品牌提升至全新高度。',
    'proj4.tag':   'VR教育',
    'proj4.title': 'VR教育平台——儿童沉浸式学习',
    'proj4.desc':  '端到端沉浸式学习平台——学生在丰富的VR环境中探索课程对齐的课程，教师通过专属网页仪表板管理内容和追踪每位学生的进度。',
    'proj5.tag':   '3D / Unity',
    'proj5.title': '工业3D可视化平台',
    'proj5.desc':  '用于工业设备可视化的实时3D应用——交互式爆炸视图、装配动画和维护培训模块。',
    'proj6.tag':   '品牌形象',
    'proj6.title': '3D动态品牌推广活动',
    'proj6.desc':  '精心制作的3D动态图形和互动媒体，助力客户品牌曝光。专为吸引眼球、在数秒内传递价值而设计。',

    'docs.heading':       '// 文档与资源',
    'doc.resume.label':   '📄 简历',
    'doc.resume.title':   'Mohamed Islam Ben Jaballah',
    'doc.resume.desc':    '技术项目经理兼软件工程师 — 完整简历',
    'doc.resume.btn':     '查看简历',
    'doc.projects.label': '📎 项目文档',
    'doc.bikevr.title':   'BikeVR 项目',
    'doc.bikevr.desc':    '虚拟现实自行车训练仿真',
    'doc.bikevr.btn':     '查看文档',
    'doc.cthulhu.title':  '克苏鲁召唤',
    'doc.cthulhu.desc':   '交互式恐怖体验演示',
    'doc.cthulhu.btn':    '查看文档',

    'testimonials.label':    '05 评价',
    'testimonials.title':    '客户这样说',
    'testimonials.subtitle': '来自曾与我合作的伙伴的真实心声。',

    'testimonial.hamami.name': 'Dr. Mohamed Ali Hamami',
    'testimonial.hamami.role': 'AI与XR战略与研究专家',
    'testimonial.hamami.org':  '威尔康奈尔医学院',
    'testimonial.hamami.text': 'Islam最初以一名非常出色的学生身份进入我的视野，而后来看到他成长为一位敏锐、可靠的合作伙伴，这件事让我由衷感到欣慰。在三个涵盖硬件与软件的项目中，他始终稳定地交出优秀成果，把扎实的技术能力和真实的创造力很好地结合在一起。他对AI和XR的理解非常出色，而当事情交到他手上时，我知道这项工作一定会被处理得很稳妥。',

    'testimonial.farzaneh.name': 'Farzaneh Shiri',
    'testimonial.farzaneh.role': '首席运营官',
    'testimonial.farzaneh.org':  'SSC 阿布扎比',
    'testimonial.farzaneh.text': 'Islam最打动我的，是他面对真实压力时那种很稳的状态。截止时间很紧，需求不断变化，预期也一直在调整，但他总能很快适应，持续推进，而且从不让质量打折。他把每一次突发情况都处理得很从容，并且一直稳定交付。SSC不可能找到比他更有韧性、更值得信赖的技术经理。',

    'testimonial.jose.name': 'Jose Vargas',
    'testimonial.jose.role': '项目经理',
    'testimonial.jose.org':  '无国界消防员，法国',
    'testimonial.jose.text': '和Islam一起工作真的很愉快。除了扎实的技术能力之外，他还是那种能让整个团队都变得更好的同事：支持别人、真正投入，而且总愿意多走一步。有他在的每一次会议都会更顺，每一个项目也都会因为他的存在而变得更轻松、更舒服。如果还有机会，我任何时候都愿意再和他合作。',

    'contact.label': '06 联系',
    'contact.title': '让我们共同创造精彩',
    'contact.desc':  '有项目想法？正在寻找可靠的技术合作伙伴？我很乐意了解您的挑战，探索我们如何共同解决它。',
    'contact.hello': '打个招呼',
    'contact.call':  '致电我',

    'footer.text': '© 2026 MIBJ. 精心打造。',

    'lb.video':        '▶  视频',
    'lb.image':        '🖼  图片',
    'lb.pdf':          '📄  PDF 文档',
    'lb.presentation': '📊  演示文稿',
    'lb.iframe':       '🌐  外部内容',
  },

  /* ─────────────────── RUSSIAN ─────────────────── */
  ru: {
    'nav.about':     'Обо Мне',
    'nav.services':  'Услуги',
    'nav.process':   'Процесс',
    'nav.portfolio': 'Портфолио',
    'nav.reviews':   'Отзывы',
    'nav.contact':   'Связаться',
    'nav.logo':      '<MIBJ />',

    'hero.greeting':    'Привет, меня зовут',
    'hero.name':        'Mohamed Islam<br/>Ben Jeballah',
    'hero.tagline':     'Я создаю захватывающие цифровые опыты.',
    'hero.description': 'Технический руководитель проектов и инженер-программист с <strong class="accent">7-летним опытом</strong> разработки 3D-решений, VR-симуляций, интерфейсов на основе ИИ и интерактивных веб-опытов, которые привлекают и доставляют результаты.',
    'hero.cta':         'Изучить Мои Услуги',

    'about.label': '01 Обо Мне',
    'about.title': 'Кто Я',
    'about.p1': 'За более чем <strong>семь лет</strong> я специализировался в <strong>3D, VR, ИИ</strong> и <strong>интерактивной веб-разработке</strong> — начинал как разработчик и вырос до полного руководства проектами, оставаясь активным в архитектуре и реализации.',
    'about.p2': 'Моя работа охватывает <strong>VR-симуляции для обучения</strong> силовых структур, многоязычные <strong>ИИ-аватары</strong> и продвинутые <strong>Three.js</strong> веб-опыты — проекты, которые раздвигают творческие и технические границы.',
    'about.p3': 'Я остаюсь вовлечённым от концепции до развёртывания — формируя надёжные команды, выравнивая заинтересованные стороны и поддерживая строгие стандарты качества для достижения результатов, которыми клиенты <strong>уверенно гордятся</strong>.',

    'stat.years':        'Лет Опыта',
    'stat.projects':     'Проектов Сдано',
    'stat.team':         'Гибкий Размер Команды',
    'stat.satisfaction': 'Удовлетворённость Клиентов',

    'services.label': '02 Услуги',
    'services.title': 'Что Я Делаю',
    'svc1.title': '3D-решения на Unity',
    'svc1.desc':  'Интерактивные 3D-приложения на заказ, разработанные на Unity. От конфигураторов продуктов в реальном времени до архитектурных визуализаций и игровых опытов, которые захватывают вашу аудиторию.',
    'svc2.title': 'Интерактивные Сайты (Three.js)',
    'svc2.desc':  'Иммерсивные веб-опыты с ускорением GPU, построенные на Three.js и WebGL. Я создаю сайты, которые не просто информируют — они захватывают, давая вашему бренду визуальную идентичность, выделяющуюся на любом рынке.',
    'svc3.title': 'ИИ-аватары и Многоязычные Ассистенты',
    'svc3.desc':  'Умные разговорные ИИ-аватары, с которыми ваши клиенты могут общаться — задавать вопросы, получать ответы на любом языке. Автоматическое многоязычное обнаружение обеспечивает нулевое трение для глобальной аудитории.',
    'svc4.title': 'VR-симуляции для Обучения',
    'svc4.desc':  'Высокоточное обучение в виртуальной реальности для промышленности, полиции, военных и силовых структур. Реалистичные сценарии, измеримые результаты и безопасная среда для развития критических навыков.',
    'svc5.title': 'Образовательная VR-платформа',
    'svc5.desc':  'Полноценная иммерсивная обучающая платформа, объединяющая веб-решение для школ и учителей с VR-средой для учеников. Дети учатся через захватывающие VR-опыты, соответствующие программе, пока педагоги отслеживают прогресс в реальном времени.',
    'svc6.title': 'Захватывающий Визуальный Брендинг',
    'svc6.desc':  'Я помогаю клиентам усилить рыночное присутствие с помощью потрясающих 3D-визуалов, motion-графики и интерактивных медиа, которые привлекают внимание и мгновенно передают ценность.',

    'process.label': '03 Процесс',
    'process.title': 'Как Мы Работаем Вместе',
    'step1.title': 'Исследование и Картографирование Проблемы',
    'step1.desc':  'Мы начинаем с глубокого разговора. Я слушаю, чтобы понять ваш вызов, вашу аудиторию и ваши цели. Без жаргона, без предположений — только ясность.',
    'step2.title': 'Проектирование Решения',
    'step2.desc':  'Я подготавливаю тщательно подобранный набор решений, адаптированных под ваши потребности — от лёгких до комплексных. Мы обсуждаем каждый вариант вместе и выбираем подход, соответствующий вашему видению, срокам и бюджету.',
    'step3.title': 'Формирование Команды',
    'step3.desc':  'Я собираю идеальный состав фрилансеров, 3D-художников и дизайнеров — senior-специалистов, с которыми я многократно сдавал проекты. Команда масштабируется от меня одного до 5–6 экспертов.',
    'step4.title': 'Сдача MVP (1–3 Месяца)',
    'step4.desc':  'Мы договариваемся о чётком MVP, сроках и бюджете. Фаза POC/MVP — это место, где мы тестируем решение в реальном мире, собираем обратную связь, итерируем и адаптируемся до тех пор, пока оно идеально не совпадёт с вашими потребностями.',
    'step5.title': 'Полная Разработка и Итерация',
    'step5.desc':  'После валидации мы масштабируем проект, добавляя функции, совершенствуя опыт и сдавая финальный продукт. Наша цель не просто оправдать ожидания — а превзойти их. Мы делаем наших клиентов <strong class="accent">довольными и изумлёнными</strong>.',
    'team.title':   'Надёжная, Проверенная в Боях Команда',
    'team.desc':    'Каждый проект управляется мной и исполняется отобранной командой проверенных фрилансеров, с которыми я работаю годами. Они высококвалифицированы, надёжны под давлением и эффективны по конструкции.',
    'team.members': 'Члены Команды',
    'team.years':   'Лет Вместе',

    'portfolio.label': '04 Портфолио',
    'portfolio.title': 'Избранные Работы',
    'proj1.tag':   'VR-обучение',
    'proj1.title': 'Иммерсивная Симуляция Обучения Безопасности',
    'proj1.desc':  'Высокоточная VR-среда обучения, разработанная для правоохранительных органов и военных подразделений. Реалистичные тактические сценарии с аналитикой производительности и адаптивной сложностью.',
    'proj2.tag':   'ИИ / NLP',
    'proj2.title': 'Многоязычный ИИ-аватар Клиента',
    'proj2.desc':  'Умный разговорный ИИ-аватар с автоматическим определением языка. Клиенты говорят естественно на любом языке и получают мгновенные точные ответы.',
    'proj3.tag':   'Веб / Three.js',
    'proj3.title': '3D Интерактивный Брендовый Опыт',
    'proj3.desc':  'Сайт с ускорением GPU с визуализацией 3D-продуктов в реальном времени, эффектами частиц и плавными переходами камеры, поднимающими брендинг клиента на новый уровень.',
    'proj4.tag':   'VR-образование',
    'proj4.title': 'VR Образовательная Платформа — Иммерсивное Обучение для Детей',
    'proj4.desc':  'Полная иммерсивная обучающая платформа — студенты изучают уроки, соответствующие программе, в насыщенной VR-среде, пока учителя управляют контентом и отслеживают прогресс каждого ученика.',
    'proj5.tag':   '3D / Unity',
    'proj5.title': 'Платформа Промышленной 3D-Визуализации',
    'proj5.desc':  'Приложение реального времени для визуализации промышленного оборудования — интерактивные взрывные виды, анимации сборки и модули обучения техобслуживанию.',
    'proj6.tag':   'Брендинг',
    'proj6.title': '3D Motion Брендинговая Кампания',
    'proj6.desc':  'Захватывающая 3D motion-графика и интерактивные медиа для усиления рыночной экспозиции клиента. Разработаны, чтобы остановить прокрутку и передать ценность за секунды.',

    'docs.heading':       '// Документы и Ресурсы',
    'doc.resume.label':   '📄 Резюме / CV',
    'doc.resume.title':   'Mohamed Islam Ben Jaballah',
    'doc.resume.desc':    'Технический руководитель проектов и инженер-программист — Полное CV',
    'doc.resume.btn':     'Просмотреть Резюме',
    'doc.projects.label': '📎 Документация по Проектам',
    'doc.bikevr.title':   'Проект BikeVR',
    'doc.bikevr.desc':    'Симуляция велосипедной тренировки в виртуальной реальности',
    'doc.bikevr.btn':     'Просмотреть Документацию',
    'doc.cthulhu.title':  'Призыв Ктулху',
    'doc.cthulhu.desc':   'Презентация интерактивного хоррор-опыта',
    'doc.cthulhu.btn':    'Просмотреть Документацию',

    'testimonials.label':    '05 Отзывы',
    'testimonials.title':    'Что Говорят Клиенты',
    'testimonials.subtitle': 'Подлинные слова людей, с которыми у меня была честь работать.',

    'testimonial.hamami.name': 'Д-р Мохамед Али Хамами',
    'testimonial.hamami.role': 'Специалист по стратегии ИИ и XR',
    'testimonial.hamami.org':  'Университет Вейлл Корнелл',
    'testimonial.hamami.text': 'Изначально Ислам запомнился мне как блестящий студент под моим руководством, и мне было по-настоящему приятно видеть, как со временем он вырос в надёжного и сильного партнёра по работе. В трёх проектах, связанных и с аппаратной, и с программной частью, он неизменно показывал отличный результат, сочетая глубокую техническую экспертизу с настоящей творческой инициативой. Его понимание ИИ и XR действительно на высоком уровне, и когда он берёт дело в свои руки, я точно знаю, что работа в очень надёжных руках.',

    'testimonial.farzaneh.name': 'Фарзане Шири',
    'testimonial.farzaneh.role': 'Главный Операционный Директор',
    'testimonial.farzaneh.org':  'SSC Абу-Даби',
    'testimonial.farzaneh.text': 'Больше всего меня в Исламе впечатляло то, насколько спокойно он держался под настоящим давлением. Сроки были жёсткими, требования постоянно менялись, ожидания тоже не стояли на месте, но он быстро адаптировался, не сбавлял темп и никогда не жертвовал качеством. Он уверенно принимал каждый новый поворот и продолжал выдавать результат. SSC не могла бы пожелать более стойкого и надёжного технического менеджера.',

    'testimonial.jose.name': 'Хосе Варгас',
    'testimonial.jose.role': 'Руководитель Проекта',
    'testimonial.jose.org':  'Pompiers Sans Frontières, Франция',
    'testimonial.jose.text': 'Работать с Исламом было действительно приятно. Помимо сильных технических навыков, он из тех людей, рядом с которыми вся команда становится лучше: внимательный, включённый и всегда готов сделать немного больше. Каждая встреча проходила лучше, если он был в ней, и каждый проект ощущался легче и приятнее благодаря его присутствию. Я бы с удовольствием поработал с ним снова в любой момент.',

    'contact.label': '06 Контакт',
    'contact.title': 'Давайте Создадим Что-то Великое',
    'contact.desc':  'Есть проект на уме? Ищете надёжного технического партнёра, который добивается результатов? Я был бы рад услышать о вашем вызове и изучить, как мы можем решить его вместе.',
    'contact.hello': 'Поздороваться',
    'contact.call':  'Позвонить',

    'footer.text': '© 2026 MIBJ. Создано с точностью.',

    'lb.video':        '▶  Видео',
    'lb.image':        '🖼  Изображение',
    'lb.pdf':          '📄  PDF-документ',
    'lb.presentation': '📊  Презентация',
    'lb.iframe':       '🌐  Внешний Контент',
  },
};

// ── Core i18n engine ──────────────────────────────────────────────────────────
(function () {
  const STORAGE_KEY = 'mibj_lang';
  const DEFAULT_LANG = 'en';
  const ARABIC_FONT_URL =
    'https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&display=swap';

  let arabicFontLoaded = false;

  function loadArabicFont() {
    if (arabicFontLoaded) return;
    arabicFontLoaded = true;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = ARABIC_FONT_URL;
    document.head.appendChild(link);
  }

  // Apply a language to the page
  function applyLang(lang) {
    const t = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANG];
    const isRTL = lang === 'ar';

    if (isRTL) loadArabicFont();

    // Direction + lang attribute on <html>
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('data-lang', lang);

    // Translate all elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    // Translate placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
    });

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Persist choice
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}

    // Update floating language pill label
    const floatLabel = document.getElementById('floatLangLabel');
    if (floatLabel) floatLabel.textContent = lang.toUpperCase();

    // Update the lightbox type-label map (used in main.js)
    if (window.__i18nTypeLabels) {
      window.__i18nTypeLabels.video        = t['lb.video']        || '▶  Video';
      window.__i18nTypeLabels.image        = t['lb.image']        || '🖼  Image';
      window.__i18nTypeLabels.pdf          = t['lb.pdf']          || '📄  PDF Document';
      window.__i18nTypeLabels.presentation = t['lb.presentation'] || '📊  Presentation';
      window.__i18nTypeLabels.iframe       = t['lb.iframe']       || '🌐  External Content';
    }
  }

  // Wire up language switcher buttons
  function wireButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => applyLang(btn.getAttribute('data-lang')));
    });
  }

  // Boot: always start in English
  function boot() {
    let lang = DEFAULT_LANG;
    applyLang(lang);
    wireButtons();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
