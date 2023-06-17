/* var dr = document.querySelector(".c-2-image-holder")

dr.addEventListener("click",function(){
    window.open("https://drnutrition.com/en-ae/brands/body-builder")
})
var omega = document.getElementById("omega")

omega.addEventListener("click",function(){
    window.open("https://drnutrition.com/en-ae/body-builder-super-omega-3-1000-mg-30-softgels")
})
var zma = document.getElementById("zma")

zma.addEventListener("click",function(){
    window.open("https://drnutrition.com/en-ae/body-builder-ultra-zma-60-unflavored")
})
var testo = document.getElementById("testo")

testo.addEventListener("click",function(){
    window.open("https://drnutrition.com/en-ae/body-builder-testo-fuel-60-tablets")
})
var omega3 = document.getElementById("mega-3")

omega3.addEventListener("click",function(){
    window.open("https://drnutrition.com/en-ae/body-builder-omega-3-2000-mg-60-softgels")
})
 */

const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slideActiveClass: "active",
  navigation: {
    nextEl: ".next",
    prevEl: ".prev"
  },
  pagination: {
    el: ".pagination",
    clickable: true
  },
  autoplay: {
    enabled: true,
    delay: 5000
  },
  // Media
  // breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     slidesPerView: 2,
  //     spaceBetween: 20
  //   },
  //   // when window width is >= 480px
  //   480: {
  //     slidesPerView: 4,
  //     spaceBetween: 30
  //   },
  // }
});
function scrollToProducts() {
  // Scroll to the products section using smooth behavior
  document.querySelector('#products1').scrollIntoView({
      behavior: 'smooth'
  });
}
function scrollToProducts() {
  // Scroll to the products section using smooth behavior
  document.querySelector('#why').scrollIntoView({
      behavior: 'smooth'
  });
}
  
  