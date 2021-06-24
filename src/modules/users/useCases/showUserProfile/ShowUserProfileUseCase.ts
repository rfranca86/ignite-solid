import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const userProfile = this.usersRepository.findById(user_id);
    if (!userProfile) {
      throw new Error("User don't exist");
    }
    return userProfile;
  }
}

export { ShowUserProfileUseCase };
