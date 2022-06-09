"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    toJSON() {
      const attributes = Object.assign({}, this.get());

      delete attributes.password;
      return attributes;
    }
    static associate({ Avatar, Movie, Ticker }) {
      this.hasMany(Avatar, {
        foreignKey: "userId",
        as: "avatars",
      });
      this.hasOne(Avatar, {
        foreignKey: "userId",
        as: "avatar",
      });
      this.belongsToMany(Movie, {through: Ticker, as: "movies" });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      numberPhone: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
