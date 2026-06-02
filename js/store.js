/* ===== Matrix Tires — Store JS ===== */

// ── Language / i18n ───────────────────────────────────────────────────────────
const i18n = {
  en: {
    // Nav
    nav_shop: 'Shop Tires', nav_brands: 'Brands', nav_services: 'Services', nav_contact: 'Contact',
    // Drawer
    drawer_home: '🏠 Home', drawer_shop: '🛞 Shop Tires', drawer_brands: '🏷️ Brands',
    drawer_services: '🔧 Services', drawer_quote: '📋 Get a Quote',
    // Hero
    hero_badge: '🔴 New &amp; Used Tires In Stock',
    hero_title: 'Find Your<br/><span class="hero-accent">Perfect Tire</span>',
    hero_sub: 'Search by size, brand, or category. New and used tires at unbeatable prices with expert installation.',
    tab_size: '🔍 By Tire Size', tab_vehicle: '🚗 By Vehicle',
    lbl_width: 'Width', lbl_aspect: 'Aspect Ratio', lbl_rim: 'Rim Size',
    lbl_make: 'Make', lbl_model: 'Model', lbl_year: 'Year',
    btn_search: 'Search →',
    hvt_headline: 'Shop New &amp; Used Tires<br>for Cars, Trucks &amp; SUVs',
    hvt_body: 'Get the best tires for your vehicle at Matrix Tires. From all-season to performance, we have a wide selection of brands and sizes to fit your needs.',
    // Tire diagram
    tsd_title: 'How to read your tire size',
    tsd_caption: "Look for the numbers printed on your tire's sidewall — they tell you the exact size you need.",
    // Trust strip
    trust_1: '✅ Price Match Guarantee', trust_2: '🚗 Mobile Installation Available',
    trust_3: '⚡ Same-Day Service', trust_4: '🔒 Quality Guaranteed',
    // Promo
    promo_badge: 'LIMITED TIME OFFER',
    promo_headline: 'Buy 4 Tires, Get <span class="promo-highlight">Free Installation</span>',
    promo_sub: 'Professional mounting & balancing included — no hidden fees',
    promo_expires: 'Offer expires <strong>June 26, 2026</strong>',
    promo_cta: 'Claim Offer →',
    // Showcase
    showcase_eyebrow: 'What We Carry', showcase_title: 'Shop by Tire Type', showcase_shop_now: 'Shop Now →',
    sc_allseason_label: 'All-Season', sc_allseason_desc: 'Year-round grip for everyday driving',
    sc_winter_label: 'Winter / Snow', sc_winter_desc: 'Maximum traction in ice and snow',
    sc_perf_label: 'Performance', sc_perf_desc: 'High-speed handling and precision',
    sc_truck_label: 'Truck / SUV', sc_truck_desc: 'Heavy-duty tires for trucks and SUVs',
    sc_used_label: 'Used Tires', sc_used_desc: 'Quality-inspected, budget-friendly options',
    // About
    about_eyebrow: 'Our Story',
    about_title: 'Built on Roads,<br/><span style="color:var(--accent)">Driven by Trust</span>',
    about_body1: 'Matrix Tires was born from a simple idea: every driver deserves quality tires at a fair price, with service that actually comes to <em>them</em>. What started as a mobile tire operation out of a single van has grown into a full-service tire business serving Manassas, VA and the surrounding communities.',
    about_body2: "Over the years we've mounted, balanced, and repaired thousands of tires — from everyday commuters to heavy-duty trucks. We carry both new and used tires because we believe getting safe on the road shouldn't cost a fortune.",
    pillar1_title: 'Community First', pillar1_text: 'Local, family-run, and proud of it. We treat every customer like a neighbor.',
    pillar2_title: 'Honest Pricing', pillar2_text: 'No hidden fees. No upsells. Just the best price we can offer, every time.',
    pillar3_title: 'Fast Turnaround', pillar3_text: 'Same-day service available. We know your time matters.',
    stat1_label: 'Years in Business', stat2_label: 'Tires Installed', stat3_label: 'Happy Customers', stat4_label: 'Days a Week',
    // Why
    why_eyebrow: 'Why Matrix Tires',
    why_title: 'The Difference Is<br/>In the Details',
    why1_title: 'New &amp; Used Options', why1_body: 'We stock both new and quality-checked used tires so every budget can drive away safely.',
    why2_title: 'Mobile Service', why2_body: "Can't come to us? We bring the shop right to your driveway, workplace, or roadside.",
    why3_title: 'Price Match', why3_body: "Found it cheaper elsewhere? Show us and we'll beat or match the price — guaranteed.",
    why4_title: 'Quality Inspected', why4_body: 'Every used tire is hand-inspected for tread depth, sidewall integrity, and safety before it hits our shelves.',
    why5_title: 'Flexible Scheduling', why5_body: 'Open Monday through Sunday. Book same-day or plan ahead — we work around your schedule.',
    why6_title: 'Real Support', why6_body: "Talk to a real person, not a chatbot. Call or text us and we'll answer your questions directly.",
    // CTA
    cta_heading: 'Ready to Roll?',
    cta_sub: 'Browse our live inventory or get a free quote in minutes. Same-day service available.',
    cta_btn_primary: 'Shop Tires →', cta_btn_secondary: 'Get a Free Quote',
    // Reviews
    reviews_eyebrow: 'What Customers Say', reviews_title: 'Real Reviews',
    review1_text: '"Fast service and great prices! They came to my house and had all four tires changed in under an hour. Will definitely be coming back."',
    review2_text: '"I needed a tire last minute on a Sunday and they showed up same day. Super professional and affordable. Highly recommend Matrix Tires!"',
    review3_text: '"Got a used tire for my SUV at a fraction of the cost. They inspected it right in front of me and explained everything. Honest and trustworthy."',
    review4_text: '"Best tire shop around! Price matched a competitor without me even asking. Quick install and the balancing made a huge difference in my ride."',
    reviews_leave_btn: 'Leave Us a Review on Facebook →',
    // FAQ
    faq_eyebrow: 'Got Questions?', faq_title: 'Frequently Asked Questions',
    faq_sub_html: 'Still have questions? Call us directly at <a class="faq-phone" href="tel:5715550199">(571) 555-0199</a>',
    faq1_q: 'What tire sizes do you carry?',
    faq1_a: "We carry a wide range of sizes for cars, SUVs, trucks, and vans — both new and used. Use the search on our home page to see what's currently in stock, or call us and we'll check for you.",
    faq2_q: 'Do you offer mobile tire installation?',
    faq2_a: "Yes! We bring the shop to you — whether you're at home, work, or stuck on the side of the road. Mobile service is available 7 days a week throughout Manassas, VA and surrounding areas.",
    faq3_q: "What's the difference between new and used tires?",
    faq3_a: "New tires have full tread depth and come with a manufacturer warranty. Used tires are hand-inspected for safety and offer significant savings — great if you're on a budget or need a temporary fix. We only sell used tires that pass our quality check.",
    faq4_q: 'How do I know what size tire I need?',
    faq4_a: 'Your tire size is printed on the sidewall of your current tires (e.g. 205/65R17) and also in your vehicle\'s owner manual or on the sticker inside the driver\'s door. You can also use our "By Vehicle" search to look up your car\'s OEM tire size.',
    faq5_q: 'Do you offer a price match guarantee?',
    faq5_a: "Absolutely. If you find the same tire for a lower price elsewhere, show us and we'll beat or match it. We're committed to giving you the best deal possible.",
    faq6_q: 'How long does tire installation take?',
    faq6_a: "Most standard installs take 30–60 minutes depending on the number of tires and vehicle type. We'll give you an accurate time estimate when you book your appointment.",
    faq7_q: 'How do I get a quote?',
    faq7_a: 'You can request a free quote right here on our website — browse our inventory, add tires to your cart, and hit "Request Quote." Or call us at <a class="faq-phone" href="tel:5715550199">(571) 555-0199</a> and we\'ll take care of you directly.',
    // Shop
    shop_eyebrow: 'Browse Inventory', shop_title: 'Shop All Tires',
    filter_search_placeholder: '🔍 Search size, brand, type…',
    filter_all_cond: 'All Conditions', filter_new: '🟢 New', filter_used: '🟡 Used',
    filter_all_brands: 'All Brands',
    filter_all_types: 'All Types', filter_allseason: 'All-Season', filter_summer: 'Summer',
    filter_winter: 'Winter', filter_performance: 'Performance', filter_truck_suv: 'Truck/SUV', filter_runflat: 'Run-Flat',
    sort_price_asc: 'Price: Low → High', sort_price_desc: 'Price: High → Low', sort_brand: 'Brand A–Z', sort_newest: 'Newest First',
    cond_new_badge: '🟢 New', cond_used_badge: '🟡 Used',
    out_of_stock: 'Out of Stock', add_to_cart: '+ Add', per_tire: 'per tire', call_for_price: 'Call for Price', in_stock: 'In stock', no_photo: 'No photo available',
    result_singular: 'tire found', result_plural: 'tires found',
    // Brands
    brands_eyebrow: 'Top Brands We Carry', brands_title: 'Trusted Manufacturers', brand_shop_now: 'Shop Now →',
    // Services
    services_eyebrow: 'What We Offer', services_title: 'Our Services',
    svc1_title: 'Tire Installation', svc1_body: 'Professional mounting and balancing for all vehicle types. We come to you or you come to us.',
    svc2_title: 'Tire Rotation', svc2_body: 'Extend the life of your tires with regular rotation service. Quick and affordable.',
    svc3_title: 'Flat Repair', svc3_body: 'Puncture repairs and emergency flat tire service. Get back on the road fast.',
    svc4_title: 'Mobile Service', svc4_body: 'We bring the shop to you — driveway, parking lot, or roadside. Available 7 days a week.',
    svc5_title: 'Tire Balancing', svc5_body: 'Eliminate vibrations and uneven wear with precision wheel balancing for a smoother, safer ride.',
    svc_btn_add: '+ Add to Quote', svc_btn_added: '✓ Added',
    svc_request_quote: 'Request Quote for Selected Services →',
    // Contact
    contact_eyebrow: 'Get In Touch', contact_title: 'Request a Quote',
    contact_body: "Tell us what you're looking for and we'll get back to you with the best price and availability.",
    contact_hours: 'Mon–Sat 8am–7pm · Sun 10am–5pm',
    form_title: 'Get Your Free Quote',
    form_firstname: 'First Name *', form_lastname: 'Last Name *',
    form_phone: 'Phone Number *', form_email: 'Email Address',
    form_tiresize: 'Tire Size (e.g. 225/45R17)', form_qty_label: 'Quantity Needed',
    form_cond_label: 'Condition Preference',
    form_cart_label: 'Selected Tires from Cart', form_services_label: 'Requested Services',
    form_notes_label: 'Additional Notes',
    notes_placeholder: 'Vehicle year/make/model, brand preferences, or anything else…',
    qty_1: '1 tire', qty_2: '2 tires', qty_4: '4 tires (full set)', qty_other: 'Other',
    cond_any: 'Any (Best Price)', cond_new_only: 'New Only', cond_used_only: 'Used Only',
    form_submit: 'Send Quote Request →', sending: 'Sending…',
    form_success: "✅ Quote request sent! We'll contact you within 2 hours during business hours.",
    // Footer
    footer_shop_col: 'Shop', footer_company_col: 'Company',
    footer_new: 'New Tires', footer_used: 'Used Tires', footer_brands_link: 'Brands',
    footer_services_link: 'Services', footer_contact_link: 'Contact', footer_staff: 'Staff Login',
    footer_copy: '© 2025 Matrix Tires. All rights reserved.',
    // Cart
    cart_title: 'Your Cart', cart_empty: 'Your cart is empty.<br/>Add tires from the shop!',
    cart_total_label: 'Total:', cart_checkout: 'Request Quote for Cart →',
  },
  es: {
    // Nav
    nav_shop: 'Comprar Llantas', nav_brands: 'Marcas', nav_services: 'Servicios', nav_contact: 'Contacto',
    // Drawer
    drawer_home: '🏠 Inicio', drawer_shop: '🛞 Comprar Llantas', drawer_brands: '🏷️ Marcas',
    drawer_services: '🔧 Servicios', drawer_quote: '📋 Solicitar Cotización',
    // Hero
    hero_badge: '🔴 Llantas Nuevas y Usadas en Stock',
    hero_title: 'Encuentra Tu<br/><span class="hero-accent">Llanta Perfecta</span>',
    hero_sub: 'Busca por tamaño, marca o categoría. Llantas nuevas y usadas a precios inmejorables con instalación experta.',
    tab_size: '🔍 Por Tamaño', tab_vehicle: '🚗 Por Vehículo',
    lbl_width: 'Ancho', lbl_aspect: 'Relación', lbl_rim: 'Aro',
    lbl_make: 'Marca', lbl_model: 'Modelo', lbl_year: 'Año',
    btn_search: 'Buscar →',
    hvt_headline: 'Compra Llantas Nuevas y Usadas<br>para Autos, Camionetas y SUVs',
    hvt_body: 'Obtén las mejores llantas para tu vehículo en Matrix Tires. Desde todo clima hasta alto rendimiento, tenemos una amplia selección de marcas y tamaños.',
    // Tire diagram
    tsd_title: 'Cómo leer el tamaño de tu llanta',
    tsd_caption: 'Busca los números impresos en el flanco de tu llanta — te indican exactamente el tamaño que necesitas.',
    // Trust strip
    trust_1: '✅ Garantía de Igualación de Precio', trust_2: '🚗 Instalación Móvil Disponible',
    trust_3: '⚡ Servicio el Mismo Día', trust_4: '🔒 Calidad Garantizada',
    // Promo
    promo_badge: 'OFERTA POR TIEMPO LIMITADO',
    promo_headline: 'Compra 4 Llantas, Obtén <span class="promo-highlight">Instalación Gratis</span>',
    promo_sub: 'Montaje y balanceo profesional incluido — sin cargos ocultos',
    promo_expires: 'Oferta válida hasta el <strong>26 de junio de 2026</strong>',
    promo_cta: 'Reclamar Oferta →',
    // Showcase
    showcase_eyebrow: 'Lo Que Tenemos', showcase_title: 'Compra por Tipo de Llanta', showcase_shop_now: 'Comprar →',
    sc_allseason_label: 'Todo Clima', sc_allseason_desc: 'Tracción todo el año para el manejo diario',
    sc_winter_label: 'Invierno / Nieve', sc_winter_desc: 'Tracción máxima en hielo y nieve',
    sc_perf_label: 'Alto Rendimiento', sc_perf_desc: 'Manejo a alta velocidad y precisión',
    sc_truck_label: 'Camioneta / SUV', sc_truck_desc: 'Llantas resistentes para camionetas y SUVs',
    sc_used_label: 'Llantas Usadas', sc_used_desc: 'Opciones inspeccionadas y económicas',
    // About
    about_eyebrow: 'Nuestra Historia',
    about_title: 'Construidos en las Calles,<br/><span style="color:var(--accent)">Impulsados por la Confianza</span>',
    about_body1: 'Matrix Tires nació de una idea simple: todo conductor merece llantas de calidad a un precio justo, con un servicio que va hasta <em>ellos</em>. Lo que comenzó como una operación móvil con una sola camioneta se ha convertido en un negocio de servicio completo que atiende a Manassas, VA y las comunidades cercanas.',
    about_body2: 'Con los años hemos montado, balanceado y reparado miles de llantas — desde autos cotidianos hasta camiones de trabajo. Ofrecemos llantas nuevas y usadas porque creemos que mantenerse seguro en la carretera no debería costar una fortuna.',
    pillar1_title: 'La Comunidad Primero', pillar1_text: 'Local, familiar y orgullosos de ello. Tratamos a cada cliente como un vecino.',
    pillar2_title: 'Precios Honestos', pillar2_text: 'Sin cargos ocultos. Sin ventas adicionales. Solo el mejor precio que podemos ofrecer, siempre.',
    pillar3_title: 'Servicio Rápido', pillar3_text: 'Servicio el mismo día disponible. Sabemos que tu tiempo es valioso.',
    stat1_label: 'Años en el Negocio', stat2_label: 'Llantas Instaladas', stat3_label: 'Clientes Satisfechos', stat4_label: 'Días a la Semana',
    // Why
    why_eyebrow: 'Por Qué Matrix Tires',
    why_title: 'La Diferencia Está<br/>En los Detalles',
    why1_title: 'Opciones Nuevas y Usadas', why1_body: 'Tenemos llantas nuevas y usadas de calidad inspeccionada para que todos los presupuestos puedan ir seguros.',
    why2_title: 'Servicio Móvil', why2_body: '¿No puedes venir? Llevamos el taller directo a tu casa, trabajo o al lado de la carretera.',
    why3_title: 'Igualación de Precio', why3_body: '¿Lo encontraste más barato? Muéstranos y lo igualamos o lo superamos — garantizado.',
    why4_title: 'Inspección de Calidad', why4_body: 'Cada llanta usada es inspeccionada a mano en profundidad de rodadura, integridad y seguridad antes de ofrecerse.',
    why5_title: 'Horario Flexible', why5_body: 'Abiertos de lunes a domingo. Reserva el mismo día o con anticipación — nos adaptamos a tu horario.',
    why6_title: 'Soporte Real', why6_body: 'Habla con una persona real, no un chatbot. Llámanos o escríbenos y respondemos directamente.',
    // CTA
    cta_heading: '¿Listo para Rodar?',
    cta_sub: 'Explora nuestro inventario en vivo u obtén una cotización gratis en minutos. Servicio el mismo día disponible.',
    cta_btn_primary: 'Comprar Llantas →', cta_btn_secondary: 'Obtener Cotización Gratis',
    // Reviews
    reviews_eyebrow: 'Lo Que Dicen los Clientes', reviews_title: 'Reseñas Reales',
    review1_text: '"¡Servicio rápido y excelentes precios! Vinieron a mi casa y cambiaron las cuatro llantas en menos de una hora. Definitivamente regresaré."',
    review2_text: '"Necesitaba una llanta de última hora un domingo y aparecieron el mismo día. Muy profesionales y económicos. ¡Recomiendo mucho Matrix Tires!"',
    review3_text: '"Conseguí una llanta usada para mi SUV a una fracción del costo. La inspeccionaron frente a mí y explicaron todo. Honestos y confiables."',
    review4_text: '"¡La mejor tienda de llantas! Igualaron el precio de un competidor sin que yo lo pidiera. Instalación rápida y el balanceo hizo una gran diferencia."',
    reviews_leave_btn: 'Déjanos una Reseña en Facebook →',
    // FAQ
    faq_eyebrow: '¿Tienes Preguntas?', faq_title: 'Preguntas Frecuentes',
    faq_sub_html: '¿Aún tienes preguntas? Llámanos directamente al <a class="faq-phone" href="tel:5715550199">(571) 555-0199</a>',
    faq1_q: '¿Qué tamaños de llantas manejan?',
    faq1_a: 'Manejamos una amplia variedad de tamaños para autos, SUVs, camiones y camionetas — nuevas y usadas. Usa el buscador en nuestra página para ver lo que hay en stock, o llámanos y verificamos por ti.',
    faq2_q: '¿Ofrecen instalación móvil de llantas?',
    faq2_a: '¡Sí! Llevamos el taller hasta ti — ya sea en casa, en el trabajo o en la carretera. El servicio móvil está disponible los 7 días de la semana en Manassas, VA y áreas cercanas.',
    faq3_q: '¿Cuál es la diferencia entre llantas nuevas y usadas?',
    faq3_a: 'Las llantas nuevas tienen profundidad de rodadura completa y garantía del fabricante. Las usadas son inspeccionadas para garantizar seguridad y ofrecen un ahorro significativo. Solo vendemos llantas usadas que pasan nuestro control de calidad.',
    faq4_q: '¿Cómo sé qué tamaño de llanta necesito?',
    faq4_a: 'El tamaño está impreso en el flanco de tus llantas actuales (ej. 205/65R17) y también en el manual del propietario o en la etiqueta dentro de la puerta del conductor. También puedes usar nuestra búsqueda "Por Vehículo".',
    faq5_q: '¿Ofrecen garantía de igualación de precio?',
    faq5_a: 'Absolutamente. Si encuentras la misma llanta a un precio menor, muéstranos y lo igualamos o lo superamos. Estamos comprometidos a darte el mejor trato posible.',
    faq6_q: '¿Cuánto tarda la instalación de una llanta?',
    faq6_a: 'La mayoría de las instalaciones estándar toman entre 30 y 60 minutos dependiendo del número de llantas y el tipo de vehículo.',
    faq7_q: '¿Cómo obtengo una cotización?',
    faq7_a: 'Solicita una cotización gratis directamente en nuestro sitio — explora el inventario, agrega llantas al carrito y presiona "Solicitar Cotización." O llámanos al <a class="faq-phone" href="tel:5715550199">(571) 555-0199</a>.',
    // Shop
    shop_eyebrow: 'Explorar Inventario', shop_title: 'Ver Todas las Llantas',
    filter_search_placeholder: '🔍 Busca tamaño, marca, tipo…',
    filter_all_cond: 'Todas las Condiciones', filter_new: '🟢 Nueva', filter_used: '🟡 Usada',
    filter_all_brands: 'Todas las Marcas',
    filter_all_types: 'Todos los Tipos', filter_allseason: 'Todo Clima', filter_summer: 'Verano',
    filter_winter: 'Invierno', filter_performance: 'Alto Rendimiento', filter_truck_suv: 'Camioneta/SUV', filter_runflat: 'Run-Flat',
    sort_price_asc: 'Precio: Bajo → Alto', sort_price_desc: 'Precio: Alto → Bajo', sort_brand: 'Marca A–Z', sort_newest: 'Más Reciente',
    cond_new_badge: '🟢 Nueva', cond_used_badge: '🟡 Usada',
    out_of_stock: 'Sin Stock', add_to_cart: '+ Agregar', per_tire: 'por llanta', call_for_price: 'Llama por Precio', in_stock: 'En stock', no_photo: 'Foto no disponible',
    result_singular: 'llanta encontrada', result_plural: 'llantas encontradas',
    // Brands
    brands_eyebrow: 'Mejores Marcas que Manejamos', brands_title: 'Fabricantes de Confianza', brand_shop_now: 'Comprar →',
    // Services
    services_eyebrow: 'Lo Que Ofrecemos', services_title: 'Nuestros Servicios',
    svc1_title: 'Instalación de Llantas', svc1_body: 'Montaje y balanceo profesional para todo tipo de vehículos. Vamos a ti o tú vienes a nosotros.',
    svc2_title: 'Rotación de Llantas', svc2_body: 'Extiende la vida de tus llantas con rotación regular. Rápido y económico.',
    svc3_title: 'Reparación de Pinchazos', svc3_body: 'Reparaciones de punturas y servicio de emergencia. Regresa al camino rápido.',
    svc4_title: 'Servicio Móvil', svc4_body: 'Llevamos el taller hasta ti — entrada, estacionamiento o carretera. Disponible 7 días a la semana.',
    svc5_title: 'Balanceo de Llantas', svc5_body: 'Elimina vibraciones y desgaste desigual con balanceo de precisión para un manejo más suave y seguro.',
    svc_btn_add: '+ Agregar a Cotización', svc_btn_added: '✓ Agregado',
    svc_request_quote: 'Solicitar Cotización para Servicios Seleccionados →',
    // Contact
    contact_eyebrow: 'Contáctanos', contact_title: 'Solicitar una Cotización',
    contact_body: 'Cuéntanos qué buscas y te responderemos con el mejor precio y disponibilidad.',
    contact_hours: 'Lun–Sáb 8am–7pm · Dom 10am–5pm',
    form_title: 'Obtén Tu Cotización Gratis',
    form_firstname: 'Nombre *', form_lastname: 'Apellido *',
    form_phone: 'Número de Teléfono *', form_email: 'Correo Electrónico',
    form_tiresize: 'Tamaño de Llanta (ej. 225/45R17)', form_qty_label: 'Cantidad Necesaria',
    form_cond_label: 'Preferencia de Condición',
    form_cart_label: 'Llantas Seleccionadas del Carrito', form_services_label: 'Servicios Solicitados',
    form_notes_label: 'Notas Adicionales',
    notes_placeholder: 'Año/marca/modelo del vehículo, marcas preferidas u otra información…',
    qty_1: '1 llanta', qty_2: '2 llantas', qty_4: '4 llantas (juego completo)', qty_other: 'Otro',
    cond_any: 'Cualquiera (Mejor Precio)', cond_new_only: 'Solo Nueva', cond_used_only: 'Solo Usada',
    form_submit: 'Enviar Solicitud de Cotización →', sending: 'Enviando…',
    form_success: '✅ ¡Solicitud enviada! Te contactaremos dentro de 2 horas durante el horario de atención.',
    // Footer
    footer_shop_col: 'Tienda', footer_company_col: 'Empresa',
    footer_new: 'Llantas Nuevas', footer_used: 'Llantas Usadas', footer_brands_link: 'Marcas',
    footer_services_link: 'Servicios', footer_contact_link: 'Contacto', footer_staff: 'Acceso del Personal',
    footer_copy: '© 2025 Matrix Tires. Todos los derechos reservados.',
    // Cart
    cart_title: 'Tu Carrito', cart_empty: 'Tu carrito está vacío.<br/>¡Agrega llantas desde la tienda!',
    cart_total_label: 'Total:', cart_checkout: 'Solicitar Cotización del Carrito →',
  }
};

