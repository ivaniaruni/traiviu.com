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
    "Capcom Fighting Collection 2":{
        title: "Capcom Fighting Collection 2",
        description: "A collection of eight classic Capcom fighting games, featuring modern enhancements and online play with rollback netcode.",
        directors: "Capcom",
        producers: "Capcom",
        videoId: "Hl0D5FK3a50",
        whereToWatch: "Nintendo Switch, PlayStation 4, PC (Steam)",
        genre: "Fighting, Action",
        releaseDate: "May 16, 2025",
        rating: "8.2"
    },
    "Doom The Dark Ages":{
        title: "DOOM: The Dark Ages",
        description: "A prequel to the acclaimed DOOM (2016) and DOOM Eternal, this game narrates the epic origin story of the DOOM Slayer's fury, set in a dark medieval war against Hell.",
        directors: "id Software",
        producers: "Bethesda Softworks",
        videoId: "8KyA7bf4IB0",
        whereToWatch: "Xbox Series X|S, PlayStation 5, PC (Steam)",
        genre: "Shooter, Action",
        releaseDate: "May 15, 2025",
        rating: "TBD"
    },
    "Dune Awakening":{
        title: "Dune: Awakening",
        description: "A massive multiplayer online survival game set on the desert planet Arrakis, where players must face natural dangers and conflicts over control of spice.",
        directors: "Funcom",
        producers: "Funcom",
        videoId: "xWgU4R4W_1Y",
        whereToWatch: "PC (Steam), PlayStation 5, Xbox Series X|S",
        genre: "Survival, MMO",
        releaseDate: "May 20, 2025",
        rating: "8.9"
    },
    "Fantasy Life i the Girl Who Steals Time":{
        title: "Fantasy Life i: The Girl Who Steals Time",
        description: "A life simulation RPG where players explore an island, build a village, and uncover a time-travel mystery.",
        directors: "Level-5",
        producers: "Level-5",
        videoId: "iewOAF-MO8c",
        whereToWatch: "Nintendo Switch",
        genre: "Life Simulation, RPG",
        releaseDate: "May 21, 2025",
        rating: "TBD"
    },
    "Metal Eden":{
        title: "Metal Eden",
        description: "An adrenaline-rush sci-fi FPS where players control ASKA, an advanced battle android, on a mission to rescue citizens' cores from MOEBIUS, an orbital city turned deadly trap.",
        directors: "Reikon Games",
        producers: "Deep Silver",
        videoId: "s_nAwi4kQNQ",
        whereToWatch: "PC (Steam), PlayStation 5, Xbox Series X|S",
        genre: "Action, FPS, Sci-Fi",
        releaseDate: "May 6, 2025",
        rating: "8.5"
    },
    "The Midnight Walk":{
        title: "The Midnight Walk",
        description: "A dark fantasy adventure where players guide Potboy, a living lantern, through a world crafted from clay, facing fire-breathing monsters and uncovering supernatural tales.",
        directors: "MoonHood",
        producers: "Fast Travel Games AB",
        videoId: "d99E01tgOGw",
        whereToWatch: "PS5, PS VR2, PC (Steam)",
        genre: "Adventure, Horror, VR",
        releaseDate: "May 8, 2025",
        rating: "8.5"
    },
    // Trending Series
    "Clair Obscur Expedition 33":{
        title: "9-1-1 - Season 8 (Part 2)",
        description: "A high-intensity drama following first responders as they tackle life-threatening emergencies while dealing with their personal struggles.",
        directors: "Bradley Buecker, Gwyneth Horder-Payton, Jennifer Lynch, among others.",
        producers: "20th Television, Ryan Murphy Productions",
        videoId: "lC62kwVWI0Q",
        whereToWatch: "ABC, Hulu",
        genre: "Drama, Action, Procedural",
        releaseDate: "March 6, 2025",
        rating: "7.9/10"
    },
    "Days Gone Remastered":{
        title: "Alert Missing Persons Unit - Season 3",
        description: "A gripping procedural drama that follows a specialized team solving the most complex missing persons cases while uncovering personal mysteries.",
        directors: "Adam Kane, Bola Ogun, Milan Cheylov, among others.",
        producers: "Sony Pictures Television, FOX Entertainment",
        videoId: "qFaA0u4s79E",
        whereToWatch: "FOX, Hulu",
        genre: "Crime, Drama, Mystery",
        releaseDate: "March 25, 2025",
        rating: "7.1/10"
    },
    "Elden Ring Nightreign":{
        title: "Bosch: Legacy - Season 3",
        description: "The critically acclaimed series continues as Harry Bosch takes on new cases, navigating corruption, justice, and his own personal demons.",
        directors: "Patrick Cady, Alex Zakrzewski, Sharat Raju, among others.",
        producers: "Amazon Studios, Hieronymus Pictures",
        videoId: "73SG0jhflzc",
        whereToWatch: "Amazon Prime Video",
        genre: "Crime, Drama, Thriller",
        releaseDate: "March 27, 2025",
        rating: "8.9/10"
    },
    "Fatal Fury City of the Wolves":{
        title: "Daredevil Born Again",
        description: "A thrilling continuation of the iconic Daredevil saga, following Matt Murdock as he faces new enemies and moral dilemmas in Hell’s Kitchen.",
        directors: "Michael Cuesta, Jeffrey Nachmanoff, Clark Johnson",
        producers: "Marvel Studios, Disney+",
        videoId: "7xALolZzhSM",
        whereToWatch: "Disney+",
        genre: "Action, Crime, Superhero",
        releaseDate: "TBA 2025",
        rating: "8.6/10"
    },
    "Five Nights at Freddys Secret of the Mimic":{
        title: "Formula 1: Drive to Survive - Season 7",
        description: "An adrenaline-fueled docuseries that goes behind the scenes of the Formula 1 World Championship, capturing the drama, rivalries, and triumphs of the sport.",
        directors: "Martin Webb, Nick Hardie, James Routh",
        producers: "Box to Box Films, Netflix",
        videoId: "wtJPe1ksS6E",
        whereToWatch: "Netflix",
        genre: "Documentary, Sports",
        releaseDate: "March 8, 2025",
        rating: "8.5/10"
    },
    "Lost Records Bloom and Rage Tape 2":{
        title: "Gangs of London - Season 3",
        description: "A gritty crime drama that explores the brutal power struggles within London’s criminal underworld.",
        directors: "Corin Hardy, Marcela Said, Nima Nourizadeh, among others.",
        producers: "Sky Studios, Pulse Films, AMC",
        videoId: "5l2iYDb59Jc",
        whereToWatch: "Sky Atlantic, AMC+",
        genre: "Crime, Action, Thriller",
        releaseDate: "TBA 2025",
        rating: "8.1/10"
    },

    // Second Part Trending
    "Lost Soul Aside":{
        title: "1923: Season 2",
        description: "A captivating drama series that continues the saga of the Dutton family as they face challenges in the early 20th century, including Westward expansion, Prohibition, and the Great Depression.",
        directors: "Ben Richardson, Guy Ferland, Stephen Kay, Christina Voros",
        producers: "Taylor Sheridan, David C. Glasser",
        videoId: "-xFgRf_0s_M",
        whereToWatch: "SkyShowtime",
        genre: "Western, Drama",
        releaseDate: "March 10, 2025",
        rating: "8.7/10"
    },
    "Lushfoil Photography Sim":{
        title: "Power Book III: Raising Kanan - Season 4",
        description: "A gripping prequel set in the 1990s, chronicling the early life of Kanan Stark as he delves into the drug trade, exploring themes of family, loyalty, and ambition.",
        directors: "Rob Hardy, Eif Rivera, Hernán Otaño",
        producers: "Ballpoint Productions, End of Episode, Inc., G-Unit Film & Television Inc., Atmosphere Television, CBS Studios, Lionsgate Television",
        videoId: "RDNGEzriBI8",
        whereToWatch: "Starz",
        genre: "Crime Drama, Thriller",
        releaseDate: "March 7, 2025",
        rating: "7.7/10"
    },
    "Rune Factory Guardians of Azuma":{
        title: "The Residence",
        description: "A captivating mystery series set within the walls of the White House, where a detective investigates a scandalous murder, uncovering secrets that could shake the nation.",
        directors: "Liza Johnson, Dee Rees",
        producers: "Shondaland, Netflix",
        videoId: "NpDkoSVn5Ag",
        whereToWatch: "Netflix",
        genre: "Mystery, Drama",
        releaseDate: "March 20, 2025",
        rating: "TBA"
    },
    "South of Midnight": {
        title: "The Righteous Gemstones - Season 4",
        description: "A dark comedy following a world-famous televangelist family with a long tradition of deviance, greed, and charitable work, as they navigate internal conflicts and external threats.",
        directors: "Danny McBride, Jody Hill, David Gordon Green",
        producers: "Rough House Pictures, HBO",
        videoId: "PnRa29-wjaM",
        whereToWatch: "HBO Max",
        genre: "Comedy, Drama",
        releaseDate: "March 9, 2025",
        rating: "8.1/10"
    },
    "The Last of Us Part II Remastered": {
        title: "The Studio",
        description: "An inspiring drama set in the high-pressure world of a creative agency, focusing on the stories of its talented yet conflicted employees.",
        directors: "Various Talents",
        producers: "Apple TV+, Creative Vision Studios",
        videoId: "W7vP89A5VWo",
        whereToWatch: "Apple TV+",
        genre: "Drama, Workplace",
        releaseDate: "March 26, 2025",
        rating: "TBA"
    },
    "Tony Hawks Pro Skater 3+4": {
        title: "The Wheel of Time - Season 3",
        description: "An epic fantasy series that follows Moiraine, a member of a powerful all-female organization, as she embarks on a dangerous journey with five young villagers, believing one of them is the reincarnation of the Dragon, destined to save or destroy the world.",
        directors: "Uta Briesewitz, Salli Richardson-Whitfield, Wayne Yip",
        producers: "Amazon Studios, Sony Pictures Television, Radar Pictures, Little Island Productions, Iwot Pictures",
        videoId: "erxeLAg85fg",
        whereToWatch: "Amazon Prime Video",
        genre: "Fantasy, Adventure, Drama",
        releaseDate: "March 13, 2025",
        rating: "7.1/10"
    },

    // Missed Series
    "Directive 8020 A Dark Pictures Game":{
        title: "Survival of the Thickest Season 2",
        description: "A heartwarming comedy-drama following Mavis Beaumont, a plus-size stylist navigating life's challenges and embracing self-love after a transformative breakup.",
        directors: "Kim Nguyen, Tasha Smith, Thembi Banks, Amy Aniobi",
        producers: "Buteaupia, SanWitz Productions, A24",
        videoId: "5gI_JvtgSzY",
        whereToWatch: "Netflix",
        genre: "Comedy, Drama",
        releaseDate: "March 27, 2025",
        rating: "N/A"
    },
    "Hell Is Us":{
        title: "Dark Winds: Season 3",
        description: "A gripping psychological thriller set in the 1970s Southwest, following two Navajo police officers as they confront their spiritual beliefs while investigating mysterious crimes.",
        directors: "Various Talents",
        producers: "Graham Roland, George R.R. Martin, Robert Redford",
        videoId: "D4gNOfTyeOA",
        whereToWatch: "AMC, AMC+",
        genre: "Crime, Thriller, Drama",
        releaseDate: "March 9, 2025",
        rating: "7.6/10"
    },
    "Metal Gear Solid Δ Snake Eater":{
        title: "Happy Face",
        description: "n intense true crime drama inspired by the real-life story of Melissa G. Moore, who, at 15, discovered her father was the notorious, Happy Face Killer. The series delves into her journey of grappling with this revelation and its aftermath.",
        directors: "Michael Showalter",
        producers: "CBS Studios, iHeartPodcasts, King Size Productions, Semi-Formal Productions",
        videoId: "NMT5cTdNAiY",
        whereToWatch: "Paramount+",
        genre: "True Crime, Drama",
        releaseDate: "March 20, 2025",
        rating: "N/A"
    },
    "Shinobi Art of Vengeance":{
        title: "Ludwig",
        description: "A clever detective comedy that follows John 'Ludwig' Taylor, a reclusive puzzle setter who assumes his missing twin brother's identity, leading to unexpected adventures in crime-solving.",
        directors: "Robert McKillop, Jill Robertson",
        producers: "Big Talk Productions, That Mitchell and Webb Company",
        videoId: "UMzOCPqbMbg",
        whereToWatch: "BritBox, BBC",
        genre: "Comedy, Drama, Mystery",
        releaseDate: "March 20, 2025",
        rating: "N/A"
    },
    "Tales of the Shire A Lord of the Rings Game":{
        title: "The Leopard",
        description: "A captivating historical drama based on the classic novel Il Gattopardo, exploring power, tradition, and change in 19th-century Italy.",
        directors: "Tom Shankland, Giuseppe Capotondi, Laura Luchetti",
        producers: "Indiana Production, Moonage Pictures",
        videoId: "k0DS9ERfLjk",
        whereToWatch: "Netflix",
        genre: "Drama, Historical",
        releaseDate: "March 5, 2025",
        rating: "N/A"
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