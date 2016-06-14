
/**
	* Branch Model
	*/

module.exports = function(sequelize, DataTypes) {

	var Branch = sequelize.define('Branch', 
		{
			branchId: DataTypes.INTEGER,
			branchName: DataTypes.STRING,
			uniformBranchCode: DataTypes.STRING,
		},
		{
			associate: function(models) {
				Branch.belongsTo(models.Block);
				Branch.belongsTo(models.Bank);
			}
		}
	);

	return Branch;
};
