const elMenu= document.querySelector(".share-menu");
const elButton= document.querySelector(".button-share");
const elProfile=document.querySelector(".profile");

elButton.addEventListener('click', function() {
    elMenu.classList.toggle('active');
    elButton.classList.toggle('active');
    elProfile.classList.toggle('active');
});