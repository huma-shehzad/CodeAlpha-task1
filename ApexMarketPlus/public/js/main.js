const products = [
    { id: 1, title: "Acoustic Noise-Canceling Headphones", category: "Audio", price: 299, rating: 4.8, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80", description: "Industry-leading noise cancellation with spatial audio and 40-hour battery life." },
    { id: 2, title: "Ultra-Lightweight Gaming Mouse", category: "Gaming", price: 79, rating: 4.7, image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80", description: "Ergonomic honeycomb shell with 25K DPI optical sensor and ultra-crisp switches." },
    { id: 3, title: "Mechanical Keychron Keyboard", category: "Accessories", price: 129, rating: 4.9, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80", description: "Hot-swappable mechanical switches with vibrant RGB backlighting and aluminum frame." },
    { id: 4, title: "Smart OLED Fitness Watch", category: "Wearables", price: 199, rating: 4.6, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80", description: "Track your health metrics, ECG, sleep quality, and workouts on a brilliant OLED display." },
    { id: 5, title: "Spatial Audio Studio Earbuds", category: "Audio", price: 159, rating: 4.5, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80", description: "Immersive sound profile with custom drivers and crystal-clear microphone clarity." },
    { id: 6, title: "Minimalist Ergonomic Chair", category: "Creative", price: 349, rating: 4.8, image: "https://images.unsplash.com/photo-1580481072645-022f9a6d1270?auto=format&fit=crop&w=600&q=80", description: "Designed for long working sessions with lumbar support and breathable mesh." },
    { id: 7, title: "Pro Creator Laptop 16-inch", category: "Computing", price: 1499, rating: 4.9, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80", description: "High-performance laptop built for video editors, developers, and power users." },
    { id: 8, title: "4K Ultra-Wide Curved Monitor", category: "Computing", price: 599, rating: 4.7, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80", description: "Immersive panoramic display with stunning color accuracy and high refresh rate." },
    { id: 9, title: "Professional DSLR Camera", category: "Photography", price: 899, rating: 4.8, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80", description: "Capture breathtaking 4K video and crisp photos with interchangeable lenses." },
    { id: 10, title: "Portable Bluetooth Speaker", category: "Audio", price: 89, rating: 4.4, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80", description: "Waterproof rugged design with punchy bass and 20 hours of continuous playtime." },
    { id: 11, title: "Wireless Charging Pad Trio", category: "Accessories", price: 69, rating: 4.6, image: "https://images.unsplash.com/photo-1622445275576-72dd3b306bfd?auto=format&fit=crop&w=600&q=80", description: "Simultaneously charge your phone, smartwatch, and wireless earbuds with ease." },
    { id: 12, title: "RGB Mechanical Gaming Keypad", category: "Gaming", price: 95, rating: 4.7, image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=600&q=80", description: "Compact single-handed gaming keypad with customizable macro keys." },
    { id: 13, title: "Ultra-Slim Portable SSD 2TB", category: "Computing", price: 189, rating: 4.9, image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80", description: "Blazing-fast read/write speeds packed in a pocket-sized durable aluminum body." },
    { id: 14, title: "Smart Home Security Camera", category: "Smart Home", price: 119, rating: 4.5, image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?auto=format&fit=crop&w=600&q=80", description: "1080p night vision camera with motion tracking and secure cloud storage." },
    { id: 15, title: "Active Over-Ear Pro Headphones", category: "Audio", price: 349, rating: 4.8, image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80", description: "Studio-grade drivers with plush memory foam ear cushions for all-day comfort." },
    { id: 16, title: "Ergonomic Vertical Mouse", category: "Accessories", price: 55, rating: 4.3, image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=600&q=80", description: "Natural handshake position reduces wrist strain during intensive office work." },
    { id: 17, title: "Thunderbolt 4 Docking Station", category: "Computing", price: 249, rating: 4.8, image: "https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&w=600&q=80", description: "Expand your workspace with dual 4K display ports, 100W power delivery, and fast USB ports." },
    { id: 18, title: "Smart LED Desk Lamp", category: "Smart Home", price: 49, rating: 4.6, image: "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?auto=format&fit=crop&w=600&q=80", description: "Adjustable color temperature and brightness control via touch or voice assistant." },
    { id: 19, title: "High-Speed Wi-Fi 6 Router", category: "Networking", price: 179, rating: 4.7, image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80", description: "Next-gen mesh routing technology for lightning-fast dead-zone-free home coverage." },
    { id: 20, title: "Compact Action Camera 4K", category: "Photography", price: 299, rating: 4.6, image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80", description: "Waterproof adventure camera with hyper-smooth stabilization and voice controls." },
    { id: 21, title: "True Wireless Sport Earbuds", category: "Audio", price: 129, rating: 4.4, image: "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=600&q=80", description: "Secure ear hooks and sweat-resistant build tailored for intense workouts." },
    { id: 22, title: "Mechanical Gaming Keyboard TKL", category: "Gaming", price: 110, rating: 4.8, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80", description: "Tenkeyless layout providing extra desk space for low-sensitivity mouse swiping." },
    { id: 23, title: "External Hard Drive 5TB", category: "Computing", price: 139, rating: 4.5, image: "https://images.unsplash.com/photo-1531492746306-25800994424d?auto=format&fit=crop&w=600&q=80", description: "Massive storage capacity for backups, large media files, and game libraries." },
    { id: 24, title: "Smart Wi-Fi Plug 4-Pack", category: "Smart Home", price: 39, rating: 4.7, image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&w=600&q=80", description: "Control home appliances remotely and schedule automated routines seamlessly." },
    { id: 25, title: "Ultra HD Webcam 1080p60", category: "Computing", price: 85, rating: 4.6, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80", description: "Crystal-clear streaming camera equipped with advanced low-light correction." },
    { id: 26, title: "Premium Leather Laptop Sleeve", category: "Accessories", price: 45, rating: 4.7, image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80", description: "Handcrafted genuine leather protection with soft inner microfiber lining." },
    { id: 27, title: "Adjustable Laptop Stand", category: "Accessories", price: 35, rating: 4.8, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80", description: "Foldable aluminum stand designed for optimal typing angle and cooling airflow." },
    { id: 28, title: "Studio Condenser Microphone", category: "Audio", price: 149, rating: 4.9, image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80", description: "Professional cardioid pickup pattern ideal for podcasting, streaming, and vocals." },
    { id: 29, title: "Graphic Drawing Tablet", category: "Creative", price: 219, rating: 4.8, image: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&w=600&q=80", description: "Pressure-sensitive stylus tablet for digital artists, animators, and designers." },
    { id: 30, title: "Smart Thermostat Hub", category: "Smart Home", price: 169, rating: 4.7, image: "https://images.unsplash.com/photo-1567925181165-6453ef69b36d?auto=format&fit=crop&w=600&q=80", description: "Learn your schedule and save energy with automated climate optimization." },
    { id: 31, title: "Portable Power Bank 24000mAh", category: "Accessories", price: 79, rating: 4.8, image: "https://images.unsplash.com/photo-1609592424158-450f3801f2f2?auto=format&fit=crop&w=600&q=80", description: "High-capacity power bank with fast USB-C Power Delivery for laptops and phones." },
    { id: 32, title: "Smart Ring Health Tracker", category: "Wearables", price: 299, rating: 4.6, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80", description: "Discreet titanium ring tracking deep sleep, activity scores, and body temperature." },
    { id: 33, title: "Dual Monitor Mount Arm", category: "Computing", price: 89, rating: 4.8, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80", description: "Heavy-duty gas spring arms supporting two screens up to 27 inches comfortably." },
    { id: 34, title: "RGB Gaming Headset Stand", category: "Gaming", price: 39, rating: 4.4, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80", description: "Sleek stand featuring built-in USB pass-through ports and dynamic RGB lighting." },
    { id: 35, title: "Mechanical Macro Pad", category: "Accessories", price: 59, rating: 4.5, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80", description: "Programmable shortcut keypad to accelerate video editing and coding workflows." },
    { id: 36, title: "Wireless Mechanical Number Pad", category: "Accessories", price: 49, rating: 4.6, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80", description: "Standalone numeric keypad with mechanical switches and Bluetooth connectivity." },
    { id: 37, title: "Smart Doorbell Video Camera", category: "Smart Home", price: 199, rating: 4.7, image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&w=600&q=80", description: "HD video intercom with two-way audio and real-time visitor smartphone alerts." },
    { id: 38, title: "USB-C Multi-Port Hub Adapter", category: "Accessories", price: 42, rating: 4.7, image: "https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&w=600&q=80", description: "Compact adapter featuring HDMI output, SD card readers, and USB 3.0 ports." },
    { id: 39, title: "Smart LED Strip Lights 5m", category: "Smart Home", price: 29, rating: 4.5, image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80", description: "App-controlled color-changing atmospheric lighting for your room or desk setup." },
    { id: 40, title: "Bluetooth Mechanical Keyboard", category: "Accessories", price: 139, rating: 4.8, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80", description: "Multi-device wireless connectivity with hot-swappable switches and long battery life." }
];

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('apex_cart')) || [];
    const badge = document.getElementById('cartCount');
    if (badge) badge.innerText = cart.length;
}

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('apex_cart')) || [];
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        localStorage.setItem('apex_cart', JSON.stringify(cart));
        updateCartCount();
        alert(`Added "${product.title}" to cart!`);
    }
}

function buyNow(productId) {
    addToCart(productId);
    window.location.href = '/cart';
}

function viewProduct(productId) {
    window.location.href = `/product?id=${productId}`;
}

function renderProducts(items) {
    const grid = document.getElementById('productGrid');
    const countSpan = document.getElementById('productCount');
    if (!grid) return;
    
    if (countSpan) countSpan.innerText = items.length;

    if (!items.length) {
        grid.innerHTML = '<div style="color:#64748b; grid-column:1/-1; text-align:center;">No products found.</div>';
        return;
    }

    grid.innerHTML = items.map(p => `
        <div style="background: #1e293b; border: 1px solid #334155; border-radius: 12px; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between;">
            <div style="cursor: pointer;" onclick="viewProduct(${p.id})">
                <div style="height: 180px; overflow: hidden; background: #0f172a; position: relative;">
                    <img src="${p.image}" alt="${p.title}" style="width: 100%; height: 100%; object-fit: cover;">
                    <span style="position: absolute; top: 10px; right: 10px; background: rgba(15, 23, 42, 0.85); color: #818cf8; font-size: 0.75rem; padding: 0.2rem 0.6rem; border-radius: 999px;">${p.category}</span>
                </div>
                <div style="padding: 1.2rem;">
                    <div style="color: #fbbf24; font-size: 0.85rem; margin-bottom: 0.4rem;">★ ${p.rating}</div>
                    <h3 style="font-size: 1rem; margin: 0; color: #f8fafc;">${p.title}</h3>
                </div>
            </div>
            <div style="padding: 1.2rem; display: flex; align-items: center; justify-content: space-between; border-top: 1px solid rgba(255,255,255,0.05);">
                <span style="font-size: 1.25rem; font-weight: 800; color: #fff;">$${p.price}</span>
                <button onclick="addToCart(${p.id})" style="background: linear-gradient(135deg, #6366f1, #a855f7); color: white; border: none; padding: 0.5rem 0.9rem; border-radius: 6px; font-weight: 600; cursor: pointer;">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

function filterProducts() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    if (!searchInput || !categoryFilter) return;

    const search = searchInput.value.toLowerCase();
    const category = categoryFilter.value;

    const filtered = products.filter(p => {
        const matchesSearch = p.title.toLowerCase().includes(search) || p.category.toLowerCase().includes(search);
        const matchesCategory = category === 'All' || p.category === category;
        return matchesSearch && matchesCategory;
    });

    renderProducts(filtered);
}

document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    if (document.getElementById('productGrid')) {
        renderProducts(products);
    }
});