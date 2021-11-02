function RedPanda(name, age) {
    this.name = name;
    this.age = age;
    this.image = 'redpanda.png';
    this.image_alt = 'a red panda';
  }

function Tiger(name, age) {
    this.name = name;
    this.age = age;
   
    this.image = 'tiger.png';
    this.image_alt = 'A tiger';
  }

function Monkey(name, age) {
    this.name = name;
    this.age = age;
    
    this.image = 'monkey.png';
    this.image_alt = 'A monkey'; 
  }

let animals = [new RedPanda(), new Tiger(), new Monkey()];
let names = ["Sesame", "Cookie", "Banana", "Fluffy", "Lily"];

function getRandomIndex(maxIndex) {
    return Math.floor(Math.random() * maxIndex);
  }

function generateRandomName() {
    let randomIdx = getRandomIndex(5);
    return names[randomIdx];
  }

  function generateRandomAge() {
    return getRandomIndex(20);
  }

function generateRandomAnimal() {
    let randomIdx = getRandomIndex(animals.length);
    let randomAnimal = animals[randomIdx];

    if (randomAnimal instanceof RedPanda)
    {
        return new RedPanda(generateRandomName(), generateRandomAge());
    } 
    else if (randomAnimal instanceof Tiger) 
    {
        return new Tiger(generateRandomName(), generateRandomAge());
    } 
    else if (randomAnimal instanceof Monkey) 
    {
        return new Monkey(generateRandomName(), generateRandomAge());
    }
}

function onLoad() {

    // generate a random animal when the document opens
    let animal = generateRandomAnimal();
    console.log(animal)
    // update the page based on the animal properties
    document.getElementById("animal-properties").textContent = animal.name + ",  " + animal.age + " years old";
    let imageTag = document.getElementById("animal-img");
    imageTag.setAttribute("src", animal.image);
    imageTag.setAttribute("alt", animal.image_alt);
  
  }

