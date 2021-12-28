import Province from "./province.js";
import { expect } from "chai";
import { describe, it } from "mocha";

const sampleProvinceData = () => ({
  name: "Asia",
  producers: [
    { name: "Byzzantium", cost: 10, production: 9 },
    { name: "Attalia", cost: 12, production: 10 },
    { name: "Sinope", cost: 10, production: 6 },
  ],
  demand: 30,
  price: 20,
});

describe("province", () => {
  // const asia = new Province(sampleProvinceData()); // 이렇게 하면 안된다. 테스트 끼리 상호작용하게 하는 공유 픽스처를 생성하는 원인이 된다.
  let asia;
  beforeEach(() => {
    asia = new Province(sampleProvinceData());
  });

  it("shortfall", () => {
    expect(asia.shortfall).equal(5); // 검증
  });

  it("profit", () => {
    expect(asia.profit).equal(230);
  });

  it("change production", () => {
    asia.producers[0].production = 20;
    expect(asia.shortfall).equals(-6);
    expect(asia.profit).equals(292);
  });

  it("zero demand", () => {
    asia.demand = 0;
    expect(asia.shortfall).equals(-25);
    expect(asia.profit).equals(0);
  });

  it("negative demand", () => {
    asia.demand = -1;
    expect(asia.shortfall).equals(-26);
    expect(asia.profit).equals(-10);
  });

  it("empty  demand", () => {
    asia.demand = "";
    expect(asia.shortfall).NaN;
    expect(asia.profit).NaN;
  });
});

describe("no producers", () => {
  let noProducers;
  beforeEach(() => {
    const data = { name: "no producers", producers: [], demand: 30, price: 20 };
    noProducers = new Province(data);
  });

  it("shortfall", () => {
    expect(noProducers.shortfall).equal(30); // 검증
  });

  it("profit", () => {
    expect(noProducers.profit).equal(0);
  });
});

describe("string for producers", () => {
  it("", () => {
    const data = {
      name: "string producers",
      producers: "",
      demand: 30,
      price: 20,
    };
    const prov = new Province(data);
    expect(prov.shortfall).equals(0);
  });
});
/* 일반적으로 it 구문하나당 검흥도 하나씩만 하는 게 좋음 */
