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
        title: "A Minecraft Movie",
        description: "In a world built from blocks, a group of unlikely heroes must work together to overcome hostile forces and save their realm. As they face perilous challenges, they learn the true value of teamwork and creativity.",
        directors: "Jared Hess",
        producers: "Mojang Studios, Warner Bros. Pictures",
        videoId: "8B1EtVPBSMw",
        whereToWatch: "Theaters",
        genre: "Adventure, Animation, Family",
        releaseDate: "April 4, 2025",
        rating: "8/10"
    },
    "Freeaky Tales":{
        title: "Freeaky Tales",
        description: "A group of friends discovers an ancient book of eerie stories that come to life, putting their lives in jeopardy. As each tale unfolds, they must confront their deepest fears to survive the terror they’ve unleashed.",
        directors: "David F. Sandberg",
        producers: "New Line Cinema, Warner Bros. Pictures",
        videoId: "-2e8SYmofZM",
        whereToWatch: "Theaters",
        genre: "Horror, Thriller, Mystery",
        releaseDate: "October 13, 2025",
        rating: "7/10"
    },
    "Havoc":{
        title: "Havoc",
        description: "A detective must navigate a treacherous underworld of crime and corruption to rescue a kidnapped family member. As the stakes rise, he must confront his own moral boundaries and unravel a conspiracy that could tear the city apart.",
        directors: "Gareth Evans",
        producers: "Netflix, XYZ Films",
        videoId: "HAQfDRvrU0s",
        whereToWatch: "Netflix",
        genre: "Action, Crime, Thriller",
        releaseDate: "April 25, 2025",
        rating: "8/10"
    },
    "Hello of a Summer":{
        title: "Hell of a Summer",
        description: "A group of friends embarks on a carefree summer road trip, only to find their lives changed by unexpected events. As they face challenges, they discover deeper bonds, personal growth, and the true meaning of friendship.",
        directors: "Emily T. Thompson",
        producers: "Lionsgate, Universal Pictures",
        videoId: "LTmzw6zG4ww",
        whereToWatch: "Netflix",
        genre: "Comedy, Drama, Coming-of-Age",
        releaseDate: "April 4, 2025",
        rating: "7/10"
    },
    "On Swift Horses":{
        title: "On Swift Horses",
        description: "In 1950s California, newlyweds Muriel and Lee's life is disrupted by Lee's charismatic brother, Julius. As Julius embarks on a secretive romance and Muriel explores a hidden passion for horse racing, a complex love triangle unfolds, challenging their perceptions of love and identity.",
        directors: "Daniel Minahan",
        producers: "Peter Spears, Daniel Minahan, Tim Headington, Mollye Asher",
        videoId: "2MW146Iezoo",
        whereToWatch: "Theaters",
        genre: "Drama, Romance",
        releaseDate: "April 25, 2025",
        rating: "8/10"
    },
    "Sinners":{
        title: "Sinners",
        description: "In 1930s Jim Crow-era South, twin brothers Smoke and Stack return to their hometown seeking a fresh start. However, they encounter a malevolent force that challenges their survival and tests their bond.",
        directors: "Ryan Coogler",
        producers: "Ryan Coogler, Zinzi Coogler, Sev Ohanian",
        videoId: "7joulECTx_U",
        whereToWatch: "Theaters",
        genre: "Horror, Thriller, Supernatural",
        releaseDate: "April 18, 2025",
        rating: "8/10"
    },

    // Second Part Trending
    "That They May Face the Rising Sun":{
        title: "That They May Face the Rising Sun",
        description: "In 1980s rural Ireland, Joe and Kate Ruttledge return from London to immerse themselves in the rhythms of lakeside village life, forging new friendships and confronting personal challenges.",
        directors: "Pat Collins",
        producers: "Tina O'Reilly, Brendan J. Byrne",
        videoId: "-PyOIlJEdqA",
        whereToWatch: "Theaters",
        genre: "Drama",
        releaseDate: "April 11, 2025",
        rating: "8/10"
    },
    "The Accountant 2":{
        title: "The Accountant 2",
        description: "Christian Wolff, an autistic accountant with ties to criminal organizations, is drawn back into action when Treasury Agent Marybeth Medina seeks his help to solve a complex murder. Alongside his estranged brother Brax, they uncover a deadly conspiracy that puts them all at risk.",
        directors: "Gavin O'Connor",
        producers: "Ben Affleck, Lynette Howell Taylor, Mark Williams",
        videoId: "5owo-kbx8X0",
        whereToWatch: "Theaters",
        genre: "Action, Thriller, Crime",
        releaseDate: "April 25, 2025",
        rating: "8/10"
    },
    "The Amateur":{
        title: "The Amateur",
        description: "Charles Heller, a brilliant CIA cryptographer, becomes a vigilante after his wife is killed in a London terrorist attack. When his agency's inaction leads him to blackmail them for field training, he embarks on a global mission to avenge her death.",
        directors: "James Hawes",
        producers: "Hutch Parker, Dan Wilson, Rami Malek, Joel B. Michaels",
        videoId: "TbiPcMCz0Ek",
        whereToWatch: "Theaters",
        genre: "Action, Thriller, Spy/Espionage",
        releaseDate: "April 11, 2025",
        rating: "7/10"
    },
    "The Legend of Ochi": {
        title: "The Legend of Ochi",
        description: "In a remote village on the island of Carpathia, a shy farm girl named Yuri is raised to fear an elusive animal species known as ochi. But when Yuri discovers a wounded baby ochi has been left behind, she escapes on a quest to bring him home.",
        directors: "Isaiah Saxon",
        producers: "Richard Peete, Traci Carlson, Isaiah Saxon, Jonathan Wang",
        videoId: "1aayuOp0AnE",
        whereToWatch: "Theaters",
        genre: "Fantasy, Adventure",
        releaseDate: "April 25, 2025",
        rating: "7/10"
    },
    "Until Dawn": {
        title: "Until Dawn",
        description: "A group of friends reunites for a weekend at a remote ski lodge, one year after the mysterious disappearance of their friend Melanie. Unbeknownst to them, they are not alone, and a series of terrifying events ensues.",
        directors: "David F. Sandberg",
        producers: "Roy Lee, Lotta Losten, Asad Qizilbash, Carter Swan",
        videoId: "WZsVB6QiYrg",
        whereToWatch: "Theaters",
        genre: "Horror, Thriller, Drama",
        releaseDate: "April 25, 2025",
        rating: "6/10"
    },
    "Warfare": {
        title: "Warfare",
        description: "Based on the real-life experiences of former Navy SEAL Ray Mendoza during the Iraq War, the film follows a Navy SEAL team on a mission that goes wrong in insurgent territory, offering a visceral and authentic view of modern warfare and the brotherhood among soldiers.",
        directors: "Ray Mendoza, Alex Garland",
        producers: "Andrew Macdonald, Allon Reich, Peter Rice",
        videoId: "KpN98z8Kf5E",
        whereToWatch: "Theaters",
        genre: "War, Drama, Action",
        releaseDate: "April 11, 2025",
        rating: "8/10"
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