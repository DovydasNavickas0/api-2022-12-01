const mainDiv = document.getElementById("mainDiv")
const button = document.getElementById("catbutton")

const display = document.createElement("img")
mainDiv.appendChild(display)

const gautaimg = () => {
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(response => response.json())
    .then(data => {
    console.log(data);
    display.src = data[0].url;
});
}

button.addEventListener("click", gautaimg)