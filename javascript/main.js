function toggleMenu() {
    const navbarMenu = document.getElementById('navbar-menu');
    navbarMenu.classList.toggle('active');
  }
  function toggleMenubtn() {
    const navbarMenubtn = document.getElementById('nav-btn');
    navbarMenubtn.classList.toggle('active');
  }

const swiperWrapper = document.querySelector('.swiper-wrapper');

// Optional: Pause on hover
swiperWrapper.addEventListener('mouseover', () => {
  swiperWrapper.style.animationPlayState = 'paused';
});
swiperWrapper.addEventListener('mouseleave', () => {
  swiperWrapper.style.animationPlayState = 'running';
});
const cards = document.querySelectorAll('.card');
    let currentIndex = 0;

    function updateCardPosition() {
      cards.forEach((card, index) => {
        card.style.transform = `translateX(${100 * (index - currentIndex)}%)`;
      });
    }

    function nextCard() {
      if (currentIndex < cards.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateCardPosition();
    }

    function prevCard() {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = cards.length - 1;
      }
      updateCardPosition();
    }

    // Initialize position
    updateCardPosition();
    let currentLanguage = 'en'; // Default language

// Load the translations from the JSON file
async function loadTranslations() {
  try {
    const response = await fetch('./translations.json');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error loading translations:", error);
    return null; // Return null if there's an error
  }
}

// Set the language based on the selected language
async function changeLanguage(language) {
  const translations = await loadTranslations();
  if (translations) {
    currentLanguage = language;
    setLanguage(language, translations);
  }
}

// Apply the selected language
function setLanguage(language, translations) {
  document.getElementById("home").textContent = translations[language].home;
  document.getElementById("employmentAgency").textContent = translations[language].employmentAgency;
  document.getElementById("teachingTeam").textContent = translations[language].teachingTeam;
  document.getElementById("courseStructure").textContent = translations[language].courseStructure;
  document.getElementById("partners").textContent = translations[language].partners;
  document.getElementById("nonBindingInquiry").textContent = translations[language].nonBindingInquiry;
}

// Set default language on page load
window.onload = async function () {
  const translations = await loadTranslations();
  if (translations) {
    setLanguage(currentLanguage, translations);
  }
};
