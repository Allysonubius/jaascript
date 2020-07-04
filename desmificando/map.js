const pets = [
    //array pets
    {
        tye: 'dog',
        name: 'boll',
        age: 15,
        weight: 30
    },
    {
        type: 'cat',
        name: 'miau',
        age: 6,
        weight: 2
    },
    {
        type: 'dog',
        name: 'rex',
        age: 6,
        weight: 2
    },
    {

        type: 'dog',
        name: 'mingau',
        age: 6,
        weight: 2
    },
    {
        type: 'cat',
        name: 'marrom',
        age: 2,
        weight: 1
    },
    {
        type: 'fish',
        name: 'gulp',
        age: 1,
        weight: 0.01
    },
    {
        type: 'horse',
        name: 'pe de pano',
        age: 1,
        weight: 0.01
    }
]

/**
 * Map 
 * Retornar um novo array com a mesma quantidade de elementos que o array inicial
 */

// console.log(pets)

const petNames = pets.map((pet) => {
    return pet.name
})

console.log(petNames)