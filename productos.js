class Product {                                       //cramos el constructor con las caracteristicas de los productos
    constructor(id, name, price, category, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.stock = stock;
    }

                                                                  // Método para actualizar el stock
    updateStock(quantity) {
        this.stock += quantity;                                   //sumamos las cantidades del stock de los productos
        console.log(`Nuevo stock de ${this.name}: ${this.stock}`);
    }

                                                                     // Método para calcular descuento (en porcentaje)
    calculateDiscount(discountPercent) {
        const discountAmount = (this.price * discountPercent) / 100;//creamos la constante monto de descuento y multiplicamos el precio por porcentaje sobre 100 
        return this.price - discountAmount;                         //return this.price nos retorna el precio del producto y le restamos la constante conto a descontar
    }

                                                                  // Método para mostrar información del producto
    getInfo() {                                                  // getinfo en este metodo nos muestra toda la informacion de los productos
        return `ID: ${this.id}, Nombre: ${this.name}, Precio: $${this.price}, Categoría: ${this.category}, Stock: ${this.stock}`;
    }

                                                                            // Método estático: calcular el valor total del inventario
    static getTotalValue(products) {
        return products.reduce((total, p) => total + (p.price * p.stock), 0); //products es el array que contiene todos los productos
    }                                                                        //total es es acumulador que inicia en 0 y pcada uno de los productos
                                                                             //la multiplicacion del preecio del producto por el stock la sumamos al acumulador

                                                        // Método para aplicar descuento por categoría
    applyCategoryDiscount(category, discountPercent) {  // en este metodo llamamos a catgoria y el metodo porcentaje de descuanto
        if (this.category === category) {                //comparamos la categoria actual y la categoriaa que le damos como parametro
            this.price = this.calculateDiscount(discountPercent); //calculamos el precio aplicanto el porcentaje de descuento
        }
    }
}

const p1 = new Product(1, "Laptop", 1500, "Tecnología", 10); // cramos el objeto con los los productos y sus caracteristicas
const p2 = new Product(2, "Celular", 800, "Tecnología", 15);
const p3 = new Product(3, "Silla Gamer", 300, "Muebles", 5);
const p4 = new Product(4, "Escritorio", 200, "Muebles", 8);
const p5 = new Product(5, "Camiseta", 20, "Ropa", 50);

const produc = [p1, p2, p3, p4, p5];// aca guardamos toods los productos en un array para trabajar mas facil

console.log("primer inventario\n")
produc.forEach(p => console.log(p.getInfo()));//mostramos la informacion del inventario original


console.log("Valor total del inventario:", Product.getTotalValue(produc)); // mostramos el valor total del inventario llamando al metodo gettotalvalue

console.log("inventario actualizado:\n")
produc.forEach(p => p.applyCategoryDiscount("Tecnología", 10));//produc es un array de product y p es cada procucto aplicamos foreach para que recorra cada produto
                                                              //le aplicamos el metodo descuento por categoria y le damos como parametro la categoria y el descuanto

produc.forEach(p => console.log(p.getInfo()));// en esta linea nos devuelve los productos con el precio actualizado utilizando el metodo getinfo

