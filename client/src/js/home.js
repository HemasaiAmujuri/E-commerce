const images = ["../images/home_page/home_test.jpg", "../images/home_page/promotion_01.jpg", "../images/home_page/promotion_02.jpg", "../images/home_page/promotion_03.jpg"]
let currentIndex = 0;


const allImages = document.querySelectorAll(".promotion-images .promotion")


function updateCarousel(){
    for(let i = 0; i < images.length; i++){
    const relativeIndex = (currentIndex + i - 2 + images.length) % images.length;
    allImages[i].src = images[relativeIndex];
    allImages[i].classList.toggle("center", i == 2 )
    }
}


document.getElementById("prev").addEventListener("click", ()=> {
    currentIndex = ( currentIndex - 1 + images.length) % images.length; 
    updateCarousel();
})


document.getElementById("next").addEventListener("click", ()=> {
    currentIndex = ( currentIndex +1 ) % images.length;
    updateCarousel();
})

