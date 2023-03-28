const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);
const reducer = (accumulator, currentValue) => accumulator + currentValue;

function batteries(batteryBatches) {
  const totalBatteries = batteryBatches.reduce(reducer, 0);
  return totalBatteries;
}