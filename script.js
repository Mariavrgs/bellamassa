/* ══ NAVBAR SCROLL ══ */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  /* ══ HAMBURGER ══ */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileClose = document.getElementById('mobileClose');
  hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
  mobileClose.addEventListener('click', () => mobileMenu.classList.remove('open'));
  document.querySelectorAll('.mm-link, .mobile-menu .btn-primary').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });

  /* ══ FILTER TABS ══ */
  const tabs = document.querySelectorAll('.tab');
  const allCards = document.querySelectorAll('[data-cat]');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.filter;
      allCards.forEach(card => {
        if (card.dataset.cat === filter) {
          card.style.display = 'flex';
          card.style.flexDirection = 'column';
          card.style.animation = 'fadeUp .4s ease both';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ══ SCROLL REVEAL ══ */
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => revealObserver.observe(el));

  /* ══ CARRINHO ══ */
  const CART_KEY = 'bellamassa_cart_v2';
  let cart = [];

  function loadCart() {
    try { cart = JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch { cart = []; }
  }
  function saveCart() { localStorage.setItem(CART_KEY, JSON.stringify(cart)); }
  function cartTotal() { return cart.reduce((s, i) => s + i.price * i.qty, 0); }
  function fmt(v) { return 'R$\u00a0' + v.toFixed(2).replace('.', ','); }

  function renderCart() {
    const list    = document.getElementById('cartItemsList');
    const empty   = document.getElementById('cartEmpty');
    const footer  = document.getElementById('cartFooter');
    const bubble  = document.getElementById('cartBubble');
    const badge   = document.getElementById('cartCountBadge');
    const subtEl  = document.getElementById('cartSubtotal');
    const totalEl = document.getElementById('cartTotal');
    const delivEl = document.getElementById('cartDelivery');
    const fab     = document.getElementById('cartFab');
    const fabTot  = document.getElementById('cartFabTotal');
    const totalQty = cart.reduce((s, i) => s + i.qty, 0);
    const total    = cartTotal();

    bubble.textContent = totalQty;
    badge.textContent  = totalQty;
    bubble.classList.toggle('show', totalQty > 0);
    fab.classList.toggle('has-items', totalQty > 0);
    fabTot.textContent = fmt(total);

    if (cart.length === 0) {
      empty.style.display  = 'flex';
      footer.style.display = 'none';
      list.querySelectorAll('.cart-item').forEach(el => el.remove());
      return;
    }
    empty.style.display  = 'none';
    footer.style.display = 'flex';
    list.querySelectorAll('.cart-item').forEach(el => el.remove());
    cart.forEach((item, idx) => {
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <img class="cart-item-img" src="${item.img}" alt="${item.name}" />
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">${fmt(item.price * item.qty)}</div>
        </div>
        <div class="cart-item-controls">
          <button class="qty-btn remove" onclick="changeQty(${idx},-1)" aria-label="Diminuir quantidade">−</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${idx},1)" aria-label="Aumentar quantidade">+</button>
        </div>`;
      list.appendChild(div);
    });
    subtEl.textContent  = fmt(total);
    totalEl.textContent = fmt(total);
    delivEl.textContent = total >= 80 ? '🎉 Grátis!' : `Consultar (falta ${fmt(80 - total)})`;
  }

  function changeQty(idx, delta) {
    cart[idx].qty += delta;
    if (cart[idx].qty <= 0) cart.splice(idx, 1);
    saveCart(); renderCart();
  }

  function addToCart(btn) {
    const card  = btn.closest('[data-cat]');
    const name  = card.dataset.name;
    const price = parseFloat(card.dataset.price);
    const img   = card.dataset.img;
    const existing = cart.find(i => i.name === name);
    if (existing) { existing.qty++; } else { cart.push({ name, price, img, qty: 1 }); }
    saveCart(); renderCart();
    btn.textContent = '✓ Adicionado';
    btn.classList.add('added');
    setTimeout(() => { btn.textContent = '+ Carrinho'; btn.classList.remove('added'); }, 1600);
    openCart();
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

  document.getElementById('cartToggle').addEventListener('click', () => {
    document.getElementById('cartSidebar').classList.contains('open') ? closeCart() : openCart();
  });
  document.getElementById('cartCloseBtn').addEventListener('click', closeCart);
  document.getElementById('cartOverlay').addEventListener('click', closeCart);
  document.getElementById('cartFabBtn').addEventListener('click', openCart);

  document.getElementById('btnCheckout').addEventListener('click', () => {
    if (!cart.length) return;
    const lines = cart.map(i => `• ${i.qty}x ${i.name} — ${fmt(i.price * i.qty)}`).join('\n');
    const msg = encodeURIComponent(`Olá! Gostaria de fazer o seguinte pedido na Bella Massa 🍕\n\n${lines}\n\n*Total: ${fmt(cartTotal())}*\n\nAguardo confirmação!`);
    window.open(`https://wa.me/5511999999999?text=${msg}`, '_blank', 'noopener');
  });

  loadCart();
  renderCart();