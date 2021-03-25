//TODO remove once the register workflow is implemented
const usr = {
  id: 0,
  username: "e",
  firstName: "e",
  lastName: "e",
  token: "fakeJWTtoken",
};
let users = JSON.parse(localStorage.getItem("users")) || [usr];

export const configureFakeBackend = () => {
  let realFetch = window.fetch;
  window.fetch = (url, opts) => {
    const { method, headers } = opts;
    const body = opts.body && JSON.parse(opts?.body);
    return new Promise((resolve, reject) => {
      const handleRoute = () => {
        switch (true) {
          case url.endsWith("/users/authenticate") && method === "POST":
            return authenticate();
          case url.endsWith("/users/register") && method === "POST":
            return register();
          case url.endsWith("/users") && method === "GET":
            return getUsers();
          case url.match(/\/users\/\d+$/) && method === "DELETE":
            return deleteUser();
          default:
            return realFetch(url, opts)
              .then((response) => resolve(response))
              .catch((error) => reject(error));
        }
      };
      setTimeout(handleRoute, 500);
      const authenticate = () => {
        const { username, password } = body;

        const user = users.find(
          (x) => x.username === username && x.password === password
        );

        if (!user) return error("Username or password is incorrect!");
        return ok({
          id: user.id,
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          token: "fakeJWTtoken",
        });
      };

      const register = () => {
        const user = body;
        if (users.find((x) => x.username === user.username)) {
          return error(`Username ${user.username} is already taken!`);
        }
        user.id = users.length ? Math.max(...users.map((x) => x.id)) + 1 : 1;
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        return ok();
      };
      const getUsers = () => {
        return !isLoggedIn() ? unauthorized() : ok(users);
      };
      const deleteUser = () => {
        if (!isLoggedIn) return unauthorized();
        users = users.filter((x) => x.id !== idFromUrl);
        localStorage.setItem("users", JSON.stringify(users));
      };
      const ok = (body) => {
        resolve({
          ok: true,
          text: () => Promise.resolve(JSON.stringify(body)),
        });
      };
      const unauthorized = () => {
        resolve({
          status: 401,
          text: () =>
            Promise.resolve(JSON.stringify({ message: "Unauthorized" })),
        });
      };

      const error = (message) => {
        resolve({
          status: 400,
          text: () => Promise.resolve(JSON.stringify({ message })),
        });
      };
      const isLoggedIn = () =>
        headers["Authorization"] === "Bearer fakeJWTtoken";
      const idFromUrl = () => {
        const urlItems = url.split("/");
        return parseInt(urlItems[urlItems.length - 1]);
      };
    });
  };
};
