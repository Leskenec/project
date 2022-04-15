const popupCats = document.querySelector(".popup__cats-info");
const popupCatsImage = popupCats.querySelector(".cat__image");
const popupCatsText = popupCats.querySelector(".cat__text");
const catImages = document.querySelectorAll(".cats-list__item");
const closePopupCats = document.querySelector(".close__popup");
const cardTemplate = document.querySelector("#cat-tamplate");
const cardListContainer = document.querySelector(".cats-list");


function createCardCat(dataCat) {
    const newElement = cardTemplate.content.querySelector(".cats-list__item").cloneNode(true);
    const cardImage = newElement.querySelector(".cat__image");
    const cardIName = newElement.querySelector(".cat__title");


    cardImage.src = dataCat.img_link;
    cardIName.textContent = dataCat.name;

    function clickCatImage() {
        popupCatsImage.src = dataCat.img_link;
        popupCatsText.textContent = dataCat.name;
        openPopup(popupCats)
    }

    cardImage.addEventListener("click", clickCatImage);
    return newElement;
}


function cardAddContainer(element, container) {
    container.append(element);
}

cats.forEach(dataCat => {
    const newCatNode = createCardCat(dataCat);
    cardAddContainer(newCatNode, cardListContainer)
})


function openPopup(popup) {
    popup.classList.add("popup_opened");
}

function closePopup(popup) {
    popup.classList.remove("popup_opened");
}

function clickClosePopup() {
    closePopup(popupCats)
}


closePopupCats.addEventListener("click", clickClosePopup)

// catImages.forEach(image => {
//     image.addEventListener("click", clickCatImage)

// })