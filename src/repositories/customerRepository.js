// import DataBaseDesignHelper from "../core/helpers/dataBaseDesignHelper";
// import { customers } from "../data/customers";

// export default class CustomerRepository {
//   constructor(userRepository, dataBaseDesignHelper) {
//     this.userRepository = userRepository;
//     this.customers = customers;
//     this.dataBaseDesignHelper = dataBaseDesignHelper;
//   }

//   getAllCustomers() {
//     return this.dbHelper.getAllCustomers();
//   }

//   getCustomerById(id) {
//     return this.dbHelper.getCustomerById(id);
//   }

//   addCustomer(customer) {
//     this.customers.push(dbHelper.separateCustomer(customer)[1]);

//     //sends customer as user in userReporsitory for adding user data to configurate data
//     this.userRepository.addUser(dbHelper.separateCustomer(customer)[0]);
//     return customer;
//   }

//   deleteCustomer(id) {
//     this.customers = customers.filter((cus) => cus.id != customer.id);

//     //sends customer as user in userReporsitory for deleteing user data to configurate data
//     this.userRepository.deleteUser(dbHelper.separateCustomer(customer)[0]);
//   }

//   updateCustomer(customer) {
//     const index = this.customers.findIndex((cus) => cus.id === customer.id);
//     this.customers = customers.splice(index, 1, customer);

//     //sends customer as user in userReporsitory to configurate data
//     this.userRepository.updateUser(dbHelper.separateCustomer(customer)[0]);
//   }
// }
