{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  //정보은닉
  //public
  //private
  //protected
  class CoffeeMaker {
    private static BEAN_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0; //instance (object)level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    } //constructor는 class를 이용하여 Object를 만들 때 처음에 호출되는 함수이다. ,인스턴스를 만들 때 항상 호출되는 함수

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for bean should be greater than 0"ß);
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEAN_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEAN_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }
  const maker = CoffeeMaker.makeMachine(2);
  maker.fillCoffeeBeans(2)
}
