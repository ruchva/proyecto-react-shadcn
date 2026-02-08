const person = {
  name: "tony",
  age: 45,
  key: "papu123.",
};

// const name = person.name;
// const key = person.key;
const { name, key } = person;
console.log({ name, key });

interface Hero {
  name: string;
  age: number;
  hey: string;
  rank?: string;
}

const useContext = ({ name, age, key, rank }: Hero) => {
  return {
    keyName: key,
    user: {
      name, // name: name
      age, // age: age
    },
    rank: rank,
  };
};

const context = useContext(person);
console.log(context);
