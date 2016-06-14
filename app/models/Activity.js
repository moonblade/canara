
/**
	* Activity Model
	*/

module.exports = function(sequelize, DataTypes) {

	var Activity = sequelize.define('Activity', 
		{
			activityId: DataTypes.INTEGER,
			activityName: DataTypes.STRING,
			activityCode: DataTypes.STRING,
			// subgroupId: DataTypes.INTEGER,
		},
		{
			associate: function(models) {
				Activity.belongsTo(models.Subgroup);
			}
		}
	);

	return Activity;
};
