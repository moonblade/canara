/**
 * Groups Model
 */

module.exports = function(sequelize, DataTypes) {

    var Groups = sequelize.define('Groups', {
        groupId: DataTypes.INTEGER,
        groupName: DataTypes.STRING,
        groupShort: DataTypes.STRING,
    });

    return Groups;
};
