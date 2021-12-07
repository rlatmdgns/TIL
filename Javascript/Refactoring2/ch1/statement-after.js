import createStatementData from "./createStatementData.js";

const usd = (aNumber) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(aNumber / 100);
};

const renderPlanText = (data) => {
  let result = `청구 내역 (고객명: ${data.customer})\n`;

  for (let perf of data.performances) {
    result += `  ${perf.play.name}: ${usd(perf.amount)} (${perf.audience}석)\n`;
  }

  result += `총액: ${usd(data.totalAmount)}\n`;
  result += `적립 포인트: ${data.totalVolumeCredits}점\n`;

  return result;
};

const renderHtml = (data) => {
  let result = `<h1>청구 내역 (고객명: ${data.customer})</h1>\n`;
  result += `<table>\n`;
  result = `<tr><th>연극</th><th>좌석</th><th>금액</th></tr>\n`;
  for (let perf of data.performances) {
    result += `<tr><td>${perf.play.name}</td> <td>(${perf.audience}석)</td>`;
    result += `<td>${usd(data.totalAmount)}</td></tr>\n`;
  }
  result += `</table>\n`;
  result += `<p>총액: ${usd(data.totalAmount)}\n</p>`;
  result += `<p>적립 포인트: ${data.totalVolumeCredits}점\n`;
  return result;
};

const statement = (invoice, plays) => {
  return renderPlanText(createStatementData(invoice, plays));
};

const htmlStatement = (invoice, plays) => {
  return renderHtml(createStatementData(invoice, plays));
};

export default statement;
