'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class penalty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  penalty.init({
    MemberId: DataTypes.INTEGER,
    BookId: DataTypes.INTEGER,
    penalty_date: DataTypes.DATE,
    penalty_end_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'penalty',
  });
  return penalty;
};