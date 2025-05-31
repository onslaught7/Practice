let cashInRegister = 100;
let nextOrderId = 1;
let nextPizzaId = 1;
const orderHistory = [];
const menu = [
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Pepperoni", price: 9 },
    { id: nextPizzaId++, name: "Hawaian", price: 8 },
    { id: nextPizzaId++, name: "Veggie", price: 9 }
];
function addNewPizza(pizza) {
    menu.push(pizza);
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
    if (!selectedPizza) {
        return;
    }
    const newOrder = { id: nextOrderId++, name: selectedPizza, status: "ordered" };
    orderHistory.push(newOrder);
    cashInRegister += selectedPizza.price;
    return newOrder;
}
function completeOrder(orderId) {
    const order = orderHistory.find(orderObj => orderObj.id == orderId);
    if (!order) {
        return;
    }
    order.status = "completed";
    return order;
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
addNewPizza({ id: nextPizzaId++, name: "Smoked Salmon", price: 10 });
addNewPizza({ id: nextPizzaId++, name: "Chicken BBQ", price: 10 });
console.log(placeOrder("Margherita"));
console.log(cashInRegister);
console.log(completeOrder(1));
console.log("Details of the pizza: ", getPizzaDetail(3));
console.log("Details of the pizza: ", getPizzaDetail("Pepperoni"));
console.log(menu);
//# sourceMappingURL=index.js.map