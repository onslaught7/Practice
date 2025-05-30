const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepporoni", price: 9 },
    { name: "Hawaian", price: 8 },
    { name: "Veggie", price: 9 }
];
let cashInRegister = 100;
let nextOrderId = 1;
const orderQueue = [];
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
        const newOrder = { id: nextOrderId++, name: selectedPizza, status: "Ordered" };
        orderQueue.push(newOrder);
        cashInRegister += selectedPizza.price;
    }
    else {
        return;
    }
    return orderQueue;
}
function completeOrder(orderId) {
    const order = orderQueue.find(orderObj => orderObj.id == orderId);
    if (order) {
        order.status = "Completed";
    }
    return orderQueue;
}
console.log(addNewPizza({ name: "Smoked Salmon", price: 10 }));
console.log(placeOrder("Margherita"));
console.log(cashInRegister);
console.log(completeOrder(1));
