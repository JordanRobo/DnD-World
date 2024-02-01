const names = [
    {
    "race" : "Human",
    "names": [
        "Alaric",
        "Bianca",
        "Cedric",
        "Delilah",
        "Eamon",
        "Fiona",
        "Garrett",
        "Helena",
        "Ignacio",
        "Jocelyn",
        "Kiera",
        "Leif",
        "Maeve",
        "Nolan",
        "Ophelia",
        "Phoebe",
        "Quentin",
        "Rosalind",
        "Sage",
        "Theodora",
        "Uriel",
        "Vesper",
        "Wren",
        "Xander",
        "Yara",
        "Zara",
        "Aurelia",
        "Caden",
        "Denise",
        "Edric"
      ]
    },
      {
        "race": "Orc",
        "names": [
          "Garok",
          "Igrim",
          "Kethril",
          "Mezzik",
          "Obalax",
          "Rendak",
          "Shargu",
          "Thorgul",
          "Urkog",
          "Xorlak"
        ]
      },
      {
        "race": "Tiefling",
        "names": [
          "Asterius",
          "Cassandra",
          "Drakon",
          "Euryale",
          "Fenris",
          "Gorgon",
          "Helionym",
          "Ignatia",
          "Jaxartes",
          "Kaliopi"
        ]
      },
      {
        "race": "Halfling",
        "names": [
          "Aldan",
          "Bethrala",
          "Cedric",
          "Delwyn",
          "Eamonn",
          "Fiondel",
          "Garrick",
          "Helga",
          "Igneous",
          "Jocelynn"
        ]
      },
      {
        "race": "Dwarf",
        "names": [
          "Alaric",
          "Bianca",
          "Cedric",
          "Delilah",
          "Eamon",
          "Fiona",
          "Garrett",
          "Helena",
          "Ignacio",
          "Jocelyn"
        ]
      },
      {
        "race": "Half-Elf",
        "names": [
          "Kiera",
          "Leif",
          "Maeve",
          "Nolan",
          "Ophelia",
          "Phoebe",
          "Quentin",
          "Rosalind",
          "Sage",
          "Theodora"
        ]
      }
]

export function randomName(){
    const raceIndex = Math.floor(Math.random() * names.length);
    const race = names[raceIndex].race;
    const nameIndex = Math.floor(Math.random() * names[raceIndex].names.length);
    const name = names[raceIndex].names[nameIndex];
    return `${name} (${race})`;
}
console.log(randomName())