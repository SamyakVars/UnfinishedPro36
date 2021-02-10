var dog,sadDog,happyDog;

var addFood, feedPet, database;

var foodObj;

var foodStock = 0;

var food;

var actualFood = 0;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);

  database = firebase.database()
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15

  foodObj = new Food()
  foodObj.getFoodStock()
  // foodObj.updateFoodStock()
  // foodObj.deductFoodStock()
  
  addFood = createButton("Add Food")


}

function draw() {
  background(46,139,87);
  drawSprites();

  addFood.mousePressed(addMoreFood)


  foodObj.display()

  console.log(foodStock)
}

function addMoreFood(){
  food += 1
  database.ref("/").set({
    foodStock: food
  })
}


function showE(){
  console.log("Something went wrong while connecting")
}


