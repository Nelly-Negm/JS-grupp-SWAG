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
        profile.style.transform = "translateZ(200px) rotateZ(-45deg)"; //-making the rocks head do the happy loop
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
const services = [
    //the pop up information that will be showd
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

const closeServiceModal = () => {
    document.getElementById("service-modal-wrapper").style.display = "none"; //tagging that the modal will defalt not be shownd
};

/* börjar med att ha min modal i display none
och sen när man klickar på den gula knappen börjar modal göra en for loop
där den tar informationen från "servis" array
och numreriskt tar upp modalen beroende vilket kort det är   */
const openServiceModal = () => {
    const cards = document.getElementsByClassName("get-to-know-me");
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", () => {
            document.getElementById("service-modal-wrapper").style.display =
                "flex";
            for (let j = 0; j < services.length; j++) {
                if (i === j) {
                    document.getElementById(
                        "service-modal-content"
                    ).innerHTML = `<h2>${services[j].name}</h2><p>${services[j].content}</p>`;
                }
            }
        });
    }
};

window.addEventListener("load", openServiceModal);
