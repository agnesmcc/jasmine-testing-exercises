
let values = {
  amount: 1000,
  years: 2,
  rate: 2.99
}

it('should calculate the monthly rate correctly', function () {
  let monthly = calculateMonthlyPayment(values);
  expect(monthly).toEqual("250.37");
});


it("should return a result with 2 decimal places", function() {
  let monthly = calculateMonthlyPayment(values);
  expect(parseFloat(monthly)).toBeCloseTo(250.37, 2);
});

/// etc
