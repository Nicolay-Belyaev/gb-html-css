const cartProductHTMLGenerator = ({id, img, name, price}) => {
    const wrapper = document.createElement("div");

    const imageDiv = document.createElement("div");
    const image = document.createElement("img");

    const descriptionDiv = document.createElement("div");
    const closeButton = document.createElement("img");
    const productName = document.createElement("span");
    const productTitle = document.createElement("span");

    const paramsWrapper = document.createElement("div");
    const priceOuterSpan = document.createElement("span");
    const priceInnerSpan = document.createElement("span");
    const color = document.createElement("span");
    const size = document.createElement("span");
    const quantityOuterSpan = document.createElement("span");
    const quantityInnerInput = document.createElement("input");

    wrapper.className = "card";
    imageDiv.className = "card__image";
    descriptionDiv.className = "card__description";
    closeButton.className = "card__description-close";
    closeButton.className = "card__description-close";
    productName.className = "card__description-string card__description-name";
    productTitle.className = "card__description-string card__description-name";
    paramsWrapper.className = "card__description-params";
    priceOuterSpan.className = "card__description-string"
    priceInnerSpan.className = "card__description-price";
    color.className = "card__description-string";
    size.className = "card__description-string";
    quantityOuterSpan.className = "card__description-string";
    quantityInnerInput.className = "card__description-quantity";

    priceOuterSpan.textContent = "Price:";
    size.innerText = "Size: Xl";
    color.innerText = "Color: Red";
    quantityOuterSpan.textContent = "Quantity:"
    closeButton.src = "img/cart/close.svg";
    closeButton.setAttribute("data-id", id);

    image.src = img;
    priceInnerSpan.textContent = price;
    quantityInnerInput.value = "2"; // так-то будет приходить с бэка, но во входных данных нету, захардкодим.
    const splittedName = name.split(" ");
    productTitle.innerText = splittedName.splice(-1, 1)[0];
    productName.innerText = splittedName.join(" ");
    closeButton.addEventListener("click", () => removeFromCart(closeButton.dataset.id))

    wrapper.append(imageDiv, descriptionDiv);
        imageDiv.append(image);
        descriptionDiv.append(closeButton, productName, productTitle, paramsWrapper);
        paramsWrapper.append(priceOuterSpan, color, size, quantityOuterSpan);
            priceOuterSpan.append(priceInnerSpan);
            quantityOuterSpan.append(quantityInnerInput);

    return wrapper;
}

const cartRenderer = (data, targetDiv) => {
    const indexDiv = document.querySelector(".footer__cart");
    if (cartData.length === 0) {
        indexDiv.style.display = "none";
        return;
    }
    indexDiv.style.display = "flex";
    data.forEach(product => targetDiv.prepend(cartProductHTMLGenerator(product)));
}

const removeFromCart = (productID) => {
    for (let i = 0; i < cartData.length; i++) {
        if (cartData[i].id === productID) {
            cartData.splice(i, 1);
            break;
        }
        cartRenderer(cartData, document.querySelector(".cart__cards"));
    }
}

cartRenderer(cartData, document.querySelector(".cart__cards"));
