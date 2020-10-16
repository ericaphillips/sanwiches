console.log("Welcome to the main module")
// 1. Define a function called "makeSandwich" that takes 4 parameters: protein, cheese, veggie, bread

const makeSandwich = (protein, cheese, veggie, bread) => {
    const newSandwich = {
        protein: protein,
        cheese: cheese,
        veggie: veggie,
        bread: bread,
    }
    return newSandwich
}
// 2. makeSandwich should create a new sandwich object with the 4 parameters as its key/value pairs
// 3. makeSandwich will return our newly created sandwich
// 4. Call it a few times passing in different arguments to make different sandwiches!

const chickenSand = makeSandwich("chicken", "gouda", "peppers", "rye")
const beefSand = makeSandwich("beef", "mozarella", "lettuce", "wheat")
const fakeSand = makeSandwich("tofu", "vegan cheddar", "tomato", "white")
console.log(chickenSand)
console.log(beefSand)
console.log(fakeSand)
console.log(`I'm eating a ${chickenSand.protein} sandwich with ${chickenSand.cheese} cheese and ${chickenSand.veggie}, on ${chickenSand.bread} bread`)
console.log(`I'm eating a ${beefSand.protein} sandwich with ${beefSand.cheese} cheese and ${beefSand.veggie}, on ${beefSand.bread} bread`)
console.log(`I'm eating a ${fakeSand.protein} sandwich with ${fakeSand.cheese} cheese and ${fakeSand.veggie}, on ${fakeSand.bread} bread`)