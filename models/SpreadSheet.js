const { Sequelize, DataTypes, Model } = require('sequelize');
const User = require('./User');


class SpreadSheet extends Model {}

SpreadSheet.init({
    id_user: DataTypes.BIGINT,
    name: DataTypes.STRING,
    data: DataTypes.TEXT,
}, {
    paranoid: true,
    freezeTableName: true,
    sequelize,
    modelName: 'SpreadSheet',
    tableName: 'user_spreadsheets'
});

SpreadSheet.prototype.toJSON = function() {
    let values = Object.assign({}, this.get());
    return values;
};

module.exports = SpreadSheet;