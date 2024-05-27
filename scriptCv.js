document.addEventListener('DOMContentLoaded', function () {
    // Code pour le header d'expérience
    const experienceHeader = document.querySelector('.accordion-header-exp');
    const experienceContent = document.querySelector('.accordion-content-exp');
    const experienceArrow = document.querySelector('.accordion-header-exp .arrow');

    experienceHeader.addEventListener('click', function () {
        if (experienceContent.style.display === 'block' || experienceContent.style.display === '') {
            experienceContent.style.display = 'none';
            experienceArrow.style.transform = 'rotate(0deg)';
        } else {
            experienceContent.style.display = 'block';
            experienceArrow.style.transform = 'rotate(180deg)';
        }
    });

    // Code pour la date par défaut
    const defaultContent = document.getElementById('content1');
    const defaultDateItem = document.querySelector('.date-item[data-content="content1"]');
    defaultDateItem.classList.add('active-date');

    // Code pour le header de formation
    const formationHeader = document.querySelector('.accordion-header-form');
    const formationContent = document.querySelector('.accordion-content-form');
    const formationArrow = document.querySelector('.accordion-header-form .arrow');

    formationHeader.addEventListener('click', function () {
        if (formationContent.style.display === 'block' || formationContent.style.display === '') {
            formationContent.style.display = 'none';
            formationArrow.style.transform = 'rotate(0deg)';
        } else {
            formationContent.style.display = 'block';
            formationArrow.style.transform = 'rotate(180deg)';
        }
    });

    // Code pour les dates de l'expérience professionnelle
    document.querySelectorAll('.date-item').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.content').forEach(content => {
                content.classList.remove('active');
            });
            const contentId = item.getAttribute('data-content');
            document.getElementById(contentId).classList.add('active');

            document.querySelectorAll('.date-item').forEach(item => {
                item.classList.remove('active-date');
            });
            item.classList.add('active-date');
        });
    });

    // Animation pour le texte "À la recherche"
    var spans = [document.getElementById('typewriter'), document.getElementById('typewriterMobile')];

    spans.forEach(function(span) {
        var text = span.textContent;
        span.textContent = '';
        for (let i = 0; i < text.length; i++) {
            (function(i) {
                setTimeout(function() {
                    span.textContent += text[i];
                }, 150 * i);
            })(i);
        }
    });
});
