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
        videoId: "ZrYv9VkRLEo",
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
        videoId: "3wRCOqyDI6E",
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
        videoId: "DCWcK4c-F8Q",
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
        videoId: "_jTFLg3arYU",
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
        videoId: "rZfwvLe961k",
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
        videoId: "JER0Fkyy3tw",
        whereToWatch: "Theaters",
        genre: "War, Drama, Action",
        releaseDate: "April 11, 2025",
        rating: "8/10"
    },

    // Missed Series
    "Screamboat":{
        title: "Screamboat",
        description: "A late-night ferry ride in New York City turns into a desperate fight for survival when a mischievous mouse named Steamboat Willie becomes a monstrous reality, terrorizing unsuspecting passengers.",
        directors: "Steven LaMorte",
        producers: "Steven LaMorte, Amy Schumacher, Martine Melloul, Steven Della Salle, Michael Leavy",
        videoId: "cgeRY0nx89s",
        whereToWatch: "Theaters",
        genre: "Horror, Comedy, Thriller",
        releaseDate: "April 2, 2025",
        rating: "7/10"
    },
    "Starbright":{
        title: "Starbright",
        description: "A young orphan escapes the harsh realities of her life by fantasizing about and ultimately entering a fairy tale world, embarking on an adventure that blends imagination with reality.",
        directors: "Francesco Lucente",
        producers: "Francesco Lucente, Jorg Neumann, Anthony Romano, Michel Shane",
        videoId: "No trailer available.",
        whereToWatch: "Netflix",
        genre: "Adventure, Fantasy",
        releaseDate: "April 18, 2025",
        rating: "Not yet rated"
    },
    "The Chosen The Last Supper Part 3":{
        title: "The Chosen The Last Supper Part 3",
        description: "As Jesus' followers gather for the Passover meal, his adversaries prepare for a manhunt. On the same night Jesus establishes his new covenant, Judas finalizes his betrayal.",
        directors: "Dallas Jenkins",
        producers: "Dallas Jenkins",
        videoId: "5CVj41dtkIA",
        whereToWatch: "Theaters",
        genre: "Drama, Faith & Spirituality, History",
        releaseDate: "April 11, 2025",
        rating: "Not Rated"
    },
    "The Ritual":{
        title: "The Ritual",
        description: "Based on true events, two priests—one questioning his faith and the other confronting a troubled past—must collaborate to perform a series of exorcisms to save a possessed young woman.",
        directors: "David Midell",
        producers: "Andrew Stevens, Ross Kagan Marks, Mitchell Welch, Enrico Natale",
        videoId: "No trailer available.",
        whereToWatch: "Theaters",
        genre: "Horror",
        releaseDate: "April 18, 2025",
        rating: "Not Rated"
    },
    "The Shrouds":{
        title: "The Shrouds",
        description: "Karsh, a prominent businessman grieving the loss of his wife, invents GraveTech, a technology that allows the living to monitor the decomposition of their deceased loved ones within their shrouds. When multiple graves, including his wife's, are desecrated, Karsh embarks on a mission to find those responsible.",
        directors: "David Cronenberg",
        producers: "Saïd Ben Saïd, Martin Katz, Anthony Vaccarello",
        videoId: "vwh1Fob4VKs",
        whereToWatch: "Theaters",
        genre: "Horror, Science Fiction, Drama",
        releaseDate: "April 25, 2025",
        rating: "Not Rated"
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