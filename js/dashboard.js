console.log('dashboard.js');

document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.count');
    
    // Observer options
    const options = {
        threshold: 1.0,
        rootMargin: '0px 0px -50px 0px' // Adjust as needed
    };

    // Intersection Observer callback function
    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounting(entry.target);
                observer.unobserve(entry.target);
            }
        });
    };

    // Create an Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, options);

    // Observe each counter element
    counters.forEach(counter => {
        observer.observe(counter);
    });

    // Function to start counting animation
    const startCounting = (counter) => {
        const target = parseInt(counter.dataset.target);
        const duration = 2000; // Adjust as needed
        const interval = 10; // Interval for counting animation

        let currentCount = 0;
        const increment = target / (duration / interval);

        const updateCount = () => {
            currentCount += increment;
            counter.textContent = Math.ceil(currentCount);

            if (currentCount < target) {
                requestAnimationFrame(updateCount);
            } else {
                counter.textContent = target;
            }
        };

        updateCount();
    };
});
