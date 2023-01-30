import { config } from "../../../config/dev.js";
import { throwError } from "../../helpers/throwError.js";
import { usersRepo } from "./usersRepo.js";

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

export function usersService() {
  const { createUser, findByUsername } = usersRepo();

  async function signup({ username, password }) {
    if (!(username && password)) {
      throwError("All input is required", 400);
    }

    if (username.trim().length <= 3 || password.trim().length <= 3) {
      throwError("Username is too short", 400);
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    return createUser(username, encryptedPassword);
  }

  async function login({ username, password }) {
    if (!(username && password)) {
      throwError("All input is required", 400);
    }

    if (username.trim().length <= 3 || password.trim().length <= 3) {
      throwError("Username is too short", 400);
    }

    const user = await findByUsername(username);
    if (user) {
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (passwordCompare) {
        const token = jwt.sign(
          {
            id: user.id,
            username,
          },
          config.JWT_SECRET
        );

        delete user.dataValues.password;

        return { user, token };
      }
    } else {
      throwError("There is no user with this username. Register please", 400);
    }
  }

  return { signup, login };
}