let currentLang = localStorage.getItem('mt_lang') || 'en';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('mt_lang', lang);
  const t = i18n[lang];

  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    if (t[el.dataset.i18n] !== undefined) el.textContent = t[el.dataset.i18n];
  });
  // HTML content
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    if (t[el.dataset.i18nHtml] !== undefined) el.innerHTML = t[el.dataset.i18nHtml];
  });
  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // Select option translations
  const selectDefs = {
    filterCond: [
      { value: '', key: 'filter_all_cond' }, { value: 'New', key: 'filter_new' }, { value: 'Used', key: 'filter_used' },
    ],
    filterType: [
      { value: '', key: 'filter_all_types' }, { value: 'All-Season', key: 'filter_allseason' },
      { value: 'Summer', key: 'filter_summer' }, { value: 'Winter', key: 'filter_winter' },
      { value: 'Performance', key: 'filter_performance' }, { value: 'Truck/SUV', key: 'filter_truck_suv' },
      { value: 'Run-Flat', key: 'filter_runflat' },
    ],
    filterSort: [
      { value: 'price-asc', key: 'sort_price_asc' }, { value: 'price-desc', key: 'sort_price_desc' },
      { value: 'brand', key: 'sort_brand' }, { value: 'newest', key: 'sort_newest' },
    ],
    qQty: [
      { value: '1', key: 'qty_1' }, { value: '2', key: 'qty_2' },
      { value: '4', key: 'qty_4' }, { value: 'other', key: 'qty_other' },
    ],
    qCond: [
      { value: 'any', key: 'cond_any' }, { value: 'New', key: 'cond_new_only' }, { value: 'Used', key: 'cond_used_only' },
    ],
  };
  Object.entries(selectDefs).forEach(([id, opts]) => {
    const el = document.getElementById(id);
    if (!el) return;
    const cur = el.value;
    el.innerHTML = opts.map(o => `<option value="${o.value}"${o.value === cur ? ' selected' : ''}>${t[o.key] || o.key}</option>`).join('');
  });

  // Update "All Brands" first option
  const brandSel = document.getElementById('filterBrand');
  if (brandSel && brandSel.options.length > 0) brandSel.options[0].textContent = t.filter_all_brands;

  // Update brand card footers
  document.querySelectorAll('.brand-card-footer').forEach(el => { el.textContent = t.brand_shop_now; });

  // Re-render grid and cart with new language
  if (allInventory.length) applyFilters();
  renderCart();

  document.getElementById('lang-en').classList.toggle('active', lang === 'en');
  document.getElementById('lang-es').classList.toggle('active', lang === 'es');
}

