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
        weight: 1
    },
    {
        type: 'horse',
        name: 'pe de pano',
        age: 1,
        weight: 1
    }
]

// Reduce

const totalWeight = pets.reduce((total, pet) => {
    return {
        totalAge: total.totalAge + pet.age,
        totalWeight: total.totalWeight + pet.weight
    }
}, { totalAge: 0, totalWeight: 0 })

console.log(totalWeight)