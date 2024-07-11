import { addSezoCrazyPet } from "./sezosCrazyPet.js";
import { addfabioCrazyPets } from "./fabioCrazyPets.js";
import { addJapCrazyPet } from "./japCrazyPets.js";
import { addThomasCrazyPet } from "./thomas-CrazyPet.js";
import { addjuCrazyPet } from "./ju-crazyPets.js";

const pets = [];

function crazyPets(array) {
  array = addSezoCrazyPet(array);

  array = addfabioCrazyPets(array);

  array = addJapCrazyPet(array);

  array = addThomasCrazyPet(array);

  return addjuCrazyPet(array);
}

console.log(crazyPets(pets));