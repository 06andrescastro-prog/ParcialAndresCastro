/* Rapadura de Caña — tienda bilingüe ES | EN (carrito simulado) */
const PRODUCTS = [
  { id: "clasica", price: 9.95, img: "img/1-empaque.jpg",
    name: { es: "Rapadura Clásica 500 g", en: "Classic Rapadura 500 g" },
    short: { es: "Panela orgánica en polvo, 100 % jugo de caña.", en: "Organic powdered panela, 100% cane juice." },
    long: { es: "Nuestra panela original: jugo de caña orgánica cocido lentamente en un trapiche familiar de Colombia y molido en polvo fino. Sabor a caramelo y melaza, sin refinar ni blanquear.",
            en: "Our original panela: organic sugarcane juice slow-cooked at a family trapiche in Colombia and milled into a fine powder. Caramel and molasses notes, never refined or bleached." },
    ing: { es: "100 % jugo de caña de azúcar orgánica (panela).", en: "100% organic sugarcane juice (panela)." } },
  { id: "canela", price: 10.95, img: "img/1b-canela.jpg",
    name: { es: "Rapadura con Canela 500 g", en: "Cinnamon Rapadura 500 g" },
    short: { es: "Panela con canela, ideal para café y repostería.", en: "Panela with cinnamon, perfect for coffee and baking." },
    long: { es: "Panela orgánica mezclada con canela molida. Perfecta para un flat white, avena, banana bread o el clásico chocolate colombiano.",
            en: "Organic panela blended with ground cinnamon. Perfect in a flat white, porridge, banana bread or a classic Colombian hot chocolate." },
    ing: { es: "Panela orgánica (97 %), canela molida (3 %).", en: "Organic panela (97%), ground cinnamon (3%)." } },
  { id: "limon", price: 10.95, img: "img/1c-limon.jpg",
    name: { es: "Rapadura Limón y Jengibre 500 g", en: "Lemon & Ginger Rapadura 500 g" },
    short: { es: "Para preparar agua de panela helada en verano.", en: "Make iced agua de panela for summer." },
    long: { es: "Inspirada en la bebida más refrescante de Colombia: agua de panela con limón. Disuelve 2 cucharadas en agua fría con hielo. Ideal para el verano australiano.",
            en: "Inspired by Colombia's most refreshing drink: agua de panela with lemon. Stir 2 tablespoons into cold water with ice. Made for the Aussie summer." },
    ing: { es: "Panela orgánica (95 %), limón deshidratado (3 %), jengibre (2 %).", en: "Organic panela (95%), dried lemon (3%), ginger (2%)." } },
  { id: "recarga", price: 17.95, img: "img/2-linea.jpg",
    name: { es: "Recarga Clásica 1 kg", en: "Classic Refill 1 kg" },
    short: { es: "Bolsa de recarga compostable, mejor precio por kilo.", en: "Compostable refill bag, best value per kilo." },
    long: { es: "La misma Rapadura Clásica en bolsa de recarga compostable de 1 kg. Menos empaque y mejor precio para quienes ya la aman.",
            en: "The same Classic Rapadura in a 1 kg compostable refill bag. Less packaging and better value for those who already love it." },
    ing: { es: "100 % jugo de caña de azúcar orgánica (panela).", en: "100% organic sugarcane juice (panela)." } }
];

