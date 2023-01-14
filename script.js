var key = "8186ebd81588bdd5c6b95bc48397812e";
var city = "London";

//Takes current time and date
var date = moment().format("dddd, MMMM Do YYYY");
var dateTime = moment().format("YYYY-MM-DD HH:MM:SS");

var cityList = [];
//Will save the value of the search and save it to an array and storage
$(".search").on("click", function (event) {
  event.preventDefault();
  city = $(this).parent(".btnPar").siblings(".textVal").val().trim();
  if (city === "") {
    return;
  }
  cityList.push(city);

  localStorage.setItem("city", JSON.stringify(cityList));
  fiveForecastEl.empty();
  getHistory();
  getWeatherToday();
});
