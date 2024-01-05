const points: { elevation: number }[] = [];
const totalTime = calculateTime();
const totalDistance = calculateDistance();
const totalAscent = calculateAscent();

const pace = totalTime / 60 / totalDistance;

function calculateAscent() {
  let result = 0;
  for (let i = 0; i < points.length; i++) {
    const verticalChange = points[i].elevation - points[i - 1].elevation;
    result += verticalChange > 0 ? verticalChange : 0;
  }
  return result;
}

function calculateTime() {
  const result = 1;
  // ...
  return result;
}

function calculateDistance() {
  const result = 1;
  // ...
  return result;
}