// Apply saved language on load
window.addEventListener('DOMContentLoaded', () => setLanguage(currentLang));

let allInventory = [];
let cart = JSON.parse(localStorage.getItem('mt_cart') || '[]');
let selectedServices = [];
let currentPage = 'home';
let vehicleSizeFilter = [];
let vehicleFilterLabel = '';

// ── Navbar scroll effect ──────────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
});

// ── Mobile menu ───────────────────────────────────────────────────────────────
function toggleDrawer() {
  document.getElementById('drawer').classList.toggle('open');
  document.getElementById('drawerOverlay').classList.toggle('open');
}

function closeDrawer() {
  document.getElementById('drawer').classList.remove('open');
  document.getElementById('drawerOverlay').classList.remove('open');
}

function setShopFilter(condition) {
  showPage('shop');
  const el = document.getElementById('filterCond');
  if (el) { el.value = condition; applyFilters(); }
}

function showPage(name) {
  currentPage = name;
  document.querySelectorAll('.page-section').forEach(el => {
    el.classList.toggle('active', el.dataset.page === name);
  });
  document.querySelectorAll('.drawer-link[data-page]').forEach(el => {
    el.classList.toggle('active', el.dataset.page === name);
  });
  closeDrawer();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (name === 'shop') applyFilters();
}

