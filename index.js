//explicit

// function wakeDog() {
//     console.log("Wake Byron the poodle");
// }
// function leashDog() {
//     console.log("Leash Byron the poodle");
// }
// function walkToPark() {
//     console.log("Walk to the park with Byron the poodle");
// }
// function throwFrisbee() {
//     console.log("Throw the frisbee for Byron the poodle");
// }
// function walkHome() {
//     console.log("Walk home with Byron the poodle");
// }
// function unleashDog() {
//     console.log("Unleash Byron the poodle");
// }


//generalized

let wakeDog = function wakeDog(dogName="Bryon"
, dogBreed="Poodle") {
    console.log(`Wake ${dogName} the ${dogBreed}`)
    return `Wake ${dogName} the ${dogBreed}`
}
let leashDog = function leashDog(dogName="Bryon"
, dogBreed="Poodle") {
    console.log(`Leash ${dogName} the ${dogBreed}`)
    return `Leash ${dogName} the ${dogBreed}`
}
let walkToPark = function walkToPark(dogName="Bryon"
, dogBreed="Poodle") {
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`)
    return `Walk to the park with ${dogName} the ${dogBreed}`
}
let throwFrisbee = function throwFrisbee(dogName="Bryon"
, dogBreed="Poodle") {
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`)
    return `Throw the frisbee for ${dogName} the ${dogBreed}`
}
let walkHome = function walkHome(dogName="Bryon"
, dogBreed="Poodle") {
    console.log(`Walk home with ${dogName} the ${dogBreed}`)
    return `Walk home with ${dogName} the ${dogBreed}`
}
let unleashDog = function unleashDog(dogName="Bryon"
, dogBreed="Poodle") {
    console.log(`Unleash ${dogName} the ${dogBreed}`)
    return `Unleash ${dogName} the ${dogBreed}`
}


//lab
const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]   
function exerciseDog(dogName, dogBreed){
    return routine.map(func => func(dogName, dogBreed))
}