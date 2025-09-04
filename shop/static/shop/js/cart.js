function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || {};
    let count = 0;
    for (let key in cart) {
        count += cart[key].quantity;
    }
    document.getElementById("cart-count").innerText = count;
}
updateCartCount();

function sideCartRender() {
    let cart = JSON.parse(localStorage.getItem("cart")) || {};
    const sidebar = document.getElementById("sidebar-items");
    sidebar.innerHTML = "";
    let total = 0;

    for (let id in cart) {
        const item = cart[id];
        let subtotal = item.price * item.quantity;
        total += subtotal;


        // Sidebar item
        const sideItem = document.createElement("div");
        sideItem.className = "d-flex align-items-center border-bottom pb-2 mb-2";
        sideItem.innerHTML = `
            <img src="${'/media/'+item.image || '/media/shop/images/no-image.png'}" alt="${item.name}"
                 class="me-2 rounded" style="width:50px; height:50px; object-fit:cover;">
            <div class="flex-grow-1">
                <h6 class="mb-1 small">${item.name}</h6>
                <small>$${item.price} × ${item.quantity} = $${subtotal.toFixed(2)}</small>
            </div>
            <button class="btn btn-sm btn-outline-danger ms-2" onclick=" removeCartItem('${id}')">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                </svg>
            </button>
        `;
        sidebar.appendChild(sideItem);
    }

//    document.getElementById("cart-total").innerText = total.toFixed(2);
    document.getElementById("sidebar-total").innerText = total.toFixed(2);

    updateCartCount();
}

function toggleSidebar() {
    const sidebar = document.getElementById("cart-sidebar");
    if (sidebar.style.transform === "translateX(0%)") {
        sidebar.style.transform = "translateX(100%)";
    } else {
        sidebar.style.transform = "translateX(0%)";
    }
  sideCartRender()
}

function removeCartItem(id) {
    delete cart[id];
    localStorage.setItem("cart", JSON.stringify(cart));
    sideCartRender();

}

sideCartRender()
