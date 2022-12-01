// const mainDiv = document.querySelector("#mainDiv") //first way
// const button = document.querySelector("button")

// let check = false;

// const fetchimg = async () => {
//     try {
//         const msg = await fetch("https://dog.ceo/api/breeds/image/random");
//         const img = await msg.json();
//         console.log(img)
//         if(check === false){        
//             const display = document.createElement("img")
//             display.src = img.message
//             mainDiv.appendChild(display)
//             check = true
//             return check
//         }else{
//             const display1 = document.querySelector("img")
//             display1.remove()
//             const display = document.createElement("img")
//             display.src = img.message
//             mainDiv.appendChild(display)
//         }


//     } catch(error) {
//         console.log(error);
//     }
// };

// button.addEventListener("click", fetchimg)


const mainDiv = document.querySelector("#mainDiv") // second way
const button = document.querySelector("button")
const display = document.createElement("img")

let check = false;

const fetchimg = async () => {
    try {
        const msg = await fetch("https://dog.ceo/api/breeds/image/random");
        const img = await msg.json();
        console.log(img)
        display.src = img.message
        mainDiv.appendChild(display)


    } catch(error) {
        console.log(error);
    }
};

button.addEventListener("click", fetchimg)