// Importing models for Pokemon, Trainer, and Badge from the models directory
const { Pokemon, Trainer, Badge } = require("./models/index");

// Main async function to handle database operations
async function main() {

  // Retrieve all trainers, Pokemon, and badges from the database
  const trainers = await Trainer.findAll();
  const pokemon = await Pokemon.findAll();
  const badges = await Badge.findAll();
  
  // Uncomment to log all Pokémon data
  console.log(pokemon)

  // Establish a one-to-one relationship: Assign the first Pokémon to the first trainer
  await trainers[0].addPokemon(pokemon[0]);

  // Establish a one-to-many relationship: Assign multiple Pokémon to the first trainer
  await trainers[0].addPokemons(pokemon[1], pokemon[2]);

  // Uncomment to log all trainer data
  // console.log(trainers)

  // Find a specific trainer by name and include their associated Pokémon in the result
  const trainerWithPokemon = await Trainer.findOne({
    where: {
      name: "Red"
    },
    include: Pokemon,
  });

  // Uncomment to view trainer with Pokémon data
  console.log(JSON.stringify(trainerWithPokemon, null, 2))

  // Assign a badge to the first trainer
  await trainers[0].addBadge(badges[0]);

  // Assign the same badge to the second trainer
  await trainers[1].addBadge(badges[0]);

  // Retrieve all trainers along with their associated badges
  const trainerWithBadges = await Trainer.findAll({
    include: Badge
  });

  // Log all trainers with their badges in a structured JSON format
  console.log(JSON.stringify(trainerWithBadges, null, 2));
}

// Execute the main function
main();
