// Toggle the mobile navigation menu
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    document.querySelector("header ul").classList.toggle("show");
});

// Close mobile navigation when clicking on a link (optional for UX)
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector("header ul").classList.remove("show");
    });
});

// Smooth scroll behavior for the page
const smoothScroll = (target, duration) => {
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const animation = currentTime => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
};

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = this.getAttribute('href');
        if (targetSection.startsWith('#')) {
            smoothScroll(targetSection, 1000);
        }
    });
});

// Optional: Toggle button color change when active
btn.addEventListener("click", () => {
    btn.classList.toggle("active");
});
