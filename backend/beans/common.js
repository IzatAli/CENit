const {
  usersController,
  adminController,
  clientController,
} = require("../controllers");

const signUp = async (body) => {
  //apply validations
  if (!body.userName) {
    return Promise.reject({ error: "username is required" });
  }
  if (!body.password) {
    return Promise.reject({ error: "paswsord is required" });
  }
  if (!body.userType) {
    return Promise.reject({ error: "type is required" });
  }

  if (!body.data) {
    return Promise.reject({ error: "data is required" });
  }

  try {
    let result = null;
    const userType = body.userType;
    switch (userType) {
      case "admin":
        //apply admin fields validation here //home work
        if (!body.data.firstName) {
          return Promise.reject({ error: "First Name is required" });
        }
        if (!body.data.lastName) {
          return Promise.reject({ error: "Last Name is required" });
        }
        if (!body.data.age) {
          return Promise.reject({ error: "Age is required" });
        }
        if (!body.data.dob) {
          return Promise.reject({ error: "Date Of Birth is required" });
        }
        result = await adminController.addAdmin(body.data);
        break;
      case "client":
        //apply client fields validation here \\home work
        if (!body.data.firstName) {
          return Promise.reject({ error: "First Name is required" });
        }
        if (!body.data.lastName) {
          return Promise.reject({ error: "Last Name is required" });
        }
        if (!body.data.age) {
          return Promise.reject({ error: "Age is required" });
        }
        if (!body.data.dob) {
          return Promise.reject({ error: "Date Of Birth is required" });
        }
        result = await clientController.addClient(body.data);
        break;
      default:
        return Promise.reject({ error: "username is required" });
    }
    const userJson = {
      userName: body.userName,
      password: body.password, ///make this password encripteted \\\home work
      userType: {
        kind: userType,
        item: result._id, ///make user dynamics
      },
    };
    const user = await usersController.addUser(userJson);
    //we can send mail users form here
    return user;
  } catch (ex) {
    return Promise.reject({ error: ex });
  }
};

module.exports = {
  signUp,
};
