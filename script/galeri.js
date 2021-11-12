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

const pictures = document.querySelectorAll(".modal-img");

/* När man klickar på bakåtknappen körs en loop, för varje loopning kontrolleras om indexen för mainImg är samma
som pictures (indexen för stora bilden === indexen för den lilla bilden ? ) om den är det ändras länken för stora 
bilden till en ny länk, denna nya länk är pictures inxex - 1, vilket blir förgående bild.
Om man är på mainImg index 0, alltså första bilden, byter den länken för mainImg till sista bilden.
*/
const prevBtnFunction = () => {
    console.log(mainImg.src)
     for (let i = 0; i < pictures.length; i++){
            if (pictures[i].src === mainImg.src && i !== 0) {
                console.log(i)
            mainImg.setAttribute("src", pictures[i -= 1].src)
            } else if (pictures[i].src === mainImg.src && i === 0) {
                mainImg.setAttribute("src", pictures[i += pictures.length - 1].src)            
            }
        }
   } 
   /* Fungerar som prevBtnFunction men byter mainImg länk till länken som finns på pictures index + 1. alltså nästa
   bild. Om man är på sista bilden, alltså om pictures index src är lika med mainImg src på sista bilden så
   byts mainImg src ut till första bildens src, alltså pictures index 0.
    */
   const nextBtnFunction = () => {
        console.log(mainImg.src)
         for (let i = 0; i < pictures.length; i++){
                if (pictures[i].src === mainImg.src && i !== pictures.length - 1) {
                mainImg.setAttribute("src", pictures[i += 1].src)
                } else if (pictures[i].src === mainImg.src && i === pictures.length - 1) {
                mainImg.setAttribute("src", pictures[0].src)
                }
            }
       } 

   console.log(mainImg.src)

   // modalens display ändras till none när man klickar på kryset.
const closeModal = () => {
    document.querySelector("#modal-wrapper").style.display="none"
}




   /* När openModal körs körs en loop körs för att alla bilder ska targetas (så att något ska hända när man klickar på en av bilderna).
    modalens display ändras till flex när man klickar på en billd. klickar man på en bild som har index 2 
    så är i 2
    När man klickar på en bild körs även nästa forloop. eftersom i = 2 just nu så körs forloopen tills j 
    också är 2. Då sätts mainImg src till index 2 för images, vilket är mina länkar högre upp.
   */
const openModal = () => {
    for (let i = 0; i < pictures.length; i++){
        pictures[i].addEventListener("click", () => {
            document.querySelector("#modal-wrapper").style.display="flex"; 
        
        for (let j = 0; j < images.length; j++) {
            
            if (i === j){
                mainImg.setAttribute("src", `../img/${images[j].name}`)
            }
        }
        })
    }
}
// Eftersom det att alla bilder måste itereras innan man klickar på den måste openModal köras när
// man laddar sidan. annars skulle inte alla bilder få eventlistenern. 

openModal()


// Modal end

