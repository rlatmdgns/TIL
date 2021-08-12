{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    BEAN_GRAM_PER_SHOT: number = 7;
    coffeeBeans: number = 0;
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }
    static makeMachine(coffeeBeans: number): CoffeMaker {
      return new CoffeeMaker(coffeeBeans);
    }
    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * this.BEAN_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * this.BEAN_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }
  const maker = new CoffeeMaker(32);
  console.log(maker);
}
