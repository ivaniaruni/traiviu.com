// Trailer and Information Script
const modal = document.getElementById("trailerModal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalDirectors = document.getElementById("modal-directors");
const modalProducers = document.getElementById("modal-producers");
const modalVideo = document.getElementById("modal-video");
const closeBtn = document.querySelector(".close-btn");
const modalWhereToWatch = document.getElementById("modal-where-to-watch");
const modalGenre = document.getElementById("modal-genre");
const modalReleaseDate = document.getElementById("modal-release-date");
const modalRating = document.getElementById("modal-rating");

// Series information (expand this list as needed)
const seriesInfo = {
    // Upcoming Series
    "Fear Street Prom Queen":{
        title: "Fear Street Prom Queen",
        description: "As prom season unfolds at Shadyside High, a bold newcomer is unexpectedly nominated for prom queen. When her fellow nominees begin to disappear, she realizes this prom night might be her last.",
        directors: "Matt Palmer",
        producers: "Netflix Originals",
        videoId: "pDvUEuZZM04",
        whereToWatch: "Netflix",
        genre: "Horror",
        releaseDate: "April 4, 2025",
        rating: "N/A"
    },
    "Final Destination Bloodlines":{
        title: "Final Destination Bloodlines",
        description: "Plagued by violent recurring nightmares, college student Stefanie returns home to confront a family curse that has spanned generations. As she uncovers her grandmother's past escape from Death, Stefanie realizes that her entire bloodline is now marked, and she must find a way to break the cycle before it's too late.",
        directors: "Zach Lipovsky, Adam B. Stein",
        producers: "New Line Cinema",
        videoId: "KnWzz0n60pE",
        whereToWatch: "Theaters",
        genre: "Horror, Thriller",
        releaseDate: "May 16, 2025",
        rating: "N/A"
    },
    "Karate Kid Legends":{
        title: "Karate Kid Legends",
        description: "After a family tragedy, kung fu prodigy Li Fong moves from Beijing to New York. Struggling to adapt to his new life, he finds himself caught in a local karate competition. With the guidance of his mentors, Mr. Han and Daniel LaRusso, Li must blend his kung fu and karate skills to face unexpected challenges.",
        directors: "Jonathan Entwistle",
        producers: "Columbia Pictures",
        videoId: "uPzOyzsnmio",
        whereToWatch: "Theaters",
        genre: "Action, Drama",
        releaseDate: "May 30, 2025",
        rating: "N/A"
    },
    "Lilo & Stitch":{
        title: "Lilo & Stitch",
        description: "A lonely Hawaiian girl named Lilo forms a unique bond with Stitch, a mischievous alien on the run from intergalactic authorities. Together, they embark on adventures that teach them the true meaning of family.",
        directors: "Dean Fleischer Camp",
        producers: "Disney",
        videoId: "VWqJifMMgZE",
        whereToWatch: "Theaters",
        genre: "Adventure, Comedy, Family, Fantasy, Sci-Fi",
        releaseDate: "May 23, 2025",
        rating: "N/A"
    },
    "Mission Impossible The Final Reckoning":{
        title: "Mission: Impossible: The Final Reckoning",
        description: "IMF agent Ethan Hunt faces his most perilous mission yet, confronting a formidable adversary that challenges his skills and loyalty. As the stakes escalate, Hunt must navigate personal and professional dilemmas to avert global catastrophe.",
        directors: "Christopher McQuarrie",
        producers: "Paramount Pictures",
        videoId: "NOhDyUmT9z0",
        whereToWatch: "Theaters",
        genre: "Action, Adventure, Thriller",
        releaseDate: "May 23, 2025",
        rating: "N/A"
    },
    "Thunderbolts":{
        title: "Thunderbolts",
        description: "A group of antiheroes, assembled by Valentina Allegra de Fontaine, are forced into a dangerous mission that could bring them redemption if they unite as a team.",
        directors: "Jake Schreier",
        producers: "Marvel Studios",
        videoId: "v-94Snw-H4o",
        whereToWatch: "Theaters",
        genre: "Action, Adventure, Thriller",
        releaseDate: "May 2, 2025",
        rating: "N/A"
    },
    // Trending Series
    "A Minecraft Movie":{
        title: "A Working Man",
        description: "A poignant drama that delves into the life of an aging factory worker facing the closure of his long-time workplace, exploring themes of identity, purpose, and resilience.",
        directors: "Robert Jury",
        producers: "Clark Peterson, Maya Emelle",
        videoId: "zTbgNC42Ops",
        whereToWatch: "Theaters",
        genre: "Drama",
        releaseDate: "March 28, 2025",
        rating: "N/A"
    },
    "Freeaky Tales":{
        title: "Ash",
        description: "A gripping thriller that follows a woman who becomes entangled in a web of deceit and danger after witnessing a crime, challenging her perceptions of reality.",
        directors: "Flying Lotus",
        producers: "XYZ Films, Brainfeeder Films",
        videoId: "uvp2EYCXYwU",
        whereToWatch: "Theaters",
        genre: "Thriller, Mystery",
        releaseDate: "March 21, 2025",
        rating: "N/A"
    },
    "Havoc":{
        title: "Black Bag",
        description: "An intense spy thriller where a government operative uncovers a conspiracy that threatens national security, forcing him into a deadly game of cat and mouse.",
        directors: "Steven Soderbergh",
        producers: "Warner Bros. Pictures, Extension 765",
        videoId: "K1OVe5nOHQU",
        whereToWatch: "Theaters",
        genre: "Thriller, Spy",
        releaseDate: "March 14, 2025",
        rating: "N/A"
    },
    "Hello of a Summer":{
        title: "Bloat",
        description: "A horror film that explores the terrifying consequences of unchecked scientific experimentation, as a small town grapples with a mysterious and deadly phenomenon.",
        directors: "Ben McKenzie",
        producers: "Blumhouse Productions",
        videoId: "XLiwx7q6ya0",
        whereToWatch: "Theaters",
        genre: "Horror, Sci-Fi",
        releaseDate: "March 8, 2025",
        rating: "N/A"
    },
    "On Swift Horses":{
        title: "In the Lost Lands",
        description: "An epic fantasy adventure based on George R.R. Martin's short stories, following a sorceress on a quest to fulfill a mysterious request that challenges the boundaries of magic and desire.",
        directors: "Paul W.S. Anderson",
        producers: "Impact Pictures, Constantin Film",
        videoId: "CMyrp5Vk3mU",
        whereToWatch: "Theaters",
        genre: "Fantasy, Adventure",
        releaseDate: "March 22, 2025",
        rating: "N/A"
    },
    "Sinners":{
        title: "Mickey 17",
        description: "A sci-fi thriller about an expendable clone on a space colonization mission, who refuses to die after being replaced.",
        directors: "Bong Joon-ho",
        producers: "Plan B Entertainment, Offscreen, Kate Street Picture Company",
        videoId: "tA1s65o_kYM",
        whereToWatch: "Theaters",
        genre: "Sci-Fi, Thriller, Black Comedy",
        releaseDate: "March 7, 2025",
        rating: "N/A"
    },

    // Second Part Trending
    "That They May Face the Rising Sun":{
        title: "Novocaine",
        description: "A dark comedy thriller that follows a dentist whose life spirals out of control after he becomes entangled in a web of deceit and murder.",
        directors: "David Atkins",
        producers: "Artisan Entertainment",
        videoId: "-PyOIlJEdqA",
        whereToWatch: "Theaters",
        genre: "Comedy, Thriller",
        releaseDate: "March 14, 2025",
        rating: "N/A"
    },
    "The Accountant 2":{
        title: "Opus",
        description: "A compelling drama centered around a prodigious musician's journey through fame, personal struggles, and the quest for artistic perfection.",
        directors: "Ayo Edebiri",
        producers: "A24",
        videoId: "5owo-kbx8X0",
        whereToWatch: "Theaters",
        genre: "Drama, Music",
        releaseDate: "March 14, 2025",
        rating: "N/A"
    },
    "The Amateur":{
        title: "Snow White",
        description: "A live-action adaptation of the classic fairy tale, bringing a fresh perspective to the story of a princess, seven dwarfs, and an evil queen.",
        directors: "Marc Webb",
        producers: "Walt Disney Pictures",
        videoId: "TbiPcMCz0Ek",
        whereToWatch: "Theaters",
        genre: "Fantasy, Adventure",
        releaseDate: "March 21, 2025",
        rating: "N/A"
    },
    "The Legend of Ochi": {
        title: "The Alto Knights",
        description: "A crime drama that delves into the lives of a group of jazz musicians who become entangled in the criminal underworld of 1950s New York.",
        directors: "Damien Chazelle",
        producers: "Lionsgate",
        videoId: "1aayuOp0AnE",
        whereToWatch: "HBO Max",
        genre: "Crime, Drama, Music",
        releaseDate: "March 21, 2025",
        rating: "N/A"
    },
    "Until Dawn": {
        title: "The Day the Earth Blew Up A Looney Tunes Movie",
        description: "An animated adventure where Daffy Duck and Porky Pig team up to save the Earth from an impending alien invasion.",
        directors: "Pete Browngardt",
        producers: "Warner Bros. Animation",
        videoId: "WZsVB6QiYrg",
        whereToWatch: "Theaters",
        genre: "Animation, Comedy, Sci-Fi",
        releaseDate: "March 14, 2025",
        rating: "N/A"
    },
    "Warfare": {
        title: "The Electric Stat",
        description: "A sci-fi adventure following a young woman traversing a retro-futuristic America with a mysterious robot to find her missing brother.",
        directors: "Anthony Russo, Joe Russo",
        producers: "AGBO, Universal Pictures",
        videoId: "KpN98z8Kf5E",
        whereToWatch: "Amazon Prime Video",
        genre: "Sci-Fi, Adventure",
        releaseDate: "March 14, 2025",
        rating: "N/A"
    },

    // Missed Series
    "Screamboat":{
        title: "Delicious",
        description: "A heartfelt drama that follows a young chef navigating the cutthroat world of haute cuisine, where passion, rivalry, and ambition collide in the pursuit of culinary greatness.",
        directors: "TBA",
        producers: "Sony Pictures",
        videoId: "wvYmnIZFtSE",
        whereToWatch: "Theaters",
        genre: "Comedy, Drama",
        releaseDate: "March 7, 2025",
        rating: "N/A"
    },
    "Starbright":{
        title: "Larissa The Other Side of Anitta",
        description: "A revealing documentary offering an intimate look at the life of global pop sensation Anitta, exploring her rise to fame, struggles, and the woman behind the stage persona.",
        directors: "TBA",
        producers: "Netflix",
        videoId: "dsQXb1ybhY4",
        whereToWatch: "Netflix",
        genre: "Documentary, Music",
        releaseDate: "March 6, 2025",
        rating: "N/A"
    },
    "The Chosen The Last Supper Part 3":{
        title: "Locked",
        description: "A tense thriller about a man trapped in a high-stakes hostage situation, where every second is a battle for survival and the line between captor and victim blurs.",
        directors: "David Fincher",
        producers: "Warner Bros. Pictures",
        videoId: "VAaqF55xUHM",
        whereToWatch: "Theaters",
        genre: "Thriller, Mystery",
        releaseDate: "March 21, 2025",
        rating: "N/A"
    },
    "The Ritual":{
        title: "Plankton The Movie",
        description: "The infamous villain from SpongeBob SquarePants takes center stage in his own hilarious, action-packed adventure as he embarks on a quest to steal the Krabby Patty formula once and for all.",
        directors: "TBA",
        producers: "Paramount Animation, Nickelodeon Movies",
        videoId: "IHRScjhllsQ",
        whereToWatch: "Theaters",
        genre: "Comedy, Adventure",
        releaseDate: "March 28, 2025",
        rating: "N/A"
    },
    "The Shrouds":{
        title: "The Woman In The Yard",
        description: "A spine-chilling horror story about a woman haunted by an ominous presence lurking just beyond her yard, blurring the lines between paranoia and supernatural terror.",
        directors: "Jaume Collet-Serra",
        producers: "Blumhouse Productions, Universal Pictures",
        videoId: "1s-Ko4J3mWs",
        whereToWatch: "Theaters",
        genre: "Horror, Thriller",
        releaseDate: "March 28, 2025",
        rating: "N/A"
    } 
    // Add more series & movies here
};

function openModal(seriesKey) {
    const series = seriesInfo[seriesKey];
    modalTitle.textContent = series.title;
    modalDescription.textContent = series.description;
    modalDirectors.innerHTML = `<strong>Directors:</strong> ${series.directors}`;
    modalProducers.innerHTML = `<strong>Producers:</strong> ${series.producers}`;
    modalVideo.src = `https://www.youtube.com/embed/${series.videoId}?autoplay=1&enablejsapi=1&controls=1`;
    modal.style.display = "flex";
    modal.classList.add("animated");
    modalWhereToWatch.innerHTML = `<strong>View in:</strong> ${series.whereToWatch}`;
    modalGenre.innerHTML = `<strong>Gender:</strong> ${series.genre}`;
    modalReleaseDate.innerHTML = `<strong>Release Date:</strong> ${series.releaseDate}`;
    modalRating.innerHTML = `<strong>IMDb:</strong> ${series.rating}`;
    setTimeout(() => {
        modal.style.transition = "top 0.5s ease-in-out, opacity 0.5s ease-in-out";
        modal.style.top = "0%";
        modal.style.opacity = "1";
    }, 10);

    setTimeout(() => {
        if (modalVideo.contentWindow) {
            modalVideo.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        }
    }, 1000);
}

// Function to close the modal
closeBtn.addEventListener("click", () => {
    modal.style.transition = "top 0.5s ease-in-out, opacity 0.5s ease-in-out";
    modal.style.top = "-100%";
    modal.style.opacity = "0";
    setTimeout(() => {
        if (modalVideo.contentWindow) {
            modalVideo.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        }
    }, 500);
});

// Close modal when clicking outside content
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.transition = "top 0.5s ease-in-out, opacity 0.5s ease-in-out";
        modal.style.top = "-100%";
        modal.style.opacity = "0";
        setTimeout(() => {
            modalVideo.src = "";
        }, 500);
    }
});

// Assign events to the trailer buttons
document.querySelectorAll(".trailer-btn").forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const seriesKey = btn.closest(".series-card").querySelector("img").alt;
        openModal(seriesKey);
    });
});