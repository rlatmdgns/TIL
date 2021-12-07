const createStatementData = (invoice, plays) => {
  const playFor = (aPerformance) => {
    return plays[aPerformance.playID];
  };

  const amountFor = (aPerformance) => {
    let result = 0;
    switch (aPerformance.play.type) {
      case "tragedy": {
        result = 40000;
        if (aPerformance.audience > 30)
          result += 1000 * (aPerformance.audience - 30);
        break;
      }
      case "comedy": {
        result = 30000;
        if (aPerformance.audience > 20)
          result += 10000 + 500 * (aPerformance.audience - 20);
        result += 300 * aPerformance.audience;
        break;
      }
      default:
        throw new Error(`알 수 없는 장르: ${aPerformance.play.type}`);
    }
    return result;
  };

  const totalAmount = (data) => {
    // let result = 0;
    // for (let perf of data.performances) {
    //   result += perf.amount;
    // }
    // return result;
    return data.performances.reduce((total, p) => total + p.amount, 0);
  };

  const volumeCreditsFor = (aPerformance) => {
    let result = 0;

    result += Math.max(aPerformance.audience - 30, 0);
    if (aPerformance.play.type === "comedy")
      result += Math.floor(aPerformance.audience / 5);

    return result;
  };

  const totalVolumeCredits = (data) => {
    // let result = 0;
    // for (let perf of data.performances) {
    //   result += perf.volumeCredits;
    // }
    // return result;
    return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
  };

  const enrichPerformance = (aPerformance) => {
    const result = Object.assign({}, aPerformance);
    result.play = playFor(result);
    result.amount = amountFor(result);
    result.volumeCredits = volumeCreditsFor(result);
    return result;
  };

  const result = {};
  result.customer = invoice.customer;
  result.performances = invoice.performances.map(enrichPerformance);
  result.totalAmount = totalAmount(result);
  result.totalVolumeCredits = totalVolumeCredits(result);
  return result;
};

export default createStatementData;
