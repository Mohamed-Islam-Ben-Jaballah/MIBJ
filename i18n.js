// ========================================
//  MIBJ Portfolio — Internationalisation
//  Languages: English (en), French (fr), Arabic (ar)
// ========================================

const TRANSLATIONS = {

  /* ─────────────────── ENGLISH ─────────────────── */
  en: {
    'nav.about':     'About',
    'nav.services':  'Services',
    'nav.process':   'Process',
    'nav.portfolio': 'Portfolio',
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

    'contact.label': '05 Contact',
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

    'contact.label': '05 Contact',
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

    'contact.label': '05 تواصل',
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

  // Boot: apply stored / browser lang
  function boot() {
    let lang = DEFAULT_LANG;
    try { lang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG; } catch (_) {}
    if (!TRANSLATIONS[lang]) lang = DEFAULT_LANG;
    applyLang(lang);
    wireButtons();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
