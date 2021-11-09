//card
//https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_animate_3

//Movement Animation to happen
const cards = document.querySelectorAll(".card"); //targeting all the cards
const container = document.querySelector(".container"); //what on/in the cards
//Items

const profile = document.querySelector(".profile img"); //target the image to make it rotate

//Moving Animation Event
cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
        //traking the mouse to rotate the card in different ddirections
        let xAxis = (window.innerWidth / 1 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 1 - e.pageY) / 25;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`; // y and X axel is horesental and vertikal
    });
    card.addEventListener("mouseenter", (e) => {
        //mouseenter is so it wont do anything wierd when on the card
        card.style.transition = "none";
        //Popout
        profile.style.transform = "translateZ(200px) rotateZ(-45deg)"; //-45degre helps the angle with the 3d effect
    });
    card.addEventListener("mouseleave", (e) => {
        // when mouse leave card, there is a 0.5s ease so i will look smother
        card.style.transition = "all 0.5s ease";
        card.style.transform = `rotateY(0deg) rotateX(0deg)`; //and it goes back to standarrt card
        //Popback
        profile.style.transform = "translateZ(0px) rotateZ(0deg)";
    });
});
