let searchBtn = document.querySelector('#search-btn')
let searchBar = document.querySelector('.search-bar-container')
let formBtn = document.querySelector('#login-btn')
let loginForm = document.querySelector('.login-form-container')
let formClose = document.querySelector('#form-close')
let menu = document.querySelector('#menu-bar')
let navbar = document.querySelector('.navbar')
let videoBtn = document.querySelectorAll('.vid-btn')

window.onscroll = () => {
    searchBar.classList.remove('active')
    searchBtn.classList.remove('fa-times')
    navbar.classList.remove('active')
    menu.classList.remove('fa-times')
    loginForm.classList.remove('active')
}

menu.addEventListener('click', () => {
    navbar.classList.toggle('active')
    menu.classList.toggle('fa-times')
})

searchBtn.addEventListener('click', () => {
    searchBar.classList.toggle('active')
    searchBtn.classList.toggle('fa-times')
})

formBtn.addEventListener('click', () => {
    loginForm.classList.toggle('active')
})

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active')
})

videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active')
        btn.classList.add('active')

        let src = btn.getAttribute('data-src')
        document.querySelector('#video-slider').src = src
    })
})

// swiper
var swiper = new Swiper(".review-slider", {
    spaceBetween:20,
    loop:true,
    autoplay: {
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween:20,
    loop:true,
    autoplay: {
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoints: {
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
    }
});