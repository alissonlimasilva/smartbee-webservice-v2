module.exports = (sequelize, DataTypes) => {
  const colmeia = sequelize.define(
    "user",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      url_foto: DataTypes.STRING,
      confirmed: DataTypes.BOOLEAN,
      admin: DataTypes.BOOLEAN
    },
    { freezeTableName: true }
  );

  return colmeia;
};
