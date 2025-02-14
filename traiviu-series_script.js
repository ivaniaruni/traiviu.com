function adjustHeight(){
    const container = document.getElementById('main-container');
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    const scale = windowWidth / 1750;
    container.style.transform = `scale(${scale})`;

    container.style.height = `${800 / scale}px`;
}

window.addEventListener('load', adjustHeight);
window.addEventListener('resize', adjustHeight);

document.addEventListener('DOMContentLoaded', function (){
    document.body.style.zoom = "100%";
});

document.addEventListener("DOMContentLoaded", () => {
    const cookiesBanner = document.getElementById('cookiesBanner');
    const acceptButton = document.getElementById('acceptCookies');
    const rejectButton = document.getElementById('rejectCookies');

    cookiesBanner.style.display = 'block';
    cookiesBanner.style.position = 'fixed';
    cookiesBanner.style.right = '-100%';
    cookiesBanner.style.transition = 'right 0.5s ease-in-out';

    setTimeout(() => {
        cookiesBanner.style.right = '20px';
    }, 8000);

    acceptButton.addEventListener('click', () => {
        cookiesBanner.style.right = '-100%';
        setTimeout(() => cookiesBanner.style.display = 'none', 500);
        localStorage.setItem('cookiesAccepted', 'true');
        console.log('Cookies accepted: personalized ads enabled.');
    });

    rejectButton.addEventListener('click', () => {
        cookiesBanner.style.right = '-100%';
        setTimeout(() => cookiesBanner.style.display = 'none', 500);
        localStorage.setItem('cookiesAccepted', 'false');
        console.log('Cookies rejected: personalized ads disabled.');
    });
});

function showError(message) {
    const errorContainer = document.getElementById("errorContainer");
    errorContainer.innerHTML = `<h1>Error</h1><p>${message}</p><button onclick="hideError()">Close</button>`;
    errorContainer.style.display = "block";
}

function hideError() {
    document.getElementById("errorContainer").style.display = "none";
}

/* setTimeout(() => showError("This is a testing error."), 3000); */

document.addEventListener("DOMContentLoaded", () => {
    const legalModal = document.getElementById("legalModal");
    const legalTitle = document.getElementById("legalTitle");
    const legalContent = document.getElementById("legalContent");
    const closeLegalModal = document.getElementById("closeLegalModal");

    const privacyPolicyLink = document.getElementById("privacyPolicyLink");
    const termsLink = document.getElementById("termsLink");
    const legalNoticeLink = document.getElementById("legalNoticeLink");

    const legalTexts = {
        privacyPolicy: {
            title: "Privacy Policy",
            content: "At Traiviu, we are committed to protecting the privacy of our users. This privacy policy describes how we collect, use, and protect your personal data.\n1. Data we collect: We may collect information such as your name, email address, and other data you provide when you interact with our site.\n2. Use of your data: We use your data to personalize your experience, deliver relevant ads, and improve our service.\n3. Sharing information: We will not share your data with third parties except when required by law or to provide our services.\n4. Your rights: You can access, correct, or delete your data at any time. Contact us at traiviuhelp@gmail.com for more information.\nIf you have questions about how we treat your personal data, you can write to us at traiviuhelp@gmail.com."
        },
        terms: {
            title: "Terms and Conditions",
            content: "Welcome to Traiviu. By using this site, you agree to the following terms and conditions:\n1. Permitted Use: You may access the site for personal, non-commercial purposes only.\n2. Content: All content on the site is protected by copyright. You are not permitted to copy, distribute or modify any content without prior authorization.\n3. Liability: We are not responsible for any misuse of the site or any damages caused by third parties.\n4. Modifications: We reserve the right to modify these terms at any time. It is your responsibility to review them periodically.\nIf you do not agree to these terms, please do not use this website."
        },
        legalNotice: {
            title: "Legal Notice",
            content: "This legal notice is in accordance with Law 34/2002, of July 11, on information society services and electronic commerce.\n1. Owner of the site:\n- Name: Traiviu.\n- Traiviu: traiviuweb@gmail.com.\n2. General conditions:\n- This website aims to provide information about popular trailers of the month.\n- All rights to the content of the site are reserved.\n3. Legal responsibility:\n- The owner of the site is not responsible for the misuse of the content or external links.\n4. Complaints:\n- For any questions or complaints, please contact us at traiviuhelp@gmail.com."
        }
    };

    function showLegalBlock(type) {
        const { title, content } = legalTexts[type];
        legalTitle.textContent = title;
        legalContent.textContent = content;

        legalModal.classList.add("show");
    }

    function hideLegalBlock() {
        legalModal.classList.remove("show");
    }

    privacyPolicyLink.addEventListener("click", (e) => {
        e.preventDefault();
        showLegalBlock("privacyPolicy");
    });

    termsLink.addEventListener("click", (e) => {
        e.preventDefault();
        showLegalBlock("terms");
    });

    legalNoticeLink.addEventListener("click", (e) => {
        e.preventDefault();
        showLegalBlock("legalNotice");
    });

    closeLegalModal.addEventListener("click", hideLegalBlock);
});

