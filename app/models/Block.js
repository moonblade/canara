
/**
	* Block Model
	*/

module.exports = function(sequelize, DataTypes) {

	var Block = sequelize.define('Block', 
		{
			blockId: DataTypes.INTEGER,
			blockName: DataTypes.STRING,
			blockCode: DataTypes.STRING,
		},
		{
			associate: function(models) {
				Block.belongsTo(models.District);
			}
		}
	);

	return Block;
};
