// === PRODUCT DATA ===
const PRODUCTS = [
  // GPU
  { id: 1, name: "NVIDIA GeForce RTX 5090", cat: "gpu", icon: "🎮", price: 89999, oldPrice: 94999, badge: "hot", desc: "En güçlü tüketici grafik kartı. 32GB GDDR7, 4K Ultra'da kusursuz performans.", color: "#00e5ff", specs: { "VRAM": "32 GB GDDR7", "TDP": "575W", "CUDA Çekirdeği": "21760", "Arayüz": "PCIe 5.0 x16" } },
  { id: 2, name: "NVIDIA GeForce RTX 5080", cat: "gpu", icon: "🖥️", price: 54999, oldPrice: 59999, badge: "sale", desc: "Üst düzey oyun deneyimi. 16GB GDDR7 bellek, ray-tracing ve DLSS 4 desteği.", color: "#00e5ff", specs: { "VRAM": "16 GB GDDR7", "TDP": "320W", "CUDA Çekirdeği": "10752", "Arayüz": "PCIe 5.0 x16" } },
  { id: 3, name: "AMD Radeon RX 9070 XT", cat: "gpu", icon: "🔴", price: 29999, oldPrice: null, badge: "new", desc: "AMD'nin yeni nesil amiral gemisi. FSR 4.0 ve RayTracing desteğiyle hızlı.", color: "#00e5ff", specs: { "VRAM": "16 GB GDDR6", "TDP": "304W", "Shader": "4096", "Arayüz": "PCIe 5.0 x16" } },
  { id: 4, name: "NVIDIA GeForce RTX 5070 Ti", cat: "gpu", icon: "⚡", price: 37999, oldPrice: 42000, badge: "sale", desc: "Orta-üst segment için mükemmel denge. 16GB bellek, yüksek FPS garantisi.", color: "#00e5ff", specs: { "VRAM": "16 GB GDDR7", "TDP": "300W", "CUDA Çekirdeği": "8960", "Arayüz": "PCIe 5.0 x16" } },

  // CPU
  { id: 5, name: "AMD Ryzen 9 9950X", cat: "cpu", icon: "🧠", price: 24999, oldPrice: 27999, badge: "hot", desc: "16 çekirdek, 32 thread. Masaüstü işlemcilerin zirvesi. 5.7 GHz boost.", color: "#7c4dff", specs: { "Çekirdek": "16C / 32T", "Boost": "5.7 GHz", "TDP": "170W", "Soket": "AM5" } },
  { id: 6, name: "Intel Core Ultra 9 285K", cat: "cpu", icon: "💡", price: 21999, oldPrice: 23999, badge: null, desc: "Intel'in en güçlü masaüstü işlemcisi. 24 çekirdek, oyun ve iş yükü dengesi.", color: "#7c4dff", specs: { "Çekirdek": "24C / 24T", "Boost": "5.7 GHz", "TDP": "125W", "Soket": "LGA1851" } },
  { id: 7, name: "AMD Ryzen 7 9700X", cat: "cpu", icon: "⚙️", price: 12999, oldPrice: null, badge: "new", desc: "8 çekirdek, 16 thread. Oyuncular için ideal fiyat/performans seçeneği.", color: "#7c4dff", specs: { "Çekirdek": "8C / 16T", "Boost": "5.5 GHz", "TDP": "65W", "Soket": "AM5" } },

  // RAM
  { id: 8, name: "Corsair Dominator DDR5-7200 64GB", cat: "ram", icon: "💾", price: 8999, oldPrice: 10499, badge: "sale", desc: "Yüksek frekanslı DDR5 kit. XMP 3.0 desteği, RGB aydınlatma ile görsellik.", color: "#00e676", specs: { "Kapasite": "2x32 GB", "Frekans": "7200 MHz", "Gecikme": "CL34", "Tip": "DDR5" } },
  { id: 9, name: "G.SKILL Trident Z5 DDR5-6400 32GB", cat: "ram", icon: "🔧", price: 4999, oldPrice: null, badge: "new", desc: "32GB DDR5 kit, 6400MHz hız. Tüm Z890 ve X870 anakartlarla tam uyumlu.", color: "#00e676", specs: { "Kapasite": "2x16 GB", "Frekans": "6400 MHz", "Gecikme": "CL32", "Tip": "DDR5" } },
  { id: 10, name: "Kingston Fury Beast DDR5-5600 64GB", cat: "ram", icon: "👾", price: 6499, oldPrice: 7200, badge: null, desc: "Giriş seviyesi DDR5. Uygun fiyata yüksek kapasiteli sistem belleği.", color: "#00e676", specs: { "Kapasite": "2x32 GB", "Frekans": "5600 MHz", "Gecikme": "CL40", "Tip": "DDR5" } },

  // STORAGE
  { id: 11, name: "Samsung 990 Pro 2TB NVMe", cat: "storage", icon: "💿", price: 4299, oldPrice: 4999, badge: "hot", desc: "7450 MB/s okuma hızıyla en hızlı tüketici SSD'lerinden biri. PCIe 4.0.", color: "#ffea00", specs: { "Kapasite": "2 TB", "Okuma": "7450 MB/s", "Yazma": "6900 MB/s", "Arayüz": "PCIe 4.0 x4" } },
  { id: 12, name: "WD Black SN850X 4TB", cat: "storage", icon: "🗄️", price: 7999, oldPrice: null, badge: "new", desc: "4TB kapasiteli, oyun optimize PCIe 4.0 SSD. Game Mode 2.0 teknolojisi.", color: "#ffea00", specs: { "Kapasite": "4 TB", "Okuma": "7300 MB/s", "Yazma": "6600 MB/s", "Arayüz": "PCIe 4.0 x4" } },
  { id: 13, name: "Crucial T705 2TB PCIe 5.0", cat: "storage", icon: "⚡", price: 6999, oldPrice: 8499, badge: "sale", desc: "PCIe 5.0 ile 14.5 GB/s okuma hızı. Depolama dünyasının en hızlısı.", color: "#ffea00", specs: { "Kapasite": "2 TB", "Okuma": "14500 MB/s", "Yazma": "12700 MB/s", "Arayüz": "PCIe 5.0 x4" } },

  // MOBO
  { id: 14, name: "ASUS ROG Crosshair X870E", cat: "mobo", icon: "🖥️", price: 19999, oldPrice: 22999, badge: "hot", desc: "AM5 soket, DDR5, PCIe 5.0 desteği. E-ATX format, WiFi 7 dahili.", color: "#ff6d00", specs: { "Soket": "AM5", "Form Faktör": "E-ATX", "Bellek": "DDR5 x4", "USB": "USB 4 Gen3" } },
  { id: 15, name: "MSI MEG Z890 ACE", cat: "mobo", icon: "🏆", price: 14999, oldPrice: null, badge: "new", desc: "LGA1851 soket Intel için üst segment anakart. 10G LAN ve Thunderbolt 5.", color: "#ff6d00", specs: { "Soket": "LGA1851", "Form Faktör": "ATX", "Bellek": "DDR5 x4", "LAN": "10G Ethernet" } },
  { id: 16, name: "Gigabyte B850 AORUS Elite", cat: "mobo", icon: "⚙️", price: 6999, oldPrice: 7999, badge: "sale", desc: "Orta segment AM5 anakartı. Ryzen 9000 serisiyle mükemmel uyum.", color: "#ff6d00", specs: { "Soket": "AM5", "Form Faktör": "ATX", "Bellek": "DDR5 x4", "PCIe": "5.0 x16" } },

  // PSU
  { id: 17, name: "Corsair HX1200i 1200W Platinum", cat: "psu", icon: "🔌", price: 5999, oldPrice: 6799, badge: null, desc: "80+ Platinum sertifikalı 1200W güç kaynağı. Tam modüler, 10 yıl garanti.", color: "#f50057", specs: { "Güç": "1200W", "Verim": "80+ Platinum", "Modüler": "Tam Modüler", "Garanti": "10 Yıl" } },
  { id: 18, name: "be quiet! Dark Power 13 1000W", cat: "psu", icon: "🌑", price: 4999, oldPrice: null, badge: "new", desc: "Titanium verimlilik sertifikalı. Ultra sessiz çalışma, düşük sıcaklıklar.", color: "#f50057", specs: { "Güç": "1000W", "Verim": "80+ Titanium", "Modüler": "Tam Modüler", "Fan": "135mm" } },
  { id: 19, name: "EVGA SuperNOVA 850W Gold", cat: "psu", icon: "⚡", price: 2999, oldPrice: 3499, badge: "sale", desc: "850W 80+ Gold güç kaynağı. Tam modüler, sessiz çalışma modu.", color: "#f50057", specs: { "Güç": "850W", "Verim": "80+ Gold", "Modüler": "Tam Modüler", "Garanti": "7 Yıl" } },

  // COOLING
  { id: 20, name: "Noctua NH-D15 G2 LBC", cat: "cooling", icon: "❄️", price: 3499, oldPrice: null, badge: "new", desc: "Noctua'nın yeni nesil çift kule soğutucusu. Sıvı soğutmaya meydan okuyor.", color: "#00bfa5", specs: { "Tip": "Hava Soğutma", "Fan": "2x 140mm", "TDP": "250W+", "Soket": "AM5/LGA1851" } },
  { id: 21, name: "ARCTIC Liquid Freezer III 360", cat: "cooling", icon: "🧊", price: 4299, oldPrice: 4999, badge: "sale", desc: "360mm AIO sıvı soğutucu. Yüksek akışlı pompa, 3x120mm fan.", color: "#00bfa5", specs: { "Radyatör": "360 mm", "Pompa": "5000 RPM", "Fan": "3x 120mm", "Soket": "AM5/LGA1851" } },
  { id: 22, name: "Lian Li Galahad II 360 LCD", cat: "cooling", icon: "💧", price: 5999, oldPrice: 7000, badge: "hot", desc: "LCD ekranlı 360mm AIO. Sistem sıcaklıklarını gerçek zamanlı göster.", color: "#00bfa5", specs: { "Radyatör": "360 mm", "Ekran": "2.88\" LCD", "Fan": "3x 120mm ARGB", "Soket": "AM5/LGA1851" } },
];

