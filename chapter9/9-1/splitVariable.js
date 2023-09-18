function distanceTravelled(scenario, time) {
  let result;
  let primaryAcceleration = scenario.primaryForce / scenario.mass;
  let primaryTime = Math.min(time, scenario.delay);
  result = 0.5 * primaryAcceleration * primaryTime * primaryTime;
  let secondaryTime = time - scenario.delay;
  if (secondaryTime > 0) {
    let primaryVelocity = primaryAcceleration * scenario.delay;
    let acc = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
    result +=
      primaryVelocity * secondaryTime +
      0.5 * acc * secondaryTime * secondaryTime;
  }

  return result;
}

const scenario = {
  mass: 1,
  primaryForce: 10,
  secondaryForce: 20,
  delay: 10,
};

const time = 20;

console.log(distanceTravelled(scenario, time));
