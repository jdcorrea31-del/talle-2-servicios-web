const products = [
    {id:1, name:"laptop", price:999, category:"electronics", brand:"hp",stock:50},
    {id:2, name:"mouse", price:25, category:"electronics", brand:"logitech",stock:8},
    {id:3, name:"desk", price:200, category:"furniture", brand:"IKEA",stock:12},
    {id:4, name:"chair", price:150, category:"furniture", brand:"IKE",stock:3},
    {id:5, name:"keyboard", price:80, category:"electronics", brand:"corsair",stock:20}
];

function calculateIVA(products, IVA) {        // creamos la funcion calculaar iva
    const productsWithIVA = products.map(p => ({ // agregamos precio con iva a cada producto con .map reecorremos el array de products dnde p es cada producto
        ...p,                                    // ...p copia todas las propiedades que tiene el producto
        priceWithIVA: p.price * (1 + IVA)      //calculamos el nuevo precio con iva
    }));

    const totalWithIVA = productsWithIVA.reduce((sum, p) => sum + p.priceWithIVA, 0);//para el total de iva usamos .reduce para que recorra los productos con iva
                                                                                     //y creamos el acumulador que inicia en 0 va a ir sumando todos los precios con iva
    return { productsWithIVA, totalWithIVA };    // nos retorna un objeto con dos propiedades productos con iva y la suma total con iva
}

const { productsWithIVA, totalWithIVA } = calculateIVA(products, 0.19);//extraemos los valores del objeto que nos acaba de retornar y llamamos la funcion calcular iva 
                                                                       // le damos el paraametro de que iva va a ser 0.19

console.log(productsWithIVA);
console.log(`Total con IVA: ${totalWithIVA.toFixed(2)}`); // .tofixed lo usamos en el console.log para decir cuantos decimales queremos 
                                                          // tofixed nos devuelve un strig con los decimales que le digamos .tofixed(2)en este caso nos devuelve 2 decimales




function addstatus(products) { // creamos la funcion para agregar un campo de status, llamamos a products
    return products.map(p => {//con . map receorremos el aray products y a laca producto le vamos agregar el campo de status
        let status;
        if (p.stock >= 20) {  //si el stock del producto es mayor a 20 el status sera high
            status = "High";
        } else if (p.stock >= 10) {// si el stock del producto es mayor a 10 el status sera mediun
            status = "Medium";
        } else {
            status = "Low";     // si no se cumple ninguna de las anteriores condiciones el status sera laow
        }
        return { ...p, status }; // nos retorna un objeto con las propiedades de cada producto o sea ...p y el campo de status
    });
}

                                      // 2. Función para resumen por categoría
function inventorysummary (products) { // creamos la funcion resumen de inventario por categoria
    return products.reduce((sum, p) => { //. reduce nos reduce el array aa uun unico valor , creamos el acumulador sum 
        if (sum[p.category] === undefined) { //Si la categoría del producto (p.category) no existe todavía en el acumulador,
                                            // la crea con valores iniciales
            sum[p.category] = { amount: 0, stockTotal: 0, totalvalue: 0 };
        }
        sum[p.category].amount += 1;// sum es elacumolador, llamamos a la categoria de cada producto y le sumamos de a 1 al elemento actual
        sum[p.category].stockTotal += p.stock;   // sumamos el stock de cada producto
        sum[p.category].totalvalue += p.price * p.stock;// creamos la propiedad totalvalue que acumula el valor total de la categoria
                                                        //+= suma el nuevo valor al total anterior
        return sum;                // return sum nos retorna el acumulador
    }, {});                      // {} creamos un objeto vacio el cual se ira llenando con la informacion de las funciones ya aplicadas
}


const productswithstatus = addstatus(products);
console.log("Productos con status:");
console.log(productswithstatus);

const summary = inventorysummary(productswithstatus);
console.log("\nResumen de inventario:");
console.log(summary);