// === STATE ===
let cart = JSON.parse(localStorage.getItem('tc_cart') || '[]');
let currentFilter = 'all';
let currentSort = 'default';
let filteredProducts = [...PRODUCTS];

// === INIT ===
document.addEventListener('DOMContentLoaded', () => {
  updateCategoryCounts();
  renderProducts();
  renderCart();
  updateCartBadge();
  setupSearch();
  setupHeaderScroll();
  document.getElementById('sortSelect').addEventListener('change', sortProducts);
});

// === CATEGORY COUNTS ===
function updateCategoryCounts() {
  const cats = ['all','gpu','cpu','ram','storage','mobo','psu','cooling'];
  cats.forEach(c => {
    const el = document.getElementById('cnt-' + c);
    if (!el) return;
    const count = c === 'all' ? PRODUCTS.length : PRODUCTS.filter(p => p.cat === c).length;
    el.textContent = count + ' ürün';
  });
}

// === FILTER ===
function filterProducts(cat) {
  currentFilter = cat;
  document.querySelectorAll('.cat-card').forEach(c => {
    c.classList.toggle('active', c.dataset.cat === cat);
  });
  const filterLabel = {
    all: 'TÜM ÜRÜNLER', gpu: 'EKRAN KARTLARI', cpu: 'İŞLEMCİLER',
    ram: 'RAM', storage: 'DEPOLAMA', mobo: 'ANAKARTLAR',
    psu: 'GÜÇ KAYNAKLARI', cooling: 'SOĞUTMA'
  };
  document.getElementById('activeFilter').textContent = filterLabel[cat] || cat.toUpperCase();
  renderProducts();
  document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// === SORT ===
function sortProducts() {
  currentSort = document.getElementById('sortSelect').value;
  renderProducts();
}

// === RENDER PRODUCTS ===
function renderProducts(searchTerm = '') {
  let list = currentFilter === 'all' ? [...PRODUCTS] : PRODUCTS.filter(p => p.cat === currentFilter);

  if (searchTerm) {
    const q = searchTerm.toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)
    );
  }

  if (currentSort === 'price-asc') list.sort((a,b) => a.price - b.price);
  else if (currentSort === 'price-desc') list.sort((a,b) => b.price - a.price);
  else if (currentSort === 'name') list.sort((a,b) => a.name.localeCompare(b.name));

  const grid = document.getElementById('productsGrid');
  const empty = document.getElementById('emptyState');

  if (list.length === 0) {
    grid.innerHTML = '';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';

  grid.innerHTML = list.map((p, i) => `
    <div class="product-card" style="--product-accent:${p.color}; animation-delay:${i * 0.05}s" onclick="openModal(${p.id})">
      <div class="product-img">
        ${p.badge ? `<div class="badge ${p.badge}">${p.badge === 'new' ? 'YENİ' : p.badge === 'hot' ? '🔥 HOT' : 'İNDİRİM'}</div>` : ''}
        <span>${p.icon}</span>
      </div>
      <div class="product-info">
        <div class="product-cat">${catLabel(p.cat)}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-footer">
          <div class="price-block">
            ${p.oldPrice ? `<span class="price-old">${p.oldPrice.toLocaleString('tr-TR')}₺</span>` : ''}
            <span class="price">${p.price.toLocaleString('tr-TR')}₺</span>
          </div>
          <button class="add-btn" onclick="event.stopPropagation(); addToCart(${p.id})" title="Sepete Ekle">+</button>
        </div>
      </div>
    </div>
  `).join('');
}

