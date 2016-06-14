
/**
	* Entry Model
	*/

module.exports = function(sequelize, DataTypes) {

	var Entry = sequelize.define('Entry', 
		{
			entryId: DataTypes.INTEGER,
			noOfAccounts: DataTypes.INTEGER,
			amount: DataTypes.INTEGER,
		},
		{
			associate: function(models) {
				Entry.belongsTo(models.Activity);
				Entry.belongsTo(models.BranchEntry);
			}
		}
	);

	return Entry;
};
