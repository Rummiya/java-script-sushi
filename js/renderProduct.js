const productContainer = document.querySelector('#product-container');

getProducts()

async function getProducts () {
    const response = await fetch('./js/product.json');
    
    const productsArray = await response.json();

    renderProduct(productsArray);
}

function renderProduct (productsArray) {
    productsArray.forEach(item => {
        const productHTML = `
            <div class="col-md-4">
                <div class="card mb-4" data-id="${item.id}">
                    <img class="product-img" src="img/roll/${item.imgSrc}" alt="">
                    <div class="card-body text-center">
                        <h4 class="item-title">${item.title}</h4>
                        <p>
                            <small data-items-in-box class="text-muted">${item.itemInBox} шт.</small>
                            <small>/</small>
                            <small class="price__weight">${item.weight}г.</small>
                        </p>

                        <div class="details-wrapper">
                            <div class="items counter-wrapper">
                                <div class="items__control" data-action="minus">-</div>
                                <div class="items__current" data-counter>1</div>
                                <div class="items__control" data-action="plus">+</div>
                            </div>

                            <div class="price">
                                <div class="price__currency">${item.price} ₽</div>
                            </div>
                        </div>

                        <button data-cart type="button" class="btn btn-block btn-outline-warning">Добавить в корзину</button>

                    </div>
                </div>
            </div>
        `

        productContainer.insertAdjacentHTML('beforeend', productHTML);
    });
}