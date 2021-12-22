import { assert } from "chai";
import { describe, it } from "mocha";
import Province from "./province.js";

const sampleProvinceData = () => ({
  name: 'Asia',
  producers: [
    { name: 'Byzzantium', cost: 10, production: 9 },
    { name: 'Attalia', cost: 12, production: 10 },
    { name: 'Sinope', cost: 10, production: 6 },
  ],
  demand: 30,
  price: 20,
})

describe("province", () => {
  it("shortfall", () => {
    const asia = new Province(sampleProvinceData()); // 픽스처 설ㅓ
    assert.equal(asia.shortfall, 5); // 검증
  });
});
