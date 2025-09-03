// Validar formato de email (simple regex)
function validateEmail(email) {                 //en esta funcion cramos una constante donde tenemos el formato de lo que debe tener un correo
    const format = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return format.test(email);                  //.tes lo usamos para validar que una cadena cumpla con el patrones especifico
                                                // si cumple nos retorna el email que demos por parametro
}

  // Validar contraseña fuerte: 
function validatePassword(password) {
    const format = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; //mínimo 8 caracteres, una mayúscula, una minúscula, un número y un símbolo
    return format.test(password);
}

                                                  // Validar edad: número entero mayor o igual a 18
function validateAge(age) {
    return Number.isInteger(age) && age >= 18;   //Number.isInteger es un metodo que nos valida si un numero es entero sin decimales ni string
                                                 //nos devuelve un true o un false
}

                                                                            // Validar producto completo: debe tener name (string), price (número positivo), category (string), stock (entero >= 0)
function validateProduct(product) {
    if (typeof product.name !== "string" || product.name.trim() === "") return false; /// typeof es un operador que nos devuelve una cadena 
                                                                                     ///indicando el tipo de dato que le expresemos y .trim se usa para eliminar espacios
    if (typeof product.price !== "number" || product.price <= 0) return false;   /// si el precio del producto es menor o igual a 0 devuelve false
    if (typeof product.category !== "string" || product.category.trim() === "") return false;//verificamos que la categoria no tenga espacios .trim y que no este vacia ===""
    if (!Number.isInteger(product.stock) || product.stock < 0) return false; //verificamos que el stock sea un numero entero y que sea mayor a cero 
                                                                             //de lo contrario nos muestra un false
    return true;
}

console.log("correo:\n",validateEmail("correo@ejemplo.com")); // true
console.log(validateEmail("mal-formato.com\n"));    // false

console.log("clave:\n",validatePassword("StrongP@ss1"));     // true        //llamamos las funciones creadas y le damos los datos para comfirmar
console.log(validatePassword("weakpass\n"));        // false

console.log("edad:\n",validateAge(24));                     // true
console.log(validateAge(16),"\n");                     // false

const validProduct = { name: "Laptop", price: 1500, category: "Tecnología", stock: 10 }; // cramos un producto que cumpla con las condiciones 
const invalidProduct = { name: "", price: -50, category: "", stock: -2 };               // y cramos uno que no cumpla con las condiciones para validar el codigo

console.log("producto:\n",validateProduct(validProduct));     // true  //llamamos las funciones para los productos que creamos
console.log(validateProduct(invalidProduct));   // false
