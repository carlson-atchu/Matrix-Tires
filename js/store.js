/* ===== Matrix Tires — Store JS ===== */

let allInventory = [];
let cart = JSON.parse(localStorage.getItem('mt_cart') || '[]');
let selectedServices = [];

// ── Navbar scroll effect ──────────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
});

// ── Mobile menu ───────────────────────────────────────────────────────────────
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
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
});

// ── Populate filter dropdowns ─────────────────────────────────────────────────
function populateFilters() {
  const brands = [...new Set(allInventory.map(i => i.brand).filter(Boolean))].sort();
  const brandSel = document.getElementById('filterBrand');
  const cur = brandSel.value;
  brandSel.innerHTML = '<option value="">All Brands</option>' +
    brands.map(b => `<option value="${b}"${b===cur?' selected':''}>${b}</option>`).join('');

  const brandsGrid = document.getElementById('brandsGrid');
  brandsGrid.innerHTML = brands.map(b =>
    `<div class="brand-pill" onclick="filterByBrand('${b}')">${b}</div>`
  ).join('');
}

function populateSizeDropdowns() {
  const sizes = allInventory.map(i => parseSize(i.size)).filter(Boolean);
  const widths = [...new Set(sizes.map(s => s.w))].sort((a,b) => a-b);
  const aspects = [...new Set(sizes.map(s => s.a))].sort((a,b) => a-b);
  const rims = [...new Set(sizes.map(s => s.r))].sort((a,b) => a-b);

  fill('hWidth', widths);
  fill('hAspect', aspects);
  fill('hRim', rims);
}

function fill(id, vals) {
  const el = document.getElementById(id);
  el.innerHTML = '<option value="">Any</option>' +
    vals.map(v => `<option value="${v}">${v}</option>`).join('');
}

function parseSize(s) {
  if (!s) return null;
  const m = s.replace(/\s/g,'').match(/^(\d{3})\/?(\d{2})R?(\d{2})$/i);
  return m ? { w: m[1], a: m[2], r: m[3] } : null;
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
  document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
}

// ── Filters ───────────────────────────────────────────────────────────────────
function applyFilters() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  const cond = document.getElementById('filterCond').value;
  const brand = document.getElementById('filterBrand').value;
  const type = document.getElementById('filterType').value;
  const sort = document.getElementById('filterSort').value;

  let results = allInventory.filter(i => {
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
    const stockStatus = tire.qty === 0 ? 'out' : tire.qty <= (tire.lowAt||2) ? 'low' : 'ok';
    const stockLabel = stockStatus === 'out' ? 'Out of Stock' : stockStatus === 'low' ? `Low Stock (${tire.qty} left)` : `In Stock (${tire.qty})`;
    const price = tire.sell ? `$${Number(tire.sell).toFixed(2)}` : 'Call for Price';
    const outOfStock = tire.qty === 0;

    return `
    <div class="tire-card" style="animation-delay:${idx * 0.04}s">
      <div class="card-badge-row">
        <span class="cond-badge ${isNew ? 'cond-new' : 'cond-used'}">${isNew ? '🟢 New' : '🟡 Used'}</span>
        <span class="stock-badge stock-${stockStatus}">${stockLabel}</span>
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
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// ── Quote form ────────────────────────────────────────────────────────────────
function submitQuote(e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  btn.textContent = 'Sending…';
  btn.disabled = true;

  const data = {
    name: `${document.getElementById('qFirstName').value} ${document.getElementById('qLastName').value}`,
    phone: document.getElementById('qPhone').value,
    email: document.getElementById('qEmail').value,
    size: document.getElementById('qSize').value,
    qty: document.getElementById('qQty').value,
    condition: document.getElementById('qCond').value,
    notes: document.getElementById('qNotes').value,
    timestamp: new Date().toISOString(),
    cartItems: cart,
    services: [...selectedServices]
  };

  // Save quote to Firestore
  if (window._db && window._firestoreDoc) {
    const { getFirestore, collection, addDoc } = window;
    // Save as a new doc in quotes collection
    try {
      const db = window._db;
      const quoteId = `quote_${Date.now()}`;
      const docRef = window._firestoreDoc(db, 'quotes', quoteId);
      // Use setDoc if available
      if (window._setDoc) {
        window._setDoc(docRef, data);
      }
    } catch(err) { console.log('Quote save:', err); }
  }

  setTimeout(() => {
    btn.textContent = 'Send Quote Request →';
    btn.disabled = false;
    document.getElementById('formSuccess').style.display = 'block';
    document.getElementById('quoteForm').reset();
    cart = [];
    saveCart();
    selectedServices = [];
    document.querySelectorAll('.service-card').forEach(card => {
      card.classList.remove('selected');
      const btn = card.querySelector('.service-add-btn');
      if (btn) { btn.textContent = '+ Add to Quote'; btn.classList.remove('selected'); }
    });
    const cta = document.getElementById('servicesCta');
    if (cta) cta.style.display = 'none';
    updateServicesSummary();
    setTimeout(() => document.getElementById('formSuccess').style.display = 'none', 6000);
  }, 900);
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
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
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
