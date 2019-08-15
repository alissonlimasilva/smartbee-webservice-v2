module.exports = (sequelize, DataTypes) => {
  const coleta_data = sequelize.define(
    "coleta_data",
    {
      id_coleta: DataTypes.INTEGER,
      id_sensor: DataTypes.INTEGER,
      value: DataTypes.STRING
    },
    { freezeTableName: true }
  );
  return coleta_data;
};
