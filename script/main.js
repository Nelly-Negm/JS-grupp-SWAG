//card 
    //https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_animate_3

    //Movement Animation to happen
const card = document.querySelector(".desktop-card-inner");
const container = document.querySelector(".desktop-card");

//Items
const title = document.querySelector(".title");
const profile = document.querySelector(".card-top img");
const description = document.querySelector(".info ");


//Moving Animation Event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

  //Animate In
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";

//Popout
    title.style.transform = "translateZ(150px)";

    profile.style.transform = "translateZ(200px) rotateZ(-45deg)";

    description.style.transform = "translateZ(125px)";

});

// animate out

container.addEventListener("moueleave", (e) => {
card.style.transition = "all 0.5s ease";
card.style.transform = `rotateY(0deg) rotateX(0deg)`;
//Popback

title.style.transform = "translateZ(0px)";

    profile.style.transform = "translateZ(0px) rotateZ(0deg)";

    description.style.transform = "translateZ(0px)";

});
