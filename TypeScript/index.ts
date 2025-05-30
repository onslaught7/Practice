type Menu = {
    name: string,
    price: number
}

type Order = {
    id: number,
    name: { name: string, price: number},
    status: string
}

const menu: Menu[] = [
    { name: "Margherita", price: 8},
    { name: "Pepporoni", price: 9},
    { name: "Hawaian", price: 8},
    { name: "Veggie", price: 9}
];

let cashInRegister: number = 100;
let nextOrderId: number = 1;
const orderQueue: Order[] = [];

function addNewPizza(pizza: Menu) {
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
        const newOrder: Order = { id: nextOrderId++, name: selectedPizza, status: "Ordered" }
        orderQueue.push(newOrder);
        cashInRegister += selectedPizza.price;
    } else {
        return;
    }
    return orderQueue;
}

function completeOrder(orderId: number) {
    const order = orderQueue.find(orderObj => orderObj.id == orderId);
    if (order) {
        order.status = "Completed";
    }
    return orderQueue;
}

console.log(addNewPizza({name: "Smoked Salmon", price: 10}));
console.log(placeOrder("Margherita"));
console.log(cashInRegister);
console.log(completeOrder(1));