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

const mainImg = document.getElementById("main-img")
const pictures = document.querySelectorAll(".modal-img");


const prevBtnFunction = () => {
     for (let i = 0; i < pictures.length; i++){
            if (pictures[i].src === document.querySelector("#main-img").src) {
            document.querySelector("#main-img").setAttribute("src", pictures[i -= 1].src );
            }
        }
   } 

   const nextBtnFunction = () => {
       
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

