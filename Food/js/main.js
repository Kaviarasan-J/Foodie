// Navbar functionality
let nav = document.querySelector('.navigation-wrap');
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) { 
        nav.classList.add("scroll-on");
    } else {
        nav.classList.remove("scroll-on");
    }
};

// Navbar collapse on link click
let navLinks = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navLinks.forEach(function(link) { 
    link.addEventListener("click", function() {
        navCollapse.classList.remove("show");
    });
});

// Counter design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id);
        let current = start;
        let range = end - start;
        let increment = end > start ? 1 : -1;
        let step = Math.abs(Math.floor(duration / range)); 
        
        let timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if (current === end) { 
                clearInterval(timer);
            }
        }, step);
    }
    
    counter("count1", 0, 1234, 3000);
    counter("count2", 100, 4356, 3000);
    counter("count3", 0, 1333, 3000);
    counter("count4", 0, 6578, 3000);
});
