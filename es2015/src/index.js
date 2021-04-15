import foods from "./foods"
import { choice, remove } from "./helpers"

const random = choice(foods)
console.log(`I'd like one ${random}, please.`);
console.log(`Here you go: ${random}`);
console.log(`Delicious! May I have another?`);
remove(foods, random)
console.log(`I'm sorry, we're all out. We have ${foods.length} left.`)