// ── Firebase: load inventory ──────────────────────────────────────────────────
function initFirebase() {
  const db = window._db;
  const docRef = window._firestoreDoc(db, 'business', 'matrixdata');
  window._firestoreOnSnapshot(docRef, (snap) => {
    if (!snap.exists()) { showNoInventory(); return; }
    const data = snap.data();
    allInventory = (data.inventory || []).filter(i => i.qty > 0);
    populateFilters();
    populateSizeDropdowns();
    applyFilters();
    updateHeroStats();
  });
}

window.addEventListener('firebase-ready', initFirebase);
window.addEventListener('load', () => {
  if (window._db) initFirebase();
  updateCartBadge();
  renderCart();
  initVehicleSearch();
  showPage('home');
  // Retry until inventory arrives and dropdowns are populated
  const retryPopulate = (attempts) => {
    if (allInventory.length) { populateSizeDropdowns(); return; }
    if (attempts > 0) setTimeout(() => retryPopulate(attempts - 1), 1500);
  };
  setTimeout(() => retryPopulate(5), 1000);
});

// ── Populate filter dropdowns ─────────────────────────────────────────────────
function populateFilters() {
  // Normalize brand names (trim + title case) then deduplicate and sort
  const normalizeBrand = b => b.trim().replace(/\w\S*/g, w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
  const brands = [...new Map(allInventory.map(i => i.brand).filter(Boolean).map(b => [normalizeBrand(b).toLowerCase(), normalizeBrand(b)])).values()].sort();
  const brandSel = document.getElementById('filterBrand');
  const cur = brandSel.value;
  brandSel.innerHTML = '<option value="">All Brands</option>' +
    brands.map(b => `<option value="${b}"${b===cur?' selected':''}>${b}</option>`).join('');

  const brandStyles = {
    'Michelin':    { color: '#003087', bg: '#fff', font: 'italic' },
    'Goodyear':    { color: '#003087', bg: '#fff', font: 'normal' },
    'BFGoodrich':  { color: '#cc0000', bg: '#fff', font: 'normal' },
    'Continental': { color: '#ff6600', bg: '#fff', font: 'normal' },
    'Pirelli':     { color: '#cc0000', bg: '#fff', font: 'italic' },
    'Cooper':      { color: '#003087', bg: '#fff', font: 'normal' },
    'Bridgestone': { color: '#cc0000', bg: '#fff', font: 'normal' },
    'Firestone':   { color: '#cc0000', bg: '#fff', font: 'normal' },
    'Hankook':     { color: '#cc0000', bg: '#fff', font: 'normal' },
    'Yokohama':    { color: '#003087', bg: '#fff', font: 'normal' },
    'Toyo':        { color: '#cc0000', bg: '#fff', font: 'normal' },
    'Falken':      { color: '#000', bg: '#fff', font: 'normal' },
    'Nitto':       { color: '#cc0000', bg: '#fff', font: 'normal' },
    'General':     { color: '#cc0000', bg: '#fff', font: 'normal' },
    'Kumho':       { color: '#003087', bg: '#fff', font: 'normal' },
    'Nexen':       { color: '#003087', bg: '#fff', font: 'normal' },
    'GT Radial':   { color: '#cc0000', bg: '#fff', font: 'normal' },
    'Sailun':      { color: '#003087', bg: '#fff', font: 'normal' },
    'Uniroyal':    { color: '#cc0000', bg: '#fff', font: 'normal' },
  };
  const fallbackColors = ['#cc0000','#003087','#1a1a1a','#e65c00','#6d28d9'];
  const brandsGrid = document.getElementById('brandsGrid');
  brandsGrid.innerHTML = brands.map((b, i) => {
    const s = brandStyles[b] || { color: fallbackColors[i % fallbackColors.length], bg: '#fff', font: 'normal' };
    return `
    <div class="brand-card" onclick="filterByBrand('${b}')">
      <div class="brand-card-logo" style="background:${s.bg}">
        <span class="brand-card-wordmark" style="color:${s.color};font-style:${s.font}">${b}</span>
      </div>
      <div class="brand-card-footer">Shop Now →</div>
    </div>`;
  }).join('');
}

function populateSizeDropdowns() {
  const sizes = allInventory.map(i => parseSize(i.size)).filter(Boolean);
  const widths = [...new Set(sizes.map(s => s.w))].sort((a,b) => a-b);
  fill('hWidth', widths, 'Width');
  // Reset dependent dropdowns to "all" until user picks a width
  fillAspectsByWidth('');
}

function fillAspectsByWidth(w) {
  const sizes = allInventory.map(i => parseSize(i.size)).filter(Boolean);
  const filtered = w ? sizes.filter(s => s.w === w) : sizes;
  const aspects = [...new Set(filtered.map(s => s.a))].sort((x, y) => x - y);
  fill('hAspect', aspects, 'Ratio');
  fillRimsByWidthAspect(w, '');
}

function fillRimsByWidthAspect(w, aspect) {
  const sizes = allInventory.map(i => parseSize(i.size)).filter(Boolean);
  let filtered = sizes;
  if (w) filtered = filtered.filter(s => s.w === w);
  if (aspect) filtered = filtered.filter(s => s.a === aspect);
  const rims = [...new Set(filtered.map(s => s.r))].sort((x, y) => x - y);
  fill('hRim', rims, 'Rim');
}

function onWidthChange() {
  const w = document.getElementById('hWidth').value;
  fillAspectsByWidth(w);
}

function onAspectChange() {
  const w = document.getElementById('hWidth').value;
  const a = document.getElementById('hAspect').value;
  fillRimsByWidthAspect(w, a);
}

function fill(id, vals, label = 'Any') {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = `<option value="">Any ${label}</option>` +
    vals.map(v => `<option value="${v}">${v}</option>`).join('');
}

function parseSize(s) {
  if (!s || typeof s !== 'string') return null;
  // Extract all numeric groups (handles any separator, prefix like P/LT, suffix like 97H)
  const nums = s.match(/\d+/g);
  if (!nums) return null;
  // Find the 3-digit width, then pick the next two 2-digit groups as ratio and rim
  const widthIdx = nums.findIndex(n => n.length === 3);
  if (widthIdx === -1) {
    // Fallback: everything jammed together e.g. "2255517"
    const jammed = nums.find(n => n.length >= 7);
    if (jammed) return { w: jammed.slice(0,3), a: jammed.slice(3,5), r: jammed.slice(5,7) };
    return null;
  }
  const twoDigit = nums.slice(widthIdx + 1).filter(n => n.length === 2);
  if (twoDigit.length < 2) return null;
  return { w: nums[widthIdx], a: twoDigit[0], r: twoDigit[1] };
}

// ── Hero stats ────────────────────────────────────────────────────────────────
function updateHeroStats() {
  document.getElementById('heroStockCount').textContent =
    allInventory.reduce((s,i) => s + (i.qty||0), 0).toLocaleString();
  document.getElementById('heroBrandCount').textContent =
    new Set(allInventory.map(i => i.brand).filter(Boolean)).size;
}

// ── Hero search ───────────────────────────────────────────────────────────────
function heroSearch() {
  const w = document.getElementById('hWidth').value;
  const a = document.getElementById('hAspect').value;
  const r = document.getElementById('hRim').value;
  let q = '';
  if (w || a || r) q = `${w||''}${a?'/'+a:''}${r?'R'+r:''}`.replace(/^[/R]+|[/R]+$/g,'');
  if (q) document.getElementById('searchInput').value = q;
  scrollToShop();
  applyFilters();
}

function scrollToShop() {
  showPage('shop');
}

// ── Vehicle search ────────────────────────────────────────────────────────────
const VEHICLE_DATA = {
  Toyota: {
    Camry:       { start:2000, end:2025, sizes:['205/65R15','215/60R16','215/55R17','225/45R18'] },
    Corolla:     { start:2000, end:2025, sizes:['185/65R15','195/65R15','205/55R16','225/40R18'] },
    RAV4:        { start:2000, end:2025, sizes:['215/70R16','225/65R17','235/55R18','235/50R19'] },
    Highlander:  { start:2001, end:2025, sizes:['225/65R17','245/55R19','245/60R20'] },
    Tacoma:      { start:2000, end:2025, sizes:['265/70R16','245/75R17','265/60R18','245/60R20'] },
    Tundra:      { start:2000, end:2025, sizes:['255/70R18','275/55R20','265/50R22'] },
    Prius:       { start:2001, end:2025, sizes:['175/65R15','195/65R15','215/45R17'] },
    '4Runner':   { start:2000, end:2025, sizes:['265/70R17','265/60R18','265/65R17'] },
    Sienna:      { start:2000, end:2025, sizes:['215/65R16','225/60R17','235/55R18'] },
    Avalon:      { start:2000, end:2022, sizes:['215/55R17','235/45R18','235/40R19'] },
    Venza:       { start:2009, end:2015, sizes:['235/55R19','245/45R19'] },
    'C-HR':      { start:2018, end:2025, sizes:['215/50R18','225/50R18'] },
  },
  Honda: {
    Civic:     { start:2000, end:2025, sizes:['195/65R15','205/55R16','215/50R17','235/40R18'] },
    Accord:    { start:2000, end:2025, sizes:['215/60R16','225/50R17','235/45R18','245/40R19'] },
    'CR-V':    { start:2000, end:2025, sizes:['215/65R16','225/65R17','235/60R18','235/55R19'] },
    Pilot:     { start:2003, end:2025, sizes:['235/65R17','245/60R18','255/50R20'] },
    Odyssey:   { start:2000, end:2025, sizes:['225/60R17','235/60R18'] },
    'HR-V':    { start:2016, end:2025, sizes:['215/60R16','215/55R17'] },
    Ridgeline: { start:2006, end:2025, sizes:['245/60R18','255/50R20'] },
    Passport:  { start:2019, end:2025, sizes:['245/60R18','255/45R20'] },
    Fit:       { start:2009, end:2020, sizes:['185/55R16','175/65R14'] },
  },
  Ford: {
    'F-150':    { start:2000, end:2025, sizes:['255/70R17','265/60R18','275/55R20','275/45R22'] },
    Mustang:    { start:2000, end:2025, sizes:['225/55R17','255/40R18','255/40R19','305/30R20'] },
    Explorer:   { start:2000, end:2025, sizes:['225/60R18','255/45R20','275/45R21'] },
    Escape:     { start:2001, end:2025, sizes:['215/65R16','235/55R17','235/50R18','235/45R19'] },
    Edge:       { start:2007, end:2024, sizes:['235/60R18','245/50R20','265/40R21'] },
    Bronco:     { start:2021, end:2025, sizes:['255/70R17','265/70R17','285/70R17'] },
    Ranger:     { start:2000, end:2025, sizes:['225/70R16','255/65R17','265/50R20'] },
    Expedition: { start:2000, end:2025, sizes:['255/65R17','275/55R20','275/50R22'] },
    Maverick:   { start:2022, end:2025, sizes:['225/65R17','255/45R19'] },
    'Transit Connect': { start:2010, end:2025, sizes:['215/55R16','215/60R16'] },
  },
  Chevrolet: {
    Silverado:   { start:2000, end:2025, sizes:['245/75R16','265/70R17','275/60R20','275/55R20'] },
    Malibu:      { start:2000, end:2024, sizes:['215/60R16','225/55R17','235/45R18'] },
    Equinox:     { start:2005, end:2025, sizes:['225/65R17','235/55R18','235/50R19','255/45R20'] },
    Tahoe:       { start:2000, end:2025, sizes:['255/70R17','275/55R20','285/45R22'] },
    Suburban:    { start:2000, end:2025, sizes:['265/65R18','275/55R20','285/45R22'] },
    Traverse:    { start:2009, end:2025, sizes:['245/60R18','255/55R20','275/45R21'] },
    Colorado:    { start:2004, end:2025, sizes:['245/70R16','265/65R17','265/60R18'] },
    Trailblazer: { start:2002, end:2009, sizes:['235/70R16','245/65R17','255/60R18'] },
    Trax:        { start:2013, end:2025, sizes:['215/55R18','225/50R17'] },
  },
  GMC: {
    Sierra:   { start:2000, end:2025, sizes:['245/75R16','265/70R17','275/60R20','275/55R20'] },
    Yukon:    { start:2000, end:2025, sizes:['255/70R17','275/55R20','285/45R22'] },
    Terrain:  { start:2010, end:2025, sizes:['225/65R17','235/55R18','235/50R19','255/45R20'] },
    Acadia:   { start:2007, end:2025, sizes:['245/60R18','255/55R20','275/45R21'] },
    Canyon:   { start:2004, end:2025, sizes:['245/70R16','265/65R17','265/60R18'] },
  },
  Nissan: {
    Altima:     { start:2000, end:2025, sizes:['215/60R16','215/55R17','235/45R18'] },
    Sentra:     { start:2000, end:2025, sizes:['195/65R15','205/55R16','215/45R17'] },
    Rogue:      { start:2008, end:2025, sizes:['215/65R17','225/60R17','225/55R19'] },
    Pathfinder: { start:2000, end:2025, sizes:['245/65R17','265/50R20','255/50R20'] },
    Murano:     { start:2003, end:2025, sizes:['235/65R18','235/55R20','255/45R20'] },
    Frontier:   { start:2000, end:2025, sizes:['265/70R16','255/65R17','265/60R18'] },
    Maxima:     { start:2000, end:2023, sizes:['215/55R17','245/40R19'] },
    Armada:     { start:2004, end:2025, sizes:['275/65R18','285/50R20','275/50R22'] },
    Kicks:      { start:2018, end:2025, sizes:['205/60R16','205/55R17'] },
    Versa:      { start:2006, end:2025, sizes:['175/65R14','185/60R15','205/55R16'] },
  },
  Ram: {
    '1500':      { start:2000, end:2025, sizes:['245/70R17','265/60R18','275/55R20','275/60R20'] },
    '2500':      { start:2000, end:2025, sizes:['265/70R17','265/60R20','285/60R20'] },
    '3500':      { start:2000, end:2025, sizes:['235/80R17','265/70R17','285/60R20'] },
    ProMaster:   { start:2014, end:2025, sizes:['225/75R16','235/65R16'] },
  },
  Dodge: {
    Charger:    { start:2006, end:2025, sizes:['215/65R17','225/55R18','245/45R20','255/45R20'] },
    Challenger: { start:2008, end:2023, sizes:['225/55R18','235/55R19','275/40R20','305/35R20'] },
    Durango:    { start:2000, end:2025, sizes:['235/65R17','265/50R20','295/45R20'] },
    Journey:    { start:2009, end:2020, sizes:['225/65R17','225/60R17','225/55R19'] },
    Grand_Caravan: { start:2000, end:2020, sizes:['215/65R16','225/65R16'] },
  },
  Jeep: {
    Wrangler:         { start:2000, end:2025, sizes:['245/75R16','255/75R17','255/70R18','285/70R17'] },
    'Grand Cherokee': { start:2000, end:2025, sizes:['245/65R17','265/50R20','275/45R21','295/40R21'] },
    Cherokee:         { start:2014, end:2025, sizes:['225/60R17','235/55R18','245/50R20'] },
    Compass:          { start:2007, end:2025, sizes:['215/60R17','225/55R18','235/50R19'] },
    Gladiator:        { start:2020, end:2025, sizes:['255/75R17','255/70R18','285/70R17'] },
    Renegade:         { start:2015, end:2025, sizes:['215/60R17','225/55R17'] },
  },
  BMW: {
    '3 Series': { start:2000, end:2025, sizes:['205/55R16','225/45R17','225/40R18','245/35R19'] },
    '5 Series': { start:2000, end:2025, sizes:['225/55R17','245/45R18','245/40R19','275/35R19'] },
    'X3':       { start:2004, end:2025, sizes:['225/55R18','245/50R18','245/45R20','255/40R21'] },
    'X5':       { start:2000, end:2025, sizes:['255/55R18','255/50R19','275/40R20','275/35R22'] },
    'X1':       { start:2012, end:2025, sizes:['225/50R18','225/45R19','245/40R20'] },
    '4 Series': { start:2014, end:2025, sizes:['225/45R18','245/40R18','255/35R19','275/30R20'] },
    'X7':       { start:2019, end:2025, sizes:['275/50R20','285/45R21','315/35R22'] },
  },
  Mercedes: {
    'C-Class':  { start:2000, end:2025, sizes:['205/55R16','225/45R17','245/40R18','255/35R19'] },
    'E-Class':  { start:2000, end:2025, sizes:['225/55R17','245/45R17','245/40R18','275/35R19'] },
    'GLE':      { start:2016, end:2025, sizes:['255/50R19','265/45R20','295/35R21'] },
    'GLC':      { start:2016, end:2025, sizes:['235/60R18','245/50R19','255/45R20'] },
    'GLS':      { start:2013, end:2025, sizes:['275/50R20','275/45R21','315/35R22'] },
    'A-Class':  { start:2019, end:2025, sizes:['225/45R18','235/40R19'] },
  },
  Hyundai: {
    Elantra:    { start:2000, end:2025, sizes:['195/65R15','205/55R16','225/45R17','245/40R18'] },
    Sonata:     { start:2000, end:2025, sizes:['205/65R16','215/55R17','235/45R18','245/40R19'] },
    Tucson:     { start:2005, end:2025, sizes:['215/65R16','225/60R17','235/55R18','255/45R19'] },
    'Santa Fe': { start:2001, end:2025, sizes:['225/65R17','235/60R18','235/55R19','255/45R20'] },
    Palisade:   { start:2020, end:2025, sizes:['245/60R18','245/55R20','255/45R20'] },
    Kona:       { start:2018, end:2025, sizes:['205/60R16','215/55R17','235/45R18'] },
    Venue:      { start:2020, end:2025, sizes:['205/60R16'] },
    Ioniq:      { start:2017, end:2025, sizes:['195/65R15','205/55R16','215/45R17'] },
  },
  Kia: {
    Optima:    { start:2001, end:2021, sizes:['205/65R16','215/55R17','225/45R18'] },
    K5:        { start:2021, end:2025, sizes:['225/55R16','245/45R18','245/40R19'] },
    Sorento:   { start:2003, end:2025, sizes:['225/65R17','235/60R18','235/55R19','255/45R20'] },
    Sportage:  { start:2000, end:2025, sizes:['215/65R16','225/60R17','235/55R18','255/45R19'] },
    Soul:      { start:2010, end:2025, sizes:['205/60R16','215/55R17','235/45R18'] },
    Telluride: { start:2020, end:2025, sizes:['245/60R18','245/55R20','255/45R20'] },
    Forte:     { start:2010, end:2025, sizes:['195/65R15','205/55R16','225/45R17'] },
    Rio:       { start:2001, end:2025, sizes:['185/65R14','185/55R15','195/45R16'] },
  },
  Subaru: {
    Outback:    { start:2000, end:2025, sizes:['215/60R16','225/60R17','225/55R18','225/55R19'] },
    Forester:   { start:2000, end:2025, sizes:['215/60R16','225/55R17','225/50R18'] },
    Impreza:    { start:2000, end:2025, sizes:['195/60R15','205/55R16','225/45R17','225/40R18'] },
    Crosstrek:  { start:2013, end:2025, sizes:['215/60R16','225/55R17','225/50R18'] },
    WRX:        { start:2002, end:2025, sizes:['205/55R16','225/45R17','245/40R18','245/35R19'] },
    Legacy:     { start:2000, end:2025, sizes:['205/60R16','215/55R17','225/45R18'] },
    Ascent:     { start:2019, end:2025, sizes:['235/65R17','245/55R19'] },
  },
  Volkswagen: {
    Jetta:   { start:2000, end:2025, sizes:['195/65R15','205/55R16','225/45R17','225/40R18'] },
    Passat:  { start:2000, end:2022, sizes:['205/60R16','215/55R17','235/45R18'] },
    Tiguan:  { start:2009, end:2025, sizes:['215/65R16','225/55R17','235/50R18','235/45R19'] },
    Atlas:   { start:2018, end:2025, sizes:['235/55R19','235/50R20','265/40R21'] },
    Golf:    { start:2000, end:2025, sizes:['195/65R15','205/55R16','225/45R17','225/40R18'] },
    Taos:    { start:2022, end:2025, sizes:['215/55R18','235/45R19'] },
  },
  Buick: {
    Enclave:  { start:2008, end:2025, sizes:['245/60R18','255/55R20','275/45R21'] },
    Encore:   { start:2013, end:2025, sizes:['215/55R17','225/50R18','235/45R18'] },
    Envision: { start:2016, end:2025, sizes:['225/55R18','235/50R20','245/45R21'] },
    LaCrosse: { start:2005, end:2019, sizes:['225/55R17','245/45R18','245/40R19'] },
  },
  Cadillac: {
    Escalade: { start:2000, end:2025, sizes:['275/55R20','285/45R22','295/40R22'] },
    XT5:      { start:2017, end:2025, sizes:['235/60R18','235/55R20','245/50R21'] },
    CT5:      { start:2020, end:2025, sizes:['235/45R18','255/40R19','275/35R20'] },
    SRX:      { start:2004, end:2016, sizes:['235/55R17','255/50R19','265/45R20'] },
    XT4:      { start:2019, end:2025, sizes:['235/50R18','235/45R20'] },
  },
  Lexus: {
    RX:  { start:2000, end:2025, sizes:['235/60R18','235/55R19','235/50R20','265/45R21'] },
    ES:  { start:2000, end:2025, sizes:['215/55R17','235/45R18','235/40R19'] },
    IS:  { start:2001, end:2025, sizes:['215/45R17','225/40R18','245/35R19'] },
    GX:  { start:2003, end:2025, sizes:['265/65R17','265/60R18','265/55R20'] },
    NX:  { start:2015, end:2025, sizes:['225/60R18','235/50R18','235/45R20'] },
    LX:  { start:2000, end:2025, sizes:['275/55R20','285/50R20','295/45R20'] },
    UX:  { start:2019, end:2025, sizes:['215/50R18','225/50R18'] },
  },
  Acura: {
    MDX:  { start:2001, end:2025, sizes:['235/65R17','245/55R19','255/45R20'] },
    RDX:  { start:2007, end:2025, sizes:['235/55R19','235/50R20'] },
    TLX:  { start:2015, end:2025, sizes:['225/50R17','245/40R18','245/35R19','275/30R20'] },
    ILX:  { start:2013, end:2022, sizes:['215/45R17','235/40R18'] },
  },
  Tesla: {
    'Model 3': { start:2017, end:2025, sizes:['235/45R18','235/35R20','245/35R21'] },
    'Model Y':  { start:2020, end:2025, sizes:['255/45R19','255/40R20'] },
    'Model S':  { start:2012, end:2025, sizes:['245/45R19','245/35R21','265/35R21'] },
    'Model X':  { start:2015, end:2025, sizes:['265/45R20','265/35R22'] },
  },
};

function switchSearchTab(tab) {
  document.getElementById('panel-size').style.display = tab === 'size' ? 'block' : 'none';
  document.getElementById('panel-vehicle').style.display = tab === 'vehicle' ? 'block' : 'none';
  document.getElementById('tab-size').classList.toggle('active', tab === 'size');
  document.getElementById('tab-vehicle').classList.toggle('active', tab === 'vehicle');
}

function initVehicleSearch() {
  const makeSelect = document.getElementById('vMake');
  if (!makeSelect) return;
  const makes = Object.keys(VEHICLE_DATA).sort();
  makeSelect.innerHTML = '<option value="">Select Make</option>' +
    makes.map(m => `<option value="${m}">${m}</option>`).join('');
  populateAllYears();
}

function populateAllYears() {
  const yearSelect = document.getElementById('vYear');
  if (!yearSelect) return;
  const current = new Date().getFullYear();
  let opts = '<option value="">Any Year</option>';
  for (let y = current; y >= 1995; y--) opts += `<option value="${y}">${y}</option>`;
  yearSelect.innerHTML = opts;
}

function onVehicleMakeChange() {
  const make = document.getElementById('vMake').value;
  const modelSelect = document.getElementById('vModel');
  modelSelect.innerHTML = '<option value="">Select Model</option>';
  document.getElementById('vYear').innerHTML = '<option value="">Any Year</option>';
  if (!make || !VEHICLE_DATA[make]) return;
  const models = Object.keys(VEHICLE_DATA[make]).sort();
  modelSelect.innerHTML = '<option value="">Select Model</option>' +
    models.map(m => `<option value="${m}">${m}</option>`).join('');
}

function onVehicleModelChange() {
  const make = document.getElementById('vMake').value;
  const model = document.getElementById('vModel').value;
  const yearSelect = document.getElementById('vYear');
  if (!make || !model || !VEHICLE_DATA[make]?.[model]) { populateAllYears(); return; }
  const info = VEHICLE_DATA[make][model];
  let opts = '<option value="">Any Year</option>';
  for (let y = info.end; y >= info.start; y--) opts += `<option value="${y}">${y}</option>`;
  yearSelect.innerHTML = opts;
}

function vehicleSearch() {
  const make = document.getElementById('vMake').value;
  const model = document.getElementById('vModel').value;
  const year = document.getElementById('vYear').value;
  if (!make || !model) { showToast('⚠ Please select a Make and Model'); return; }
  const info = VEHICLE_DATA[make]?.[model];
  if (!info) { showToast('Vehicle not found in database'); return; }
  if (year && (parseInt(year) < info.start || parseInt(year) > info.end)) {
    showToast(`⚠ No tire data for ${year} ${make} ${model}`); return;
  }
  vehicleSizeFilter = info.sizes;
  vehicleFilterLabel = `${year ? year + ' ' : ''}${make} ${model}`;
  document.getElementById('searchInput').value = '';
  showPage('shop');
  showToast(`🚗 Showing tires for ${vehicleFilterLabel}`);
}

function clearVehicleFilter() {
  vehicleSizeFilter = [];
  vehicleFilterLabel = '';
  document.getElementById('vehicleFilterBanner').style.display = 'none';
  applyFilters();
}

// ── Filters ───────────────────────────────────────────────────────────────────
function applyFilters() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  const cond = document.getElementById('filterCond').value;
  const brand = document.getElementById('filterBrand').value;
  const type = document.getElementById('filterType').value;
  const sort = document.getElementById('filterSort').value;

  // Show/update vehicle filter banner
  const banner = document.getElementById('vehicleFilterBanner');
  if (banner) {
    if (vehicleSizeFilter.length > 0) {
      banner.style.display = 'flex';
      document.getElementById('vehicleFilterLabel').textContent = vehicleFilterLabel;
    } else {
      banner.style.display = 'none';
    }
  }

  let results = allInventory.filter(i => {
    // Vehicle size filter — only show tires matching the vehicle's sizes
    if (vehicleSizeFilter.length > 0) {
      const norm = (i.size||'').replace(/\s/g,'').toUpperCase();
      if (!vehicleSizeFilter.some(s => s.replace(/\s/g,'').toUpperCase() === norm)) return false;
    }
    if (cond && i.condition !== cond) return false;
    if (brand && i.brand !== brand) return false;
    if (type && i.type !== type) return false;
    if (query) {
      const hay = `${i.size} ${i.brand} ${i.type} ${i.condition}`.toLowerCase();
      if (!hay.includes(query)) return false;
    }
    return true;
  });

  results.sort((a, b) => {
    if (sort === 'price-asc') return (a.sell||0) - (b.sell||0);
    if (sort === 'price-desc') return (b.sell||0) - (a.sell||0);
    if (sort === 'brand') return (a.brand||'').localeCompare(b.brand||'');
    return 0;
  });

  renderGrid(results);
  const count = results.length;
  const t = i18n[currentLang];
  document.getElementById('resultCount').textContent =
    `${count} ${count !== 1 ? (t.result_plural||'tires found') : (t.result_singular||'tire found')}`;

  document.getElementById('emptyState').style.display = results.length ? 'none' : 'block';
}

