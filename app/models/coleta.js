module.exports = (sequelize, DataTypes) => {
  const coleta = sequelize.define(
    "coleta",
    {
      id_colmeia: DataTypes.INTEGER
    },
    { freezeTableName: true }
  );

  return coleta;
};