const T = {
  es: {
    nav_home: "Inicio", nav_shop: "Tienda", nav_story: "Nuestra historia", nav_ship: "Envíos y pagos", nav_contact: "Contacto", nav_ar: "Ver en AR", cart: "Carrito",
    notice: "Envío gratis en Australia en pedidos desde A$60 · Despachamos desde Sídney",
    hero_t: "Endulzante natural. Del trapiche colombiano a tu mesa.",
    hero_p: "No es solo rapadura: es panela colombiana de verdad. 100 % jugo de caña orgánica, sin refinar, para tu café, tus recetas y tus bebidas.",
    hero_cta: "Comprar ahora", hero_ar: "Ver en tu espacio (AR)",
    v1: "Orgánica certificada", v1d: "Caña cultivada sin químicos en Colombia.",
    v2: "Un solo ingrediente", v2d: "Solo jugo de caña. Nada más.",
    v3: "Comercio justo", v3d: "Precio justo a familias paneleras.",
    shop_t: "Nuestra tienda", shop_p: "Precios finales en dólares australianos (AUD).",
    add: "Agregar al carrito", details: "Ver detalle", added: "Agregado al carrito",
    story_t: "Nuestra historia",
    story_p1: "En las montañas de Colombia, las familias campesinas llevan más de 400 años haciendo panela en el trapiche: muelen la caña, cocinan su jugo a fuego lento y lo dejan secar hasta obtener un dulce dorado.",
    story_p2: "Rapadura de Caña nace para llevar ese saber a Australia. Trabajamos directamente con trapiches familiares, pagamos un precio justo y empacamos con materiales compostables.",
    story_p3: "En Australia la llaman rapadura; en Colombia es panela, y es parte de nuestro día a día. Ahora puede ser parte del tuyo.",
    gal_t: "Rapadura de Caña en Australia",
    ship_t: "Envíos y pagos",
    ship_h: "Envíos en Australia",
    ship_l: ["Despachamos desde nuestra bodega en Sídney con Australia Post.", "Ciudades principales: 2 a 4 días hábiles.", "Zonas regionales: 3 a 7 días hábiles.", "Envío estándar A$9,95 · gratis desde A$60.", "Producto importado de Colombia, inspeccionado y etiquetado según las normas australianas."],
    pay_h: "Medios de pago", pay_p: "Paga como prefieras, de forma segura:",
    pay_n: "Paga en 4 cuotas sin intereses con Afterpay.",
    ar_t: "Mírala en tu cocina antes de comprar",
    ar_p: "Con la realidad aumentada puedes poner el empaque de Rapadura de Caña en tamaño real sobre tu mesa, girarlo y leer su etiqueta.",
    ar_b: "Ver en tu espacio",
    contact_t: "Contacto", c_name: "Nombre", c_email: "Correo", c_msg: "Mensaje", c_send: "Enviar",
    c_ok: "¡Gracias! Te responderemos pronto.",
    c_info: "hola@rapaduradecana.com.au · +61 2 0000 0000 · Sídney, NSW",
    foot: "© 2026 Rapadura de Caña · Hecho en Colombia, disfrutado en Australia · Tienda académica (compra simulada)",
    pd_ben: "Beneficios", pd_ing: "Ingredientes", pd_pres: "Presentación", pd_qty: "Cantidad", back: "← Volver a la tienda",
    ben: ["Endulza 1:1 como el azúcar en café, té y repostería.", "Sin refinar: conserva la melaza natural de la caña.", "Sabor a caramelo, ideal para banana bread y flat white.", "Vegana, sin gluten y sin aditivos."],
    pres: "Doypack kraft resellable con barrera de humedad. Origen: Colombia. Empacado para Australia con etiqueta en inglés.",
    cart_t: "Tu carrito", c_prod: "Producto", c_q: "Cant.", c_sub: "Subtotal", c_ship: "Envío", c_tot: "Total",
    c_empty: "Tu carrito está vacío.", c_free: "Gratis", c_pay: "Pagar (simulado)", c_clear: "Vaciar carrito",
    c_done: "Pedido simulado confirmado. ¡Gracias por tu compra!",
    ar_page_t: "Rapadura de Caña en tu espacio",
    ar_page_p: "Toca el botón para poner el empaque en tamaño real (13 × 22 cm) sobre tu mesa. En computador puedes girarlo con el mouse.",
    ar_btn: "Ver en tu espacio", ar_coupon: "¿Te gustó? Usa el cupón TRAPICHE10 para 10 % de descuento en tu primera compra."
  },
  en: {
    nav_home: "Home", nav_shop: "Shop", nav_story: "Our story", nav_ship: "Shipping & payment", nav_contact: "Contact", nav_ar: "View in AR", cart: "Cart",
    notice: "Free shipping Australia-wide on orders over A$60 · Ships from Sydney",
    hero_t: "Natural sweetener. From the Colombian trapiche to your table.",
    hero_p: "Not just rapadura: real Colombian panela. 100% organic cane juice, unrefined, for your coffee, your baking and your drinks.",
    hero_cta: "Shop now", hero_ar: "View in your space (AR)",
    v1: "Certified organic", v1d: "Sugarcane grown chemical-free in Colombia.",
    v2: "One ingredient", v2d: "Just cane juice. Nothing else.",
    v3: "Fair trade", v3d: "A fair price for panela-making families.",
    shop_t: "Our shop", shop_p: "Final prices in Australian dollars (AUD).",
    add: "Add to cart", details: "View details", added: "Added to cart",
    story_t: "Our story",
    story_p1: "In the mountains of Colombia, farming families have made panela at the trapiche for more than 400 years: they press the cane, slow-cook its juice over the fire and let it dry into a golden sweetener.",
    story_p2: "Rapadura de Caña was born to bring that know-how to Australia. We work directly with family-run trapiches, pay a fair price and pack in compostable materials.",
    story_p3: "In Australia you call it rapadura; in Colombia it's panela, and it's part of everyday life. Now it can be part of yours.",
    gal_t: "Rapadura de Caña in Australia",
    ship_t: "Shipping & payment",
    ship_h: "Shipping in Australia",
    ship_l: ["We ship from our Sydney warehouse with Australia Post.", "Metro areas: 2 to 4 business days.", "Regional areas: 3 to 7 business days.", "Standard shipping A$9.95 · free over A$60.", "Imported from Colombia, inspected and labelled to Australian standards."],
    pay_h: "Payment methods", pay_p: "Pay the way you like, securely:",
    pay_n: "Pay in 4 interest-free instalments with Afterpay.",
    ar_t: "See it in your kitchen before you buy",
    ar_p: "With augmented reality you can place a life-size Rapadura de Caña pouch on your bench, spin it around and read the label.",
    ar_b: "View in your space",
    contact_t: "Contact", c_name: "Name", c_email: "Email", c_msg: "Message", c_send: "Send",
    c_ok: "Thanks! We'll get back to you soon.",
    c_info: "hola@rapaduradecana.com.au · +61 2 0000 0000 · Sydney, NSW",
    foot: "© 2026 Rapadura de Caña · Made in Colombia, enjoyed in Australia · Academic store (simulated checkout)",
    pd_ben: "Benefits", pd_ing: "Ingredients", pd_pres: "Pack", pd_qty: "Quantity", back: "← Back to shop",
    ben: ["Swap 1:1 for sugar in coffee, tea and baking.", "Unrefined: keeps the cane's natural molasses.", "Caramel flavour, perfect for banana bread and flat whites.", "Vegan, gluten-free, no additives."],
    pres: "Resealable kraft doypack with moisture barrier. Origin: Colombia. Packed for Australia with English labelling.",
    cart_t: "Your cart", c_prod: "Product", c_q: "Qty", c_sub: "Subtotal", c_ship: "Shipping", c_tot: "Total",
    c_empty: "Your cart is empty.", c_free: "Free", c_pay: "Checkout (simulated)", c_clear: "Empty cart",
    c_done: "Simulated order confirmed. Thanks for your purchase!",
    ar_page_t: "Rapadura de Caña in your space",
    ar_page_p: "Tap the button to place a life-size pouch (13 × 22 cm) on your table. On a computer you can rotate it with your mouse.",
    ar_btn: "View in your space", ar_coupon: "Like it? Use code TRAPICHE10 for 10% off your first order."
  }
};

