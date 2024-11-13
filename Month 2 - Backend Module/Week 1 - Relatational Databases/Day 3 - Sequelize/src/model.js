const { db, DataTypes, Model } = require("../db/connection")

// Create our model
class Pokemon extends Model {}

// Initialize our model
Pokemon.init(
    {
        name: DataTypes.STRING,
        type: DataTypes.STRING,
        weight: DataTypes.DECIMAL(10, 2),
    },
    {
        sequelize: db,
        modelName: "Pokemon"
    }
)

module.exports = Pokemon