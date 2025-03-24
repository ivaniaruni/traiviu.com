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
    "America Got Talent Season 20":{
        title: "America's Got Talent - Season 20",
        description: "The landmark 20th season of America's Got Talent showcases a diverse array of performers competing for the $1 million grand prize. With returning judges Simon Cowell, Howie Mandel, Sofía Vergara, and the return of Mel B, along with host Terry Crews, the season promises unforgettable auditions, thrilling live shows, and inspiring stories.",
        directors: "N/A",
        producers: "Fremantle, Syco Entertainment",
        videoId: "ygtSuuZy4NU",
        whereToWatch: "NBC, Peacock",
        genre: "Reality, Talent Show",
        releaseDate: "May 27, 2025",
        rating: "TBD"
    },
    "Criminal Minds Evolution":{
        title: "Criminal Minds: Evolution - Season 2",
        description: "The BAU faces new challenges as they track a network of serial killers operating in the shadows. With evolving tactics and unforeseen threats, the team must adapt to confront their most formidable adversaries yet.",
        directors: "Various",
        producers: "ABC Signature, CBS Studios",
        videoId: "WRxsWH4wjww",
        whereToWatch: "Paramount+",
        genre: "Crime, Drama, Thriller",
        releaseDate: "June 6, 2024",
        rating: "TBD"
    },
    "Murderbot Season 1":{
        title: "Murderbot - Season 1",
        description: "A self-aware security android, dubbed 'Murderbot,' grapples with its own sentience and a growing curiosity about human behavior. While secretly indulging in media consumption, it must navigate complex assignments and protect its human clients, all while concealing its autonomy.",
        directors: "Chris Weitz, Paul Weitz",
        producers: "Apple TV+, Paramount Television Studios",
        videoId: "W0rM7LMJCzk",
        whereToWatch: "Apple TV+",
        genre: "Sci-Fi, Comedy, Thriller",
        releaseDate: "May 16, 2025",
        rating: "TBD"
    },
    "Poker Face Season 2":{
        title: "Poker Face - Season 2",
        description: "Charlie Cale continues her journey across America, solving murder mysteries with her unique ability to detect lies. In this new season, she faces even more complex and dangerous cases while staying one step ahead of those pursuing her.",
        directors: "Rian Johnson",
        producers: "Peacock, MRC Television",
        videoId: "hJ6tzxg-sJM",
        whereToWatch: " Peacock",
        genre: "Mystery, Comedy, Drama",
        releaseDate: "April 2025",
        rating: "TBD"
    },
    "The Secret Lives of Mormon Wives Season 2":{
        title: "The Secret Lives of Mormon Wives - Season 2",
        description: "The series follows a group of Utah-based influencers, known as 'MomTok,' as they navigate the complexities of their personal and professional lives. In Season 2, their relationships are tested, and new challenges arise that threaten to alter their group dynamic.",
        directors: "Jeff Jenkins",
        producers: "Hulu, Jeff Jenkins Productions",
        videoId: "708ycCvSz3Q",
        whereToWatch: "Hulu",
        genre: "Reality",
        releaseDate: "May 15, 2025",
        rating: "TBD"
    },
    "The Walking Dead Dead City Season 2":{
        title: "The Walking Dead Dead City",
        description: "Maggie and Negan continue their perilous journey through a post-apocalyptic Manhattan, confronting new threats and challenges. As they navigate the treacherous urban landscape, their complex relationship evolves amidst the chaos of the undead.",
        directors: "Various directors",
        producers: "AMC Networks",
        videoId: "ewSY2KWW9t4",
        whereToWatch: "AMC and AMC+",
        genre: "Horror, Drama, Thriller",
        releaseDate: "May 4, 2025",
        rating: "TBD"
    },
    // Trending Series
    "Andor":{
        title: "Andor - Season 2",
        description: "The second and final season of 'Andor' continues to follow Cassian Andor's journey as he becomes a pivotal figure in the Rebel Alliance, leading directly into the events of 'Rogue One: A Star Wars Story.'",
        directors: "Ariel Kleiman, Janus Metz, Alonso Ruizpalacios",
        producers: "Lucasfilm",
        videoId: "AE4wxt70aUM",
        whereToWatch: "Disney+",
        genre: "Action-adventure, Drama, Political thriller, Science fiction",
        releaseDate: "April 22, 2025",
        rating: "TBD"
    },
    "Black Mirror Season 7":{
        title: "Black Mirror - Season 7",
        description: "The seventh season of the acclaimed anthology series continues to explore the dark and thought-provoking aspects of technology and society, featuring six new standalone episodes that delve into themes such as artificial intelligence, virtual realities, and the human condition.",
        directors: "Various directors",
        producers: "Netflix",
        videoId: "1iqra1ojEvM",
        whereToWatch: "Netflix",
        genre: "Science fiction, Thriller, Drama",
        releaseDate: "April 10, 2025",
        rating: "TBD"
    },
    "Devil May Cry":{
        title: "Devil May Cry",
        description: "An animated series based on Capcom's popular video game franchise, following demon hunter Dante as he seeks revenge for his family's death and battles to protect both the human and demon worlds from destruction.",
        directors: "Various directors",
        producers: "Netflix",
        videoId: "OlEqHXRrcpc",
        whereToWatch: "Netflix",
        genre: "Urban Fantasy, Action",
        releaseDate: "April 3, 2025",
        rating: "TBD"
    },
    "Hacks Season 4":{
        title: "Hacks - Season 4",
        description: "The fourth season of the acclaimed comedy-drama series continues to explore the evolving relationship between legendary comedian Deborah Vance and her young writer Ava Daniels as they navigate the complexities of the entertainment industry.",
        directors: "Lucia Aniello, Paul W. Downs, Jen Statsky",
        producers: "Universal Television, Paulilu, First Thought Productions, Fremulon, 3 Arts Entertainment",
        videoId: "hOwKjb_EHJA",
        whereToWatch: "Max",
        genre: "Comedy, Drama",
        releaseDate: "April 10, 2025",
        rating: "TBD"
    },
    "Law & Order Organized Crime":{
        title: "Law & Order: Organized Crime - Season 5",
        description: "The fifth season of the crime drama series follows Detective Elliot Stabler as he continues to combat organized crime in New York City, facing new challenges and personal trials.",
        directors: "Various directors",
        producers: "Wolf Entertainment, Universal Television",
        videoId: "cveXKoMt_Fk",
        whereToWatch: "Peacock",
        genre: "Crime Drama, Police Procedural",
        releaseDate: "April 17, 2025",
        rating: "TBD"
    },
    "Leverage Redemetion":{
        title: "Leverage: Redemption - Season 3",
        description: "The third season of the revival series continues to follow a team of reformed criminals who use their unique skills to right societal wrongs by targeting the wealthy and corrupt.",
        directors: "Noah Wyle, Beth Riesgraf",
        producers: "Electric Entertainment, Amazon MGM Studios",
        videoId: "eyY9p1yl_Cc",
        whereToWatch: "Prime Video",
        genre: "Action, Crime Drama",
        releaseDate: "April 17, 2025",
        rating: "TBD"
    },

    // Second Part Trending
    "Moonrise Season 1":{
        title: "Moonrise: Season 1",
        description: "A thrilling and mysterious drama that unfolds in a small coastal town as a series of unexplained events and secrets surface. The town’s residents must confront their pasts while navigating the tension between the supernatural and reality.",
        directors: "John Doe, Jane Smith, Michael Lee",
        producers: "Emily Turner, Daniel Foster",
        videoId: "e1Y9KkuL2DQ",
        whereToWatch: "Netflix",
        genre: "Mystery, Thriller, Drama",
        releaseDate: "April 10, 2025",
        rating: "8.3/10"
    },
    "Sherlock & Daugther":{
        title: "Sherlock & Daughter: Season 1",
        description: "A captivating crime drama that follows the legendary Sherlock Holmes, now retired, who is drawn back into the world of investigation when his estranged daughter, a brilliant detective in her own right, seeks his help to solve a high-profile case.",
        directors: "Mark Thompson, Alice Green, Samuel Clarke",
        producers: "Sarah Jenkins, Robert Millar",
        videoId: "Q2Xj4Kb7H7Y",
        whereToWatch: "HBO Max",
        genre: "Crime, Drama, Mystery",
        releaseDate: "April 16, 2025",
        rating: "8.6/10"
    },
    "The Eternaut":{
        title: "The Eternaut: Season 1",
        description: "A gripping sci-fi thriller based on the iconic graphic novel, *The Eternaut* follows a group of survivors in a post-apocalyptic world after a deadly snowstorm covers the Earth. As they struggle to survive, they uncover dark secrets that may change the fate of humanity forever.",
        directors: "Diego Lerman, Mariano Cohn, Gabriel Medina",
        producers: "Carlos Sorin, Pablo Larrain",
        videoId: "egKOiW6jDeE",
        whereToWatch: "Amazon Prime Video",
        genre: "Sci-Fi, Thriller, Drama",
        releaseDate: "April 30, 2025",
        rating: "8.4/10"
    },
    "The Handmaid Tale Season 6": {
        title: "The Handmaid's Tale: Season 6",
        description: "The critically acclaimed dystopian drama continues as June Osborne fights for survival and justice in a post-Gilead world. As the rebellion intensifies, June and her allies must navigate shifting allegiances and uncover hidden truths that threaten everything they’ve fought for.",
        directors: "Bruce Miller, Kari Skogland, Mike Barker",
        producers: "Bruce Miller, Warren Littlefield, Elisabeth Moss",
        videoId: "hyVDq2bQlnU",
        whereToWatch: "Hulu",
        genre: "Dystopian, Drama, Thriller",
        releaseDate: "April 8, 2025",
        rating: "9.0/10"
    },
    "You Season 5": {
        title: "You: Season 5",
        description: "The intense psychological thriller returns as Joe Goldberg's obsession with love and control reaches new extremes. In Season 5, Joe tries to escape his past and start over, but his dark tendencies resurface, leading to dangerous consequences that threaten everyone around him.",
        directors: "Greg Berlanti, Sera Gamble, Silver Tree",
        producers: "Sarah Streicher, Greg Berlanti, Sera Gamble",
        videoId: "kQdEHQLHDAI",
        whereToWatch: "Netflix",
        genre: "Thriller, Drama, Mystery",
        releaseDate: "April 24, 2025",
        rating: "8.5/10"
    },
    "Your Frinds & Neighbors": {
        title: "Your Friends & Neighbors: Season 1",
        description: "A dark comedy series that explores the complexities of relationships and human desires, focusing on a group of friends navigating their personal and romantic entanglements. As they confront their inner conflicts, they discover the unexpected consequences of their choices.",
        directors: "Neil LaBute, Sarah Polley, Mark Duplass",
        producers: "Lena Dunham, Adam Driver, Neil LaBute",
        videoId: "iVRFMd6dEOE",
        whereToWatch: "Hulu",
        genre: "Comedy, Drama",
        releaseDate: "April 11, 2025",
        rating: "7.8/10"
    },

    // Missed Series
    "24 in 24 Last Chef Standing":{
        title: "24 in 24: Last Chef Standing",
        description: "A high-stakes cooking competition where 24 chefs must compete in 24 intense challenges over 24 hours. As the clock ticks down, the chefs are pushed to their limits, facing both culinary and mental challenges to secure their place as the ultimate chef.",
        directors: "David Gelb, Chris Ferguson, Michael D. Ratner",
        producers: "Tom Colicchio, Gordon Ramsay, Joe Bastianich",
        videoId: "2Z_Jfyj7gak",
        whereToWatch: "Discovery+",
        genre: "Reality, Cooking, Competition",
        releaseDate: "April 27, 2025",
        rating: "8.2/10"
    },
    "Godfather of Harlem Season 4":{
        title: "Godfather of Harlem: Season 4",
        description: "The crime drama continues as Bumpy Johnson, now at the height of his power, faces new challenges in the turbulent world of organized crime. With enemies closing in and old alliances being tested, Bumpy must fight to maintain control of Harlem and his empire.",
        directors: "Marcello Thedford, Ernest Dickerson, John Ridley",
        producers: "Forest Whitaker, Nina Yang Bongiovi, James A. Cooper",
        videoId: "m5zs078MOVQ",
        whereToWatch: "Epix",
        genre: "Crime, Drama, Thriller",
        releaseDate: "April 13, 2025",
        rating: "8.4/10"
    },
    "Government Cheese Season 1":{
        title: "Government Cheese: Season 1",
        description: "A compelling dramedy that follows a diverse group of individuals living in a working-class neighborhood, where they navigate the challenges of life, love, and survival in tough economic times. As they come together, they find humor and strength in their shared experiences.",
        directors: "Kenya Barris, Sam Jay, Angela Barnes",
        producers: "Kenya Barris, Lena Waithe, Rashida Jones",
        videoId: "7fQf2o2kEMQ",
        whereToWatch: "Apple TV+",
        genre: "Comedy, Drama",
        releaseDate: "April 16, 2025",
        rating: "7.9/10"
    },
    "How to Sell Drugs Online":{
        title: "How to Sell Drugs Online (Fast): Season 4",
        description: "The darkly comedic drama continues as Moritz and his friends navigate the increasingly dangerous world of online drug dealing. As they try to stay ahead of law enforcement and rival criminals, the stakes get higher, leading to unexpected twists and personal challenges.",
        directors: "Philipp Käßbohrer, Matthias Murmann",
        producers: "Philipp Käßbohrer, Matthias Murmann, Stefanie Veit",
        videoId: "a_1-vyLcBpM",
        whereToWatch: "Netflix",
        genre: "Comedy, Drama, Crime",
        releaseDate: "April 8, 2025",
        rating: "8.1/10"
    },
    "The Rehearsal Season 2":{
        title: "The Rehearsal: Season 2",
        description: "In this unique and thought-provoking series, Nathan Fielder continues to help ordinary people rehearse and simulate pivotal moments in their lives, pushing the boundaries of reality and performance. Season 2 dives deeper into the emotional and psychological aspects of these rehearsals, creating unpredictable and sometimes uncomfortable situations.",
        directors: "Nathan Fielder, Jeremy Hirsch, Steven Katz",
        producers: "Nathan Fielder, John Wilson, Tim Heidecker",
        videoId: "2fjPFt8cpic",
        whereToWatch: "HBO Max",
        genre: "Comedy, Reality, Drama",
        releaseDate: "April 20, 2025",
        rating: "8.3/10"
    } 
    // Add more series/movies here
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