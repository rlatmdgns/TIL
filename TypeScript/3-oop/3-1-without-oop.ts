{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEAN_GRAM_PER_SHOT: number = 7;
  let coffeeBeans: number = 0;

  // CoffeeCup 리턴되는 타입 정의
  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEAN_GRAM_PER_SHOT) {
      throw new Error("Not enough coffee beans!");
    }
    coffeeBeans -= shots * BEAN_GRAM_PER_SHOT;
    return {
      shots,
      hasMilk: false,
    };
  }
  coffeeBeans += 3 * BEAN_GRAM_PER_SHOT;
  const coffee = makeCoffee(2);
  console.log(coffee)
}