window.onload = () => {
    setTimeout(() => {
      document.getElementById('loading-screen').style.display = 'none';
    }, 1000);
  };  

// Notify Script
const notifyModal = document.getElementById("notifyModal");
const notifyClose = document.querySelector(".notify-close");
const notifyForm = document.getElementById("notifyForm");

function saveScrollPosition() {
    localStorage.setItem("scrollPosition", window.scrollY);
}

function restoreScrollPosition() {
    const savedPosition = localStorage.getItem("scrollPosition");
    if (savedPosition) {
        window.scrollTo(0, parseInt(savedPosition));
        localStorage.removeItem("scrollPosition");
    }
}

window.addEventListener("load", () => {
    restoreScrollPosition();
    updateNotifyButtons();

    document.querySelectorAll(".notify-btn").forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            saveScrollPosition();
            handleNotifyButtonClick(button);
        });
    });
});

function openNotifyModal() {
    notifyModal.style.display = "flex";
    notifyModal.style.position = "fixed";
    notifyModal.style.top = "-100%";
    notifyModal.style.transition = "top 0.5s ease-in-out";
    
    setTimeout(() => {
        notifyModal.style.top = "0%";
    }, 500);
}

notifyClose.addEventListener("click", () => {
    notifyModal.style.transition = "top 0.5s ease-in-out, opacity 0.5s ease-in-out";
    notifyModal.style.top = "-100%";
    setTimeout(() => notifyModal.style.display = "none", 500);
});

notifyForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();

    if (!validateEmail(email)) {
        alert("Invalid email format.");
        return;
    }

    try {
        const response = await fetch("http://localhost/my_project/save-email.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email })
        });
    
        const data = await response.json();
    
        alert(data.message);
    
        if (data.status === "success") {
            localStorage.setItem("userEmail", email);
            notifyModal.style.display = "none";
            updateNotifyButtons();
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong. Please try again.");
    }    
});

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function updateNotifyButtons() {
    const email = localStorage.getItem("userEmail");
    const notifications = JSON.parse(localStorage.getItem("notifications")) || {};

    document.querySelectorAll(".notify-btn").forEach((btn) => {
        const seriesId = btn.dataset.seriesId;
        if (email && notifications[seriesId]) {
            btn.querySelector("img").src = "image/icon/notify-active.png";
            btn.querySelector("img").alt = "Notification activated";
        } else {
            btn.querySelector("img").src = "image/icon/notify.png";
            btn.querySelector("img").alt = "Activate notification";
        }
    });
}

function handleNotifyButtonClick(button) {
    const email = localStorage.getItem("userEmail");
    const seriesId = button.dataset.seriesId;
    let notifications = JSON.parse(localStorage.getItem("notifications")) || {};

    /* openNotifyModal();*/

    if (!email) {
        openNotifyModal();
        return;
    }

    if (notifications[seriesId]) {
        delete notifications[seriesId];
    } else {
        notifications[seriesId] = true;
    }

    localStorage.setItem("notifications", JSON.stringify(notifications));
    updateNotifyButtons();
}

window.addEventListener("click", (e) => {
    if (e.target === notifyModal) {
        notifyModal.style.display = "none";
    }
});
// Function to close the modal
closeBtn.addEventListener("click", () => {
    notifyModal.style.transition = "top 0.5s ease-in-out, opacity 0.5s ease-in-out";
    notifyModal.style.top = "-100%";
    notifyModal.style.opacity = "0";
    setTimeout(() => {
        notifyModal.style.display = "none";
    }, 500);
});

