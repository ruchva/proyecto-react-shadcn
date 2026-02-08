function greet(name: string) {
  return `hola ${name}`;
}

const greet2 = (name: string) => {
  return `hola ${name}`;
};
// declaramos como const en lugar de function
// lo que esto quiere decir es que ese const es el estado de memoria que estamso reservando
// la funciones flecha no cambia a lo que apunta el objeto THIS
// cuando enviamos una funcion anonima (callback) es mas facil de leer en forma de funcion flecha

const greet3 = (name: string) => `hey ${name}`;
// las funciones flecha se pueden simplificar, son las usadas por defecto
//
interface User {
  uid: string;
  username: string;
}

const getUser = () => {
  return {
    uid: "abc-123",
    username: "el_papu123",
  };
};

const message = greet("Goku");
const message2 = greet2("Vegeta");
console.log(message, message2);
