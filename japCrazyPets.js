const japCrazyPet = {
  name: "Scalie",
  art: "Drache",
  alter: 257,
  farbe: "schwarz",
  faehigkeit: "Feueratem",
  nahrung: "Gold"
}

export function addJapCrazyPet(petArray) {
  petArray.push(japCrazyPet);
  return petArray;
}

// console.log(addJapCrazyPet([]));