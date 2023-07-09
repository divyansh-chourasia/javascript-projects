const endDate = "4 september 2023 3:39 PM";

document.getElementById("end-Date").innerText = endDate;

const inputs = document.querySelectorAll("input");
// const clock = () => {

// }

function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;
  console.log(end);
  console.log(now);
  console.log(diff);

  if (diff < 0) return;

  inputs[0].value = Math.floor(diff / 3600 / 24);
  inputs[1].value = Math.floor(diff / 3600) % 24;
  inputs[2].value = Math.floor(diff / 60) % 60;
  inputs[3].value = Math.floor(diff) % 60;

  // convert into days
  console.log(Math.floor(diff / 3600 / 24));

  // convert into hours
  console.log(Math.floor(diff / 3600) % 24);

  //convert into minutes
  console.log(Math.floor(diff / 60) % 60);

  //convert into minutes
  console.log(Math.floor(diff) % 60);
}

clock();

setInterval(() => {
  clock();
}, 1000);
