export function usersRepo(model) {
  async function createUser(username, password) {
    const res = await model.create({ username, password });
    console.log(res);
    return res;
  }
  return { createUser };
}
