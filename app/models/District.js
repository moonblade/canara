
/**
	* District Model
	*/

module.exports = function(sequelize, DataTypes) {

	var District = sequelize.define('District', 
		{
			districtId: DataTypes.INTEGER,
			districtName: DataTypes.STRING,
			districtShort: DataTypes.STRING,
		},
		{
			associate: function(models) {
				// District.belongsTo(models.State);
			}
		}
	);

	return District;
};
