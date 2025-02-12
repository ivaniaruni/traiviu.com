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
    "Andor":{
        title: "Andor: A Star Wars Story",
        description: "The final season follows Cassian Andor’s journey from thief to rebel spy, leading directly into Rogue One: A Star Wars Story.",
        directors: "Ariel Kleiman, Janus Metz, Alonso Ruizpalacios",
        producers: "Lucasfilm",
        videoId: "4YEYWrVU0jo",
        whereToWatch: "Disney+",
        genre: "Action, Sci-Fi, Adventure",
        releaseDate: "April 2025",
        rating: "TBD"
    },
    "Devil May Cry":{
        title: "Devil May Cry",
        description: "An animated adaptation of the popular Capcom video game franchise, following the adventures of Dante, a demon hunter who battles supernatural forces to protect humanity.",
        directors: "Adi Shankar",
        producers: "Netflix, Studio Mir",
        videoId: "nbrfJAAS7Qc",
        whereToWatch: "Netflix",
        genre: "Action, Fantasy, Anime",
        releaseDate: " April 3, 2025",
        rating: "TBD"
    },
    "The Eternaut":{
        title: "The Eternaut",
        description: "Based on the classic Argentinian comic, the series follows a group of survivors in Buenos Aires facing an alien invasion and deadly weather phenomena.",
        directors: "Bruno Stagnaro",
        producers: "Netflix",
        videoId: "egKOiW6jDeE",
        whereToWatch: "Netflix",
        genre: "ASci-Fi, Thriller",
        releaseDate: "April 2025",
        rating: "TBD"
    },
    "The Last Of Us 2":{
        title: "The Last of Us - Season 2",
        description: "The second season of The Last of Us continues the story of Ellie and Joel in a post-apocalyptic world, introducing new characters and exploring themes of revenge and redemption.",
        directors: "Craig Mazin, Neil Druckmann",
        producers: "HBO, PlayStation Productions",
        videoId: "BOsAJ7oe2QE",
        whereToWatch: " HBO Max",
        genre: "Drama, Thriller, Sci-Fi",
        releaseDate: "April 2025",
        rating: "TBD"
    },
    "You":{
        title: "You - Season 5",
        description: "The fifth season follows Joe Goldberg’s obsessions and dangerous relationships as he navigates new cities and faces the consequences of his past.",
        directors: "Various",
        producers: "Netflix",
        videoId: "xcicf6XmtnM",
        whereToWatch: "Netflix",
        genre: "Drama, Thriller, Crime",
        releaseDate: "April 24, 2025",
        rating: "TBD"
    },
    "How To Sell Drugs Online Fast":{
        title: "How To Sell Drugs Online - Season 4",
        description: "The story of Moritz continues as he deals with new challenges in his personal and criminal life while running an online drug empire.",
        directors: "Arne Feldhusen, Lars Montag",
        producers: "Netflix",
        videoId: "wZTzTcQS8jk",
        whereToWatch: "Netflix",
        genre: "Comedy, Drama, Crime",
        releaseDate: "April 2025",
        rating: "TBD"
    },
    // Trending Series
    "9-1-1":{
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
    "Alert Missing Persons Unit":{
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
    "Bosch Legacy":{
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
    "Daredevil Born Again":{
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
    "Formula 1 Drive to Survive":{
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
    "Gangs of London":{
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
    "1923":{
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
    "Power Book III Raising Kanan":{
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
    "The Residence":{
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
    "The Righteous Gemstones": {
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
    "The Studio": {
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
    "The Wheel of Time": {
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
    "Survival of the Thickest":{
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
    "Dark Winds":{
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
    "Happy Face":{
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
    "Ludwig":{
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
    "The Leopard":{
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
    modalVideo.src = `https://www.youtube.com/embed/${series.videoId}?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&cc_load_policy=0&hl=en&cc_lang_pref=none`;
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
}

// Function to close the modal
closeBtn.addEventListener("click", () => {
    modal.style.transition = "top 0.5s ease-in-out, opacity 0.5s ease-in-out";
    modal.style.top = "-100%";
    modal.style.opacity = "0";
    setTimeout(() => {
        modal.style.display = "none";
        modalVideo.src = "";
    }, 500);
});

// Close modal when clicking outside content
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.transition = "top 0.5s ease-in-out, opacity 0.5s ease-in-out";
        modal.style.top = "-100%";
        modal.style.opacity = "0";
        setTimeout(() => {
            modal.style.display = "none";
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