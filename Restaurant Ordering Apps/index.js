import { menuArray } from "./data.js";

// State management
let addedItemsArr = [];


// Event Listeners
document.addEventListener("click", function (e) {
  if (e.target.dataset.add) {
    addToOrder(e.target.dataset.add);
  } else if (e.target.dataset.remove) {
    removeFromOrder(e.target.dataset.remove);
  } else if (e.target.id === "complete-btn") {
    document.getElementById("modal-container").classList.remove("hidden");
  } else if (!e.target.closest(".modal-container")) {
    // Click occurred on the overlay, not the modal or its children
    document.getElementById("modal-container").classList.add("hidden");
  }
});

// Payment form handler
const paymentFormEl = document.getElementById("payment-form")
paymentFormEl.addEventListener("submit", function (e) {
  e.preventDefault();
  const paymentFormData = new FormData(paymentFormEl)
  const name = paymentFormData.get('name')
  document.getElementById("modal-container").classList.add("hidden");
  renderSuccessMessage(name);
});

// Menu rendering functions
function renderMenu() {
    let menuHtml = "";
    menuArray.forEach((item) => {
      const { name, ingredients, id, price, emoji } = item;
      menuHtml += `
      <div class="container-wrapper" >
          <div class="container">
              <p class="item-icon">${emoji}</p>
              <div class="item-details">
                  <h1 class="item-name">${name}</h1>
                  <p class="item-description">${ingredients}</p>
                  <p class="item-price">$${price}</p>
              </div>
              <button class="add-button" data-add=${id}>
              +
              </button>
          </div>
      </div>    
          `;
    });
    document.getElementById("menu").innerHTML = menuHtml;
  }


// Order management functions
function addToOrder(clickedItemId) {
    // Find and add clicked item to order array
  const targetItemObj = menuArray.filter(
    (obj) => obj.id === Number(clickedItemId)
  )[0];

  addedItemsArr.push(targetItemObj);
  // Show order summary and render updated order
  document.getElementById("order-summary").classList.remove("hidden");
  renderOrder(addedItemsArr);
}

function removeFromOrder(itemId) {
// Remove item from order array
  let newArr = addedItemsArr.filter((item) => item.id !== Number(itemId));
  addedItemsArr = newArr;
  // Update UI based on remaining items
  if (addedItemsArr.length) {
    renderOrder(addedItemsArr);
  } else {
    document.getElementById("order-summary").classList.add("hidden");
  }
}

function renderOrder(itemsArr) {
  // calculate the total price of order
  let totalOrder = itemsArr.reduce((sum, current) => sum + current.price, 0);
  // Generate HTML for order items
  let orderLinesHtml = "";
  itemsArr.forEach((item) => {
    orderLinesHtml += `
          <div class="order-line">
              <div class="name-container">
                  <p class="item-name">${item.name}</p>
                  <button class="remove-btn" data-remove=${item.id}>remove</button>
              </div>
              <p class="item-price">$${item.price}</p>
          </div>
          `;
  });
  document.getElementById("order-details").innerHTML = orderLinesHtml;
  document.getElementById("total-order").innerText = `$${totalOrder}`;
}

function renderSuccessMessage(name) {
    let message = `
      <div class="message-container">
          <p>Thanks, ${name}! Your order is on its way!</p>
      </div>
      `;
    document.getElementById("order-summary").innerHTML = message;
  }


// Initialize app
renderMenu();
