function wakeDog(dogName, breedName) {
        console.log(`Wake ${dogName} the ${breedName}`)
        return `Wake ${dogName} the ${breedName}`
        }

function leashDog(dogName, breedName) {
        console.log(`Leash ${dogName} the ${breedName}`)
        return `Leash ${dogName} the ${breedName}`
        }

function walkToPark(dogName, breedName) {
        console.log(`Walk to the park with ${dogName} the ${breedName}`)
        return `Walk to the park with ${dogName} the ${breedName}`
        }

function throwFrisbee(dogName, breedName) {
        console.log(`Throw the frisbee for ${dogName} the ${breedName}`)
        return `Throw the frisbee for ${dogName} the ${breedName}`
        }

function walkHome(dogName, breedName) {
        console.log(`Walk home with ${dogName} the ${breedName}`)
        return `Walk home with ${dogName} the ${breedName}`
        }


function unleashDog(dogName, breedName) {
        console.log(`Unleash ${dogName} the ${breedName}`)
        return `Unleash ${dogName} the ${breedName}`
        }

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
    return routine.map(fn => fn(dogName, dogBreed))
}