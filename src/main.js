const body = document.querySelector("#body");
const navT = document.querySelector(".navbar__top");
const allEli = document.querySelectorAll(".icon__nav");
const zoomFullSc = document.querySelector(".zoomScreen");

const mLanguageHide = document.querySelector(".modal_language.hidden");
const profile = document.querySelector("#profile");
function onNight() {
  const nighted = document.querySelector(".bg-gray-700");
  if (nighted) {
    body.classList.remove("bg-gray-700");
    navT.classList.remove("bg-black");
    allEli.forEach((elementi) => {
      elementi.classList.remove("text-white");
    });
  } else {
    body.classList.add("bg-gray-700");
    navT.classList.add("bg-black");
    allEli.forEach((elementi) => {
      elementi.classList.add("text-white");
    });
  }
}
const elem = document.documentElement;
function openFullscreen() {
  const iszoomFullSc = document.querySelector(".zoomScreen.isZoomFullScreen");
  if (iszoomFullSc && document.exitFullscreen) {
    document.exitFullscreen();
    zoomFullSc.classList.remove("isZoomFullScreen");
  } else if (elem.requestFullscreen) {
    elem.requestFullscreen();
    zoomFullSc.classList.add("isZoomFullScreen");
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen();
  }
}
function listLanguage() {
  mLanguageHide.classList.remove("hidden");
  mLanguageHide.classList.add("block");
  console.log(mLanguageHide);
}
document.addEventListener("mouseover", function (event) {
  const notClanguage = document.querySelector(".modal_language.block");
  console.log(notClanguage);
  console.log(event.target);
  if (event.target == profile) {
    mLanguageHide.classList.remove("block");
    mLanguageHide.classList.add("hidden");
  }
});
