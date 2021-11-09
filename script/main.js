//card
//https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_animate_3

//Movement Animation to happen
const cards = document.querySelectorAll(".card"); //targeting all the cards
//const container = document.querySelector(".container"); //what on/in the cards
//Items

const profile = document.querySelector(".profile img"); //target the image to make it rotate

//Moving Animation Event
cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
        //traking the mouse to rotate the card in different ddirections
        //The yAxel is doing a x25 per card instead of doing a break...
        let xAxis = 0;
        let yAxis = 0;
        xAxis = (window.innerWidth / 1 - e.pageX) / 25;
        yAxis = (window.innerHeight / 1 - e.pageY) / 25;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`; // y and X axel is horesental and vertikal
    });
    card.addEventListener("mouseenter", (e) => {
        //mouseenter is so it wont do anything wierd when on the card
        card.style.transition = "none";
        //Popout
        profile.style.transform = "translateZ(300px) rotateZ(45deg)"; //-making the rocks head do the happy loop
    });
    card.addEventListener("mouseleave", (e) => {
        // when mouse leave card, there is a 0.5s ease so i will look smother
        card.style.transition = "all 0.5s ease";
        card.style.transform = `rotateY(0deg) rotateX(0deg)`; //and it goes back to standarrt card
        //Popback
        profile.style.transform = "translateZ(0px) rotateZ(0deg)";
    });
});

//service-modal  Card code
//a arraywith information that will be shownd when "openCardModal" is no longer display: "none".
const funQuote = [
    {
        name: "Sammy Boy",
        content: "i like long walk on the beach, and whisky on the rock",
    },
    {
        name: "Jonsson the Rock",
        content: "anime is life, manga is my bread and butter",
    },
    {
        name: "Rocky Jonsson",
        content: "Wrestling and Acting is the same thing",
    },
    {
        name: "The R.J",
        content: "YOU CANT HANDLE THE THRUTH",
    },
];
//tagging that the modal will defalt not be shownd
const closeCardModal = () => {
    document.getElementById("card-modal-wrapper").style.display = "none";
};

/* when you click on the yellow button a modal startss to do a  for loop
were it counts witch card it is incomparison to the  arrey elemnt in "funQuote"
and if for exampel it is, card nr 2, so will the array element stop on the nr 1 
and run the  "card-modal-content" seqence.  */
const openCardModal = () => {
    const cards = document.getElementsByClassName("get-to-know-me");
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", () => {
            document.getElementById("card-modal-wrapper").style.display =
                "flex";
            for (let j = 0; j < funQuote.length; j++) {
                if (i === j) {
                    document.getElementById(
                        "card-modal-content"
                    ).innerHTML = `<h2>${funQuote[j].name}</h2><p>${funQuote[j].content}</p>`;
                }
            }
        });
    }
};

window.addEventListener("load", openCardModal);
