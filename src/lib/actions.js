/**
 * Svelte Action to trigger animations on scroll
 * Usage: <div use:animateOnScroll>...</div>
 * Adds the 'visible' class when the element enters the viewport.
 */
export function animateOnScroll(node, options = {}) {
    const { threshold = 0.2, rootMargin = '0px' } = options;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                node.classList.add('visible');
                // Once visible, we can stop observing if we only want it to animate once
                observer.unobserve(node);
            }
        });
    }, {
        threshold,
        rootMargin
    });

    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
        }
    };
}
