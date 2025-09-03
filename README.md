
# talle-2-servicios-web
taller-2




1. gestion de estudiantes (paradigma funcional)

/creamos la funcion de nota mayor a 80
// Extraemos las notas .map recorre el array  y nos devuelve un array con los grados de los estudiantes
// Filtramos ese aray que nos dio .map con .filter y le damos la funcion de que la nota sea mayor al limite


 //creamos la funcion promedio de notas
. mar para recorrer el array yextraemos solo las notas del estudiante stu.grade
 // .reduce no recorre el array que nos dio .map creamos el acumulador 
//  y le damos la funcion de sumar el acumulador mas la siguiente nota
// dividimos el total de las notas sobre la cantidad de estudiantes
 // .length para contar la cantidad de estudiantes

 //creamos la funncion mayores a 20 años de edad
 // Filtramos a cada estudiante por su edad .filter y le damos la funcion que extraiga las edades mayores
 // .map nos devuelve un array con los nombres de los estudiantes 
//creamos una funcion de nota mayos para los estudiates
 //el return nos retorna a los estudiantes con el metodo .reduce donde reducimos el array en un valor
 // max es el primer id del array y la s es la abrebitura de estudiante
 //si el grado de estudiante es mayor al primer id 
 // siempre nos va a retornar al grado del estudiante iterado 
//si no cumple esa condicion nos retorna el primer estudiante del array


2. calculadora de productos (Paradigma Orientado a
Objetos)

 //cramos el constructor con las caracteristicas de los productos
  // Método para actualizar el stock
 //sumamos las cantidades del stock de los productos
// Método para calcular descuento (en porcentaje)
//creamos la constante monto de descuento y multiplicamos el precio por porcentaje sobre 100 
//return this.price nos retorna el precio del producto y le restamos la constante conto a descontar
 // Método para mostrar información del producto
// getinfo en este metodo nos muestra toda la informacion de los productos

// Método estático: calcular el valor total del inventario
//products es el array que contiene todos los productos
 //total es es acumulador que inicia en 0 y pcada uno de los productos
 //la multiplicacion del preecio del producto por el stock la sumamos al acumulador
// Método para aplicar descuento por categoría
// en este metodo llamamos a catgoria y el metodo porcentaje de descuanto
 //comparamos la categoria actual y la categoriaa que le damos como parametro
//calculamos el precio aplicanto el porcentaje de descuento

const p1 = new Product(1, "Laptop", 1500, "Tecnología", 10); // cramos el objeto con los los productos y sus caracteristicas

// aca guardamos toods los productos en un array para trabajar mas facil
//mostramos la informacion del inventario original
// mostramos el valor total del inventario llamando al metodo gettotalvalue

//produc es un array de product y p es cada procucto aplicamos foreach para que recorra cada produto
//le aplicamos el metodo descuento por categoria y le damos como parametro la categoria y el descuanto
// nos devuelve los productos con el precio actualizado utilizando el metodo getinfo




3. validacion de datos (Paradigma Procedural)

//funcion  Validar formato de email (simple regex)
//en esta funcion cramos una constante donde tenemos el formato de lo que debe tener un correo
    const format = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//.tes lo usamos para validar que una cadena cumpla con el patron especifico
// si cumple nos retorna el email que demos por parametro

// funcion Validar contraseña fuerte:
 //mínimo 8 caracteres, una mayúscula, una minúscula, un número y un símbolo
 //.tes lo usamos para validar que una cadena cumpla con el patrones especifico
// si cumple nos retorna el email que demos por parametro

// Validar edad: número entero mayor o igual a 18
/Number.isInteger es un metodo que nos valida si un numero es entero sin decimales ni string
/nos devuelve un true o un false
// Validar producto completo: debe tener name (string), price (número positivo), category (string), stock (entero >= 0)
 /// typeof es un operador que nos devuelve una cadena 
