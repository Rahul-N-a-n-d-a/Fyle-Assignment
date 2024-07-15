document.addEventListener('DOMContentLoaded', function () {
    const openFormBtn = document.querySelector('#openFormBtn');
    const formContainer = document.querySelector('#contactForm');
    const closeFormBtn = document.querySelector('#closeFormBtn');
    const backdrop = document.querySelector('#backdrop');

    openFormBtn.addEventListener('click', function () {
        formContainer.classList.add('visible');
        backdrop.classList.add('visible');
    });

    closeFormBtn.addEventListener('click', function () {
        formContainer.classList.remove('visible');
        backdrop.classList.remove('visible');
    });
});

$("#contact-form").submit(function (e) {
    e.preventDefault();
    var action = $(this).attr("action");
    $.ajax({
        type: "POST",
        url: action,
        crossDomain: true,
        data: new FormData(this),
        dataType: "json",
        processData: false,
        contentType: false,
        headers: {
            "Accept": "application/json"
        }
    }).done(function () {
        alert('The form was submitted successfully.');
        document.querySelector('#contactForm').classList.remove('visible');
        document.querySelector('#backdrop').classList.remove('visible');
    }).fail(function () {
        alert('An error occurred! Please try again later.')
    });
});

const imgContainer = document.querySelector('.img-container');
const dots = document.querySelectorAll('.dot');
const totalSlides = document.querySelectorAll('.img-slide').length;
const slidesToShow = 3;
const prevArrow = document.querySelector('.prev');
const nextArrow = document.querySelector('.next');

let currentIndex = 0;
let intervalId;

function updateCarousel() {
    const offset = -((100 / slidesToShow) * currentIndex);
    imgContainer.style.transform = `translateX(${offset}%)`;

    dots.forEach(dot => {
        dot.classList.remove('active');
        dot.classList.add('black');
    });

    const dotIndex = Math.floor(currentIndex / (totalSlides / dots.length));
    dots[dotIndex].classList.remove('black');
    dots[dotIndex].classList.add('active');
}

function moveToNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
}

function moveToPrevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

function startCarousel() {
    intervalId = setInterval(moveToNextSlide, 3000);
}

function stopCarousel() {
    clearInterval(intervalId);
}

imgContainer.addEventListener('mouseenter', stopCarousel);
imgContainer.addEventListener('mouseleave', startCarousel);

nextArrow.addEventListener('click', moveToNextSlide);
prevArrow.addEventListener('click', moveToPrevSlide);

startCarousel();
updateCarousel();

$(document).ready(function () {
    function activeProject(element) {
        $('.project-text').removeClass('active-project');
        element.addClass('active-project');
    }
    $('#first-image').on('click', function () {
        $('#project-img').attr('src', './Assets/Images/image1.jpg');
        activeProject($(this));
    });
    $('#second-image').on('click', function () {
        $('#project-img').attr('src', './Assets/Images/image2.png');
        activeProject($(this));
    });
    $('#third-image').on('click', function () {
        $('#project-img').attr('src', './Assets/Images/image3.jpg');
        activeProject($(this));
    });
    $('#second-image').click();
});