// 조건식을 반대로 만들어서 리팩터링
function adjustedCapital(anInstrument) {
  let result = 0;
  if (
    anInstrument.capital <= 0 ||
    anInstrument.interestRate <= 0 ||
    anInstrument.duration <= 0
  )
    return result;

  return (
    (anInstrument.income / anInstrument.duration) *
    anInstrument.adjustmentFactor
  );
}
