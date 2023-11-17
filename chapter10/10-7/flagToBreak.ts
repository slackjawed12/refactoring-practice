let people = ["조커", "배트맨", "사루만"];
const sendAlert = () => {
  console.log("악당 나타남");
};

checkForMiscreants(people);

function checkForMiscreants(people) {
  if (people.some((p) => ["조커", "사루만"].includes(p))) {
    sendAlert();
  }
}
