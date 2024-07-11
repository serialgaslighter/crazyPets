const juCrazyPet = [
	{
		name: ["Pika"],
		art: ["Maus-Polemon"],
		alter: [1],
		farbe: ["gelb"],
		faehigkeit: ["Donnerblitz"],
		nahrung: ["Pfirsich"],
	},
];

export function addjuCrazyPet(petArray) {
	petArray.push(juCrazyPet);
	return petArray;
}
