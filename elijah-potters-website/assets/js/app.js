const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const navLink = document.querySelectorAll(".nav-link");
const secretCode = "aappscsc";
var key = "";

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

// About button
document.addEventListener("DOMContentLoaded", function () {
    // Find the About button
    var aboutButton = Array.from(navLink).find(el => el.textContent === "About");

    // Add a click event listener to the About button
    aboutButton.addEventListener("click", function () {

        // Prevent default link behavior, offset by 100px, and hide the nav menu
        event.preventDefault();
        key = key + "a";
        ul.classList.remove("show");
        var targetId = this.getAttribute("href");
        var targetElement = document.querySelector(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: "smooth"
        });
    });
});

// Skills button
document.addEventListener("DOMContentLoaded", function () {
    // Find the Skills button
    var skillsButton = Array.from(navLink).find(el => el.textContent === "Skills");

    // Add a click event listener to the Skills button
    skillsButton.addEventListener("click", function () {

        // Prevent default link behavior, offset by 100px, and hide the nav menu
        event.preventDefault();
        key = key + "s";
        ul.classList.remove("show");
        var targetId = this.getAttribute("href");
        var targetElement = document.querySelector(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: "smooth"
        });

        // Remove the animation class
        var firstSet = document.querySelector(".first-set");
        firstSet.classList.remove("animate__animated", "animate__pulse");

        // Adding back the animation after a 10ms delay
        setTimeout(function () {
            firstSet.classList.add("animate__animated", "animate__pulse");
        }, 10);
    });
});

// Projects button
document.addEventListener("DOMContentLoaded", function () {
    // Find the Projects button
    var projectsButton = Array.from(navLink).find(el => el.textContent === "Projects");

    // Add a click event listener to the Projects button
    projectsButton.addEventListener("click", function () {

        // Prevent default link behavior, offset by 70px, and hide the nav menu
        event.preventDefault();
        key = key + "p";
        ul.classList.remove("show");
        var targetId = this.getAttribute("href");
        var targetElement = document.querySelector(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: "smooth"
        });

        // Remove the animation class
        var projects = document.querySelector(".projects-container");
        projects.classList.remove("animate__animated", "animate__pulse");

        // Adding back the animation after a 10ms delay
        setTimeout(function () {
            projects.classList.add("animate__animated", "animate__pulse");
        }, 10);
    });
});

// Contact button
document.addEventListener("DOMContentLoaded", function () {
    // Find the Contact button
    var projectsButton = Array.from(navLink).find(el => el.textContent === "Contact");

    // Add a click event listener to the Contact button
    projectsButton.addEventListener("click", function () {

        // Prevent default link behavior, offset by 100px, and hide the nav menu
        event.preventDefault();
        key = key + "c";
        if (key === secretCode) {
            alert(":)");
        }
        ul.classList.remove("show");
        var targetId = this.getAttribute("href");
        var targetElement = document.querySelector(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: "smooth"
        });
    });
});