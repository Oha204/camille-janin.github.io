document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.titleAnimD-G-1, .titleAnimD-G-2');

    const handleScroll = () => {
        elementsToAnimate.forEach(element => {
            const rect = element.getBoundingClientRect();
            const elemTop = rect.top;
            const elemBottom = rect.bottom;

            // Check if element is in viewport
            if (elemTop < window.innerHeight && elemBottom >= 0) {
                element.classList.add('animated');
            } 
        });
    };

    window.addEventListener('scroll', handleScroll);

    // Trigger the scroll event once on page load to animate elements already in view
    handleScroll();
});

// Fonction pour vérifier si un élément est dans la vue
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < window.innerHeight && 
        rect.bottom >= 0 &&
        rect.top >= 0  // Vérifier que le haut de l'élément est à l'intérieur de la vue
    );
}


document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.titleAnimG-D-1');

    const handleScroll = () => {
        elementsToAnimate.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);

    // Trigger the scroll event once on page load to animate elements already in view
    handleScroll();
});


document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.titleAnimD-G-3');

    const handleScroll = () => {
        elementsToAnimate.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);

    // Trigger the scroll event once on page load to animate elements already in view
    handleScroll();
});

document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.titleAnimG-D-2');

    const handleScroll = () => {
        elementsToAnimate.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);

    // Trigger the scroll event once on page load to animate elements already in view
    handleScroll();
});