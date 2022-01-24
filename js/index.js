const menu = document.getElementById("menu");
console.log(menu)

function openMenu(){
    menu.classList.toggle("showlinks");
}
document.getElementById("myInfo").textContent = "I am available";

window.addEventListener("load", function(){

    document.getElementById("loader").classList.add("hideloader");
})