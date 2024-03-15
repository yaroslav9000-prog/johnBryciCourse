 $('.nav-link:eq(1)').on('click', ()=>{
  $("#coinsContainer").empty();
  $('#coinsContainer').append('<div id="chartContainer" style="height: 300px; width: 100%"></div>');
  updateChartFun(myCoins);
 })
 
 
 function updateChartFun (someCoinsList) {
    
    let coinList = someCoinsList;
    for (let index = 0; index < coinList.length; index++) {
      coinList[index] = coinList[index].toUpperCase();
    }
    console.log(coinList.join(","));
    var myURL =
      "https://min-api.cryptocompare.com/data/pricemulti?fsyms=" +
      coinList.join(",") +
      "&tsyms=USD";

    var options = {
      title: {
        text: "Coin value at the time",
      },
      axisX: {
        title: "chart updates every 2 secs",
      },
      axisY: {
        suffix: "$",
      },
      toolTip: {
        shared: true,
      },
      legend: {
        cursor: "pointer",
        verticalAlign: "top",
        fontSize: 22,
        fontColor: "dimGrey",
        itemclick: toggleDataSeries,
      },
      data: [],
    };

    const updateOptions = (coinList) => {
      for (let index = 0; index < coinList.length; index++) {
        var dataObject = {};
        dataObject.type = "line";
        dataObject.xValueType = "dateTime";
        dataObject.yValueFormatString = "###.00$";
        dataObject.xValueFormatString = "hh:mm:ss TT";
        dataObject.showInLegend = true;
        dataObject.name = coinList[index];
        dataObject.dataPoints = [];
        options.data.push(dataObject);
      }
    };
    updateOptions(coinList);
    var chart = $("#chartContainer").CanvasJSChart(options);

    function toggleDataSeries(e) {
      if (
        typeof e.dataSeries.visible === "undefined" ||
        e.dataSeries.visible
      ) {
        e.dataSeries.visible = false;
      } else {
        e.dataSeries.visible = true;
      }
      e.chart.render();
    }

    var updateInterval = 2000;
    // initial value

    var time = new Date();
    // starting at 10.00 am
    time.setHours(time.getHours());
    time.setMinutes(time.getMinutes());
    time.setSeconds(time.getSeconds());
    time.setMilliseconds(time.getMilliseconds());

    function updateChart() {
      time.setTime(time.getTime() + updateInterval);
      $.getJSON(myURL, (data) => {
        let xValue = time.getTime();
        console.log(data["BTC"]);
        for (let index = 0; index < coinList.length; index++) {
          let dataPerCoin = {};
          let yValue = 0;
          console.log(data);
          if(data.Response == "Error"){
            yValue = 0
          }else{
          yValue = data[coinList[index]].USD;}
          // console.log(coinList[index]);
          dataPerCoin.x = xValue;
          dataPerCoin.y = yValue;
          console.log(yValue);
          options.data[index].dataPoints.push(dataPerCoin);
          options.data[index].legendText =
            `${coinList[index]} : ` + yValue + "$";
        }
      });

      // adding random value and rounding it to two digits.

      // pushing the new values
      // options.data[0].dataPoints.push({
      //   x: time.getTime(),
      //   y: yValue,
      // });

      // updating legend text with  updated with y Value
      // options.data[0].legendText = "Turbine 1 : " + yValue + "Wh";
      $("#chartContainer").CanvasJSChart().render();
    }
    // generates first set of dataPoints
    updateChart();
    setInterval(function () {
      updateChart();
      
    }, updateInterval);
  };


  