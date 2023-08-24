
const url = "https://www.googleapis.com/youtube/v3/search"
let youtubeApiKeys = ["AIzaSyDSRVOnBgzTFsC6Z5pNddA4XFXFgIcT0lE", "AIzaSyDlQ_C_XHtM6ZjX7k81m3yZB5HzzsYMucI" ];
const API_KEY = youtubeApiKeys[Math.floor(Math.random() * youtubeApiKeys.length)];



// swiper part

// var swiper = new Swiper(".swiper", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     coverflowEffect: {
//       rotate: 0,
//       stretch: 0,
//       depth: 100,
//       modifier: 3,
//       slideShadows: true
//     },
//     keyboard: {
//       enabled: true
//     },
//     mousewheel: {
//       thresholdDelta: 70
//     },
//     loop: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true
//     },
//     breakpoints: {
//       640: {
//         slidesPerView: 2
//       },
//       768: {
//         slidesPerView: 1
//       },
//       1024: {
//         slidesPerView: 2
//       },
//       1560: {
//         slidesPerView: 3
//       }
//     }
//   });