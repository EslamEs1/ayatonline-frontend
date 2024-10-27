document.addEventListener("DOMContentLoaded", function () {
    const logo = document.getElementById("navbar-logo");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            // Adjust the value as needed
            logo.style.width = "60px"; // Shrink logo width
        } else {
            logo.style.width = "70px"; // Original logo width
        }
    });
});

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    });
});



const images = document.querySelectorAll(".hero-image");
let currentIndex = 0;

function changeBackgroundImage() {
    images.forEach((img, index) => {
        img.classList.remove("active");
        if (index === currentIndex) {
            img.classList.add("active");
        }
    });
    currentIndex = (currentIndex + 1) % images.length;
}

// تغيير الصورة كل 5 ثوانٍ
setInterval(changeBackgroundImage, 5000);

// بدء تشغيل الصورة الأولى
changeBackgroundImage();




function openVideoModal() {
    document.getElementById("videoModal").style.display = "block";
    document.getElementById("heroVideo").play();
}

function closeVideoModal() {
    var modal = document.getElementById("videoModal");
    modal.style.display = "none";
    document.getElementById("heroVideo").pause();
}
