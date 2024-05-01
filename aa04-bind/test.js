const Employee = require("./employee");

const employee1 = new Employee ("John Wick", "Dog Lover")
boundEmployee = employee1.sayName.bind(employee1)

// setTimeout(() => {
//     employee1.sayName()
// }, 2000)

setTimeout(boundEmployee, 2000)
