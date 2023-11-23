const { User } = require("../models/users");

const createUserDB = async (payload) => {
  const user = await User.findOne({ email: payload.email });

  if (user) {
    throw new Error("An account with that email already exists");
  }
  const newUser = new User(payload);
  await newUser.save();
  const { password, ...rest } = newUser.toObject();
  return rest;
};

const getUserByEmailDB = async (email) => {
  const user = await User.findOne({ email }).lean();
  return user;
};

const getUserByIdDB = async (id) => {
  const user = await User.findById(id).lean();
  const { password, ...rest } = user;
  return rest;
};

const updateUserAvatarDB = async (id, path) => {
  await User.updateOne({ _id: id }, { avatar: path });
};

module.exports = {
  createUserDB,
  getUserByEmailDB,
  getUserByIdDB,
  updateUserAvatarDB,
};
