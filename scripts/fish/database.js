let database = {
  fish: [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Salmon.svg/1024px-Salmon.svg.png",
      species: "Salmon",
      length: "3 feet",
      food: "Small fish and plankton",
      location: "Pacific Ocean",
      name: "Sammy",
    },
    {
      image: "https://dreamlightvalleywiki.com/images/c/c5/Tuna.png",
      species: "Tuna",
      length: "6 feet",
      food: "Squid and small fish",
      location: "Atlantic Ocean",
      name: "Toby",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Trout_-_Fish_%28PSF%29.png",
      species: "Trout",
      length: "1 feet",
      food: "Insects and Fish Eggs",
      location: "Rivers and Streams",
      name: "Terry",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Smallmouth_bass.png/800px-Smallmouth_bass.png",
      species: "Bass",
      length: "1 feet",
      food: "Insects and small fish",
      location: "North America",
      name: "Benny",
    },
    {
      image: "https://pngimg.com/d/fish_PNG25124.png",
      species: "Snapper",
      length: "2 feet",
      food: "Crustaceans and small fish",
      location: "Indian Ocean",
      name: "Sandy",
    },
    {
      image:
        "https://www.pngall.com/wp-content/uploads/5/Angelfish-PNG-Download-Image.png",
      species: "Angelfish",
      length: "4 feet",
      food: "Algae and small invertebrates",
      location: "Tropical reefs",
      name: "Angel",
    },
    {
      image:
        "https://png.pngtree.com/png-clipart/20220228/original/pngtree-ikan-guppy-png-image_7325704.png",
      species: "Guppy",
      length: "0.6 feet",
      food: "Algae and small insects",
      location: "Amazon River",
      name: "Gus",
    },
    {
      image: "https://pngimg.com/d/swordfish_PNG36.png",
      species: "Swordfish",
      length: "11 feet",
      food: "Squid and small fish",
      location: "Global oceans",
      name: "Swordy",
    },
    {
      image: "https://www.pngmart.com/files/22/Clown-Fish-PNG.png",
      species: "Clownfish",
      length: "3 feet",
      food: "Algae and small crustaceans",
      location: "Indo-Pacific",
      name: "Nemo",
    },
    {
      image: "https://www.pngmart.com/files/5/Catfish-Transparent-PNG.png",
      species: "Catfish",
      length: "2 feet",
      food: "Insects and small fish",
      location: "Freshwater rivers and lakes",
      name: "Whiskers",
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/018/876/102/original/3d-mackerel-fish-png.png",
      species: "Mackerel",
      length: "1 feet",
      food: "Small fish and plankton",
      location: "Atlantic and Pacific",
      name: "Mack",
    },
    {
      image: "https://www.pngmart.com/files/5/Halibut-PNG-Clipart.png",
      species: "Halibut",
      length: "4 feet",
      food: "Fish and crustaceans",
      location: "North Atlantic",
      name: "Hal",
    },
    {
      image:
        "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/4641/blowfish-clipart-md.png",
      species: "Pufferfish",
      length: "1 feet",
      food: "Crustaceans and mollusks",
      location: "Tropical and subtropical oceans",
      name: "Puffy",
    },
    {
      image:
        "https://www.aqueon.com/-/media/project/oneweb/aqueon/us/assets/care-sheets/boesemanirainbow_600x400.png",
      species: "Rainbowfish",
      length: "2 feet",
      food: "Small insects and crustaceans",
      location: "Australia and New Guinea",
      name: "Rainbow",
    },
    {
      image: "https://www.disneyclips.com/images4/images/flounder24.png",
      species: "Flounder",
      length: "1 feet",
      food: "Crustaceans and small fish",
      location: "Coastal waters",
      name: "Fluke",
    },
    {
      image:
        "https://png.pngtree.com/png-vector/20221214/ourmid/pngtree-stingray-png-image_6523158.png",
      species: "Manta Ray",
      length: "16 feet",
      food: "Plankton and small fish",
      location: "Tropical and subtropical waters",
      name: "Manny",
    },
    {
      image:
        "https://www.freeiconspng.com/thumbs/fish-png/little-blue-fish-png-2.png",
      species: "Haddock",
      length: "2 feet",
      food: "Crustaceans and small fish",
      location: "North Atlantic",
      name: "Haddy",
    },
    {
      image:
        "https://i.pinimg.com/originals/16/b9/12/16b912b2a32d4e6d1c77ef5ae9e57886.png",
      species: "Moray Eel",
      length: "8 feet",
      food: "Fish and cephalopods",
      location: "Tropical and temperate seas",
      name: "Milo",
    },
    {
      image:
        "https://www.freepnglogos.com/uploads/jellyfish-png/jellyfish-download-png-image-png-mart-11.png",
      species: "Jellyfish",
      length: "10 feet",
      food: "Plankton and small fish",
      location: "Global oceans",
      name: "Jelly",
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/018/876/156/original/atlantic-goliath-grouper-isolated-png.png",
      species: "Grouper",
      length: "3 feet",
      food: "Fish and crustaceans",
      location: "Tropical and subtropical waters",
      name: "Grumpy",
    },
  ],
};

let tipList = {
  tips: [
    {
      tip: "Regular Water Changes",
      tankCare:
        "Perform regular water changes (about 25% of the tank volume) every 1-2 weeks to maintain water quality and remove waste and toxins.",
    },
    {
      tip: "Proper Filtration",
      tankCare:
        "Use a suitable filter for your tank size and type of fish. Filters help remove debris, maintain water clarity, and support beneficial bacteria.",
    },
    {
      tip: "Monitor Water Parameters",
      tankCare:
        "Regularly test and monitor water parameters such as temperature, pH, ammonia, nitrite, and nitrate levels. Keep them within the appropriate range for your fish species.",
    },
    {
      tip: "Provide Adequate Lighting",
      tankCare:
        "Ensure your tank has appropriate lighting. Different fish require different lighting conditions. Consider a timer to maintain a consistent light cycle.",
    },
    {
      tip: "Proper Feeding",
      tankCare:
        "Feed your fish a balanced diet appropriate for their species. Avoid overfeeding, as excess food can lead to water quality issues.",
    },
  ],
};

export const getFish = () => {
  return database.fish.map((fish) => ({ ...fish }));
};

export const getTips = () => {
  return tipList.tips.map((tips) => ({ ...tips }));
};
