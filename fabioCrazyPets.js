const fabiosPets = {
  name: "fabius",
  art: "Zwerg",
  alter: 127,
  farbe: "dunkler als schwarz",
  faehigkeit: "Zwergisch sprechen",
  nahrung: "Drachenfleisch",
};

export function addfabioCrazyPets(user) {
  user.push(fabiosPets);
  return user;
}

//console.log(addfabioCrazyPets(user));
