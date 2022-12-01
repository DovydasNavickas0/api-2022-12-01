const mainDiv = document.getElementById("mainDiv")
const all_button = document.getElementById("allbutton")
const admin_button = document.getElementById("adminbutton")
const climate_button = document.getElementById("climatebutton")
const health_button = document.getElementById("healthbutton")
const science_button = document.getElementById("sciencebutton")
const us_button = document.getElementById("usbutton")
const world_button = document.getElementById("worldbutton")

const display = document.createElement("img")
mainDiv.appendChild(display)

const fetchingALL = async () => {
    try { // fetch url pvz: APIlink:request:key
        const popular = await fetch("https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=kRdDU2UjAtsSKoeijHfzSZzOd7b2qxBA") // in 7 days
        const popular_msg = await popular.json();
        console.log(popular_msg)

    } catch(error){
        console.log(error)
    }

};

all_button.addEventListener("click", fetchingALL);