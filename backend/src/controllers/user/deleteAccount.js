const User = require("../../database/models/User");
const errorHandler = require("../../helpers/errorHandler");
const deleteFile = require("../../helpers/deleteFile");

async function deleteAccount(req, res) {
  try {
    const { _id } = req.userData;
    const user = await User.findByIdAndDelete(_id);
    if (!user) {
      throw new Error("NOT_FOUND");
    }

    if (user && user.avatar) {
      deleteFile(user.avatar);
    }

    res.send({ ok: true });
  } catch (error) {
    console.log(error, "changeUsername");
    const errRes = customErrorHandler(error);
    res.status(errRes.status).json(errRes.errors);
  }
}

function customErrorHandler(error) {
  if (error.message === "NOT_FOUND") {
    return {
      status: 401,
      errors: {
        msg: "User not found.",
      },
    };
  }
  return errorHandler(error);
}

module.exports = deleteAccount;
