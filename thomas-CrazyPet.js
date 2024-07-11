const thomasCrazyPet = {
  name: "Charles",
  art: "Tieger",
  alter: 12,
  farbe: "grün",
  faehigkeit: "fliegen",
  nahrung: "Fliegen",
};

export function addThomasCrazyPet(petArray) {
  petArray.push(thomasCrazyPet);
  return petArray;
}
