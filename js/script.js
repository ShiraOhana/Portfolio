// scroll to elements

const links = document.querySelectorAll(".nav-link"); // select all nav bar links
console.log(links);
for (const link of links) {
  // foreach link of links
  link.addEventListener("click", (event) => {
    event.preventDefault(); // prevents the default behaviour from the a element
    let pageSection = link.getAttribute("href"); // selects the href of the link
    let target = document.querySelector(pageSection); // selects the element with the id of the page section

    // fix navbar fixed-top blocking top content of the page problem
    let headerOffset = 130;
    let elementPosition = target.offsetTop; // gets the section top position
    let offsetPosition = elementPosition - headerOffset;
    window.scroll({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
}

//dark mode

const body = document.querySelector("body");
const darkModeButton = document.querySelector("#dark-mode");
const darkModeIcon = document.querySelector("#dark-mode > i");

// dark mode based on system preferences
//verify if the browser supports matchMedia and verify if the condition of the color scheme dark matches

const userPrefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
const userPrefersLight =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: light)").matches;

if (userPrefersDark) {
  darkMode();
} else if (userPrefersLight) {
  lightMode();
}

// dark mode button

const currentBodyClass = body.classList;
// add event listener to button
darkModeButton.addEventListener("click", () => {
  if (currentBodyClass == "light-theme") {
    darkMode();
  } else if (currentBodyClass == "dark-theme") {
    lightMode();
  }
});

function darkMode() {
  body.classList.remove("light-theme");
  body.classList.add("dark-theme");
  darkModeIcon.classList.remove(`fa-moon`);
  darkModeIcon.classList.add(`fa-sun`);
  darkModeButton.removeAttribute("title");
  darkModeButton.setAttribute("title", "Turn lights on");
}

function lightMode() {
  body.classList.remove("dark-theme");
  body.classList.add("light-theme");
  darkModeIcon.classList.remove(`fa-sun`);
  darkModeIcon.classList.add(`fa-moon`);
  darkModeButton.removeAttribute("title");
  darkModeButton.setAttribute("title", "Turn lights off");
}

// scroll to top arrow
const hero = document.querySelector("#hero");
const scrollTop = document.querySelector("#scroll-top");
scrollTop.addEventListener("click", () => {
  window.scroll({ top: 0, left: 0, behavior: "smooth" }); // scroll to top of the page after click the arrow
});

window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const coords = hero.offsetHeight;
  if (scrolled <= coords) {
    scrollTop.style.visibility = "hidden";
  } else {
    scrollTop.style.visibility = "";
  }
});
