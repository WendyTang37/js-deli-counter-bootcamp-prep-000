var katzDeli = [];

function takeANumber(katzDeliLine, newCustomer) {
  var numOfPeopleInLine = katzDeliLine.length;
  katzDeliLine.push(newCustomer);
  return `Welcome, ${newCustomer}. You are number ${numOfPeopleInLine + 1} in line.`;
}

function nowServing() {
  
}
