
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment(10000, 5, 0.05)).toBeCloseTo(188.71, 2);
    expect(calculateMonthlyPayment(20000, 10, 0.06)).toBeCloseTo(221.61, 2);

});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10043,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('131.00');
});

it("should handle edge cases", function() {
  const result3 = calculateMonthlyPayment(0, 5, 0.05);
  expect(result3.toFixed(2)).toBe("0.00");

  const result4 = calculateMonthlyPayment(10000, 5, 0);
  expect(result4.toFixed(2)).toBe("0.00");
});
