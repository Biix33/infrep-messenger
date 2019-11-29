const mongoose = require("mongoose");
const passwordHash = require("password-hash");
const jwt = require("jwt-simple");
const config = require("../config/config");

const user = mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

user.methods = {
    authenticate: function (password) {
        return passwordHash.verify(password, this.password);
    },
    getToken: function () {
        return jwt.encode(this, config.secret);
    }
};

module.exports = mongoose.model("User", user);