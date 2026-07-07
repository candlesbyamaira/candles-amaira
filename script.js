        const fragrances = [
            { name: 'Lavender', emoji: '💜' },
            { name: 'Dark Chocolate', emoji: '🍫' },
            { name: 'Cafe Mocha', emoji: '☕' },
            { name: 'Coffee', emoji: '🌾' },
            { name: 'Vanilla', emoji: '🤍' },
            { name: 'Rose', emoji: '🌹' },
            { name: 'Sandalwood', emoji: '🪔' },
            { name: 'Ocean', emoji: '🌊' },
            { name: 'Lemon', emoji: '🍋' },
            { name: 'Mint', emoji: '🌱' },
            { name: 'Sweet Orange', emoji: '🧡' },
            { name: 'Strawberry', emoji: '🍓' },
            { name: 'Chai', emoji: '☕' },
            { name: 'Magnolia', emoji: '🌺' },
            { name: 'Masala Chai', emoji: '🫖' },
            { name: 'White Musk', emoji: '✨' },
            { name: 'Pan Masala', emoji: '🌿' },
            { name: 'Green Apple', emoji: '🍏' },
            { name: 'Cinnamon', emoji: '🤎' }
        ];

        const products = [

            {
                name: 'Rose Bloom Jar',
                badge: 'Best Seller',
                image: 'images/RoseInJar.PNG',
                emoji: false
            },
            {
                name: 'Love Potion',
                badge: 'Popular',
                image: 'images/CuteJar.PNG',
                emoji: false
            },
            {
                name: 'Teddy in Jar',
                badge: 'Gift Idea',
                image: 'images/TeddyInJar.PNG',
                emoji: false
            },
            {
                name: 'Space Adventure',
                badge: 'New',
                image: 'images/Astronaut.PNG',
                emoji: false
            },
            {
                name: 'Capybara Cuddles',
                badge: 'New',
                image: 'images/Capybara1.PNG',
                emoji: false
            },
            {
                name: 'Cafe Noir Mocha',
                badge: 'New',
                image: 'images/Choco.PNG',
                emoji: false
            },
            {
                name: 'Moo baa la la la',
                badge: 'New',
                image: 'images/Cow.PNG',
                emoji: false
            },
            {
                name: 'Lucky Puppy',
                badge: 'New',
                image: 'images/Dog.PNG',
                emoji: false
            },
            {
                name: 'Bubble Bliss',
                badge: 'New',
                image: 'images/Honeybee.PNG',
                emoji: false
            },
            {
                name: 'Bunny Hop',
                badge: 'New',
                image: 'images/Rabit.PNG',
                emoji: false
            },
            {
                name: 'Crescent Moon',
                badge: 'Seasonal',
                image: 'images/Ramadan.PNG',
                emoji: false
            },
            {
                name: 'Peony, My Honey',
                badge: 'Popular',
                image: 'images/Flower.PNG',
                emoji: false
            },
            {
                name: 'Tea Time Comfort',
                badge: 'Relaxation',
                image: 'images/Tea.PNG',
                emoji: false
            },
            {
                name: 'Multiple Teddies',
                badge: 'Gift Idea',
                image: 'images/Teddies.PNG',
                emoji: false
            },
            {
                name: 'Wine Night',
                badge: 'Adult Scents',
                image: 'images/Wine.PNG',
                emoji: false
            },
            {
                name: 'Cute Jar 2.0',
                badge: 'Popular',
                image: 'images/CuteJar2.PNG',
                emoji: false
            },
            {
                name: 'Summer Berries',
                badge: 'Seasonal',
                image: 'images/Berries.PNG',
                emoji: false
            },
            {
                name: 'Forever Yours!',
                badge: 'Gift Idea',
                image: 'images/Couple.PNG',
                emoji: false
            },
            {
                name: 'Love Heart',
                badge: 'Popular',
                image: 'images/Heart.PNG',
                emoji: false
            },
            {
                name: 'Cozy Lamps',
                badge: 'Ambient',
                image: 'images/Lamps.PNG',
                emoji: false
            },
            {
                name: 'Say Cheese Jerry',
                badge: 'Fun Design',
                image: 'images/Mouse.PNG',
                emoji: false
            },
            {
                name: 'Sheep Herd',
                badge: 'Best Seller',
                image: 'images/SheepHerd.PNG',
                emoji: false
            },
            {
                name: 'Newborn Joy',
                badge: 'Baby Shower',
                image: 'images/BabyFeet.PNG',
                emoji: false
            }
        ];

        // Tab Switching
        function switchTab(tabName) {
            // Hide all tabs
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.remove('active');
            });

            // Remove active from all buttons
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });

            // Show selected tab
            document.getElementById(tabName + '-tab').classList.add('active');

            // Add active to clicked button
            event.target.classList.add('active');

            // Scroll to top smoothly
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function generateProducts() {
            const grid = document.getElementById('productsGrid');

            products.forEach((product, index) => {
                const card = document.createElement('div');
                card.className = 'product-card';

                const imageContent = product.emoji
                    ? product.image
                    : `<img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">`;

                card.innerHTML = `
                    <div class="product-badge">${product.badge}</div>
                    <div class="product-image">${imageContent}</div>
                    <h3 class="product-name">${product.name}</h3>
                    <!--<div class="product-price">${product.price}</div>-->

                    <div class="fragrance-section">
                        <div class="fragrance-title">🌸 Pick Your Scent</div>
                        <div class="fragrance-pills">
                            ${fragrances.map((f, fragranceIndex) => `
                                <button type="button" class="fragrance-pill ${fragranceIndex >= 6 ? 'is-hidden' : ''}" data-fragrance="${f.name}" aria-pressed="false">
                                    ${f.emoji} ${f.name}
                                </button>
                            `).join('')}
                        </div>
                        <button type="button" class="fragrance-toggle" data-expanded="false">Show more scents</button>
                        <div class="selection-display" id="selected-${index}"></div>
                    </div>

                    <div class="order-section">
                        <a href="#" class="btn btn-whatsapp" id="whatsapp-${index}">
                            📱 WhatsApp
                        </a>
                        <a href="#" class="btn btn-email" id="email-${index}">
                            ✉️ Email
                        </a>
                    </div>
                `;

                grid.appendChild(card);

                // Fragrance selection
                const fragrancePills = Array.from(card.querySelectorAll('.fragrance-pill'));
                const fragranceToggle = card.querySelector('.fragrance-toggle');
                const selectedDisplay = card.querySelector(`#selected-${index}`);
                const whatsappBtn = card.querySelector(`#whatsapp-${index}`);
                const emailBtn = card.querySelector(`#email-${index}`);

                let selectedFragrance = '';
                let expanded = false;
                const visibleCount = 6;

                function syncVisiblePills() {
                    fragrancePills.forEach((pill, idx) => {
                        pill.classList.toggle('is-hidden', idx >= visibleCount && !expanded);
                    });

                    if (fragrancePills.length > visibleCount) {
                        fragranceToggle.style.display = 'inline-flex';
                        fragranceToggle.textContent = expanded ? 'Show fewer scents' : 'Show more scents';
                        fragranceToggle.setAttribute('data-expanded', String(expanded));
                    } else {
                        fragranceToggle.style.display = 'none';
                    }
                }

                fragrancePills.forEach(pill => {
                    const toggleFragrance = (event) => {
                        event.preventDefault();
                        const alreadySelected = pill.classList.contains('selected');

                        fragrancePills.forEach(option => {
                            option.classList.remove('selected');
                            option.setAttribute('aria-pressed', 'false');
                        });

                        if (!alreadySelected) {
                            pill.classList.add('selected');
                            pill.setAttribute('aria-pressed', 'true');
                            selectedFragrance = pill.dataset.fragrance;
                        } else {
                            selectedFragrance = '';
                        }

                        selectedDisplay.textContent = selectedFragrance
                            ? `✨ ${selectedFragrance} selected`
                            : '';
                        updateOrderLinks();
                    };

                    pill.addEventListener('click', toggleFragrance);
                    pill.addEventListener('keydown', (event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                            toggleFragrance(event);
                        }
                    });
                });

                fragranceToggle.addEventListener('click', function() {
                    expanded = !expanded;
                    syncVisiblePills();
                });

                function updateOrderLinks() {
                    const fragText = selectedFragrance
                        ? ` - ${selectedFragrance} scent`
                        : '';

                    const whatsappMessage = encodeURIComponent(
                        `Hi! 👋 I'd love to order:\n\n${product.name}${fragText}\n\nCan you confirm availability? 🕯️`
                    );

                    const emailSubject = encodeURIComponent(`Order: ${product.name}`);
                    const emailBody = encodeURIComponent(
                        `Hello!\n\nI'd like to order:\n\nProduct: ${product.name}${fragText}\n\nPlease let me know about availability and shipping.\n\nThank you! 🕯️`
                    );

                    whatsappBtn.href = `https://wa.me/${atob(CONFIG.whatsappNumber)}?text=${whatsappMessage}`;
                    emailBtn.href = `mailto:${CONFIG.email}?subject=${emailSubject}&body=${emailBody}`;
                }

                syncVisiblePills();
                updateOrderLinks();
            });
        }

        document.getElementById('footerWhatsApp').href = `https://wa.me/${atob(CONFIG.whatsappNumber)}`;
        document.getElementById('footerEmail').href = `mailto:${CONFIG.email}`;

        generateProducts();