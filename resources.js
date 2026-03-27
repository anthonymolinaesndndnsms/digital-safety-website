// Resources page specific JavaScript
// Handles quick scan modal and resource card interactions

(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        initializeQuickScanModal();
        initializeResourceCards();
        initializePageAnimations();
    });

    function initializeQuickScanModal() {
        const modal = document.getElementById('quickScanModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalDescription = document.getElementById('modalDescription');
        const modalClose = document.querySelector('.modal-close');
        const modalBackdrop = document.querySelector('.modal-backdrop');

        if (!modal) return;

        // Quick scan button handlers
        const quickScanButtons = document.querySelectorAll('.quick-scan-btn');
        quickScanButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                const summary = button.getAttribute('data-summary');
                const resourceCard = button.closest('.resource-card');
                const resourceTitle = resourceCard ? resourceCard.querySelector('h3').textContent : 'Resource';

                showModal(resourceTitle, summary);
            });
        });

        // Close modal handlers
        function closeModal() {
            hideModal();
        }

        if (modalClose) {
            modalClose.addEventListener('click', closeModal);
        }

        if (modalBackdrop) {
            modalBackdrop.addEventListener('click', closeModal);
        }

        // Keyboard support
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && modal.classList.contains('show')) {
                closeModal();
            }
        });

        // Focus management
        function showModal(title, description) {
            modalTitle.textContent = title;
            modalDescription.textContent = description;

            modal.classList.add('show');
            modal.setAttribute('aria-hidden', 'false');

            // Focus the modal
            modalClose.focus();

            // Prevent body scroll
            document.body.style.overflow = 'hidden';

            // Animate modal appearance
            if (window.anime) {
                const modalContent = modal.querySelector('.modal-content');
                modalContent.style.transform = 'translateY(-20px) scale(0.95)';
                modalContent.style.opacity = '0';

                anime({
                    targets: modalContent,
                    translateY: ['-20px', '0px'],
                    scale: [0.95, 1],
                    opacity: [0, 1],
                    duration: 300,
                    easing: 'easeOutQuart'
                });
            }
        }

        function hideModal() {
            modal.classList.remove('show');
            modal.setAttribute('aria-hidden', 'true');

            // Restore body scroll
            document.body.style.overflow = '';

            // Return focus to the button that opened the modal
            const activeButton = document.activeElement;
            if (activeButton && activeButton.classList.contains('quick-scan-btn')) {
                activeButton.focus();
            }
        }
    }

    function initializeResourceCards() {
        const resourceCards = document.querySelectorAll('.resource-card');

        resourceCards.forEach(function(card, index) {
            // Add entrance animation
            if (window.anime) {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
            }

            // Hover effects for desktop
            if (window.innerWidth > 768) {
                card.addEventListener('mouseenter', function() {
                    if (window.anime) {
                        anime({
                            targets: card,
                            translateY: -8,
                            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                            duration: 200,
                            easing: 'easeOutQuart'
                        });
                    }
                });

                card.addEventListener('mouseleave', function() {
                    if (window.anime) {
                        anime({
                            targets: card,
                            translateY: 0,
                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
                            duration: 200,
                            easing: 'easeOutQuart'
                        });
                    }
                });
            }

            // Feature tag animations
            const featureTags = card.querySelectorAll('.feature-tag');
            featureTags.forEach(function(tag, tagIndex) {
                tag.addEventListener('mouseenter', function() {
                    if (window.anime) {
                        anime({
                            targets: tag,
                            scale: 1.05,
                            duration: 150,
                            easing: 'easeOutQuart'
                        });
                    }
                });

                tag.addEventListener('mouseleave', function() {
                    if (window.anime) {
                        anime({
                            targets: tag,
                            scale: 1,
                            duration: 150,
                            easing: 'easeOutQuart'
                        });
                    }
                });
            });

            // Button animations
            const buttons = card.querySelectorAll('.btn, .quick-scan-btn');
            buttons.forEach(function(button) {
                button.addEventListener('mouseenter', function() {
                    if (window.anime && !button.classList.contains('quick-scan-btn')) {
                        anime({
                            targets: button,
                            scale: 1.02,
                            duration: 150,
                            easing: 'easeOutQuart'
                        });
                    }
                });

                button.addEventListener('mouseleave', function() {
                    if (window.anime && !button.classList.contains('quick-scan-btn')) {
                        anime({
                            targets: button,
                            scale: 1,
                            duration: 150,
                            easing: 'easeOutQuart'
                        });
                    }
                });

                button.addEventListener('click', function() {
                    if (window.anime) {
                        anime({
                            targets: button,
                            scale: [1, 0.98, 1],
                            duration: 200,
                            easing: 'easeOutQuart'
                        });
                    }
                });
            });
        });
    }

    function initializePageAnimations() {
        if (!window.anime) return;

        // Animate page header
        const pageTitle = document.querySelector('.page-title');
        const pageDescription = document.querySelector('.page-description');

        if (pageTitle) {
            pageTitle.style.opacity = '0';
            pageTitle.style.transform = 'translateY(30px)';

            anime({
                targets: pageTitle,
                opacity: [0, 1],
                translateY: [30, 0],
                duration: 800,
                easing: 'easeOutQuart'
            });
        }

        if (pageDescription) {
            pageDescription.style.opacity = '0';
            pageDescription.style.transform = 'translateY(20px)';

            anime({
                targets: pageDescription,
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 600,
                delay: 200,
                easing: 'easeOutQuart'
            });
        }

        // Animate resource categories with intersection observer
        const categoryObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    animateResourceCategory(entry.target);
                    categoryObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        const resourceCategories = document.querySelectorAll('.resource-category');
        resourceCategories.forEach(function(category) {
            categoryObserver.observe(category);
        });

        // Animate CTA section
        const ctaSection = document.querySelector('.cta-section');
        if (ctaSection) {
            const ctaObserver = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        const elements = ctaSection.querySelectorAll('h2, p, .btn');
                        elements.forEach(function(element) {
                            element.style.opacity = '0';
                            element.style.transform = 'translateY(30px)';
                        });

                        anime({
                            targets: elements,
                            opacity: [0, 1],
                            translateY: [30, 0],
                            duration: 600,
                            delay: anime.stagger(150),
                            easing: 'easeOutQuart'
                        });

                        ctaObserver.unobserve(ctaSection);
                    }
                });
            }, { threshold: 0.3 });

            ctaObserver.observe(ctaSection);
        }
    }

    function animateResourceCategory(category) {
        if (!window.anime) return;

        const categoryHeader = category.querySelector('.category-header');
        const resourceCards = category.querySelectorAll('.resource-card');

        // Animate category header first
        if (categoryHeader) {
            categoryHeader.style.opacity = '0';
            categoryHeader.style.transform = 'translateY(30px)';

            anime({
                targets: categoryHeader,
                opacity: [0, 1],
                translateY: [30, 0],
                duration: 600,
                easing: 'easeOutQuart'
            });
        }

        // Then animate resource cards with stagger
        if (resourceCards.length > 0) {
            anime({
                targets: resourceCards,
                opacity: [0, 1],
                translateY: [30, 0],
                duration: 600,
                delay: anime.stagger(150, {start: 200}),
                easing: 'easeOutQuart'
            });
        }
    }

    // Add pulse animation to quick scan buttons periodically - optimized
    function addPeriodicPulse() {
        if (!window.anime) return;

        const quickScanButtons = document.querySelectorAll('.quick-scan-btn');
        if (quickScanButtons.length === 0) return;

        // Use Intersection Observer to track visible buttons
        const visibleButtons = new Set();
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    visibleButtons.add(entry.target);
                } else {
                    visibleButtons.delete(entry.target);
                }
            });
        }, { threshold: 0.5 });

        quickScanButtons.forEach(function(button) {
            observer.observe(button);
        });

        setInterval(function() {
            if (visibleButtons.size > 0) {
                const buttonsArray = Array.from(visibleButtons);
                const randomButton = buttonsArray[Math.floor(Math.random() * buttonsArray.length)];

                anime({
                    targets: randomButton,
                    scale: [1, 1.05, 1],
                    duration: 1000,
                    easing: 'easeInOutQuart'
                });
            }
        }, 8000); // Every 8 seconds
    }

    // Start periodic pulse after a delay
    setTimeout(addPeriodicPulse, 3000);

    // Handle keyboard navigation for modal
    function trapFocus(element) {
        const focusableElements = element.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        element.addEventListener('keydown', function(event) {
            if (event.key === 'Tab') {
                if (event.shiftKey) {
                    if (document.activeElement === firstElement) {
                        event.preventDefault();
                        lastElement.focus();
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        event.preventDefault();
                        firstElement.focus();
                    }
                }
            }
        });
    }

    // Apply focus trapping to modal
    const modal = document.getElementById('quickScanModal');
    if (modal) {
        trapFocus(modal);
    }

    // Add loading states for external links - use event delegation
    document.addEventListener('click', function(event) {
        const link = event.target.closest('a[target="_blank"]');
        if (!link) return;
        
        const originalText = link.textContent;
        link.textContent = 'Opening...';

        setTimeout(function() {
            if (link.textContent === 'Opening...') {
                link.textContent = originalText;
            }
        }, 2000);
    }, true);

})();