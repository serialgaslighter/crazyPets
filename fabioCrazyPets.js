const user = {
    name: "fabius",
    art: "Zwerg",
    alter: 127,
    farbe: "dunkler als schwarz",
    faehigkeit: "Zwergisch sprechen",
    nahrung: "Drachenfleisch"
}

export function addfabioCrazyPets(user){
    let CrazyPetArray = [];
    CrazyPetArray.push(user);
    return CrazyPetArray;
}

console.log(addfabioCrazyPets(user));