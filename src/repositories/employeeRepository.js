// import { employees } from "../data/employees";

// export default class EmployeeRepository {
//   constructor(userRepository, dataBaseDesignHelper) {
//     this.employees = employees;
//     this.userRepository = userRepository;
//     this.dataBaseDesignHelper = dataBaseDesignHelper;
//   }

//   getAllEmployees() {
//     return dbHelper.getAllEmployees();
//   }

//   getEmployeeById(id) {
//     return dbHelper.getEmployeeById(id);
//   }

//   addEmployee(employee) {
//     this.employees.push(employee);

//     //sends employee as user in userReporsitory for adding user data to configurate data
//     this.userRepository.addUser(dbHelper.separateEmployee(customer)[0]);
//     return employee;
//   }

//   deleteEmployee(employee) {
//     this.employees = employees.filter((emp) => emp.id != employee.id);

//     //sends employee as user in userReporsitory for deleteing user data to configurate data
//     this.userRepository.deleteUser(dbHelper.separateEmployee(customer)[0]);
//   }

//   updateEmployee(employee) {
//     const index = this.employees.findIndex((emp) => emp.id === employee.id);
//     this.employees = employees.splice(index, 1, user);

//     //sends employee as user in userReporsitory for adding updateing data to configurate data
//     this.userRepository.updateUser(dbHelper.separateEmployee(customer)[0]);
//   }
// }
