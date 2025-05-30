var menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepporoni", price: 9 },
    { name: "Hawaian", price: 8 },
    { name: "Veggie", price: 9 }
];
var cashInRegister = 100;
var nextOrderId = 1;
var orderQueue = [];
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
    var selectedPizza = menu.find(function (pizzaObj) { return pizzaObj.name === pizzaName; });
    if (selectedPizza) {
        var newOrder = { id: nextOrderId++, name: selectedPizza, status: "Ordered" };
        orderQueue.push(newOrder);
        cashInRegister += selectedPizza.price;
    }
    else {
        return;
    }
    return orderQueue;
}
function completeOrder(orderId) {
    var order = orderQueue.find(function (orderObj) { return orderObj.id == orderId; });
    if (order) {
        order.status = "Completed";
    }
    return orderQueue;
}
console.log(addNewPizza({ name: "Smoked Salmon", price: 10 }));
console.log(placeOrder("Margherita"));
console.log(cashInRegister);
console.log(completeOrder(1));
