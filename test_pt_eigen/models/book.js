'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book.hasMany(models.Borrowing, {foreignKey: 'BookId'})
    }
  }
  Book.init({
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Code is required"
        },
        notNull: {
          msg: "Code is required"
        }
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Title is required"
        },
        notNull: {
          msg: "Title is required"
        }
      }
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Author is required"
        },
        notNull: {
          msg: "Author is required"
        }
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Stock is required"
        },
        notNull: {
          msg: "Stock is required"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};