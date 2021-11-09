//card
//https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_animate_3

//Movement Animation to happen
const cards = document.querySelectorAll(".card");
const container = document.querySelector(".container");
//Items

const profile = document.querySelector(".profile img");

//Moving Animation Event
cards.forEach(card => {
  card.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 1 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 1 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });
  card.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //Popout
    profile.style.transform = "translateZ(200px) rotateZ(-45deg)";
  });
  card.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    profile.style.transform = "translateZ(0px) rotateZ(0deg)";

  });
});

