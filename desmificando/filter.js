const pets = [
    // pets
    {
        name: 'rex',
        type: 'dog',
        age: 10
    },
    {
        name: 'miau',
        type: 'cat',
        age: 2
    },
    {
        name: 'gulp',
        type: 'fish',
        age: 1
    }
]

//functions extern

const eMenorQueCinco = (numero) => {
    return numero < 5
}


//filter age pets

const newPets = pets.filter(({ age }) => eMenorQueCinco(age))



console.log(newPets);