function clearFilters() {
  vehicleSizeFilter = [];
  vehicleFilterLabel = '';
  document.getElementById('searchInput').value = '';
  document.getElementById('filterCond').value = '';
  document.getElementById('filterBrand').value = '';
  document.getElementById('filterType').value = '';
  document.getElementById('filterSort').value = 'price-asc';
  document.querySelectorAll('.brand-pill').forEach(p => p.classList.remove('active'));
  applyFilters();
}

function filterByBrand(brand) {
  // Clear other filters so all tires of this brand show
  document.getElementById('filterCond').value = '';
  document.getElementById('filterType').value = '';
  document.getElementById('searchInput').value = '';
  document.getElementById('filterBrand').value = brand;
  showPage('shop');
  applyFilters();
}

// ── Render tire grid ──────────────────────────────────────────────────────────
function renderGrid(tires) {
  const grid = document.getElementById('tireGrid');
  if (!tires.length) {
    grid.innerHTML = '';
    return;
  }

  grid.innerHTML = tires.map((tire, idx) => {
    const t = i18n[currentLang];
    const isNew = tire.condition === 'New';
    const outOfStock = tire.qty === 0;
    const price = tire.sell ? `$${Number(tire.sell).toFixed(2)}` : (t.call_for_price || 'Call for Price');

    const photos = tire.imgUrls && tire.imgUrls.length ? tire.imgUrls : (tire.imgUrl ? [tire.imgUrl] : []);
    const imgHtml = photos.length
      ? `<div class="card-img" onclick="openTireModal(${idx})"><img src="${photos[0]}" alt="${tire.size}" loading="lazy"/></div>`
      : `<div class="card-img card-img-placeholder" onclick="openTireModal(${idx})"><div class="card-img-no-photo">📷<br/>${t.no_photo||'No photo available'}</div></div>`;
    return `
    <div class="tire-card" style="animation-delay:${idx * 0.04}s">
      ${imgHtml}
      <div class="card-badge-row">
        <span class="cond-badge ${isNew ? 'cond-new' : 'cond-used'}">${isNew ? (t.cond_new_badge||'🟢 New') : (t.cond_used_badge||'🟡 Used')}</span>
        ${outOfStock ? `<span class="stock-badge stock-out">${t.out_of_stock||'Out of Stock'}</span>` : ''}
      </div>
      <div class="card-body" onclick="openTireModal(${idx})" style="cursor:pointer">
        <div class="card-size">${tire.size || '—'}</div>
        <div class="card-brand">${tire.brand || 'Brand N/A'}</div>
        <div class="card-type">${tire.type || ''}</div>
      </div>
      <div class="card-footer">
        <div>
          <div class="card-price">${price}</div>
          <div class="card-price-label">${t.per_tire||'per tire'}</div>
        </div>
        ${outOfStock
          ? `<button class="card-add-btn" disabled>${t.out_of_stock||'Out of Stock'}</button>`
          : `<div class="card-add-row">
              <input type="number" class="card-qty-input" id="qty_${idx}" value="1" min="1" max="${tire.qty}" aria-label="Quantity" onclick="event.stopPropagation()"/>
              <button class="card-add-btn" onclick="event.stopPropagation();addToCart(${idx})">${t.add_to_cart||'+ Add'}</button>
             </div>`
        }
      </div>
    </div>`;
  }).join('');

  // Store filtered list for cart reference
  window._currentTires = tires;
}