/* ---------- estado ---------- */
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
};
const qsLang = new URLSearchParams(location.search).get("lang");
let LANG = (qsLang === "en" || qsLang === "es") ? qsLang : store.get("lang", "es");
let CART = store.get("cart", {});
const t = k => T[LANG][k];
const fmt = n => "A$" + n.toFixed(2).replace(".", LANG === "es" ? "," : ".");
const PH = "img/pack.png";
const imgTag = (src, alt, cls = "") => `<img src="${src}" alt="${alt}" class="${cls}" onerror="this.onerror=null;this.src='${PH}'">`;

/* ---------- header / footer comunes ---------- */
function chrome() {
  const count = Object.values(CART).reduce((a, b) => a + b, 0);
  const h = document.getElementById("hdr");
  if (h) h.innerHTML = `
    <div class="notice">${t("notice")}</div>
    <div class="bar">
      <a href="index.html"><img src="img/logo.svg" alt="Rapadura de Caña"></a>
      <nav>
        <a href="index.html#inicio">${t("nav_home")}</a>
        <a href="index.html#tienda">${t("nav_shop")}</a>
        <a href="index.html#historia">${t("nav_story")}</a>
        <a href="index.html#envios">${t("nav_ship")}</a>
        <a href="index.html#contacto">${t("nav_contact")}</a>
        <a href="ar.html">${t("nav_ar")}</a>
      </nav>
      <div class="right">
        <div class="lang"><button data-l="es" class="${LANG === "es" ? "on" : ""}">ES</button><button data-l="en" class="${LANG === "en" ? "on" : ""}">EN</button></div>
        <a class="cartbtn" href="carrito.html">🛒 ${t("cart")} (${count})</a>
      </div>
    </div>`;
  h && h.querySelectorAll(".lang button").forEach(b => b.onclick = () => setLang(b.dataset.l));
  const f = document.getElementById("ftr");
  if (f) f.innerHTML = `<p>${t("foot")}</p><p style="margin-top:8px"><a href="#">Instagram</a><a href="#">TikTok</a><a href="#">Facebook</a></p>`;
}
function setLang(l) { LANG = l; store.set("lang", l); document.documentElement.lang = l; render(); }

function i18nStatic() {
  document.querySelectorAll("[data-i]").forEach(el => {
    const v = t(el.dataset.i);
    if (Array.isArray(v)) el.innerHTML = v.map(x => `<li>${x}</li>`).join("");
    else if (el.placeholder !== undefined && (el.tagName === "INPUT" || el.tagName === "TEXTAREA")) el.placeholder = v;
    else el.textContent = v;
  });
}

