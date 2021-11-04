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
PROBLEM: Jag vill gämföra mainImg.src och pictures.src för att identifiera vilken bild som visas för att sedan kunna byta bild.
problemet är att de har olika källor, mainImg har källa till html filen och pictures till min img mapp. 
Jag skulle även kunna gämföra med images[i].name, men den heter annorlunda. 
Console.logar ut vad de olika kännorna visar när man klickar på förgående bild knappen på hemsidan. 
*/
const prevBtnFunction = () => {

    console.log(mainImg.src)
    console.log(pictures[0].src)
    console.log(images[0].name)

     for (let i = 0; i < pictures.length; i++){
            if (mainImg.src === pictures.src) {
                document.querySelector("#modal-content").innerHTML = `<img id="main-img" src="../img/${images[i + 1].name}">`
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