function catLabel(cat) {
  const labels = { gpu:'Ekran Kartı', cpu:'İşlemci', ram:'RAM', storage:'Depolama', mobo:'Anakart', psu:'Güç Kaynağı', cooling:'Soğutma' };
  return labels[cat] || cat;
}

// === MODAL ===
function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const specHTML = Object.entries(p.specs).map(([k, v]) => `
    <div class="spec-item">
      <div class="spec-key">${k}</div>
      <div class="spec-val">${v}</div>
    </div>`).join('');

  document.getElementById('modalBody').innerHTML = `
    <div class="modal-product-header">
      <div class="modal-icon">${p.icon}</div>
      <div class="modal-product-info">
        <div class="modal-cat">${catLabel(p.cat)}</div>
        <div class="modal-name">${p.name}</div>
        <div class="modal-desc">${p.desc}</div>
        <div class="modal-price-row">
          <span class="modal-price">${p.price.toLocaleString('tr-TR')}₺</span>
          ${p.oldPrice ? `<span class="modal-price-old">${p.oldPrice.toLocaleString('tr-TR')}₺</span>` : ''}
        </div>
      </div>
    </div>
    <div class="modal-specs">
      <h4>Teknik Özellikler</h4>
      <div class="specs-grid">${specHTML}</div>
    </div>
    <div class="modal-actions">
      <button class="btn-primary modal-add-btn" onclick="addToCart(${p.id}); closeModal()">Sepete Ekle</button>
      <button class="btn-ghost" onclick="closeModal()">Kapat</button>
    </div>
  `;
  document.getElementById('modalOverlay').classList.add('open');
  document.getElementById('productModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.getElementById('productModal').classList.remove('open');
  document.body.style.overflow = '';
}

