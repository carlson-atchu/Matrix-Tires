/* ===== Matrix Tires — Store JS ===== */

// ── Language / i18n ───────────────────────────────────────────────────────────
const i18n = {
  en: {
    nav_shop: 'Shop Tires', nav_brands: 'Brands', nav_services: 'Services', nav_contact: 'Contact',
    hero_badge: '🔴 New &amp; Used Tires In Stock',
    hero_title: 'Find Your<br/><span class="hero-accent">Perfect Tire</span>',
    hero_sub: 'Search by size, brand, or category. New and used tires at unbeatable prices with expert installation.',
    tab_size: '🔍 By Tire Size', tab_vehicle: '🚗 By Vehicle',
    lbl_width: 'Width', lbl_aspect: 'Aspect Ratio', lbl_rim: 'Rim Size',
    lbl_make: 'Make', lbl_model: 'Model', lbl_year: 'Year',
    btn_search: 'Search →',
    hvt_headline: 'Shop New &amp; Used Tires<br>for Cars, Trucks &amp; SUVs',
    hvt_body: 'Get the best tires for your vehicle at Matrix Tires. From all-season to performance, we have a wide selection of brands and sizes to fit your needs.',
    trust_1: '✅ Price Match Guarantee', trust_2: '🚗 Mobile Installation Available',
    trust_3: '⚡ Same-Day Service', trust_4: '🔒 Quality Guaranteed',
    promo_badge: 'LIMITED TIME OFFER',
    promo_headline: 'Buy 4 Tires, Get <span class="promo-highlight">Free Installation</span>',
    promo_sub: 'Professional mounting & balancing included — no hidden fees',
    promo_expires: 'Offer expires <strong>June 26, 2026</strong>',
    promo_cta: 'Claim Offer →',
  },
  es: {
    nav_shop: 'Comprar Llantas', nav_brands: 'Marcas', nav_services: 'Servicios', nav_contact: 'Contacto',
    hero_badge: '🔴 Llantas Nuevas y Usadas en Stock',
    hero_title: 'Encuentra Tu<br/><span class="hero-accent">Llanta Perfecta</span>',
    hero_sub: 'Busca por tamaño, marca o categoría. Llantas nuevas y usadas a precios inmejorables con instalación experta.',
    tab_size: '🔍 Por Tamaño', tab_vehicle: '🚗 Por Vehículo',
    lbl_width: 'Ancho', lbl_aspect: 'Relación', lbl_rim: 'Aro',
    lbl_make: 'Marca', lbl_model: 'Modelo', lbl_year: 'Año',
    btn_search: 'Buscar →',
    hvt_headline: 'Compra Llantas Nuevas y Usadas<br>para Autos, Camionetas y SUVs',
    hvt_body: 'Obtén las mejores llantas para tu vehículo en Matrix Tires. Desde todo clima hasta alto rendimiento, tenemos una amplia selección de marcas y tamaños.',
    trust_1: '✅ Garantía de Igualación de Precio', trust_2: '🚗 Instalación Móvil Disponible',
    trust_3: '⚡ Servicio el Mismo Día', trust_4: '🔒 Calidad Garantizada',
    promo_badge: 'OFERTA POR TIEMPO LIMITADO',
    promo_headline: 'Compra 4 Llantas, Obtén <span class="promo-highlight">Instalación Gratis</span>',
    promo_sub: 'Montaje y balanceo profesional incluido — sin cargos ocultos',
    promo_expires: 'Oferta válida hasta el <strong>26 de junio de 2026</strong>',
    promo_cta: 'Reclamar Oferta →',
  }
};

