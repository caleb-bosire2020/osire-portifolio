const menu = document.getElementById("menu");
console.log(menu)

function openMenu(){
    menu.classList.toggle("showlinks");
}
document.getElementById("myInfo").textContent = "Content is the information and experiences; directed at an end-user or audience in publishing, art, and communication. Content is delivered via different media including, the Internet, cinema, television, radio, smartphones, audio CDs, books, e-books, magazines, and live events.";

window.addEventListener("load", function(){

    document.getElementById("loader").classList.add("hideloader");
})

// skills page display unit
const divContainer = document.getElementById("skillsPage");

const btnsDisplay = document.querySelectorAll(".pageBtn");

const elementsDisplay = document.querySelectorAll(".content")

divContainer.addEventListener("click", function(e){
    e.preventDefault();

    const currentElement = e.target.dataset.id;
    const btn = e.target;

    if(currentElement){
        // remove all buttons active class, and add active class to the current button
        btnsDisplay.forEach(function(btnNow){
            btnNow.classList.remove("active");
            btn.classList.add("active");

        });
        // remove active class to all display divs and add acive class to current div
        elementsDisplay.forEach(function(display){
            display.classList.remove("active");
        });

        const currentDisplay = document.getElementById(currentElement);
        currentDisplay.classList.add("active"); 
    }
});