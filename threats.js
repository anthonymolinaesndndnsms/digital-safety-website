// Threats page specific JavaScript
// Handles interactive threat cards with flip animations and accordion fallbacks

(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        initializeThreatCards();
        initializePageAnimations();
    });

    function initializeThreatCards() {
        const threatCards = document.querySelectorAll('.threat-card');
        const isMobile = window.innerWidth <= 768;

        threatCards.forEach(function(card, index) {
            setupThreatCard(card, index, isMobile);
        });

        // Optimized resize handler - no reload needed
        let resizeTimer = null;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                // Only update if actually needed - cards work on all screen sizes
                // No reload needed as cards adapt automatically
            }, 150);
        }, { passive: true });
    }

    function setupThreatCard(card, index, isMobile) {
        const expandBtn = card.querySelector('.expand-btn');
        const cardBack = card.querySelector('.threat-card-back');
        const threatIcon = card.querySelector('.threat-icon');

        if (!expandBtn || !cardBack) return;

        let isExpanded = false;

        // Always use expandable panel mode for the new cyber theme
        setupExpandableMode(card, expandBtn, cardBack, threatIcon);

        // Keyboard support
        expandBtn.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                expandBtn.click();
            }
        });

        // Add staggered entrance animation with cyber effect
        if (window.anime) {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.filter = 'blur(10px)';

            setTimeout(function() {
                anime({
                    targets: card,
                    opacity: [0, 1],
                    translateY: [30, 0],
                    filter: ['blur(10px)', 'blur(0px)'],
                    duration: 800,
                    easing: 'easeOutQuart'
                });
            }, index * 200);
        }
    }

    function setupExpandableMode(card, expandBtn, cardBack, threatIcon) {
        const threatTitle = card.querySelector('.threat-title');
        const threatDetails = card.querySelector('.threat-details');
        const threatType = card.getAttribute('data-threat');

        expandBtn.addEventListener('click', function() {
            createFullScreenModal(threatType, threatTitle.textContent, threatDetails.innerHTML, threatIcon.innerHTML);
        });

        // Add hover glow effect - use CSS transitions for better performance
        let hoverAnimation = null;
        card.addEventListener('mouseenter', function() {
            if (hoverAnimation) hoverAnimation.pause();
            if (window.anime) {
                hoverAnimation = anime({
                    targets: card,
                    boxShadow: '0 10px 30px rgba(0, 255, 136, 0.15)',
                    translateY: -2,
                    duration: 200,
                    easing: 'easeOutQuart'
                });
            }
        });

        card.addEventListener('mouseleave', function() {
            if (hoverAnimation) hoverAnimation.pause();
            if (window.anime) {
                anime({
                    targets: card,
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    translateY: 0,
                    duration: 200,
                    easing: 'easeOutQuart'
                });
            }
        });
    }

    // Create full screen modal for threat details
    function createFullScreenModal(threatType, title, content, iconSvg) {
        // Remove any existing modal
        const existingModal = document.querySelector('.threat-modal');
        if (existingModal) {
            existingModal.remove();
        }

        // Create modal container
        const modal = document.createElement('div');
        modal.className = 'threat-modal';
        modal.setAttribute('data-threat-type', threatType);

        // Create unique background based on threat type
        const backgroundClass = `threat-bg-${threatType}`;

        modal.innerHTML = `
            <div class="threat-modal-background ${backgroundClass}"></div>
            <div class="threat-modal-content">
                <button class="threat-modal-close" aria-label="Close">
                    <svg viewBox="0 0 24 24">
                        <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" stroke-width="2"/>
                        <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" stroke-width="2"/>
                    </svg>
                </button>
                <div class="threat-modal-header">
                    <div class="threat-modal-icon">
                        ${iconSvg}
                    </div>
                    <h2 class="threat-modal-title">${title}</h2>
                </div>
                <div class="threat-modal-body">
                    ${content}
                </div>
            </div>
        `;

        // Add modal to body
        document.body.appendChild(modal);

        // Animate modal in
        if (window.anime) {
            modal.style.opacity = '0';
            modal.style.transform = 'scale(0.8)';

            anime({
                targets: modal,
                opacity: [0, 1],
                scale: [0.8, 1],
                duration: 400,
                easing: 'easeOutQuart'
            });
        }

        // Close modal functionality
        const closeBtn = modal.querySelector('.threat-modal-close');
        const closeModal = () => {
            if (window.anime) {
                anime({
                    targets: modal,
                    opacity: [1, 0],
                    scale: [1, 0.8],
                    duration: 300,
                    easing: 'easeInQuart',
                    complete: () => modal.remove()
                });
            } else {
                modal.remove();
            }
        };

        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        // Close on escape key
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', handleEscape);
            }
        };
        document.addEventListener('keydown', handleEscape);
    }

    function setupAccordionMode(card, expandBtn, cardBack, threatIcon) {
        let isExpanded = false;

        expandBtn.addEventListener('click', function() {
            isExpanded = !isExpanded;

            // Update ARIA attributes
            expandBtn.setAttribute('aria-expanded', isExpanded);
            cardBack.setAttribute('aria-hidden', !isExpanded);

            // Toggle expanded class
            card.classList.toggle('expanded', isExpanded);

            // Update button text
            const buttonText = expandBtn.querySelector('span');
            if (buttonText) {
                buttonText.textContent = isExpanded ? 'Show Less' : 'Learn More';
            }

            // Animate expansion
            if (window.anime) {
                if (isExpanded) {
                    // Expand
                    anime({
                        targets: cardBack,
                        maxHeight: [0, cardBack.scrollHeight + 'px'],
                        opacity: [0, 1],
                        duration: 400,
                        easing: 'easeOutQuart'
                    });

                    // Icon animation
                    anime({
                        targets: threatIcon,
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0],
                        duration: 400,
                        easing: 'easeOutQuart'
                    });
                } else {
                    // Collapse
                    anime({
                        targets: cardBack,
                        maxHeight: [cardBack.scrollHeight + 'px', 0],
                        opacity: [1, 0],
                        duration: 300,
                        easing: 'easeInQuart'
                    });
                }

                // Animate expand icon rotation
                anime({
                    targets: expandBtn.querySelector('.expand-icon'),
                    rotate: isExpanded ? '180deg' : '0deg',
                    duration: 300,
                    easing: 'easeOutQuart'
                });
            }

            // Scroll card into view if expanding
            if (isExpanded) {
                setTimeout(function() {
                    card.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest'
                    });
                }, 200);
            }
        });
    }

    function setupFlipMode(card, expandBtn, cardBack, threatIcon) {
        let isFlipped = false;

        expandBtn.addEventListener('click', function() {
            isFlipped = !isFlipped;

            // Update ARIA attributes
            expandBtn.setAttribute('aria-expanded', isFlipped);
            cardBack.setAttribute('aria-hidden', !isFlipped);

            // Toggle flipped class
            card.classList.toggle('flipped', isFlipped);

            // Update button text
            const buttonText = expandBtn.querySelector('span');
            if (buttonText) {
                buttonText.textContent = isFlipped ? 'Show Less' : 'Learn More';
            }

            // Animate the flip
            if (window.anime) {
                if (isFlipped) {
                    // Create flip timeline
                    const tl = anime.timeline({
                        easing: 'easeOutQuart'
                    });

                    // Icon pop animation
                    tl.add({
                        targets: threatIcon,
                        scale: [1, 1.2, 1],
                        duration: 300
                    }, 0);

                    // Card flip animation
                    tl.add({
                        targets: card.querySelector('.threat-card-front'),
                        rotateY: [0, -180],
                        duration: 600
                    }, 100);

                    tl.add({
                        targets: card.querySelector('.threat-card-back'),
                        rotateY: [180, 0],
                        duration: 600
                    }, 100);

                    // Fade in back content
                    tl.add({
                        targets: cardBack.querySelector('.threat-details'),
                        opacity: [0, 1],
                        translateY: [20, 0],
                        duration: 400
                    }, 400);

                } else {
                    // Flip back
                    anime({
                        targets: card.querySelector('.threat-card-front'),
                        rotateY: [-180, 0],
                        duration: 600,
                        easing: 'easeOutQuart'
                    });

                    anime({
                        targets: card.querySelector('.threat-card-back'),
                        rotateY: [0, 180],
                        duration: 600,
                        easing: 'easeOutQuart'
                    });
                }

                // Animate expand icon rotation
                anime({
                    targets: expandBtn.querySelector('.expand-icon'),
                    rotate: isFlipped ? '180deg' : '0deg',
                    duration: 300,
                    easing: 'easeOutQuart'
                });
            }

            // Scroll card into view if flipping to back
            if (isFlipped) {
                setTimeout(function() {
                    card.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                }, 300);
            }
        });

        // Add hover effects for desktop
        card.addEventListener('mouseenter', function() {
            if (!isFlipped && window.anime) {
                anime({
                    targets: card,
                    scale: 1.02,
                    duration: 200,
                    easing: 'easeOutQuart'
                });

                anime({
                    targets: threatIcon,
                    scale: 1.1,
                    duration: 200,
                    easing: 'easeOutQuart'
                });
            }
        });

        card.addEventListener('mouseleave', function() {
            if (!isFlipped && window.anime) {
                anime({
                    targets: card,
                    scale: 1,
                    duration: 200,
                    easing: 'easeOutQuart'
                });

                anime({
                    targets: threatIcon,
                    scale: 1,
                    duration: 200,
                    easing: 'easeOutQuart'
                });
            }
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

        // Animate CTA section
        const ctaSection = document.querySelector('.cta-section');
        if (ctaSection) {
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        anime({
                            targets: ctaSection.querySelectorAll('h2, p, .btn'),
                            opacity: [0, 1],
                            translateY: [30, 0],
                            duration: 600,
                            delay: anime.stagger(150),
                            easing: 'easeOutQuart'
                        });
                        observer.unobserve(ctaSection);
                    }
                });
            }, { threshold: 0.3 });

            // Set initial state
            ctaSection.querySelectorAll('h2, p, .btn').forEach(function(element) {
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
            });

            observer.observe(ctaSection);
        }
    }

    // Focus management for accessibility
    function manageFocus() {
        const threatCards = document.querySelectorAll('.threat-card');

        threatCards.forEach(function(card) {
            const expandBtn = card.querySelector('.expand-btn');
            const cardBack = card.querySelector('.threat-card-back');

            if (expandBtn && cardBack) {
                expandBtn.addEventListener('click', function() {
                    const isExpanded = expandBtn.getAttribute('aria-expanded') === 'true';

                    if (isExpanded) {
                        // Focus first focusable element in expanded content
                        const firstLink = cardBack.querySelector('a');
                        if (firstLink) {
                            setTimeout(function() {
                                firstLink.focus();
                            }, 300);
                        }
                    }
                });
            }
        });
    }

    // Initialize focus management
    manageFocus();

    // Handle escape key to collapse cards
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const expandedCards = document.querySelectorAll('.threat-card.expanded, .threat-card.flipped');
            expandedCards.forEach(function(card) {
                const expandBtn = card.querySelector('.expand-btn');
                if (expandBtn) {
                    expandBtn.click();
                    expandBtn.focus();
                }
            });
        }
    });

})();