// === CART ===
function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const existing = cart.find(c => c.id === id);
  if (existing) { existing.qty++; }
  else { cart.push({ id: p.id, qty: 1 }); }
  saveCart();
  renderCart();
  updateCartBadge();
  showToast(`"${p.name.split(' ').slice(0,3).join(' ')}..." sepete eklendi!`);
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  renderCart();
  updateCartBadge();
}

function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else { saveCart(); renderCart(); updateCartBadge(); }
}

function saveCart() { localStorage.setItem('tc_cart', JSON.stringify(cart)); }

function renderCart() {
  const container = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  if (cart.length === 0) {
    container.innerHTML = '<div class="cart-empty">Sepetiniz boş.</div>';
    footer.style.display = 'none';
    return;
  }
  let total = 0;
  container.innerHTML = cart.map(c => {
    const p = PRODUCTS.find(x => x.id === c.id);
    if (!p) return '';
    total += p.price * c.qty;
    return `
      <div class="cart-item">
        <div class="cart-item-icon">${p.icon}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-price">${(p.price * c.qty).toLocaleString('tr-TR')}₺</div>
        </div>
        <div class="cart-qty">
          <button class="qty-btn" onclick="changeQty(${p.id}, -1)">−</button>
          <span class="qty-num">${c.qty}</span>
          <button class="qty-btn" onclick="changeQty(${p.id}, +1)">+</button>
        </div>
      </div>`;
  }).join('');
  document.getElementById('cartTotal').textContent = total.toLocaleString('tr-TR') + '₺';
  footer.style.display = 'block';
}

function updateCartBadge() {
  const count = cart.reduce((s, c) => s + c.qty, 0);
  const badge = document.getElementById('cartCount');
  badge.textContent = count;
  badge.style.display = count > 0 ? 'flex' : 'none';
}

function openCart() {
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('cartBtn').addEventListener('click', openCart);

function checkout() {
  if (cart.length === 0) return;
  const total = cart.reduce((s, c) => {
    const p = PRODUCTS.find(x => x.id === c.id);
    return s + (p ? p.price * c.qty : 0);
  }, 0);
  showToast(`🎉 Sipariş oluşturuldu! Toplam: ${total.toLocaleString('tr-TR')}₺`);
  cart = [];
  saveCart();
  renderCart();
  updateCartBadge();
  setTimeout(closeCart, 1200);
}

// === SEARCH ===
function setupSearch() {
  const btn = document.getElementById('searchBtn');
  const bar = document.getElementById('searchBar');
  const input = document.getElementById('searchInput');
  const close = document.getElementById('searchClose');

  btn.addEventListener('click', () => {
    bar.classList.toggle('open');
    if (bar.classList.contains('open')) { input.focus(); }
  });
  close.addEventListener('click', () => {
    bar.classList.remove('open');
    input.value = '';
    renderProducts();
  });
  input.addEventListener('input', () => {
    const term = input.value.trim();
    if (term) {
      currentFilter = 'all';
      document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('active'));
      document.querySelector('[data-cat="all"]').classList.add('active');
      renderProducts(term);
    } else {
      renderProducts();
    }
  });
  input.addEventListener('keydown', e => {
    if (e.key === 'Escape') { bar.classList.remove('open'); input.value = ''; renderProducts(); }
  });
}

// === HEADER SCROLL ===
function setupHeaderScroll() {
  let lastY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    const header = document.getElementById('header');
    if (y > 80) header.style.boxShadow = '0 4px 32px rgba(0,0,0,0.5)';
    else header.style.boxShadow = 'none';
    lastY = y;
  });
}

// === TOAST ===
let toastTimeout;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => t.classList.remove('show'), 2800);
}
