document.addEventListener('DOMContentLoaded', function () {
    // Intersection Observer for scroll animations
    const animateOnScroll = function () {
        const elements = document.querySelectorAll('[data-scroll], [data-scroll-stagger]');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');

                    // For gallery images - load them when visible
                    if (entry.target.tagName === 'IMG' && !entry.target.src) {
                        const lazySrc = entry.target.getAttribute('data-src');
                        if (lazySrc) {
                            entry.target.src = lazySrc;
                        }
                    }
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });

        elements.forEach(element => {
            observer.observe(element);
        });
    };

    // Initialize after page loads
    window.addEventListener('load', animateOnScroll);
});