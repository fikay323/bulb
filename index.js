let image = document.getElementById("img")
function change() {
    if (butt.innerText == 'On') {
        butt.innerText = 'Off'
        image.src = "/img/on.jfif"
    }
    else {
        butt.innerText = 'On'
        image.src = "/img/off.jpg"
    }
}