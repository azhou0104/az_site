const animation_elements = document.querySelectorAll('.onScroll');
// const about_img = document.querySelectorAll('.onScroll2');
console.log(animation_elements)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('about-txt') ) {
                entry.target.classList.add('about-text-animate');
            } else if (entry.target.classList.contains('about-img')) {
                entry.target.classList.add('about-img-animate');
            } else if (entry.target.classList.contains('glow')) {
                entry.target.classList.add('animate-proj')
            }else if (entry.target.classList.contains('round-table')) {
                entry.target.classList.add('tableAnimate')
            }
            else if (entry.target.classList.contains('travel_txt_class')) {
                entry.target.classList.add('animateTravel')
            }
        } else {
            if (entry.target.classList.contains('about-txt')) {
                entry.target.classList.remove('about-text-animate');
            } else if (entry.target.classList.contains('about-img')) {
                entry.target.classList.remove('about-img-animate');
            }
            else if (entry.target.classList.contains('travel_txt_class')) {
                entry.target.classList.remove('animateTravel')
            }else if (entry.target.classList.contains('glow')) {
                entry.target.classList.remove('animate-proj')
            }
        }
    });
}, );

for (let i = 0; i < animation_elements.length; i++) {
    observer.observe(animation_elements[i]);
}







