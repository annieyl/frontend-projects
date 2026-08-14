const cards = document.querySelectorAll('.card')
const evil = document.querySelector(".evil")
const popular_badge = document.createElement('div')
popular_badge.classList.add("popular-badge")
popular_badge.textContent = "most popular!"

var len_cards = Array.from(cards).length - 1;

var active = 1;

setActive();
cards.forEach((e,idx)=> {
    e.setAttribute('idx',idx+1);
    if (e.classList.contains("popular")){
        active = idx;
    }
});

evil.addEventListener("click",incPop);

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
