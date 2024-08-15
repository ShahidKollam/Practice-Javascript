// use "this" value explicitly
// borrow methods from objects and pass other objects

let name = {
    firstName: "John",
    lastName: "Doe",
    fullName: function (place) {
        return this.firstName + " " + this.lastName + " " + place;
    },
};

console.log(name.fullName());

let name1 = {
    firstName: "shah",
    lastName: "ali",
};

let call = name.fullName.call(name1, "kerala");
console.log(call);


let apply = name.fullName.apply(name1, ["UP"]);
console.log(apply);


let bind = name.fullName.bind(name1, "Tamil");
console.log(bind());