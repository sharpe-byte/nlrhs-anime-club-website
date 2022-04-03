// Preloader and page content setup
document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    showPage();
  }
};

function showPage() {
  disablePreloader();
  showPageContent();
}

function disablePreloader() {
  const preloaderElement = document.querySelector(".preloader");
  preloaderElement.classList.add("preloader--disabled");
}

function showPageContent() {
  const pageContentElement = document.querySelector(".page-content");
  pageContentElement.classList.remove("page-content--hidden");
  document.addEventListener("animationend", () => {
    pageContentElement.classList.remove("page-content--fade-in");
  });
}

// Disable selectiong
document.onselectstart = () => {
  return false;
};

// Disable drag
document.ondragstart = () => {
  return false;
};

// Set copyright
window.onload = () => {
  init();
};

function init() {
  setCopyright();
}

function setCopyright() {
  const year = new Date().getFullYear();
  const footerCopyrightDescriptionElement = document.querySelector(
    ".footer__copyright__desc"
  );
  footerCopyrightDescriptionElement.textContent = `© Copyright ${year}, NLRHS Anime Club. All Rights Reserved.`;
}

// Header background color setup
let lastKnownScrollPosition = 0;
let ticking = false;

function changeHeaderBackgroundColor(scrollPosition) {
  if (scrollPosition <= 30) {
    document.querySelector(".header").style.backgroundColor = "transparent";
  } else {
    document.querySelector(".header").style.backgroundColor = "black";
  }
}

document.addEventListener("scroll", function (e) {
  lastKnownScrollPosition = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function () {
      changeHeaderBackgroundColor(lastKnownScrollPosition);
      ticking = false;
    });
    ticking = true;
  }
});
