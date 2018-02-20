var katzDeli = [];

function takeANumber(katzDeliLine, newCustomer) {
  var numOfPeopleInLine = katzDeliLine.length;
  katzDeliLine.push(newCustomer);
  return numOfPeopleInLine + 1;
}

