"use strict";
const $ratings = document.querySelectorAll('.card__rating');
const $textRating = document.querySelector('.background__text');
$ratings.forEach(element => {
    element.addEventListener('click', (e) => {
        const buttonTarget = e.target;
        $ratings.forEach((element) => {
            element.classList.remove('selected');
        });
        buttonTarget.classList.add('selected');
        $textRating.textContent = `You selected ${buttonTarget.textContent} out of 5`;
        submit();
    });
});
const $submit = document.querySelector('.card__btn');
const $cardFront = document.querySelector('.card');
const $cardBack = document.querySelector('.background');
const $faceCard = document.querySelector('.face');
function submit() {
    const $button = document.querySelector('input');
    $button.disabled = false;
    if ($button.disabled) {
        return;
    }
    $submit.addEventListener('click', () => {
        $faceCard.classList.add('rotate');
        $cardFront.classList.add('rotate');
        $cardBack.classList.add('rotate');
    });
}
const $imgTks = document.querySelector('.background__img');
const $hide = document.querySelector('p');
$imgTks.addEventListener('mouseover', () => {
    $hide.style.opacity = '1';
});
$imgTks.addEventListener('mouseout', () => {
    $hide.style.opacity = '0';
});
$imgTks.addEventListener('click', () => {
    $faceCard.classList.remove('rotate');
    $cardFront.classList.remove('rotate');
    $cardBack.classList.remove('rotate');
    $ratings.forEach(element => {
        element.classList.remove('selected');
    });
});
const star2 = document.querySelector(`.card__star-2`);
const star3 = document.querySelector(`.card__star-3`);
const star4 = document.querySelector(`.card__star-4`);
const star5 = document.querySelector(`.card__star-5`);
$ratings.forEach(showStar);
function showStar(button) {
    button.addEventListener('mouseover', () => {
        const buttonId = +button.id.split('-')[1];
        switch (buttonId) {
            case 1:
                star2.classList.remove('show');
                star3.classList.remove('show');
                star4.classList.remove('show');
                star5.classList.remove('show');
                break;
            case 2:
                star2.classList.add('show');
                star3.classList.remove('show');
                star4.classList.remove('show');
                star5.classList.remove('show');
                break;
            case 3:
                star2.classList.add('show');
                star3.classList.add('show');
                star4.classList.remove('show');
                star5.classList.remove('show');
                break;
            case 4:
                star2.classList.add('show');
                star3.classList.add('show');
                star4.classList.add('show');
                star5.classList.remove('show');
                break;
            case 5:
                star2.classList.add('show');
                star3.classList.add('show');
                star4.classList.add('show');
                star5.classList.add('show');
                break;
        }
    });
}
//# sourceMappingURL=script.js.map