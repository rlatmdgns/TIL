const station = {
  name: "ZB1",
  readings: [
    { temp: 47, time: "2016-11-10 09:10" },
    { temp: 53, time: "2016-11-10 09:20" },
    { temp: 58, time: "2016-11-10 09:30" },
    { temp: 53, time: "2016-11-10 09:40" },
    { temp: 51, time: "2016-11-10 09:50" },
  ],
};

class NumberRange {
  constructor(min, max) {
    this._data = { min, max };
  }
  get min() {
    return this._data.min;
  }
  get max() {
    return this._data.max;
  }
  contains(arg) {
    return arg >= range.min && arg <= this.max;
  }
}

const operatingPlan = {
  temperatureFloor: 50,
  temperatureCeiling: 56,
};

const range = new NumberRange(
  operatingPlan.temperatureFloor,
  operatingPlan.temperatureCeiling
);

const readingsOutsideRange = (station, range) =>
  station.readings.filter((r) => !range.contains(r.temp));
console.log(readingsOutsideRange(station, range));
