const { db } = require("../db/connection")
const Pokemon = require("./model")

async function main () {

    // Wait for our database to load up
    await db.sync({ force: true })

    const Pikachu = await Pokemon.create({
        name: "Pikachu",
        type: "Electric",
        weight: 6
    })
    // console.log(JSON.stringify(Pikachu, null, 2))
    // Make a lot of pokemons at once
    await Pokemon.bulkCreate([
        {
            name: "Bulbasaur",
            type: "Grass/Poison",
            weight: 6.9
        },
        {
            name: "Charmander",
            type: "Fire",
            weight: 8.5
        },
        {
            name: "Squirtle",
            type: "Water",
            weight: 9
        },
        {
            name: "Gyarados",
            type: "Water",
            weight: 15
        }
    ])

    // Find All Pokemons
    // console.log(await Pokemon.findAll())

    // Find all the water pokemons
    const waterPokemons = await Pokemon.findAll({
        where: { type: "Water"}
    })
    // console.log(waterPokemons)

    // Update a pokemon
    const updatedPokemon = await Pokemon.update(
        { name: "Ivysaur", weight: 13},
        { where: {name: "Bulbasaur" }}
    )
    console.log(await Pokemon.findAll())

    // Delete

    const deletedPokemon = await Pokemon.destroy(
        {where:{name: 'Squirtle'}}
    )

    console.log(await Pokemon.findAll())

}

main()