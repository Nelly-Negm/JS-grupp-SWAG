//nav bar animering
function myFunction(x) {
    x.classList.toggle("change");
}

//card 

const backSideInformation = [ //personal information about each card
    {
        name: "",
    age: "",
    skill: "",
    like: "",
    background: "",
    }
    
]

function card-flip() { //making it flip
    let element = document.getElementById("front"); //first it is on front
    element.toggle.getElementById("back") //use the toogle event to flipp it
}

object.onclick = function(card-flip){ //i want onclik to be the indicator for it to flipp
    let back = document.getElementById("back");
    let front = document.getElementById("front");

    //can I use the same to rotade ass in CSS? like:
    //https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_animate_3
};