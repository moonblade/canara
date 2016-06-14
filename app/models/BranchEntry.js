
/**
	* BranchEntry Model
	*/

module.exports = function(sequelize, DataTypes) {

	var BranchEntry = sequelize.define('BranchEntry', 
		{
			branchEntryId: DataTypes.INTEGER,
			quarter: DataTypes.INTEGER,
			year: DataTypes.INTEGER,
		},
		{
			associate: function(models) {
				BranchEntry.belongsTo(models.Branch);
			}
		}
	);

	return BranchEntry;
};