/* ---------- carrito ---------- */
function addToCart(id, q = 1) {
  CART[id] = (CART[id] || 0) + q; store.set("cart", CART); chrome(); toast(t("added"));
}
function toast(msg) {
  let el = document.querySelector(".toast");
  if (!el) { el = document.createElement("div"); el.className = "toast"; document.body.appendChild(el); }
  el.textContent = msg; el.classList.add("show"); setTimeout(() => el.classList.remove("show"), 1800);
}

/* ---------- páginas ---------- */
function renderShop() {
  const g = document.getElementById("grid"); if (!g) return;
  g.innerHTML = PRODUCTS.map(p => `
    <div class="card">
      <a href="producto.html?id=${p.id}">${imgTag(p.img, p.name[LANG])}</a>
      <div class="in">
        <h3>${p.name[LANG]}</h3>
        <p>${p.short[LANG]}</p>
        <div class="price">${fmt(p.price)}</div>
        <div class="btns">
          <button class="btn" onclick="addToCart('${p.id}')">${t("add")}</button>
          <a class="btn ghost" href="producto.html?id=${p.id}">${t("details")}</a>
        </div>
      </div>
    </div>`).join("");
}
function renderProduct() {
  const box = document.getElementById("pd"); if (!box) return;
  const id = new URLSearchParams(location.search).get("id") || "clasica";
  const p = PRODUCTS.find(x => x.id === id) || PRODUCTS[0];
  document.title = p.name[LANG] + " · Rapadura de Caña";
  box.innerHTML = `
    <div>${imgTag(p.img, p.name[LANG])}</div>
    <div>
      <a href="index.html#tienda">${t("back")}</a>
      <h1>${p.name[LANG]}</h1>
      <div class="price" style="font-size:1.6rem;margin:8px 0">${fmt(p.price)}</div>
      <p>${p.long[LANG]}</p>
      <h3 style="margin-top:16px">${t("pd_ben")}</h3><ul>${t("ben").map(b => `<li>${b}</li>`).join("")}</ul>
      <h3>${t("pd_ing")}</h3><p>${p.ing[LANG]}</p>
      <h3 style="margin-top:12px">${t("pd_pres")}</h3><p>${t("pres")}</p>
      <div class="qty"><label>${t("pd_qty")}</label><input id="q" type="number" min="1" value="1"></div>
      <div class="btns">
        <button class="btn" onclick="addToCart('${p.id}', Math.max(1, parseInt(document.getElementById('q').value)||1))">${t("add")}</button>
        <a class="btn alt" href="ar.html">${t("hero_ar")}</a>
      </div>
    </div>`;
}
function renderCart() {
  const box = document.getElementById("cartbox"); if (!box) return;
  const ids = Object.keys(CART).filter(k => CART[k] > 0);
  if (!ids.length) { box.innerHTML = `<p>${t("c_empty")}</p><p style="margin-top:16px"><a class="btn" href="index.html#tienda">${t("hero_cta")}</a></p>`; return; }
  let sub = 0;
  const rows = ids.map(id => {
    const p = PRODUCTS.find(x => x.id === id); const s = p.price * CART[id]; sub += s;
    return `<tr><td>${p.name[LANG]}</td><td>${CART[id]}</td><td>${fmt(s)}</td></tr>`;
  }).join("");
  const ship = sub >= 60 ? 0 : 9.95;
  box.innerHTML = `
    <table><tr><th>${t("c_prod")}</th><th>${t("c_q")}</th><th>${t("c_sub")}</th></tr>${rows}
      <tr><td colspan="2">${t("c_sub")}</td><td>${fmt(sub)}</td></tr>
      <tr><td colspan="2">${t("c_ship")}</td><td>${ship ? fmt(ship) : t("c_free")}</td></tr>
      <tr><th colspan="2">${t("c_tot")}</th><th>${fmt(sub + ship)}</th></tr></table>
    <div class="pay"><span>VISA</span><span>Mastercard</span><span>PayPal</span><span>Afterpay</span><span>Apple Pay</span></div>
    <div class="btns" style="margin-top:18px">
      <button class="btn" onclick="toast(t('c_done'))">${t("c_pay")}</button>
      <button class="btn ghost" onclick="CART={};store.set('cart',CART);render()">${t("c_clear")}</button>
    </div>`;
}
function render() { chrome(); i18nStatic(); renderShop(); renderProduct(); renderCart(); }

document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.lang = LANG;
  const form = document.getElementById("cform");
  if (form) form.onsubmit = e => { e.preventDefault(); toast(t("c_ok")); form.reset(); };
  render();
});
