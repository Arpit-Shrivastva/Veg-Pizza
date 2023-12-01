// Write solution code here to dynamically add the form fields 
let array = [];
// define funtion submitOrder() to save the order details on clicking the submit button
function submitOrder() {

    const ord = document.getElementById("dynamic-content");
    const newDiv = document.createElement("div");
    ord.appendChild(newDiv);


    const category = document.createElement("input");
    category.style.border = "none";
    category.style.borderBottom = "2px solid black";
    category.style.width = "135px"
    category.style.margin = " 0 10px"
    newDiv.appendChild(category);


    const item = document.createElement("input");
    item.style.border = "none";
    item.style.borderBottom = "2px solid black";
    item.style.width = "150px"
    item.style.marginLeft = "65px";
    newDiv.appendChild(item);


    const price = document.createElement("input");
    price.style.border = "none";
    price.style.borderBottom = "2px solid black";
    price.style.width = "140px"
    price.style.marginLeft = "35px";
    newDiv.appendChild(price);


    const quantity = document.createElement("input");
    quantity.style.border = "none";
    quantity.style.borderBottom = "2px solid black";
    quantity.style.width = "145px";
    quantity.style.marginLeft = "30px";
    newDiv.appendChild(quantity);


    const amount = document.createElement("input");
    amount.style.border = "none";
    amount.style.borderBottom = "2px solid black";
    amount.style.width = "130px"
    amount.style.marginLeft = "30px";
    newDiv.appendChild(amount);


    const addButton = document.createElement("button");
    addButton.style.borderRadius = "25px";
    addButton.classList.add("btn-primary")
    addButton.innerHTML = "ADD";
    addButton.style.padding = "3px"
    addButton.style.marginLeft = "20px";
    newDiv.appendChild(addButton);

    item.onkeydown = (event) => {
        if (event.key == "Tab") {
            if (category.value === "starters" && item.value === "Garlic Bread")
            price.value = "2.8";
        }
        if (event.key === "Tab") {
            if (category.value === "Main Meal" && item.value === "Veg Family Meal")
                price.value = "13";
        }
    }

    quantity.onkeydown = (event) => {
        if (event.key == "Tab") {
            return amount.value = price.value * quantity.value;
        }
    }

    addButton.onclick = (event) => {
        event.preventDefault();
        let totalAmount = document.getElementById("total-amount")
        let curAmount = parseFloat(amount.value);
        if (totalAmount.value > 0)
            totalAmount.value = curAmount + parseFloat(totalAmount.value);
        else {
            totalAmount.value = curAmount;
        }
    }

    let orderVal = {
        category: category.value,
        item: item.value,
        price: price.value,
        quantity: quantity.value,
        amount: amount.value
    }
    array.push(orderVal);


    document.getElementById("final-order").onclick = () => {
        const totalAmount = document.getElementById("total-amount").value;
        alert("Order Placed Successfully!! $" + totalAmount);
    }
}

// do not delete the code given below, it is written to export the functions to be tested
module.exports = submitOrder;