notifyClose.addEventListener("click", () => {
    notifyModal.style.transition = "top 0.5s ease-in-out, opacity 0.5s ease-in-out";
    notifyModal.style.top = "-100%";
    setTimeout(() => notifyModal.style.display = "none", 500);
});

notifyForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();

    if (!validateEmail(email)) {
        alert("Invalid email format.");
        return;
    }

    try {
        const response = await fetch("http://localhost/save-email.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email })
        });
    
        const data = await response.json();
    
        alert(data.message);
    
        if (data.status === "success") {
            localStorage.setItem("userEmail", email);
            notifyModal.style.display = "none";
            updateNotifyButtons();
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong. Please try again.");
    }    
});

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function updateNotifyButtons() {
    const email = localStorage.getItem("userEmail");
    const notifications = JSON.parse(localStorage.getItem("notifications")) || {};

    document.querySelectorAll(".notify-btn").forEach((btn) => {
        const seriesId = btn.dataset.seriesId;
        if (email && notifications[seriesId]) {
            btn.querySelector("img").src = "image/icon/notify-active.png";
            btn.querySelector("img").alt = "Notification activated";
        } else {
            btn.querySelector("img").src = "image/icon/notify.png";
            btn.querySelector("img").alt = "Activate notification";
        }
    });
}

function handleNotifyButtonClick(button) {
    const email = localStorage.getItem("userEmail");
    const seriesId = button.dataset.seriesId;
    let notifications = JSON.parse(localStorage.getItem("notifications")) || {};

    /* openNotifyModal(); */

    if (!email) {
        openNotifyModal();
        return;
    }

    if (notifications[seriesId]) {
        delete notifications[seriesId];
    } else {
        notifications[seriesId] = true;
    }

    localStorage.setItem("notifications", JSON.stringify(notifications));
    updateNotifyButtons();
}

window.addEventListener("click", (e) => {
    if (e.target === notifyModal) {
        notifyModal.style.display = "none";
    }
});
// Function to close the modal
closeBtn.addEventListener("click", () => {
    notifyModal.style.transition = "top 0.5s ease-in-out, opacity 0.5s ease-in-out";
    notifyModal.style.top = "-100%";
    notifyModal.style.opacity = "0";
    setTimeout(() => {
        notifyModal.style.display = "none";
    }, 500);
});

function showOfflineMessage() {
    const offlineBanner = document.createElement("div");
    offlineBanner.id = "offlineBanner";
    offlineBanner.innerHTML = "<p>You have no internet connection!</p>";
    document.body.appendChild(offlineBanner);

    offlineBanner.style.position = "fixed";
    offlineBanner.style.top = "15px";
    offlineBanner.style.left = "50%";
    offlineBanner.style.transform = "translateX(-50%)";
    offlineBanner.style.background = "#1c1c1c";
    offlineBanner.style.color = "#ccc";
    offlineBanner.style.padding = "10px 20px";
    offlineBanner.style.borderRadius = "5px";
    offlineBanner.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.2)";
    offlineBanner.style.fontSize = "16px";
    offlineBanner.style.fontWeight = "bold";
    offlineBanner.style.zIndex = "9999";
}

function removeOfflineMessage() {
    const offlineBanner = document.getElementById("offlineBanner");
    if (offlineBanner) {
        offlineBanner.remove();
    }
}

window.addEventListener("offline", showOfflineMessage);
window.addEventListener("online", removeOfflineMessage);


document.addEventListener("DOMContentLoaded", () => {
    const homeLink = document.querySelector('a[href="#video-container"]');

    if (homeLink) {
        homeLink.addEventListener("click", (e) => {
            e.preventDefault();

            const targetSection = document.querySelector("#video-container");

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    }
});

/* General Slow Scroll */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));

        window.scrollTo({
            top: target.offsetTop,
            behavior: "smooth"
        });
    });
});

document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('keydown', event => {
    if (event.ctrlKey && (event.key === 'u' || event.key === 's' || event.key === 'i' || event.key === 'j')) {
        event.preventDefault();
    }
});

document.addEventListener("touchstart", function () {}, { passive: true });