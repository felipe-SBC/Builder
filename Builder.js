class BurgerBuilder {
    constructor() {
        this.burger ={};    
    }

    addBread(bread) {
        this.burger.bread = bread;
        return this;
    }

    addCheese(cheese) {
        this.burger.cheese = cheese;
        return this;
    }

    addMeat(meat) {
        this.burger.meat = meat;
        return this;
    }

    addVegetables(vegetables) {
        this.burger.vegetables = vegetables;
        return this;
    }

    build() {
        return this.burger;
    }

}
// Criando um Burger 
const burger = new BurgerBuilder()
    .addBread("Pão Australiano")
    .addCheese("Cheddar")
    .addMeat("Hamburguer")
    .addVegetables(["Tomate", "Alface", "Picles"])
    .build();

console.log(burger);
// Output: {}