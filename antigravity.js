// Anti-gravity effects: floating particles, card levitation, mouse parallax
// Implements the "anti-gravity" design theme — elements float and drift upward
(function () {
    'use strict';

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    document.addEventListener('DOMContentLoaded', function () {
        initFloatingParticles();
        initCardLevitation();
        initHeroParallax();
    });

    // Canvas-based floating cyber particles that drift upward (anti-gravity)
    function initFloatingParticles() {
        var sections = [
            document.querySelector('.hero'),
            document.querySelector('.page-header')
        ];

        sections.forEach(function (section) {
            if (!section) return;

            var canvas = document.createElement('canvas');
            canvas.className = 'antigravity-canvas';
            canvas.setAttribute('aria-hidden', 'true');
            section.insertBefore(canvas, section.firstChild);

            var ctx = canvas.getContext('2d');
            var particles = [];
            var animFrame;
            var symbols = ['◈', '⬡', '◇', '01', '10', '11', '⊕', '⊗', '△', '◻', '⬢', '00'];
            var colors = ['#00FF88', '#1E90FF', '#FF0066'];
            var isRunning = true;

            function resize() {
                canvas.width = section.offsetWidth;
                canvas.height = section.offsetHeight;
            }

            function spawn() {
                return {
                    x: Math.random() * canvas.width,
                    y: canvas.height + 15,
                    vx: (Math.random() - 0.5) * 0.35,
                    vy: -(0.35 + Math.random() * 0.55),
                    size: 9 + Math.random() * 10,
                    symbol: symbols[Math.floor(Math.random() * symbols.length)],
                    color: colors[Math.floor(Math.random() * colors.length)],
                    life: 0,
                    maxLife: 270 + Math.random() * 200,
                    maxOpacity: 0.10 + Math.random() * 0.17
                };
            }

            function tick() {
                if (!isRunning) return;
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                if (particles.length < 22 && Math.random() < 0.065) {
                    particles.push(spawn());
                }

                particles = particles.filter(function (p) { return p.life < p.maxLife; });

                particles.forEach(function (p) {
                    p.life++;
                    p.x += p.vx;
                    p.y += p.vy;

                    var ratio = p.life / p.maxLife;
                    var alpha;
                    if (ratio < 0.15) alpha = (ratio / 0.15) * p.maxOpacity;
                    else if (ratio > 0.75) alpha = ((1 - ratio) / 0.25) * p.maxOpacity;
                    else alpha = p.maxOpacity;

                    ctx.save();
                    ctx.globalAlpha = alpha;
                    ctx.font = p.size + 'px "Source Code Pro", monospace';
                    ctx.fillStyle = p.color;
                    ctx.fillText(p.symbol, p.x, p.y);
                    ctx.restore();
                });

                animFrame = requestAnimationFrame(tick);
            }

            resize();
            window.addEventListener('resize', resize, { passive: true });
            tick();

            // Pause when tab hidden to save resources
            document.addEventListener('visibilitychange', function () {
                if (document.hidden) {
                    isRunning = false;
                    cancelAnimationFrame(animFrame);
                } else {
                    isRunning = true;
                    tick();
                }
            });
        });
    }

    // Add floating levitation CSS animation to cards with staggered delays
    function initCardLevitation() {
        var selectors = [
            '.feature-card',
            '.principle-card',
            '.security-item',
            '.content-section',
            '.disclaimer-item'
        ];

        var all = [];
        selectors.forEach(function (sel) {
            all = all.concat(Array.prototype.slice.call(document.querySelectorAll(sel)));
        });

        all.forEach(function (el, i) {
            el.classList.add(i % 2 === 0 ? 'ag-levitate' : 'ag-levitate-alt');
            el.style.animationDelay = ((i * 0.38) % 5) + 's';
        });

        // Threat cards get their own float style
        document.querySelectorAll('.threat-card').forEach(function (card, i) {
            card.classList.add('ag-levitate');
            card.style.animationDelay = ((i * 0.5) % 5) + 's';
        });

        // Step cards
        document.querySelectorAll('.step-card, .resource-card').forEach(function (card, i) {
            card.classList.add(i % 2 === 0 ? 'ag-levitate' : 'ag-levitate-alt');
            card.style.animationDelay = ((i * 0.3) % 5) + 's';
        });
    }

    // Mouse parallax depth effect on hero visual
    function initHeroParallax() {
        var hero = document.querySelector('.hero');
        if (!hero) return;
        var visual = hero.querySelector('.hero-visual');
        if (!visual) return;

        var tx = 0, ty = 0, cx = 0, cy = 0, rafId = null;

        hero.addEventListener('mousemove', function (e) {
            var r = hero.getBoundingClientRect();
            tx = ((e.clientX - r.left) / r.width - 0.5) * 26;
            ty = ((e.clientY - r.top) / r.height - 0.5) * 14;
            if (!rafId) rafId = requestAnimationFrame(step);
        }, { passive: true });

        hero.addEventListener('mouseleave', function () {
            tx = 0;
            ty = 0;
            if (!rafId) rafId = requestAnimationFrame(step);
        }, { passive: true });

        function step() {
            cx += (tx - cx) * 0.07;
            cy += (ty - cy) * 0.07;
            visual.style.transform = 'translate(' + cx.toFixed(2) + 'px, ' + cy.toFixed(2) + 'px)';
            rafId = (Math.abs(tx - cx) > 0.05 || Math.abs(ty - cy) > 0.05)
                ? requestAnimationFrame(step)
                : null;
        }
    }

})();
