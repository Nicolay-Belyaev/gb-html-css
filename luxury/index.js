// чистая функция делает из object/JSON верстку
const productHTMLGenerator = (product) => {
    // в этот момент начинаешь любить JSX...
    const card = document.createElement("div");
    const imageDiv = document.createElement("div");
    const hover = document.createElement("div");
    const hoverButton = document.createElement("div");
    const imgHoverButton = document.createElement("img");
    const hoverButtonText = document.createElement("span");
    const productImg = document.createElement("img");
    const cardText = document.createElement("div");
    const cardName =document.createElement("span");
    const cardDescription =document.createElement("span");
    const cardPrice =document.createElement("span");

    // ...еще сильнее
    card.className = "products__cards-card";
    imageDiv.className = "products__cards-card-image";
    hover.className = "products__cards-card_hover";
    hoverButton.className = "products__cards-card_hover-button";
    imgHoverButton.src = "img/products/cart.svg";
    imgHoverButton.alt = 'cart.svgclass="hover-button-img';
    hoverButtonText.className = "hover-button-text";
    productImg.alt = "product_image";
    productImg.className = "products__image";
    cardText.className = "products__cards-card-text";
    cardName.className = "products__cards-card-name";
    cardDescription.className = "products__cards-card-description";
    cardPrice.className = "products__cards-card-price";

    productImg.src = product.img;
    cardName.innerText = product.name;
    cardDescription.innerText = product.description;
    cardPrice.innerText = product.price;

    card.append(imageDiv, cardText);
        imageDiv.append(hover,productImg)
            hover.append(hoverButton)
                hoverButton.append(
                    imgHoverButton,
                    hoverButtonText);
        cardText.append(
            cardName,
            cardDescription,
            cardPrice);

    return card;
}

// HOF, которая будет работать с DOM - вставлять товары на основе data.js
const productsPlacer = (data) => {
    const productsContainer = document.querySelector(".products__cards");
    data.forEach(product => {
        productsContainer.append(productHTMLGenerator(product));
    })
}

productsPlacer(products);
cartRenderer(cartData, document.querySelector(".footer__cart_cards"));