// ── Tire Detail Modal ─────────────────────────────────────────────────────────
let _modalTire = null;
let _modalPhotoIdx = 0;

function openTireModal(idx) {
  const tire = window._currentTires[idx];
  if (!tire) return;
  _modalTire = tire;
  _modalPhotoIdx = 0;
  const photos = tire.imgUrls && tire.imgUrls.length ? tire.imgUrls : (tire.imgUrl ? [tire.imgUrl] : []);
  const t = i18n[currentLang];
  const isNew = tire.condition === 'New';
  const outOfStock = tire.qty === 0;
  const price = tire.sell ? `$${Number(tire.sell).toFixed(2)}` : (t.call_for_price || 'Call for Price');

  const thumbsHtml = photos.length > 1
    ? `<div class="tire-modal-thumbs">${photos.map((url, i) =>
        `<div class="tire-modal-thumb${i===0?' active':''}" id="tmThumb${i}" onclick="tireModalGoTo(${i})"><img src="${url}" alt=""/></div>`
      ).join('')}</div>` : '';

  const navHtml = photos.length > 1
    ? `<button class="tire-modal-nav tire-modal-prev" onclick="tireModalPrev()">&#8249;</button>
       <button class="tire-modal-nav tire-modal-next" onclick="tireModalNext()">&#8250;</button>` : '';

  const galleryHtml = photos.length
    ? `<div class="tire-modal-main-img"><img src="${photos[0]}" alt="${tire.size}" id="tmMainImgEl"/></div>${navHtml}${thumbsHtml}`
    : `<div class="tire-modal-no-photo">📷<br/>${t.no_photo||'No photo available'}</div>`;

  const addHtml = outOfStock
    ? `<button class="tire-modal-add-btn" disabled>${t.out_of_stock||'Out of Stock'}</button>`
    : `<div class="tire-modal-add-row">
         <input type="number" class="tire-modal-qty" id="tmQty" value="1" min="1" max="${tire.qty}"/>
         <button class="tire-modal-add-btn" onclick="addToCartFromModal()">${t.add_to_cart||'+ Add to Cart'}</button>
       </div>`;

  document.getElementById('tireModal').innerHTML = `
    <button class="tire-modal-close" onclick="closeTireModal()">✕</button>
    <div class="tire-modal-gallery">${galleryHtml}</div>
    <div class="tire-modal-info">
      <span class="tire-modal-cond ${isNew?'new':'used'}">${isNew ? (t.cond_new_badge||'🟢 New') : (t.cond_used_badge||'🟡 Used')}</span>
      <div class="tire-modal-size">${tire.size || '—'}</div>
      ${tire.brand ? `<div class="tire-modal-brand">${tire.brand}</div>` : ''}
      ${tire.type ? `<div class="tire-modal-type">${tire.type}</div>` : ''}
      <div>
        <div class="tire-modal-price">${price}</div>
        <div class="tire-modal-price-label">${t.per_tire||'per tire'}</div>
      </div>
      <div class="tire-modal-stock">${t.in_stock||'In stock'}: ${tire.qty}</div>
      ${tire.notes ? `<div style="font-size:13px;color:var(--muted2);font-style:italic">${tire.notes}</div>` : ''}
      ${addHtml}
    </div>`;

  document.getElementById('tireModalOverlay').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeTireModal() {
  document.getElementById('tireModalOverlay').classList.add('hidden');
  document.body.style.overflow = '';
  _modalTire = null;
}

function _getModalPhotos() {
  if (!_modalTire) return [];
  return _modalTire.imgUrls && _modalTire.imgUrls.length ? _modalTire.imgUrls : (_modalTire.imgUrl ? [_modalTire.imgUrl] : []);
}

function tireModalPrev() {
  const photos = _getModalPhotos();
  tireModalGoTo((_modalPhotoIdx - 1 + photos.length) % photos.length);
}

function tireModalNext() {
  const photos = _getModalPhotos();
  tireModalGoTo((_modalPhotoIdx + 1) % photos.length);
}

function tireModalGoTo(idx) {
  const photos = _getModalPhotos();
  _modalPhotoIdx = idx;
  const imgEl = document.getElementById('tmMainImgEl');
  if (imgEl) imgEl.src = photos[idx];
  document.querySelectorAll('.tire-modal-thumb').forEach((el, i) => el.classList.toggle('active', i === idx));
}

function addToCartFromModal() {
  if (!_modalTire) return;
  const qtyInput = document.getElementById('tmQty');
  const qty = qtyInput ? Math.min(Math.max(1, parseInt(qtyInput.value) || 1), _modalTire.qty) : 1;
  const existing = cart.find(c => c.size === _modalTire.size && c.brand === _modalTire.brand && c.condition === _modalTire.condition);
  if (existing) {
    existing.qty = (existing.qty || 1) + qty;
  } else {
    cart.push({ size: _modalTire.size, brand: _modalTire.brand, condition: _modalTire.condition, price: _modalTire.sell, qty });
  }
  saveCart();
  showToast(`✓ ${qty}x ${_modalTire.size} added to cart`);
  closeTireModal();
}

// close modal on Escape key
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeTireModal(); });

