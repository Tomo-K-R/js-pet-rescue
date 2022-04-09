const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5,
    sleep: function () {
      console.log(`${this.name} needs a nap. Zzz…`);
      this.isTired = 1;
    },
    play: function () {
      if (this.isTired === 10) {
        console.log("Too tired to play");
        return this.sleep();
      } else console.log(`Yay! ${this.name} loves to play!`);
      this.isTired += 1;
    }
  };
  return pet;
};

const sora = createPet("Sora", "feret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Flancine", "turtle");

// console.log(sora, clover, baxter, cleo, francine);
// {name: "Sora", species: "feret", isTired: 5, sleep: ƒ sleep(), play: ƒ play()}
// {name: "Clover", species: "rabbit", isTired: 5, sleep: ƒ sleep(), play: ƒ play()}
// {name: "Baxter", species: "hamster", isTired: 5, sleep: ƒ sleep(), play: ƒ play()}
// {name: "Cleo", species: "rat", isTired: 5, sleep: ƒ sleep(), play: ƒ play()}
// {name: "Flancine", species: "turtle", isTired: 5, sleep: ƒ sleep(), play: ƒ play()}

// sora.sleep();
// Sora needs a nap. Zzz…
// baxter.play();
// Yay! Baxter loves to play!

// console.log(sora.isTired);
// 1
// console.log(baxter.isTired);
// 6

clover.isTired = 8;
francine.isTired = 9;

const allPets = [sora, clover, baxter, cleo, francine];

// console.log(allPets);

const showPets = function (petArrey) {
  pets.innerHTML = "";
  for (let pet of petArrey) {
    let status = "ready to play!";
    if (pet.isTired >= 7) {
      status = "sleeping";
    }
    const li = document.createElement("li");
    li.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species} is ${status}`;
    pets.append(li);
  }
};

statusButton.addEventListener("click", function () {
  showPets(allPets);
});
