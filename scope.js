/*(function () {
    "use strict"
    const pTag = document.querySelector("p")
    const btn = document.querySelector("button");

btn.addEventListener('click', function () {
    pTag.style.color ="green"
});
})();*/

const pTags = document.querySelectorAll("p");
const btn = document.querySelector("button");
btn.addEventListener('click', function () {
    for (let i=0; i<pTags.length; i++){
        pTags[i].style.color = "green";
    }
});