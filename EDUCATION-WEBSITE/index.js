
window.addEventListener("scroll", () => {
   document.querySelector("nav").classList.toggle("window-scroll", scrollY > 30)
})


const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
   faq.addEventListener("click", () => {
      // Toggle the "open" class on the clicked FAQ
      faq.classList.toggle("open");

      // Select the icon within the clicked FAQ
      const faqIcon = faq.querySelector("i");

      // Check and update the icon's class
      if (faqIcon.className === "fa-solid fa-plus") {
         faqIcon.className = "fa-solid fa-minus"; // Change to minus
      } else {
         faqIcon.className = "fa-solid fa-plus"; // Change to plus
      }

      // Select the answer element
      const answer = faq.querySelector(".answer");

      // If the FAQ is open, set max-height to its scrollHeight, else set to 0
      if (faq.classList.contains("open")) {
         answer.style.maxHeight = `${answer.scrollHeight}px`; // Set max-height to the actual height of the answer
      } else {
         answer.style.maxHeight = `0`; // Reset max-height to 0
      }

      // Update aria-expanded attribute for accessibility
      faq.setAttribute("aria-expanded", faq.classList.contains("open"));
   });
});




// NAV MENU


const navMenu = document.querySelector(".menu");
const closMenu = document.querySelector(".close-menu");
const openMenu = document.querySelector(".open-menu");


// Function to open the menu
openMenu.addEventListener("click", () => {
  navMenu.style.display = "block";
  openMenu.style.display = "none";
  closMenu.style.display = "block";
});

// Function to close the menu
closMenu.addEventListener("click", () => {
  closeMenu();
});

// Function to close the menu and reset styles
function closeMenu() {
  navMenu.style.display = "none";
  openMenu.style.display = "block";
  closMenu.style.display = "none";
}

// Function to handle clicks outside the menu
document.addEventListener("click", (event) => {
  // Check screen width
  const maxWidth = 1024;
  if (window.innerWidth <= maxWidth) {
    const isClickInsideMenu = navMenu.contains(event.target);
    const isClickOnIcons =
      openMenu.contains(event.target) || closMenu.contains(event.target);

    if (!isClickInsideMenu && !isClickOnIcons) {
      closeMenu();
    }
  }
});

// Listen for window resize to reset desktop styles
window.addEventListener("resize", () => {
  if (window.innerWidth > 1024) {
    // Reset menu styles for desktop view
    navMenu.style.display = "flex"; // Ensure the menu is visible
    openMenu.style.display = "none"; // Hide the open icon
    closMenu.style.display = "none"; // Hide the close icon
  } else {
    // Reset styles for mobile/tablet view
    navMenu.style.display = "none"; // Ensure menu is hidden initially
    openMenu.style.display = "block"; // Show the open icon
    closMenu.style.display = "none"; // Hide the close icon
  }
});





