const mainDiv = document.getElementById("mainDiv")
const button = document.getElementById("coffeebutton")

const display = document.createElement("img")
mainDiv.appendChild(display)

const fetching = async () => {
    try {
        const msg = await fetch("https://coffee.alexflipnote.dev/random.json");
        const img = await msg.json();
        console.log(img);
    }
};

button.addEventListener("click", fetching)