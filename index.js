function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(driver => driver.revenue > revenue);
}
function driverNamesWithRevenueOver (drivers, revenue){
  return drivers.filter(driver => driver.revenue > revenue).map(driver => driver.name);
}
function exactMatch(drivers, obj){
  let key = object.key(obj);
  return drivers.filter(driver => driver[key[0]] === obj[key[0]]);
}
