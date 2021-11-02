const all_stars = document.querySelectorAll('span');
const stars_container = document.querySelector('.container');

all_stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        // so depending on which star we click we get that element and it's index
        // we're going to loop through the stars again and check if the new index is smaller then the star's index we clicked
        all_stars.forEach((newStar, newIndex) => {
            if (newIndex <= index) {
                // this way we get the clicked star and all the stars before it. So we can add the class of active to these stars
                newStar.classList.add('active');
                // after that we'll add the pointer events to none to the container so we can't change our rating
            }
            stars_container.style.pointerEvents = 'none';
        })
    })
})