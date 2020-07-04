const { sequelize } = require("../../src/app/models");

module.exports = () => {
  //Vai percorrrer todos models que estão dentro do sequelize
  return Promise.all(
    Object.keys(sequelize.models).map((key) => {
      return sequelize.models[key].destroy({ truncate: true, force: true });
    })
  );
};
