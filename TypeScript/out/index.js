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
// We use Omit and not partial because we want the user to include evrything but id
// Refer TypeScript Utility Types documentation for more details
function addNewPizza(pizza) {
    const id = nextPizzaId++;
    const newPizza = Object.assign({ id }, pizza);
    menu.push(newPizza);
}
function placeOrder(pizzaName) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
    if (!selectedPizza) {
        return;
    }
    const newOrder = { id: nextOrderId++, name: selectedPizza, status: "ordered" };
    orderHistory.push(newOrder);
    cashInRegister += selectedPizza.price;
    return newOrder;
}
// TypeScript Generics
function addToArray(array, item) {
    array.push(item);
    return array;
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
addToArray(menu, { id: nextPizzaId++, name: "Carbonara", price: 12 }); // Using the generics fucntion
// A clear shortcoming is that, typescript won't check even if we pass any status instead of ordered ar completed
// Therefore we explicitly type the generic function call with Order type
addToArray(orderHistory, { id: nextOrderId++, name: { id: nextPizzaId, name: "Sausage", price: 12 }, status: "ordered" });
addNewPizza({ name: "Smoked Salmon", price: 10 });
addNewPizza({ name: "Chicken BBQ", price: 10 });
console.log(placeOrder("Margherita"));
console.log(cashInRegister);
console.log(completeOrder(2));
console.log("Details of the pizza: ", getPizzaDetail(3));
console.log("Details of the pizza: ", getPizzaDetail("Pepperoni"));
console.log(menu);
console.log(orderHistory);
//# sourceMappingURL=index.js.map