const sezoCrazyPet = {
    name: "Bello",
    art: "Hund",
    alter: 3,
    farbe: "braun",
    faehigkeit: "Super-Schnüffler",
    nahrung: "Hundefutter"
};

// console.log(sezoCrazyPet);

export function addSezoCrazyPet(petArray) {
    petArray.push(sezoCrazyPet);
    return petArray;
}