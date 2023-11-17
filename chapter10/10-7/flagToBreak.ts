let people = ["조커", "배트맨", "사루만"];
const sendAlert = () => {
  console.log("악당 나타남");
};

checkForMiscreants(people);

function checkForMiscreants(people) {
  let found = false;
  for (const p of people) {
    if (!found) {
      if (p === "조커") {
        sendAlert();
        return;
      }
      if (p === "사루만") {
        sendAlert();
        found = true;
      }
    }
  }
}
