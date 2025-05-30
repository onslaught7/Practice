type Pizza = {
    name: string
    price: number
}

type Order = {
    id: number
    name: Pizza
    status: "ordered" | "completed"
}

const menu = [
    { name: "Margherita", price: 8},
    { name: "Pepporoni", price: 9},
    { name: "Hawaian", price: 8},
    { name: "Veggie", price: 9}
];

let cashInRegister: number = 100;
let nextOrderId: number = 1;
const orderHistory: Order[] = [];

function addNewPizza(pizza: Pizza) {
    menu.push(pizza);

    return menu;
}   

function placeOrder(pizzaName: string) {
    // for (const pizza of menu) {
    //     if (pizza.name === pizzaName) {
    //         cashInRegister += pizza.price;
    //         orderQueue.push(pizza);
    //         break;
    //     }
    // }
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
    if (selectedPizza) {
        const newOrder: Order = { id: nextOrderId++, name: selectedPizza, status: "ordered" }
        orderHistory.push(newOrder);
        cashInRegister += selectedPizza.price;
    } else {
        return;
    }
    return orderHistory;
}

function completeOrder(orderId: number) {
    const order = orderHistory.find(orderObj => orderObj.id == orderId);
    if (order) {
        order.status = "completed";
    }
    return orderHistory;
}

console.log(addNewPizza({name: "Smoked Salmon", price: 10}));
console.log(placeOrder("Margherita"));
console.log(cashInRegister);
console.log(completeOrder(1));