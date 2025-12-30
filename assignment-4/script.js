const buttons = document.querySelectorAll(".toggle-btn");
const cartBody = document.querySelector("#cart-body");
const total = document.querySelector("#total-amount");

let cart = [];

const updateTable = () => {
    cartBody.innerHTML = "";

    cart.forEach((item, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
        <td> ${index +1}</td>
        <td> ${item.name}</td>
        <td> ${item.price.toFixed(2)}</td>`;

        cartBody.appendChild(row);
    });
    updateTotal();
}

let updateTotal = () => {
    let totalPrice = cart.reduce((sum, item) => sum + item.price,0);
    total.textContent = `₹${totalPrice.toFixed(2)}`;
}

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        const name = button.dataset.name;
        const price =Number(button.dataset.price);
        const index = cart.findIndex(item => item.name == name);

        if (index === -1) {
        // ADD
        cart.push({ name, price });
        button.classList.remove("add");
        button.classList.add("remove");
        button.textContent = "Remove Item ⛔️";
      } else {
        // REMOVE
        cart.splice(index, 1);
        button.classList.remove("remove");
        button.classList.add("add");
        button.textContent = "Add Item ➕";
      }

      updateTable();
    }
    )
})

function scroll_to(){
document.getElementById("scroll").scrollIntoView({
    behavior : "smooth"
});
}

