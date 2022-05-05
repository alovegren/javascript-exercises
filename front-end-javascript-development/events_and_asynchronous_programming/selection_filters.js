class Vertebrate {
  constructor(name, type, bloodType) {
    this.name = name;
    this.type = type;
    this.bloodType = bloodType;
  }

  qualities() {
    return ['Vertebrate', this.name, this.type, this.bloodType];
  }
}

class AnimalManager {
  constructor() {
    this.animals = [];
  }

  add(...animals) {
    animals.forEach(animal => {
      this.animals.push(animal);
    });
  }

  getAnimalsByProp(prop, value) {
    return this.animals.filter(animal => {
      return animal[prop] === value
    });
  }

  getAnimalByName(name) {
    return this.getAnimalsByProp('name', name)[0];
  }

  getAnimalsByType(type) {
    return this.getAnimalsByProp('type', type);
  }

  getAnimalsByBloodType(type) {
    return this.getAnimalsByProp('bloodType', type);
  }
}

const bear    = new Vertebrate('Bear', 'Mammal', 'Warm-blooded');
const turtle  = new Vertebrate('Turtle', null, 'Cold-blooded');
const whale   = new Vertebrate('Whale', 'Mammal', 'Warm-blooded');
const salmon  = new Vertebrate('Salmon', null, 'Cold-blooded');
const ostrich = new Vertebrate('Ostrich', 'Bird', 'Warm-blooded');

const manager = new AnimalManager()
manager.add(bear, turtle, whale, salmon, ostrich);

const animalClassifications = document.querySelector('select#animal-classifications');
const animals = document.querySelector('select#animals');

function displayAll(options) {
  options.forEach(option => {
    option.style.display = '';
  })
}

animalClassifications.addEventListener('change', event => {
  let animalOptions = animals.children;
  let selection = event.target.value;
  let allAnimals = manager.animals
  let qualifyingAnimals = allAnimals;

  displayAll(Array.from(animalOptions));

  if (selection === 'Warm-blooded' || selection === 'Cold-blooded') {
    qualifyingAnimals = manager.getAnimalsByBloodType(selection);
  } else if (selection === 'Mammal' || selection === 'Bird') {
    qualifyingAnimals = manager.getAnimalsByType(selection);
  }

  let excludedAnimals = allAnimals.filter(animal => {
    return !qualifyingAnimals.includes(animal);
  }).map(animal => animal.name);

  excludedAnimals.forEach(animal => {
    let option = document.querySelector(`option[value="${animal}"]`);
    option.style.display = 'none';
  });
});

animals.addEventListener('change', event => {
  const ALL_QUALITIES = ['Vertebrate', 'Warm-blooded', 'Cold-blooded', 'Mammal', 'Bird'];
  let selection = event.target.value;
  let animal = manager.getAnimalByName(selection);
  let animalClassificationOptions = animalClassifications.children;

  displayAll(Array.from(animalClassificationOptions));

  let excludedQualities = ALL_QUALITIES.filter(quality => {
    return !animal.qualities().includes(quality);
  });

  excludedQualities.forEach(quality => {
    let option = document.querySelector(`option[value="${quality}"]`);
    option.style.display = 'none';
  });
});

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  [animals, animalClassifications].forEach(dropdown => {
    displayAll(Array.from(dropdown.children));
  });
})