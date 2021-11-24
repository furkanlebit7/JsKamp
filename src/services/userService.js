import SuccessDataResult from "../core/results/successResult.js";
import ErrorResult from "../core/results/errorResult.js";

export default class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  getAll() {
    const users = this.userRepository.getAllUsers();
    return new SuccessDataResult(users);
  }

  getById(id) {
    const user = this.userRepository.getUserById(id);
    if (!user) return new ErrorResult("Kullanıcı Bulunamadı");
    return new SuccessDataResult(user);
  }
}
