import { readJSON } from "../fileController.js";
// import {statement} from "./statement-after.js";
import {htmlStatement} from "./statement-after.js";

const invoices = readJSON("invoices.json");
const plays = readJSON("plays.json");

invoices.forEach((invoice) => {
  console.log(htmlStatement(invoice, plays));
});
