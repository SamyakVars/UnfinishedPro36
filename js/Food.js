class Food{
    constructor(){
        this.img = loadImage("Images/Milk.png")

        this.foodStock = undefined;

    }

    display(){
        var x = 100
        var y = 100



        if(food != 0){
            for(var i = 0; i <= food; i++){
                foodObj.updateFoodStock()
                foodObj.deductFoodStock()
                if(i % 10 == 0){
                    x = 100;
                    y = y + 50
                }

                image(this.image, x, y, 50, 50)
                x = x + 30;
            }

        }
    }

    getFoodStock(){
        this.foodStock = database.ref("foodStock")
        this.foodStock.on("value", function(data){
            food = data.val()
        })
    }

    updateFoodStock(){
        food += 1
        database.ref("/").set({
            foodStock: food
        })
    }

    deductFoodStock(){
        database.ref("/").update({
            'foodStock': food
        })
    }
}

