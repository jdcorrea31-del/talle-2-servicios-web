const products= [
    {id:1, name:"laptop", price:999, category:"electronics", brand:"hp"},
    {id:2, name:"mouse", price:25, category:"electronics", brand:"logitech"},
    {id:3, name:"desk", price:200, category:"furniture", brand:"IKEA"},
    {id:4, name:"chair", price:150, category:"furniture", brand:"IKE"},
    {id:5, name:"keyboard", price:80, category:"electronics", brand:"corsair"}
]

function filterprice (products,min,max){ //cramos la funcion  filtrar por precio con los parametros que necesitamos 
    return products.filter(p => p.price >= min && p.price <= max); //filtramos todos los productos con .filter accedemos al precio del producto p.price
                                                                   //cramos la condicion que si precio es mayor al minimo y menor al maximo
                                                                   //se mantiene en el array 

}

function groupcategory(products) {         //creamos la fincion agrupar por categoria y llamamos a products
    return products.reduce((sum, prod) => { // .reduce nos recorre el array y acumula un valos en el acumulador sum
        if (prod.category in sum) {       //esta linea verifica si el nombre de la categoria esta en el acumulador sum
            sum[prod.category].push(prod); //si esta, agrega el producto a esa misma categoria .push

        } else {
            sum[prod.category] = [prod]; // si la categoria no esta en el acumulador crea otro array con el primer producto de esta categoria
        }
        return sum;// nos retorna al acumulador para que en la siguiente iteración siga con el objeto actualizado.
    }, {});// creamos un objeto vacio donde se va guardado la informacion
}



function filterbrand(products, brand) {                                        // creamos la funsion filtrar por marca
    return products.filter(p => p.brand.toLowerCase() === brand.toLowerCase());//.filter filtra el array de productos  ,y nos llama las  marcas de los productos   p.brand.. y nos devuelve otro array con productos 
                                                                               //que cumplan la condicion  .tolowercase para que nos ignore mayusculas o minusculas es decir si la marca de los productos es igual a marca tru
}



function statisticscategories(products) {     //creamos la funcion estadisticas de categoria
    const groups = groupcategory(products);// llamamos la funcion agrupar por categoria
    return Object.entries(groups).map(([category, items]) => {  //object.entries es un metodo que nos permite convertir 
                                                                //un onjeto en un array de clave .valor con .map creamos un nuevo array de categoria e items
                                                                // a ese array le damos unas funciones. total,cantidad, promedio
        const total = items.reduce((sum, p) => sum + p.price, 0); //.reduce nos reecorre el array y nos devuelve un unico valor ,creamos un acumulador y p  para cada producto
                                                                 //esto tendra la funcion de el acumulador + precio del producto
        const amount = items.length; // . length lo usamos para contar los items
        const average = total / amount; // promedio es igual a la divicion de total y cantidad
        return { category, amount, total, average }; // esta linea nos retorna un objeto con 4 propiedades
    });
}    



console.log("Filtrar por precio (30-100):", filterprice(products, 30, 100));            // ceramos los console.log y llamamos las funciones creadas para products
console.log("Filtrar por marca (Logitech):", filterbrand(products, "Logitech"));       
console.log("Agrupados por categoría:", groupcategory(products));
console.log("Estadísticas por categoría:", statisticscategories(products));