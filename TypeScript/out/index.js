const menu = [
    { id: 1, name: "Margherita", price: 8 },
    { id: 2, name: "Pepperoni", price: 9 },
    { id: 3, name: "Hawaian", price: 8 },
    { id: 4, name: "Veggie", price: 9 }
];
let cashInRegister = 100;
let nextOrderId = 1;
const orderHistory = [];
function addNewPizza(pizza) {
    menu.push(pizza);
    return menu;
}
function placeOrder(pizzaName) {
    // for (const pizza of menu) {
    //     if (pizza.name === pizzaName) {
    //         cashInRegister += pizza.price;
    //         orderQueue.push(pizza);
    //         break;
    //     }
    // }
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
    if (selectedPizza) {
        const newOrder = { id: nextOrderId++, name: selectedPizza, status: "ordered" };
        orderHistory.push(newOrder);
        cashInRegister += selectedPizza.price;
    }
    else {
        return;
    }
    return orderHistory;
}
function completeOrder(orderId) {
    const order = orderHistory.find(orderObj => orderObj.id == orderId);
    if (order) {
        order.status = "completed";
    }
    return orderHistory;
}
export function getPizzaDetail(identifier) {
    if (typeof identifier === "string") {
        return menu.find(pizzaObj => pizzaObj.name.toLowerCase() === identifier.toLowerCase());
    }
    else if (typeof identifier === "number") {
        return menu.find(pizzaObj => pizzaObj.id === identifier);
    }
    else {
        throw new TypeError("Parameter `identifier` must be either a string or a number");
    }
}
console.log("Added new pizza: ", addNewPizza({ id: 5, name: "Smoked Salmon", price: 10 }));
console.log("Added new pizza: ", addNewPizza({ id: 6, name: "Chicken BBQ", price: 10 }));
console.log(placeOrder("Margherita"));
console.log(cashInRegister);
console.log(completeOrder(1));
console.log("Details of the pizza: ", getPizzaDetail(3));
console.log("Details of the pizza: ", getPizzaDetail("Pepperoni"));
//# sourceMappingURL=index.js.map