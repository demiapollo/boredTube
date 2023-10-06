const url = "https://www.googleapis.com/youtube/v3/search";
let youtubeApiKeys = [
  "AIzaSyDSRVOnBgzTFsC6Z5pNddA4XFXFgIcT0lE",
  "AIzaSyDlQ_C_XHtM6ZjX7k81m3yZB5HzzsYMucI",
];
const API_KEY =
  youtubeApiKeys[Math.floor(Math.random() * youtubeApiKeys.length)];


  document.getElementById('generate').addEventListener('click', generateActivity);

async function generateActivity() {
    try {
        // Fetch random activity from Bored API
        const response = await fetch('https://www.boredapi.com/api/activity');
        const data = await response.json();
        document.getElementById('activity').innerText = data.activity;

        // Fetch related videos from YouTube API
        const query = encodeURIComponent(data.activity);
        const apiKey = API_KEY;
        // Add maxResults=15 to the query string to get 5 videos
        const youtubeResponse = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=15&key=${apiKey}`);
        const youtubeData = await youtubeResponse.json();

        // Display videos in the carousel
        displayVideos(youtubeData.items);
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to fetch data. Please try again.');
    }
}

function displayVideos(videos) {
    const carousel = document.getElementById('carousel');
    carousel.innerHTML = ''; // Clear previous videos

    videos.forEach(video => {
        const videoElement = document.createElement('iframe');
        videoElement.src = `https://www.youtube.com/embed/${video.id.videoId}`;
        videoElement.width = 560;
        videoElement.height = 315;
        carousel.appendChild(videoElement);
        // center videos
        videoElement.style.transform = `translateX(${-100 * videos.length}%)`;
        // show carousel buttons with videos
        document.getElementById('prev').style.display = 'inline-block';
        document.getElementById('next').style.display = 'inline-block';
        


    });

    // Implement carousel navigation
    let currentIndex = 0;
    updateCarousel();

    document.getElementById('next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % videos.length;
        updateCarousel();
    });

    document.getElementById('prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + videos.length) % videos.length;
        updateCarousel();
    });

    function updateCarousel() {
        Array.from(carousel.children).forEach((iframe, index) => {
            iframe.style.transform = `translateX(${-100 * currentIndex}%)`;
        });
    }
}
