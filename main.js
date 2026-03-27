// Main JavaScript file for Digital Safety Hub
// Handles navigation, animations, and shared functionality

(function() {
    'use strict';

    // Wait for DOM content to load
    document.addEventListener('DOMContentLoaded', function() {
        initializeNavigation();
        initializeBackToTop();
        initializeScrollAnimations();
        initializeTooltips();

        // Page-specific initializations
        if (document.querySelector('.email-demo')) {
            initializeEmailDemo();
        }

        // Initialize hero encrypted text animation
        if (document.getElementById('heroTitle')) {
            initializeHeroAnimation();
        }
    });

    // Navigation functionality
    function initializeNavigation() {
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');

        if (navToggle && navMenu) {
            let isExpanded = false;
            
            navToggle.addEventListener('click', function() {
                isExpanded = !isExpanded;
                navToggle.setAttribute('aria-expanded', isExpanded);
                navMenu.classList.toggle('active', isExpanded);

                // Animate menu toggle
                if (window.anime) {
                    anime({
                        targets: navMenu,
                        opacity: isExpanded ? [0, 1] : [1, 0],
                        translateY: isExpanded ? [-20, 0] : [0, -20],
                        duration: 250,
                        easing: 'easeOutQuart'
                    });
                }
            });

            // Close mobile menu when clicking outside - use event delegation
            const handleOutsideClick = function(event) {
                if (!navToggle.contains(event.target) && !navMenu.contains(event.target) && isExpanded) {
                    isExpanded = false;
                    navToggle.setAttribute('aria-expanded', 'false');
                    navMenu.classList.remove('active');
                }
            };
            
            document.addEventListener('click', handleOutsideClick, true);

            // Close mobile menu on escape key
            const handleEscape = function(event) {
                if (event.key === 'Escape' && isExpanded) {
                    isExpanded = false;
                    navToggle.setAttribute('aria-expanded', 'false');
                    navMenu.classList.remove('active');
                    navToggle.focus();
                }
            };
            
            document.addEventListener('keydown', handleEscape);
        }
    }

    // Back to top button functionality
    function initializeBackToTop() {
        const backToTopBtn = document.getElementById('backToTop');

        if (backToTopBtn) {
            let isVisible = false;
            
            // Show/hide button based on scroll position
            function toggleBackToTop() {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const shouldBeVisible = scrollTop > 300;

                if (shouldBeVisible !== isVisible) {
                    isVisible = shouldBeVisible;
                    backToTopBtn.classList.toggle('visible', isVisible);
                }
            }

            // Smooth scroll to top
            backToTopBtn.addEventListener('click', function(e) {
                e.preventDefault();

                if (window.anime) {
                    anime({
                        targets: document.documentElement,
                        scrollTop: 0,
                        duration: 800,
                        easing: 'easeOutQuart'
                    });
                } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });

            // Optimized scroll listener with requestAnimationFrame
            let ticking = false;
            window.addEventListener('scroll', function() {
                if (!ticking) {
                    window.requestAnimationFrame(function() {
                        toggleBackToTop();
                        ticking = false;
                    });
                    ticking = true;
                }
            }, { passive: true });

            // Initial check
            toggleBackToTop();
        }
    }

    // Scroll-based animations using Intersection Observer
    function initializeScrollAnimations() {
        if (!window.anime) return;

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    animateElement(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animatableElements = document.querySelectorAll('.feature-card, .security-item, .hero-content, .section-title');
        animatableElements.forEach(function(element) {
            observer.observe(element);
        });
    }

    // Animate individual elements
    function animateElement(element) {
        if (!window.anime) return;

        // Add initial state
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';

        // Animate in
        anime({
            targets: element,
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 600,
            delay: anime.stagger(100, {start: 100}),
            easing: 'easeOutQuart'
        });
    }

    // Enhanced tooltips for email demo - optimized with event delegation
    function initializeTooltips() {
        const tooltipContainer = document.querySelector('.email-demo') || document.body;
        let activeTooltip = null;
        let tooltipTimer = null;

        function showTooltip(element) {
            clearTimeout(tooltipTimer);
            if (activeTooltip === element) return;
            
            if (activeTooltip) {
                activeTooltip.classList.remove('tooltip-active');
            }
            
            activeTooltip = element;
            element.classList.add('tooltip-active');

            if (window.anime) {
                anime({
                    targets: element,
                    backgroundColor: 'rgba(245, 158, 11, 0.1)',
                    duration: 200,
                    easing: 'easeOutQuart'
                });
            }
        }

        function hideTooltip() {
            tooltipTimer = setTimeout(function() {
                if (activeTooltip) {
                    activeTooltip.classList.remove('tooltip-active');
                    if (window.anime) {
                        anime({
                            targets: activeTooltip,
                            backgroundColor: 'transparent',
                            duration: 200,
                            easing: 'easeOutQuart'
                        });
                    }
                    activeTooltip = null;
                }
            }, 100);
        }

        // Use event delegation for better performance
        tooltipContainer.addEventListener('mouseenter', function(e) {
            const tooltipEl = e.target.closest('[data-tooltip]');
            if (tooltipEl) showTooltip(tooltipEl);
        }, true);
        
        tooltipContainer.addEventListener('mouseleave', function(e) {
            if (e.target.closest('[data-tooltip]')) hideTooltip();
        }, true);
        
        tooltipContainer.addEventListener('focus', function(e) {
            const tooltipEl = e.target.closest('[data-tooltip]');
            if (tooltipEl) showTooltip(tooltipEl);
        }, true);
        
        tooltipContainer.addEventListener('blur', function(e) {
            if (e.target.closest('[data-tooltip]')) hideTooltip();
        }, true);
    }

    // Email demo interactive functionality
    function initializeEmailDemo() {
        const emailDemo = document.querySelector('.email-demo');
        const demoResults = document.querySelector('.demo-results');

        if (emailDemo && demoResults) {
            let interactionCount = 0;
            const tooltipElements = emailDemo.querySelectorAll('[data-tooltip]');

            tooltipElements.forEach(function(element) {
                element.addEventListener('click', function() {
                    interactionCount++;

                    // Highlight the clicked element
                    if (window.anime) {
                        anime({
                            targets: element,
                            scale: [1, 1.02, 1],
                            backgroundColor: ['transparent', 'rgba(245, 158, 11, 0.2)', 'rgba(245, 158, 11, 0.1)'],
                            duration: 400,
                            easing: 'easeOutQuart'
                        });
                    }

                    // Show results after a few interactions
                    if (interactionCount >= 2 && !demoResults.classList.contains('revealed')) {
                        demoResults.classList.add('revealed');

                        if (window.anime) {
                            anime({
                                targets: demoResults,
                                opacity: [0, 1],
                                translateY: [30, 0],
                                duration: 600,
                                delay: 200,
                                easing: 'easeOutQuart'
                            });
                        }
                    }
                });
            });
        }
    }

    // Utility function for creating confetti effect
    window.createConfetti = function(container) {
        if (!window.anime || !container) return;

        const colors = ['#10b981', '#2563eb', '#f59e0b', '#ef4444'];
        const confettiCount = 30;

        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '0%';
            confetti.style.width = Math.random() * 8 + 4 + 'px';
            confetti.style.height = confetti.style.width;
            confetti.style.borderRadius = '50%';
            confetti.style.position = 'absolute';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '1000';

            container.appendChild(confetti);

            anime({
                targets: confetti,
                translateY: [0, window.innerHeight + 100],
                translateX: [0, (Math.random() - 0.5) * 200],
                rotate: [0, 360 * (Math.random() - 0.5)],
                opacity: [1, 0],
                duration: 2000 + Math.random() * 1000,
                easing: 'easeInQuart',
                complete: function() {
                    if (confetti.parentNode) {
                        confetti.parentNode.removeChild(confetti);
                    }
                }
            });
        }
    };

    // Text reveal animation for headings
    window.animateTextReveal = function(element) {
        if (!window.anime || !element) return;

        const text = element.textContent;
        element.innerHTML = '';

        // Split text into spans
        text.split('').forEach(function(char) {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.opacity = '0';
            span.style.transform = 'translateY(20px)';
            element.appendChild(span);
        });

        // Animate letters
        anime({
            targets: element.querySelectorAll('span'),
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 800,
            delay: anime.stagger(50),
            easing: 'easeOutQuart'
        });
    };

    // Smooth scroll for internal links - optimized
    document.addEventListener('click', function(event) {
        const target = event.target.closest('a[href^="#"]');
        if (!target) return;
        
        const href = target.getAttribute('href');
        if (href === '#' || href === '#!') return;
        
        event.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            if (window.anime) {
                anime({
                    targets: document.documentElement,
                    scrollTop: targetElement.offsetTop - 80,
                    duration: 800,
                    easing: 'easeOutQuart'
                });
            } else {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, true);

    // Handle reduced motion preferences
    function respectMotionPreferences() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
            // Disable animations
            const style = document.createElement('style');
            style.textContent = `
                *, *::before, *::after {
                    animation-duration: 0.01ms !important;
                    animation-iteration-count: 1 !important;
                    transition-duration: 0.01ms !important;
                }
            `;
            document.head.appendChild(style);
        }
    }

    // Initialize motion preferences check
    respectMotionPreferences();

    // Re-check if preferences change
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', respectMotionPreferences);

    // Initialize hero animation
    function initializeHeroAnimation() {
        const heroTitle = document.getElementById('heroTitle');
        if (!heroTitle) return;

        // Simple fade-in animation instead of encryption
        if (window.anime) {
            heroTitle.style.opacity = '0';
            heroTitle.style.transform = 'translateY(20px)';

            setTimeout(() => {
                anime({
                    targets: heroTitle,
                    opacity: [0, 1],
                    translateY: [20, 0],
                    duration: 800,
                    easing: 'easeOutQuart'
                });
            }, 500);
        }
    }

    // Enhanced encrypted text animation function
    window.animateEncryptedText = function(element, finalText, isHTML = false) {
        if (!window.anime || !element) return;

        const chars = '█▓▒░ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
        let originalText = finalText;
        let iterations = 0;

        // Handle HTML content
        if (isHTML && typeof finalText === 'string' && finalText.includes('<')) {
            // For HTML content, extract text and preserve structure
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = finalText;
            const textContent = tempDiv.textContent || tempDiv.innerText || '';
            originalText = textContent;
        }

        // Set initial scrambled text
        const scrambleText = () => {
            return originalText
                .split('')
                .map(() => chars[Math.floor(Math.random() * chars.length)])
                .join('');
        };

        element.textContent = scrambleText();

        const interval = setInterval(() => {
            const newText = originalText
                .split('')
                .map((char, index) => {
                    if (index < iterations) {
                        return originalText[index];
                    }
                    // Use different scramble characters for a more cyber effect
                    if (Math.random() < 0.3) {
                        return chars[Math.floor(Math.random() * 4)]; // Use block characters more often
                    }
                    return chars[Math.floor(Math.random() * chars.length)];
                })
                .join('');

            element.textContent = newText;

            if (iterations >= originalText.length) {
                clearInterval(interval);

                // Set final content (HTML or text)
                if (isHTML) {
                    element.innerHTML = finalText;
                } else {
                    element.textContent = originalText;
                }

                // Add glowing pulse effect
                if (window.anime) {
                    anime({
                        targets: element,
                        textShadow: [
                            '0 0 20px rgba(0, 255, 136, 0.5)',
                            '0 0 40px rgba(0, 255, 136, 0.8)',
                            '0 0 20px rgba(0, 255, 136, 0.5)'
                        ],
                        duration: 1000,
                        easing: 'easeInOutQuad'
                    });
                }
            }

            iterations += 1/2; // Faster decryption
        }, 50);
    };

    // Clean hero section - no background effects

})();