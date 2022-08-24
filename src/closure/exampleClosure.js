// Se tienen 100 camisas en una bodega, se debe ir mermando en el inventario cada que un usuario compre.
function stockShirts() {
    let totalStock = 100;

    function decrementStock(shirt) {
        totalStock -= shirt;
        if(totalStock > 0) {
            console.log(`The count of shirts in the stock is ${totalStock}`);
        }else {
            console.log(`Ya no hay mas camisas en el inventario, no puede comprar ${shirt} camisas`);
        }
    }

    return decrementStock;
}

const buyCustomer = stockShirts();
const buyCustomerPablo = stockShirts();

buyCustomer(12);
buyCustomer(1);
buyCustomer(8);
buyCustomer(90);

buyCustomerPablo(50);
buyCustomerPablo(8);
buyCustomerPablo(20);