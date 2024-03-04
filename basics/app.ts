enum Role {
  ADMIN = "Admin",
  USER = "USER",
  USER_READ = "USER_READ",
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
} = {
  name: "Cristian",
  age: 20,
  hobbies: ["swimming", "play"],
  role: Role.ADMIN,
};

for (const hobbie of person.hobbies) {
  console.log(hobbie);
}

console.log(person.name);
console.log(person.role);