function showNoInventory() {
  document.getElementById('tireGrid').innerHTML = `
    <div class="loading-state">
      <div class="empty-icon">🛞</div>
      <p style="margin-top:12px">Inventory is being updated. Call us for availability!</p>
    </div>`;
}

// ── Cart ──────────────────────────────────────────────────────────────────────
function addToCart(idx) {
  const tire = window._currentTires[idx];
  if (!tire) return;
  const qtyInput = document.getElementById(`qty_${idx}`);
  const qty = qtyInput ? Math.min(Math.max(1, parseInt(qtyInput.value) || 1), tire.qty) : 1;
  const existing = cart.find(c => c.size === tire.size && c.brand === tire.brand && c.condition === tire.condition);
  if (existing) {
    existing.qty = (existing.qty || 1) + qty;
  } else {
    cart.push({ size: tire.size, brand: tire.brand, condition: tire.condition, price: tire.sell, qty });
  }
  saveCart();
  showToast(`✓ ${qty}x ${tire.size} added to cart`);
}

function removeFromCart(idx) {
  cart.splice(idx, 1);
  saveCart();
}

function saveCart() {
  localStorage.setItem('mt_cart', JSON.stringify(cart));
  updateCartBadge();
  renderCart();
}

function updateCartBadge() {
  const total = cart.reduce((s, c) => s + (c.qty||1), 0);
  document.getElementById('cartBadge').textContent = total;
}

function renderCart() {
  const body = document.getElementById('cartBody');
  const footer = document.getElementById('cartFooter');
  if (!cart.length) {
    const t = i18n[currentLang];
    body.innerHTML = `<div class="cart-empty">${t.cart_empty||'Your cart is empty.<br/>Add tires from the shop!'}</div>`;
    footer.style.display = 'none';
    return;
  }
  const total = cart.reduce((s, c) => s + ((c.price||0) * (c.qty||1)), 0);
  body.innerHTML = cart.map((c, i) => `
    <div class="cart-item">
      <div class="cart-item-info">
        <div class="cart-item-size">${c.size || '—'}</div>
        <div class="cart-item-detail">${c.brand || ''} · ${c.condition || ''} · Qty: ${c.qty||1}</div>
      </div>
      <div class="cart-item-price">$${((c.price||0) * (c.qty||1)).toFixed(2)}</div>
      <button class="cart-item-remove" onclick="removeFromCart(${i})">✕</button>
    </div>`).join('');

  document.getElementById('cartTotal').textContent = `$${total.toFixed(2)}`;
  footer.style.display = 'block';
}