let currentLang = localStorage.getItem('mt_lang') || 'en';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('mt_lang', lang);
  const t = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    if (t[el.dataset.i18n] !== undefined) el.textContent = t[el.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    if (t[el.dataset.i18nHtml] !== undefined) el.innerHTML = t[el.dataset.i18nHtml];
  });
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
  const brands = [...new Set(allInventory.map(i => i.brand).filter(Boolean))].sort();
  const brandSel = document.getElementById('filterBrand');
  const cur = brandSel.value;
  brandSel.innerHTML = '<option value="">All Brands</option>' +
    brands.map(b => `<option value="${b}"${b===cur?' selected':''}>${b}</option>`).join('');

  const brandColors = [
    ['#dc2626','#b91c1c'], ['#ea580c','#c2410c'], ['#d97706','#b45309'],
    ['#16a34a','#15803d'], ['#2563eb','#1d4ed8'], ['#7c3aed','#6d28d9'],
    ['#db2777','#be185d'], ['#0891b2','#0e7490'], ['#65a30d','#4d7c0f'],
    ['#9333ea','#7e22ce'],
  ];
  const brandsGrid = document.getElementById('brandsGrid');
  brandsGrid.innerHTML = brands.map((b, i) => {
    const [c1, c2] = brandColors[i % brandColors.length];
    return `
    <div class="brand-card" onclick="filterByBrand('${b}')">
      <div class="brand-card-accent" style="background:linear-gradient(135deg,${c1},${c2})">
        <span class="brand-card-initial">${b.charAt(0)}</span>
      </div>
      <div class="brand-card-body">
        <div class="brand-card-name">${b}</div>
        <div class="brand-card-cta">Shop ${b} →</div>
      </div>
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
  document.getElementById('resultCount').textContent =
    `${count} tire${count !== 1 ? 's' : ''} found`;

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
  document.getElementById('filterBrand').value = brand;
  document.querySelectorAll('.brand-pill').forEach(p => {
    p.classList.toggle('active', p.textContent === brand);
  });
  scrollToShop();
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
    const isNew = tire.condition === 'New';
    const outOfStock = tire.qty === 0;
    const price = tire.sell ? `$${Number(tire.sell).toFixed(2)}` : 'Call for Price';

    const imgHtml = tire.imgUrl
      ? `<div class="card-img"><img src="${tire.imgUrl}" alt="${tire.size}" loading="lazy"/></div>`
      : '';
    return `
    <div class="tire-card" style="animation-delay:${idx * 0.04}s">
      ${imgHtml}
      <div class="card-badge-row">
        <span class="cond-badge ${isNew ? 'cond-new' : 'cond-used'}">${isNew ? '🟢 New' : '🟡 Used'}</span>
        ${outOfStock ? '<span class="stock-badge stock-out">Out of Stock</span>' : ''}
      </div>
      <div class="card-body">
        <div class="card-size">${tire.size || '—'}</div>
        <div class="card-brand">${tire.brand || 'Brand N/A'}</div>
        <div class="card-type">${tire.type || ''}</div>
      </div>
      <div class="card-footer">
        <div>
          <div class="card-price">${price}</div>
          <div class="card-price-label">per tire</div>
        </div>
        ${outOfStock
          ? `<button class="card-add-btn" disabled>Out of Stock</button>`
          : `<div class="card-add-row">
              <input type="number" class="card-qty-input" id="qty_${idx}" value="1" min="1" max="${tire.qty}" aria-label="Quantity"/>
              <button class="card-add-btn" onclick="addToCart(${idx})">+ Add</button>
             </div>`
        }
      </div>
    </div>`;
  }).join('');

  // Store filtered list for cart reference
  window._currentTires = tires;
}

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
    body.innerHTML = '<div class="cart-empty">Your cart is empty.<br/>Add tires from the shop!</div>';
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
  btn.textContent = 'Sending…';
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
      btn.textContent = 'Send Quote Request →';
      btn.disabled = false;
      document.getElementById('formSuccess').style.display = 'block';
      document.getElementById('quoteForm').reset();
      cart = [];
      saveCart();
      selectedServices = [];
      document.querySelectorAll('.service-card').forEach(sc => {
        sc.classList.remove('selected');
        const sb = sc.querySelector('.service-add-btn');
        if (sb) { sb.textContent = '+ Add to Quote'; sb.classList.remove('selected'); }
      });
      const cta = document.getElementById('servicesCta');
      if (cta) cta.style.display = 'none';
      updateServicesSummary();
      setTimeout(() => document.getElementById('formSuccess').style.display = 'none', 6000);
    })
    .catch(() => {
      btn.textContent = 'Send Quote Request →';
      btn.disabled = false;
      showToast('⚠ Failed to send — please call us directly');
    });
}

// ── Services ──────────────────────────────────────────────────────────────────
function toggleService(name, btn) {
  const idx = selectedServices.indexOf(name);
  if (idx === -1) {
    selectedServices.push(name);
    btn.textContent = '✓ Added';
    btn.classList.add('selected');
    btn.closest('.service-card').classList.add('selected');
  } else {
    selectedServices.splice(idx, 1);
    btn.textContent = '+ Add to Quote';
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
      if (btn) { btn.textContent = '+ Add to Quote'; btn.classList.remove('selected'); }
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
