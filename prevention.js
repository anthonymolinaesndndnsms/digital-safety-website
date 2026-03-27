// Prevention page specific JavaScript
// Handles checklist functionality, progress tracking, and localStorage

(function() {
    'use strict';

    let checklistData = {
        completed: [],
        total: 0
    };

    document.addEventListener('DOMContentLoaded', function() {
        initializeChecklist();
        initializeInfoToggles();
        initializePageAnimations();
        loadChecklistState();
        updateProgress();
    });

    function initializeChecklist() {
        const checkboxes = document.querySelectorAll('.checklist-checkbox');
        const completionCelebration = document.getElementById('completionCelebration');

        checklistData.total = checkboxes.length;

        checkboxes.forEach(function(checkbox, index) {
            // Add unique ID for localStorage
            checkbox.id = 'checklist-item-' + index;

            checkbox.addEventListener('change', function() {
                handleCheckboxChange(checkbox);
                updateProgress();
                saveChecklistState();

                // Check if all items are completed
                if (checklistData.completed.length === checklistData.total) {
                    showCompletionCelebration();
                }
            });

            // Add click animation
            checkbox.addEventListener('change', function() {
                const checkmark = checkbox.nextElementSibling;
                if (checkbox.checked && window.anime) {
                    anime({
                        targets: checkmark,
                        scale: [1, 1.2, 1],
                        duration: 300,
                        easing: 'easeOutQuart'
                    });

                    // Create small confetti burst
                    createMiniConfetti(checkmark);
                }
            });
        });
    }

    function handleCheckboxChange(checkbox) {
        const itemId = checkbox.id;
        const isChecked = checkbox.checked;

        if (isChecked) {
            if (!checklistData.completed.includes(itemId)) {
                checklistData.completed.push(itemId);
            }
        } else {
            const index = checklistData.completed.indexOf(itemId);
            if (index > -1) {
                checklistData.completed.splice(index, 1);
            }
        }
    }

    function updateProgress() {
        const progressFill = document.getElementById('progressFill');
        const completedCount = document.getElementById('completedCount');
        const totalCount = document.getElementById('totalCount');

        if (progressFill && completedCount && totalCount) {
            const percentage = (checklistData.completed.length / checklistData.total) * 100;

            // Update counts
            completedCount.textContent = checklistData.completed.length;
            totalCount.textContent = checklistData.total;

            // Animate progress bar
            if (window.anime) {
                anime({
                    targets: progressFill,
                    width: percentage + '%',
                    duration: 600,
                    easing: 'easeOutQuart'
                });
            } else {
                progressFill.style.width = percentage + '%';
            }

            // Update progress bar color based on completion
            if (percentage === 100) {
                progressFill.style.background = 'linear-gradient(90deg, #10b981 0%, #059669 100%)';
            } else if (percentage >= 75) {
                progressFill.style.background = 'linear-gradient(90deg, #10b981 0%, #2563eb 100%)';
            } else if (percentage >= 50) {
                progressFill.style.background = 'linear-gradient(90deg, #f59e0b 0%, #2563eb 100%)';
            } else {
                progressFill.style.background = 'linear-gradient(90deg, #ef4444 0%, #2563eb 100%)';
            }
        }
    }

    function initializeInfoToggles() {
        const infoToggles = document.querySelectorAll('.info-toggle');

        infoToggles.forEach(function(toggle) {
            const itemDetails = toggle.parentElement.querySelector('.item-details');
            if (!itemDetails) return;

            toggle.addEventListener('click', function() {
                const isExpanded = toggle.getAttribute('data-expanded') === 'true';
                const newState = !isExpanded;

                // Update toggle state
                toggle.setAttribute('data-expanded', newState);

                // Toggle details visibility
                itemDetails.classList.toggle('expanded', newState);

                // Animate toggle
                if (window.anime) {
                    anime({
                        targets: toggle,
                        rotate: newState ? '180deg' : '0deg',
                        duration: 300,
                        easing: 'easeOutQuart'
                    });

                    if (newState) {
                        anime({
                            targets: itemDetails,
                            maxHeight: [0, itemDetails.scrollHeight + 'px'],
                            opacity: [0, 1],
                            duration: 400,
                            easing: 'easeOutQuart'
                        });
                    } else {
                        anime({
                            targets: itemDetails,
                            maxHeight: [itemDetails.scrollHeight + 'px', 0],
                            opacity: [1, 0],
                            duration: 300,
                            easing: 'easeInQuart'
                        });
                    }
                }
            });

            // Keyboard support
            toggle.addEventListener('keydown', function(event) {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    toggle.click();
                }
            });
        });
    }

    function showCompletionCelebration() {
        const celebration = document.getElementById('completionCelebration');
        if (!celebration) return;

        celebration.style.display = 'block';
        celebration.classList.add('show');

        // Create full-screen confetti
        if (window.createConfetti) {
            window.createConfetti(document.body);
        }

        // Animate celebration content
        if (window.anime) {
            anime({
                targets: celebration.querySelector('.celebration-content'),
                scale: [0.8, 1],
                opacity: [0, 1],
                duration: 800,
                easing: 'easeOutQuart'
            });
        }

        // Scroll to celebration
        setTimeout(function() {
            celebration.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }, 500);
    }

    function createMiniConfetti(element) {
        if (!window.anime || !element) return;

        const rect = element.getBoundingClientRect();
        const colors = ['#10b981', '#2563eb', '#f59e0b'];

        for (let i = 0; i < 6; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = rect.left + rect.width / 2 + 'px';
            confetti.style.top = rect.top + rect.height / 2 + 'px';
            confetti.style.width = '4px';
            confetti.style.height = '4px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = '50%';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '1000';

            document.body.appendChild(confetti);

            anime({
                targets: confetti,
                translateX: (Math.random() - 0.5) * 60,
                translateY: (Math.random() - 0.5) * 60,
                scale: [1, 0],
                opacity: [1, 0],
                duration: 800,
                easing: 'easeOutQuart',
                complete: function() {
                    if (confetti.parentNode) {
                        confetti.parentNode.removeChild(confetti);
                    }
                }
            });
        }
    }

    function saveChecklistState() {
        try {
            localStorage.setItem('digitalSafetyChecklist', JSON.stringify(checklistData.completed));
        } catch (e) {
            console.warn('Could not save checklist state to localStorage:', e);
        }
    }

    function loadChecklistState() {
        try {
            const saved = localStorage.getItem('digitalSafetyChecklist');
            if (saved) {
                checklistData.completed = JSON.parse(saved);

                // Apply saved state to checkboxes
                checklistData.completed.forEach(function(itemId) {
                    const checkbox = document.getElementById(itemId);
                    if (checkbox) {
                        checkbox.checked = true;
                    }
                });
            }
        } catch (e) {
            console.warn('Could not load checklist state from localStorage:', e);
        }
    }

    function initializePageAnimations() {
        if (!window.anime) return;

        // Animate progress section
        const progressSection = document.querySelector('.checklist-progress');
        if (progressSection) {
            progressSection.style.opacity = '0';
            progressSection.style.transform = 'translateY(30px)';

            anime({
                targets: progressSection,
                opacity: [0, 1],
                translateY: [30, 0],
                duration: 800,
                easing: 'easeOutQuart'
            });
        }

        // Animate category sections with stagger
        const categoryObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const categorySection = entry.target;
                    const elements = categorySection.querySelectorAll('.category-header, .checklist-item');

                    anime({
                        targets: elements,
                        opacity: [0, 1],
                        translateY: [30, 0],
                        duration: 600,
                        delay: anime.stagger(100),
                        easing: 'easeOutQuart'
                    });

                    categoryObserver.unobserve(categorySection);
                }
            });
        }, { threshold: 0.2 });

        const categorySection = document.querySelectorAll('.category-section');
        categorySection.forEach(function(section) {
            // Set initial state
            section.querySelectorAll('.category-header, .checklist-item').forEach(function(element) {
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
            });

            categoryObserver.observe(section);
        });
    }

    // Export reset function for testing/debugging
    window.resetChecklist = function() {
        if (confirm('Are you sure you want to reset all checklist progress?')) {
            localStorage.removeItem('digitalSafetyChecklist');
            location.reload();
        }
    };

    // Handle print functionality
    window.addEventListener('beforeprint', function() {
        // Expand all info sections for printing
        const infoToggles = document.querySelectorAll('.info-toggle');
        infoToggles.forEach(function(toggle) {
            if (toggle.getAttribute('data-expanded') !== 'true') {
                toggle.click();
            }
        });
    });

    // Category completion tracking
    function updateCategoryProgress() {
        const categories = document.querySelectorAll('.category-section');

        categories.forEach(function(category) {
            const checkboxes = category.querySelectorAll('.checklist-checkbox');
            const checkedBoxes = category.querySelectorAll('.checklist-checkbox:checked');
            const completion = checkedBoxes.length / checkboxes.length;

            // Add visual indicator to category header
            const categoryHeader = category.querySelector('.category-header');
            const categoryIcon = category.querySelector('.category-icon');

            if (completion === 1) {
                categoryHeader.classList.add('completed');
                if (categoryIcon && window.anime) {
                    anime({
                        targets: categoryIcon,
                        scale: [1, 1.1, 1],
                        duration: 400,
                        easing: 'easeOutQuart'
                    });
                }
            } else {
                categoryHeader.classList.remove('completed');
            }
        });
    }

    // Update category progress when checkboxes change - use event delegation
    let categoryProgressTimer = null;
    document.addEventListener('change', function(event) {
        if (event.target.classList.contains('checklist-checkbox')) {
            // Debounce category progress updates
            clearTimeout(categoryProgressTimer);
            categoryProgressTimer = setTimeout(updateCategoryProgress, 50);
        }
    }, true);

    // Initial category progress update
    setTimeout(updateCategoryProgress, 100);

})();