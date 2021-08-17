{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  //정보은닉
  //public
  //private
  //protected

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }
  class CoffeeMachine implements CoffeeMaker {
    private static BEAN_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0; //instance (object)level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    } //constructor는 class를 이용하여 Object를 만들 때 처음에 호출되는 함수이다. ,인스턴스를 만들 때 항상 호출되는 함수

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for bean should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEAN_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEAN_GRAM_PER_SHOT;
    }
    private preheat(): void {
      console.log("heating up..");
    }
    private extract(shots: number): CoffeeCup {
      console.log(`pulling ${shots} shots...`);
      return {
        shots,
        hasMilk: false,
      };
    }
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }
  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  maker.fillCoffeeBeans(32);
  maker.makeCoffee(2);
}
