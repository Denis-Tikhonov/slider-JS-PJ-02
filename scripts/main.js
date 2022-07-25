const images = [{
  url: "./images/rostov1.svg",
  title: "Rostov-on-Don, Admiral",
  city: "Rostov-on-Don<br> LCD admiral",
  area: "81 m2",
  time: "3.5 months",
  cost: 'upon request'
}, {
  url: "./images/sochi.svg",
  title: "Sochi Thieves",
  city: "Sochi<br> Thieves",
  area: "105 m2",
  time: "4 months",
  cost: 'upon request'
}, {
  url: "./images/rostov2.svg",
  title: "Rostov-on-Don Patriotic",
  city: "Rostov-on-Don<br> Patriotic",
  area: "93 m2",
  time: "3 months",
  cost: 'upon request'
}];

function initSlider() {
 if (!images || !images.length) return;

  let sliderImages = document.querySelector(".slider__images");
  let sliderArrows = document.querySelector(".arrows");
  let sliderDots = document.querySelector(".slider__dots");

  let sliderTitle = document.querySelector(".slider__menu__items");
  let infoCity = document.querySelector(".info__city");
  let infoArea = document.querySelector(".info__area");
  let infoTime = document.querySelector(".info__time");
  let infoCost = document.querySelector(".info__cost");

  initImages();
  initArrows();
  initDots();
  initTitle();
  initInfo();
  // initAutoplay();
  
 function initImages() {
   images.forEach((image, index) => {
     let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
     sliderImages.innerHTML += imageDiv;
   });
 }
 
 function initArrows() {
   sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
     arrow.addEventListener("click", function() {
       let curNumber = +sliderImages.querySelector(".active").dataset.index;
       let nextNumber;
       if (arrow.classList.contains("left")) {
         nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
       } else {
         nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
       }
       moveSlider(nextNumber);
     });
   });
 }
 
 function initDots() {
   images.forEach((image, index) => {
     let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
     sliderDots.innerHTML += dot;
   });
   sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
     dot.addEventListener("click", function() {
       moveSlider(this.dataset.index);
     });
   });
 }
 
 function initInfo() {
    images.forEach((image, index) => {
      let cityDiv = `<p class="cards__text n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${images[index].city}</p>`;
      infoCity.innerHTML += cityDiv;
      let timeDiv = `<p class="cards__text n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${images[index].time}</p>`;
      infoTime.innerHTML += timeDiv;
      let areaDiv = `<p class="cards__text n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${images[index].area}</p>`;
      infoArea.innerHTML += areaDiv;
      let costDiv = `<p class="cards__text n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${images[index].cost}</p>`;
      infoCost.innerHTML += costDiv;
    });
  }

 function initTitle() {
    images.forEach((image, index) => {
      let menuItemsDiv = `<li class="slider__menu__item n${index} ${index === 0 ? "active" : ""}" data-index="${index}"><a>${images[index].title}</a></li>`;
      sliderTitle.innerHTML += menuItemsDiv;
    });
    sliderTitle.querySelectorAll(".slider__menu__item").forEach(item => {
      item.addEventListener("click", function() {
        moveSlider(this.dataset.index);
      });
    });
  }

 function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");
    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".n" + num).classList.add("active");
    infoCity.querySelector(".active").classList.remove("active");
    infoCity.querySelector(".n" + num).classList.add("active");
    infoTime.querySelector(".active").classList.remove("active");
    infoTime.querySelector(".n" + num).classList.add("active");
    infoArea.querySelector(".active").classList.remove("active");
    infoArea.querySelector(".n" + num).classList.add("active");
    infoCost.querySelector(".active").classList.remove("active");
    infoCost.querySelector(".n" + num).classList.add("active");
    sliderTitle.querySelector(".active").classList.remove("active");
    sliderTitle.querySelector(".n" + num).classList.add("active");
 }
 
 function initAutoplay() {
   setInterval(() => {
     let curNumber = +sliderImages.querySelector(".active").dataset.index;
     let nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
     moveSlider(nextNumber);
   }, 5000);// на 5 секунд
 }

}

document.addEventListener("DOMContentLoaded", initSlider);