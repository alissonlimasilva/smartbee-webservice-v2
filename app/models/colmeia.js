module.exports = (sequelize, DataTypes) => {
  const colmeia = sequelize.define(
    "colmeia",
    {
      name: DataTypes.STRING
    },
    { freezeTableName: true }
  );

  return colmeia;
};
