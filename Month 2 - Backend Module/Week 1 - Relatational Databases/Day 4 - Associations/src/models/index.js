const Pokemon = require("./Pokemon.js");
const Trainer = require("./Trainer.js");
const Badge = require("./Badge.js");

// One to Many Relationship
Trainer.hasMany(Pokemon)
Pokemon.belongsTo(Trainer)

// Many to Many Relationship
Trainer.belongsToMany(Badge, { through: "TrainerBadges" })
Badge.belongsToMany(Trainer, { through: "TrainerBadges" })

module.exports = {
  Pokemon,
  Trainer,
  Badge,
};