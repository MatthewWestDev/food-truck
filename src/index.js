import "./styles.css";
import { aboutImg, aboutTitle, aboutText } from "./about.js";
import { menuImg, menuTitle, menuText } from "./menu.js";
import { locationImg, locationTitle, locationText } from "./location.js";
import { buildPage } from "./build-page.js";

// header elements
const header = document.querySelector("header");
import starImg from "./images/star-outline.svg";
const logo = document.createElement("img");
logo.classList.add("logo");
logo.src = starImg;
header.prepend(logo);

buildPage( aboutImg, aboutTitle, aboutText );
setActive("about-btn");

// button clicks to navigate content
document.querySelector("#about-btn").addEventListener("click", () => {
    resetPage();
    buildPage( aboutImg, aboutTitle, aboutText );
    setActive("about-btn");
});

document.querySelector("#menu-btn").addEventListener("click", () => {
    resetPage();
    buildPage( menuImg, menuTitle, menuText );
    setActive("menu-btn");
});

document.querySelector("#location-btn").addEventListener("click", () => {
    resetPage();
    buildPage( locationImg, locationTitle, locationText );
    setActive("location-btn");
});

function setActive( buttonId ) {
    document.getElementById( buttonId ).classList.add( "active" );
};

function resetPage() {
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach( navItem => {
        navItem.classList.remove("active");
    });
    const main = document.querySelector("main");
    main.textContent = "";
};