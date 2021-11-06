//card 
    //https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_animate_3

    //Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");


//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 1 - e.pageX) / 3;
  let yAxis = (window.innerHeight / 1 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "all 0.3s ease";
  //Popout
 /* */ title.style.transform = "translateZ(150px)";
  sneaker.style.transform = "translateZ(200px) rotateZ(-10deg)";
  description.style.transform = "translateZ(125px)";
  purchase.style.transform = "translateZ(75px)";
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 1.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  /* */ title.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});