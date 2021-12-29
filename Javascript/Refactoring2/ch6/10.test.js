import { assert } from "chai";
import { it } from "mocha";
import cloneDeep from "lodash/cloneDeep.js ";
import { enrichReading } from "./10.js";

it("check reading uncharged", () => {
  const baseReding = () => ({
    customer: "ivan",
    quantity: 10,
    month: 5,
    year: 2017,
  });
  const oracle = cloneDeep(baseReding);
  enrichReading(baseReding);
  assert(baseReding, oracle);
});
