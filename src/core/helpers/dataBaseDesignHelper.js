// import { customers } from "../../data/customers";
// import { employees } from "../../data/employees";
// import { users } from "../../data/users";

// export default class DataBaseDesignHelper {
//   constructor() {
//     this.users = users;
//     this.employees = employees;
//     this.customers = customers;
//   }

//   // customer nesnesini tablolara hazır bir şekilde ekleyecek formata getirir.
//   separateCustomer(customer) {
//     return [
//       {
//         id: customer.id,
//         firstName: customer.firstName,
//         lastName: customer.lastName,
//         city: customer.city,
//         age: customer.age,
//       },
//       { id: customer.id, creditCardNumber: customer.creditCardNumber },
//     ];
//   }

//   //Join database tables
//   getCustomerById(id) {
//     let customer = customers.find((cus) => cus.id === id);
//     let user = users.find((user) => user.id === id);
//     user.creditCardNumber = customer.creditCardNumber;
//     return user;
//   }

//   getAllCustomers() {
//     return users.map((user) => {
//       let customer = customers.find((cus) => cus.id === user.id);
//       user.creditCardNumber = customer.creditCardNumber;
//     });
//   }

//   separateEmployee(customer) {
//     return [
//       {
//         id: customer.id,
//         firstName: customer.firstName,
//         lastName: customer.lastName,
//         city: customer.city,
//         age: customer.age,
//       },
//       { id: customer.id, salary: customer.salary },
//     ];
//   }

//   //Join database tables
//   getEmployeeById(id) {
//     let customer = customers.find((cus) => cus.id === id);
//     let user = users.find((user) => user.id === id);
//     user.salary = customer.salary;
//     return user;
//   }

//   getAllEmployees() {
//     return users.map((user) => {
//       let employee = employees.find((em) => em.id === user.id);
//       user.salary = employee.salary;
//     });
//   }
// }
