// Anti-gravity effects: floating particles + hero parallax
// Card levitation removed — it conflicts with GSAP scroll reveals
(function () {
    'use strict';

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    document.addEventListener('DOMContentLoaded', function () {
        initFloatingParticles();
        initHeroParallax();
        initHeroIconsFloat();
    });

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
            var isRunning = true;
            var symbols = ['◈', '⬡', '◇', '01', '10', '11', '⊕', '△', '◻', '00', '1010', '0101'];
            var colors = ['#00FF88', '#1E90FF', '#FF0066'];
            var W = 0, H = 0;

            function resize() {
                W = canvas.width = section.offsetWidth;
                H = canvas.height = section.offsetHeight;
            }

            function spawn() {
                return {
                    x: Math.random() * W,
                    y: H + 15,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: -(0.3 + Math.random() * 0.5),
                    size: 8 + Math.random() * 9,
                    symbol: symbols[Math.floor(Math.random() * symbols.length)],
                    color: colors[Math.floor(Math.random() * colors.length)],
                    life: 0,
                    maxLife: 260 + Math.random() * 200,
                    maxOpacity: 0.09 + Math.random() * 0.16
                };
            }

            function tick() {
                if (!isRunning) return;
                ctx.clearRect(0, 0, W, H);

                if (particles.length < 20 && Math.random() < 0.055) {
                    particles.push(spawn());
                }

                particles = particles.filter(function (p) { return p.life < p.maxLife; });

                particles.forEach(function (p) {
                    p.life++;
                    p.x += p.vx;
                    p.y += p.vy;
                    var r = p.life / p.maxLife;
                    var alpha = r < 0.15 ? (r / 0.15) * p.maxOpacity
                              : r > 0.75 ? ((1 - r) / 0.25) * p.maxOpacity
                              : p.maxOpacity;
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
            var resizeTimer;
            window.addEventListener('resize', function() {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(resize, 150);
            }, { passive: true });
            tick();

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

    // Float only the hero security icons (they're above the fold, no conflict)
    function initHeroIconsFloat() {
        var items = document.querySelectorAll('.security-item');
        items.forEach(function (el, i) {
            el.style.animationDelay = (i * 0.55) + 's';
            el.classList.add('ag-levitate');
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
            tx = ((e.clientX - r.left) / r.width - 0.5) * 24;
            ty = ((e.clientY - r.top) / r.height - 0.5) * 12;
            if (!rafId) rafId = requestAnimationFrame(step);
        }, { passive: true });

        hero.addEventListener('mouseleave', function () {
            tx = 0; ty = 0;
            if (!rafId) rafId = requestAnimationFrame(step);
        }, { passive: true });

        function step() {
            cx += (tx - cx) * 0.07;
            cy += (ty - cy) * 0.07;
            visual.style.transform = 'translate(' + cx.toFixed(2) + 'px,' + cy.toFixed(2) + 'px)';
            rafId = (Math.abs(tx - cx) > 0.05 || Math.abs(ty - cy) > 0.05)
                ? requestAnimationFrame(step) : null;
        }
    }

})();
