type Pizza = {
    id: number
    name: string
    price: number
}

type Order = {
    id: number
    name: Pizza
    status: "ordered" | "completed"
}


let cashInRegister: number = 100;
let nextOrderId: number = 1;
let nextPizzaId: number = 1;
const orderHistory: Order[] = [];

const menu: Pizza[] = [
    { id: nextPizzaId++, name: "Margherita", price: 8},
    { id: nextPizzaId++, name: "Pepperoni", price: 9},
    { id: nextPizzaId++, name: "Hawaian", price: 8},
    { id: nextPizzaId++, name: "Veggie", price: 9}
];

// We use Omit and not partial because we want the user to include evrything but id
// Refer TypeScript Utility Types documentation for more details
function addNewPizza(pizza: Omit<Pizza, "id">): void {
    const id: number= nextPizzaId++;
    const newPizza: Pizza = {id, ...pizza};
    menu.push(newPizza);
}   

function placeOrder(pizzaName: string): Order | undefined {
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
    const newOrder: Order = { id: nextOrderId++, name: selectedPizza, status: "ordered" }
    orderHistory.push(newOrder);
    cashInRegister += selectedPizza.price;

    return newOrder;
}

function completeOrder(orderId: number): Order | undefined {
    const order = orderHistory.find(orderObj => orderObj.id == orderId);
    if (!order) {
        return; 
    }
    order.status = "completed";
    return order;
}

export function getPizzaDetail(identifier: string | number): Pizza | undefined {
    if (typeof identifier === "string") {
        return menu.find(pizzaObj => pizzaObj.name.toLowerCase() === identifier.toLowerCase());
    } else if (typeof identifier === "number") {
        return menu.find(pizzaObj => pizzaObj.id === identifier);
    } else {
        throw new TypeError("Parameter `identifier` must be either a string or a number");
    }
}

addNewPizza({name: "Smoked Salmon", price: 10});
addNewPizza({name: "Chicken BBQ", price: 10});
console.log(placeOrder("Margherita"));
console.log(cashInRegister);
console.log(completeOrder(1));
console.log("Details of the pizza: ", getPizzaDetail(3));
console.log("Details of the pizza: ", getPizzaDetail("Pepperoni"));
console.log(menu)