const User = require("../../model/user.model");
const passwordHash = require("password-hash");

async function signup(req, res) {
  const { username, password, email } = req.body;
  if (!email || !password)
    return res.status(400).json({
      text: "invalid request"
    });

  const user = {
    username,
    email,
    password: passwordHash.generate(password)
  };

  try {
    const findUser = await User.findOne({
      email
    });
    if (findUser)
      return res.status(400).json({
        text: "user already exist"
      });
  } catch (e) {
    return res.status(400).json({ error });
  }

  try {
    const userData = new User(user);
    const userObject = await userData.save();
    return res.status(200).json({
      text: "Success",
      token: userObject.getToken(),
      user: user
    });
  } catch (e) {
    return res.status(500).json({ e });
  }
}

async function login(req, res) {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({
      text: "invalid request"
    });

  try {
    const foundUser = await User.findOne({ email });

    if (!foundUser)
      return res.status(401).json({
        text: "Identifiants invalides"
      });

    if (!foundUser.authenticate(password))
      return res.status(401).json({
        text: "Identifiants invalides"
      });

    return res.status(200).json({
      token: foundUser.getToken(),
      text: "Authentication success",
      user: foundUser
    });
  } catch (e) {
    return res.status(500).json({ e });
  }
}

async function update(req, res) {
  const { username, password, email, avatar } = req.body;
  const foundUser = await User.updateOne();
}

exports.signup = signup;
exports.login = login;
exports.update = update;
