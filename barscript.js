$(document).ready(function() {
  $("#chartSize").hide();
  $("#chartLabels").hide();
  $("#barSelect").hide();
});
function rangeFunction() {
  let maxRange = document.getElementById("maxValue").value;
  let range = document.getElementById("range");
  let step = maxRange / 10;
  for (let i = maxRange; i >= 0; i -= step) {
    let text = $("<p></p>").text(i);
    $("#range").prepend(text);
  } $("#chart").append(range);
  $("#rangeValue").hide();
  $("#chartSize").show();

} 
function labelFunction() {
  let xLabel = document.getElementById("xAxis").value;
  let yLabel = document.getElementById("yAxis").value;
  $("#yLabel").text(yLabel);
  $("#xLabel").text(xLabel);
  $("#chartLabels").hide();
  $("#barSelect").show();
}
function chartFunction() {
  let chart = document.getElementById("chart");
  let height = document.getElementById("chartHeight").value;
  let width = document.getElementById("chartWidth").value;
  chart.style.width = width + "px";
  chart.style.height = height + "px";
  $("#chartSize").hide();
  $("#chartLabels").show();
}
let barCounter = 0;
function barFunction() {
  let height = document.getElementById("barValue").value;
  let label = document.getElementById("barLabel").value;
  let color = document.getElementById("barColor").value;
let bar = document.createElement("div");
$(bar).addClass("bar");
barCounter++;
bar.textContent = label;
bar.style.width = (height) + "%";
bar.style.height = "10%";
bar.style.color = "white";
bar.style.backgroundColor = color;
$("#chart").prepend(bar);
}


