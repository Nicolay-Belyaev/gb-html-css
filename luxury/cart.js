const cartData = [
    {
        "img": "img/products/card-1.png",
        "name": "ELLERY X M'O CAPSULE",
        "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": "52$"
    },
    {
        "img": "img/products/card-2.png",
        "name": "ELLERY X M'O CAPSULE",
        "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": "52$"
    }
]


const cartProductHTMLGenerator = ({img, name, price}) => {
    const wrapper = document.createElement("div");

    const imageDiv = document.createElement("div");
    const image = document.createElement("img");

    const descriptionDiv = document.createElement("div");
    const closeButton = document.createElement("img");
    const productName = document.createElement("span");
    const title = document.createElement("span");

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
    title.className = "card__description-string card__description-name";
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

    image.src = img;
    productName.textContent = name;
    priceInnerSpan.textContent = price;
    quantityInnerInput.value = "2"; // так-то будет приходить с бэка, но во входных данных нету, захардкодим.

    wrapper.append(imageDiv, descriptionDiv);
        imageDiv.append(image);
        descriptionDiv.append(closeButton, productName, title, paramsWrapper);
        paramsWrapper.append(priceOuterSpan, color, size, quantityOuterSpan);
            priceOuterSpan.append(priceInnerSpan);
            quantityOuterSpan.append(quantityInnerInput);

    return wrapper;
}

const cartRenderer = (data, targetDiv) => {
    data.forEach(product => targetDiv.append(cartProductHTMLGenerator(product)));
}

cartRenderer(cartData, document.querySelector(".cart__cards"));
