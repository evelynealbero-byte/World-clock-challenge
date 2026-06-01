function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss[ <small>]A[</small>]",
  );

  let alicanteElement = document.querySelector("#alicante");
  let alicanteDateElement = alicanteElement.querySelector(".date");
  let alicanteTimeElement = alicanteElement.querySelector(".time");
  let alicanteTime = moment().tz("Europe/Madrid");

  alicanteDateElement.innerHTML = alicanteTime.format("MMMM Do YYYY");
  alicanteTimeElement.innerHTML = alicanteTime.format(
    "h:mm:ss[ <small>]A[</small>]",
  );
}
updateTime();
setInterval(updateTime, 1000);
