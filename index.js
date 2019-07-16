function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(driver => driver.revenue > revenue);
}
function riverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver().map(driver => driver.name);
}
