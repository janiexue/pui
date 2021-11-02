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

/* function onLoad() {

    // generate a random animal when the document opens
    let animal = generateRandomAnimal();
    console.log(animal)
    // update the page based on the animal properties
    document.getElementById("animal-properties").textContent = animal.name + ",  " + animal.age + " years old";
    let imageTag = document.getElementById("animal-img");
    imageTag.setAttribute("src", animal.image);
    imageTag.setAttribute("alt", animal.image_alt);
  
  } */

  function onLoad () {

    // get the savedAnimal in local storage if one exists
    var animal = JSON.parse(localStorage.getItem("savedAnimal"));
  
    //use a boolean to keep track of whether you have saved an animal
    var hasSavedAnimal = false;
  
    //check if the saved animal exists in local storage
    if (animal === null) 
    {
      //if there is no saved animal, the button should display the Save Animal text
      document.getElementById("save").textContent = "Save Animal";
  
      //if there is no saved animal, we generate one
      animal = generateRandomAnimal();
    } 
    else 
    {
      //if there is a saved animal, the button should display Clear Animal text
      document.getElementById("save").textContent = "Clear Animal";
  
      //change the boolean to note that this animal has been saved
      hasSavedAnimal = true;
    }
  
    // update the page based on the animal properties
    document.getElementById("animal-properties").textContent = animal.name + "  " + animal.age + " years old";
    document.getElementById("animal-img").setAttribute("src", animal.image);
  
  
    document.getElementById("save").addEventListener("click", function() {
      //when we are clearing the animal
      if (hasSavedAnimal) 
      {
        // clear the animal from the local storage
        localStorage.removeItem("savedAnimal");
  
        // if this button was clicked, hide button and show message to user
        document.getElementById("save").style.display = "none";
        document.getElementById("feedback").textContent = "Cleared!";
        document.getElementById("feedback").style.display = "block";
      }
      //when we are saving the animal
      else 
      {
        // save the animal to the local storage
        localStorage.setItem("savedAnimal", JSON.stringify(animal));
  
        // if this button was clicked, hide button and show message to user
        document.getElementById("save").style.display = "none";
        document.getElementById("feedback").textContent = "Saved!";
        document.getElementById("feedback").style.display = "block";
      }
    });
  
  };
  
