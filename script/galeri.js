// Modal start

const images  = [
    {
        name: "image00001.jpeg"
    },
    {
        name: "image00002.jpeg"
    },
    {
        name: "image00003.jpeg"
    },
    {
        name: "image00004.jpeg"
    },
    {
        name: "image00005.jpeg"
    },
    {
        name: "image00006.jpeg"
    },
    {
        name: "image00007.jpeg"
    },
    {
        name: "image00008.jpeg"
    },
    {
        name: "image00009.jpeg"
    },
    {
        name: "image00010.jpeg"
    },
    {
        name: "image00011.jpeg"
    },
]

//Prev next btn
const mainImg = document.getElementById("main-img")
// I inner HTML, i if satsen till modalen, lägger jag till ett element med id "main-img"

const pictures = document.querySelectorAll(".modal-img");



/*
ANNAT PROBLEM: Att skriva in [i] var ej lösningen. Jag fann lösningen för förra problemet genom att ändra vad pictures[i].src
skulle vara lika med, så nu aktiveras if satsen. Men mitt nya problem är att loopen slutar ju inte köra för att ifsatsen går igenom
vilket för att i blir lika med lika många bilder jag har, så den hoppar till sista bilden. Dessutom får jag error när jag försöker 
skriva [i - 1]  
*/
const prevBtnFunction = () => {

    console.log(mainImg.src)
    console.log(pictures[0].src)
    console.log(`file:///C:/Users/User/Desktop/Grupp%20upp%20JavaScript/JS-grupp-SWAG/img/${images[0].name}`)

     for (let i = 0; i < pictures.length; i++){
            if (pictures[i].src === `file:///C:/Users/User/Desktop/Grupp%20upp%20JavaScript/JS-grupp-SWAG/img/${images[i].name}`) {
            document.querySelector("#modal-content").innerHTML = `<img id="main-img" src="../img/${images[i /* - 1 */].name}">`
            console.log(i)
            }
        }
   } 



const closeModal = () => {
    document.querySelector("#modal-wrapper").style.display="none"
}





const openModal = () => {
    for (let i = 0; i < pictures.length; i++){
        pictures[i].addEventListener("click", () => {
            document.querySelector("#modal-wrapper").style.display="flex"; 
        
        for (let j = 0; j < images.length; j++) {
            
            if (i === j){
                document.querySelector("#modal-content")
                .innerHTML = `<img id="main-img" src="../img/${images[j].name}">`
            }
        }
        })
    }
}

openModal()


// Modal end