///indicando el tipo de dato que le expresemos y .trim se usa para eliminarespacios
/// si el precio del producto es menor o igual a 0 devuelve false
return false;//verificamos que la categoria no tenga espacios .trim y que no este vacia ===""
 return false; //verificamos que el stock sea un numero entero y que sea mayor a cero 
//de lo contrario nos muestra un false



4. filtros avanzados (Paradigma Funcional)

//cramos la funcion  filtrar por precio con los parametros que necesitamos 
//filtramos todos los productos con .filter accedemos al precio del producto p.price
//cramos la condicion que si precio es mayor al minimo y menor al maximo
//se mantiene en el array 
//creamos la fincion agrupar por categoria y llamamos a products
// .reduce nos recorre el array y acumula un valos en el acumulador sum
 //esta linea verifica si el nombre de la categoria esta en el acumulador sum
//si esta, agrega el producto a esa misma categoria .push
// si la categoria no esta en el acumulador crea otro array con el primer producto de esta categoria
// nos retorna al acumulador para que en la siguiente iteración siga con el objeto actualizado.
// creamos un objeto vacio donde se va guardado la informacion
// creamos la funsion filtrar por marca
//.filter filtra el array de productos  ,y nos llama las  marcas de los productos   p.brand.. y nos devuelve otro array con productos 
//que cumplan la condicion  .tolowercase para que nos ignore mayusculas o minusculas es decir si la marca de los productos es igual a marca tru
//creamos la funcion estadisticas de categoria
// llamamos la funcion agrupar por categoria
//object.entries es un metodo que nos permite convertir 
//un onjeto en un array de clave .valor con .map creamos un nuevo array de categoria eitems
// a ese array le damos unas funciones. total,cantidad, promedio
//.reduce nos reecorre el array y nos devuelve un unico valor ,creamos un acumulador y p  para cada producto
//esto tendra la funcion de el acumulador + precio del producto
// . length lo usamos para contar los items
// promedio es igual a la divicion de total y cantidad
// esta linea nos retorna un objeto con 4 propiedades

// ceramos los console.log y llamamos las funciones creadas para products



5. transformacion de datos (Paradigma Funcional)

  // creamos la funcion calculaar iva
// agregamos precio con iva a cada producto con .map reecorremos el array de products dnde p es cada producto
// ...p copia todas las propiedades que tiene el producto
//calculamos el nuevo precio con iva
//para el total de iva usamos .reduce para que recorra los productos con iva
//y creamos el acumulador que inicia en 0 va a ir sumando todos los precios con iva
// nos retorna un objeto con dos propiedades productos con iva y la suma total con iva
//extraemos los valores del objeto que nos acaba de retornar y llamamos la funcion calcular iva 
// le damos el paraametro de que iva va a ser 0.19
// .tofixed lo usamos en el console.log para decir cuantos decimales queremos 
// tofixed nos devuelve un strig con los decimales que le digamos .tofixed(2)en este caso nos devuelve 2 decimales
 // creamos la funcion para agregar un campo de status, llamamos a products
//con . map receorremos el aray products y a laca producto le vamos agregar el campo de status
//si el stock del producto es mayor a 20 el status sera high
// si el stock del producto es mayor a 10 el status sera mediun
// si no se cumple ninguna de las anteriores condiciones el status sera laow
// nos retorna un objeto con las propiedades de cada producto o sea ...p y el campo de status
// 2. Función para resumen por categoría
// creamos la funcion resumen de inventario por categoria
//. reduce nos reduce el array aa uun unico valor , creamos el acumulador sum 
//Si la categoría del producto (p.category) no existe todavía en el acumulador, la crea con valores iniciales

// sum es elacumolador, llamamos a la categoria de cada producto y le sumamos de a 1 al elemento actual
// sumamos el stock de cada producto
// creamos la propiedad totalvalue que acumula el valor total de la categoria
//+= suma el nuevo valor al total anterior
// return sum nos retorna el acumulador
// {} creamos un objeto vacio el cual se ira llenando con la informacion de las funciones ya aplicadas



>>>>>>> 9e11a16 (ejercicios taller2 servicios web)
