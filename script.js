document.addEventListener('DOMContentLoaded', () => {

    // --- Intersection Observer for Reveal Animations ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                requestAnimationFrame(() => {
                    entry.target.classList.add('visible');
                });
                // To stop observing after the first reveal, uncomment:
                // observer.unobserve(entry.target);
            }
            // To re-animate when scrolling out and back in, add else condition:
            // else {
            //     entry.target.classList.remove('visible');
            // }
        });
    }, {
        root: null, // Use the viewport as the root
        threshold: 0.1, // Trigger when 10% of the element is visible
        // rootMargin: '0px 0px -50px 0px' // Example: trigger 50px before it enters viewport
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // --- Add potential future interactive scripts below ---

}); // End DOMContentLoaded