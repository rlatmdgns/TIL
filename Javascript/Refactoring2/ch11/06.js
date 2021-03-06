const thermostat = {
  selectedTemperature: 25,
  currentTemperature: 27,
};

class HeatingPlan {
  #max;
  #min;

  get targetTemperature(selectedTemperature) {
    if (selectedTemperature > this.#max) return this.#max;
    else if (selectedTemperature < this.#min) return this.#min;
    else return selectedTemperature;
  } 
}

const temperatureController = () => {
  const setToHeat = () => {};
  const setToCool = () => {};
  const setOff = () => {};

  const heatingPlan = new HeatingPlan();
  if (heatingPlan.targetTemperature(thermostat.selectedTemperature) > thermostat.currentTemperature)
    setToHeat();
  else if (heatingPlan.targetTemperature(thermostat.selectedTemperature) < thermostat.currentTemperature)
    setToCool();
  else setOff();
};