function toggleCart() {
  document.getElementById('cartSidebar').classList.toggle('open');
  document.getElementById('cartOverlay').classList.toggle('open');
}

function checkoutCart() {
  if (!cart.length) return;

  // Populate the cart summary block in the quote form
  const summaryField = document.getElementById('cartSummaryField');
  const summaryDiv = document.getElementById('cartQuoteSummary');
  if (summaryDiv) {
    const estimatedTotal = cart.reduce((s, c) => s + ((c.price||0) * (c.qty||1)), 0);
    summaryDiv.innerHTML = cart.map(c => `
      <div class="cart-quote-item">
        <span class="cqi-size">${c.size}</span>
        <span class="cqi-detail">${c.brand} · ${c.condition}</span>
        <span class="cqi-qty">Qty: ${c.qty||1}</span>
        <span class="cqi-price">$${((c.price||0)*(c.qty||1)).toFixed(2)}</span>
      </div>`).join('') +
      `<div class="cart-quote-total">Estimated Total: <strong>$${estimatedTotal.toFixed(2)}</strong></div>`;
    summaryField.style.display = 'block';
  }

  // Pre-fill size and qty fields
  const totalQty = cart.reduce((s, c) => s + (c.qty||1), 0);
  const sizes = [...new Set(cart.map(c => c.size))].join(', ');
  document.getElementById('qSize').value = sizes;
  const qtySelect = document.getElementById('qQty');
  qtySelect.value = ['1','2','4'].includes(String(totalQty)) ? String(totalQty) : 'other';

  // Pre-fill notes with a plain list (user can still edit)
  const lines = cart.map(c => `${c.qty||1}x ${c.size} ${c.brand} (${c.condition})`).join('\n');
  document.getElementById('qNotes').value = lines;

  toggleCart();
  showPage('contact');
}

// ── Quote form ────────────────────────────────────────────────────────────────
function submitQuote(e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  btn.textContent = i18n[currentLang].sending || 'Sending…';
  btn.disabled = true;

  const firstName = document.getElementById('qFirstName').value;
  const lastName  = document.getElementById('qLastName').value;
  const phone     = document.getElementById('qPhone').value;
  const email     = document.getElementById('qEmail').value;
  const size      = document.getElementById('qSize').value;
  const qty       = document.getElementById('qQty').value;
  const condition = document.getElementById('qCond').value;
  const notes     = document.getElementById('qNotes').value;

  const cartLines = cart.length
    ? cart.map(c => `${c.qty||1}x ${c.size} ${c.brand} (${c.condition}) — $${((c.price||0)*(c.qty||1)).toFixed(2)}`).join('\n')
    : 'No cart items';
  const serviceLines = selectedServices.length ? selectedServices.join(', ') : 'None';

  const templateParams = {
    from_name:  `${firstName} ${lastName}`,
    reply_to:   email || 'Not provided',
    phone:      phone,
    size:       size || 'Not specified',
    qty:        qty,
    condition:  condition,
    services:   serviceLines,
    cart_items: cartLines,
    notes:      notes || 'None',
    timestamp:  new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }),
  };

  // Save to Firestore
  if (window._db && window._firestoreDoc && window._setDoc) {
    try {
      const docRef = window._firestoreDoc(window._db, 'quotes', `quote_${Date.now()}`);
      window._setDoc(docRef, { ...templateParams, cartItems: cart, services: [...selectedServices], status: 'pending', createdAt: Date.now() });
    } catch(err) { console.log('Firestore save:', err); }
  }

  // Send email via EmailJS
  emailjs.send('service_wtb1gzm', 'template_a9y4bpc', templateParams)
    .then(() => {
      btn.textContent = i18n[currentLang].form_submit || 'Send Quote Request →';
      btn.disabled = false;
      const fsEl = document.getElementById('formSuccess');
      fsEl.textContent = i18n[currentLang].form_success || "✅ Quote request sent!";
      fsEl.style.display = 'block';
      document.getElementById('quoteForm').reset();
      cart = [];
      saveCart();
      renderCart();
      selectedServices = [];
      document.querySelectorAll('.service-card').forEach(sc => {
        sc.classList.remove('selected');
        const sb = sc.querySelector('.service-add-btn');
        if (sb) { sb.textContent = i18n[currentLang].svc_btn_add || '+ Add to Quote'; sb.classList.remove('selected'); }
      });
      const cta = document.getElementById('servicesCta');
      if (cta) cta.style.display = 'none';
      updateServicesSummary();
      setTimeout(() => document.getElementById('formSuccess').style.display = 'none', 6000);
    })
    .catch(() => {
      btn.textContent = i18n[currentLang].form_submit || 'Send Quote Request →';
      btn.disabled = false;
      showToast('⚠ Failed to send — please call us directly');
    });
}

// ── Services ──────────────────────────────────────────────────────────────────
function toggleService(name, btn) {
  const idx = selectedServices.indexOf(name);
  const t = i18n[currentLang];
  if (idx === -1) {
    selectedServices.push(name);
    btn.textContent = t.svc_btn_added || '✓ Added';
    btn.classList.add('selected');
    btn.closest('.service-card').classList.add('selected');
  } else {
    selectedServices.splice(idx, 1);
    btn.textContent = t.svc_btn_add || '+ Add to Quote';
    btn.classList.remove('selected');
    btn.closest('.service-card').classList.remove('selected');
  }
  updateServicesSummary();
  const cta = document.getElementById('servicesCta');
  if (cta) cta.style.display = selectedServices.length ? 'flex' : 'none';
}

function removeService(name) {
  const idx = selectedServices.indexOf(name);
  if (idx !== -1) selectedServices.splice(idx, 1);
  document.querySelectorAll('.service-card').forEach(card => {
    const h3 = card.querySelector('h3');
    if (h3 && h3.textContent.trim() === name) {
      const btn = card.querySelector('.service-add-btn');
      if (btn) { btn.textContent = i18n[currentLang].svc_btn_add || '+ Add to Quote'; btn.classList.remove('selected'); }
      card.classList.remove('selected');
    }
  });
  updateServicesSummary();
  const cta = document.getElementById('servicesCta');
  if (cta) cta.style.display = selectedServices.length ? 'flex' : 'none';
}

function updateServicesSummary() {
  const field = document.getElementById('servicesSummaryField');
  const div = document.getElementById('servicesSummary');
  if (!field || !div) return;
  if (!selectedServices.length) { field.style.display = 'none'; return; }
  field.style.display = 'block';
  div.innerHTML = selectedServices.map(s =>
    `<span class="service-tag">${s} <button class="service-tag-remove" onclick="removeService('${s}')">✕</button></span>`
  ).join('');
}

function scrollToServicesQuote() {
  updateServicesSummary();
  showPage('contact');
}

// ── Mobile Installation Quote Calculator ─────────────────────────────────────
const SHOP_LAT = 38.7506;
const SHOP_LNG = -77.4753;

const MOBILE_TIERS = [
  { maxMiles: 5,        price: 30  },
  { maxMiles: 10,       price: 45  },
  { maxMiles: 20,       price: 60  },
  { maxMiles: 30,       price: 80  },
  { maxMiles: 50,       price: 100 },
  { maxMiles: Infinity, price: null },
];

function haversine(lat1, lon1, lat2, lon2) {
  const R = 3958.8;
  const toRad = d => d * Math.PI / 180;
  const dLat = toRad(lat2 - lat1), dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat/2)**2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function showMobileQuoteResult(miles) {
  const tier = MOBILE_TIERS.find(t => miles <= t.maxMiles);
  const el = document.getElementById('mqcResult');
  el.style.display = 'block';
  if (!tier || tier.price === null) {
    el.innerHTML = `
      <div class="mqr-distance">📍 ${miles.toFixed(1)} miles from our location</div>
      <div class="mqr-call">Your location is over 50 miles away. Please call us for a custom installation quote.</div>
      <a href="tel:5715550199" class="mqr-phone-btn">📞 Call for Custom Quote</a>`;
  } else {
    el.innerHTML = `
      <div class="mqr-distance">📍 ${miles.toFixed(1)} miles from our location</div>
      <div class="mqr-price-row">
        <span class="mqr-label">Mobile Installation</span>
        <span class="mqr-price">$${tier.price}</span>
      </div>
      <p class="mqr-note">Per vehicle · Includes mounting &amp; balancing · Tire cost billed separately</p>
      <button class="mqr-cta" onclick="scrollToServicesQuote()">Request This Service →</button>`;
  }
}

async function calcMobileQuote() {
  const address = document.getElementById('mqcAddress').value.trim();
  if (!address) { showToast('⚠ Please enter your address or ZIP code'); return; }
  showToast('📍 Looking up address…');
  try {
    const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1&countrycodes=us`, { headers: { 'Accept-Language': 'en' } });
    const data = await res.json();
    if (!data.length) { showToast('⚠ Address not found — try a more specific address or ZIP'); return; }
    const miles = haversine(SHOP_LAT, SHOP_LNG, parseFloat(data[0].lat), parseFloat(data[0].lon));
    showMobileQuoteResult(miles);
  } catch(e) {
    showToast('⚠ Could not look up address. Check your connection and try again.');
  }
}

function getMobileQuoteGPS() {
  if (!navigator.geolocation) { showToast('⚠ Location not supported by your browser'); return; }
  showToast('📍 Getting your location…');
  navigator.geolocation.getCurrentPosition(
    pos => showMobileQuoteResult(haversine(SHOP_LAT, SHOP_LNG, pos.coords.latitude, pos.coords.longitude)),
    () => showToast('⚠ Could not access location — please enter your address instead.')
  );
}

// ── Toast ─────────────────────────────────────────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// ── Quote injection via Firebase ──────────────────────────────────────────────
window.addEventListener('firebase-ready', () => {
  // expose setDoc for quote saving
  import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js").then(m => {
    window._setDoc = m.setDoc;
  });
});
