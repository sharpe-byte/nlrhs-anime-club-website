// Preloader setup
document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    showPage();
  }
};

function showPage() {
  document.getElementById("page-content").style.display = "block";
  document.getElementById("preloader").style.display = "none";
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
  document.querySelector(
    "#page-content > footer > div.copyright > p"
  ).textContent = `© Copyright ${year}, NLRHS Anime Club. All Rights Reserved.`;
}

// Header background color setup
let lastKnownScrollPosition = 0;
let ticking = false;

function changeHeaderBackgroundColor(scrollPos) {
  if (scrollPos <= 30) {
    document.querySelector("header").style.backgroundColor = "transparent";
  } else {
    document.querySelector("header").style.backgroundColor = "black";
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
