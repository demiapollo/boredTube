const url = "https://www.googleapis.com/youtube/v3/search";
let youtubeApiKeys = [
  "AIzaSyDSRVOnBgzTFsC6Z5pNddA4XFXFgIcT0lE",
  "AIzaSyDlQ_C_XHtM6ZjX7k81m3yZB5HzzsYMucI",
];
const API_KEY =
  youtubeApiKeys[Math.floor(Math.random() * youtubeApiKeys.length)];

const welcome = document.querySelector(".welcome");

// Calling bored api to get a random activity
const boredApi = function (customURL) {
  fetch(`https://www.boredapi.com/api/activity${customURL}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (boredapi) {
      if (boredapi.activity === undefined) {
        resultsHeader.textContent =
          "Sorry, no results found. Please try again.";
        return;
      }

      boredActivity = boredapi.activity;
      resultsHeader.textContent = "Activity: " + boredActivity;

      youTubeApi(boredapi);
    });
};

// Calling youtube api to get a video based on the activity from bored api
const youTubeApi = function (boredapi) {
  fetch(
    `${url}?key=${API_KEY}&type=video&part=snippet&maxResults=5&q=${boredapi.activity}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (newdata) {
      data = newdata;
      displayVideos(data);
    });
};

// Displaying the video on the page
const displayVideos = function (data) {
  navigate(0);
};

// Function to navigate through the videos
function navigate(direction) {
  index += direction;
  if (index < 0) {
    index = data.items.length - 1;
  } else if (index > data.items.length - 1) {
    index = 0;
  }

  currentImage = data.items[index];
  carouselVideo = document.querySelector(".videoNow");
  carouselVideo.setAttribute (
    "src",
    `https://www.youtube.com/embed/${currentImage.id.videoId}`
  );
  videoName = currentImage.snippet.title;
  videoImage = currentImage.id.videoId;
}

// Event listeners for the back and next buttons


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
