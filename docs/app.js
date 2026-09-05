/**
 * ORBIS Sovereign P2P — Master Application Script
 * Propulsé par ShaDevPro
 * Includes: i18n Dictionary (FR/EN/AR), Search Filter, Accordions, Theme Toggle, RTL Handling.
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. i18n Localization Dictionary
  // =========================================================================
  const translations = {
    fr: {
      "nav.features": "Fonctionnalités",
      "nav.security": "Sécurité & PFS",
      "nav.help": "Centre d'aide",
      "nav.quota": "Quota GSM",
      "nav.download": "Télécharger",
      "nav.get_app": "Obtenir l'APK",

      "hero.pill": "Protocole Décentralisé GSM • 100% Hors-Ligne",
      "hero.title_part1": "Communiquez sans Internet.",
      "hero.title_part2": "Sans Serveur. Sans Traces.",
      "hero.subtitle": "La première plateforme sociale et de messagerie souveraine au monde propulsée par le réseau SMS GSM avec chiffrement de niveau militaire AES-256-GCM, Double Ratchet (PFS) et stéganographie invisible.",
      "hero.download_btn": "Télécharger ORBIS v1.1.0",
      "hero.guide_btn": "Explorer le Guide & FAQ",

      "badges.encryption_title": "AES-256-GCM & PFS",
      "badges.encryption_sub": "Double Ratchet Militaire",
      "badges.offline_title": "Zéro Dépendance Cloud",
      "badges.offline_sub": "GSM SMS P2P Direct",
      "badges.hardware_title": "Android KeyStore",
      "badges.hardware_sub": "Protection Matérielle",

      "features.tag": "PILIERS SOUVERAINS",
      "features.title": "L'Autonomie Numérique Réinventée",
      "features.desc": "Tout ce qu'un réseau social et une messagerie moderne offrent, sans aucun serveur tiers ni connexion Internet requise.",
      "features.f1_title": "Messagerie P2P & Double Ratchet",
      "features.f1_text": "Chaque message génère une nouvelle clé de dérivation via HMAC-SHA256 (PFS). Dès lecture, la clé est écrasée en mémoire vive (`fill(0)`).",
      "features.f2_title": "Notes Vocales & Waveform Interactive",
      "features.f2_text": "Compression ZLIB/Deflater ultra-dense, scrubbing dynamique au toucher et sélecteur de vitesse de lecture fluide (1.0x / 1.5x / 2.0x).",
      "features.f3_title": "Géolocalisation & Widget SOS",
      "features.f3_text": "Émission d'alerte de détresse avec coordonnées GPS vers vos cercles de confiance en 1 seul clic depuis l'écran d'accueil Android.",
      "features.f4_title": "Mur Social & Stories 24h Entre Amis",
      "features.f4_text": "Partagez vos pensées, sondages décentralisés et stories éphémères exclusivement avec vos amis confirmés et cercles de confiance, sans fuite vers vos contacts ordinaires.",
      "features.f7_title": "Appels Vocaux Chiffrés E2EE",
      "features.f7_text": "Signalisation GSM SMS hors-ligne, streaming audio direct AES-256-GCM, validation du code de sécurité SAS et bascule automatique vers appel GSM ordinaire en cas de solde SMS épuisé.",
      "features.f5_title": "Stéganographie SMS Invisible",
      "features.f5_text": "Dissimule les données chiffrées sous forme de caractères Unicode invisibles de largeur nulle au milieu de textes anodins (anti-censure).",
      "features.f6_title": "Coffre Chiffré V3 & Migration P2P",
      "features.f6_text": "Sauvegarde intégrale dérivée par PBKDF2 (100 000 itérations), nettoyage intelligent du stockage et migration entre smartphones sans le cloud.",

      "security.tag": "ARCHITECTURE FORTERESSE",
      "security.title": "Sécurité Multi-Couches en Profondeur",
      "security.desc": "Chaque couche d'ORBIS a été auditée et durcie pour résister à la rétro-ingénierie, aux écoutes réseau et aux extractions physiques.",
      "security.s1_title": "Chiffrement Asymétrique RSA-2048",
      "security.s1_text": "Paires de clés privées/publiques générées localement sur l'appareil. Signature cryptographique de chaque paquet pour garantir l'authenticité de l'expéditeur.",
      "security.s2_title": "Double Ratchet & Perfect Forward Secrecy",
      "security.s2_text": "Renouvellement automatique et irréversible des clés de session après chaque message. Même en cas de compromission physique, l'historique reste indéchiffrable.",
      "security.s3_title": "Stockage au Repos via Android KeyStore",
      "security.s3_text": "Les bases de données locales et fichiers sont scellés par une clé matérielle AES-GCM gérée dans la zone sécurisée TEE de votre processeur (anti-extraction ADB).",
      "security.s4_title": "Dérivation de Coffre PBKDF2 100k Itérations",
      "security.s4_text": "Vos archives `.orbis` résistent aux attaques par force brute grâce au hachage ralenti PBKDF2 combiné à un sel aléatoire cryptographique de 128 bits.",
      "security.s5_title": "Appels Vocaux Chiffrés & Code SAS",
      "security.s5_text": "Balisage sonore en streaming direct AES-256-GCM, authentification vocale par code court SAS anti-interception et coupure garantie sous 4.5s (Dead-Peer Watchdog).",

      "help.tag": "GUIDE COMPLET & CENTRE D'AIDE",
      "help.title": "Comment Fonctionne ORBIS ?",
      "help.desc": "Découvrez le guide officiel intégré dans l'application pour maîtriser l'ensemble des flux décentralisés.",
      "help.search_placeholder": "Rechercher un sujet (ex: hors-ligne, vocal, appel, clés, quota, sos)...",
      "help.cat_all": "Tous",
      "help.cat_start": "🚀 Démarrage",
      "help.cat_chat": "💬 Messagerie",
      "help.cat_calls": "📞 Appels",
      "help.cat_social": "👥 Réseau Social",
      "help.cat_sec": "🔐 Sécurité",
      "help.cat_sys": "⚙️ Système & GSM",

      "topics.t1_title": "Comment ORBIS fonctionne-t-il à 100% hors-ligne ?",
      "topics.t1_content": "ORBIS n'utilise aucun serveur cloud, API ou passerelle Web. Toutes les communications transitent directement via le réseau téléphonique cellulaire (GSM SMS). Vos messages et publications sont segmentés, compressés et chiffrés avant d'être envoyés directement de smartphone à smartphone.",
      "topics.t2_title": "Comment fonctionne l'appairage et l'échange de clés de sécurité ?",
      "topics.t2_content": "Lors de la première prise de contact, les utilisateurs s'échangent leurs clés publiques de chiffrement soit par QR Code direct (instantané et hors-ondes), soit par SMS d'invitation sécurisé automatique. Une fois la clé validée, un canal chiffré de bout en bout inviolable est établi.",
      "topics.t3_title": "Comment fonctionnent les notes vocales par SMS ?",
      "topics.t3_content": "L'enregistreur audio capture votre voix avec un codec vocal ultra-optimisé (AMR/AAC) et applique une compression Deflater ZLIB. L'application découpe ensuite le fichier audio en fragments SMS compacts et le reconstitue instantanément chez le destinataire avec une barre de lecture interactive (1.0x / 1.5x / 2.0x).",
      "topics.t_call_e2ee_title": "Comment fonctionnent les appels vocaux chiffrés E2EE ?",
      "topics.t_call_e2ee_content": "L'initiation de l'appel utilise une trame SMS de signalisation compacte (Offre ORB:CO:). À l'acceptation (ORB:CA:), un canal de streaming audio direct chiffré en AES-256-GCM est ouvert en peer-to-peer, sans aucun serveur intermédiaire et protégé contre toute interception réseau.",
      "topics.t_call_credit_title": "Que se passe-t-il si un utilisateur n'a pas de crédit SMS lors d'un appel ?",
      "topics.t_call_credit_content": "Si l'appelant n'a pas de crédit SMS, ORBIS détecte immédiatement l'échec et propose de basculer vers un appel GSM standard. Si le destinataire n'a pas de SMS pour émettre la réponse chiffrée, il peut décrocher en mode GSM classique (100% gratuit pour lui en réception), tout en prévenant l'appelant.",
      "topics.t_call_sas_title": "Qu'est-ce que le code SAS pendant l'appel vocal ?",
      "topics.t_call_sas_content": "Le code SAS (Short Authentication String) est dérivé des empreintes cryptographiques de la session et s'affiche sur les deux écrans. En lisant ce court code à voix haute, les deux correspondants vérifient mutuellement et mathématiquement l'absence totale d'espion intermédiaire (MITM) ou de fausses antennes relais.",
      "topics.t_call_hangup_title": "Comment est garanti le raccrochage et la fin d'appel ?",
      "topics.t_call_hangup_content": "Lors de la coupure, ORBIS envoie des paquets UDP de fermeture immédiate, un SMS d'arrêt (ORB:CE:) et active un chien de garde (Dead-Peer Watchdog). En cas de perte soudaine de couverture, la session est automatiquement fermée après 4.5 secondes de silence pour préserver la batterie et la confidentialité.",
      "topics.t4_title": "Le partage GPS nécessite-t-il une connexion Data mobile ?",
      "topics.t4_content": "Non ! La puce GPS satellite de votre smartphone fonctionne sans connexion Internet ni données mobiles. ORBIS lit vos coordonnées satellite exactes et les transmet dans un SMS chiffré de 1 seul segment, ouvrant directement la carte chez votre contact.",
      "topics.t5_title": "Comment fonctionne le mur social et la diffusion exclusivement Entre Amis ?",
      "topics.t5_content": "Le mur social et les stories 24h fonctionnent en réseau P2P décentralisé exclusivement entre amis confirmés et cercles de confiance. Vos publications et sondages ne sont transmis qu'à vos pairs autorisés via GSM P2P, garantissant zéro diffusion intempestive vers vos contacts téléphoniques ordinaires.",
      "topics.t6_title": "Comment la Stéganographie protège-t-elle contre la censure ?",
      "topics.t6_content": "La stéganographie dissimule la charge utile binaire chiffrée sous forme de caractères Unicode invisibles (largeur zéro) insérés dans une phrase d'apparence totalement banale. Pour un opérateur ou un tiers espion, le SMS ressemble à une conversation ordinaire.",
      "topics.t7_title": "Quelle est la consommation réelle de mon forfait SMS ?",
      "topics.t7_content": "Un message texte standard, un emoji de réaction, un partage GPS ou une mise à jour de statut ne consomment que 1 seul SMS. Aucun SMS n'est émis en tâche de fond (0 keep-alive). Sur un forfait avec SMS illimités, l'impact est totalement nul et transparent.",

      "quota.tag": "TRANSPARENCE GSM",
      "quota.title": "Consommation & Sobriété du Quota SMS",
      "quota.desc": "ORBIS compresse chaque paquet à l'octet près pour offrir un ratio coût/résilience optimal.",
      "quota.th_action": "Action Réalisée",
      "quota.th_cost": "Coût SMS",
      "quota.th_details": "Détails Techniques",
      "quota.row1_desc": "Chiffré AES-256-GCM + signature + compression ZLIB",
      "quota.row_call_desc": "Échange des clés de session via SMS GSM • 0 SMS consommé pendant l'appel audio",
      "quota.row2_desc": "Coordonnées ultra-compactes ~40 octets",
      "quota.row3_desc": "Trame d'acquittement allégée et directe",
      "quota.row4_desc": "Envoi P2P souverain direct à chaque membre du groupe",
      "quota.row5_desc": "Flux audio binaire AMR/AAC compressé en multi-segments",

      "dl.title": "Téléchargez ORBIS dès Aujourd'hui",
      "dl.desc": "Prenez le contrôle absolu de votre vie privée. Installez l'application souveraine sans passer par les magasins centralisés.",
      "dl.btn_apk": "Télécharger l'APK Officiel",
      "dl.qr_badge": "Scan Rapide",
      "dl.qr_title": "Installation Directe Smartphone",
      "dl.qr_desc": "Scannez ce QR Code avec l'appareil photo de votre smartphone Android pour lancer le téléchargement immédiat.",

      "footer.tagline": "Architecture de communication souveraine, P2P et hors-ligne propulsée par ShaDevPro."
    },

    en: {
      "nav.features": "Features",
      "nav.security": "Security & PFS",
      "nav.help": "Help Center",
      "nav.quota": "GSM Quota",
      "nav.download": "Download",
      "nav.get_app": "Get APK",

      "hero.pill": "Decentralized GSM Protocol • 100% Offline",
      "hero.title_part1": "Communicate Without Internet.",
      "hero.title_part2": "Zero Cloud. Zero Traces.",
      "hero.subtitle": "The world's first sovereign P2P social and encrypted messaging platform powered by GSM SMS network with military-grade AES-256-GCM, Double Ratchet (PFS), and invisible steganography.",
      "hero.download_btn": "Download ORBIS v1.1.0",
      "hero.guide_btn": "Explore Guide & FAQ",

      "badges.encryption_title": "AES-256-GCM & PFS",
      "badges.encryption_sub": "Military Double Ratchet",
      "badges.offline_title": "Zero Cloud Dependency",
      "badges.offline_sub": "Direct GSM SMS P2P",
      "badges.hardware_title": "Android KeyStore",
      "badges.hardware_sub": "Hardware-Backed Security",

      "features.tag": "SOVEREIGN PILLARS",
      "features.title": "Digital Autonomy Reinvented",
      "features.desc": "Everything a modern social network and messenger offers, with zero third-party servers and zero internet required.",
      "features.f1_title": "P2P Messaging & Double Ratchet",
      "features.f1_text": "Every message derives a new single-use key via HMAC-SHA256 (PFS). Ephemeral keys are instantly destroyed in memory (`fill(0)`).",
      "features.f2_title": "Voice Notes & Interactive Waveform",
      "features.f2_text": "Ultra-dense ZLIB compression, touch scrubbing, and smooth playback speed switching (1.0x / 1.5x / 2.0x).",
      "features.f3_title": "GPS Sharing & SOS Emergency Widget",
      "features.f3_text": "Broadcast distress alerts with satellite coordinates to trusted circles in 1 tap directly from the Android home screen.",
      "features.f4_title": "P2P Social Feed & 24h Stories (Friends-Only)",
      "features.f4_text": "Share posts, decentralized polls, and ephemeral stories exclusively with confirmed friends and trusted circles without ordinary contact leakage.",
      "features.f7_title": "Encrypted E2EE Voice Calls",
      "features.f7_text": "Offline GSM SMS signaling, direct AES-256-GCM audio streaming, SAS security code verification, and automatic fallback to standard GSM cellular voice when SMS credits are depleted.",
      "features.f5_title": "Invisible SMS Steganography",
      "features.f5_text": "Camouflages encrypted binary payloads as zero-width invisible Unicode characters inside ordinary plain text.",
      "features.f6_title": "V3 Encrypted Vault & P2P Migration",
      "features.f6_text": "Full PBKDF2 (100k iterations) backup, smart storage cleaner, and phone-to-phone migration without the cloud.",

      "security.tag": "FORTRESS ARCHITECTURE",
      "security.title": "Deep Multi-Layer Defense",
      "security.desc": "Every layer of ORBIS is hardened to resist reverse-engineering, network eavesdropping, and physical extraction.",
      "security.s1_title": "RSA-2048 Asymmetric Cryptography",
      "security.s1_text": "Private/public key pairs generated on-device. Cryptographic signing of every packet guarantees authenticity.",
      "security.s2_title": "Double Ratchet & Perfect Forward Secrecy",
      "security.s2_text": "Automatic ratchet renewal of session keys. Past and future conversations remain unbreakable even after key theft.",
      "security.s3_title": "At-Rest Storage via Android KeyStore",
      "security.s3_text": "Local databases and app files are sealed by a hardware AES-GCM master key managed in the TEE enclave.",
      "security.s4_title": "PBKDF2 100k Iterations Vault Derivation",
      "security.s4_text": "Your `.orbis` vault archives resist brute-force attacks thanks to slow PBKDF2 hashing and a 128-bit random salt.",
      "security.s5_title": "Encrypted Voice Calls & SAS Code",
      "security.s5_text": "Direct AES-256-GCM audio streaming, verbal SAS verification against MITM interception, and guaranteed termination under 4.5s (Dead-Peer Watchdog).",

      "help.tag": "COMPREHENSIVE GUIDE & HELP CENTER",
      "help.title": "How Does ORBIS Work?",
      "help.desc": "Discover the official in-app guide to master all decentralized and offline communication flows.",
      "help.search_placeholder": "Search topics (e.g. offline, voice, call, keys, quota, sos)...",
      "help.cat_all": "All",
      "help.cat_start": "🚀 Getting Started",
      "help.cat_chat": "💬 Messaging",
      "help.cat_calls": "📞 Voice Calls",
      "help.cat_social": "👥 Social Network",
      "help.cat_sec": "🔐 Security",
      "help.cat_sys": "⚙️ System & GSM",

      "topics.t1_title": "How does ORBIS operate 100% offline?",
      "topics.t1_content": "ORBIS uses zero cloud servers, APIs, or web relays. All communications flow directly over the cellular network (GSM SMS). Messages and posts are chunked, compressed, and encrypted before direct peer-to-peer transmission.",
      "topics.t2_title": "How does key pairing and exchange work?",
      "topics.t2_content": "On first contact, peers exchange public keys via offline QR Code scan or automated secure SMS handshake. Once verified, an impenetrable end-to-end encrypted channel is created.",
      "topics.t3_title": "How do voice notes over SMS work?",
      "topics.t3_content": "The audio recorder captures voice in high compression (AMR/AAC) and applies Deflater ZLIB. ORBIS chunks the binary audio into SMS fragments, reconstructed instantly on playback.",
      "topics.t_call_e2ee_title": "How do E2EE encrypted voice calls work?",
      "topics.t_call_e2ee_content": "Call initiation uses an ultra-compact signaling SMS frame (Offer ORB:CO:). Upon accept (ORB:CA:), a direct peer-to-peer audio stream encrypted with AES-256-GCM is opened without intermediary servers, immune to eavesdropping.",
      "topics.t_call_credit_title": "What happens if a user has 0 SMS credit during a call?",
      "topics.t_call_credit_content": "If the caller has no SMS credit, ORBIS instantly detects delivery failure and offers fallback to a standard GSM call. If the receiver has 0 SMS to transmit the answer key, they can answer as a standard cellular GSM call (100% free for them to receive) while alerting the caller.",
      "topics.t_call_sas_title": "What is the SAS security code during a voice call?",
      "topics.t_call_sas_content": "The Short Authentication String (SAS) code is derived from session crypto fingerprints and shown on both screens. Reading this short code aloud mathematically confirms zero intermediary wiretapping (MITM) or rogue cellular towers.",
      "topics.t_call_hangup_title": "How is reliable hangup and call termination guaranteed?",
      "topics.t_call_hangup_content": "Upon ending a call, ORBIS transmits rapid UDP termination bursts, a teardown SMS (ORB:CE:), and activates a Dead-Peer watchdog. In case of network drop, the session terminates automatically after 4.5 seconds of silence to preserve battery and privacy.",
      "topics.t4_title": "Does GPS location sharing require mobile data?",
      "topics.t4_content": "No! Satellite GPS hardware works without mobile internet or data SIMs. ORBIS extracts coordinates and transmits them in a single encrypted SMS opening maps directly.",
      "topics.t5_title": "How does the Friends-Only social feed operate?",
      "topics.t5_content": "The social wall and 24h stories operate in a decentralized P2P network strictly between confirmed friends and trusted circles. Your posts and polls are sent only to authorized peers via GSM P2P with zero spam to ordinary phone contacts.",
      "topics.t6_title": "How does Steganography protect against censorship?",
      "topics.t6_content": "Steganography conceals encrypted payloads into zero-width invisible Unicode characters inside innocuous sentences, looking like normal SMS to carriers.",
      "topics.t7_title": "What is the actual GSM SMS quota consumption?",
      "topics.t7_content": "Standard text, reactions, GPS shares, or status updates take only 1 single SMS. Zero background keep-alive messages. On unlimited SMS plans, impact is completely zero.",

      "quota.tag": "GSM TRANSPARENCY",
      "quota.title": "SMS Quota Consumption & Efficiency",
      "quota.desc": "ORBIS compresses every packet to the byte to deliver maximum resilience and cost efficiency.",
      "quota.th_action": "Action Performed",
      "quota.th_cost": "SMS Cost",
      "quota.th_details": "Technical Details",
      "quota.row1_desc": "AES-256-GCM + signature + ZLIB compression",
      "quota.row_call_desc": "Session key exchange via GSM SMS • 0 SMS consumed during audio stream conversation",
      "quota.row2_desc": "Ultra-compact coordinates ~40 bytes",
      "quota.row3_desc": "Lightweight single-frame ACK packet",
      "quota.row4_desc": "Direct P2P delivery to each circle member",
      "quota.row5_desc": "Binary audio compressed in multi-part fragments",

      "dl.title": "Download ORBIS Today",
      "dl.desc": "Take absolute control over your digital privacy. Install the sovereign app directly without centralized stores.",
      "dl.btn_apk": "Download Official APK",
      "dl.qr_badge": "Quick Scan",
      "dl.qr_title": "Direct Mobile Install",
      "dl.qr_desc": "Scan this QR Code with your Android camera to start instant download.",

      "footer.tagline": "Sovereign, P2P, and offline communication architecture powered by ShaDevPro."
    },

    ar: {
      "nav.features": "المميزات",
      "nav.security": "الأمان و PFS",
      "nav.help": "مركز المساعدة",
      "nav.quota": "استهلاك الرسائل",
      "nav.download": "تحميل التطبيق",
      "nav.get_app": "تحميل APK",

      "hero.pill": "بروتوكول لامركزي GSM • يعمل 100% بدون إنترنت",
      "hero.title_part1": "تواصل بلا إنترنت.",
      "hero.title_part2": "بلا خوادم. بلا أثر.",
      "hero.subtitle": "أول منصة تواصل اجتماعي ومراسلة سيادية من نظير إلى نظير (P2P) في العالم تعمل عبر شبكة الرسائل القصيرة SMS مع تشفير عسكري AES-256-GCM وبروتوكول Double Ratchet وإخفاء البيانات غير المرئي.",
      "hero.download_btn": "تحميل ORBIS v1.1.0",
      "hero.guide_btn": "دليل الاستخدام والأسئلة الشائعة",

      "badges.encryption_title": "تشفير عسكري AES-256",
      "badges.encryption_sub": "بروتوكول Double Ratchet PFS",
      "badges.offline_title": "استقلال تام عن السحابة",
      "badges.offline_sub": "اتصال مباشر P2P عبر GSM",
      "badges.hardware_title": "حماية عتادية KeyStore",
      "badges.hardware_sub": "حماية مدمجة بالمعالج",

      "features.tag": "الأركان السيادية",
      "features.title": "إعادة ابتكار الاستقلالية الرقمية",
      "features.desc": "كل ما تقدمه شبكات التواصل والمراسلة الحديثة، دون الحاجة لأي خادم وسيط أو اتصال بالإنترنت.",
      "features.f1_title": "مراسلة P2P مع Double Ratchet",
      "features.f1_text": "توليد مفتاح جلسة جديد لكل رسالة عبر HMAC-SHA256 مع إتلاف فوري للمفاتيح في الذاكرة بعد القراءة (`fill(0)`).",
      "features.f2_title": "رسائل صوتية ومخطط تفاعلي",
      "features.f2_text": "ضغط فائق ZLIB، تصفح دقيق باللمس مع خيارات سرعة تشغيل ديناميكية (1.0x / 1.5x / 2.0x).",
      "features.f3_title": "مشاركة الموقع وزر الطوارئ SOS",
      "features.f3_text": "إرسال نداء استغاثة مع إحداثيات GPS المباشرة لدوائر الثقة بنقرة واحدة من الشاشة الرئيسية.",
      "features.f4_title": "جدار اجتماعي وقصص 24 ساعة حصرياً بين الأصدقاء",
      "features.f4_text": "شارك المنشورات واستطلاعات الرأي والقصص المؤقتة حصرياً مع أصدقائك المؤكدين ودوائر الثقة دون تسريب لجهات اتصال هاتفك الأخرى.",
      "features.f7_title": "مكالمات صوتية مشفرة E2EE",
      "features.f7_text": "إشارات خلوية عبر SMS بدون إنترنت، بث صوتي مباشر مشفر بـ AES-256-GCM، توثيق برمز SAS وتحويل مجاني لمكالمات GSM عند انعدام رصيد الرسائل.",
      "features.f5_title": "إخفاء البيانات غير المرئي (Steganography)",
      "features.f5_text": "إخفاء الحزم المشفرة داخل نصوص عادية باستخدام أحرف يونيكود خفية عديمة العرض لتفادي الرقابة.",
      "features.f6_title": "خزنة مشفرة V3 وترحيل مباشر",
      "features.f6_text": "نسخ احتياطي فائق الأمان عبر PBKDF2 (100 ألف دورة)، تنظيف تلقائي وترحيل البيانات بين الهواتف بدون سحابة.",

      "security.tag": "بنية الحصن الرقمي",
      "security.title": "أمان متعدد الطبقات في العمق",
      "security.desc": "تم تصميم وتدقيق كل طبقة في ORBIS لمقاومة الهندسة العكسية والتنصت واستخراج البيانات المادي.",
      "security.s1_title": "تشفير غير متناظر RSA-2048",
      "security.s1_text": "توليد مفاتيح التشفير محلياً على الهاتف وتوقيع رقمي لكل حزمة لضمان هوية المرسل بدقة.",
      "security.s2_title": "بروتوكول Double Ratchet وسرية مستقبلية",
      "security.s2_text": "تجديد تلقائي وغير قابل للعكس لمفاتيح الجلسة، مما يجعل المحادثات السابقة والمستقبلية غير قابلة للاختراق.",
      "security.s3_title": "تخزين محمي عبر Android KeyStore",
      "security.s3_text": "حماية قواعد البيانات والملفات المحلية بمفتاح رئيسي عتادي داخل بيئة المعالج الآمنة TEE.",
      "security.s4_title": "اشتقاق الخزنة عبر PBKDF2",
      "security.s4_text": "حماية الأرشيفات ضد هجمات التخمين بفضل 100 ألف تكرار هاش وملح عشوائي 128 بت.",
      "security.s5_title": "مكالمات صوتية مشفرة ورمز SAS",
      "security.s5_text": "بث صوتي مباشر مشفر بتقنية AES-256-GCM، مطابقة شفهية لرمز SAS لمنع التنصت وضمان إنهاء المكالمة خلال 4.5 ثوانٍ.",

      "help.tag": "دليل الاستخدام ومركز المعرفة",
      "help.title": "كيف يعمل تطبيق ORBIS؟",
      "help.desc": "اكتشف الدليل الرسمي المدمج داخل التطبيق للتحكم بجميع مسارات التواصل اللامركزي.",
      "help.search_placeholder": "ابحث في المواضيع (مثال: بدون نت، مكالمات، صوتي، مفاتيح، رسائل، طوارئ)...",
      "help.cat_all": "الكل",
      "help.cat_start": "🚀 البداية",
      "help.cat_chat": "💬 المراسلة",
      "help.cat_calls": "📞 المكالمات",
      "help.cat_social": "👥 التواصل الاجتماعي",
      "help.cat_sec": "🔐 الأمان",
      "help.cat_sys": "⚙️ النظام و GSM",

      "topics.t1_title": "كيف يعمل ORBIS بدون إنترنت بنسبة 100%؟",
      "topics.t1_content": "لا يستخدم ORBIS أي خوادم سحابية أو واجهات ويب. تتم جميع الاتصالات عبر شبكة الهواتف المحمولة التقليدية (GSM SMS). يتم تقسيم الرسائل وضغطها وتشفيرها لتنتقل مباشرة من هاتف إلى هاتف.",
      "topics.t2_title": "كيف يتم تبادل مفاتيح الأمان والاقتران؟",
      "topics.t2_content": "عند أول تواصل، يتبادل المستخدمون المفاتيح العامة إما بمسح رمز QR المباشر بدون شبكة، أو عبر رسالة SMS ترحيبية مشفرة. بمجرد التوثيق، يتم فتح قناة آمنة تماماً.",
      "topics.t3_title": "كيف تعمل الرسائل الصوتية عبر SMS؟",
      "topics.t3_content": "يقوم المسجل بالتقاط الصوت بترميز عالي الكفاءة (AMR/AAC) وضغطه عبر ZLIB. يوزع التطبيق الملف الصوتي على أجزاء SMS ويعيد تجميعه فوراً عند المستلم مع شريط تحكم متقدم.",
      "topics.t_call_e2ee_title": "كيف تعمل المكالمات الصوتية المشفرة (E2EE)؟",
      "topics.t_call_e2ee_content": "يقوم Orbis ببدء المكالمة الصوتية عبر رسالة SMS مضغوطة للغاية (عرض الاتصال ORB:CO:). عند قبول الطرف الآخر (ORB:CA:)، يتم إنشاء بث صوتي مباشر ومشفر بـ AES-256-GCM بدون خوادم وسيطة ومع حماية تامة ضد التنصت.",
      "topics.t_call_credit_title": "ماذا يحدث عند انعدام رصيد رسائل SMS أثناء الاتصال؟",
      "topics.t_call_credit_content": "إذا نفد رصيد المتصل، يكتشف Orbis فشل الإرسال فورياً ويعرض التحويل لاتصال GSM عادي. وإذا كان رصيد المستلم منعدماً لإرسال مفتاح الرد، يمكنه استقبال المكالمة كخط GSM قياسي (مجاني 100% له) مع إشعار المتصل فورياً.",
      "topics.t_call_sas_title": "ما هو رمز الأمان SAS أثناء المكالمة الصوتية؟",
      "topics.t_call_sas_content": "رمز SAS هو كود مشتق فريد يظهر أعلى شاشة الاتصال. بمجرد قراءته ومقارنته صوتياً مع الطرف الآخر، يتأكد كلا الطرفين رياضياً من استحالة وجود أي وسيط متنصت أو أبراج خلوية مزيفة.",
      "topics.t_call_hangup_title": "كيف يعمل إنهاء المكالمة وضمان إغلاق الخط؟",
      "topics.t_call_hangup_content": "عند الضغط على إنهاء المكالمة، يرسل Orbis حزم إغلاق فورية عبر مسار مخصص، ويرسل رسالة إنهاء SMS (ORB:CE:) مع تفعيل مراقب الاتصال. في حال انقطاع التغطية، يتم إنهاء الجلسة تلقائياً خلال 4.5 ثانية لحماية البطارية والخصوصية.",
      "topics.t4_title": "هل تتطلب مشاركة الموقع GPS بيانات الهاتف؟",
      "topics.t4_content": "كلا! تعمل شريحة الأقمار الصناعية GPS بدون أي إنترنت. يقرأ التطبيق الإحداثيات ويرسلها مشفرة في رسالة قصيرة واحدة فقط لتفتح الخريطة مباشرة عند الطرف الآخر.",
      "topics.t5_title": "كيف تعمل الشبكة الاجتماعية والقصص حصرياً بين الأصدقاء؟",
      "topics.t5_content": "يعمل الحائط الاجتماعي والقصص لمدة 24 ساعة مباشرة بين الهواتف (P2P) حصرياً بين الأصدقاء المؤكدين ودوائر الثقة. تُرسل منشوراتك واستطلاعات الرأي فقط لأصدقائك المقبولين عبر GSM P2P دون تخزين مركزي أو إزعاج لجهات اتصال هاتفك الأخرى.",
      "topics.t6_title": "كيف تحمي تقنية الإخفاء (Steganography) من الرقابة؟",
      "topics.t6_content": "تقوم التقنية بإخفاء الحزمة المشفرة داخل جملة عادية جداً كأحرف غير مرئية. تبدو الرسالة لشركات الاتصالات أو المراقبين كحديث يومي عادي.",
      "topics.t7_title": "كم يستهلك التطبيق من رصيد الرسائل القصيرة؟",
      "topics.t7_content": "الرسائل النصية، التفاعلات، مشاركة الموقع وتحديثات الحالة تستهلك رسالة SMS واحدة فقط. لا توجد أي رسائل خفية في الخلفية. مع الباقات غير المحدودة يكون التأثير معدوماً تماماً.",

      "quota.tag": "الشفافية في استهلاك الشبكة",
      "quota.title": "استهلاك باقة الرسائل القصيرة",
      "quota.desc": "يضغط ORBIS كل حزمة بأعلى كفاءة لتوفير استهلاك الرصيد مع أقصى درجات الحماية.",
      "quota.th_action": "العملية",
      "quota.th_cost": "التكلفة",
      "quota.th_details": "التفاصيل التقنية",
      "quota.row1_desc": "تشفير AES-256 + توقيع + ضغط ZLIB",
      "quota.row_call_desc": "تبادل مفاتيح الجلسة عبر GSM SMS • صفر رسائل مستهلكة أثناء المكالمة الصوتية",
      "quota.row2_desc": "إحداثيات فائقة الصغر ~40 بايت",
      "quota.row3_desc": "حزمة إشعار استلام مفردة وخفيفة",
      "quota.row4_desc": "إرسال مباشر P2P لكل عضو في المجموعة",
      "quota.row5_desc": "ملف صوتي ثنائي مضغوط متعدد الأجزاء",

      "dl.title": "حمّل تطبيق ORBIS الآن",
      "dl.desc": "امتلك سيادتك الرقمية وخصوصيتك المطلقة. ثبت التطبيق مباشرة دون الاعتماد على المتاجر المركزية.",
      "dl.btn_apk": "تحميل ملف APK الرسمي",
      "dl.qr_badge": "مسح سريع",
      "dl.qr_title": "تثبيت مباشر على الهاتف",
      "dl.qr_desc": "امسح رمز الاستجابة السريعة بكاميرا هاتفك لبدء التحميل الفوري.",

      "footer.tagline": "بنية اتصالات سيادية ولامركزية بدون إنترنت مطورة بواسطة ShaDevPro."
    }
  };

  // =========================================================================
  // 2. Language Switcher Logic & RTL Handling
  // =========================================================================
  let currentLang = 'fr';

  function applyLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;

    // Set HTML attribute & RTL
    document.documentElement.lang = lang;
    if (lang === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
    }

    // Update Text Elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Update Placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (translations[lang][key]) {
        el.setAttribute('placeholder', translations[lang][key]);
      }
    });

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    localStorage.setItem('orbis_lang', lang);
  }

  // Bind Language Switcher Buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      applyLanguage(lang);
    });
  });

  // Restore saved language preference
  const savedLang = localStorage.getItem('orbis_lang') || 'fr';
  applyLanguage(savedLang);

  // =========================================================================
  // 3. Theme Toggle (Dark / Light)
  // =========================================================================
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = themeToggle?.querySelector('.theme-icon');

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (themeIcon) {
      themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
    }
    localStorage.setItem('orbis_theme', theme);
  }

  const savedTheme = localStorage.getItem('orbis_theme') || 'light';
  setTheme(savedTheme);

  themeToggle?.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  });

  // =========================================================================
  // 4. Mobile Navigation Menu Toggle
  // =========================================================================
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  mobileToggle?.addEventListener('click', () => {
    const isOpen = navMenu?.classList.toggle('open');
    mobileToggle.classList.toggle('active', isOpen);
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu?.classList.remove('open');
      mobileToggle?.classList.remove('active');
    });
  });

  // =========================================================================
  // 5. Help Center Accordion & Filtering
  // =========================================================================
  const accordionItems = document.querySelectorAll('.accordion-item');
  const categoryPills = document.querySelectorAll('.category-pills .pill');
  const helpSearchInput = document.getElementById('helpSearch');

  // Accordion Toggle
  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const body = item.querySelector('.accordion-body');

    header?.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Close other accordions
      accordionItems.forEach(other => {
        other.classList.remove('active');
        const otherBody = other.querySelector('.accordion-body');
        if (otherBody) otherBody.style.maxHeight = null;
      });

      // Toggle current
      if (!isOpen && body) {
        item.classList.add('active');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });

  // Filter and Search Logic
  function filterHelpTopics() {
    const query = helpSearchInput?.value.toLowerCase().trim() || '';
    const activePill = document.querySelector('.category-pills .pill.active');
    const selectedCategory = activePill?.getAttribute('data-cat') || 'all';

    accordionItems.forEach(item => {
      const itemCat = item.getAttribute('data-category');
      const title = item.querySelector('.acc-title')?.textContent.toLowerCase() || '';
      const content = item.querySelector('.accordion-body p')?.textContent.toLowerCase() || '';

      const matchesCat = (selectedCategory === 'all') || (itemCat === selectedCategory);
      const matchesQuery = (query === '') || (title.includes(query) || content.includes(query));

      if (matchesCat && matchesQuery) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  // Category Pill Click
  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      filterHelpTopics();
    });
  });

  // Search Input Event
  helpSearchInput?.addEventListener('input', filterHelpTopics);

  // =========================================================================
  // 6. Direct Download & QR Code Dynamic Configuration
  // =========================================================================
  const ORBIS_CONFIG = {
    apkDownloadUrl: "https://github.com/ShaDevPro/Orbis/releases/latest/download/Orbis-release.apk",
    githubRepoUrl: "https://github.com/ShaDevPro/Orbis",
    version: "1.1.0",
    build: 110,
    size: "~4.8 Mo"
  };

  function updateDownloadUrls(url) {
    const qrImg = document.getElementById('apkQrCodeImg');
    const directBtn = document.getElementById('directDownloadBtn');
    if (qrImg) {
      qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(url)}&margin=8&color=06B6D4`;
    }
    if (directBtn) {
      directBtn.href = url;
    }
  }

  // Initialize with release URL (can be swapped instantly upon hosting)
  updateDownloadUrls(ORBIS_CONFIG.apkDownloadUrl);

  const directDownloadBtn = document.getElementById('directDownloadBtn');
  directDownloadBtn?.addEventListener('click', () => {
    console.log('[Orbis] Download APK triggered:', ORBIS_CONFIG.apkDownloadUrl);
  });

  // Open first accordion by default
  if (accordionItems.length > 0) {
    const firstBody = accordionItems[0].querySelector('.accordion-body');
    accordionItems[0].classList.add('active');
    if (firstBody) firstBody.style.maxHeight = firstBody.scrollHeight + 'px';
  }
});
