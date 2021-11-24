import { users } from "../data/users.js";

export default class UserRepository {
  constructor() {
    this.users = users;
  }

  getAllUsers() {
    return this.users;
  }

  getUserById(id) {
    return this.users.find((user) => user.id === id);
  }

  addUser(user) {
    this.users.push(user);
    return user;
  }

  deleteUser(user) {
    this.users = users.filter((u) => u.id != user.id);
  }

  updateUser(user) {
    const index = this.users.findIndex((u) => u.id === user.id);
    return this.users.splice(index, 1, user);
  }
}
