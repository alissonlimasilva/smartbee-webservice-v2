module.exports = (sequelize, DataTypes) => {
  const sensor = sequelize.define(
    "sensor",
    {
      name: DataTypes.STRING
    },
    { freezeTableName: true }
  );

  return sensor;
};
