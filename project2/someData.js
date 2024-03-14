let myCoin = '';
const liveUpdateURL = "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD";
const multiPrice = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD";
/*<script>
window.onload = function () {

var dataPoints1 = [];
var dataPoints2 = [];
var dataPoints3 = [];

var options = {
	title: {
		text: "Electricity Generation in Turbine"
	},
	axisX: {
		title: "chart updates every 2 secs"
	},
	axisY: {
		suffix: "Wh"
	},
	toolTip: {
		shared: true
	},
	legend: {
		cursor: "pointer",
		verticalAlign: "top",
		fontSize: 22,
		fontColor: "dimGrey",
		itemclick: toggleDataSeries
	},
	data: [{
		type: "line",
		xValueType: "dateTime",
		yValueFormatString: "###.00Wh",
		xValueFormatString: "hh:mm:ss TT",
		showInLegend: true,
		name: "Turbine 1",
		dataPoints: dataPoints1
	},
	{
		type: "line",
		xValueType: "dateTime",
		yValueFormatString: "###.00Wh",
		showInLegend: true,
		name: "Turbine 2",
		dataPoints: dataPoints2
	}, {
		type: "line",
		xValueType: "dateTime",
		yValueFormatString: "###.00Wh",
		showInLegend: true,
		name: "Turbine 2",
		dataPoints: dataPoints3
	}]
};

var chart = $("#chartContainer").CanvasJSChart(options);

function toggleDataSeries(e) {
	if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	}
	else {
		e.dataSeries.visible = true;
	}
	e.chart.render();
}

var updateInterval = 2000;
// initial value
var yValue1 = 800;
var yValue2 = 810;
var yValue3 = 780;

var time = new Date;
// starting at 10.00 am
time.setHours(10);
time.setMinutes(00);
time.setSeconds(00);
time.setMilliseconds(00);

function updateChart(count) {
	count = count || 1;
	var deltaY1, deltaY2, deltaY3;
	for (var i = 0; i < count; i++) {
		time.setTime(time.getTime() + updateInterval);
		deltaY1 = -1 + Math.random() * (1 + 1);
		deltaY2 = -1 + Math.random() * (1 + 1);
		deltaY3 = -1 + Math.random() * (1 + 1);

		// adding random value and rounding it to two digits. 
		yValue1 = Math.round((yValue1 + deltaY1) * 100) / 100;
		yValue2 = Math.round((yValue2 + deltaY2) * 100) / 100;
		yValue3 = Math.round((yValue3 + deltaY3) * 100) / 100;

		// pushing the new values
		dataPoints1.push({
			x: time.getTime(),
			y: yValue1
		});
		dataPoints2.push({
			x: time.getTime(),
			y: yValue2
		});
		dataPoints3.push({
			x: time.getTime(),
			y: yValue3
		});
	}

	// updating legend text with  updated with y Value 
	options.data[0].legendText = "Turbine 1 : " + yValue1 + "Wh";
	options.data[1].legendText = "Turbine 2 : " + yValue2 + "Wh";
	options.data[2].legendText = "Turbine 3 : " + yValue3 + "Wh";
	$("#chartContainer").CanvasJSChart().render();
}
// generates first set of dataPoints 
updateChart(100);
setInterval(function () { updateChart() }, updateInterval);

}
</script> */
