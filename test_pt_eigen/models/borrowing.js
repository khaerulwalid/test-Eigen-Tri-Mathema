'use strict';
const {
  Model
} = require('sequelize');
const { Sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
  class Borrowing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Borrowing.belongsTo(models.Book, {foreignKey: 'BookId'})
      Borrowing.belongsTo(models.Member, {foreignKey: 'MemberId'})
    }
  }
  Borrowing.init({
    MemberId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Member ID is required"
        },
        notNull : {
          msg: "Member ID is required"
        }
      }
    },
    BookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Book ID is required"
        },
        notNull : {
          msg: "Book ID is required"
        }
      }
    },
    borrow_date: {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW,
      allowNull: false,
    },
    return_date: {
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Borrowing',
  });
  return Borrowing;
};