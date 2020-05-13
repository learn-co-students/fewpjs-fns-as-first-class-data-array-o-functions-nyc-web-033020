const wakeDog = function wakeDog(dogName = "Snoop", dogBreed = "Poodle") {
    console.log(`Wake ${dogName} the ${dogBreed}`)
    return (`Wake ${dogName} the ${dogBreed}`)
}
const leashDog = function leashDog(dogName, dogBreed) {
return (`Leash ${dogName} the ${dogBreed}`)
}

const walkToPark = function(dogName, dogBreed) {
    return(`Walk to the park with ${dogName} the ${dogBreed}`)
}

const throwFrisbee = function(dogName, dogBreed) {
    return(`Throw the frisbee for ${dogName} the ${dogBreed}`)
}

const walkHome = function walkHome(dogName, dogBreed) {
    return(`Walk home with ${dogName} the ${dogBreed}`)
}

const unleashDog = function uinleashDog(dogName, dogBreed) {
    return (`Unleash ${dogName} the ${dogBreed}`)
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]
function exerciseDog(dogName, dogBreed){
    return routine.map(func => func(dogName, dogBreed))
}