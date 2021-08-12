{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    BEAN_GRAM_PER_SHOT: number = 7;
    // static BEAN_GRAM_PER_SHOT: number = 7; //class Level - 한번만 생성
    coffeeBeans: number = 0; //instance (object)level
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }//constructor는 class를 이용하여 Object를 만들 때 처음에 호출되는 함수이다. ,인스턴스를 만들 때 항상 호출되는 함수
    // 
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
  const maker = new CoffeeMaker(32);  //new라는 것은 class의 인스턴스를 만든다. () 생성자 호출  
  console.log(maker)
  console.log(maker.makeCoffee(2))
}
