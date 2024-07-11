const user = {
    name: "fabius",
    art: "Zwerg",
    alter: 127,
    farbe: "dunkler als schwarz",
    faehigkeit: "Zwergisch sprechen",
    nahrung: "Drachenfleisch"
}

export function addfabioCrazyPets(array){
    array.push(user);
    return array;
}

// console.log(addfabioCrazyPets(user));