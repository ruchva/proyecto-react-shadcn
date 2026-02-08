const characterNames = ["goku", "vegeta", "poporo", "picoro"];

const [, , p2] = characterNames;

console.log({ p2 });

const returnArrayFn = () => {
  return ["abc", 123] as const;
};

const [letters, numbers] = returnArrayFn();

console.log(letters, numbers);

const useState = (value: string) => {
  return [value, (newValue: string) => console.log(newValue)] as const;
};

const [name, setName] = useState("Goku");
console.log(name); // Goku
setName("Vegeta"); // Imprime "Vegeta"
