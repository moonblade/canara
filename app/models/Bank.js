/**
 * Bank Model
 */

module.exports = function(sequelize, DataTypes) {

    var Bank = sequelize.define('Bank', {
        bankId: DataTypes.INTEGER,
        bankName: DataTypes.STRING,
        creditAgencyCode: DataTypes.STRING,
        serviceAgencyCode: DataTypes.STRING,
    });

    return Bank;
};
