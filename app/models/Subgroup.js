/**
 * Subgroup Model
 */

module.exports = function(sequelize, DataTypes) {

    var Subgroup = sequelize.define('Subgroup', {
        subgroupId: DataTypes.INTEGER,
        subgroupName: DataTypes.STRING,
        subgroupShort: DataTypes.STRING,
    }, {
        associate: function(models) {
            Subgroup.belongsTo(models.Groups);
        }
    });

    return Subgroup;
};
