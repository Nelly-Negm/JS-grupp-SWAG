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
        name: "image000010.jpeg"
    },
    {
        name: "image000011.jpeg"
    },
]

const closeModal = () => {
    document.querySelector("#modal-wrapper").style.display="none"
}

const pictures = document.querySelectorAll(".modal-img");

const openModal = () => {
    for (let i = 0; i < pictures.length; i++){
        pictures[i].addEventListener("click", () => {
            document.querySelector("#modal-wrapper").style.display="flex"; 
        
        for (let j = 0; j < images.length; j++) {
            if (i === j){
                document.querySelector("#modal-content")
                .innerHTML = `<img src="../img/${images[j].name}">`
            }
        }
        })
    }
}

openModal()


// Modal end

//Set main image

const setMainImage = (src) => {
    document.querySelector("#main-img").setAttribute("src", src)
}

const mainImg = document.getElementById("main-img")

const prevImage = () => {
    for (let i = 0; i < pictures.length; i++){
        if (pictures[i].src === mainImg.src){
            mainImg.setAttribute("src", images[i -= 1].src);
        }
    }
}