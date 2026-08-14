const cards = document.querySelectorAll('.card')
const evil = document.querySelector(".evil")
const eviler = document.querySelector(".eviler")
const body = document.querySelector("body")
const hints =document.getElementsByClassName("testimonial")[0].querySelectorAll('.hints')
console.log(hints)
const popular_badge = document.createElement('div')
popular_badge.classList.add("popular-badge")
popular_badge.textContent = "most popular!"

var len_cards = Array.from(cards).length - 1;
var mode = "";
var modedisc = false;

var active = 1;

setActive();
cards.forEach((e, idx) => {
    e.setAttribute('idx', idx + 1);
    if (e.classList.contains("popular")) {
        active = idx;
    }
});

evil.addEventListener("click", incPop);
eviler.addEventListener("click", modeChange)

function incPop(e) {
    let prev = cards[active]
    prev.classList.remove("popular");
    prev.querySelector(".btn").classList.remove("btn-accent")

    active = (active === len_cards) ? 0 : active + 1;

    console.log(active);

    setActive()
}

function setActive() {
    let newc = cards[active]
    newc.classList.add("popular");
    newc.querySelector(".btn").classList.add("btn-accent")
    newc.prepend(popular_badge)

}

function modeChange() {
    if (mode === "") {
        mode = "light-mode";
        body.classList.add(mode);
        eviler.textContent="congrats! you found light mode! go back to dark?";
        if (modedisc === false){
            firstDiscoverMode();
            modedisc=true;
        }
    }
    else {
        body.classList.remove(mode)
        eviler.textContent ="congrats! you found light mode! go back to it?"
        mode = "";
    }
}

function firstDiscoverMode() {
    eviler.style.color ="gray";
    hints.forEach((e) => {e.remove()})
}