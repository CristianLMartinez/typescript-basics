var Role;
(function (Role) {
    Role["ADMIN"] = "Admin";
    Role["USER"] = "USER";
    Role["USER_READ"] = "USER_READ";
})(Role || (Role = {}));
var person = {
    name: "Cristian",
    age: 20,
    hobbies: ['swimming', "play"],
    role: Role.ADMIN
};
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobbie = _a[_i];
    console.log(hobbie);
}
console.log(person.name);
console.log(person.role);
