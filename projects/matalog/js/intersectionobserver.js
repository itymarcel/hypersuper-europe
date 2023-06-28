const logo = document.querySelector(".logo");    
const el = document.querySelector(".scroll_observer");    
const options = {
    root: null,
    rootMargin: '0px',
    threshold: [1]
}

function callback (entries, observer) {
    entries.forEach(entry => {
        entry.isIntersecting ? logo.classList.remove('small') : logo.classList.add('small');
    });
}
let observer = new IntersectionObserver(callback, options);
observer.observe(el);