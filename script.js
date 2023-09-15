const modeSwitch = document.getElementById("mode-switch");
const header = document.querySelector("nav");

modeSwitch.addEventListener("change", function() {
    if (modeSwitch.checked) {
        // Ativar o light mode para o header
        header.classList.add("light-mode");
        header.classList.remove("dark-mode");
    } else {
        // Ativar o dark mode para o header
        header.classList.remove("light-mode");
        header.classList.add("dark-mode");
    }
});

// O código para o footer permanece o mesmo
const footer = document.querySelector(".footer");

modeSwitch.addEventListener("change", function() {
    if (modeSwitch.checked) {
        // Ativar o light mode para o footer
        footer.classList.add("light-mode");
        footer.classList.remove("dark-mode");
    } else {
        // Ativar o dark mode para o footer
        footer.classList.remove("light-mode");
        footer.classList.add("dark-mode");
    }
});

const images = [ 
    { 'id': '1', 'url':'./img/2.jpg'}, 
    { 'id': '2', 'url':'./img/1.jpg'}, 
    { 'id': '3', 'url':'./img/3.jpg'}, 
    { 'id': '4', 'url':'./img/4.jpg'}, 
	{ 'id': '5', 'url':'./img/5.jpg'}, 
    { 'id': '6', 'url':'./img/6.jpg'}, 
] 
const container = document.querySelector('.container-items'); 
for (const image of images){ 
    container.innerHTML += ` 
        <div class='item'> 
            <img src='${image.url}' 
        </div> 
        ` 
    }

let items = document.querySelectorAll('.item');

document.querySelector('#next').addEventListener('click', ()=>{
    container.appendChild(items[0]);
    items = document.querySelectorAll('.item');
});

document.querySelector('#previous').addEventListener('click', ()=>{
    const lastItem = items[items.length - 1];
    container.insertBefore( lastItem, items[0]);
    items = document.querySelectorAll('.item');
});