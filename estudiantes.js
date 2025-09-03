//gestion de estudiantes


const students = [                                               
    {id:1, name: "pepe", age:21, grade:85, course: "javaScript"},
    {id:2, name: "sara", age:19, grade:92, course: "python"},
    {id:3, name: "julio", age:25, grade:78, course: "javaScript"},
    {id:4, name: "maria", age:17, grade:88, course: "java"},
    {id:5, name: "cesar", age:24, grade:88, course: "java"}


];

function majornote80(students, limite) { 
    return students
        .map(stu => stu.grade)          // Extraemos las notas .map recorre el array  y nos devuelve un array con los grados de los estudiantes
        .filter(nota => nota > limite); // Filtramos ese aray que nos dio .map con .filter y le damos la funcion de que la nota sea mayor al limite
}                                      //creamos la funcion de nota mayor a 80

console.log("estudiantes con nota mayor a 80:\n",majornote80(students, 80));






function averagegrades(students) {  //creamos la funcion promedio de notas
    const totalgrade = students
        .map(stu => stu.grade) //  . mar para recorrer el array yextraemos solo las notas del estudiante stu.grade
        .reduce((sum, not) => sum + not, 0); // .reduce no recorre el array que nos dio .map creamos el acumulador 
                                            //  y le damos la funcion de sumar el acumulador mas la siguiente nota

    return totalgrade / students.length; // dividimos el total de las notas sobre la cantidad de estudiantes
                                    // .length para contar la cantidad de estudiantes
}

console.log("promedio de motas:\n",averagegrades(students)); 




function over20yearsold(students) { //creamos la funncion mayores a 20 años de edad
    return students
        .filter(stu => stu.age > 20) // Filtramos a cada estudiante por su edad .filter y le damos la funcion que extraiga las edades mayores a 20
        .map(stu => stu.name);       // .map nos devuelve un array con los nombres de los estudiantes 
}

console.log("estudiantes mayores de 20 años:\n",over20yearsold(students));

function majornote(students) {           //creamos una funcion de nota mayos para los estudiates
    return students.reduce((max, s) => { //el return nos retorna a los estudiantes con el metodo .reduce donde reducimos el array en un valor
                                         // max es el primer id del array y la s es la abrebitura de estudiante
        if (s.grade > max.grade) {       //si el grado de estudiante es mayor all primer id 
                                         // siempre nos va a retornar al grado del estudiante iterado 
            return s;
        } else {
            return max;                //si no cumple esa condicion nos retorna el primer estudiante del array
        }
    });
}

const highnote = majornote(students);        
console.log("nota mas alta: \n", highnote );





