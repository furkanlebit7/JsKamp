import SuccessDataResult from "../core/results/successDataResult.js";
import ErrorDataResult from "../core/results/errorDataResult.js";
import ErrorResult from "../core/results/errorResult.js";
import Validation from "../core/validation/validation.js";

export default class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  getAll() {
    const users = this.userRepository.getAllUsers();
    return new SuccessDataResult(
      "Kullanıcılar başarılı bir şekilde getirildi",
      users
    );
  }

  add(user) {
    if (!Validation.isName(user.firstName)) {
      return new ErrorDataResult(
        "First Name alanı boş olamaz veya özel işaret ve rakam içeremez",
        user.firstName
      );
    } else if (!Validation.isNumber(user.id)) {
      return new ErrorDataResult("Id formatını doğru giriniz", user.id);
    } else if (!Validation.isName(user.firstName)) {
      return new ErrorDataResult(
        "Last Name alanı boş olamaz veya özel işaret ve rakam içeremez",
        user.lastName
      );
    } else if (!Validation.isName(user.city)) {
      return new ErrorDataResult(
        "City alanı boş olamaz veya özel işaret ve rakam içeremez",
        user.city
      );
    } else if (!Validation.isNumber(user.age)) {
      return new ErrorDataResult("Yaş formatını doğru giriniz");
    }
    this.userRepository.addUser(user);
    return new SuccessDataResult(
      "Kullanıcı başarılı bir şekilde eklendi",
      user
    );
  }
  getById(id) {
    const user = this.userRepository.getUserById(id);
    if (!user) return new ErrorResult("Kullanıcı Bulunamadı");
    return new SuccessDataResult(user);
  }

  getUsersSorted() {
    let users = this.getAll();
    let sorted = users.data.sort((user1, user2) => {
      if (user1.firstName > user2.firstName) {
        return 1;
      } else if (user1.firstName === user2.firstName) {
        return 0;
      } else {
        return -1;
      }
    });
    return new SuccessDataResult(
      "Kullanıcılar başarılı biş şekilde sıralandı",
      sorted
    );
  }
}
